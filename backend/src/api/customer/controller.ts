import { Request, Response } from "express";
import { CustomerCreateFields, CustomerLoginFields, CustomerResponse } from "./interface";
import { MulterFiles } from "../../interfaces/file.interface";
import apiResponse from "../../utils/apiResponse.utils";
import HTTP_STATUS from "../../constants/HttpStatus";
import HttpError from "../../utils/HttpError.utils";
import CustomerService from "./service";


export default class customerController {
    static async register(req: Request, res: Response): Promise<void> {
        // FIXME: Check if the requester is an admin, and admit only admins to create users with roles
        try {
            const customerData: CustomerCreateFields = req.body;
            const files = req.files as MulterFiles;
            if (files && files["profile"] && files["profile"][0]) {
                customerData.avatarUrl =
                    files.profile[0].path.split("public")[1];
            }

            const customer: CustomerResponse = await CustomerService.createCustomer(
                customerData
            );

            const response = apiResponse(true, customer);
            res.status(HTTP_STATUS.CREATED).json(response);
        } catch (err: any) {
            // FIXME: Replace with a next function and a logger
            const response = apiResponse(
                false,
                new HttpError(
                    err.description || err.message,
                    err.details || err.message,
                    err.status || HTTP_STATUS.SERVER_ERROR
                )
            );
            res.status(err.status || HTTP_STATUS.SERVER_ERROR).json(response);
        }
    }

    static async login(req: Request, res: Response): Promise<void> {
        try {
            const customerData : CustomerLoginFields = req.body;

            const { accessToken, refreshToken, userContext } = await CustomerService.loginCustomer(customerData);

            

            if (!accessToken) {
                throw new HttpError(
                    "Invalid credentials",
                    "INVALID_CREDENTIALS",
                    HTTP_STATUS.UNAUTHORIZED
                );
            }
            res.cookie("accessToken", accessToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "lax",
                maxAge: 15 * 60 * 1000, // 15 minutos
              });

              res.cookie("userContext", userContext, {
                httpOnly: true,
                sameSite: "lax",
                secure: process.env.NODE_ENV === "production",
                maxAge: 30 * 24 * 60 * 60 * 1000, // 30 días
              });

            const response = apiResponse(true, {refreshToken});
            res.status(HTTP_STATUS.OK).json(response);
        } catch (err : any) {
            const response = apiResponse(
                false,
                new HttpError(
                    err.description || err.message,
                    err.details || err.message,
                    err.status || HTTP_STATUS.SERVER_ERROR
                )
            );
            res.status(err.status || HTTP_STATUS.SERVER_ERROR).json(response);
        }
    }

    static async logout(req: Request, res: Response): Promise<void> {
        // Limpiar las cookies que contienen el token de acceso y el contexto de usuario
        res.clearCookie("accessToken");
        res.clearCookie("userContext");
        res.status(200).json({ message: "Logout successful" });
    }
}
