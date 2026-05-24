'use client';

import { motion } from 'framer-motion';
import { FaGlobe, FaEuroSign, FaDollarSign, FaShieldAlt } from 'react-icons/fa';

const features = [
  {
    icon: FaDollarSign,
    title: 'USD Accounts',
    desc: 'Get your own dedicated US Dollar account instantly. Perfect for international payments and receiving funds from global clients.'
  },
  {
    icon: FaEuroSign,
    title: 'EURO Accounts',
    desc: 'Seamlessly hold, send, and receive Euros. Avoid hefty conversion fees when dealing with European services and merchants.'
  },
  {
    icon: FaGlobe,
    title: 'Global Spending',
    desc: 'Use your virtual or physical Rizon card anywhere in the world. Enjoy borderless transactions with competitive exchange rates.'
  },
  {
    icon: FaShieldAlt,
    title: 'Secure & Reliable',
    desc: 'Bank-grade security ensures your funds and data are safe. Real-time notifications keep you updated on every transaction.'
  }
];

export function RizonFeatures() {
  return (
    <section className="py-16 bg-background relative overflow-hidden border-t border-border/50">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-black text-foreground mb-4"
          >
            Multi-Currency <span className="text-primary">Mastery</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-foreground/80 font-medium max-w-2xl mx-auto"
          >
            Manage multiple currencies under one powerful app. Say goodbye to borders and hidden fees.
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
              className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-colors group shadow-sm"
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