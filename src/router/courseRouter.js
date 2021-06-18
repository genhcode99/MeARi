import express from 'express'

//--------------------< Import >--------------------
import { thumbnailUpload, voiceUpload } from '../middlewares'
import {
  getCourse,
  getCourseMain,
  getUploadCourse,
  postUploadCourse,
  getUploadEcho,
  postUploadEcho,
  getEcho,
  getUploadMeari,
  postUploadMeari,
} from '../controllers/courseController'

const courseRouter = express.Router()

//--------------------< Course >--------------------
courseRouter.route('/:id([0-9a-f]{24})').get(getCourse)

//--------------------< Upload Cource>--------------------
courseRouter
  .route('/upload-course')
  .get(getUploadCourse)
  .post(thumbnailUpload.single('thumbnail'), postUploadCourse)

//--------------------< Echo >--------------------
courseRouter.route('/echo/:id([0-9a-f]{24})').get(getEcho)

//--------------------< Upload Echo >--------------------
courseRouter
  .route('/:id([0-9a-f]{24})/uploadecho')
  .get(getUploadEcho)
  .post(postUploadEcho)

//--------------------< Upload MeARi >--------------------
courseRouter
  .route('/echo/:id([0-9a-f]{24})/upload-meari')
  .get(getUploadMeari)
  .post(
    voiceUpload.fields([{ name: 'koVoice' }, { name: 'enVoice' }]),
    postUploadMeari,
  )

export default courseRouter
