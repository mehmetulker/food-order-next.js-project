import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req) {
  const body = await req.json();
  const { email, password } = body;

  //console.log("Admin", body);

  // JWT Token oluştur
  const token = jwt.sign(
    { email: process.env.ADMIN_USERNAME },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  try {
    if (
      email === process.env.ADMIN_USERNAME &&
      password === process.env.ADMIN_PASSWORD
    ) {
      // Önce cevap oluştur
      const response = NextResponse.json(
        { message: "Login başarılı" },
        { status: 200 }
      );

      //console.log("Admin Login ", token);

      // Sonra cookie ayarla
      response.cookies.set("token", token, {
        httpOnly: true,
        secure: true,
        path: "/",
        maxAge: 60 * 60, // 1 saat
      });

      return response;
    } else {
      return NextResponse.json(
        { message: "Email veya şifre yanlış" },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Server error", error: error.message },
      { status: 500 }
    );
  }
}
