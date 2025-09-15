import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/util/mongo";
import User from "@/models/Users";
import dbConnect from "@/util/dbConnection";
import bcrypt from "bcryptjs";

dbConnect();
const handler = NextAuth({
  //adapter: MongoDBAdapter(clientPromise)
  // We removed the MongoDB Adapter because we manage user data manually.
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      httpOptions: {
        timeout: 1000000, // 10 saniye
      },
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const user = await User.findOne({ email: credentials.email });
          if (user && user.password) {
            const isValid = await bcrypt.compare(
              credentials.password,
              user.password
            );
            if (isValid) {
              return {
                id: user._id.toString(),
                name: user.fullName,
                email: user.email,
                image: user.image,
              };
            }
          }

          return null;
        } catch (error) {
          console.error("Credentials authorize error:", error);
          return null;
        }
      },
    }),
  ],

  pages: {
    signIn: "/auth",
    error: "/auth",
  },
  callbacks: {
    async signIn({ user, account }) {
      try {
        let existingUser = await User.findOne({ email: user.email });

        if (!existingUser) {
          const newUser = await User.create({
            fullName: user.name,
            email: user.email,
            image: user.image,
            provider: account.provider,
            providerAccountId: account.providerAccountId,
            ...(account.provider !== "credentials" && {
              emailVerified: new Date(),
            }),
          });
          user.id = newUser._id.toString();
          console.log("Created a new user:", user.email);
        } else {
          user.id = existingUser._id.toString();
          console.log("Mevcut kullanıcı giriş yaptı:", user.email);
        }

        return true;
      } catch (error) {
        console.error("SignIn callback hatası:", error);
        return false;
      }
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
      }
      return session;
    },
  },

  session: {
    // strategy: "database", // Bu kısmı eklemen gerekiyor
    strategy: "jwt", // Token üzerinden çalışır Bu sistemde oturum bilgisi (session), veritabanına değil, JWT token içine yazılır.
  },

  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
