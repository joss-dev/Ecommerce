import Input from "@/components/InputForm";


export default function LoginForm() {
    return (
   
    <div className="top-[194px]  left-[816px] w-[503px] h-[636px] bg-[#FFFFFF] shadow-lg rounded-lg opacity-100 p-6 my-10">
      <div className="w-full max-w-md text-center text-zinc-900">
        <h2 className="text-3xl font-bold mb-1">Create an account</h2>
        <h2 className="text-1xl font-light mb-3">Acces to our dashboard</h2>
        <form className="space-y-4">
          <Input 
            type="email" 
            placeholder="Correo Electrónico" 
            
          />
          <Input 
            type="password" 
            placeholder="Contraseña" 
            
          />
        </form>
      </div>
    </div>
   
    );
  }