import mongoose from 'mongoose'

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },

  thumbnailUrl: { type: String, required: true },

  description: { type: String, required: true },

  echos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Echo' }],

  createdAt: { type: Date, required: true, default: Date.now },
})

const Course = mongoose.model('Course', courseSchema)

export default Course
