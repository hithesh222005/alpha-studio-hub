import React, { useState, useEffect } from 'react';
import { SHOP_INFO } from '../data/shopData';
import { DynamicIcon } from './DynamicIcon';

interface NavbarProps {
  onOpenCalculator: () => void;
  onOpenQuickPrint: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCalculator, onOpenQuickPrint }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-100' 
        : 'bg-white py-4 border-b border-slate-100'
    }`}>
      {/* Top Notification Bar */}
      <div className="bg-slate-900 text-white text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Open Today: 8:30 AM - 9:30 PM
            </span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-300">📍 G3 Room, Gojan College, Alamadhi, Chennai</span>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={`mailto:${SHOP_INFO.email}`} 
              className="text-slate-300 hover:text-amber-300 transition-colors flex items-center gap-1.5"
            >
              <DynamicIcon name="Mail" className="w-3.5 h-3.5 text-blue-400" />
              <span>{SHOP_INFO.email}</span>
            </a>
            <span className="text-slate-600">|</span>
            <button 
              onClick={onOpenQuickPrint} 
              className="text-amber-300 hover:text-amber-200 font-medium flex items-center gap-1 transition-colors cursor-pointer"
            >
              <DynamicIcon name="Upload" className="w-3.5 h-3.5" />
              Send Print File
            </button>
            <span className="text-slate-600">|</span>
            <a 
              href={SHOP_INFO.instagramUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="text-slate-300 hover:text-pink-400 transition-colors flex items-center gap-1"
            >
              Instagram: {SHOP_INFO.instagramHandle}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Branding */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-tr from-red-500 via-purple-600 via-blue-600 to-emerald-500 p-0.5 shadow-md group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center text-amber-400 font-outfit font-black text-xl sm:text-2xl">
                N
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-outfit text-xl sm:text-2xl font-black tracking-tight text-brand-multicolor">
                  Nexoro
                </span>
                <span className="bg-amber-400 text-slate-900 font-bold text-[10px] uppercase px-1.5 py-0.5 rounded shadow-xs hidden sm:inline-block">
                  Studio
                </span>
              </div>
              <span className="text-[11px] sm:text-xs text-slate-500 font-medium tracking-wide">
                Printing • Digital • Banking • Academic
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 font-medium text-slate-700 text-sm">
            <a href="#services" className="hover:text-blue-600 transition-colors py-1">Services</a>
            <a href="#about" className="hover:text-blue-600 transition-colors py-1">Meet the Owner</a>
            <button onClick={onOpenCalculator} className="hover:text-blue-600 transition-colors py-1 flex items-center gap-1 text-slate-700 font-medium cursor-pointer">
              <DynamicIcon name="Calculator" className="w-4 h-4 text-amber-500" />
              Price Estimator
            </button>
            <a href="#reviews" className="hover:text-blue-600 transition-colors py-1">Reviews</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors py-1">Contact & Map</a>
          </nav>

          {/* Action CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${SHOP_INFO.phone}`}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-slate-200 text-slate-800 font-semibold text-sm hover:bg-slate-50 hover:border-slate-300 transition-all shadow-xs"
            >
              <DynamicIcon name="PhoneCall" className="w-4 h-4 text-blue-600" />
              <span>Call Now</span>
            </a>

            <a
              href={SHOP_INFO.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-all shadow-sm shadow-emerald-200 hover:shadow-md hover:-translate-y-0.5"
            >
              <DynamicIcon name="MessageCircle" className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            <DynamicIcon name={mobileMenuOpen ? 'X' : 'Menu'} className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-3 font-medium text-slate-800 text-base">
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-50 flex items-center justify-between"
            >
              <span>Our Services</span>
              <DynamicIcon name="ChevronDown" className="w-4 h-4 text-slate-400 -rotate-90" />
            </a>

            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-50 flex items-center justify-between"
            >
              <span>Meet the Owner</span>
              <DynamicIcon name="UserCheck" className="w-4 h-4 text-slate-400" />
            </a>

            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenCalculator(); }}
              className="py-2 px-3 rounded-lg hover:bg-slate-50 flex items-center justify-between text-left text-slate-800 font-medium"
            >
              <span className="flex items-center gap-2">
                <DynamicIcon name="Calculator" className="w-4 h-4 text-amber-500" />
                Price Estimator
              </span>
              <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-bold">Calculator</span>
            </button>

            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenQuickPrint(); }}
              className="py-2 px-3 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-between font-semibold"
            >
              <span className="flex items-center gap-2">
                <DynamicIcon name="Upload" className="w-4 h-4 text-blue-600" />
                Send Document for Printing
              </span>
              <DynamicIcon name="ArrowRight" className="w-4 h-4" />
            </button>

            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-slate-50 flex items-center justify-between"
            >
              <span>Location & Map</span>
              <DynamicIcon name="MapPin" className="w-4 h-4 text-slate-400" />
            </a>

            <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 mt-1">
              <a
                href={`tel:${SHOP_INFO.phone}`}
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-300 text-slate-800 font-bold text-sm bg-slate-50"
              >
                <DynamicIcon name="PhoneCall" className="w-4 h-4 text-blue-600" />
                Call Now
              </a>

              <a
                href={SHOP_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-sm"
              >
                <DynamicIcon name="MessageCircle" className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
