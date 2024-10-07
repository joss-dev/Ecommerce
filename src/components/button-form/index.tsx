interface ButtonFormProps {
  text: string;
}

export default function ButtonForm({ text }: ButtonFormProps) {
  return (
    <button className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300">
      {text}
    </button>
  );
}
