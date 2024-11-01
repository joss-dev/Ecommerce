// LIBRARIES
import { Router } from "express";
// CONTROLLERS
import customerController from "./controller";
// MIDDLEWARES
import { uploadFields } from "../../middleware/uploadFields.middlewares";
import schemaValidator from "../../middleware/schemaValidators.middlewares";
// VALIDATORS
import { customerCreatePayloadValidator, customerLoginPayloadValidator } from "./validator";

const customerRouter = Router();

customerRouter.post(
    "/register",
    uploadFields,
    schemaValidator(customerCreatePayloadValidator, null),
    customerController.register
);


customerRouter.post(
    "/login",
    schemaValidator(customerLoginPayloadValidator, null),
    customerController.login
);

customerRouter.post(
    "/logout",
    
    customerController.logout
);

export default customerRouter;
