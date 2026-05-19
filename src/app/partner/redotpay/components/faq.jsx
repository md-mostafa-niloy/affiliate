'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaQuestionCircle, FaBolt } from 'react-icons/fa';

const faqData = [
  {
    q: 'How can I claim the initial $5 USD bonus?',
    a: 'Simply download the app using our official link and make sure to use the exclusive referral code "kzfx8" during the registration process. The $5 bonus will be credited to your wallet instantly.'
  },
  {
    q: 'What are the official promo codes for the 20% card discount?',
    a: 'For the Virtual Card, apply the promo code "RTC50" at the final checkout screen. For the Physical Card, use the code "RTC100" to instantly deduct 20% off the total application price.'
  },
  {
    q: 'How long does the KYC profile verification take?',
    a: 'Redotpay features a state-of-the-art automated compliance framework. Most account identity submissions (KYC) are fully checked and verified within just 10 to 30 minutes.'
  },
  {
    q: 'Can I connect my virtual card directly to Apple Pay or Google Pay?',
    a: 'Yes, absolutely. Once your virtual crypto card is activated inside the dashboard, you can immediately integrate it into Apple Wallet or Google Wallet for real-world contactless checkout.'
  },
  {
    q: 'Are there any recurring monthly or annual maintenance fees?',
    a: 'No, both the virtual and physical Redotpay card plans feature zero recurring account management fees. Once purchased, the ongoing maintenance is completely free of charge.'
  }
];

export function RedotpayFAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background relative overflow-hidden border-t border-border/50">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 mb-3 px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
            <FaBolt className="text-primary w-3 h-3" />
            <span className="text-[10px] sm:text-xs font-bold text-primary uppercase tracking-widest">Support Center</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-foreground mb-3 tracking-tight">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Questions</span>
          </h2>
          <p className="text-xs sm:text-base text-muted font-medium max-w-xl mx-auto leading-relaxed">
            Got questions about registration, card safety, or card issuing limitations? Find all your answers directly below.
          </p>
        </div>

        <div className="space-y-3">
          {faqData.map((item, i) => {
            const isOpen = activeIndex === i;
            return (
              <div 
                key={i} 
                className="bg-card border border-border rounded-xl sm:rounded-2xl overflow-hidden transition-colors duration-300 transform-gpu"
              >
                <button
                  onClick={() => toggleFAQ(i)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <FaQuestionCircle className={`w-4 h-4 sm:w-5 sm:h-5 shrink-0 transition-colors ${isOpen ? 'text-primary' : 'text-muted'}`} />
                    <span className="text-sm sm:text-base font-black text-foreground tracking-tight leading-snug">{item.q}</span>
                  </div>
                  <div className={`w-6 h-6 rounded-lg bg-secondary flex items-center justify-center text-muted shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary bg-primary/10' : ''}`}>
                    <FaChevronDown className="w-3 h-3" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-4 pb-5 sm:px-5 sm:pb-6 pt-0 border-t border-border/40">
                        <p className="text-xs sm:text-sm md:text-base text-muted font-medium leading-relaxed pl-7 sm:pl-8">
                          {item.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}