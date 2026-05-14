'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaChevronDown, 
  FaRocket, 
  FaCode, 
  FaPaintBrush, 
  FaBullhorn, 
  FaWallet, 
  FaShieldAlt,
  FaQuestionCircle
} from 'react-icons/fa';

const faqData = [
  {
    id: 1,
    icon: FaCode,
    question: "What core digital solutions do you offer?",
    answer: "Visernic Limited provides end-to-end digital solutions including full-stack web development (React, Next.js, Node.js), native and cross-platform mobile app development, and robust SaaS infrastructure management."
  },
  {
    id: 2,
    icon: FaPaintBrush,
    question: "Do you provide custom UI/UX design services?",
    answer: "Yes, our design team specializes in high-fidelity UI/UX design. We focus on creating realistic, user-centric interfaces that enhance engagement and drive conversions for your brand."
  },
  {
    id: 3,
    icon: FaBullhorn,
    question: "How can Visernic help with Digital Marketing?",
    answer: "We offer comprehensive marketing strategies including SEO optimization, targeted ad campaigns, and social media growth hacking to ensure your business reaches its maximum potential audience."
  },
  {
    id: 4,
    icon: FaRocket,
    question: "How do I get started as a Visernic Affiliate?",
    answer: "Simply apply through our partner portal. Once approved, you'll receive your unique referral links and marketing materials to start promoting our services to your network."
  },
  {
    id: 5,
    icon: FaWallet,
    question: "What is the commission structure and payout cycle?",
    answer: "We offer competitive tiered commissions. Payouts are processed bi-weekly through secure channels like Bank Transfer, PayPal, or Crypto, with a minimum threshold of $50."
  },
  {
    id: 6,
    icon: FaShieldAlt,
    question: "Is the tracking system secure and real-time?",
    answer: "Absolutely. Our advanced tracking infrastructure provides real-time data on clicks and conversions. Every referral is tracked with enterprise-grade security to ensure fair and accurate payouts."
  }
];

export function FAQClient() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full bg-background relative overflow-hidden pb-12 sm:pb-20">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[300px] sm:h-[400px] bg-[radial-gradient(ellipse_at_top,_var(--color-primary)_0%,_transparent_60%)] opacity-[0.1] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 py-6 sm:py-8">
        <div className="text-center mb-12 sm:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 shadow-sm backdrop-blur-sm"
          >
            <FaQuestionCircle className="text-primary w-3 h-3 animate-pulse" />
            <span className="text-[10px] sm:text-xs font-bold text-primary uppercase tracking-widest">Help Center & Support</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-4 tracking-tight text-balance"
          >
            Got Questions? <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">We've Got Answers</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm sm:text-base text-muted max-w-2xl mx-auto font-medium leading-relaxed text-balance"
          >
            Explore our comprehensive FAQ to understand how Visernic Limited can transform your digital presence and how you can earn as a partner.
          </motion.p>
        </div>

        <div className="space-y-4 sm:space-y-5">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            const Icon = faq.icon;

            return (
              <motion.div 
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`border-2 rounded-[1.5rem] bg-card overflow-hidden transition-all duration-300 isolate transform-gpu ${isOpen ? 'border-primary shadow-xl shadow-primary/5' : 'border-border hover:border-primary/40'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-4 sm:p-6 text-left flex justify-between items-center gap-4 focus:outline-none group"
                >
                  <div className="flex items-center gap-4 sm:gap-5">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 shadow-inner ${isOpen ? 'bg-primary text-white scale-105' : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white'}`}>
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className={`font-bold text-sm sm:text-base pr-2 leading-tight transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-foreground'}`}>
                      {faq.question}
                    </span>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen ? 'rotate-180 bg-primary/10 text-primary' : 'bg-secondary text-muted group-hover:text-primary'}`}>
                    <FaChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0 ml-14 sm:ml-16">
                        <div className="w-full h-px bg-border/60 mb-5"></div>
                        <p className="text-muted text-sm sm:text-base leading-relaxed font-medium">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}