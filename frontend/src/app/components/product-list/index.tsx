import { fetchProducts } from "@/app/lib/data";
import { Product } from "@/app/types/types";
import ProductCard from "@/app/components/card-product";

interface ProductListProps {
  filter?: (product: Product) => boolean;
  limit?: number;
}

const ProductList = async ({ filter, limit }: ProductListProps) => {
  try {
    const products = await fetchProducts();

    const filteredProducts = filter ? products.filter(filter) : products;
    const limitedProducts = limit ? filteredProducts.slice(0, limit) : filteredProducts;

    return (
      <div className="flex flex-wrap justify-center gap-4 m-2">
        {limitedProducts.map((product: Product) => (
          <ProductCard
            id={product.id}
            key={product.id}
            imageUrl={product.imageUrl || ""}
            title={product.name}
            description={product.description}
            price={product.price}
            discountedPrice={product.discountedPrice}
            discount={product.discount}
            rating={product.stars}
            reviewCount={100}
          />
        ))}
      </div>
    );
  } catch (error) {
    console.error("Error fetching products:", error);
    return (
      <div className="text-center text-red-500 p-4">
        Hubo un problema al cargar los productos. Por favor, intenta nuevamente más tarde.
      </div>
    );
  }
}

export default ProductList;
