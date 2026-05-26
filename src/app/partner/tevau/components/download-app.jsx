'use client';

import { motion } from 'framer-motion';
import { FaGooglePlay, FaApple } from 'react-icons/fa';

export function TevauDownload() {
  return (
    <section id="download-app" className="py-16 lg:py-24 bg-card relative overflow-hidden border-t border-border/50">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">
            Download the <span className="text-primary">Tevau App</span>
          </h2>
          <p className="text-foreground/80 font-medium max-w-2xl mx-auto mb-10 text-sm md:text-base">
            Securely manage your assets, order cards, and convert crypto to fiat instantly with the Tevau mobile app.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="https://play.google.com/store/apps/details?id=uni.UNI2317D55"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-background border border-border text-foreground hover:border-primary hover:text-primary rounded-xl font-black flex items-center justify-center gap-3 active:scale-95 transition-all shadow-sm"
            >
              <FaGooglePlay className="text-2xl" />
              <div className="text-left">
                <p className="text-[10px] uppercase font-bold text-foreground/60 leading-tight">Get it on</p>
                <p className="text-base leading-tight">Google Play</p>
              </div>
            </a>
            
            <a 
              href="https://apps.apple.com/app/6504911110"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-background border border-border text-foreground hover:border-primary hover:text-primary rounded-xl font-black flex items-center justify-center gap-3 active:scale-95 transition-all shadow-sm"
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