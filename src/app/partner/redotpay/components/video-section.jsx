'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaTimes } from 'react-icons/fa';

export function RedotpayVideo() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isOpen]);

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
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-sm sm:text-base md:text-lg text-muted font-medium px-2"
          >
            Watch our complete guide on how to register, apply your <span className="font-bold text-primary">kzfx8</span> promo code, and order your discounted card.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="relative max-w-4xl mx-auto group cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <div className="relative aspect-video bg-card rounded-2xl sm:rounded-[2rem] border border-border group-hover:border-primary/40 overflow-hidden shadow-lg transition-all duration-300 transform-gpu isolate">
            <img 
              src="https://i.postimg.cc/vHf56K4T/Image-nbmijmnbmijmnbmi-(1).png" 
              alt="Redotpay App Tutorial"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
              <div className="relative flex items-center justify-center">
                <div className="absolute w-14 h-14 sm:w-20 sm:h-20 bg-primary/50 rounded-full animate-ping"></div>
                <div className="relative w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-full flex items-center justify-center text-white shadow-lg transform-gpu group-hover:scale-110 transition-transform duration-300">
                  <FaPlay className="ml-1 text-lg sm:text-2xl" />
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 bg-black/80 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl border border-white/10 flex items-center gap-1.5 sm:gap-2">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full animate-pulse"></span>
              <span className="text-white text-[9px] sm:text-xs font-black tracking-wider">FULL SETUP TUTORIAL</span>
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div 
            className="fixed top-0 left-0 w-screen h-[100dvh] z-[200] flex flex-col items-center justify-center bg-black/95 touch-none"
            onClick={() => setIsOpen(false)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-5xl px-3 sm:px-6 flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full flex justify-end mb-3 sm:mb-4">
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-primary text-white rounded-full flex items-center justify-center transition-all border border-white/20 active:scale-90 transform-gpu"
                >
                  <FaTimes className="text-lg sm:text-xl" />
                </button>
              </div>
              
              <div className="w-full relative bg-black rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 transform-gpu aspect-video">
                <iframe 
                  src="https://www.youtube.com/embed/DurbQ34XYSk?autoplay=1" 
                  title="Redotpay Tutorial"
                  className="absolute inset-0 w-full h-full border-0 bg-black transform-gpu"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
