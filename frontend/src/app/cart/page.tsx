"use client";
import React from "react";
import { useCart } from "@/app/context/CartContext";
//import Image from "next/image";

const CartPage: React.FC = () => {
  const { cartItems, removeItem, clearCart, getTotal } = useCart();

  return (
    <div className="container mx-auto p-6 text-slate-800">
      <h1 className="text-3xl font-bold mb-6 text-center">Shopping Cart</h1>

      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center bg-white shadow-md rounded-lg p-4">
                {/* <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="rounded-lg object-cover w-24 h-24"
                /> */}
                <div className="ml-4 flex-grow">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-500">Price: ${item.price.toFixed(2)}</p>
                  <p className="text-gray-500">Quantity: {item.quantity}</p>
                  <p className="text-gray-700 font-bold">
                    Total: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="ml-4 text-red-600 hover:text-red-800 font-semibold"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            <p className="text-lg font-semibold mb-2">
              Total: ${getTotal().toFixed(2)}
            </p>
            <div className="flex flex-col gap-4">
              <button
                onClick={clearCart}
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out"
              >
                Clear Cart
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-xl text-center font-semibold mt-20">Your cart is empty</p>
      )}
    </div>
  );
};

export default CartPage;
