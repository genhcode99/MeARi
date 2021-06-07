import User from "../model/User"
import dotenv from "dotenv"
import bcrypt from "bcrypt"

//--------------------< User Profile >--------------------
export const getUserProfile = (req, res) => res.render("users/userProfile")

//--------------------< Join >--------------------
export const getJoin = (req, res) => {
  return res.render("users/join")
};

export const postJoin = async (req, res) => {
  const {email, username, password, password2, country, code} = req.body;
// # Confirm Password
  if(`${password}` !== `${password2}`){
    req.flash("notice","Please check your password again.")
    return res.status(400).redirect("/users/join");
  }
// # Confirm Email
  const exists = await User.exists({email})
  if(exists) {
    req.flash("notice", "Email already used.")
    return res.status(400).redirect("/users/join");
  }
// # Create New User
  const newUser = await User.create({
    email,
    username,
    password,
    country
  });
  console.log(process.env.MANAGER_CODE)
  if(`${code}` === `${process.env.MANAGER_CODE}`) {
    await User.findOneAndUpdate({email},{manager : "true"})
  }
// # manager
  return res.status(201).redirect("/");
};


//--------------------< Log In >--------------------
export const getLogin = (req, res) => {
  return res.render("users/login")
};

export const postLogin = async (req, res) => {
  const {email, password} = req.body;
  const user = await User.findOne({ email });
// # Confrim Email
  if(!user) {
    req.flash("notice","Email not found.")
    return res.status(404).redirect("/users/login");
  }
// # Confirm Password
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) {
    req.flash("notice","The password is incorrect.");
    return res.status(403).redirect("/users/login")
  }
  req.session.loggedIn = true;
  req.session.user = user;
  req.flash("notice","You are logged in.")
  return res.redirect("/");
}
//--------------------< Log In >--------------------
export const getLogout = async (req, res) =>{
  await req.session.destroy();
  return res.redirect("/")
};
