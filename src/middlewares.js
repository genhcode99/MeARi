//--------------------< Import >--------------------
import multer from "multer";

//--------------------< Multer >--------------------
// # thumbnail
export const thumbnailUpload = multer({
  dest: "uploads/thumbnail"
})

export const voiceUpload = multer({
  dest: "uploads/voices"
});