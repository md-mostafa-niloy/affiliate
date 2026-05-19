'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaTimes, FaCopy, FaCheckCircle } from 'react-icons/fa';

export function RedotpayVideo() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleCopy = () => {
    navigator.clipboard.writeText('kzfx8');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="text-2xl sm:text-4xl md:text-5xl font-black text-foreground mb-3 sm:mb-4"
          >
            How to Setup <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Redotpay</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-sm sm:text-base md:text-lg text-muted font-medium px-2 leading-relaxed flex flex-wrap items-center justify-center gap-x-1.5 gap-y-2"
          >
            <span>Watch our complete guide on how to register, apply your</span>
            <button 
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-primary/10 text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-colors active:scale-95 transform-gpu"
              title="Click to copy promo code"
            >
              kzfx8 {copied ? <FaCheckCircle className="w-3.5 h-3.5" /> : <FaCopy className="w-3.5 h-3.5" />}
            </button>
            <span>promo code, and order your discounted card.</span>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="relative max-w-4xl mx-auto group cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <div className="relative aspect-video bg-card rounded-2xl sm:rounded-[2rem] border border-border group-hover:border-primary/50 overflow-hidden shadow-lg transition-colors duration-300">
            <img 
              src="https://i.postimg.cc/vHf56K4T/Image-nbmijmnbmijmnbmi-(1).png" 
              alt="Redotpay App Tutorial"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
              <div className="relative flex items-center justify-center">
                <div className="absolute w-14 h-14 sm:w-20 sm:h-20 bg-primary/60 rounded-full animate-ping"></div>
                <div className="relative w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FaPlay className="ml-1 text-lg sm:text-2xl" />
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 bg-black/90 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl border border-white/10 flex items-center gap-1.5 sm:gap-2">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full animate-pulse"></span>
              <span className="text-white text-[9px] sm:text-xs font-black tracking-wider">FULL SETUP TUTORIAL</span>
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 bg-black/95 cursor-pointer touch-none"
            onClick={() => setIsOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-5xl bg-black rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 z-50 w-8 h-8 sm:w-10 sm:h-10 bg-black/60 hover:bg-primary text-white rounded-full flex items-center justify-center transition-colors border border-white/20"
              >
                <FaTimes className="text-sm sm:text-lg" />
              </button>
              
              <div className="relative w-full aspect-video bg-black">
                <iframe 
                  src="https://www.youtube-nocookie.com/embed/DurbQ34XYSk?autoplay=1&rel=0&modestbranding=1" 
                  title="Redotpay Setup Tutorial"
                  className="absolute inset-0 w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
