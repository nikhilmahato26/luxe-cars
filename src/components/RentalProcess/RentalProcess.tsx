import { motion } from "framer-motion";
import { SectionHeading } from "../Common/SectionHeading";
import { Car, CalendarCheck, MessageCircle, CreditCard, Key, Map } from "lucide-react";

const steps = [
  { icon: Car, title: "Choose Vehicle", desc: "Select from our premium fleet." },
  { icon: CalendarCheck, title: "Select Dates", desc: "Pick your travel dates." },
  { icon: MessageCircle, title: "Book via WhatsApp", desc: "Instant confirmation." },
  { icon: CreditCard, title: "Pay Advance", desc: "Secure your booking." },
  { icon: Key, title: "Collect Vehicle", desc: "Pick up your sanitized car." },
  { icon: Map, title: "Enjoy Kashmir", desc: "Hit the beautiful roads." },
];

export function RentalProcess() {
  return (
    <section id="process" className="py-24 bg-dark-800">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="How It Works"
          subtitle="A seamless and luxurious rental experience from start to finish."
        />

        <div className="mt-20 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 rounded-full glass-dark flex items-center justify-center mb-6 shadow-xl border-2 border-gold-500/20 relative group hover:border-gold-500 transition-colors duration-300">
                  <step.icon className="w-10 h-10 text-gold-500 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gold-600 text-black flex items-center justify-center font-bold text-sm shadow-lg">
                    {idx + 1}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                <p className="text-sm text-gray-400">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
