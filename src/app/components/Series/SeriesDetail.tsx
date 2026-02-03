'use client';

import React from 'react';
import { Icon } from '@iconify/react';
import { Link } from '@/i18n/navigation';

interface Book {
  level: string;
  title: string;
  desc: string;
  color: string;
}

interface Feature {
  title: string;
  desc: string;
  icon: string;
}

interface SeriesDetailProps {
  title: string;
  description: string;
  coverImage?: string; // We can add this later
  features?: Feature[];
  books?: Book[];
  locale?: string;
}

export default function SeriesDetail({ 
  title, 
  description, 
  features = [], 
  books = [],
  locale = 'en'
}: SeriesDetailProps) {
  
  const isRTL = locale === 'ar';

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-brand-navy pt-32 pb-32 rounded-b-[4rem] shadow-soft-lg z-10">
        
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white rounded-full blur-[120px] mix-blend-overlay translate-x-1/3 -translate-y-1/3"></div>
            <Icon icon="solar:book-bookmark-bold" className="absolute bottom-20 left-20 text-9xl text-brand-sky animate-pulse-slow" />
        </div>

        <div className="container mx-auto max-w-7xl px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Text Content */}
          <div className="text-center lg:rtl:text-right lg:ltr:text-left">
             <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/10 border border-white/20 text-brand-sky-light text-sm font-bold mb-6 backdrop-blur-md">
                <Icon icon="solar:verified-check-bold" className="text-brand-gold" />
                <span>Certified Curriculum</span>
             </div>
             
             <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
                {title}
             </h1>
             
             <p className="text-xl text-brand-sky-100 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
                {description}
             </p>

             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="px-8 py-4 bg-brand-orange text-white rounded-2xl font-bold shadow-3d hover:shadow-3d-pressed hover:translate-y-1 transition-all flex items-center justify-center gap-3">
                   <Icon icon="solar:cart-large-2-bold" className="text-xl" />
                   <span>Buy Complete Series</span>
                </button>
                <button className="px-8 py-4 bg-white/10 text-white rounded-2xl font-bold border border-white/10 hover:bg-white/20 transition-all flex items-center justify-center gap-3">
                   <Icon icon="solar:file-download-bold" className="text-xl" />
                   <span>Download Sample</span>
                </button>
             </div>
          </div>

          {/* 3D Book Mockup Visualization */}
          <div className="relative flex justify-center perspective-1000">
             {/* The Book */}
             <div className="relative w-64 md:w-80 aspect-[3/4] bg-white rounded-r-2xl rounded-l-md shadow-[20px_20px_60px_rgba(0,0,0,0.5)] transform rotate-y-[-15deg] hover:rotate-y-[0deg] transition-transform duration-700 z-20 group cursor-pointer">
                {/* Book Spine Effect */}
                <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-gray-300 to-white opacity-20 rounded-l-md z-30"></div>
                
                {/* Cover Design (Simulated) */}
                <div className="absolute inset-0 rounded-r-2xl overflow-hidden bg-brand-navy-light flex flex-col items-center justify-center p-6 border-l-4 border-gray-200">
                    <div className="w-full h-full border-2 border-brand-gold/50 rounded-xl p-4 flex flex-col items-center justify-between text-center">
                       <Icon icon="solar:notebook-minimalistic-bold-duotone" className="text-6xl text-white/80 mt-8" />
                       <div>
                          <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
                          <p className="text-brand-sky-light text-sm uppercase tracking-widest">Arabic Series</p>
                       </div>
                       <Icon icon="solar:verified-check-bold" className="text-brand-gold text-4xl mb-4" />
                    </div>
                </div>
             </div>

             {/* Decorative Elements behind book */}
             <div className="absolute -inset-4 bg-brand-gold/20 blur-2xl rounded-full z-10 animate-pulse-slow"></div>
          </div>

        </div>
      </section>

      {/* ================= FEATURES GRID ================= */}
      <section className="py-20 -mt-10 relative z-20 px-4">
         <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {features.map((feature, i) => (
                  <div key={i} className="glass p-8 flex flex-col items-center text-center shadow-soft-md hover:-translate-y-2 transition-transform duration-300 bg-white dark:bg-brand-navy-dark">
                     <div className="w-16 h-16 rounded-2xl bg-brand-navy/5 text-brand-navy dark:text-brand-sky flex items-center justify-center mb-4 text-3xl">
                        <Icon icon={feature.icon} />
                     </div>
                     <h3 className="text-lg font-bold text-brand-navy dark:text-white mb-2">{feature.title}</h3>
                     <p className="text-sm text-gray-500 dark:text-gray-400">{feature.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* ================= VOLUMES / LEVELS ================= */}
      {books.length > 0 && (
        <section className="py-20 bg-gray-50 dark:bg-[#080f18]">
          <div className="container mx-auto max-w-7xl px-4">
             <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-brand-navy dark:text-white mb-4">Whats Inside?</h2>
                <p className="text-gray-500 max-w-2xl mx-auto">Explore the contents of each volume in the series.</p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {books.map((book, idx) => (
                   <div key={idx} className="group flex bg-white dark:bg-brand-navy-dark rounded-3xl p-6 shadow-soft hover:shadow-soft-hover transition-all duration-300 border border-gray-100 dark:border-gray-800">
                      <div className={`w-24 shrink-0 rounded-2xl ${book.color} flex items-center justify-center text-4xl text-white shadow-inner-soft`}>
                         <span className="font-bold">{idx + 1}</span>
                      </div>
                      <div className="px-6 flex flex-col justify-center">
                         <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">{book.level}</div>
                         <h3 className="text-xl font-bold text-brand-navy dark:text-white mb-2">{book.title}</h3>
                         <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{book.desc}</p>
                      </div>
                   </div>
                ))}
             </div>
          </div>
        </section>
      )}

    </main>
  );
}