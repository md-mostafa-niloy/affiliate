'use client';

import { motion } from 'framer-motion';
import { FaBolt, FaWallet, FaExchangeAlt } from 'react-icons/fa';

export function WebitpayFees() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background relative overflow-hidden border-t border-border/50">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="text-center mb-10 sm:mb-14">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center gap-1.5 mb-3 px-3 py-1 bg-primary/10 rounded-full border border-primary/20"
          >
            <FaBolt className="text-primary w-3 h-3" />
            <span className="text-[9px] sm:text-xs font-bold text-primary uppercase tracking-widest">Clear Pricing</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl font-black text-foreground mb-3 tracking-tight"
          >
            Webitpay <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Fee Structure</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="text-xs sm:text-base md:text-lg text-foreground/80 font-medium max-w-2xl mx-auto px-2 leading-relaxed"
          >
            Clear pricing with huge advantages when you sign up using our exclusive referral links. Know exactly what you are paying for.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-card border border-border rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 flex flex-col h-full shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <FaWallet className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-2xl font-black text-foreground">Card Applications</h3>
            </div>
            
            <div className="space-y-1 flex-grow">
              {[
                { label: 'Virtual Card (Standard)', value: '$10.00' },
                { label: 'Virtual Card (Referral vsnbd)', value: 'FREE ($0.00)', highlight: true },
                { label: 'Physical Card (Standard)', value: '$100.00' },
                { label: 'Physical Card (Promo vsn)', value: '$80.00' },
                { label: 'Account Maintenance Fees', value: 'Waived', highlight: true }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center py-3.5 sm:py-4 border-b border-border/60 last:border-0 group">
                  <span className="text-xs sm:text-sm font-medium text-foreground/70 group-hover:text-foreground transition-colors">{item.label}</span>
                  <span className={`text-xs sm:text-sm font-bold ${item.highlight ? 'text-green-500 bg-green-500/10 px-2.5 py-1 rounded-md text-xs' : 'text-foreground'}`}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-card border border-border rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 flex flex-col h-full shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary rounded-xl flex items-center justify-center text-foreground">
                <FaExchangeAlt className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-2xl font-black text-foreground">General Transactions</h3>
            </div>  
            
            <div className="space-y-1 flex-grow">
              {[
                { label: 'Deposit Fee', value: 'Free', highlight: true },
                { label: 'Crypto Conversion Fee', value: '1.00%' },
                { label: 'Non-default Currency Tx', value: '1.20%' },
                { label: 'ATM Withdrawal', value: '2.00%' },
                { label: 'Card Cancellation', value: '$2.00' }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center py-3.5 sm:py-4 border-b border-border/60 last:border-0 group">
                  <span className="text-xs sm:text-sm font-medium text-foreground/70 group-hover:text-foreground transition-colors">{item.label}</span>
                  <span className={`text-xs sm:text-sm font-bold ${item.highlight ? 'text-green-500 bg-green-500/10 px-2.5 py-1 rounded-md text-xs' : 'text-foreground'}`}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}