import { Schema, model, Types } from "mongoose";
import { IProduct } from "./interface";


const productSchema = new Schema<IProduct>({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    discount: { type: Number, required: true, default: 0 }, 
    discountedPrice: { type: Number}, 
    category: { type: String, required: true },
    stock: { type: Number, required: true },
    imageUrl: { type: String, required: true }, 
    stars: { type: Number, required: true, default: 0, min: 0, max: 5 }, 
    createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
}, { 
    timestamps: true 
});

// Middleware para calcular `discountedPrice` antes de guardar
productSchema.pre("save", function (next) {
    if (this.isModified("price") || this.isModified("discount")) {
        this.discountedPrice = this.price * (1 - this.discount / 100);
    }
    next();
});

const Product = model<IProduct>("Product", productSchema);

export default Product;
