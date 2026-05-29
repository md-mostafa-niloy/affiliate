'use client';

import { motion } from 'framer-motion';
import { FaHeadset, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

export function TutorialSupport() {
  return (
    <section className="py-12 bg-background border-t border-border/50 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full bg-secondary border border-border rounded-3xl p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm hover:border-primary/40 transition-colors"
        >
          <div className="flex items-center gap-6 text-center md:text-left flex-col md:flex-row w-full md:w-auto">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary flex-shrink-0">
              <FaHeadset className="text-3xl" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-foreground mb-2">Still Need Help?</h3>
              <p className="text-foreground/80 font-medium text-sm sm:text-base max-w-md">
                If you are stuck on KYC verification or if your promo code isn't applying correctly, our dedicated support team is ready to assist you.
              </p>
            </div>
          </div>
          
          <Link 
            href="/contact"
            className="w-full md:w-auto px-8 py-4 bg-primary text-white rounded-xl font-black flex items-center justify-center gap-2 hover:bg-opacity-90 transition-colors active:scale-95 shadow-md flex-shrink-0"
          >
            Contact Support <FaArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}