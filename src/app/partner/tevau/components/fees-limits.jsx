'use client';

import { motion } from 'framer-motion';
import { FaInfoCircle, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

export function TevauFees() {
  return (
    <section className="py-16 lg:py-24 bg-background relative border-t border-border/50">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-foreground mb-4"
          >
            Tevau <span className="text-primary">Fees & Rules</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-foreground/80 font-medium max-w-2xl mx-auto"
          >
            Review the standard operational fees for the Tevau Platinum cards.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 max-w-7xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-3xl p-6 md:p-8 border border-border shadow-sm hover:border-primary/30 transition-colors h-full flex flex-col"
          >
            <h3 className="text-xl font-black text-foreground mb-6 flex items-center gap-3">
              <div className="p-3 bg-primary/10 rounded-xl text-primary"><FaCheckCircle /></div>
              Standard Transactions
            </h3>
            <div className="space-y-1 flex-grow">
              {[
                { label: 'Monthly Fee', value: '0 USD', highlight: true },
                { label: 'Top-up Fee', value: '1%' },
                { label: 'USD Transaction Fee', value: '0.2 USD + 0.5%' },
                { label: 'FX Transaction Fee', value: '1.2%' },
                { label: 'ATM Withdrawal (Physical Only)', value: '1.9%' },
                { label: 'Close Card Fee', value: '2 USD' }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center py-3.5 border-b border-border/60 last:border-0 group">
                  <span className="text-sm font-medium text-foreground/70 group-hover:text-foreground transition-colors">{item.label}</span>
                  <span className={`text-sm font-bold ${item.highlight ? 'text-green-500' : 'text-foreground'}`}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-3xl p-6 md:p-8 border border-border shadow-sm flex flex-col gap-6 h-full"
          >
            <div className="p-5 bg-background border border-border rounded-2xl flex-grow">
               <h3 className="text-lg font-black text-foreground mb-3 flex items-center gap-2">
                 <FaInfoCircle className="text-primary" /> Small Auth Transactions
               </h3>
               <p className="text-sm text-foreground/80 font-medium mb-3">Applies to transactions ≤ 3 USD per transaction.</p>
               <ul className="space-y-2 text-sm font-medium">
                 <li className="flex items-start gap-2">
                   <span className="text-green-500 font-bold">•</span>
                   <span className="text-foreground">Waived for the first 5 small transactions per card each month.</span>
                 </li>
                 <li className="flex items-start gap-2">
                   <span className="text-primary font-bold">•</span>
                   <span className="text-foreground">0.2 USD for each following small transaction.</span>
                 </li>
               </ul>
            </div>

            <div className="p-5 bg-red-500/5 border border-red-500/20 rounded-2xl flex-grow">
               <h3 className="text-lg font-black text-red-500 mb-3 flex items-center gap-2">
                 <FaExclamationTriangle /> Declined Transaction Fee
               </h3>
               <p className="text-sm text-foreground/80 font-medium mb-3">Applies when a transaction fails due to insufficient balance or locks.</p>
               <ul className="space-y-2 text-sm font-medium">
                 <li className="flex items-start gap-2">
                   <span className="text-green-500 font-bold">•</span>
                   <span className="text-foreground">Waived for the first 3 declined transactions per card each month.</span>
                 </li>
                 <li className="flex items-start gap-2">
                   <span className="text-red-500 font-bold">•</span>
                   <span className="text-foreground">0.5 USD for each following declined transaction.</span>
                 </li>
               </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}