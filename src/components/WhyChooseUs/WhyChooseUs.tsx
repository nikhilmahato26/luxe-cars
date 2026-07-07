import { motion } from "framer-motion";
import { SectionHeading } from "../Common/SectionHeading";
import { Shield, Clock, Car, Map, CreditCard, Headphones, Sparkles, Wallet } from "lucide-react";

const features = [
  { icon: Car, title: "Latest Vehicles", desc: "Well-maintained and sanitized premium cars." },
  { icon: Map, title: "Self Drive Freedom", desc: "Explore Kashmir on your own terms." },
  { icon: Shield, title: "Hassle Free Booking", desc: "Instant confirmation via WhatsApp." },
  { icon: CreditCard, title: "No Hidden Charges", desc: "Transparent pricing with no surprises." },
  { icon: Wallet, title: "No Security Deposit", desc: "Rent your car with zero security deposit." },
  { icon: Sparkles, title: "Premium Experience", desc: "Top-notch customer service." },
  { icon: Clock, title: "Affordable Pricing", desc: "Luxury within your budget." },
  { icon: Headphones, title: "Instant Support", desc: "24/7 on-road assistance." },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 relative overflow-hidden bg-black">
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading 
          title="Why Choose LuxeDrive"
          subtitle="Experience the gold standard of self-drive car rentals in Kashmir."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass p-6 rounded-2xl hover:-translate-y-2 transition-all duration-300 group border border-white/5 hover:border-gold-500/30"
            >
              <div className="w-12 h-12 rounded-xl glass flex items-center justify-center mb-4 group-hover:bg-gold-500/20 transition-colors">
                <feature.icon className="w-6 h-6 text-gold-500" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
