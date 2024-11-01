"use client";
import Input from "@/app/components/InputForm";
import ButtonForm from "@/app/components/button-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";

export default function LoginForm() {
  const { login } = useAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8081/api/auth/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials.");
      }

      const data = await response.json();
      console.log("Login successful:", data);
      
      login({ email });
      router.push('/')
    } catch (err) {
      console.error("Error during login:", err);
      setError( "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="bg-[#FFFFFF] shadow-xl rounded-lg p-6 max-w-sm w-full mx-auto md:my-10 min-h-screen md:min-h-0 flex flex-col justify-center">
      <div className="text-center text-zinc-900 mb-8">
        <h2 className="text-3xl font-bold mb-1">Login</h2>
        <h2 className="text-1xl font-light mb-8">Acces to our dashboard</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 text-zinc-900">
        {error && <p className="text-red-500">{error}</p>}
        <Input
          type="email"
          placeholder="Username or Email"
          iconSrc="/icons/User-icon.png"
          width={20}
          height={20}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          iconSrc="/icons/Candado-icon.png"
          width={14}
          height={10}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex justify-center">
          <ButtonForm text="Login" />
        </div>
      </form>
    </div>
  );
}
