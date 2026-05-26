'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaGift, FaCreditCard, FaLock, FaGlobe } from 'react-icons/fa';

const tevauFaqs = [
  {
    icon: FaCreditCard,
    question: 'Is the Tevau Virtual Card free?',
    answer: 'No, the standard price is $10. However, if you apply the promo code "VISERNIC" at checkout, you will receive an instant 20% discount, bringing the price down to just $8.'
  },
  {
    icon: FaGift,
    question: 'How do I get discounts on Physical cards?',
    answer: 'Select the Plastic ($100) or Metal ($199) card in the app, and enter the promo code "VISERNIC8" in the coupon field before paying. It instantly deducts 20% off the total.'
  },
  {
    icon: FaGlobe,
    question: 'What are the small transaction fees?',
    answer: 'Tevau waives the fee for your first 5 small transactions (under 3 USD) every month. After that, a small 0.2 USD fee is applied per transaction.'
  },
  {
    icon: FaLock,
    question: 'Are there monthly maintenance fees?',
    answer: 'No! Tevau cards have zero monthly or annual maintenance fees. You only pay standard transaction, top-up, and FX fees when you use the card.'
  }
];

export function TevauFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-16 lg:py-24 bg-background relative overflow-hidden border-t border-border/50">
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
            Everything you need to know about Tevau pricing and discounts.
          </motion.p>
        </div>

        <div className="space-y-4">
          {tevauFaqs.map((faq, index) => {
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