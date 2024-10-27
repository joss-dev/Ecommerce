// INTERFACES
import { ICustomer, CustomerResponse } from "./interface";

export default class CustomerDto {
    static customersArrayDTO(customers: ICustomer[]): CustomerResponse[] {
        return customers.map((customer) => {
            return {
                id: customer._id.toString(),
                firstName: customer.firstName,
                lastName: customer.lastName,
                email: customer.email,
                role: customer.role,
                avatarUrl: customer.avatar,
            };
        });
    }

    static customerDTO(customer: ICustomer): CustomerResponse {
        return {
            id: customer._id.toString(),
            firstName: customer.firstName,
            lastName: customer.lastName,
            email: customer.email,
            role: customer.role,
            avatarUrl: customer.avatar,
        };
    }
}
