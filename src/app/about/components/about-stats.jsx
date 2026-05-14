'use client';

import { motion } from 'framer-motion';
import { FaProjectDiagram, FaUserCheck, FaAward, FaHistory } from 'react-icons/fa';

const stats = [
  { label: 'Completed Projects', value: '250+', icon: FaProjectDiagram },
  { label: 'Happy Partners', value: '500+', icon: FaUserCheck },
  { label: 'Global Offices', value: '02', icon: FaAward },
  { label: 'Years Experience', value: '05+', icon: FaHistory }
];

export function AboutStats() {
  return (
    <section className="w-full bg-background relative overflow-hidden py-8 sm:py-12 border-t border-border/40">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-4 bg-card rounded-2xl border-2 border-border/50 hover:border-primary/30 transition-all duration-300 transform-gpu"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-3 shadow-inner">
                <stat.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-foreground">{stat.value}</div>
              <p className="text-[10px] sm:text-xs font-bold text-muted uppercase tracking-wider mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}