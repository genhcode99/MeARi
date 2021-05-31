//--------------------< Express >--------------------
import express from "express"
const app = express();


//--------------------< Import >--------------------
import rootRouter from "./router/rootRouter";
import userRouter from "./router/userRouter";
import lectureRouter from "./router/lectureRouter";


//--------------------< Pug >--------------------
app.set("view engine", "pug");


//--------------------< CWD >--------------------
app.set("views", process.cwd() + "/src/views");


//--------------------< Router >--------------------
app.use("/", rootRouter);
app.use("/users", userRouter);
app.use("/lecture", lectureRouter);


//--------------------< Express Export >--------------------
export default app;