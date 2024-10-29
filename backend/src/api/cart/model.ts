import { Schema, model, Types } from "mongoose";

interface ICart {
    customer: Types.ObjectId; // ID del Customer dueño del carrito
    items: {
        product: Types.ObjectId;
        quantity: number;
    }[];
    createdAt: Date;
    updatedAt?: Date;
}

const cartSchema = new Schema<ICart>({
    customer: { type: Schema.Types.ObjectId, ref: "Customer", required: true },
    items: [
        {
            product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
            quantity: { type: Number, default: 1 }
        }
    ]
}, { timestamps: true });

const Cart = model<ICart>("Cart", cartSchema);

export default Cart;
