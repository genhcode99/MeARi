//--------------------< Import >--------------------
import multer from "multer";

//--------------------< local Middle Ware >--------------------
export const localMiddleware = (req, res, next) => {
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.loggedInUser = req.session.user;
  next();
};

//--------------------< Multer >--------------------
// # thumbnail
export const thumbnailUpload = multer({
  dest: "uploads/thumbnail"
})

export const voiceUpload = multer({
  dest: "uploads/voices"
});