'use client';

import { motion } from 'framer-motion';
import { FaArrowRight, FaRocket } from 'react-icons/fa';

export function PartnerCTA() {
  return (
    <section className="w-full bg-background relative overflow-hidden pb-12 sm:pb-16 pt-6 sm:pt-8">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative w-full max-w-5xl mx-auto rounded-[2.5rem] overflow-hidden isolate transform-gpu"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-90 -z-10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.2)_0%,_transparent_60%)] pointer-events-none -z-10"></div>
          
          <div className="px-6 py-12 sm:py-16 md:py-20 flex flex-col items-center text-center relative z-10 border-2 border-white/20 rounded-[2.5rem] shadow-2xl">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 shadow-inner border border-white/30">
              <FaRocket className="w-8 h-8 sm:w-10 sm:h-10 text-white animate-bounce" />
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5 tracking-tight text-balance drop-shadow-md">
              Ready to Grow Together?
            </h2>
            
            <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 font-medium leading-relaxed text-balance">
              Join our exclusive partnership program today and unlock limitless opportunities. Let's build something extraordinary and scale your business to new heights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-white text-primary rounded-xl font-black text-sm sm:text-base flex items-center justify-center gap-2 hover:bg-opacity-90 shadow-xl transition-all duration-300 active:scale-95 transform-gpu hover:-translate-y-1">
                Apply for Partnership <FaArrowRight />
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-black text-sm sm:text-base flex items-center justify-center gap-2 hover:bg-white hover:text-primary transition-all duration-300 active:scale-95 transform-gpu"
              >
                Contact Sales Team
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}