import React, { useState } from 'react';
import { FAQS } from '../data/shopData';
import { DynamicIcon } from './DynamicIcon';
import { motion, AnimatePresence } from 'motion/react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 border border-blue-300 text-blue-900 text-xs font-bold uppercase tracking-wider mb-3">
            <DynamicIcon name="HelpCircle" className="w-4 h-4 text-blue-600" />
            <span>Got Questions?</span>
          </div>

          <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Frequently Asked Questions
          </h2>

          <p className="text-slate-600 text-base">
            Everything you need to know about visiting Nexoro.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-outfit font-bold text-slate-900 text-base sm:text-lg cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  <span>{faq.question}</span>
                  <div className={`p-1 rounded-full bg-slate-100 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-amber-400 text-slate-950' : 'text-slate-500'}`}>
                    <DynamicIcon name="ChevronDown" className="w-5 h-5" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
