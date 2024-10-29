import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/app/context/AuthContext";
import NavBar from "./components/navbar";
import Footer from "./components/footer";


const montserratFont = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E-commerce",
  description: "By Bootcamp 3.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <AuthProvider> 
    <html lang="en">
      <body className={montserratFont.className}>
        <NavBar />
          {children}
        <Footer />
        </body>
    </html>
    </AuthProvider>
  );
}
