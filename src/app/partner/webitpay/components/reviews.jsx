'use client';

import { motion } from 'framer-motion';
import { FaThumbsUp, FaLightbulb } from 'react-icons/fa';

export function WebitpayReviews() {
  return (
    <section className="py-16 bg-background relative overflow-hidden border-t border-border/50">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-foreground mb-4"
          >
            Why Users Choose <span className="text-primary">Webitpay</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-foreground/80 font-medium max-w-2xl mx-auto"
          >
            Discover why crypto enthusiasts are switching to Webitpay for their daily spending needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card p-6 md:p-8 rounded-3xl border border-border shadow-sm hover:border-green-500/30 transition-colors"
          >
            <h3 className="text-xl font-black text-green-500 mb-6 flex items-center gap-2">
              <FaThumbsUp /> Top Benefits
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-foreground mb-1">Incredible Welcome Offer</h4>
                <p className="text-sm text-foreground/80">Users love the automatic $5 coupon and the ability to grab a Virtual Card completely for free using partner referral links.</p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Smooth KYC Process</h4>
                <p className="text-sm text-foreground/80">Account verification is fast and frustration-free, getting you ready to spend your crypto in under 24 hours.</p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Seamless Crypto Spending</h4>
                <p className="text-sm text-foreground/80">Crypto-to-fiat conversions happen almost instantly, making retail checkouts and online shopping incredibly smooth.</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card p-6 md:p-8 rounded-3xl border border-border shadow-sm hover:border-primary/30 transition-colors"
          >
            <h3 className="text-xl font-black text-primary mb-6 flex items-center gap-2">
              <FaLightbulb /> Pro Tips
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-foreground mb-1">Use the Right Codes</h4>
                <p className="text-sm text-foreground/80">Always ensure you register via the link <span className="text-primary font-bold">webitpay.org/vsnbd</span> to auto-apply the $5 coupon and unlock the free virtual card.</p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Save on Physical Cards</h4>
                <p className="text-sm text-foreground/80">If you travel often, the physical card is worth it. Don't forget to use promo code <span className="text-primary font-bold">vsn</span> to cut the price down from $100 to $80.</p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Bind to Digital Wallets</h4>
                <p className="text-sm text-foreground/80">Immediately bind your free virtual card to Apple Pay or Google Pay for quick contactless payments everywhere.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}