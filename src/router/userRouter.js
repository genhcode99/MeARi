import express from "express";

//--------------------< Import >--------------------
import {
  getUserProfile,
  getJoin,
  postJoin,
  getLogin,
  postLogin,
  getLogout
} from "../controllers/userController";
import User from "../model/User";


const userRouter = express.Router();

//--------------------< User Profile >--------------------
userRouter
  .route("/:id([0-9a-f]{24})")
  .get(getUserProfile);

//--------------------< Join >--------------------
userRouter
  .route("/join")
  .get(getJoin)
  .post(postJoin);

//--------------------< Login >--------------------
userRouter
  .route("/login")
  .get(getLogin)
  .post(postLogin);

//--------------------< Login >--------------------
userRouter.route("/logout").get(getLogout);

export default userRouter;