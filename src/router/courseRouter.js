import express from "express";

//--------------------< Import >--------------------
import { thumbnailUpload } from "../middlewares"
import {
  getCourse,
  getCourseMain,
  getUploadCourse,
  postUploadCourse,
  getUploadEcho,
  postUploadEcho,
  getEcho
} from "../controllers/courseController";


const courseRouter = express.Router();

//--------------------< Course Main >--------------------
courseRouter
  .route("/")
  .get(getCourseMain);

//--------------------< Course >--------------------
courseRouter
  .route("/:id([0-9a-f]{24})")
  .get(getCourse)

//--------------------< Upload Cource>--------------------
courseRouter
  .route("/upload-course")
  .get(getUploadCourse)
  .post(thumbnailUpload.single("thumbnail"), postUploadCourse);

//--------------------< Echo >--------------------
courseRouter
 .route("/echo/:id([0-9a-f]{24})")
 .get(getEcho);

//--------------------< Upload Echo >--------------------
courseRouter
  .route("/:id([0-9a-f]{24})/uploadecho")
  .get(getUploadEcho)
  .post(postUploadEcho);


export default courseRouter;