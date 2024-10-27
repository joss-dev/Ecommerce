// MODELS
import Customer from "./model";
// DAOS
import UserDAO from "../user/dao";
// INTERFACES
import { ICustomer } from "./interface";

class CustomerDAO extends UserDAO<ICustomer> {
    constructor() {
        super(Customer);
    }
}

export default CustomerDAO;
