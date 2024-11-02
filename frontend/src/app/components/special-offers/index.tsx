import { Suspense } from "react";
import ProductList from "@/app/components/product-list";
import { CardSkeleton } from "@/app/ui/skeletons";

const SpecialOffers = () => (
  <Suspense
    fallback={
      <div className="flex flex-wrap justify-center gap-4 m-2">
        {[...Array(3)].map((_, index) => (
          <CardSkeleton key={index} />
        ))}
      </div>
    }
  >
    <ProductList filter={(product) => product.discount > 0} limit={3} />
  </Suspense>
);

export default SpecialOffers;
