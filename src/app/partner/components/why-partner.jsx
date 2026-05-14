'use client';

import { motion } from 'framer-motion';
import { FaHandshake, FaChartLine, FaGift, FaHeadset } from 'react-icons/fa';

const benefits = [
  {
    icon: FaHandshake,
    title: 'Trusted Global Network',
    description: 'Join a community of elite professionals and verified businesses to scale your revenue securely.'
  },
  {
    icon: FaChartLine,
    title: 'High Commission Rates',
    description: 'Earn industry-leading commissions with our transparent and real-time performance tracking system.'
  },
  {
    icon: FaGift,
    title: 'Exclusive Resources',
    description: 'Get access to premium marketing assets, API tools, and co-branded landing pages to boost conversions.'
  },
  {
    icon: FaHeadset,
    title: 'Dedicated Support',
    description: 'Enjoy 24/7 priority support and a dedicated account manager to guide your partnership journey.'
  }
];

export function WhyPartner() {
  return (
    <section className="w-full bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[300px] sm:h-[400px] bg-[radial-gradient(ellipse_at_top,_var(--color-primary)_0%,_transparent_60%)] opacity-[0.08] pointer-events-none"></div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 relative z-10 py-8 sm:py-12 border-t border-border/50">
        <div className="text-center mb-10 sm:mb-14">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground mb-4 tracking-tight text-balance"
          >
            Why Partner With <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Visernic?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm sm:text-base text-muted max-w-2xl mx-auto leading-relaxed font-medium text-balance"
          >
            We provide our partners with industry-leading tools, high commissions, and the support needed to build a profitable and sustainable business.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="group bg-card p-6 rounded-[1.5rem] border-2 border-border hover:border-primary/50 shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 relative overflow-hidden isolate transform-gpu hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
              
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5 shadow-inner group-hover:bg-primary transition-colors duration-300">
                <benefit.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
              </div>

              <h3 className="text-lg font-black text-foreground mb-2.5 group-hover:text-primary transition-colors duration-300">
                {benefit.title}
              </h3>
              
              <p className="text-muted text-sm leading-relaxed font-medium">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}