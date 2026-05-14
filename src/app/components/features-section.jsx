'use client';

import { 
  FaRocket, 
  FaShieldAlt, 
  FaChartBar, 
  FaHeadset, 
  FaGlobe, 
  FaWallet,
  FaArrowRight
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const features = [
  {
    id: 1,
    icon: FaRocket,
    title: 'Lightning Fast Growth',
    description: 'Our advanced tracking system ensures your campaigns scale rapidly with real-time optimization and performance analytics.'
  },
  {
    id: 2,
    icon: FaShieldAlt,
    title: 'Enterprise Security',
    description: 'Bank-grade security protocols protect your data and earnings. Our multi-layer fraud detection keeps your business safe 24/7.'
  },
  {
    id: 3,
    icon: FaChartBar,
    title: 'Detailed Analytics',
    description: 'Deep dive into your performance with our comprehensive dashboard. Track every click, conversion, and commission instantly.'
  },
  {
    id: 4,
    icon: FaWallet,
    title: 'Instant Payouts',
    description: 'No more waiting weeks for your money. Receive your hard-earned commissions through our automated instant payment gateway.'
  },
  {
    id: 5,
    icon: FaGlobe,
    title: 'Global Reach',
    description: 'Connect with premium partners and audiences across the globe. Our platform supports 150+ countries and multiple currencies.'
  },
  {
    id: 6,
    icon: FaHeadset,
    title: 'Priority Support',
    description: 'Get a dedicated account manager to help you succeed. Our expert team is always available to resolve your queries instantly.'
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="w-full bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[300px] sm:h-[400px] bg-[radial-gradient(ellipse_at_top,_var(--color-primary)_0%,_transparent_60%)] opacity-[0.08] pointer-events-none"></div>
      
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-[300px] sm:h-[400px] bg-[radial-gradient(ellipse_at_bottom,_var(--color-primary)_0%,_transparent_60%)] opacity-[0.08] pointer-events-none"></div>

      {/* Reduced Padding Here (py-8 sm:py-12) */}
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 relative z-10 py-8 sm:py-12">
        <div className="text-center mb-10 sm:mb-14">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground mb-4 tracking-tight text-balance"
          >
            Powerful Tools for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Your Success</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm sm:text-base text-muted max-w-2xl mx-auto leading-relaxed font-medium text-balance"
          >
            We provide everything you need to grow your affiliate business from scratch to an enterprise-level operation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="group bg-card p-6 sm:p-8 rounded-[2rem] border-2 border-border hover:border-primary/60 shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 relative overflow-hidden isolate transform-gpu hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
              
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5 sm:mb-6 shadow-inner group-hover:bg-primary transition-colors duration-300">
                <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-white transition-colors duration-300" />
              </div>

              <h3 className="text-lg sm:text-xl font-black text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-muted text-sm leading-relaxed mb-6 font-medium">
                {feature.description}
              </p>

              <div className="inline-flex items-center gap-2 text-primary font-bold text-xs sm:text-sm group-hover:gap-3 transition-all cursor-pointer bg-primary/5 px-4 py-2 rounded-lg group-hover:bg-primary group-hover:text-white mt-auto">
                <span>Learn More</span>
                <FaArrowRight className="w-3 h-3" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}