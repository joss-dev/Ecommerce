import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/app/context/CartContext";

export default function Cart() {
    const { cartItems } = useCart();
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    return (
        <Link href="/cart" className="relative">
            <Image src="/icons/carrito.png" alt="Cart" width={24} height={24} />
            {/* Muestra el número total de artículos en el carrito */}
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1">
                {totalItems}
              </span>
            )}
          </Link>
    );
}