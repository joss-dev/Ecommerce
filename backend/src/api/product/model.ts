import { Schema, model, Types } from "mongoose";

interface IProduct {
    name: string;
    description: string;
    price: number;
    category: string;
    stock: number;
    createdBy: Types.ObjectId; // ID del Admin 
    createdAt: Date;
    updatedAt?: Date;
}

const productSchema = new Schema<IProduct>({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    stock: { type: Number, required: true },
    createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
}, { timestamps: true });

const Product = model<IProduct>("Product", productSchema);

export default Product;
