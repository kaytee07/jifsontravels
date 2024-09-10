import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Testionials from "@/components/Testimonials";
import { Montserrat } from 'next/font/google';


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
