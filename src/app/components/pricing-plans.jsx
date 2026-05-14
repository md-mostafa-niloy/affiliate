'use client';

import { motion } from 'framer-motion';
import { 
  FaCheckCircle, 
  FaCrown, 
  FaUserTie, 
  FaBriefcase, 
  FaBuilding, 
  FaArrowRight 
} from 'react-icons/fa';

const affiliatePlans = [
  {
    id: 1,
    name: 'Affiliate Starter',
    target: 'For Bloggers & Influencers',
    commission: '15%',
    commissionType: 'Per Successful Sale',
    icon: FaUserTie,
    features: [
      'Custom Referral Link',
      'Real-time Analytics Dashboard',
      'Pre-made Marketing Materials',
      'Standard Email Support'
    ],
    isPopular: false,
    buttonText: 'Start Earning'
  },
  {
    id: 2,
    name: 'Agency Partner',
    target: 'For Marketing & Design Agencies',
    commission: '25%',
    commissionType: 'Recurring Revenue Share',
    icon: FaBriefcase,
    features: [
      'Everything in Starter',
      'Co-branded Landing Pages',
      'Dedicated Account Manager',
      'Priority Technical Support'
    ],
    isPopular: true,
    buttonText: 'Become a Partner'
  },
  {
    id: 3,
    name: 'Enterprise Network',
    target: 'For Large B2B Companies',
    commission: '35%',
    commissionType: 'Custom Revenue Split',
    icon: FaBuilding,
    features: [
      'Full White-label Solutions',
      'API Access & Integration',
      'VIP Strategy Sessions',
      'Exclusive Networking Events'
    ],
    isPopular: false,
    buttonText: 'Contact Sales'
  }
];

export function PricingPlans() {
  return (
    <section id="pricing" className="w-full bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[300px] sm:h-[400px] bg-[radial-gradient(ellipse_at_top,_var(--color-primary)_0%,_transparent_60%)] opacity-[0.08] pointer-events-none"></div>
      
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-[300px] sm:h-[400px] bg-[radial-gradient(ellipse_at_bottom,_var(--color-primary)_0%,_transparent_60%)] opacity-[0.08] pointer-events-none"></div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 relative z-10 py-8 sm:py-12">
        <div className="text-center mb-10 sm:mb-14">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4 px-4 sm:px-5 py-2 sm:py-2.5 bg-primary/10 rounded-full border border-primary/20 shadow-sm backdrop-blur-sm"
          >
            <FaCrown className="text-primary w-3 h-3 sm:w-4 sm:h-4 animate-pulse" />
            <span className="text-[10px] sm:text-xs font-bold text-primary uppercase tracking-widest">
              Partnership Tiers
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-4 tracking-tight text-balance"
          >
            Scale With Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Affiliate Programs</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm sm:text-base text-muted max-w-2xl mx-auto font-medium leading-relaxed text-balance"
          >
            Whether you are a solo influencer or a large agency, we have a tailored commission structure to help you monetize your network effectively.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch max-w-6xl mx-auto">
          {affiliatePlans.map((plan, index) => {
            const Icon = plan.icon;
            
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`relative flex flex-col h-full p-6 sm:p-8 rounded-[2rem] border-2 transition-all duration-300 transform-gpu isolate ${
                  plan.isPopular 
                    ? 'border-primary bg-card shadow-xl shadow-primary/10 scale-[1.02] md:scale-105 z-10' 
                    : 'border-border bg-card/60 hover:border-primary/50 hover:bg-card hover:shadow-lg'
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-white text-[10px] sm:text-xs font-black py-1.5 px-4 rounded-full flex items-center gap-1.5 whitespace-nowrap shadow-lg">
                    <FaCrown className="w-3 h-3" /> HIGHEST ROI
                  </div>
                )}

                <div className="mb-6 flex flex-col items-start">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-4 sm:mb-5 transition-colors duration-300 shadow-inner ${
                    plan.isPopular ? 'bg-primary text-white' : 'bg-primary/10 text-primary'
                  }`}>
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-black text-foreground mb-1">{plan.name}</h3>
                  <p className="text-xs sm:text-sm font-bold text-muted uppercase tracking-wider">{plan.target}</p>
                </div>

                <div className="mb-6 pb-6 border-b border-border/60">
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl sm:text-5xl font-black text-primary tracking-tighter">{plan.commission}</span>
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold text-muted bg-primary/5 px-3 py-1.5 rounded-lg inline-block border border-primary/10">
                    {plan.commissionType}
                  </span>
                </div>

                <ul className="space-y-3 sm:space-y-4 flex-grow mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-muted font-medium">
                      <FaCheckCircle className="text-primary w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" /> 
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3.5 sm:py-4 mt-auto rounded-xl font-black text-sm sm:text-base flex items-center justify-center gap-2 transition-all duration-300 active:scale-95 ${
                  plan.isPopular 
                    ? 'bg-primary text-white hover:bg-opacity-90 shadow-lg shadow-primary/20 hover:-translate-y-1' 
                    : 'bg-card border-2 border-border text-foreground hover:border-primary hover:text-primary'
                }`}>
                  {plan.buttonText} <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}