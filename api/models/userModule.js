import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 6,
      max: 30,
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
      min: 8,
      max: 30,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
