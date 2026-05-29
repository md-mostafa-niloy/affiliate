'use client';

import { motion } from 'framer-motion';
import { FaClock, FaListUl, FaGift, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

export function TutorialHeader() {
  return (
    <section className="relative w-full pt-12 pb-10 lg:pt-20 lg:pb-16 overflow-hidden bg-background border-b border-border/50">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-black text-foreground mb-4 leading-tight tracking-tight"
        >
          How to Setup <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">Tevau</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="text-sm sm:text-base lg:text-lg text-foreground/80 font-medium leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Follow this visual guide to properly register, verify your identity, and ensure you receive your exclusive 20% discount on all cards.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="flex flex-col sm:flex-row flex-wrap justify-center items-stretch gap-3 sm:gap-4"
        >
          <Link 
            href="/partner/tevau" 
            className="flex items-center justify-center gap-2 px-6 py-3 sm:py-4 bg-primary text-white rounded-xl sm:rounded-2xl font-bold hover:bg-opacity-90 transition-colors active:scale-95 shadow-md"
          >
            <FaArrowLeft className="text-lg" /> Back to Overview
          </Link>

          <div className="flex items-center justify-center sm:justify-start gap-3 px-5 py-3 sm:py-4 bg-card border border-border rounded-xl sm:rounded-2xl shadow-sm hover:border-primary/40 transition-colors">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
              <FaClock className="text-lg" />
            </div>
            <div className="text-left">
              <p className="text-[10px] sm:text-xs font-bold text-foreground/60 uppercase tracking-wide">Estimated Time</p>
              <p className="text-sm sm:text-base font-black text-foreground">5 Minutes</p>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3 px-5 py-3 sm:py-4 bg-card border border-border rounded-xl sm:rounded-2xl shadow-sm hover:border-primary/40 transition-colors">
            <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-foreground flex-shrink-0">
              <FaListUl className="text-lg" />
            </div>
            <div className="text-left">
              <p className="text-[10px] sm:text-xs font-bold text-foreground/60 uppercase tracking-wide">Total Process</p>
              <p className="text-sm sm:text-base font-black text-foreground">5 Easy Steps</p>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3 px-5 py-3 sm:py-4 bg-card border border-border rounded-xl sm:rounded-2xl shadow-sm hover:border-primary/40 transition-colors">
            <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 flex-shrink-0">
              <FaGift className="text-lg" />
            </div>
            <div className="text-left">
              <p className="text-[10px] sm:text-xs font-bold text-foreground/60 uppercase tracking-wide">End Result</p>
              <p className="text-sm sm:text-base font-black text-foreground">20% Discount</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}