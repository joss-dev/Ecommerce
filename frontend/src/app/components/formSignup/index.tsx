"use client";
import Input from "@/app/components/InputForm";
import ButtonForm from "@/app/components/button-form";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

   
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:8081/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) {
        
        const errorData = await response.json();
        setError(errorData.message || "Error registering");
      } else {
        setSuccess("User registered successfully!");
        setError("");
      }
      router.push('/login')
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm w-full mx-auto md:my-10 min-h-screen md:min-h-0 flex flex-col justify-center">
      <div className="text-center text-zinc-900 mb-8">
        <h2 className="text-3xl font-bold">Create an account</h2>
        <h3 className="text-xl font-light">Access to our dashboard</h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 text-zinc-900">
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
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
        <Input
          type="password"
          placeholder="Confirm Password"
          iconSrc="/icons/Candado-icon.png"
          width={14}
          height={10}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <div className="flex justify-center">
          <ButtonForm text="Sign up" />
        </div>
      </form>
    </div>
  );
}
