import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutOwner } from './components/AboutOwner';
import { ServicesGrid } from './components/ServicesGrid';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PriceEstimatorModal } from './components/PriceEstimatorModal';
import { QuickPrintUploadModal } from './components/QuickPrintUploadModal';
import { DynamicIcon } from './components/DynamicIcon';
import { SHOP_INFO } from './data/shopData';

export default function App() {
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [quickPrintOpen, setQuickPrintOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* Sticky Top Navbar */}
      <Navbar 
        onOpenCalculator={() => setCalculatorOpen(true)}
        onOpenQuickPrint={() => setQuickPrintOpen(true)}
      />

      <main className="flex-grow">
        {/* Hero Banner Section */}
        <HeroSection 
          onOpenQuickPrint={() => setQuickPrintOpen(true)}
          onOpenCalculator={() => setCalculatorOpen(true)}
        />

        {/* About Owner Block */}
        <AboutOwner />

        {/* Interactive Services Grid with Live Search & Filters */}
        <ServicesGrid 
          onOpenQuickPrint={() => setQuickPrintOpen(true)}
        />

        {/* Customer Testimonials & Reviews */}
        <Testimonials />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Contact, Call/WhatsApp CTAs & Google Map */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer 
        onOpenCalculator={() => setCalculatorOpen(true)}
        onOpenQuickPrint={() => setQuickPrintOpen(true)}
      />

      {/* Modals */}
      <PriceEstimatorModal 
        isOpen={calculatorOpen}
        onClose={() => setCalculatorOpen(false)}
      />

      <QuickPrintUploadModal
        isOpen={quickPrintOpen}
        onClose={() => setQuickPrintOpen(false)}
      />

      {/* Floating Action Bar on Mobile / Desktop Sticky */}
      <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2 sm:gap-3">
        
        {/* Quick Send File Floating Button */}
        <button
          onClick={() => setQuickPrintOpen(true)}
          className="bg-slate-900 hover:bg-slate-800 text-amber-400 font-bold text-xs px-3.5 py-2.5 rounded-full shadow-lg border border-slate-700 flex items-center gap-2 transition-all hover:scale-105 cursor-pointer"
        >
          <DynamicIcon name="Upload" className="w-4 h-4 text-blue-400" />
          <span className="hidden sm:inline">Send File for Print</span>
        </button>

        {/* Sticky WhatsApp Floating Button */}
        <a
          href={SHOP_INFO.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="w-13 h-13 sm:w-14 sm:h-14 bg-emerald-500 hover:bg-emerald-600 text-slate-950 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 group relative"
          aria-label="Chat on WhatsApp"
        >
          <DynamicIcon name="MessageCircle" className="w-7 h-7 fill-slate-950" />
          <span className="absolute right-16 bg-slate-900 text-emerald-400 text-xs font-bold px-3 py-1.5 rounded-xl shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:block">
            Chat on WhatsApp
          </span>
        </a>
      </div>

    </div>
  );
}
