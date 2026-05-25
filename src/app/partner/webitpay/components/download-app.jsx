'use client';

import { motion } from 'framer-motion';
import { FaGooglePlay, FaApple } from 'react-icons/fa';

export function WebitpayDownload() {
  return (
    <section id="download-app" className="py-16 lg:py-24 bg-card relative overflow-hidden border-t border-border/50">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">
            Download the <span className="text-primary">Webitpay App</span>
          </h2>
          <p className="text-foreground/80 font-medium max-w-2xl mx-auto mb-10 text-sm md:text-base">
            Get absolute control over your crypto assets. Spend anywhere globally with the official Webitpay application for iOS and Android.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="https://play.google.com/store/apps/details?id=com.webitpay.app&hl=en-US"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-background border-2 border-border text-foreground hover:border-primary hover:text-primary rounded-xl font-black flex items-center justify-center gap-3 active:scale-95 transition-all shadow-sm"
            >
              <FaGooglePlay className="text-2xl" />
              <div className="text-left">
                <p className="text-[10px] uppercase font-bold text-foreground/60 leading-tight">Get it on</p>
                <p className="text-base leading-tight">Google Play</p>
              </div>
            </a>
            
            <a 
              href="https://apps.apple.com/gb/app/webitpay-crypto-card-pay/id6743689986"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-background border-2 border-border text-foreground hover:border-primary hover:text-primary rounded-xl font-black flex items-center justify-center gap-3 active:scale-95 transition-all shadow-sm"
            >
              <FaApple className="text-2xl" />
              <div className="text-left">
                <p className="text-[10px] uppercase font-bold text-foreground/60 leading-tight">Download on the</p>
                <p className="text-base leading-tight">App Store</p>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}