import express from "express";

//--------------------< Import >--------------------
import { getLecture } from "../controllers/lectureController";


const lectureRouter = express.Router();

//--------------------< Lecture >--------------------
lectureRouter.route("/").get(getLecture);

export default lectureRouter;