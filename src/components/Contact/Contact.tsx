import { SectionHeading } from "../Common/SectionHeading";
import { siteData } from "../../data/site";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "../Common/Button";

export function Contact() {
  const whatsappUrl = `https://wa.me/${siteData.whatsappNumber}?text=Hello!`;

  return (
    <section id="contact" className="py-24 bg-dark-900">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Get In Touch"
          subtitle="Ready to start your journey? Contact us for bookings and inquiries."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Details */}
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-3xl h-full flex flex-col justify-center gap-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-full glass flex items-center justify-center shrink-0 group-hover:bg-gold-500/20 transition-colors">
                  <Phone className="w-6 h-6 text-gold-500" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Phone</h4>
                  <a href={`tel:+${siteData.phone}`} className="text-gray-400 hover:text-gold-500 transition-colors text-lg">
                    +{siteData.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-full glass flex items-center justify-center shrink-0 group-hover:bg-gold-500/20 transition-colors">
                  <Mail className="w-6 h-6 text-gold-500" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Email</h4>
                  <a href={`mailto:${siteData.email}`} className="text-gray-400 hover:text-gold-500 transition-colors text-lg">
                    {siteData.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-full glass flex items-center justify-center shrink-0 group-hover:bg-gold-500/20 transition-colors">
                  <MapPin className="w-6 h-6 text-gold-500" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Location</h4>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {siteData.address}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 pt-6 mt-6 border-t border-white/10">
                <a href={`tel:+${siteData.phone}`} className="flex-1">
                  <Button className="w-full">Call Now</Button>
                </a>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="flex-1">
                  <Button variant="outline" className="w-full">WhatsApp</Button>
                </a>
              </div>
            </div>
          </div>

          {/* Map Embed */}
          <div className="h-[400px] lg:h-auto rounded-3xl overflow-hidden glass-card border-white/10">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105741.07687834789!2d74.71761668266209!3d34.08365672108168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e18f8eec4c5ce7%3A0x6bba8c080e7c5b6b!2sParimpora%2C%20Srinagar!5e0!3m2!1sen!2sin!4v1709142858712!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
