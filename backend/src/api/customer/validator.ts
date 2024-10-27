// LIBRARIES
import { z } from "zod";

export const customerCreatePayloadValidator = z.object({
    email: z.string().email({ message: "Invalid email" }),
    password: z.string().min(8, { message: "Password is too short" }),
});

export const customerLoginPayloadValidator = z.object({
    email: z.string().email({ message: "Invalid email format" }),
    password: z.string().min(1, { message: "Password cannot be empty" }),
});
