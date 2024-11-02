import { Suspense } from "react";
import ProductList from "@/app/components/product-list";
import { CardSkeleton } from "@/app/ui/skeletons";

export default function Products() {
  return (
    <Suspense
    fallback={
      <div className="flex flex-wrap justify-center gap-4 m-2">
        {[...Array(3)].map((_, index) => (
          <CardSkeleton key={index} />
        ))}
      </div>
    }
  >
    <ProductList />
  </Suspense>
  );
}
