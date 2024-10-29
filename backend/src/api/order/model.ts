import { Schema, model, Types } from "mongoose";

interface IOrder {
    customer: Types.ObjectId; // ID del Customer que hizo el pedido
    items: {
        product: Types.ObjectId; // ID del producto
        quantity: number;
        price: number; // precio al momento de la compra
    }[];
    total: number;
    status: "pending" | "shipped" | "delivered" | "canceled";
    createdAt: Date;
    updatedAt?: Date;
}

const orderSchema = new Schema<IOrder>({
    customer: { type: Schema.Types.ObjectId, ref: "Customer", required: true },
    items: [
        {
            product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
            quantity: { type: Number, required: true },
            price: { type: Number, required: true }
        }
    ],
    total: { type: Number, required: true },
    status: { 
        type: String, 
        enum: ["pending", "shipped", "delivered", "canceled"], 
        default: "pending" 
    }
}, { timestamps: true });

const Order = model<IOrder>("Order", orderSchema);

export default Order;
