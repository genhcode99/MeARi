import express from "express";

//--------------------< Import >--------------------
import { getUserProfile } from "../controllers/userController";


const userRouter = express.Router();

//--------------------< User Profile >--------------------
userRouter.route("/:id").get(getUserProfile);

export default userRouter;