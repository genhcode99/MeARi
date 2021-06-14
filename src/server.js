require("dotenv").config()
//--------------------< Express >--------------------
import express from "express"
const app = express();


//--------------------< Import >--------------------
// # router
import rootRouter from "./router/rootRouter";
import userRouter from "./router/userRouter";
import courseRouter from "./router/courseRouter";

// # middle ware
import logger from "morgan";
import session from "express-session";
import flash from "express-flash";
import { localMiddleware } from "./middlewares"
//--------------------< Pug >--------------------
app.set("view engine", "pug");


//--------------------< CWD >--------------------
app.set("views", process.cwd() + "/src/views");


//--------------------< Middle ware >--------------------
app.use(flash());
app.use(logger("dev"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(session({
  secret: process.env.COOKIE_SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use(localMiddleware);


//--------------------< Guide Folder>--------------------
app.use("/uploads", express.static("uploads"));
app.use("/assets", express.static("assets"))
app.use("/images", express.static("images"))

//--------------------< Router >--------------------
app.use("/", rootRouter);
app.use("/users", userRouter);
app.use("/course", courseRouter);


//--------------------< Express Export >--------------------
export default app;