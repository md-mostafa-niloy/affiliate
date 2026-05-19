'use client';

import { motion } from 'framer-motion';
import { FaThumbsUp, FaExclamationCircle } from 'react-icons/fa';

export function RedotpayReviews() {
  return (
    <section className="py-16 bg-background relative overflow-hidden border-t border-border/50">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">What Users <span className="text-primary">Are Saying</span></h2>
          <p className="text-muted font-medium max-w-2xl mx-auto">RedotPay has garnered attention in the crypto payment space with generally positive feedback from users worldwide.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* What Users Like */}
          <div className="bg-card p-6 md:p-8 rounded-3xl border-2 border-green-500/20 shadow-sm">
            <h3 className="text-xl font-black text-green-500 mb-6 flex items-center gap-2">
              <FaThumbsUp /> What Users Like
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-foreground mb-1">Easy Setup</h4>
                <p className="text-sm text-muted">Registration and KYC process is straightforward and completed within 24-48 hours.</p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Practical Solution</h4>
                <p className="text-sm text-muted">Crypto holders appreciate finally having a reliable way to spend digital assets in the real world.</p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Great App Experience</h4>
                <p className="text-sm text-muted">Mobile app gets praise for its clean interface and intuitive navigation.</p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Transaction Speed</h4>
                <p className="text-sm text-muted">Crypto-to-fiat conversions happen almost instantly, making checkout smooth.</p>
              </div>
            </div>
          </div>

          {/* Common Feedback */}
          <div className="bg-card p-6 md:p-8 rounded-3xl border-2 border-orange-500/20 shadow-sm">
            <h3 className="text-xl font-black text-orange-500 mb-6 flex items-center gap-2">
              <FaExclamationCircle /> Common Feedback
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-foreground mb-1">Fees</h4>
                <p className="text-sm text-muted">While competitive, some users wish transaction fees were slightly lower.</p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Geographic Limitations</h4>
                <p className="text-sm text-muted">Service availability varies by region, with some countries having restrictions.</p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Customer Support</h4>
                <p className="text-sm text-muted">Response times are generally good, though some report delays during peak periods.</p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Card Delivery</h4>
                <p className="text-sm text-muted">Physical card shipping can take 2-4 weeks depending on location.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}