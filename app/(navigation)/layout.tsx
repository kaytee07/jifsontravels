import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
         <Navbar/>
            {children}
        <Footer/>
    </main>
  );
}