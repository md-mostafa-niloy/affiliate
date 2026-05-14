'use client';

import { motion } from 'framer-motion';
import { FaRocket, FaLightbulb, FaShieldAlt } from 'react-icons/fa';

const values = [
  {
    title: 'Digital Excellence',
    desc: 'We strive for perfection in every line of code and every pixel designed, ensuring premium quality.',
    icon: FaLightbulb
  },
  {
    title: 'Global Innovation',
    desc: 'Our mission is to bring cutting-edge technology to businesses worldwide, from UK to Bangladesh.',
    icon: FaRocket
  },
  {
    title: 'Trusted Security',
    desc: 'Security is at the heart of our infrastructure, protecting our partners and clients data 24/7.',
    icon: FaShieldAlt
  }
];

export function AboutMission() {
  return (
    <section className="w-full bg-background relative overflow-hidden py-10 sm:py-16 border-t border-border/40">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-[300px] bg-[radial-gradient(ellipse_at_bottom,_var(--color-primary)_0%,_transparent_60%)] opacity-[0.08] pointer-events-none"></div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-4xl font-black text-foreground mb-6 leading-tight">
              Driving Growth Through <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Digital Transformation</span>
            </h2>
            <p className="text-sm sm:text-base text-muted font-medium leading-relaxed mb-8">
              Founded on the principles of integrity and innovation, Visernic Limited operates as a cohesive global unit. With our headquarters in Southampton, United Kingdom, and our state-of-the-art development center in Nazipur, Bangladesh, we bridge the gap between complex technical challenges and elegant business solutions.
            </p>
            <div className="space-y-6">
              {values.map((v, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                    <v.icon className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-sm sm:text-base">{v.title}</h4>
                    <p className="text-muted text-xs sm:text-sm font-medium">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative isolate transform-gpu"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-primary to-accent rounded-[2.5rem] opacity-20 blur-xl animate-pulse -z-10"></div>
            <div className="aspect-[4/3] rounded-[2rem] overflow-hidden border-2 border-border shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=900&fit=crop" 
                alt="Visernic Team Working" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}