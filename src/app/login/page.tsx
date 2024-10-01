import Logo from "@/components/logo";
import LoginForm from "@/components/form";

export default function Login() {
    return (
      <div className="flex min-h-screen">
            <div className="w-1/2 flex items-center justify-center bg-[#D9D9D9]">
              <Logo />
            </div>
            <div className="w-1/2 flex items-center justify-center bg-white">
              <LoginForm />
            </div>
          </div>
    );
  }