import { Suspense } from "react";
import ProductList from "@/app/components/product-list";
import { PageProductSkeleton } from "@/app/ui/skeletons";

export default function Products() {
  return (
    <Suspense fallback={<PageProductSkeleton />}>
      <ProductList />
    </Suspense>
  );
}
