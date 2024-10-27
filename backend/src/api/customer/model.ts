// LIBRARIES
import { Schema } from "mongoose";
// MODELS
import User from "../user/model";
// CONSTANTS
import { Genders } from "../../constants/Genders";
// INTERFACES
import { ICustomer } from "./interface";

const Customer = User.discriminator(
    "Customer",
    new Schema<ICustomer>({
        dateOfBirth: { type: Date },
        gender: {
            type: String,
            enum: Genders,
        },
        address: { type: String },
        avatar: { type: String },
        files: [{ type: String }],
    })
);

export default Customer;
