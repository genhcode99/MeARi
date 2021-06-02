//--------------------< Import>--------------------
import Course from "../model/Course";

//--------------------< Course Main >--------------------
export const getCourseMain = async (req, res) => {
  const courses = await Course.find({}).sort({
    createdAt: "1"
  })
  return res.render("courses/courseMain", { courses });
};

//--------------------< Course >--------------------
export const getCourse = (req, res) => {
  return res.render("courses/course")
}

//--------------------< Upload Course>--------------------
export const getUploadCourse = (req, res) => res.render("course/uploadCourse")

export const postUploadCourse = async (req, res) => {
  const { title, description } = req.body;
  const thumbnail = req.file;
  console.log(thumbnail.path);
  
  try {
    const newCourse = await Course.create({
      title,
      description,
      thumbnailUrl : thumbnail.path
    });
    return res.redirect("/course");
  } catch(error) {
    console.log(error);
    return res.redirect("/");
  }
}