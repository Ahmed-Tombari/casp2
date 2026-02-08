"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Icon } from "@iconify/react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Configure PDF worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

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
  coverImage,
}: BookViewerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [pageWidth, setPageWidth] = useState(0);
  const [zoom, setZoom] = useState(1.0);

  const containerRef = useRef<HTMLDivElement>(null);

  // Resize handler for responsive PDF
  const updatePageWidth = useCallback(() => {
    if (containerRef.current) {
      const width = containerRef.current.clientWidth;
      // Use 90-95% of width for comfortable reading, capped at a reasonable max width
      setPageWidth(Math.min(width * 0.95, 800)); 
    }
  }, []);

  // Update width on resize and open
  useEffect(() => {
    if (!isOpen) return;

    updatePageWidth();
    window.addEventListener("resize", updatePageWidth);

    // Also use ResizeObserver for more robust handling
    const resizeObserver = new ResizeObserver(updatePageWidth);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener("resize", updatePageWidth);
      resizeObserver.disconnect();
    };
  }, [isOpen, updatePageWidth]);

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      document.body.style.overflow = "hidden";
      // Small delay to ensure container is rendered before measuring
      setTimeout(updatePageWidth, 100);
      setZoom(1.0); // Reset zoom when opening
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen, updatePageWidth]);

  // Handle Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setIsLoading(false);
  }

  return (
    <>
      {/* Card Design */}
      <div
        className={`group relative bg-white dark:bg-brand-navy-dark p-8 md:p-10 rounded-[3rem] shadow-soft border-2 ${borderColor} hover:-translate-y-2 hover:shadow-soft-hover transition-all duration-300 flex flex-col items-center text-center h-full`}
      >
        {/* Background Decoration */}
        <div className="absolute top-8 left-8 rtl:right-auto rtl:left-8 ltr:left-auto ltr:right-8 opacity-5 pointer-events-none">
          <Icon icon="solar:book-2-bold" className="text-6xl dark:text-white" />
        </div>

        {/* Icon Box or Cover Image */}
        {coverImage ? (
          <div className="w-full aspect-[3/4] mb-8 relative z-10 group-hover:-translate-y-4 transition-transform duration-500 ease-out perspective-1000">
            <div className="relative w-full h-full shadow-[0_10px_30px_-10px_rgba(0,0,0,0.2)] dark:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.1)] rounded-2xl overflow-hidden transform group-hover:rotate-x-2 group-hover:scale-105 transition-all duration-500 ring-1 ring-black/5 dark:ring-white/10 group-hover:ring-4 group-hover:ring-brand-gold/20 dark:group-hover:ring-brand-sky/20 bg-gray-50 dark:bg-white/5">
              <Image
                src={coverImage}
                alt={title}
                fill
                className="object-contain transition-transform duration-700 group-hover:scale-110 p-2"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              {/* Glint Effect */}
              <div className="absolute inset-0 bg-linear-to-tr from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          </div>
        ) : (
          <div
            className={`w-24 h-24 rounded-[2rem] flex items-center justify-center text-5xl shadow-inner-soft ${color} mb-6 relative z-10`}
          >
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
      {isOpen &&
        createPortal(
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300"
          >
            <div
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
              className="w-full max-w-6xl h-[95vh] bg-gray-100 dark:bg-[#0f172a] rounded-[2rem] shadow-2xl flex flex-col overflow-hidden relative animate-in zoom-in-95 duration-300 ring-1 ring-white/10"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 bg-white dark:bg-[#1e293b] border-b border-gray-200 dark:border-white/5 z-20 shadow-sm shrink-0">
                <div className="flex items-center gap-4 overflow-hidden">
                  <div
                    className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center shrink-0 shadow-sm`}
                  >
                    <Icon icon={icon} className="text-xl" />
                  </div>
                  <h3 className="font-bold text-lg text-brand-navy dark:text-white truncate">
                    {title}
                  </h3>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  {/* Download Button */}
                  <a
                    href={pdfUrl}
                    download
                    className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-navy text-white hover:bg-blue-900 transition-colors text-sm font-bold"
                  >
                    <Icon
                      icon="solar:download-square-bold"
                      className="text-lg"
                    />
                    <span>{downloadLabel}</span>
                  </a>

                  {/* Close Button */}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-orange-100 text-orange-600 hover:bg-orange-200 dark:bg-orange-500/20 dark:text-orange-400 transition-colors"
                  >
                    <Icon icon="solar:close-circle-bold" className="text-xl" />
                    <span className="hidden sm:inline font-bold text-sm">
                      {closeLabel}
                    </span>
                  </button>
                </div>
              </div>

              {/* Vertical Zoom Toolbar - Redesigned and positioned outside scroll area */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 z-30 hidden sm:flex flex-col items-center bg-white/90 dark:bg-brand-navy-dark/90 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200 dark:border-white/10 overflow-hidden min-w-[3.5rem] animate-in slide-in-from-right-10 duration-500">
                <button
                  onClick={() => setZoom(prev => Math.min(prev + 0.1, 2.0))}
                  className="w-full h-14 flex items-center justify-center hover:bg-brand-sky hover:text-white dark:hover:bg-brand-sky text-brand-navy dark:text-white transition-all duration-300 group/btn"
                  title="Zoom In"
                >
                  <Icon icon="solar:add-circle-bold-duotone" className="text-3xl group-hover/btn:scale-110 transition-transform" />
                </button>
                
                <div className="w-8 h-[1px] bg-gray-200 dark:bg-white/10 mx-auto"></div>

                <button
                  onClick={() => setZoom(1.0)}
                  className="w-full h-14 flex items-center justify-center hover:bg-orange-500 hover:text-white dark:hover:bg-orange-500 text-brand-navy dark:text-white transition-all duration-300 group/btn"
                  title="Reset Zoom"
                >
                  <Icon icon="solar:refresh-linear" className="text-2xl group-hover/btn:rotate-180 transition-transform duration-500" />
                </button>

                <div className="w-8 h-[1px] bg-gray-200 dark:bg-white/10 mx-auto"></div>

                <button
                  onClick={() => setZoom(prev => Math.max(prev - 0.1, 0.5))}
                  className="w-full h-14 flex items-center justify-center hover:bg-brand-sky hover:text-white dark:hover:bg-brand-sky text-brand-navy dark:text-white transition-all duration-300 group/btn"
                  title="Zoom Out"
                >
                  <Icon icon="solar:minus-circle-bold-duotone" className="text-3xl group-hover/btn:scale-110 transition-transform" />
                </button>

                <div className="w-full py-2 bg-gray-50 dark:bg-white/5 text-center border-t border-gray-200 dark:border-white/10">
                  <span className="text-[10px] font-black text-brand-navy dark:text-gray-400">
                    {Math.round(zoom * 100)}%
                  </span>
                </div>
              </div>

              {/* Content Area - Scrollable */}
              <div
                ref={containerRef}
                className="flex-1 overflow-y-auto overflow-x-hidden bg-gray-200/50 dark:bg-[#020617] relative p-4 md:p-8 flex flex-col items-center"
              >
                {/* Loader */}
                {isLoading && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-white/50 dark:bg-black/50 backdrop-blur-sm">
                    <div className="w-12 h-12 border-4 border-brand-sky/30 border-t-brand-sky rounded-full animate-spin mb-4"></div>
                    <p className="text-brand-navy dark:text-gray-200 font-medium">
                      Loading...
                    </p>
                  </div>
                )}

                <Document
                  file={pdfUrl}
                  onLoadSuccess={onDocumentLoadSuccess}
                  onLoadError={(error) => {
                    console.error("Error loading PDF:", error);
                    setIsLoading(false);
                  }}
                  loading={
                    <div className="h-96 flex items-center justify-center text-gray-500">
                      Loading Book...
                    </div>
                  }
                  className="flex flex-col gap-6 md:gap-8 items-center w-full"
                >
                  {/* Render all pages */}
                  {numPages &&
                    Array.from(new Array(numPages), (el, index) => (
                      <div
                        key={`page_${index + 1}`}
                        className="relative shadow-lg md:shadow-2xl rounded-sm overflow-hidden bg-white"
                      >
                         <Page
                          pageNumber={index + 1}
                          width={pageWidth * zoom}
                          loading={
                            <div
                              style={{ width: pageWidth * zoom, height: pageWidth * zoom * 1.4 }}
                              className="bg-white flex items-center justify-center text-gray-400 animate-pulse"
                            >
                              Loading Page {index + 1}...
                            </div>
                          }
                          renderTextLayer={true}
                          renderAnnotationLayer={true}
                          className="bg-white block" 
                        />
                         {/* Page Number Indicator */}
                         <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-md backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity">
                            Page {index + 1}
                         </div>
                      </div>
                    ))}
                </Document>
              </div>
            </div>
            
             {/* Mobile Download FAB */}
             <div className="fixed bottom-6 right-6 md:hidden z-[110]">
                  <a
                    href={pdfUrl}
                    download
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-navy dark:bg-brand-sky text-white shadow-xl hover:scale-110 transition-transform"
                  >
                    <Icon
                      icon="solar:download-square-bold"
                      className="text-xl"
                    />
                  </a>
            </div>

          </div>,
          document.body,
        )}
    </>
  );
}
