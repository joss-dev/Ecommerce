import { IUser, UserResponse } from "./interface";
import HttpError from "../../utils/HttpError.utils";
import HTTP_STATUS from "../../constants/HttpStatus";
import jwt, { JwtPayload } from "jsonwebtoken";
import User from "./model";
import UserDAO from "./dao";

export default class UserService {
  static async getUser(token: string): Promise<UserResponse> {
    try {
      const customerDao = new UserDAO(User);

      if (!token) {
        throw new HttpError(
          "No token provided",
          "NO_TOKEN_PROVIDED",
          HTTP_STATUS.NOT_FOUND
        );
      }

      const decoded = jwt.verify(
        token as string,
        process.env.JWT_SECRET || "secret"
      ) as JwtPayload & {};

      if (!decoded) {
        throw new HttpError(
          "Invalid token",
          "INVALID_TOKEN",
          HTTP_STATUS.NOT_FOUND
        );
      }

      console.log("este es el valor del decoded",decoded)
      console.log("este es el valor del decoded ID: ",decoded.id)

      const userFound = await customerDao.find({
        _id: decoded.id,
      });

      if (!userFound || userFound.length === 0) {
        throw new HttpError(
          "User not found",
          "USER_NOT_FOUND",
          HTTP_STATUS.NOT_FOUND
        );
      }

      const userResponse: UserResponse = {
        id: userFound[0]._id.toString(),
        firstName: userFound[0].firstName,
        lastName: userFound[0].lastName,
        email: userFound[0].email,
        role: userFound[0].role,
    };

      return userResponse;
    } catch (err : any) {
        const error: HttpError = new HttpError(
            err.description || err.message,
            err.details || err.message,
            err.status || HTTP_STATUS.SERVER_ERROR
          );
    
          throw error;
    }
  }
}
