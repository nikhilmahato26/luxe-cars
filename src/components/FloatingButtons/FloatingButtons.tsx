import { useState, useEffect } from "react";
import { MessageCircle, Phone, ArrowUp } from "lucide-react";
import { siteData } from "../../data/site";
import { motion, AnimatePresence } from "framer-motion";

export function FloatingButtons() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappUrl = `https://wa.me/${siteData.whatsappNumber}?text=Hello!`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-end">
      {/* Scroll to Top */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-gold-500 hover:text-black transition-colors shadow-lg border-white/20"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <div className="flex gap-4">
        {/* Call Button (Mobile Only) */}
        <a 
          href={`tel:+${siteData.phone}`}
          className="md:hidden w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:scale-110 transition-transform"
        >
          <Phone className="w-6 h-6" />
        </a>

        {/* WhatsApp Button */}
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform relative group"
        >
          <MessageCircle className="w-7 h-7" />
          <span className="absolute right-full mr-4 bg-black/80 text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Chat on WhatsApp
          </span>
        </a>
      </div>
    </div>
  );
}
