'use client';

import { motion } from 'framer-motion';
import { FaCreditCard, FaCheckCircle, FaStar, FaGem, FaShippingFast, FaArrowRight } from 'react-icons/fa';

export function TevauCards() {
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
            <span className="text-[10px] sm:text-xs font-bold text-primary uppercase tracking-widest">Tevau Platinum Cards</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-foreground mb-4"
          >
            Premium Cards, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">For You</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-foreground/80 font-medium max-w-2xl mx-auto mt-4"
          >
            Use our promo code <strong className="text-primary">VISERNIC - VISERNIC8</strong> at checkout to instantly receive a 20% discount across Virtual, Plastic, and Premium Metal cards!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          
          {/* Virtual Card */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-primary/40 rounded-3xl p-6 lg:p-8 relative shadow-md hover:-translate-y-1 transition-transform duration-300 isolate"
          >
            <div className="absolute top-0 right-0 bg-gradient-to-l from-primary to-accent text-white text-[10px] font-black px-4 py-2 rounded-bl-2xl rounded-tr-3xl shadow-sm">
              20% OFF WITH VISERNIC
            </div>
            
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-primary/10 text-primary mb-6">
              <FaCreditCard className="w-7 h-7" />
            </div>
            
            <h3 className="text-2xl font-black text-foreground mb-1">Virtual Card</h3>
            <p className="text-foreground/80 text-sm font-medium mb-6 pb-6 border-b border-border/60">Instant digital card issuance.</p>
            
            <div className="mb-6">
              <div className="flex items-end gap-2 mb-1">
                <span className="text-5xl font-black text-foreground">$8</span>
                <span className="text-xl text-foreground/60 line-through font-bold pb-1">$10</span>
              </div>
              <p className="text-xs font-bold text-green-500 uppercase tracking-wide">Discount applied with visernic</p>
            </div>

            <ul className="space-y-4 mb-8">
              {['Instantly ready to use online', '$0 Monthly Maintenance Fee', 'Bind to Apple/Google Pay', 'Secure crypto top-ups'].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm font-medium text-foreground">
                  <FaCheckCircle className="text-primary w-5 h-5 flex-shrink-0" /> {feature}
                </li>
              ))}
            </ul>
            
            <a 
              href="https://tevau.io/invite_registration/#/?inviteCode=972272"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-primary text-white rounded-xl font-black flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors shadow-lg active:scale-95 mt-auto"
            >
              Get Virtual Card <FaArrowRight />
            </a>
          </motion.div>

          {/* Physical Plastic */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card border border-border rounded-3xl p-6 lg:p-8 relative shadow-sm hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 isolate"
          >
            <div className="absolute top-0 right-0 bg-secondary text-foreground text-[10px] font-black px-4 py-2 rounded-bl-2xl rounded-tr-3xl shadow-sm border-b border-l border-border">
              20% OFF WITH VISERNIC8
            </div>

            <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-secondary text-foreground mb-6">
              <FaShippingFast className="w-7 h-7" />
            </div>
            
            <h3 className="text-2xl font-black text-foreground mb-1">Plastic Physical</h3>
            <p className="text-foreground/80 text-sm font-medium mb-6 pb-6 border-b border-border/60">Tangible card for worldwide POS usage.</p>
            
            <div className="mb-6">
              <div className="flex items-end gap-2 mb-1">
                <span className="text-5xl font-black text-foreground">$80</span>
                <span className="text-xl text-foreground/60 line-through font-bold pb-1">$100</span>
              </div>
              <p className="text-xs font-bold text-primary uppercase tracking-wide">Discount applied with visernic8</p>
            </div>

            <ul className="space-y-4 mb-8">
              {['Global shipping to your door', 'Offline POS and ATM access', 'Tap to pay contactless', 'High transaction limits'].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm font-medium text-foreground">
                  <FaCheckCircle className="text-foreground/60 w-5 h-5 flex-shrink-0" /> {feature}
                </li>
              ))}
            </ul>

            <a 
              href="https://tevau.io/invite_registration/#/?inviteCode=972272"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-background border border-border text-foreground rounded-xl font-black flex items-center justify-center gap-2 hover:border-primary hover:text-primary transition-colors active:scale-95 mt-auto"
            >
              Order Plastic Card
            </a>
          </motion.div>

          {/* Physical Metal */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-foreground border border-foreground rounded-3xl p-6 lg:p-8 relative shadow-2xl hover:-translate-y-1 transition-all duration-300 isolate"
          >
            <div className="absolute top-0 right-0 bg-yellow-500 text-black text-[10px] font-black px-4 py-2 rounded-bl-2xl rounded-tr-3xl shadow-sm">
              20% OFF WITH VISERNIC8
            </div>

            <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-background/10 text-yellow-500 mb-6">
              <FaGem className="w-7 h-7" />
            </div>
            
            <h3 className="text-2xl font-black text-background mb-1">Metal Physical</h3>
            <p className="text-background/70 text-sm font-medium mb-6 pb-6 border-b border-background/20">The ultimate premium crypto card.</p>
            
            <div className="mb-6">
              <div className="flex items-end gap-2 mb-1">
                <span className="text-5xl font-black text-background">$159.2</span>
                <span className="text-xl text-background/60 line-through font-bold pb-1">$199</span>
              </div>
              <p className="text-xs font-bold text-yellow-500 uppercase tracking-wide">Discount applied with VISERNIC8</p>
            </div>

            <ul className="space-y-4 mb-8">
              {['Heavy premium metal build', 'VIP global customer support', 'Maximum ATM withdrawal limits', 'Exclusive platform benefits'].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm font-medium text-background/90">
                  <FaCheckCircle className="text-yellow-500 w-5 h-5 flex-shrink-0" /> {feature}
                </li>
              ))}
            </ul>

            <a 
              href="https://tevau.io/invite_registration/#/?inviteCode=972272"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-yellow-500 text-black rounded-xl font-black flex items-center justify-center gap-2 hover:bg-yellow-400 transition-colors active:scale-95 mt-auto"
            >
              Order Metal Card
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}