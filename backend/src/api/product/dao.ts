// LIBRARIES
import { Model, FilterQuery } from "mongoose";
import { IProduct } from "./interface"; 

class ProductDAO<T extends IProduct> {
    private model: Model<T>;

    constructor(model: Model<T>) {
        this.model = model;
    }

    async create(data: Partial<T>): Promise<T> {
        return await this.model.create(data);
    }

    async read(id: string): Promise<T | null> {
        return await this.model.findById(id).exec();
    }

    async update(id: string, data: Partial<T>): Promise<T | null> {
        return await this.model
            .findByIdAndUpdate(id, data, { new: true })
            .exec();
    }

    async delete(id: string): Promise<T | null> {
        return await this.model.findByIdAndDelete(id).exec();
    }

    async find(query: FilterQuery<T>): Promise<T[]> {
        return await this.model.find(query).exec();
    }

    
    async getAllProducts(): Promise<T[]> {
        return await this.model.find().exec();
    }

    
    async findDiscountedProducts(): Promise<T[]> {
        return await this.model.find({ discount: { $gt: 0 } }).exec();
    }

    
    async findByCategory(category: string): Promise<T[]> {
        return await this.model.find({ category }).exec();
    }
}

export default ProductDAO;
