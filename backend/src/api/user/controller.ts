import { Request, Response } from "express";
//import { CustomerCreateFields, CustomerLoginFields, CustomerResponse } from "./interface";
import { MulterFiles } from "../../interfaces/file.interface";
import apiResponse from "../../utils/apiResponse.utils";
import HTTP_STATUS from "../../constants/HttpStatus";
import HttpError from "../../utils/HttpError.utils";
//import UserService from "./service";
// LIBRARIES
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
// MODELS
import Customer from "./model";
// DAOS
import jwt, { JwtPayload } from "jsonwebtoken";
import UserDAO from "../user/dao";
// DTOS
// UTILS

// INTERFACES

export default class userController { 
    
    static async getUserInfo(req: Request, res: Response): Promise<void> {
        try {
            // Suponiendo que el ID del usuario está en req.user.id (verificado por el middleware)
            const customerDao = new UserDAO(Customer);
            const token = req.headers.authorization?.split(" ")[1];
            
            if (!token) {
                res.status(401).json({ message: "No token provided" });
            }
             // Verifica y decodifica el token
             const decoded = jwt.verify(token as string, process.env.JWT_SECRET || "secret") as JwtPayload & { };

        // Obtiene el ID del usuario desde el token
            console.log(decoded.id)

            const userFound = await customerDao.find({ 
                _id: decoded.id,
            })

            if (!userFound || userFound.length === 0) {
                throw new HttpError(
                  "User not found",
                  "USER_NOT_FOUND",
                  HTTP_STATUS.NOT_FOUND
                );
              }

            console.log(userFound[0])
           
        } catch (error) {
            console.error("Error retrieving user information:", error);
    
            // Verifica si el error es de tipo circular antes de responder
            if (error instanceof Error) {
                 res.status(500).json({ message: "Internal server error" });
            }
    
            // Maneja otros tipos de error aquí
            res.status(500).json({ message: "Unexpected error" });
        }
      }
}


