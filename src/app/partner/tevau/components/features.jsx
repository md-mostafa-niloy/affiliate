'use client';

import { motion } from 'framer-motion';
import { FaMoneyBillWave, FaShieldAlt, FaGlobe, FaMobileAlt } from 'react-icons/fa';

const features = [
  {
    icon: FaMoneyBillWave,
    title: 'Generous Fee Waivers',
    desc: 'Enjoy fee waivers on your first 5 small transactions and first 3 declined transactions every single month.'
  },
  {
    icon: FaGlobe,
    title: 'Global ATM Access',
    desc: 'With your physical plastic or metal card, access cash at ATMs worldwide with competitive 1.9% withdrawal fees.'
  },
  {
    icon: FaShieldAlt,
    title: 'Zero Monthly Fees',
    desc: 'Tevau does not charge any monthly or annual maintenance fees. You only pay standard transaction and FX rates.'
  },
  {
    icon: FaMobileAlt,
    title: 'Digital First',
    desc: 'Your virtual card is ready instantly upon KYC approval, letting you spend your crypto balances online immediately.'
  }
];

export function TevauFeatures() {
  return (
    <section className="py-16 bg-card border-y border-border/50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-black text-foreground mb-4"
          >
            Tevau Ecosystem Benefits
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-foreground/80 font-medium max-w-2xl mx-auto"
          >
            Designed to make spending your crypto fast, affordable, and flexible.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background p-6 rounded-2xl border border-border hover:border-primary/50 transition-colors group shadow-sm"
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