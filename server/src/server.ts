import "dotenv/config";

import mongoose from "mongoose";
import app from "./app";
mongoose.connect(process.env.MONGO_URI!).then(() => {
  console.log("mongo connected");

  app.listen(process.env.PORT, () => {
    console.log("Server Started");
  });
});
