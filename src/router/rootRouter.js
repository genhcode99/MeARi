import express from "express";

//--------------------< Import >--------------------
import { handleHome } from "../controllers/rootController"


//--------------------< Root Router >--------------------
const rootRouter = express.Router();


//--------------------< Home >--------------------
rootRouter.route("/").get(handleHome);


export default rootRouter;