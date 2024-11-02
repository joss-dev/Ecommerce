"use client";
import React, { useEffect, useState } from "react";
import { getProductByID } from "@/app/lib/data";
import { Product } from "@/app/types/types";
import { ProductSkeleton } from "@/app/ui/skeletons";
import { useCart } from "@/app/context/CartContext";
import Image from "next/image";
async function fetchProduct(id: string): Promise<Product | null> {
  const data = await getProductByID(id);
  return data;
}

export default function Page({ params }: { params: { id: string } }) {
  const { addItem } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      const fetchedProduct = await fetchProduct(params.id);
      setProduct(fetchedProduct);
      setLoading(false);
    };

    loadProduct();
  }, [params.id]);

  const handleAddToCart = () => {
    if (product) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
      });
    }
  };

  if (loading) {
    return <ProductSkeleton />;
  }

  if (!product) {
    return <div>No se encontró el producto.</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
        {/* Imagen del producto */}
        <div className="w-full aspect-w-1 aspect-h-1 relative rounded-lg overflow-hidden">
          <Image
            src={product.imageUrl || ""}
            alt={product.name}
            width={500} 
            height={500}
            className="w-full h-full object-center object-cover"
          />
        </div>

        {/* Información del producto */}
        <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{product.name}</h1>
          <div className="mt-3 flex items-center">
            <p className="text-3xl font-bold text-gray-900">${product.price}</p>
            <p className="ml-2 text-lg text-gray-500">${product.price}</p>
            <span className="ml-2 text-sm font-medium text-red-600">{product.price}% Off</span>
          </div>

          {/* Reseñas */}
          <div className="mt-3">
            <div className="flex items-center">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <svg
                    key={rating}
                    className={`h-5 w-5 flex-shrink-0 ${rating < Math.floor(product.stars) ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="ml-2 text-sm text-gray-500"> reseñas</p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="sr-only">Descripción</h3>
            <p className="text-base text-gray-900">{product.description}</p>
          </div>

          {/* Botones de acción */}
          <div className="mt-10 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <button
              type="button"
              onClick={handleAddToCart} // Agrega el producto al carrito
              className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
            >
              Agregar al carrito
            </button>

            <button
              type="button"
              className="w-full bg-green-500 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-green-500"
            >
              Comprar ahora
            </button>
          </div>

          {/* Información adicional */}
          <div className="mt-6 text-sm text-gray-500">
            <p>Entrega en 1 hora</p>
          </div>
        </div>
      </div>
    </div>
  );
}
