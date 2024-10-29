import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-pink-400 py-4 mt-auto">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo y título a la izquierda */}
                <div className="flex items-center space-x-2">
                    <Image src="/icons/LogoNavBar.png" alt="Logo" width={40} height={40} />
                    <div>
                        <h1 className="text-white text-lg font-semibold">E-Commerce</h1>
                        <p className="text-white text-sm">By bootcamp 3.0</p>
                    </div>
                </div>

                {/* Texto de copyright a la derecha */}
                <div className="text-white text-right">
                    <p className="text-sm">Copyright 2024</p>
                    <p className="text-sm">Devlights</p>
                </div>
            </div>
        </footer>

    );
}
