import React from 'react';
import { REVIEWS, SHOP_INFO } from '../data/shopData';
import { DynamicIcon } from './DynamicIcon';
import { motion } from 'motion/react';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-white border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-3">
            <DynamicIcon name="ThumbsUp" className="w-4 h-4 text-emerald-600" />
            <span>Customer Feedback</span>
          </div>

          <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-3">
            Loved by Our Local Community
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            See what students, parents, and local business owners have to say about Nexoro.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <DynamicIcon key={i} name="Star" className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-slate-700 text-sm leading-relaxed italic mb-4">
                  "{review.comment}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between">
                <div>
                  <h3 className="font-outfit font-bold text-slate-900 text-sm">{review.name}</h3>
                  <span className="text-[11px] text-slate-500">{review.role}</span>
                </div>
                <span className="text-[10px] text-slate-400 font-medium">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall Rating Banner */}
        <div className="mt-10 p-4 rounded-2xl bg-amber-50 border border-amber-200/80 flex flex-wrap items-center justify-between gap-4 max-w-2xl mx-auto text-center sm:text-left">
          <div className="flex items-center gap-3 mx-auto sm:mx-0">
            <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 font-black text-lg flex items-center justify-center font-outfit">
              5.0
            </div>
            <div>
              <div className="font-outfit font-bold text-slate-900 text-sm">4.9 / 5.0 Rating on Google Reviews</div>
              <div className="text-xs text-slate-600">Based on 150+ happy local customer ratings</div>
            </div>
          </div>

          <a
            href={SHOP_INFO.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-bold text-amber-900 hover:text-amber-950 flex items-center gap-1 mx-auto sm:mx-0 cursor-pointer underline"
          >
            <span>View All Google Reviews</span>
            <DynamicIcon name="ExternalLink" className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
