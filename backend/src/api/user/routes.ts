import { Router } from "express";
import userController from "../user/controller"; 
import  authMiddleware  from "../../middleware/authmiddelware";

const userRouter = Router();

userRouter.post(
    "/me", 
    userController.getUserInfo
);
export default userRouter;