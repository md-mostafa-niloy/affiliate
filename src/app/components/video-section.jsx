'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaTimes } from 'react-icons/fa';

export function VideoSection() {
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <section id="video-showcase" className="py-10 sm:py-16 lg:py-20 bg-background relative overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[300px] sm:h-[400px] bg-[radial-gradient(ellipse_at_top,_var(--color-primary)_0%,_transparent_60%)] opacity-[0.08] pointer-events-none"></div>
      
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-[300px] sm:h-[400px] bg-[radial-gradient(ellipse_at_bottom,_var(--color-primary)_0%,_transparent_60%)] opacity-[0.08] pointer-events-none"></div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground tracking-tight mb-4 text-balance"
          >
            Experience The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Ultimate Power</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm sm:text-base text-muted font-medium leading-relaxed text-balance"
          >
            Discover how our advanced affiliate ecosystem can transform your business. Watch the demo to see our real-time tracking and instant payout systems in action.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="relative max-w-5xl mx-auto w-full group cursor-pointer isolate transform-gpu"
          onClick={() => setIsOpen(true)}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-[2.5rem] opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-700 animate-pulse -z-10"></div>
          
          <div className="relative aspect-video bg-card rounded-[2rem] border-2 border-border hover:border-primary/60 overflow-hidden shadow-lg group-hover:shadow-2xl group-hover:shadow-primary/20 transform-gpu transition-all duration-500 isolate">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop" 
              alt="Video Thumbnail"
              className="w-full h-full object-cover filter brightness-75 group-hover:brightness-50 transition-transform duration-700 ease-in-out group-hover:scale-105 transform-gpu"
              loading="lazy"
            />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex items-center justify-center">
                <div className="absolute w-20 h-20 sm:w-28 sm:h-28 bg-primary/30 rounded-full animate-ping"></div>
                <div className="absolute w-16 h-16 sm:w-24 sm:h-24 bg-primary/40 rounded-full animate-pulse"></div>
                
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 bg-primary rounded-full flex items-center justify-center text-white shadow-[0_0_30px_rgba(var(--primary),0.8)] transform-gpu group-hover:scale-110 transition-transform duration-300">
                  <FaPlay className="ml-1 sm:ml-1.5 text-xl sm:text-2xl" />
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between">
              <div className="bg-background/80 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl border border-border shadow-lg flex items-center gap-2.5 transform-gpu group-hover:translate-y-0 translate-y-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                <span className="text-foreground text-xs sm:text-sm font-black tracking-wide">FULL PLATFORM DEMO</span>
              </div>
              <div className="bg-primary px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg shadow-lg transform-gpu group-hover:translate-y-0 translate-y-4 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                <span className="text-white text-xs sm:text-sm font-black">04:20</span>
              </div>
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
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/90 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-[0_0_80px_rgba(var(--primary),0.4)] border-2 border-primary/30 cursor-default isolate transform-gpu"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 sm:top-5 sm:right-5 z-20 w-8 h-8 sm:w-10 sm:h-10 bg-primary/20 hover:bg-primary text-primary hover:text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-md border border-primary/50 shadow-lg group"
              >
                <FaTimes className="text-sm sm:text-lg group-hover:rotate-90 transition-transform duration-300" />
              </button>
              
              <iframe 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&modestbranding=1&rel=0&controls=1&showinfo=0&disablekb=1&iv_load_policy=3" 
                title="Video Player"
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