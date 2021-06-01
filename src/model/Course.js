import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  
  title: {type: String, required: true},

  thumbnailUrl : {type: String, required: true},

  description: {type: String, required: true},

  echo: [{type: mongoose.Schema.Types.ObjectId, ref:""}],

});

const Course = mongoose.model("Course", courseSchema);

export default Course;