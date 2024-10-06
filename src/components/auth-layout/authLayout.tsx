import Logo from '@/components/logo';

interface AuthLayoutProps {
    children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <div className="flex min-h-screen flex-col md:flex-row">
            <div className="hidden md:flex md:w-1/2 items-center justify-center bg-[#D9D9D9]">
                <Logo />
            </div>

            <div className="w-full md:w-1/2 flex items-center justify-center bg-[#f5f5f5]">
                {children}
            </div>
        </div>
    );
}