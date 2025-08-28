import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: String,
    },
    job: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    confirmPassword: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },

    bio: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
// import mongoose from "mongoose";

// const UserSchema = mongoose.Schema(
//   {
//     fullName: {
//       type: String,
//       required: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     phoneNumber: {
//       type: String,
//     },
//     job: {
//       type: String,
//     },
//     password: {
//       type: String,
//       required: true,
//     },

//     confirmPassword: {
//       type: String,
//       required: true,
//     },
//     address: {
//       type: String,
//     },
//   },
//   { timestamps: true } // createdAt ve updatedAt alanları otomatik olarak oluşturulacak
// );
// // tanımladığım şemayı User adında bir modele dönüştürüyorum. Bu model, MongoDB'de "users" koleksiyonunu temsil eder.

// const User = mongoose.models.User || mongoose.model("User", UserSchema);

// export default User;
