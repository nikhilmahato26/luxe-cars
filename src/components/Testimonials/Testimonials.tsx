import { motion } from "framer-motion";
import { SectionHeading } from "../Common/SectionHeading";
import { testimonials } from "../../data/testimonials";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export function Testimonials() {
  return (
    <section className="py-24 bg-dark-900 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading 
          title="What Our Clients Say"
          subtitle="Trusted by adventurers, families, and luxury seekers."
        />

        <div className="mt-16 max-w-5xl mx-auto">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            pagination={{ clickable: true, el: '.swiper-pagination-custom' }}
            autoplay={{ delay: 4000 }}
            className="pb-16"
          >
            {testimonials.map((testimonial, idx) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-dark p-8 rounded-3xl h-full border border-white/5 hover:border-gold-500/30 transition-colors"
                >
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold-500 text-gold-500" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-8 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-500 font-bold text-xl border border-gold-500/50">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <h5 className="font-bold text-white">{testimonial.author}</h5>
                      <p className="text-sm text-gray-500">Verified Customer</p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination-custom flex justify-center gap-2 mt-4"></div>
        </div>
      </div>
    </section>
  );
}
