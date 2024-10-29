export interface IUser {
    // id:string;
    // firstName?: string;
    // lastName?: string;
    email: string;
    // password: string;
    // phone?: string;
    // status: boolean;
    // role: string;
}

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    stock: number;
    stars : number;
    imageUrl?: string;
    createdAt: string;
    updatedAt: string;
}
  

export interface ProductCardProps {
    id: string;
    imageUrl: string;
    title: string;
    description: string;
    price: number;
    oldPrice?: number;
    discount?: string;
    rating: number;
    reviewCount: number;
}