'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaChevronDown, 
  FaRocket, 
  FaMoneyBillWave, 
  FaChartLine, 
  FaShieldAlt, 
  FaHeadset 
} from 'react-icons/fa';

const faqs = [
  {
    icon: FaRocket,
    question: 'How do I join the affiliate program and get started?',
    answer: 'Joining is completely free and easy! Simply fill out the contact form or register through our partner portal. Once approved, you will receive access to your custom dashboard, tracking links, and promotional assets to start earning immediately.'
  },
  {
    icon: FaMoneyBillWave,
    question: 'What is the commission structure and minimum payout?',
    answer: 'We offer a highly competitive tiered commission structure up to 40% based on your performance. The minimum payout threshold is just $50, and we process payments bi-weekly via PayPal, Bank Transfer, or Crypto.'
  },
  {
    icon: FaChartLine,
    question: 'How long does the tracking cookie last?',
    answer: 'Our program features a generous 90-day cookie duration. This means if a user clicks your affiliate link and makes a purchase within 90 days, you will still be credited with the commission.'
  },
  {
    icon: FaShieldAlt,
    question: 'Are there any restrictions on promotional methods?',
    answer: 'While we encourage creative marketing, we strictly prohibit spamming, unauthorized coupon sites, and bidding on our trademarked brand terms in search engines. All ethical promotion methods like blogs, social media, and newsletters are welcome.'
  },
  {
    icon: FaHeadset,
    question: 'Who can I contact if I need help or custom assets?',
    answer: 'We provide dedicated affiliate managers for our partners. If you need custom banners, landing pages, or strategic advice, you can reach out to our 24/7 support team via email or directly through your partner dashboard.'
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[300px] sm:h-[400px] bg-[radial-gradient(ellipse_at_top,_var(--color-primary)_0%,_transparent_60%)] opacity-[0.08] pointer-events-none"></div>
      
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-[300px] sm:h-[400px] bg-[radial-gradient(ellipse_at_bottom,_var(--color-primary)_0%,_transparent_60%)] opacity-[0.08] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 py-6 sm:py-8">
        <div className="text-center mb-10 sm:mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground mb-4 tracking-tight"
          >
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Questions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm sm:text-base text-muted max-w-2xl mx-auto font-medium leading-relaxed text-balance"
          >
            Got questions? We've got answers. If you have any other questions, feel free to reach out to our team.
          </motion.p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => {
            const Icon = faq.icon;
            const isOpen = openIndex === index;
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className={`border-2 rounded-2xl bg-card overflow-hidden transition-all duration-300 transform-gpu isolate ${isOpen ? 'border-primary shadow-lg shadow-primary/10' : 'border-border hover:border-primary/40'}`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-4 sm:p-5 text-left flex justify-between items-center gap-4 focus:outline-none group"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen ? 'bg-primary text-white scale-105 shadow-md' : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white'}`}>
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
                      <div className="px-4 sm:px-5 pb-5 pt-0 ml-12 sm:ml-16">
                        <div className="w-full h-px bg-border/50 mb-4"></div>
                        <p className="text-muted text-sm leading-relaxed font-medium">
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