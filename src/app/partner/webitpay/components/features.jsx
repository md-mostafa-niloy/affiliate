'use client';

import { motion } from 'framer-motion';
import { FaMobileAlt, FaExchangeAlt, FaShieldAlt, FaBitcoin } from 'react-icons/fa';

const features = [
  {
    icon: FaBitcoin,
    title: 'Multi-Currency',
    desc: 'Support for top cryptocurrencies directly in your secure Webitpay wallet.'
  },
  {
    icon: FaExchangeAlt,
    title: 'Real-Time Convert',
    desc: 'Instant crypto-to-fiat conversion right at the moment of your card purchase.'
  },
  {
    icon: FaMobileAlt,
    title: 'Smart Mobile App',
    desc: 'Full control over your virtual and physical cards via iOS & Android.'
  },
  {
    icon: FaShieldAlt,
    title: 'Bank-Grade Security',
    desc: 'Top-tier encryption and regulatory compliance to keep your digital assets safe.'
  }
];

export function WebitpayFeatures() {
  return (
    <section className="py-16 bg-card border-y border-border/50">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-black text-foreground mb-4"
          >
            Premium Crypto Features
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background p-6 rounded-2xl border border-border hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white text-primary transition-colors">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-foreground/80 font-medium leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}