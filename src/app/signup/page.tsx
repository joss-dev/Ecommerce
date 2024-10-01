import SingupForm from "@/components/formSignup";
import AuthLayout from "@/components/auth-layout/authLayout";

export default function SignUp() {
    return (
        <AuthLayout>
            <SingupForm />
        </AuthLayout>
    );  
}