import Logo from "@/components/logo";

export default function Login() {
    return (
      <div className="flex min-h-screen">
            <div className="w-1/2 flex items-center justify-center bg-[#D9D9D9]">
              <Logo />
            </div>
            <div className="w-1/2 flex items-center justify-center bg-white">
              <h2>formulario</h2>
            </div>
          </div>
    );
  }