import React from 'react';
import { SHOP_INFO } from '../data/shopData';
import { DynamicIcon } from './DynamicIcon';
import { motion } from 'motion/react';

export const AboutOwner: React.FC = () => {
  const { owner } = SHOP_INFO;

  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-y border-slate-200 relative overflow-hidden">
      {/* Decorative Light Radial Gradients */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-50 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Owner Image Block */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative max-w-sm sm:max-w-md w-full">
              {/* Background Accent Frame */}
              <div className="absolute -inset-2 rounded-3xl bg-amber-400/30 rotate-2"></div>
              
              <div className="relative rounded-3xl bg-slate-900 p-2 shadow-xl border border-slate-200 overflow-hidden">
                <img
                  src={owner.photoUrl}
                  alt={owner.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto rounded-2xl object-cover object-top aspect-[3/4] shadow-md"
                />

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700 text-white">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                    <span className="font-outfit font-bold text-base">{owner.name}</span>
                  </div>
                  <p className="text-xs text-amber-300 font-medium">{owner.title} • Nexoro</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Owner Content Block */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
              <DynamicIcon name="UserCheck" className="w-4 h-4 text-blue-600" />
              <span>Meet the Person Behind the Shop</span>
            </div>

            <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Your Trusted Local Partner for Every Print & e-Service Need
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
              {owner.bio}
            </p>

            {/* Core Pillars / Guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-amber-100 text-amber-800">
                  <DynamicIcon name="ShieldCheck" className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-outfit font-bold text-slate-900 text-sm">100% Accuracy Guarantee</h3>
                  <p className="text-xs text-slate-600 mt-1">Carefully verified e-Sevai, PAN card, and Aadhaar forms to prevent application rejections.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-800">
                  <DynamicIcon name="Clock" className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-outfit font-bold text-slate-900 text-sm">Express Turnaround</h3>
                  <p className="text-xs text-slate-600 mt-1">Instant passport photo prints and high-speed Xerox machine for zero waiting line.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-blue-100 text-blue-800">
                  <DynamicIcon name="ThumbsUp" className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-outfit font-bold text-slate-900 text-sm">Honest & Fair Pricing</h3>
                  <p className="text-xs text-slate-600 mt-1">Clear price list for Xerox copies, binding, and government applications without hidden charges.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-purple-100 text-purple-800">
                  <DynamicIcon name="MessageCircle" className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-outfit font-bold text-slate-900 text-sm">WhatsApp Pre-Order</h3>
                  <p className="text-xs text-slate-600 mt-1">Send your documents on WhatsApp from home and collect printed copies on your way!</p>
                </div>
              </div>
            </div>

            {/* Direct Contact & Owner Signature */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-amber-400 text-slate-950 font-black text-xl flex items-center justify-center font-outfit">
                  N
                </div>
                <div>
                  <div className="font-outfit font-bold text-sm text-amber-300">Have a custom requirement?</div>
                  <div className="text-xs text-slate-300">Call or WhatsApp the owner directly at {SHOP_INFO.formattedPhone}</div>
                </div>
              </div>

              <a
                href={SHOP_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs transition-all text-center whitespace-nowrap"
              >
                Chat with Owner
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
