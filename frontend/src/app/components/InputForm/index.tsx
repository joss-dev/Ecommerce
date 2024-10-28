import Image from "next/image";
import { ChangeEvent } from "react";

interface InputProps {
  type: string;
  placeholder: string;
  iconSrc: string;
  width: number;
  height: number;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function InputForm({
  type,
  placeholder,
  iconSrc,
  width,
  height,
  value,
  onChange,
}: InputProps) {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Image src={iconSrc} alt="icon" width={width} height={height} />
      </div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="pl-10 pr-3 py-2 border border-gray-300 bg-[#F3F3F3] rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
