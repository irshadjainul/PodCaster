import mongoose from "mongoose";

const userSchema =new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      unique: true,
      required: true,
    },
    podcasts: [
      {
        type: mongoose.Types.ObjectId,
        ref: "podcasts",
      },
    ],
  },
  { timeStamps: true }
);

const userModel=mongoose.model("user",userSchema)
export default userModel