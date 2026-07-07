import { siteData } from "../../data/site";
import { Phone, Mail, MapPin, Camera, Globe, ArrowRight } from "lucide-react";
import logoImg from "../../assets/logo.jpg";

export function Footer() {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <a href="#" className="flex items-center gap-2">
              <img src={logoImg} alt="LuxeDrive Logo" className="h-14 md:h-16 w-auto object-contain drop-shadow-lg" />
            </a>
            <p className="text-gray-400 text-sm leading-relaxed">
              Experience the freedom of self-drive with premium, well-maintained vehicles designed for unforgettable journeys through the breathtaking landscapes of Kashmir.
            </p>
            <div className="flex gap-4">
              <a href={siteData.socials.instagram} className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-gold-500/20 hover:text-gold-500 transition-colors text-white">
                <Camera className="w-5 h-5" />
              </a>
              <a href={siteData.socials.facebook} className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-gold-500/20 hover:text-gold-500 transition-colors text-white">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Fleet', 'Process', 'FAQ', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-gold-500 transition-colors flex items-center gap-2 text-sm">
                    <ArrowRight className="w-4 h-4" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Legal</h4>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms & Conditions', 'Cancellation Policy'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors flex items-center gap-2 text-sm">
                    <ArrowRight className="w-4 h-4" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="w-5 h-5 text-gold-500 shrink-0" />
                <span>{siteData.address}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Phone className="w-5 h-5 text-gold-500 shrink-0" />
                <a href={`tel:+${siteData.phone}`} className="hover:text-gold-500 transition-colors">+{siteData.phone}</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="w-5 h-5 text-gold-500 shrink-0" />
                <a href={`mailto:${siteData.email}`} className="hover:text-gold-500 transition-colors">{siteData.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} LuxeDrive Kashmir. All rights reserved.</p>
          <p>Designed for Luxury Mobility.</p>
        </div>
      </div>
    </footer>
  );
}
