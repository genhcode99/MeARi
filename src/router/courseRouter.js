import express from "express";

import { thumbnailUpload } from "../middlewares"

//--------------------< Import >--------------------
import { getCourse, getUploadCourse, postUploadCourse } from "../controllers/courseController";


const courseRouter = express.Router();

//--------------------< Course >--------------------
courseRouter.route("/").get(getCourse);

//--------------------< Upload Cource>--------------------
courseRouter
  .route("/upload-course")
  .get(getUploadCourse)
  .post(thumbnailUpload.single("thumbnail"), postUploadCourse);


export default courseRouter;