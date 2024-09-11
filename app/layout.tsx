import type { Metadata } from "next";
import { Inter, Damion, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const damion = Damion({
  weight: '400',
  subsets: ['latin'],
});


export const metadata: Metadata = {
  title: "JifsonJoyTravels",
  description: "Travel around Ghana with us",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/logos/logo2.png" />
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
