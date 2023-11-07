import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 6,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      min: 6,
      max: 30,
    },
    password: {
      type: String,
      require: true,
      min: 8,
      max: 20,
    },
    avatar: {
      type: String,
      default:
        "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
