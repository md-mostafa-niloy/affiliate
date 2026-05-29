'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaQuestionCircle, FaExclamationCircle, FaIdCard, FaTags } from 'react-icons/fa';

const tutorialFaqs = [
  {
    icon: FaExclamationCircle,
    question: 'Why is my promo code "VISERNIC" saying invalid?',
    answer: 'The promo codes only work if your account is strictly bound to our partner network. This means you MUST enter the referral code "972272" during your initial account registration. If you skipped that step, the discount codes will not be recognized.'
  },
  {
    icon: FaIdCard,
    question: 'How long does the KYC verification process take?',
    answer: 'Tevau uses an automated verification system. If your document photos are clear and the lighting is good during the facial scan, verification is usually completed within 5 to 10 minutes.'
  },
  {
    icon: FaTags,
    question: 'Can I apply the discount after I have already paid?',
    answer: 'No. The 20% discount coupon must be applied at the checkout screen BEFORE you confirm the payment. Discounts cannot be applied retroactively to already purchased cards.'
  },
  {
    icon: FaQuestionCircle,
    question: 'My KYC failed. What should I do?',
    answer: 'If your KYC is rejected, ensure that you are uploading a valid government-issued ID (not expired) and that there is no glare blocking your details. You can retry the verification process directly from the app dashboard.'
  }
];

export function TutorialFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-16 lg:py-24 bg-card relative overflow-hidden border-t border-border/50">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-foreground mb-4"
          >
            Setup & Verification <span className="text-primary">FAQ</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-foreground/80 font-medium text-sm md:text-base max-w-2xl mx-auto"
          >
            Common issues and questions users face while setting up their Tevau account and claiming discounts.
          </motion.p>
        </div>

        <div className="space-y-4">
          {tutorialFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const Icon = faq.icon;
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`border-2 rounded-2xl bg-background overflow-hidden transition-all duration-300 ${isOpen ? 'border-primary shadow-sm' : 'border-border hover:border-primary/40'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 text-left flex justify-between items-center gap-4 focus:outline-none group"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${isOpen ? 'bg-primary text-white' : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`font-bold text-base md:text-lg transition-colors ${isOpen ? 'text-primary' : 'text-foreground'}`}>
                      {faq.question}
                    </span>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-primary/10 text-primary' : 'bg-secondary text-foreground/60'}`}>
                    <FaChevronDown className="w-4 h-4" />
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-5 pb-5 pt-0 ml-16">
                        <div className="w-full h-px bg-border/50 mb-4"></div>
                        <p className="text-foreground/80 text-sm md:text-base leading-relaxed font-medium">
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