import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MissionVision from "@/components/MissionVision";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MissionVision />
        <Features />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </>
  );
}