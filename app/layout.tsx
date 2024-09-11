import type { Metadata } from "next";
import { Inter, Damion, Montserrat } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const damion = Damion({
  weight: '400',
  subsets: ['latin'],
});


export const metadata: Metadata = {
  title: "JifsonJoyTravels",
  description: "Travel around Ghana with us",
   icons: {
    icon: "/favicon.ico"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" />
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
