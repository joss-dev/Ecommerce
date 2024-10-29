import { Suspense } from "react";
import ProductCard from "@/app/components/card-product";
import { CardSkeleton } from "@/app/ui/skeletons";
import { fetchProducts } from "@/app/lib/data";
import { Product } from "@/app/types/types";

const ProductList = async () => {
  const products = await fetchProducts(); 
  return (
    <div className="flex flex-wrap justify-center gap-4 m-2">
      {products.map((product: Product) => (
        <ProductCard
          id={product.id}
          key={product.id}
          imageUrl={product.imageUrl || ""}
          title={product.name}
          description={product.description}
          price={product.price}
          oldPrice={product.price * 1.2} 
          discount="20%" 
          rating={product.stars}
          reviewCount={100} 
        />
      ))}
    </div>
  );
};

export default function Products() {
  return (
    <Suspense fallback={
      <div className="flex flex-wrap justify-center gap-4 m-2">
        {[...Array(3)].map((_, index) => (
          <CardSkeleton key={index} />
        ))}
      </div>
    }>
      <ProductList /> 
    </Suspense>
  );
}
