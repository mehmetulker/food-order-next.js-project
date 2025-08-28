import User from "@/models/Users";
import dbConnect from "@/util/dbConnection";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
  await dbConnect();
  const body = await req.json();
  const { email, password, confirmPassword, ...rest } = body;

  try {
    // 🔍 Kullanıcı zaten var mı?
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 } // ⚠️ Status code önemli
      );
    }

    // 🔐 Şifreyi hash'le
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const hashedConfirm = await bcrypt.hash(confirmPassword, salt);

    // 👤 Yeni kullanıcı oluştur
    const newUser = new User({
      email,
      password: hashedPassword,
      confirmPassword: hashedConfirm,
      ...rest,
    });

    await newUser.save();

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error("Failed to create user:", error);
    return NextResponse.json(
      { message: "Failed to create user", error: error.message },
      { status: 500 }
    );
  }
}

// export async function POST(req, res) {
//   await dbConnect();
//   const body = await req.json(); // req.body yerine bunu kullanın
//   console.log(body);
//   const user = await User.findOne({ email: body.email });

//   if (user) {
//     return NextResponse.json({
//       message: "User already exists",
//     });
//   }
//   try {
//     const newUser = await new User(body); // Kullanıcıyı oluşturun generate salt to has password
//     const salt = await bcrypt.genSalt(10); // create hash
//     newUser.password = await bcrypt.hash(newUser.password, salt);
//     newUser.confirmPassword = await bcrypt.hash(newUser.confirmPassword, salt);
//     await newUser.save();

//     return NextResponse.json(newUser, { status: 201 }); // Başarılı yanıt için status kodu ekleyin
//   } catch (error) {
//     console.error("Error creating user:", error);
//     return NextResponse.json(
//       { message: "Failed to create user", error: error.message },
//       { status: 400 }
//     ); // Hata yanıtı için status kodu ekleyin
//   }
// }
