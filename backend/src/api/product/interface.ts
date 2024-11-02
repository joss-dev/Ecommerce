// interfaces.ts
import { Types } from "mongoose";

// Campos necesarios para crear un producto
export interface ProductCreateFields {
    name: string;
    description: string;
    price: number;
    discount?: number; 
    discountedPrice?: number; 
    category: string;
    createdBy : Types.ObjectId;
    stock: number;
    imageUrl?: string; 
}

export interface IProduct {
    id: string;
    name: string;
    description: string;
    price: number;
    discount: number; 
    discountedPrice: number; 
    category: string;
    stock: number;
    imageUrl: string;
    stars: number; 
    createdBy: Types.ObjectId;
    createdAt: Date;
    updatedAt?: Date;
}


// Campos opcionales para actualizar un producto
export interface ProductUpdateFields {
    name?: string;
    description?: string;
    price?: number;
    category?: string;
    stock?: number;
    imageUrl?: string;
}

// Respuesta al cliente con la información del producto
export interface ProductResponse {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    stock: number;
    discount?: number,
    discountedPrice?: number,
    imageUrl?: string;
    createdBy?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
