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


//--------------------< Pug >--------------------
app.set("view engine", "pug");


//--------------------< CWD >--------------------
app.set("views", process.cwd() + "/src/views");


//--------------------< Middle ware >--------------------
app.use(logger("dev"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());


//--------------------< Guide Folder>--------------------
app.use("/uploads", express.static("uploads"));


//--------------------< Router >--------------------
app.use("/", rootRouter);
app.use("/users", userRouter);
app.use("/course", courseRouter);


//--------------------< Express Export >--------------------
export default app;