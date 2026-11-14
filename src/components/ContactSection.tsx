import React from 'react';
import { SHOP_INFO } from '../data/shopData';
import { DynamicIcon } from './DynamicIcon';
import { motion } from 'motion/react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <DynamicIcon name="MapPin" className="w-4 h-4 text-amber-400" />
            <span>Visit or Connect With Us</span>
          </div>

          <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-3">
            Contact & Location Details
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            We are located at G3 Room, Gojan College, Alamadhi via Redhills, Chennai. Stop by or reach out on phone or WhatsApp!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Phone & WhatsApp Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900 text-white rounded-3xl p-6 shadow-xl border border-slate-800 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl pointer-events-none"></div>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
                  <DynamicIcon name="PhoneCall" className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-outfit font-extrabold text-xl text-white">Direct Contact</h3>
                  <p className="text-xs text-amber-300">Call or message for instant quote</p>
                </div>
              </div>

              <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700/80 mb-5">
                <span className="text-xs text-slate-400 font-medium block">Phone Number</span>
                <span className="font-outfit font-black text-2xl text-white tracking-wide block mt-0.5">
                  {SHOP_INFO.formattedPhone}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${SHOP_INFO.phone}`}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm transition-all shadow-md"
                >
                  <DynamicIcon name="PhoneCall" className="w-4 h-4" />
                  <span>Click to Call</span>
                </a>

                <a
                  href={SHOP_INFO.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-sm transition-all shadow-md"
                >
                  <DynamicIcon name="MessageCircle" className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </motion.div>

            {/* Official Email Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white rounded-3xl p-6 shadow-md flex items-center justify-between gap-4"
            >
              <div>
                <div className="text-xs uppercase tracking-wider font-bold text-blue-200 flex items-center gap-1.5 mb-1">
                  <DynamicIcon name="Mail" className="w-3.5 h-3.5" />
                  Official Shop Email
                </div>
                <h3 className="font-outfit font-extrabold text-base sm:text-lg text-amber-300 break-all">{SHOP_INFO.email}</h3>
                <p className="text-xs text-blue-100 mt-1">Send your PDFs, job applications or passport photos anytime</p>
              </div>

              <a
                href={`mailto:${SHOP_INFO.email}?subject=Inquiry%20from%20Website%20-%20Alpha%20Studio%20Hub`}
                className="px-4 py-3 rounded-2xl bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-2 hover:bg-amber-300 transition-colors shrink-0 shadow-md"
              >
                <span>Send Email</span>
                <DynamicIcon name="Send" className="w-3.5 h-3.5" />
              </a>
            </motion.div>

            {/* Instagram Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 text-white rounded-3xl p-6 shadow-md flex items-center justify-between gap-4"
            >
              <div>
                <div className="text-xs uppercase tracking-wider font-bold text-pink-200">Official Instagram</div>
                <h3 className="font-outfit font-extrabold text-xl">{SHOP_INFO.instagramHandle}</h3>
                <p className="text-xs text-pink-100 mt-1">Follow us for sample frames, design updates & offers!</p>
              </div>

              <a
                href={SHOP_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-3 rounded-2xl bg-white text-slate-950 font-bold text-xs flex items-center gap-2 hover:bg-pink-50 transition-colors shrink-0 shadow-md"
              >
                <span>Follow</span>
                <DynamicIcon name="ExternalLink" className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Address & Hours Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-50 border border-slate-200 rounded-3xl p-6"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-blue-100 text-blue-800">
                  <DynamicIcon name="MapPin" className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-outfit font-bold text-slate-900 text-base">Shop Address</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {SHOP_INFO.address}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200/80">
                <h4 className="font-outfit font-bold text-slate-900 text-xs uppercase tracking-wider text-slate-500 mb-2.5 flex items-center gap-1.5">
                  <DynamicIcon name="Clock" className="w-4 h-4 text-amber-500" />
                  Business Hours
                </h4>
                
                <div className="space-y-1.5 text-xs">
                  {SHOP_INFO.hours.map((item, i) => (
                    <div key={i} className="flex items-center justify-between text-slate-700">
                      <span className="font-medium">{item.days}</span>
                      <span className="font-bold text-slate-900 bg-white px-2 py-0.5 rounded border border-slate-200">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>

          {/* Embedded Google Map Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 h-full flex flex-col"
          >
            <div className="bg-slate-900 p-3 rounded-3xl border border-slate-800 shadow-xl h-full flex flex-col">
              
              {/* Map Bar Header */}
              <div className="flex items-center justify-between px-3 py-2 text-white mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="font-outfit font-bold text-sm">Google Maps Location</span>
                </div>

                <a
                  href={SHOP_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-amber-300 hover:text-amber-200 font-bold flex items-center gap-1 cursor-pointer"
                >
                  <span>Open in Google Maps App</span>
                  <DynamicIcon name="ExternalLink" className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Interactive Google Map iframe */}
              <div className="relative w-full h-[380px] sm:h-[450px] lg:h-[480px] rounded-2xl overflow-hidden bg-slate-800 border border-slate-700">
                <iframe
                  title="Nexoro Google Map Location"
                  src={SHOP_INFO.embedMapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="filter contrast-105"
                ></iframe>

                {/* Floating Map Marker Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 bg-slate-900/90 backdrop-blur-md p-3.5 rounded-2xl border border-slate-700 text-white shadow-xl flex items-center justify-between gap-4 max-w-sm">
                  <div>
                    <div className="font-outfit font-bold text-sm text-amber-400">Nexoro</div>
                    <div className="text-[11px] text-slate-300">13.3649567° N, 80.19123° E</div>
                  </div>

                  <a
                    href={SHOP_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-2 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs hover:bg-amber-300 transition-colors whitespace-nowrap shadow-xs"
                  >
                    Get Directions
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
