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
  icons: {
    icon: "/public/favicon.ico"
  },
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
      <link rel="icon" href="/public/favicon.ico" />
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
