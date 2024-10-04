import Input from "@/components/InputForm";
import ButtonForm from "@/components/button-form";

export default function LoginForm() {
    return (
        <div className="bg-[#FFFFFF] shadow-xl rounded-lg p-6 max-w-sm w-full mx-auto md:my-10 min-h-screen md:min-h-0 flex flex-col justify-center">
            <div className="text-center text-zinc-900 mb-8">
                <h2 className="text-3xl font-bold mb-1">Login</h2>
                <h2 className="text-1xl font-light mb-8">Acces to our dashboard</h2>
            </div>

            <form className="space-y-4 text-zinc-900">
                <Input
                    type="email"
                    placeholder="Username or Email"
                    iconSrc="/icons/User-icon.png"
                    width={20}
                    height={20}
                />
                <Input
                    type="password"
                    placeholder="Password"
                    iconSrc="/icons/Candado-icon.png"
                    width={14}
                    height={10}
                />
                <div className="flex justify-center">
                    <ButtonForm text="Login" />
                </div>
            </form>
        </div>
    );
}