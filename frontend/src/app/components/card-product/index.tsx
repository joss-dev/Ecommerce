import React from 'react';
import Image from 'next/image';
import { ProductCardProps } from "@/app/types/types";
import Link from 'next/link';

export default function ProductCard({
  id,
  imageUrl,
  title,
  description,
  price,
  discountedPrice,
  discount,
  rating,
  reviewCount
}: ProductCardProps) {
  return (
    <Link href={`/products/${id}`}>
      <div className="w-64 h-96 max-w-xs bg-white rounded-lg shadow-md p-4 transition-transform hover:scale-105">
        <div className="relative w-full h-48">
          <Image
            src={imageUrl}
            alt={title}
            fill
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-bold text-gray-900">{title}</h3>
          <p className="text-gray-600 text-sm line-clamp-2 mt-2">{description}</p>

          <div className="flex items-center mt-4">
            {discount && discount > 0 ? (
              <>
                <span className="text-xl font-semibold text-gray-900">${discountedPrice}</span>
                <span className="text-sm line-through ml-4 text-gray-500">${price}</span>
                <span className="text-red-500 text-sm ml-2">{discount}% Off</span>
              </>
            ) : (
              <span className="text-xl font-semibold text-gray-900">${price}</span>
            )}
          </div>


          <div className="flex items-center mt-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className={`w-4 h-4 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .288l2.833 8.718H24L17.083 14l2.833 8.712L12 17.424l-7.916 5.288L7.083 14 0 9.006h9.167z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-600 text-sm ml-2">{reviewCount}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
