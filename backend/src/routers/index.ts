// LIBRARIES
import { Router } from "express";
// Routes
import customerRouter from "../api/customer/routes";

const apiRouter = Router();

apiRouter.use("/auth", customerRouter);

export default apiRouter;
