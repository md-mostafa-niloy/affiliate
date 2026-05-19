'use client';

import { motion } from 'framer-motion';
import { FaThumbsUp, FaExclamationCircle, FaStar, FaQuoteLeft } from 'react-icons/fa';

export function RedotpayReviews() {
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
            <FaStar className="text-primary w-3 h-3" />
            <span className="text-[10px] sm:text-xs font-bold text-primary uppercase tracking-widest">User Reviews</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl font-black text-foreground mb-3 tracking-tight"
          >
            What Global Users <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Are Saying</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="text-xs sm:text-base md:text-lg text-muted font-medium max-w-2xl mx-auto px-2 leading-relaxed"
          >
            RedotPay has garnered attention in the crypto payment space with generally positive feedback from users worldwide.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-card border border-border hover:border-green-500/30 p-6 sm:p-8 rounded-2xl sm:rounded-[2rem] shadow-sm hover:shadow-md transform-gpu hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.08] transform-gpu transition-opacity duration-300 pointer-events-none">
              <FaQuoteLeft className="text-7xl text-green-500" />
            </div>
            
            <div className="flex items-center gap-3 mb-6 sm:mb-8 relative z-10">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-green-500">
                <FaThumbsUp className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-2xl font-black text-foreground">What Users Like</h3>
            </div>
            
            <div className="space-y-5 sm:space-y-6 relative z-10">
              {[
                { title: 'Easy Setup', desc: 'Registration and KYC process is straightforward and completed within 24-48 hours.' },
                { title: 'Practical Solution', desc: 'Crypto holders appreciate finally having a reliable way to spend digital assets in the real world.' },
                { title: 'Great App Experience', desc: 'Mobile app gets praise for its clean interface and intuitive navigation.' },
                { title: 'Transaction Speed', desc: 'Crypto-to-fiat conversions happen almost instantly, making checkout smooth.' }
              ].map((item, i) => (
                <div key={i} className="group/item">
                  <h4 className="text-sm sm:text-base font-bold text-foreground mb-1 group-hover/item:text-green-500 transition-colors">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-muted font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-card border border-border hover:border-orange-500/30 p-6 sm:p-8 rounded-2xl sm:rounded-[2rem] shadow-sm hover:shadow-md transform-gpu hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.08] transform-gpu transition-opacity duration-300 pointer-events-none">
              <FaQuoteLeft className="text-7xl text-orange-500" />
            </div>
            
            <div className="flex items-center gap-3 mb-6 sm:mb-8 relative z-10">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-500">
                <FaExclamationCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-2xl font-black text-foreground">Common Feedback</h3>
            </div>
            
            <div className="space-y-5 sm:space-y-6 relative z-10">
              {[
                { title: 'Fees', desc: 'While competitive, some users wish transaction fees were slightly lower.' },
                { title: 'Geographic Limitations', desc: 'Service availability varies by region, with some countries having restrictions.' },
                { title: 'Customer Support', desc: 'Response times are generally good, though some report delays during peak periods.' },
                { title: 'Card Delivery', desc: 'Physical card shipping can take 2-4 weeks depending on location.' }
              ].map((item, i) => (
                <div key={i} className="group/item">
                  <h4 className="text-sm sm:text-base font-bold text-foreground mb-1 group-hover/item:text-orange-500 transition-colors">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-muted font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}