//--------------------< Import >--------------------
import multer from "multer";

//--------------------< Multer >--------------------
// # thumbnail
export const thumbnailUpload = multer({
  dest: "uploads/thumbnail",
  limits: {
    fileSize: 4000000,
  }
})