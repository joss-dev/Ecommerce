// LIBRARIES
import { Router } from "express";
// Routes
import customerRouter from "../api/customer/routes";
import userRouter from "../api/user/routes";
import productRouter from "../api/product/routes";

const apiRouter = Router();

apiRouter.use("/auth", customerRouter);
apiRouter.use("/user", userRouter)
apiRouter.use("/product", productRouter)

export default apiRouter;
