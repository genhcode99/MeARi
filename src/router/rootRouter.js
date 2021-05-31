import express from "express";

//--------------------< Import >--------------------
import { getHome } from "../controllers/rootController"


//--------------------< Root Router >--------------------
const rootRouter = express.Router();


//--------------------< Home >--------------------
rootRouter.route("/").get(getHome);


export default rootRouter;