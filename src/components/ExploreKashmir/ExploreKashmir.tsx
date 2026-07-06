import { motion } from "framer-motion";
import { SectionHeading } from "../Common/SectionHeading";
import { destinations } from "../../data/destinations";
import { Button } from "../Common/Button";

export function ExploreKashmir() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Explore Kashmir"
          subtitle="Discover the breathtaking landscapes of Paradise on Earth."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-16">
          {destinations.map((dest, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative h-96 rounded-3xl overflow-hidden cursor-pointer"
            >
              <img 
                src={dest.image} 
                alt={dest.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-gold-500 transition-colors">{dest.name}</h4>
                <div className="overflow-hidden">
                  <a href="#fleet" className="block transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <Button variant="outline" size="sm" className="w-full text-white border-white hover:bg-white hover:text-black">
                      Book a Ride
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
