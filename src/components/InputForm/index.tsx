interface InputProps {
    type: string;
    placeholder: string;
  }

export default function InputForm({ type, placeholder }: InputProps) {
    return (
        <div className="relative">
          <input
            type={type}
            placeholder={placeholder}
            className="pl-10 pr-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      );
}