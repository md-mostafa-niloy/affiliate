'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaGift, FaCreditCard, FaLock, FaGlobe } from 'react-icons/fa';

const rizonFaqs = [
  {
    icon: FaGift,
    question: 'How do I claim the signup bonus?',
    answer: 'To claim your signup bonus, download the Rizon app and enter the invite code "TWKFW" during the registration process. Once your KYC is verified and your account is fully set up, the bonus will be credited to your wallet.'
  },
  {
    icon: FaCreditCard,
    question: 'How does the 90% Virtual Card discount work?',
    answer: 'The regular price for a Rizon Virtual Card is $10. By entering the coupon code "NR" on the checkout screen before payment, a 90% discount is applied, bringing the total cost down to just $1.'
  },
  {
    icon: FaGlobe,
    question: 'What is Rizon Emerald and should I get it?',
    answer: 'Rizon Emerald is a premium subscription (starting at $5.59/month) that cuts your FX, trading, and transaction fees by 50%. For example, non-USD card spend drops from 1.7% to just 1.02%. It is highly recommended if you make frequent international transactions.'
  },
  {
    icon: FaLock,
    question: 'Are my funds secure with Rizon?',
    answer: 'Yes. Rizon utilizes bank-grade encryption and partners with fully regulated financial institutions to ensure your funds and personal data are kept strictly secure. You also have full control to freeze/unfreeze your cards directly from the app.'
  }
];

export function RizonFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-foreground mb-4"
          >
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Questions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-foreground/80 font-medium"
          >
            Everything you need to know about the Rizon offer and cards.
          </motion.p>
        </div>

        <div className="space-y-4">
          {rizonFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const Icon = faq.icon;
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`border-2 rounded-2xl bg-card overflow-hidden transition-all duration-300 ${isOpen ? 'border-primary shadow-md' : 'border-border hover:border-primary/40'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 text-left flex justify-between items-center gap-4 focus:outline-none group"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${isOpen ? 'bg-primary text-white' : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`font-bold text-base md:text-lg transition-colors ${isOpen ? 'text-primary' : 'text-foreground'}`}>
                      {faq.question}
                    </span>
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-primary/10 text-primary' : 'bg-secondary text-foreground/60'}`}>
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