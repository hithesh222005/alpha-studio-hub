import React, { useState, useMemo } from 'react';
import { SERVICES_DATA, CATEGORIES } from '../data/servicesData';
import { ServiceCategory, ServiceItem } from '../types';
import { DynamicIcon } from './DynamicIcon';
import { SHOP_INFO } from '../data/shopData';
import { motion, AnimatePresence } from 'motion/react';

interface ServicesGridProps {
  onOpenQuickPrint: () => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onOpenQuickPrint }) => {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filtered Services List
  const filteredServices = useMemo(() => {
    return SERVICES_DATA.filter((service) => {
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesSearch = 
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (service.highlights && service.highlights.some(h => h.toLowerCase().includes(searchQuery.toLowerCase())));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleWhatsAppInquiry = (service: ServiceItem) => {
    const text = encodeURIComponent(
      `Hello Alpha Studio Hub! I am interested in your service: "${service.title}". Please share details/pricing.`
    );
    window.open(`https://wa.me/${SHOP_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <DynamicIcon name="Sparkles" className="w-4 h-4 text-amber-600" />
            <span>Complete Digital & Printing Solutions</span>
          </div>

          <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Our Services at <span className="text-brand-multicolor">Alpha Studio Hub</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            Find everything you need — from instant studio photos & high-speed Xerox to government e-Sevai, bill payments, and travel ticket bookings.
          </p>
        </div>

        {/* Search & Category Filter Control Bar */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-slate-200 mb-10">
          
          {/* Live Search Input Box */}
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
              <DynamicIcon name="Search" className="w-5 h-5" />
            </div>
            
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search services (e.g. Passport photo, PAN card, Xerox, Bus ticket, Lamination)..."
              className="w-full pl-11 pr-10 py-3.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
            />

            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <DynamicIcon name="X" className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-slate-900 text-amber-400 shadow-md scale-102'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  <DynamicIcon name={cat.icon} className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-slate-500'}`} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Result Count Status */}
          <div className="mt-4 flex items-center justify-between text-xs text-slate-500 pt-3 border-t border-slate-100">
            <span>
              Showing <strong className="text-slate-900 font-bold">{filteredServices.length}</strong> services
              {searchQuery && <span> for "{searchQuery}"</span>}
            </span>

            {(searchQuery || selectedCategory !== 'all') && (
              <button
                onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
                className="text-blue-600 hover:underline font-semibold cursor-pointer"
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>

        {/* Services Cards Grid */}
        <AnimatePresence mode="wait">
          {filteredServices.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-16 bg-white rounded-3xl border border-dashed border-slate-300 p-8"
            >
              <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4 text-slate-400">
                <DynamicIcon name="Search" className="w-8 h-8" />
              </div>
              <h3 className="font-outfit font-bold text-slate-900 text-lg mb-2">No matching services found</h3>
              <p className="text-slate-500 text-sm max-w-md mx-auto mb-6">
                We couldn't find anything matching "{searchQuery}". But don't worry — we handle all types of custom printing and digital requests!
              </p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                className="px-5 py-2.5 rounded-xl bg-slate-900 text-amber-400 font-bold text-xs cursor-pointer hover:bg-slate-800"
              >
                View All Services
              </button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service, idx) => (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.04 }}
                  className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Subtle top card border glow on hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-purple-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  <div>
                    {/* Top Header Row */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-slate-900 text-amber-400 flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-slate-950 transition-all duration-300">
                        <DynamicIcon name={service.iconName} className="w-6 h-6" />
                      </div>

                      <div className="flex flex-col items-end gap-1">
                        <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                          {service.categoryLabel}
                        </span>

                        {service.popular && (
                          <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 flex items-center gap-1 shadow-xs">
                            <DynamicIcon name="Star" className="w-3 h-3 fill-slate-950" />
                            Popular
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-outfit font-extrabold text-xl text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Service Highlights / Tags */}
                    {service.highlights && (
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {service.highlights.map((tag, i) => (
                          <span key={i} className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-50 text-slate-600 border border-slate-200/60 flex items-center gap-1">
                            <DynamicIcon name="CheckCircle2" className="w-3 h-3 text-emerald-500" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Card Footer Action Bar */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <div className="flex flex-col">
                      <span className="text-[11px] text-slate-400 font-medium">Turnaround</span>
                      <span className="text-xs font-bold text-slate-800 flex items-center gap-1">
                        <DynamicIcon name="Clock" className="w-3.5 h-3.5 text-amber-500" />
                        {service.estTime || 'Fast Service'}
                      </span>
                    </div>

                    <button
                      onClick={() => handleWhatsAppInquiry(service)}
                      className="px-3.5 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs hover:shadow-emerald-200"
                    >
                      <DynamicIcon name="MessageCircle" className="w-4 h-4" />
                      <span>Inquire</span>
                    </button>
                  </div>

                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>

        {/* Quick Send File Banner below Services */}
        <div className="mt-12 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-400 text-slate-950 font-black text-2xl flex items-center justify-center shrink-0 shadow-lg">
              <DynamicIcon name="Upload" className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-outfit font-bold text-xl sm:text-2xl text-white mb-1">
                Need urgent printouts right now?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm">
                Send your PDF or document file to us on WhatsApp and pick up printed copies whenever you arrive!
              </p>
            </div>
          </div>

          <button
            onClick={onOpenQuickPrint}
            className="w-full md:w-auto px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-sm transition-all whitespace-nowrap cursor-pointer shadow-lg shadow-amber-400/20"
          >
            Upload & Send File
          </button>
        </div>

      </div>
    </section>
  );
};
