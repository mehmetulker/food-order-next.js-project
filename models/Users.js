import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: false,
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

      required: function () {
        return !this.provider;
      },
    },
    confirmPassword: {
      type: String,

      required: function () {
        return !this.provider;
      },
    },
    address: {
      type: String,
    },
    bio: {
      type: String,
    },

    provider: {
      type: String,
    },
    providerAccountId: {
      type: String,
    },
    image: {
      type: String,
    },
    emailVerified: {
      type: Date,
    },
  },
  { timestamps: true }
);

// Aynı e-posta ile hem OAuth hem credentials kullanıcı olabilir
// Bu indeks, kullanıcıyı provider'a göre hızlıca bulmamızı sağlar
userSchema.index({ email: 1, provider: 1 }, { unique: true });

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;

// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema(
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

//     bio: {
//       type: String,
//     },
//   },
//   { timestamps: true }
// );

// const User = mongoose.models.User || mongoose.model("User", userSchema);

// export default User;
