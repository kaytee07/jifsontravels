import Explore from "@/components/Explore";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Popular from "@/components/Popular";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Services/>
      <Explore/>
      <Popular/>
    </main>
  );
}
