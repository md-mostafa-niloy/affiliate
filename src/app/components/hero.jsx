'use client';

import { motion } from 'framer-motion';
import { FaArrowRight, FaRocket, FaPlayCircle, FaCheckCircle, FaStar } from 'react-icons/fa';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary/10 to-primary/5 py-10 sm:py-16 lg:py-20 min-h-[60vh]">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 sm:right-10 w-48 sm:w-80 h-48 sm:h-80 bg-primary rounded-full blur-[80px] sm:blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 sm:left-10 w-48 sm:w-80 h-48 sm:h-80 bg-accent rounded-full blur-[80px] sm:blur-[100px]"></div>
      </div>

      <div className="max-w-[90rem] w-full mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center text-center">
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full flex flex-col items-center"
        >
          <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 bg-primary/10 rounded-full border border-primary/20 shadow-sm backdrop-blur-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-[10px] sm:text-xs font-bold text-primary uppercase tracking-widest">
                Premium Network Platform
              </span>
            </div>
          </motion.div>

          <motion.h1 
            variants={itemVariants} 
            className="w-full flex flex-col items-center justify-center text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight leading-tight sm:leading-tight md:leading-tight lg:leading-tight"
          >
            <span className="block w-full text-balance">Unlock Your Earning Potential</span>
            <span className="block w-full text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent pb-2">With Affiliate Services</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants} 
            className="text-sm sm:text-base md:text-lg text-muted max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed font-medium px-2 text-balance"
          >
            Promote your business and earn substantial commissions. Our trusted program offers premium support, proven strategies, and real earning opportunities worldwide.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12 sm:mb-16">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-primary text-white rounded-xl font-bold text-sm sm:text-base hover:bg-opacity-90 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(var(--primary),0.3)] transition-all duration-300"
            >
              <FaRocket className="text-lg" />
              Start Your Journey
            </button>
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-card border-2 border-border text-foreground rounded-xl font-bold text-sm sm:text-base hover:border-primary hover:text-primary transition-all duration-300 shadow-sm">
              <FaPlayCircle className="text-lg" />
              Watch Demo
            </button>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-8 sm:pt-10 border-t border-border/50"
          >
            <div className="flex flex-col items-center justify-center p-4 sm:p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl hover:bg-card transition-colors">
              <div className="flex items-center gap-1.5 text-yellow-500 mb-2">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-foreground mb-1">500+</div>
              <p className="text-xs sm:text-sm font-bold text-muted uppercase tracking-wider flex items-center gap-1.5">
                <FaCheckCircle className="text-primary" /> Active Affiliates
              </p>
            </div>

            <div className="flex flex-col items-center justify-center p-4 sm:p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl hover:bg-card transition-colors">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <div className="text-2xl sm:text-3xl font-black text-foreground mb-1">$2M+</div>
              <p className="text-xs sm:text-sm font-bold text-muted uppercase tracking-wider flex items-center gap-1.5">
                <FaCheckCircle className="text-primary" /> Total Paid Out
              </p>
            </div>

            <div className="flex flex-col items-center justify-center p-4 sm:p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl hover:bg-card transition-colors">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              </div>
              <div className="text-2xl sm:text-3xl font-black text-foreground mb-1">24/7</div>
              <p className="text-xs sm:text-sm font-bold text-muted uppercase tracking-wider flex items-center gap-1.5">
                <FaCheckCircle className="text-primary" /> Premium Support
              </p>
            </div>
          </motion.div>
          
        </motion.div>
      </div>
    </section>
  );
}