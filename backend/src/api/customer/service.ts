// LIBRARIES
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
// MODELS
import Customer from "./model";
// DAOS
import UserDAO from "../user/dao";
// DTOS
import CustomerDto from "./dto";
// UTILS
import HttpError from "../../utils/HttpError.utils";
// CONSTANTS
import HTTP_STATUS from "../../constants/HttpStatus";
// INTERFACES
import {
  ICustomer,
  CustomerCreateFields,
  CustomerResponse,
  CustomerLoginFields,
} from "./interface";

export default class CustomerService {
  static async createCustomer(
    customer: CustomerCreateFields
  ): Promise<CustomerResponse> {
    try {
      const customerDao = new UserDAO(Customer);
      const customerFound = await customerDao.find({
        email: customer.email,
      });

      if (customerFound && customerFound.length > 0) {
        throw new HttpError(
          "User already exists",
          "USER_ALREADY_EXISTS",
          HTTP_STATUS.CONFLICT
        );
      }

      const customerPayload: ICustomer = new Customer({
        ...customer,
        createdAt: new Date(),
      });

      const customerCreated: ICustomer = await customerDao.create(customerPayload);

      if (!customerCreated) {
        throw new HttpError(
          "User not created",
          "USER_NOT_CREATED",
          HTTP_STATUS.SERVER_ERROR
        );
      }

      const userCleaned: CustomerResponse =
        CustomerDto.customerDTO(customerCreated);
      return userCleaned;
    } catch (err: any) {
      const error: HttpError = new HttpError(
        err.description || err.message,
        err.details || err.message,
        err.status || HTTP_STATUS.SERVER_ERROR
      );

      throw error;
    }
  }

  static async loginCustomer(
    customer: CustomerLoginFields
  ): Promise<{ token: string }> {
    try {
      const customerDao = new UserDAO(Customer);

      const customerFound = await customerDao.find({
        email: customer.email,
      });

      if (!customerFound || customerFound.length === 0) {
        throw new HttpError(
          "User not found",
          "USER_NOT_FOUND",
          HTTP_STATUS.NOT_FOUND
        );
      }

      const user = customerFound[0];

      const isPasswordValid = await compare(customer.password, user.password!);
      if (!isPasswordValid) {
        throw new HttpError(
          "Invalid credentials",
          "INVALID_CREDENTIALS",
          HTTP_STATUS.UNAUTHORIZED
        );
      }

      const token = sign(
        {
          id: user._id,
          role: user.role,
          nbf: Math.floor(Date.now() / 1000),
        },
        process.env.JWT_SECRET!,
        { expiresIn: "1h" }
      );

      return { token };
    } catch (err: any) {
      const error: HttpError = new HttpError(
        err.description || err.message,
        err.details || err.message,
        err.status || HTTP_STATUS.SERVER_ERROR
      );

      throw error;
    }
  }
}
