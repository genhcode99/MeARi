//--------------------< Import>--------------------
import { Mongoose } from "mongoose";
import Course from "../model/Course";
import Echo from "../model/Echo";

//--------------------< Course Main >--------------------
export const getCourseMain = async (req, res) => {
  const courses = await Course.find({}).sort({
    createdAt: "1"
  })
  return res.render("courses/courseMain", { courses });
};

//--------------------< Course >--------------------
export const getCourse = async (req, res) => {
  const { id } = req.params;
  const course = await Course.findById(id).populate("echos");
  const { echos } = course
  console.log(echos);
  return res.render("courses/course",{course, echos})
}

//--------------------< Upload Course>--------------------
export const getUploadCourse = (req, res) => res.render("courses/uploadCourse")

export const postUploadCourse = async (req, res) => {
  const { title, description } = req.body;
  const thumbnail = req.file;
  
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

//--------------------< Echo >--------------------
export const getEcho = (req, res) => {
  return res.render("courses/echo");
}

//--------------------< Upload Echo >--------------------
export const getUploadEcho = async (req, res) => {
  const { id } = req.params;
  return res.render("courses/uploadEcho");
};

export const postUploadEcho = async (req, res) => {
  const { title } =req.body;
  console.log(title)
  const cousreId = req.params.id;
  const newEcho = await Echo.create({
    title
  });
  const course = await Course.findById(cousreId);
  course.echos.push(newEcho._id);
  course.save();
  return res.redirect(`/course/${cousreId}`);
}