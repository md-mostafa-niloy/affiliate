'use client';

import { motion } from 'framer-motion';
import { FaCreditCard, FaGlobeAmericas, FaCheckCircle, FaStar, FaArrowRight } from 'react-icons/fa';

export function WebitpayCards() {
  return (
    <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/20"
          >
            <FaStar className="text-primary w-3 h-3 animate-pulse" />
            <span className="text-[10px] sm:text-xs font-bold text-primary uppercase tracking-widest">Choose Your Card Plan</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-foreground mb-4"
          >
            Virtual or <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Physical Card.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-foreground/80 font-medium max-w-2xl mx-auto"
          >
            Register with our link to claim your Virtual Card absolutely FREE. Want a Physical Card? Use promo code <span className="font-bold text-primary">vsn</span> to save 20%.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border-2 border-primary rounded-3xl p-8 relative shadow-xl shadow-primary/10 hover:-translate-y-1 transition-transform duration-300 isolate"
          >
            <div className="absolute top-0 right-0 bg-gradient-to-l from-primary to-accent text-white text-xs font-black px-4 py-2 rounded-bl-2xl rounded-tr-2xl shadow-lg">
              100% FREE WITH REFERRAL
            </div>
            
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
              <FaCreditCard className="w-8 h-8" />
            </div>
            
            <h3 className="text-2xl font-black text-foreground mb-2">Virtual Card</h3>
            <p className="text-foreground/80 text-sm font-medium mb-6">Instant Access for your daily online spending.</p>
            
            <div className="mb-8 pb-8 border-b border-border/60">
              <div className="flex items-end gap-2 mb-1">
                <span className="text-5xl font-black text-foreground">$0</span>
                <span className="text-xl text-foreground/60 line-through font-bold pb-1">$10</span>
              </div>
              <p className="text-xs font-bold text-green-500 uppercase tracking-wide">Free using Referral vsnbd</p>
              <p className="text-xs font-bold text-foreground/80 mt-2">Annual Fee: FREE</p>
            </div>

            <ul className="space-y-4 mb-8">
              {[
                'Instant issuance & activation',
                'Perfect for e-commerce',
                'Apple/Google Pay ready',
                'High daily spending limit',
                'No physical shipping needed'
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium text-foreground">
                  <FaCheckCircle className="text-primary w-5 h-5 flex-shrink-0" /> {feature}
                </li>
              ))}
            </ul>

            <a 
              href="https://webitpay.org/vsnbd"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-primary text-white rounded-xl font-black flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors shadow-lg active:scale-95"
            >
              Claim Free Virtual Card <FaArrowRight />
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-background border border-border rounded-3xl p-8 relative shadow-md hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 isolate"
          >
            <div className="absolute top-0 right-0 bg-secondary text-foreground text-xs font-black px-4 py-2 rounded-bl-2xl rounded-tr-2xl shadow-sm border-l border-b border-border">
              PROMO CODE: vsn
            </div>

            <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-6 text-foreground">
              <FaGlobeAmericas className="w-8 h-8" />
            </div>
            
            <h3 className="text-2xl font-black text-foreground mb-2">Physical Card</h3>
            <p className="text-foreground/80 text-sm font-medium mb-6">Global use, ATM cash withdrawals & in-store payments.</p>
            
            <div className="mb-8 pb-8 border-b border-border/60">
              <div className="flex items-end gap-2 mb-1">
                <span className="text-5xl font-black text-foreground">$80</span>
                <span className="text-xl text-foreground/60 line-through font-bold pb-1">$100</span>
              </div>
              <p className="text-xs font-bold text-primary uppercase tracking-wide">20% OFF With Promo Code vsn</p>
              <p className="text-xs font-bold text-foreground/80 mt-2">Annual Fee: FREE</p>
            </div>

            <ul className="space-y-4 mb-8">
              {[
                'Global acceptance worldwide',
                'ATM cash withdrawals allowed',
                'Chip & PIN security',
                'High daily spending limit',
                'Fast delivery to your door'
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium text-foreground">
                  <FaCheckCircle className="text-foreground/60 w-5 h-5 flex-shrink-0" /> {feature}
                </li>
              ))}
            </ul>

            <a 
              href="https://webitpay.org/vsnbd"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-card border-2 border-border text-foreground rounded-xl font-black flex items-center justify-center gap-2 hover:border-primary hover:text-primary transition-colors active:scale-95"
            >
              Get Physical Card
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}