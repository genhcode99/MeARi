//--------------------< Express >--------------------
import express from "express"
const app = express();

//--------------------< Import >--------------------
import rootRouter from "./router/rootRouter"

//--------------------< Pug >--------------------
app.set("view engine", "pug");


//--------------------< CWD >--------------------
app.set("views", process.cwd() + "/src/views");


//--------------------< Router >--------------------
app.use("/", rootRouter);


//--------------------< Express Export >--------------------
export default app;