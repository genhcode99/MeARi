import Course from '../model/Course'

//--------------------< Get Home >--------------------
export const getHome = async (req, res) => {
  const courses = await Course.find({}).sort({ createdAt: '1' })
  return res.render('home', { courses })
}
