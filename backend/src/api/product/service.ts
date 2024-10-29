import Product from "./model"; // Modelo de Product
import {
    ProductCreateFields,
    ProductUpdateFields,
    ProductResponse,
    IProduct,
} from "./interface";
import HttpError from "../../utils/HttpError.utils";
import HTTP_STATUS from "../../constants/HttpStatus";
import ProductDto from "./dto";
import ProductDAO from "./dao"; // Importa el DAO

const productDAO = new ProductDAO<IProduct>(Product); // Instancia del DAO

export default class ProductService {
    static async createProduct(
        productData: ProductCreateFields
    ): Promise<ProductResponse> {
        try {
            const productCreated = await productDAO.create(productData);
            return ProductDto.productDTO(productCreated);
        } catch (err: any) {
            throw new HttpError(
                err.description || err.message,
                err.details || err.message,
                err.status || HTTP_STATUS.SERVER_ERROR
            );
        }
    }

    static async getProductById(productId: string): Promise<ProductResponse> {
        try {
            const product = await productDAO.read(productId);

            if (!product) {
                throw new HttpError(
                    "Product not found",
                    "PRODUCT_NOT_FOUND",
                    HTTP_STATUS.NOT_FOUND
                );
            }

            return ProductDto.productDTO(product);
        } catch (err: any) {
            throw new HttpError(
                err.description || err.message,
                err.details || err.message,
                err.status || HTTP_STATUS.SERVER_ERROR
            );
        }
    }

    static async updateProduct(
        productId: string,
        productData: ProductUpdateFields
    ): Promise<ProductResponse> {
        try {
            const updatedProduct = await productDAO.update(productId, productData);

            if (!updatedProduct) {
                throw new HttpError(
                    "Product not found",
                    "PRODUCT_NOT_FOUND",
                    HTTP_STATUS.NOT_FOUND
                );
            }

            return ProductDto.productDTO(updatedProduct);
        } catch (err: any) {
            throw new HttpError(
                err.description || err.message,
                err.details || err.message,
                err.status || HTTP_STATUS.SERVER_ERROR
            );
        }
    }

    static async deleteProduct(productId: string): Promise<void> {
        try {
            const productDeleted = await productDAO.delete(productId);

            if (!productDeleted) {
                throw new HttpError(
                    "Product not found",
                    "PRODUCT_NOT_FOUND",
                    HTTP_STATUS.NOT_FOUND
                );
            }
        } catch (err: any) {
            throw new HttpError(
                err.description || err.message,
                err.details || err.message,
                err.status || HTTP_STATUS.SERVER_ERROR
            );
        }
    }

    static async getAllProducts(): Promise<ProductResponse[]> {
        try {
            const products = await productDAO.getAllProducts(); // Usamos el método getAllProducts

            return products.map(ProductDto.productDTO);
        } catch (err: any) {
            throw new HttpError(
                err.description || err.message,
                err.details || err.message,
                err.status || HTTP_STATUS.SERVER_ERROR
            );
        }
    }
}
