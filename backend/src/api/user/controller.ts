import { Request, Response } from "express";
import apiResponse from "../../utils/apiResponse.utils";
import HTTP_STATUS from "../../constants/HttpStatus";
import UserService from "../user/service";
import { UserResponse } from "./interface";

export default class userController { 
    
    static async getUserInfo(req: Request, res: Response): Promise<void> {
        try {
            
            
            const token = req.cookies.accessToken;
            console.log("valor del token en el backend: ", token);
            if (!token) {
                res.status(401).json({ message: "No token provided" });
                return;
            }

            const user : UserResponse = await UserService.getUser(token);
            
            const response = apiResponse(true, user);
            res.status(HTTP_STATUS.ACCEPTED).json(response);
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


