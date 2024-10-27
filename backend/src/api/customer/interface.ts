// INTERFACES
import { IUser } from "../user/interface";

export interface ICustomer extends IUser {
    dateOfBirth: Date;
    gender: string;
    address: string;
    avatar: string;
    files: string[];
}

export interface CustomerCreateFields {
    email: string;
    password: string;
    avatarUrl?: string;
}

export interface CustomerResponse {
    id: string;
    firstName?: string;
    lastName?: string;
    email: string;
    role: string;
    avatarUrl?: string;
}

export interface CustomerLoginFields {
    email: string;
    password: string;
}