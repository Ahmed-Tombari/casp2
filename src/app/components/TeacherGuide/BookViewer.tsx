'use client';

import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { createPortal } from 'react-dom';
import Image from 'next/image';

interface BookViewerProps {
  title: string;
  pdfUrl: string;
  readLabel: string;
  downloadLabel: string;
  closeLabel: string;
  color: string;
  borderColor: string;
  icon: string;
  isRTL: boolean;
  coverImage?: string;
}

export default function BookViewer({ 
  title, 
  pdfUrl, 
  readLabel, 
  downloadLabel, 
  closeLabel, 
  color, 
  borderColor,
  icon,
  isRTL,
  coverImage
}: BookViewerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Reset loading state when modal opens
  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      // Prevent scrolling when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Handle Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <>
      {/* Card Design */}
      <div className={`group relative bg-white dark:bg-brand-navy-dark p-8 md:p-10 rounded-[3rem] shadow-soft border-2 ${borderColor} hover:-translate-y-2 hover:shadow-soft-hover transition-all duration-300 flex flex-col items-center text-center h-full`}>
        
        {/* Background Decoration */}
        <div className="absolute top-8 left-8 rtl:right-auto rtl:left-8 ltr:left-auto ltr:right-8 opacity-5 pointer-events-none">
           <Icon icon="solar:book-2-bold" className="text-6xl dark:text-white" />
        </div>

        {/* Icon Box or Cover Image */}
        {coverImage ? (
          <div className="w-full aspect-4/3 mb-8 relative z-10 group-hover:-translate-y-4 transition-transform duration-500 ease-out perspective-1000">
             <div className="relative w-full h-full shadow-[0_10px_30px_-10px_rgba(0,0,0,0.2)] dark:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.1)] rounded-2xl overflow-hidden transform group-hover:rotate-x-2 group-hover:scale-105 transition-all duration-500 ring-1 ring-black/5 dark:ring-white/10 group-hover:ring-4 group-hover:ring-brand-gold/20 dark:group-hover:ring-brand-sky/20">
               <Image 
                 src={coverImage}
                 alt={title}
                 fill
                 className="object-cover transition-transform duration-700 group-hover:scale-110"
                 sizes="(max-width: 768px) 100vw, 33vw"
               />
               {/* Glint Effect */}
               <div className="absolute inset-0 bg-linear-to-tr from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
             </div>
          </div>
        ) : (
          <div className={`w-24 h-24 rounded-[2rem] flex items-center justify-center text-5xl shadow-inner-soft ${color} mb-6 relative z-10`}>
            <Icon icon={icon} />
          </div>
        )}

        {/* Title */}
        <h3 className="text-xl font-bold text-brand-navy dark:text-white mb-4 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors line-clamp-2">
          {title}
        </h3>

        {/* Action Button */}
        <button 
          onClick={() => setIsOpen(true)}
          className="mt-auto inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gray-50 dark:bg-white/5 text-brand-navy dark:text-white font-bold hover:bg-brand-sky hover:text-white dark:hover:bg-brand-sky transition-all duration-300 group-hover:shadow-lg border border-transparent dark:border-white/5"
        >
          <span>{readLabel}</span>
          <Icon icon="solar:eye-bold" className={isRTL ? "rotate-0" : ""} />
        </button>
      </div>

      {/* PDF Modal */}
      {isOpen && createPortal(
        <div 
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-300"
        >
          <div 
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
            className="w-full max-w-6xl h-[90vh] bg-white dark:bg-[#0f172a] rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden relative border border-white/20 animate-in zoom-in-95 duration-300 ring-1 ring-black/5"
          >
            
            {/* Glass Header */}
            <div className="flex items-center justify-between p-4 md:p-6 border-b border-gray-100 dark:border-white/5 bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-xl absolute top-0 left-0 right-0 z-20">
              <div className="flex items-center gap-4 overflow-hidden">
                <div className={`w-12 h-12 rounded-2xl ${color} flex items-center justify-center shrink-0 shadow-sm`}>
                  <Icon icon={icon} className="text-2xl" />
                </div>
                <div className="flex flex-col min-w-0">
                   <h3 className="font-bold text-lg text-brand-navy dark:text-white truncate">
                    {title}
                   </h3>
                   <span className="text-xs font-medium text-gray-500 dark:text-gray-400">PDF Viewer</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3 shrink-0">
                 {/* Download Button */}
                 <a 
                  href={pdfUrl} 
                  download
                  className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-navy text-white hover:bg-blue-900 hover:text-white dark:bg-blue-500/10 dark:text-blue-400 dark:hover:bg-blue-500 dark:hover:text-white font-bold transition-all duration-200"
                 >
                   <Icon icon="solar:download-square-bold" className="text-lg" />
                   <span>{downloadLabel}</span>
                 </a>

                 {/* Close Button */}
                <button 
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-orange-400 text-brand-navy hover:bg-orange-600 hover:text-white dark:bg-orange-500/10 dark:text-orange-400 dark:hover:bg-orange-500 dark:hover:text-white transition-all duration-200"
                >
                  <Icon icon="solar:close-circle-bold" className="text-xl" />
                  <span className="hidden sm:inline font-bold">{closeLabel}</span>
                </button>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 bg-gray-50 dark:bg-[#020617] relative pt-[88px]"> {/* Padding top for fixed header */}
                
                {/* Loader */}
                {isLoading && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-gray-50 dark:bg-[#020617]">
                    <div className="w-16 h-16 border-4 border-brand-sky/30 border-t-brand-sky rounded-full animate-spin mb-4"></div>
                    <p className="text-brand-navy dark:text-gray-400 font-medium animate-pulse">Loading Document...</p>
                  </div>
                )}

                {/* PDF Iframe */}
                <iframe 
                  src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`} 
                  className={`w-full h-full border-none transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                  title={title}
                  tabIndex={-1}
                  onLoad={() => setIsLoading(false)}
                />
               
               {/* Mobile Download FAB (Floating Action Button) */}
               <div className="absolute bottom-6 right-6 md:hidden z-30">
                  <a 
                    href={pdfUrl} 
                    download
                    className="flex items-center justify-center w-14 h-14 rounded-full bg-brand-navy dark:bg-brand-sky text-white shadow-xl hover:scale-110 transition-transform"
                  >
                    <Icon icon="solar:download-square-bold" className="text-2xl" />
                  </a>
               </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
