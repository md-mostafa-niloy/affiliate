'use client';

import { motion } from 'framer-motion';
import { FaCreditCard, FaGlobeAmericas, FaCheckCircle, FaStar } from 'react-icons/fa';

export function RedotpayCards() {
  const cardLink = "https://url.hk/i/en/kzfx8";

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="text-center mb-10 sm:mb-14">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center gap-1.5 mb-3 px-3 py-1 bg-primary/10 rounded-full border border-primary/20"
          >
            <FaStar className="text-primary w-3 h-3" />
            <span className="text-[10px] sm:text-xs font-bold text-primary uppercase tracking-widest">Card Plans</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl font-black text-foreground mb-3 tracking-tight"
          >
            Virtual Cards & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Physical Cards</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="text-xs sm:text-base text-muted font-medium max-w-2xl mx-auto px-2 leading-relaxed"
          >
            Select the perfect card plan tailored for your financial needs. Apply our special promo codes to secure an instant 20% discount today.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto px-1 sm:px-0">
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-card border border-primary/40 rounded-2xl sm:rounded-[2rem] p-5 sm:p-8 relative shadow-md flex flex-col justify-between transform-gpu hover:-translate-y-1 transition-all"
          >
            <div>
              <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-accent text-white text-[10px] sm:text-xs font-black px-3.5 py-1.5 rounded-bl-xl rounded-tr-2xl shadow-sm">
                CODE: RTC50
              </div>
              
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-5 text-primary">
                <FaCreditCard className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              
              <h3 className="text-xl sm:text-2xl font-black text-foreground mb-1.5 flex items-center gap-2">
                Virtual Card <span className="text-[10px] bg-primary/20 text-primary px-2 py-0.5 rounded-md font-bold uppercase tracking-wider">Instant</span>
              </h3>
              <p className="text-muted text-xs sm:text-sm font-medium mb-6">Designed for secure everyday online purchases and digital subscriptions worldwide.</p>
              
              <div className="mb-6 pb-6 border-b border-border">
                <div className="flex items-end gap-2 mb-1">
                  <span className="text-4xl sm:text-5xl font-black text-foreground">$8</span>
                  <span className="text-base sm:text-lg text-muted line-through font-bold pb-0.5">$10</span>
                </div>
                <p className="text-[10px] sm:text-xs font-bold text-green-500 uppercase tracking-wide">20% Off with Promo Code RTC50</p>
                <p className="text-[10px] sm:text-xs font-semibold text-muted mt-2">Annual Fee: Completely Free</p>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  'Instant issuance and immediate activation',
                  'Fully compatible with Apple Pay & Google Pay',
                  'Perfect for international e-commerce platforms',
                  'High spending threshold up to $100,000 daily',
                  'Zero physical document processing required'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-foreground leading-snug">
                    <FaCheckCircle className="text-primary w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a 
              href={cardLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 sm:py-4 bg-primary text-white rounded-xl font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-98 transition-all text-center transform-gpu"
            >
              Get Virtual Card
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-card border border-border rounded-2xl sm:rounded-[2rem] p-5 sm:p-8 relative shadow-sm flex flex-col justify-between transform-gpu hover:-translate-y-1 hover:border-primary/30 transition-all"
          >
            <div>
              <div className="absolute top-0 right-0 bg-secondary text-foreground text-[10px] sm:text-xs font-black px-3.5 py-1.5 rounded-bl-xl rounded-tr-2xl border-l border-b border-border shadow-2xs">
                CODE: RTC100
              </div>

              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-secondary rounded-xl sm:rounded-2xl flex items-center justify-center mb-5 text-foreground">
                <FaGlobeAmericas className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              
              <h3 className="text-xl sm:text-2xl font-black text-foreground mb-1.5 flex items-center gap-2">
                Physical Card <span className="text-[10px] bg-secondary text-muted px-2 py-0.5 rounded-md font-bold uppercase tracking-wider">Premium</span>
              </h3>
              <p className="text-muted text-xs sm:text-sm font-medium mb-6">Crafted for global point-of-sale terminal payments and worldwide cash withdrawals.</p>
              
              <div className="mb-6 pb-6 border-b border-border">
                <div className="flex items-end gap-2 mb-1">
                  <span className="text-4xl sm:text-5xl font-black text-foreground">$80</span>
                  <span className="text-base sm:text-lg text-muted line-through font-bold pb-0.5">$100</span>
                </div>
                <p className="text-[10px] sm:text-xs font-bold text-primary uppercase tracking-wide">20% Off with Promo Code RTC100</p>
                <p className="text-[10px] sm:text-xs font-semibold text-muted mt-2">Annual Fee: Completely Free</p>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  'Global acceptance at millions of Visa merchants',
                  'Seamless ATM fiat cash withdrawals globally',
                  'Advanced chip & pin cryptographic protection',
                  'Robust spending limit up to $100,000 daily',
                  'Tracked, high-speed delivery straight to your door'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-foreground leading-snug">
                    <FaCheckCircle className="text-muted w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a 
              href={cardLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 sm:py-4 bg-secondary border border-border text-foreground hover:border-primary hover:text-primary rounded-xl font-black text-xs sm:text-sm flex items-center justify-center gap-2 active:scale-98 transition-all text-center transform-gpu"
            >
              Get Physical Card
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}