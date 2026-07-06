import { useEffect } from "react";
import Lenis from "lenis";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { Fleet } from "./components/Fleet/Fleet";
import { WhyChooseUs } from "./components/WhyChooseUs/WhyChooseUs";
import { RentalProcess } from "./components/RentalProcess/RentalProcess";
import { ExploreKashmir } from "./components/ExploreKashmir/ExploreKashmir";
import { Testimonials } from "./components/Testimonials/Testimonials";
import { FAQ } from "./components/FAQ/FAQ";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { FloatingButtons } from "./components/FloatingButtons/FloatingButtons";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-dark-900 min-h-screen text-white font-sans selection:bg-gold-500/30 selection:text-gold-500">
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <Fleet />
        <RentalProcess />
        <ExploreKashmir />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
