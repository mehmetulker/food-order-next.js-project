//Veritabanı bağlantısı için yardımcı fonksiyon
import User from "@/models/Users";
import dbConnect from "@/util/dbConnection";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  await dbConnect();

  const users = await User.find({});

  return NextResponse.json({
    message: "Connected to the database (GET)",
    users,
  });
}

export async function POST(req) {
  await dbConnect();
  const body = await req.json();
  const { email } = body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.error("Failed to create user:", error);
    return NextResponse.json(
      { message: "Failed to create user", error: error.message },
      { status: 500 }
    );
  }
}
