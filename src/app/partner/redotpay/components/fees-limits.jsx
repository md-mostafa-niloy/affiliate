'use client';

import { motion } from 'framer-motion';
import { FaCheckCircle, FaBolt, FaWallet, FaExchangeAlt, FaChartLine } from 'react-icons/fa';

export function RedotpayFees() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background relative overflow-hidden border-t border-border/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-14">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center gap-1.5 mb-3 px-3 py-1 bg-primary/10 rounded-full border border-primary/20"
          >
            <FaBolt className="text-primary w-3 h-3" />
            <span className="text-[10px] sm:text-xs font-bold text-primary uppercase tracking-widest">Clear Pricing</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl font-black text-foreground mb-3 tracking-tight"
          >
            RedotPay <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Fee Structure</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="text-xs sm:text-base md:text-lg text-muted font-medium max-w-2xl mx-auto px-2 leading-relaxed"
          >
            No hidden charges. Know exactly what you are paying for with our updated, straightforward pricing model.
          </motion.p>
        </div>

        {/* Fees Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10 max-w-6xl mx-auto">
          
          {/* Card & Account */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-card border border-border rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 flex flex-col h-full shadow-sm hover:shadow-md transform-gpu hover:-translate-y-1 hover:border-primary/30 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <FaWallet className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-2xl font-black text-foreground">Card & Account</h3>
            </div>
            
            <div className="space-y-1 flex-grow">
              {[
                { label: 'Virtual Card Application', value: '10.00 USD' },
                { label: 'Physical Card Application', value: '100.00 USD' },
                { label: 'Mailing of Physical Card', value: 'Waived', highlight: true },
                { label: 'Virtual Card Replacement', value: '5.00 / 10.00 USD' },
                { label: 'Account Maintenance', value: 'Waived', highlight: true },
                { label: 'Card Cancellation', value: '2.00 USD' }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center py-3.5 sm:py-4 border-b border-border/60 last:border-0 group">
                  <span className="text-xs sm:text-sm font-medium text-muted group-hover:text-foreground transition-colors">{item.label}</span>
                  <span className={`text-xs sm:text-sm font-bold ${item.highlight ? 'text-green-500' : 'text-foreground'}`}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Transactions */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-card border border-border rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 flex flex-col h-full shadow-sm hover:shadow-md transform-gpu hover:-translate-y-1 hover:border-primary/30 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary rounded-xl flex items-center justify-center text-foreground">
                <FaExchangeAlt className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-2xl font-black text-foreground">Transactions</h3>
            </div>
            
            <div className="space-y-1 flex-grow">
              {[
                { label: 'Default Currency', value: 'Waived', highlight: true },
                { label: 'Non-default Currency', value: '1.20%' },
                { label: 'Crypto Conversion', value: '1.00%' },
                { label: 'ATM (HKD Card)', value: '2.00%' },
                { label: 'ATM (USD Card)', value: '2.00% / 3.00%' },
                { label: 'Declined Transaction', value: '0.50 USD' }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center py-3.5 sm:py-4 border-b border-border/60 last:border-0 group">
                  <span className="text-xs sm:text-sm font-medium text-muted group-hover:text-foreground transition-colors">{item.label}</span>
                  <span className={`text-xs sm:text-sm font-bold ${item.highlight ? 'text-green-500' : 'text-foreground'}`}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Card Limits Table */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-6xl mx-auto bg-card rounded-2xl sm:rounded-[2rem] border border-border overflow-hidden shadow-sm hover:border-primary/30 transition-colors duration-300"
        >
          <div className="bg-secondary/30 p-5 sm:p-6 border-b border-border flex items-center gap-3">
            <FaChartLine className="text-primary text-xl" />
            <h3 className="text-lg sm:text-xl font-black text-foreground">Card Limits</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse whitespace-nowrap">
              <tbody className="text-xs sm:text-sm font-medium">
                {[
                  ['Deposit Fee', 'HKB & USD BIN', 'Free'],
                  ['Balance Limit', 'HKB & USD BIN', 'Unlimited'],
                  ['Tx Limit (Per Tx)', '-', '100,000 USD'],
                  ['Tx Limit (Daily)', '-', '1,000,000 USD'],
                  ['ATM Frequency', '-', '3/Day | 30/Month'],
                  ['ATM Daily Limit', 'Varies by region', '3,750 USD'],
                  ['ATM Monthly Limit', 'Varies by region', '50,000 USD']
                ].map((row, i) => (
                  <tr key={i} className="border-b border-border/40 hover:bg-secondary/40 transition-colors">
                    <td className="p-4 sm:p-5 text-foreground font-bold">{row[0]}</td>
                    <td className="p-4 sm:p-5 text-muted">{row[1]}</td>
                    <td className="p-4 sm:p-5 text-foreground">{row[2]}</td>
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