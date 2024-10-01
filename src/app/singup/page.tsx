import SingupForm from "@/components/formSingup";
import AuthLayout from "@/components/auth-layout/authLayout";

export default function SingUp() {
    return (
        <AuthLayout>
            <SingupForm />
        </AuthLayout>
    );
}