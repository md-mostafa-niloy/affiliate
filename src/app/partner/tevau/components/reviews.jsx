'use client';

import { motion } from 'framer-motion';
import { FaThumbsUp, FaLightbulb } from 'react-icons/fa';

export function TevauReviews() {
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
            Why Users Choose <span className="text-primary">Tevau</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-foreground/80 font-medium max-w-2xl mx-auto"
          >
            Discover why crypto enthusiasts are upgrading to Tevau for premium cards.
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
                <h4 className="font-bold text-foreground mb-1">Incredible Discounts</h4>
                <p className="text-sm text-foreground/80">Applying promo code 'VISERNIC - VISERNIC8' brings massive discounts on Virtual, Plastic, and Metal tiers immediately.</p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Waivers on Fees</h4>
                <p className="text-sm text-foreground/80">Tevau forgives the first few small and declined transactions every month, saving users from extra charges.</p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Global POS & ATM</h4>
                <p className="text-sm text-foreground/80">The physical cards are accepted globally allowing smooth cash withdrawals and in-store payments.</p>
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
                <h4 className="font-bold text-foreground mb-1">Always Apply Codes</h4>
                <p className="text-sm text-foreground/80">Never skip the referral field! Put <span className="text-primary font-bold">972272</span> to link your account, and <span className="text-primary font-bold">VISERNIC - VISERNIC8</span> to cut prices by 20%.</p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Choose the Right Card</h4>
                <p className="text-sm text-foreground/80">If you only shop online, the $8 Virtual card is perfect. If you travel, the Metal card offers premium limits.</p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Digital Wallet Binding</h4>
                <p className="text-sm text-foreground/80">Bind your Virtual card to Apple Pay or Google Wallet right away to tap-and-pay anywhere instantly.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}