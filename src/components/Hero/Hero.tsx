import { motion } from "framer-motion";
import { Button } from "../Common/Button";
import { siteData } from "../../data/site";
import { Calendar, Car, Phone } from "lucide-react";

export function Hero() {
  const whatsappUrl = `https://wa.me/${siteData.whatsappNumber}?text=${encodeURIComponent("Hello! I am interested in booking a premium self-drive car.")}`;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image / Video overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://res.cloudinary.com/dynbpb9u0/image/upload/v1783330746/IMG_2632_duw1qo.png"
          alt="Luxury Car in Mountains"
          className="w-full h-full object-cover object-center"
        />
        {/* Luxury Black Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/80 via-dark-900/60 to-dark-900"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-12 gap-12 items-center">

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7 text-center lg:text-left mt-10 lg:mt-0"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
            Explore Kashmir On <br />
            <span className="text-gold">Your Own Terms</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Experience the freedom of self-drive with premium, well-maintained vehicles designed for unforgettable journeys through the breathtaking landscapes of Kashmir.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              <Button size="lg" className="w-full sm:w-auto">Book Your Ride</Button>
            </a>
            <a href="#fleet">
              <Button variant="glass" size="lg" className="w-full sm:w-auto">View Fleet</Button>
            </a>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm font-medium tracking-wide">
            {["Self Drive", "Premium Cars", "No Security Deposit", "Instant WhatsApp Booking", "Safe & Verified Vehicles"].map((highlight, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gold-500"></div>
                <span className="text-gray-300">{highlight}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quick Booking Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:col-span-5"
        >
          <div className="glass-card rounded-3xl p-8 border-t border-white/20">
            <h3 className="text-2xl font-semibold mb-6 text-center text-gold">Quick Booking</h3>

            <form className="space-y-5" onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const pickup = formData.get("pickup");
              const returnDate = formData.get("return");
              const vehicle = formData.get("vehicle");
              const phone = formData.get("phone");
              const text = `Hi! I want to book the ${vehicle} from ${pickup} to ${returnDate}. My contact is ${phone}.`;
              window.open(`https://wa.me/${siteData.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
            }}>

              <div className="space-y-2">
                <label className="text-sm text-gray-400">Pickup Date & Time</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input type="datetime-local" name="pickup" required className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-gold-500 transition-colors" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400">Return Date & Time</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input type="datetime-local" name="return" required className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-gold-500 transition-colors" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400">Select Vehicle</label>
                <div className="relative">
                  <Car className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select name="vehicle" required className="w-full bg-dark-800 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-gold-500 transition-colors appearance-none">
                    <option value="Hyundai i20 Knight">Hyundai i20 Knight Edition</option>
                    <option value="Hyundai i20 Asta">Hyundai i20 Asta Optional</option>
                    <option value="Maruti Brezza">Maruti Brezza</option>
                    <option value="Mahindra Thar">Mahindra Thar 4WD</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input type="tel" name="phone" required placeholder="Enter your number" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-gold-500 transition-colors" />
                </div>
              </div>

              <Button type="submit" className="w-full mt-4">
                Book on WhatsApp
              </Button>
            </form>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
