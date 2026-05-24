'use client';

import { motion } from 'framer-motion';
import { FaCreditCard, FaWifi, FaCheckCircle, FaStar, FaArrowRight } from 'react-icons/fa';

export function RizonCards() {
  const cardLink = "https://www.getrizon.com/referral-link?name=SARFENAZ";

  return (
    <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/20"
          >
            <FaStar className="text-primary w-3 h-3 animate-pulse" />
            <span className="text-[10px] sm:text-xs font-bold text-primary uppercase tracking-widest">Choose Your Card</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-foreground mb-4"
          >
            Digital or Physical. <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">You Decide.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-foreground/80 font-medium max-w-2xl mx-auto"
          >
            Get instant access with our Virtual Card or order a Physical Card for in-store purchases worldwide. Apply coupon <span className="font-bold text-primary">NR</span> to save big!
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
              90% OFF WITH CODE: NR
            </div>
            
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
              <FaCreditCard className="w-8 h-8" />
            </div>
            
            <h3 className="text-2xl font-black text-foreground mb-2">Virtual Card</h3>
            <p className="text-foreground/80 text-sm font-medium mb-6">Instant activation for online shopping and subscriptions.</p>
            
            <div className="mb-8 pb-8 border-b border-border/60">
              <div className="flex items-end gap-2 mb-1">
                <span className="text-5xl font-black text-foreground">$1</span>
                <span className="text-xl text-foreground/60 line-through font-bold pb-1">$10</span>
              </div>
              <p className="text-xs font-bold text-green-500 uppercase tracking-wide">One-time issuance fee</p>
            </div>

            <ul className="space-y-4 mb-8">
              {[
                'Instant Generation & Activation',
                'Perfect for Online Subscriptions',
                'Connect to Apple Pay / Google Pay',
                'Freeze/Unfreeze Instantly in App'
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium text-foreground">
                  <FaCheckCircle className="text-primary w-5 h-5 flex-shrink-0" /> {feature}
                </li>
              ))}
            </ul>

            <a 
              href={cardLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-primary text-white rounded-xl font-black flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors shadow-lg active:scale-95"
            >
              Get Virtual Card <FaArrowRight />
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-background border-2 border-border rounded-3xl p-8 relative shadow-md hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-6 text-foreground">
              <FaWifi className="w-8 h-8" />
            </div>
            
            <h3 className="text-2xl font-black text-foreground mb-2">Physical Card</h3>
            <p className="text-foreground/80 text-sm font-medium mb-6">Premium contactless card for in-store purchases and ATMs.</p>
            
            <div className="mb-8 pb-8 border-b border-border/60">
              <div className="flex items-end gap-2 mb-1">
                <span className="text-5xl font-black text-foreground">$29.99</span>
              </div>
              <p className="text-xs font-bold text-foreground/60 uppercase tracking-wide">One-time issuance + shipping</p>
            </div>

            <ul className="space-y-4 mb-8">
              {[
                'Global ATM Withdrawals (Up to $250)',
                'Contactless Tap-to-Pay Enabled',
                'Premium Card Design & Build',
                'Accepted at Millions of Locations'
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium text-foreground">
                  <FaCheckCircle className="text-foreground/60 w-5 h-5 flex-shrink-0" /> {feature}
                </li>
              ))}
            </ul>

            <a 
              href={cardLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-card border-2 border-border text-foreground rounded-xl font-black flex items-center justify-center gap-2 hover:border-primary hover:text-primary transition-colors active:scale-95"
            >
              Order Physical Card
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}