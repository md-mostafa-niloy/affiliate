'use client';

import { motion } from 'framer-motion';
import { FaCheckCircle, FaStar } from 'react-icons/fa';

export function RizonFees() {
  return (
    <section className="py-16 lg:py-24 bg-background relative overflow-hidden border-t border-border/50">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-foreground mb-4"
          >
            Transparent <span className="text-primary">Rates & Limits</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-foreground/80 font-medium max-w-2xl mx-auto"
          >
            No surprises, just clarity. Cut FX, trading, and transaction fees by 50% with Rizon Emerald.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-3xl p-6 md:p-8 border border-border shadow-sm hover:border-primary/30 transition-colors"
          >
            <h3 className="text-xl font-black text-foreground mb-6 flex items-center gap-2">
              <FaCheckCircle className="text-primary" /> Card Issuance & Account
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-border/60">
                <span className="font-medium text-foreground/80">Virtual Card</span>
                <span className="font-bold text-foreground">$10.00</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border/60">
                <span className="font-medium text-foreground/80">Physical Card</span>
                <span className="font-bold text-foreground">$29.99</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border/60">
                <span className="font-medium text-foreground/80">Additional Card / Replacement</span>
                <span className="font-bold text-foreground">Check App</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="font-medium text-foreground/80">Account Maintenance</span>
                <span className="font-bold text-green-500 bg-green-500/10 px-3 py-1 rounded-full text-xs">FREE</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-3xl p-6 md:p-8 border border-border shadow-sm hover:border-primary/30 transition-colors"
          >
            <h3 className="text-xl font-black text-foreground mb-6 flex items-center gap-2">
              <FaCheckCircle className="text-primary" /> Usage Limits
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-border/60">
                <span className="font-medium text-foreground/80">Deposit</span>
                <span className="font-bold text-foreground">No Limit</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border/60">
                <span className="font-medium text-foreground/80">Card Spend</span>
                <span className="font-bold text-foreground">No Limit</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border/60">
                <span className="font-medium text-foreground/80">Send Limit (Email, SMS, Wallet)</span>
                <span className="font-bold text-foreground">No Limit</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="font-medium text-foreground/80">ATM Withdrawal</span>
                <span className="font-bold text-foreground">$250</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-6xl mx-auto bg-card rounded-3xl border border-border overflow-hidden shadow-sm"
        >
          <div className="bg-gradient-to-r from-primary/10 to-transparent p-6 sm:p-8 border-b border-primary/20 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="text-2xl font-black text-foreground flex items-center gap-2">
                <FaStar className="text-yellow-500" /> Rizon Emerald Subscription
              </h3>
              <p className="text-foreground/80 font-medium text-sm mt-1">Subscribe & Save 50% now! From just $5.59/month.</p>
            </div>
            <button className="px-6 py-2.5 bg-primary text-white font-bold rounded-xl whitespace-nowrap hover:bg-opacity-90 transition-all active:scale-95">
              Upgrade Now
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse whitespace-nowrap">
              <thead>
                <tr className="bg-secondary/50 text-xs sm:text-sm uppercase tracking-wider text-foreground/70 border-b border-border">
                  <th className="p-4 sm:p-6 font-bold">Transaction Type</th>
                  <th className="p-4 sm:p-6 font-bold text-primary bg-primary/5">With Emerald</th>
                  <th className="p-4 sm:p-6 font-bold">Without Emerald</th>
                </tr>
              </thead>
              <tbody className="text-sm sm:text-base font-medium">
                {[
                  ['Deposit', 'Free', 'Free'],
                  ['Card spend (USD)', 'Free', 'Free'],
                  ['Card spend (non-USD)', '1.02%', '1.7% + $0.1'],
                  ['Send (Rizon user)', 'Free', 'Free'],
                  ['Send (International)', 'Network fee + 0.1%', 'Network fee + 0.1%'],
                  ['On-chain Withdrawal', 'Network fee + 0.1%', 'Network fee + 0.1%'],
                  ['Small transaction (≤ $1)', '$0.25', '$0.5'],
                  ['Trading fee', '0.85%', '1.7%'],
                  ['Declined transaction', '$0.05', '$0.1'],
                  ['Bank account opening', 'Free', '$1.99']
                ].map((row, i) => (
                  <tr key={i} className="border-b border-border/40 hover:bg-secondary/30 transition-colors">
                    <td className="p-4 sm:p-6 text-foreground">{row[0]}</td>
                    <td className="p-4 sm:p-6 font-bold text-primary bg-primary/5">{row[1]}</td>
                    <td className="p-4 sm:p-6 text-foreground/80">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

      </div>
    </section>
  );
}