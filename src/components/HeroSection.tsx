import React from 'react';
import { SHOP_INFO } from '../data/shopData';
import { DynamicIcon } from './DynamicIcon';
import { motion } from 'motion/react';

interface HeroSectionProps {
  onOpenQuickPrint: () => void;
  onOpenCalculator: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenQuickPrint, onOpenCalculator }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-10 pb-16 lg:pt-16 lg:pb-24">
      {/* Background Decorative Gradients & Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-25"></div>
      
      {/* Colorful Accent Glow Spheres */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Local Trust Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-semibold mb-6 shadow-inner"
            >
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              <span>Your One Stop Service Centre in Chennai</span>
              <DynamicIcon name="Award" className="w-4 h-4 text-amber-400" />
            </motion.div>

            {/* Main Brand Name Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-4"
            >
              <span className="block text-white">Welcome to</span>
              <span className="text-brand-multicolor filter drop-shadow-sm">
                Nexoro
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-amber-400 font-bold text-lg sm:text-xl lg:text-2xl mb-4 font-outfit tracking-wide flex items-center gap-2"
            >
              <span className="bg-amber-400 text-slate-950 px-2 py-0.5 rounded text-sm uppercase font-black">Tagline</span>
              "{SHOP_INFO.tagline}"
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed max-w-2xl"
            >
              {SHOP_INFO.subTagline}
            </motion.p>

            {/* Quick Feature Badges */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full mb-8"
            >
              <div className="bg-slate-800/70 border border-slate-700/60 rounded-xl p-2.5 flex items-center gap-2">
                <div className="p-2 rounded-lg bg-red-500/20 text-red-400">
                  <DynamicIcon name="Printer" className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Xerox & Print</div>
                  <div className="text-xs font-bold text-white">B&W / Color</div>
                </div>
              </div>

              <div className="bg-slate-800/70 border border-slate-700/60 rounded-xl p-2.5 flex items-center gap-2">
                <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400">
                  <DynamicIcon name="Camera" className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Passport Photo</div>
                  <div className="text-xs font-bold text-white">In 5 Mins</div>
                </div>
              </div>

              <div className="bg-slate-800/70 border border-slate-700/60 rounded-xl p-2.5 flex items-center gap-2">
                <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                  <DynamicIcon name="Landmark" className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Govt Services</div>
                  <div className="text-xs font-bold text-white">e-Sevai / PAN</div>
                </div>
              </div>

              <div className="bg-slate-800/70 border border-slate-700/60 rounded-xl p-2.5 flex items-center gap-2">
                <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                  <DynamicIcon name="Ticket" className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Travel Tickets</div>
                  <div className="text-xs font-bold text-white">Bus/Train/Flight</div>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap gap-4 w-full sm:w-auto"
            >
              <a
                href={SHOP_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-base transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5"
              >
                <DynamicIcon name="MessageCircle" className="w-5 h-5 fill-slate-950" />
                <span>Contact Us on WhatsApp</span>
              </a>

              <a
                href={`tel:${SHOP_INFO.phone}`}
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-base transition-all shadow-lg shadow-amber-400/20 hover:-translate-y-0.5"
              >
                <DynamicIcon name="PhoneCall" className="w-5 h-5" />
                <span>Call Now: {SHOP_INFO.phone}</span>
              </a>

              <button
                onClick={onOpenQuickPrint}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-sm transition-colors cursor-pointer"
              >
                <DynamicIcon name="Upload" className="w-4 h-4 text-blue-400" />
                <span>Send File for Print</span>
              </button>
            </motion.div>

            {/* Sub-text disclaimer */}
            <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
              <DynamicIcon name="CheckCircle2" className="w-4 h-4 text-emerald-400" />
              <span>Instant response on WhatsApp • High speed color & B&W copying</span>
            </div>

          </div>

          {/* Right Featured Owner Portrait Frame Column */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-sm sm:max-w-md group"
            >
              {/* Outer Glowing Border Card */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-red-500 via-purple-600 via-blue-600 to-amber-400 opacity-70 blur-md group-hover:opacity-100 transition duration-500"></div>

              {/* Main Card Container */}
              <div className="relative rounded-3xl bg-slate-900 border border-slate-700 p-4 sm:p-5 shadow-2xl overflow-hidden">
                
                {/* Shop Signage Badge Header */}
                <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20"></span>
                    <span className="text-xs font-bold text-slate-200 uppercase tracking-wider">Official Owner & Founder</span>
                  </div>
                  <span className="bg-amber-400/20 border border-amber-400/40 text-amber-300 font-bold text-[11px] px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <DynamicIcon name="ShieldCheck" className="w-3.5 h-3.5 text-amber-400" />
                    Verified Operator
                  </span>
                </div>

                {/* Owner Photo Container with Studio Overlay */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-950 aspect-[3/4] border border-slate-800 shadow-inner group-hover:scale-[1.01] transition-transform duration-300">
                  
                  {/* Studio Image */}
                  <img
                    src={SHOP_INFO.images.ownerPortrait}
                    alt="Owner of Nexoro"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top filter brightness-105 contrast-105"
                  />

                  {/* Gradient Overlay for Sleek Professional Look */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/20"></div>

                  {/* Top Badge Overlay */}
                  <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full border border-slate-700/80 text-amber-400 text-xs font-bold flex items-center gap-1.5 shadow-lg">
                    <DynamicIcon name="Star" className="w-3.5 h-3.5 fill-amber-400" />
                    <span>5.0 Rated Leader</span>
                  </div>

                  {/* Bottom Text Banner Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent">
                    <div className="font-outfit text-xl font-bold text-white flex items-center gap-2">
                      <span>{SHOP_INFO.owner.name}</span>
                      <DynamicIcon name="CheckCircle2" className="w-5 h-5 text-blue-400 fill-blue-500/20" />
                    </div>
                    <p className="text-xs text-amber-300 font-medium">
                      {SHOP_INFO.owner.title} • Nexoro
                    </p>
                  </div>
                </div>

                {/* Footer Quote Card below Photo */}
                <div className="mt-3 p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-slate-300 text-xs italic leading-relaxed flex items-start gap-2.5">
                  <span className="text-2xl text-amber-400 font-serif leading-none">“</span>
                  <div>
                    <span className="text-slate-200 font-medium not-italic">"Providing fast, accurate, and transparent services for every customer who walks through our doors."</span>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
