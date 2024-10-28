// LIBRARIES
import { Router } from "express";
// Routes
import customerRouter from "../api/customer/routes";
import userRouter from "../api/user/routes";

const apiRouter = Router();

apiRouter.use("/auth", customerRouter);
apiRouter.use("/user", userRouter)

export default apiRouter;
