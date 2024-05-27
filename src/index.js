import mongoose from "mongoose";
import { DB_NAME } from "./constants";

import express from "express";
const app = express();

/*
    BASIC APPROACH FOR LISTENING PORT


(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.error("App Event Error", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log("Server is running on port", process.env.PORT);
    });
  } catch (error) {
    console.log(error);
  }
})();*/
