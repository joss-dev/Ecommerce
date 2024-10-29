"use client";
import { Suspense } from "react";
import ProductCard from "@/app/components/card-product";
import { CardSkeleton } from "@/app/ui/skeletons/cardProductSkeleton";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  imageUrl?: string;
  createdAt: string;
  updatedAt: string;
}


const fetchProducts = async () => {
  await new Promise(resolve => setTimeout(resolve, 3000)); // Simulando un retardo
  const response = await fetch("http://localhost:8081/api/product/");
  if (!response.ok) {
    throw new Error("Error al obtener los productos");
  }
  const data = await response.json();
  return data.payload; // Accede al campo `payload` en la respuesta
};

// Componente ProductList para manejar la carga de productos
const ProductList = async () => {
  const products = await fetchProducts(); // Llama a la función fetchProducts

  return (
    <div className="flex flex-wrap justify-center gap-4 m-2">
      {products.map((product: Product) => (
        <ProductCard
          key={product.id}
          imageUrl={product.imageUrl || ""}
          title={product.name}
          description={product.description}
          price={product.price}
          oldPrice={product.price * 1.2} // Ejemplo de cálculo de precio anterior
          discount="20%" // Ajusta el descuento si es necesario
          rating={4} // Ajusta la calificación si tienes datos
          reviewCount={100} // Ajusta el número de reseñas si tienes datos
        />
      ))}
    </div>
  );
};

export default function SpecialOffers() {
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
