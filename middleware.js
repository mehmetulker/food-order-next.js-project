import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { jwtVerify } from "jose";

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  const adminToken = request.cookies.get("token")?.value ?? null;
  const userTokenGithub =
    request.cookies.get("next-auth.session-token")?.value ?? null;

  const userTokenLogin = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
    secureCookie: process.env.NODE_ENV === "production",
  });

  const isLoggedIn = userTokenGithub || userTokenLogin;

  // 🔍 Loglama
  console.log("admin token:", adminToken);
  console.log("user token (GitHub):", userTokenGithub);
  console.log("user token (login):", userTokenLogin);

  // Admin token kontrolü
  if (adminToken) {
    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET);
      const { payload } = await jwtVerify(adminToken, secret);

      const isAdmin = payload.email === process.env.ADMIN_USERNAME;

      if (isAdmin && pathname === "/admin") {
        return NextResponse.redirect(new URL("/admin/profile", request.url));
      }

      return NextResponse.next();
    } catch (err) {
      console.error(" Admin token doğrulama hatası:", err);
      return NextResponse.redirect(new URL("/admin", request.url));
    }
  }

  // User token kontrolü
  if (isLoggedIn) {
    // User `/auth` sayfasına gitmeye çalışıyorsa -> yönlendir
    if (pathname.startsWith("/auth")) {
      return NextResponse.redirect(new URL("/profile", request.url));
    }

    // `/profile`'deyse yönlendirme yok, devam
    return NextResponse.next();
  }

  //  Token yoksa ama `/profile`'a giriyorsa → /auth
  if (isLoggedIn && pathname.startsWith("/profile")) {
    return NextResponse.redirect(new URL("/auth", request.url));
  }

  // Diğer açık sayfalar
  return NextResponse.next();
}

//  Middleware'in çalışacağı sayfalar
export const config = {
  matcher: [
    "/",
    "/auth",
    "/admin",
    "/admin/:path*",
    "/profile",
    "/profile/:path*",
  ],
};
