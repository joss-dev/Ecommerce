"use client";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/app/context/AuthContext";

export default function NavBar() {
  const { user } = useAuth();

  return (
    <nav className="bg-[#f6f5f5] shadow-md p-4">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Image
              src="/icons/LogoNavBar.png"
              alt="Logo"
              width={156}
              height={156}
            />
          </Link>
        </div>

      
        <div className="hidden text-gray-700 sm:flex flex-1 justify-center items-center">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              className="w-full p-2 pl-10 pr-10 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search any Product..."
            />
           
            <Image
              src="/icons/busqueda.png"
              alt="Search"
              width={20}
              height={20}
              className="absolute left-3 top-3"
            />
            
            <Image
              src="/icons/microfono.png"
              alt="Microphone"
              width={14}
              height={14}
              className="absolute right-3 top-3"
            />
          </div>
        </div>

        
        <div className="flex items-center space-x-6">
          <Link href="/login">
            <div className="flex items-center space-x-2">
             
              <Image
                src="/icons/User-icon.png"
                alt="User"
                width={24}
                height={24}
              />
              {user ? ( 
                  <span className="text-gray-700">{user.email}</span>
              ) : (
                <span className="text-gray-700">Ingresar</span>
              )}
            </div>
          </Link>

          <Link href="/favorites">
            
            <Image
              src="/icons/heart.png"
              alt="Favorites"
              width={24}
              height={24}
            />
          </Link>

          <Link href="/cart">
            
            <Image src="/icons/carrito.png" alt="Cart" width={24} height={24} />
          </Link>
        </div>
      </div>

      {/* Mobile search bar */}
      <div className="sm:hidden p-2">
        <div className="relative w-full">
          <input
            type="text"
            className="w-full p-2 pl-10 pr-10 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search any Product..."
          />
          {/* Mobile Search Icon */}
          <Image
            src="/icons/search.svg"
            alt="Search"
            width={20}
            height={20}
            className="absolute left-3 top-2"
          />
          {/* Mobile Microphone Icon */}
          <Image
            src="/icons/microphone.svg"
            alt="Microphone"
            width={20}
            height={20}
            className="absolute right-3 top-2"
          />
        </div>
      </div>
    </nav>
  );
}
