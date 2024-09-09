import Explore from "@/components/Explore";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Popular from "@/components/Popular";
import Services from "@/components/Services";
import Testionials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      {/* <Services/>
      <Explore/> */}
      {/* <Popular/> */}
      <Testionials/>
      <Footer/>
    </main>
  );
}
