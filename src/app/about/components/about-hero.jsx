'use client';

import { motion } from 'framer-motion';
import { FaUsers, FaGlobeAmericas } from 'react-icons/fa';

export function AboutHero() {
  return (
    <section className="w-full bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[300px] sm:h-[400px] bg-[radial-gradient(ellipse_at_top,_var(--color-primary)_0%,_transparent_60%)] opacity-[0.1] pointer-events-none"></div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 relative z-10 py-10 sm:py-16 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 mb-5 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 shadow-sm backdrop-blur-sm"
        >
          <FaGlobeAmericas className="text-primary w-3 h-3 animate-spin-slow" />
          <span className="text-[10px] sm:text-xs font-bold text-primary uppercase tracking-widest">Our Story & Vision</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 leading-tight text-balance"
        >
          Innovating The Digital Landscape <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Since Foundation</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg text-muted max-w-3xl mx-auto mb-4 font-medium leading-relaxed text-balance"
        >
          Visernic Limited is more than just a software company. We are a team of passionate engineers, designers, and strategists dedicated to helping brands scale through high-performance digital products and results-driven marketing.
        </motion.p>
      </div>
    </section>
  );
}