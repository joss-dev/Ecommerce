import Image from "next/image";

export default function Logo() {
    return (
        <div className="text-center">
            <Image src="/icons/E-commerce-icon.png"
                width={127}
                height={97} alt="Logo del E-commerce"
                className="mx-auto" />
            <div className="mt-3">
                <h3 className="text-4xl font-bold text-[#000000]">E-Commerce</h3>
                <h5 className="text-1xl text-[#000000]">By bootcamp 3.0</h5>
            </div>
        </div>
    );
}