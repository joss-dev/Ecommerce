import Input from "@/components/InputForm";
import ButtonForm from "@/components/button-form";

export default function LoginForm() {
    return (
        <div className="top-[194px]  left-[816px] w-[503px] h-[436px] bg-[#FFFFFF] shadow-lg rounded-lg opacity-100 p-6 my-10">
            <div className="w-full max-w-md text-center text-zinc-900">
                <h2 className="text-3xl font-bold mb-1">Login</h2>
                <h2 className="text-1xl font-light mb-8">Acces to our dashboard</h2>
                <form className="space-y-4">
                    <Input
                        type="email"
                        placeholder="Correo Electrónico"
                        iconSrc="/icons/User-icon.png"
                        width={20}
                        height={20}
                    />
                    <Input
                        type="password"
                        placeholder="Contraseña"
                        iconSrc="/icons/Candado-icon.png"
                        width={14}
                        height={10}
                    />
                    <ButtonForm text="Login" />
                </form>
            </div>
        </div>
    );
}