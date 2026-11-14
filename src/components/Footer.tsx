import React from 'react';
import { SHOP_INFO } from '../data/shopData';
import { DynamicIcon } from './DynamicIcon';

interface FooterProps {
  onOpenCalculator: () => void;
  onOpenQuickPrint: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCalculator, onOpenQuickPrint }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-red-500 via-purple-600 to-emerald-500 p-0.5 shadow-md">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-amber-400 font-outfit font-black text-xl">
                  N
                </div>
              </div>
              <span className="font-outfit text-2xl font-black text-brand-multicolor">
                Nexoro
              </span>
            </a>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Your one stop service centre for printing, digital services, banking, academic projects and lamination, at Gojan College, Chennai.
            </p>

            <div className="text-xs text-slate-300 font-medium space-y-1 bg-slate-900/80 p-3 rounded-xl border border-slate-800 inline-block">
              <div className="text-amber-400 font-bold flex items-center gap-1.5">
                <DynamicIcon name="UserCheck" className="w-3.5 h-3.5" />
                Founder & CEO: Suman Kumar S
              </div>
              <a 
                href={`mailto:${SHOP_INFO.email}`} 
                className="text-slate-300 hover:text-amber-300 transition-colors flex items-center gap-1.5 break-all"
              >
                <DynamicIcon name="Mail" className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>{SHOP_INFO.email}</span>
              </a>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <img src="/nexoro_upi_qr.png" alt="Nexoro UPI QR code" className="w-16 h-16 rounded-lg bg-white p-1 object-contain" />
              <div className="text-xs text-slate-300">
                <div className="font-bold text-amber-300">Pay via UPI</div>
                <div className="break-all">7867076197@nyes</div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={SHOP_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 hover:bg-emerald-500/10 text-emerald-400 flex items-center justify-center transition-all"
                aria-label="WhatsApp"
              >
                <DynamicIcon name="MessageCircle" className="w-5 h-5" />
              </a>

              <a
                href={`tel:${SHOP_INFO.phone}`}
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 hover:bg-amber-500/10 text-amber-400 flex items-center justify-center transition-all"
                aria-label="Call Shop"
              >
                <DynamicIcon name="PhoneCall" className="w-5 h-5" />
              </a>

              <a
                href={`mailto:${SHOP_INFO.email}`}
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 hover:bg-amber-500/10 text-amber-400 flex items-center justify-center transition-all"
                aria-label="Email Shop"
                title={SHOP_INFO.email}
              >
                <DynamicIcon name="Mail" className="w-5 h-5" />
              </a>

              <a
                href={SHOP_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-pink-500/50 hover:bg-pink-500/10 text-pink-400 flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <DynamicIcon name="ExternalLink" className="w-5 h-5" />
              </a>

              <a
                href={SHOP_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 hover:bg-blue-500/10 text-blue-400 flex items-center justify-center transition-all"
                aria-label="Google Maps"
              >
                <DynamicIcon name="MapPin" className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-outfit font-bold text-white text-sm uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Our Services Catalog</a></li>
              <li><a href="#about" className="hover:text-amber-400 transition-colors">Meet the Owner</a></li>
              <li><button onClick={onOpenCalculator} className="hover:text-amber-400 transition-colors text-left cursor-pointer">Print Price Estimator</button></li>
              <li><button onClick={onOpenQuickPrint} className="hover:text-amber-400 transition-colors text-left cursor-pointer">Send Print Files</button></li>
              <li><a href="#reviews" className="hover:text-amber-400 transition-colors">Customer Reviews</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">Shop Location & Map</a></li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h3 className="font-outfit font-bold text-white text-sm uppercase tracking-wider mb-4">Core Services</h3>
            <ul className="space-y-2.5 text-xs">
              <li>Passport Photos</li>
              <li>Xerox (B&W & Color)</li>
              <li>Spiral Binding & Lamination</li>
              <li>TNeGA e-Sevai Applications</li>
              <li>PAN Card & Aadhaar Print</li>
              <li>Bus, Train & Flight Tickets</li>
            </ul>
          </div>

          {/* Shop Hours */}
          <div>
            <h3 className="font-outfit font-bold text-white text-sm uppercase tracking-wider mb-4">Working Hours</h3>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex justify-between">
                <span>Mon - Sat:</span>
                <span className="font-bold text-amber-400">8:30 AM - 9:30 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span className="font-bold text-amber-400">9:00 AM - 2:00 PM</span>
              </li>
              <li className="pt-2 text-[11px] text-slate-400 italic">
                Emergency printing call support available!
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Credits Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} <span className="text-white font-bold">Nexoro</span>. All rights reserved.
          </div>

          <div className="flex items-center gap-1 text-slate-300 font-medium">
            <span>Made with</span>
            <span className="text-red-500 animate-pulse text-sm">❤️</span>
            <span>for Nexoro</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
