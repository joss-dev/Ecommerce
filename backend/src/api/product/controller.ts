import { Request, Response } from "express";
import { ProductCreateFields, ProductUpdateFields, ProductResponse } from "./interface";
import apiResponse from "../../utils/apiResponse.utils";
import HTTP_STATUS from "../../constants/HttpStatus";
import HttpError from "../../utils/HttpError.utils";
import ProductService from "./service";

export default class productController {
    static async create(req: Request, res: Response): Promise<void> {
        try {
            const productData: ProductCreateFields = req.body;
            const product: ProductResponse = await ProductService.createProduct(productData);

            const response = apiResponse(true, product);
            res.status(HTTP_STATUS.CREATED).json(response);
        } catch (err: any) {
            const response = apiResponse(
                false,
                new HttpError(
                    err.description || err.message,
                    err.details || err.message,
                    err.status || HTTP_STATUS.SERVER_ERROR
                )
            );
            res.status(err.status || HTTP_STATUS.SERVER_ERROR).json(response);
        }
    }

    static async getById(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const product: ProductResponse = await ProductService.getProductById(id);

            const response = apiResponse(true, product);
            res.status(HTTP_STATUS.OK).json(response);
        } catch (err: any) {
            const response = apiResponse(
                false,
                new HttpError(
                    err.description || err.message,
                    err.details || err.message,
                    err.status || HTTP_STATUS.SERVER_ERROR
                )
            );
            res.status(err.status || HTTP_STATUS.SERVER_ERROR).json(response);
        }
    }

    static async update(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const productData: ProductUpdateFields = req.body;
            const updatedProduct: ProductResponse = await ProductService.updateProduct(id, productData);

            const response = apiResponse(true, updatedProduct);
            res.status(HTTP_STATUS.OK).json(response);
        } catch (err: any) {
            const response = apiResponse(
                false,
                new HttpError(
                    err.description || err.message,
                    err.details || err.message,
                    err.status || HTTP_STATUS.SERVER_ERROR
                )
            );
            res.status(err.status || HTTP_STATUS.SERVER_ERROR).json(response);
        }
    }
    
    static async getAllProducts(req: Request, res: Response): Promise<void> {
        try {
            const products = await ProductService.getAllProducts();

            const response = apiResponse(true, products);
            res.status(HTTP_STATUS.OK).json(response);
        } catch (err: any) {
            const response = apiResponse(
                false,
                new HttpError(
                    err.description || err.message,
                    err.details || err.message,
                    err.status || HTTP_STATUS.SERVER_ERROR
                )
            );
            res.status(err.status || HTTP_STATUS.SERVER_ERROR).json(response);
        }
    }
    
    static async delete(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            await ProductService.deleteProduct(id);

            const response = apiResponse(true, { message: "Product deleted successfully" });
            res.status(HTTP_STATUS.OK).json(response);
        } catch (err: any) {
            const response = apiResponse(
                false,
                new HttpError(
                    err.description || err.message,
                    err.details || err.message,
                    err.status || HTTP_STATUS.SERVER_ERROR
                )
            );
            res.status(err.status || HTTP_STATUS.SERVER_ERROR).json(response);
        }
    }
}
