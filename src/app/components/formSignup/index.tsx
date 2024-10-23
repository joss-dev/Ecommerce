import Input from "@/app/components/InputForm";
import ButtonForm from "@/app/components/button-form";

export default function SignupForm() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm w-full mx-auto md:my-10 min-h-screen md:min-h-0 flex flex-col justify-center">
      <div className="text-center text-zinc-900 mb-8">
        <h2 className="text-3xl font-bold">Create an account</h2>
        <h3 className="text-xl font-light">Access to our dashboard</h3>
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
        <Input
          type="password"
          placeholder="Confirm Password"
          iconSrc="/icons/Candado-icon.png"
          width={14}
          height={10}
        />

        <div className="flex justify-center">
          <ButtonForm text="Sign up" />
        </div>
      </form>
    </div>
  );
}
