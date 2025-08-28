import User from "@/models/Users";
import dbConnect from "@/util/dbConnection";
import { NextResponse } from "next/server";

import bcrypt from "bcryptjs";

export async function PUT(req, context) {
  await dbConnect();
  const { params } = context;
  const { id } = await params;
  if (!id) {
    return NextResponse.json(
      { message: "User ID is required" },
      { status: 400 }
    );
  }

  const body = await req.json();
  const { email, ...rest } = body;
  console.log("id", id);
  console.log("body", body);

  try {
    const user = await User.findById(id);
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    if (body.password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(body.password, salt);
      body.password = hashedPassword;
      body.confirmPassword = hashedPassword; // Şifreyi güncellerken confirmPassword'ı da aynı şekilde güncelle
      console.log("Updated password", body.password);
    }

    // ✅ Sadece gelen alanları güncelle
    Object.assign(user, body); // body'deki tüm alanları kullanıcıya aktar

    await user.save();

    return NextResponse.json(
      { message: "User updated", user },
      { status: 200 }
    );
  } catch (error) {
    console.error("Update failed:", error);
    return NextResponse.json(
      { message: "Failed to update user", error: error.message },
      { status: 500 }
    );
  }
}
