import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/userRoute.js";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
  try {
    console.log("Database Connected Successfully");
  } catch (err) {
    console.log(err);
  }
});
const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.use("/api/user", userRouter);
