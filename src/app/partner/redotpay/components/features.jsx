'use client';

import { motion } from 'framer-motion';
import { FaMobileAlt, FaExchangeAlt, FaShieldAlt, FaDollarSign, FaBolt } from 'react-icons/fa';

const features = [
  {
    icon: FaDollarSign,
    title: 'Multi-Currency',
    desc: 'Support for 20+ top cryptocurrencies and USD directly in your wallet.'
  },
  {
    icon: FaExchangeAlt,
    title: 'Real-Time',
    desc: 'Instant crypto-to-fiat conversion right at the moment of purchase.'
  },
  {
    icon: FaMobileAlt,
    title: 'Mobile App',
    desc: 'Full control via our highly-rated iOS & Android applications.'
  },
  {
    icon: FaShieldAlt,
    title: 'Bank-Grade',
    desc: 'Top-tier security and compliance to keep your assets safe.'
  }
];

export function RedotpayFeatures() {
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
            <span className="text-[10px] sm:text-xs font-bold text-primary uppercase tracking-widest">Core Features</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl font-black text-foreground mb-3 tracking-tight"
          >
            Standard Features <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Included</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="text-xs sm:text-base md:text-lg text-muted font-medium max-w-2xl mx-auto px-2 leading-relaxed"
          >
            Experience seamless crypto spending with our premium card features designed for global flexibility and bank-grade security.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl sm:rounded-[1.5rem] p-6 sm:p-8 flex flex-col h-full transform-gpu hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-5 sm:mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <feature.icon className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-lg sm:text-xl font-black text-foreground mb-2 sm:mb-3">{feature.title}</h3>
              <p className="text-xs sm:text-sm text-muted font-medium leading-relaxed flex-grow">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}