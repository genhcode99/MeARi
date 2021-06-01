//--------------------< Course>--------------------
export const getCourse = (req, res) => res.render("lectures/courseMain")

//--------------------< Upload Course>--------------------
export const getUploadCourse = (req, res) => res.render("lectures/uploadCourse")

export const postUploadCourse = (req, res) => {
  const { title, description } = req.body;
  const thumbnail = req.file;
  console.log(thumbnail.path);
}