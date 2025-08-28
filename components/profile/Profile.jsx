import ProfileClient from "@/components/profile/ProfileClient"; // Client bileşeni
import { getServerSession } from "next-auth";
import axios from "axios";
import { authOptions } from "@/app/api/auth/[...nextauth]/route"; // Auth ayarları

export default async function ProfilePage() {
  let user = null;
  const session = await getServerSession(authOptions);

  if (!session) {
    // Kullanıcı giriş yapmamışsa login sayfasına yönlendir
    redirect("/auth");
  }

  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/users/`,
      {
        email: session.user.email,
      }
    );

    user = res.data;
  } catch (error) {
    console.log(error);
  }

  return <ProfileClient session={session} user={user} />;
}
