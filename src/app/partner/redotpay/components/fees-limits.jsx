'use client';

import { FaCheckCircle } from 'react-icons/fa';

export function RedotpayFees() {
  return (
    <section className="py-16 lg:py-24 bg-card border-t border-border/50 relative">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">Transparent <span className="text-primary">Fee Structure</span></h2>
          <p className="text-muted font-medium max-w-2xl mx-auto">No hidden charges. Know exactly what you are paying for with our updated rates.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 max-w-6xl mx-auto">
          {/* Card & Account */}
          <div className="bg-background rounded-3xl p-6 md:p-8 border-2 border-border shadow-sm">
            <h3 className="text-xl font-black text-foreground mb-6 flex items-center gap-2">
              <FaCheckCircle className="text-primary" /> Card & Account
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-border/60">
                <span className="font-medium text-muted">Virtual Card Application</span>
                <span className="font-bold text-foreground">10.00 USD</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border/60">
                <span className="font-medium text-muted">Physical Card Application</span>
                <span className="font-bold text-foreground">100.00 USD</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border/60">
                <span className="font-medium text-muted">Mailing of Physical Card</span>
                <span className="font-bold text-green-500">Waived</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border/60">
                <span className="font-medium text-muted">Virtual Card Replacement</span>
                <span className="font-bold text-foreground">5.00 / 10.00 USD</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border/60">
                <span className="font-medium text-muted">Account Maintenance</span>
                <span className="font-bold text-green-500">Waived</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="font-medium text-muted">Card Cancellation</span>
                <span className="font-bold text-foreground">2.00 USD</span>
              </div>
            </div>
          </div>

          {/* Transactions */}
          <div className="bg-background rounded-3xl p-6 md:p-8 border-2 border-border shadow-sm">
            <h3 className="text-xl font-black text-foreground mb-6 flex items-center gap-2">
              <FaCheckCircle className="text-primary" /> Transactions
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-border/60">
                <span className="font-medium text-muted">Default Currency</span>
                <span className="font-bold text-green-500">Waived</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border/60">
                <span className="font-medium text-muted">Non-default Currency</span>
                <span className="font-bold text-foreground">1.20%</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border/60">
                <span className="font-medium text-muted">Crypto Conversion</span>
                <span className="font-bold text-foreground">1.00%</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border/60">
                <span className="font-medium text-muted">ATM (HKD Card)</span>
                <span className="font-bold text-foreground">2.00%</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border/60">
                <span className="font-medium text-muted">ATM (USD Card)</span>
                <span className="font-bold text-foreground">2.00% / 3.00%</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="font-medium text-muted">Declined Transaction</span>
                <span className="font-bold text-foreground">0.50 USD</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card Limits Table */}
        <div className="max-w-6xl mx-auto bg-background rounded-3xl border-2 border-border overflow-hidden shadow-sm">
          <div className="bg-secondary/50 p-6 border-b border-border">
            <h3 className="text-xl font-black text-foreground">Card Limits</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <tbody className="text-sm sm:text-base font-medium">
                {[
                  ['Deposit Fee', 'HKB & USD BIN', 'Free'],
                  ['Balance Limit', 'HKB & USD BIN', 'Unlimited'],
                  ['Tx Limit (Per Tx)', '', '100,000 USD'],
                  ['Tx Limit (Daily)', '', '1,000,000 USD'],
                  ['ATM Frequency', '', '3/Day | 30/Month'],
                  ['ATM Daily Limit', 'Varies by region', '3,750 USD'],
                  ['ATM Monthly Limit', 'Varies by region', '50,000 USD']
                ].map((row, i) => (
                  <tr key={i} className="border-b border-border/40 hover:bg-secondary/30 transition-colors">
                    <td className="p-4 sm:p-6 text-foreground font-bold">{row[0]}</td>
                    <td className="p-4 sm:p-6 text-muted">{row[1]}</td>
                    <td className="p-4 sm:p-6 text-foreground">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}