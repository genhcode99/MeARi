require("dotenv").config()

import mongoose from "mongoose";

mongoose.connect(process.env.DB_URL,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});


const db = mongoose.connection;

const handleError = (error) => console.log("❌ DB Error", error);
db.on("error", handleError);

const handleOpen = () => console.log("Connected to DB ✅");
db.once("open",handleOpen)