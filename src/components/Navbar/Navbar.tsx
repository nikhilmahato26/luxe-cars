import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../Common/Button";
import { siteData } from "../../data/site";
import { cn } from "../../utils/cn";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Fleet", href: "#fleet" },
    { name: "Process", href: "#process" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "glass-dark py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 relative z-50">
            {/* Logo Image Placeholder - user will add logo.png */}
            <img src="/src/assets/logo.png" alt="LuxeDrive Logo" className="h-10 md:h-12 w-auto object-contain fallback-logo" onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
              document.getElementById('fallback-text')!.style.display = 'block';
            }} />
            <div id="fallback-text" className="hidden">
              <span className="text-2xl font-bold tracking-wider text-gold">LUXE</span>
              <span className="text-2xl font-light tracking-widest text-white">DRIVE</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-gold-500 transition-colors uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
            <a href={`tel:+${siteData.phone}`}>
              <Button variant="outline" size="sm" className="gap-2">
                <Phone className="w-4 h-4" />
                Call Now
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden relative z-50 text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full h-screen glass-dark flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-medium text-white hover:text-gold-500 transition-colors uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
            <a href={`tel:+${siteData.phone}`} onClick={() => setMobileMenuOpen(false)}>
              <Button variant="primary" size="lg" className="gap-2 mt-4">
                <Phone className="w-5 h-5" />
                {siteData.phone}
              </Button>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
