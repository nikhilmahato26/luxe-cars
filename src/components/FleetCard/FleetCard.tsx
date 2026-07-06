import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Check, Settings, Fuel, Users, Zap, Phone } from "lucide-react";
import { Button } from "../Common/Button";
import type { Vehicle } from "../../data/fleet";
import { siteData } from "../../data/site";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./swiper-custom.css";

interface FleetCardProps {
  vehicle: Vehicle;
  index: number;
}

export function FleetCard({ vehicle, index }: FleetCardProps) {
  const [showQR, setShowQR] = useState(false);
  const whatsappUrl = `https://wa.me/${siteData.whatsappNumber}?text=${encodeURIComponent(`Hi! I'm interested in booking the ${vehicle.name} for ₹${vehicle.pricePerDay}/Day.`)}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-card rounded-3xl overflow-hidden group hover:-translate-y-2 transition-transform duration-500"
    >
      {/* Image Carousel */}
      <div className="relative h-64 md:h-80 w-full overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          effect="fade"
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="w-full h-full"
        >
          {vehicle.images.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="w-full h-full relative">
                <img
                  src={img}
                  alt={`${vehicle.name} view ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute top-4 right-4 z-10 glass px-4 py-1 rounded-full text-gold font-bold">
          {vehicle.modelYear}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">{vehicle.name}</h3>
            <p className="text-gray-400 text-sm tracking-widest uppercase">Premium Self Drive</p>
          </div>
          <div className="text-right">
            <span className="text-gold text-2xl font-bold">₹{vehicle.pricePerDay}</span>
            <span className="text-gray-400 text-sm block">/ Day</span>
          </div>
        </div>

        {/* Specs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-y border-white/10 mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <Settings className="w-4 h-4 text-gold-500" /> {vehicle.transmission}
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <Fuel className="w-4 h-4 text-gold-500" /> {vehicle.fuelType}
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <Users className="w-4 h-4 text-gold-500" /> {vehicle.seatingCapacity} Seats
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <Zap className="w-4 h-4 text-gold-500" /> Availability
          </div>
        </div>

        {/* Features */}
        <div className="mb-8">
          <p className="text-sm text-gray-400 mb-3 uppercase tracking-wider font-semibold">Premium Features</p>
          <div className="grid grid-cols-2 gap-y-2">
            {vehicle.features.map((feature, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                <Check className="w-4 h-4 text-gold-500" />
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* QR Payment Card / Actions */}
        <div className="relative">
          {showQR ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="glass p-6 rounded-2xl flex flex-col items-center justify-center text-center mb-6"
            >
              <h4 className="text-lg font-bold text-gold mb-2">Scan & Pay</h4>
              <p className="text-sm text-gray-400 mb-4">Secure your booking instantly by scanning the QR code.</p>
              <img src="/src/assets/qr-code.png" alt="Payment QR Code" className="w-40 h-40 bg-white p-2 rounded-xl mb-4" />
              <p className="text-xs text-gray-500">Accepted Payments</p>
              <div className="flex gap-2 text-xs text-gray-400 mt-2 font-medium">
                <span>UPI</span>•<span>PhonePe</span>•<span>GPay</span>•<span>Paytm</span>
              </div>
              <button 
                onClick={() => setShowQR(false)}
                className="mt-4 text-sm text-gray-400 hover:text-white underline"
              >
                Close Payment View
              </button>
            </motion.div>
          ) : (
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="flex-1">
                <Button className="w-full gap-2">
                  <Phone className="w-4 h-4" /> Book on WhatsApp
                </Button>
              </a>
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={() => setShowQR(true)}
              >
                Buy Now
              </Button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
