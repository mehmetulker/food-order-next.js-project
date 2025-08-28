import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function POST(req) {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    return NextResponse.json({ message: "Token bulunamadı" }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const response = NextResponse.json({ message: "Çıkış başarılı" });

    response.cookies.set("token", "", {
      httpOnly: true,
      secure: true,
      path: "/",
      maxAge: 0,
    });

    // console.log("Çıkış yapan kullanıcı:", decoded.email);

    return response;
  } catch (err) {
    return NextResponse.json({ message: "Geçersiz token" }, { status: 401 });
  }
}
