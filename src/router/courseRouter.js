import express from "express";

import { thumbnailUpload } from "../middlewares"

//--------------------< Import >--------------------
import { getCourse,getCourseMain, getUploadCourse, postUploadCourse } from "../controllers/courseController";


const courseRouter = express.Router();

//--------------------< Course Main >--------------------
courseRouter.route("/").get(getCourseMain);

//--------------------< Course >--------------------
courseRouter.route("/:id([0-9a-f]{24})").get(getCourse)


//--------------------< Upload Cource>--------------------
courseRouter
  .route("/upload-course")
  .get(getUploadCourse)
  .post(thumbnailUpload.single("thumbnail"), postUploadCourse);


export default courseRouter;