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
        {/* ═══════════ OZELLIKLER ONU AYIRICI ═══════════ */}
        <div className="relative bg-bg-1">
          <div className="max-w-[1100px] mx-auto px-6">
            <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
          </div>
        </div>
        <Features />
        <Stats />
        {/* ═══════════ ILETISIM ONU AYIRICI ═══════════ */}
        <div className="relative bg-bg">
          <div className="max-w-[1100px] mx-auto px-6">
            <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
          </div>
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
