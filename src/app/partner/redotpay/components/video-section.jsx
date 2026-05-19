'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaTimes } from 'react-icons/fa';

export function RedotpayVideo() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => document.body.style.overflow = 'unset';
  }, [isOpen]);

  return (
    <section className="py-16 lg:py-24 bg-card relative overflow-hidden border-t border-border/50">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-foreground mb-4"
          >
            How to Setup <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Redotpay</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted font-medium text-lg"
          >
            Watch our complete guide on how to register, apply your <span className="font-bold text-primary">kzfx8</span> promo code, and order your discounted card.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto group cursor-pointer isolate"
          onClick={() => setIsOpen(true)}
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-primary via-accent to-primary rounded-[2.5rem] opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-700 animate-pulse -z-10"></div>
          
          <div className="relative aspect-video bg-background rounded-[2rem] border-2 border-border group-hover:border-primary/60 overflow-hidden shadow-2xl transition-all duration-500">
            <img 
              src="https://i.postimg.cc/vHf56K4T/Image-nbmijmnbmijmnbmi-(1).png" 
              alt="Redotpay App Tutorial"
              className="w-full h-full object-cover filter brightness-[0.6] group-hover:brightness-50 transition-transform duration-700 group-hover:scale-105"
            />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex items-center justify-center">
                <div className="absolute w-20 h-20 bg-primary/40 rounded-full animate-ping"></div>
                <div className="relative w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white shadow-[0_0_30px_rgba(var(--primary),0.8)] group-hover:scale-110 transition-transform duration-300">
                  <FaPlay className="ml-1 text-2xl" />
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-6 left-6 bg-background/80 backdrop-blur-md px-4 py-2 rounded-xl border border-border flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              <span className="text-foreground text-sm font-black tracking-wide">FULL SETUP TUTORIAL</span>
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-[2rem] overflow-hidden border-2 border-primary/30 shadow-[0_0_80px_rgba(var(--primary),0.4)] cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-primary/20 hover:bg-primary text-primary hover:text-white rounded-full flex items-center justify-center transition-all backdrop-blur-md border border-primary/50"
              >
                <FaTimes className="text-lg" />
              </button>
              
              <iframe 
                src="https://www.youtube.com/embed/DurbQ34XYSk?autoplay=1" 
                title="Redotpay Tutorial"
                className="w-full h-full border-0 bg-black"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}