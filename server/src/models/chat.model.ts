import mongoose from "mongoose";

const chatSchema = new mongoose.Schema(
  {
    userId: String,
    question: String,
    answer: String,
  },
  {timestamps: true,},
);

export default mongoose.model("Chat", chatSchema);
