import { IProduct, ProductResponse } from "./interface";

export default class ProductDto {
  static productsArrayDTO(products: IProduct[]): ProductResponse[] {
    return products.map((product) => {
      return {
        id: product.id.toString(),
        name: product.name,
        stock: product.stock,
        description: product.description,
        price: product.price,
        category: product.category,
        imageUrl: product.imageUrl,
      };
    });
  }

  static productDTO(product: IProduct): ProductResponse {
    return {
      id: product.id.toString(),
      name: product.name,
      stock: product.stock,
      description: product.description,
      price: product.price,
      category: product.category,
      imageUrl: product.imageUrl,
    };
  }
}
