'use client';

import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaCopy, FaCheckCircle, FaGooglePlay, FaBookOpen, FaBolt } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export function RedotpayHero() {
  const [copiedCode, setCopiedCode] = useState('');
  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(type);
    setTimeout(() => setCopiedCode(''), 2000);
  };

  const inviteLink = "https://url.hk/i/en/kzfx8";
  const appLink = "https://play.google.com/store/apps/details?id=com.redotpay&hl=en";

  return (
    <section className="relative w-full flex items-center justify-center pt-12 pb-10 lg:pt-20 lg:pb-16 overflow-hidden bg-background">
      {/* Optimized Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      
      {/* Lag-Free Glow Effect: Replaced Heavy CSS Blur with Pure Radial Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] bg-[radial-gradient(circle,var(--tw-gradient-stops))] from-primary/10 via-primary/5 to-transparent pointer-events-none rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] bg-[radial-gradient(circle,var(--tw-gradient-stops))] from-accent/10 via-accent/5 to-transparent pointer-events-none rounded-full"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center text-center w-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="inline-flex items-center gap-1.5 mb-5 px-3 py-1.5 bg-primary/10 rounded-full border border-primary/20"
        >
          <FaBolt className="text-primary w-3 h-3" />
          <span className="text-[10px] sm:text-xs font-bold text-primary uppercase tracking-widest">Exclusive {currentYear || '2026'} Offer</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-black text-foreground mb-4 leading-[1.15] tracking-tight max-w-4xl"
        >
          Claim Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">$10 USD Bonus</span> on Redotpay
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="text-sm sm:text-base lg:text-lg text-muted mb-10 font-medium leading-relaxed max-w-2xl px-2"
        >
          Get instant sign-up bonuses and a massive 20% discount on your crypto cards. Earning and spending crypto has never been easier.
        </motion.p>

        {/* Action Buttons: Zoom Safe Layout (Flex Wrap) */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 w-full max-w-2xl mb-12"
        >
          <a 
            href={inviteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[120px] max-w-[200px] px-3 sm:px-6 py-3.5 sm:py-4 bg-primary text-white rounded-xl font-bold text-xs sm:text-sm flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 hover:opacity-90 active:scale-95 transition-all shadow-sm"
          >
            <span className="whitespace-nowrap">Apply Code</span> <FaExternalLinkAlt className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </a>
          <a 
            href={appLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[120px] max-w-[200px] px-3 sm:px-6 py-3.5 sm:py-4 bg-card border border-border text-foreground rounded-xl font-bold text-xs sm:text-sm flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 hover:border-primary hover:text-primary active:scale-95 transition-all shadow-sm"
          >
            <FaGooglePlay className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> <span className="whitespace-nowrap">Download</span>
          </a>
          <a 
            href="#step-guide"
            className="flex-1 min-w-[120px] max-w-[200px] px-3 sm:px-6 py-3.5 sm:py-4 bg-secondary text-foreground rounded-xl font-bold text-xs sm:text-sm flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 hover:bg-secondary/80 active:scale-95 transition-all shadow-sm"
          >
            <FaBookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted" /> <span className="whitespace-nowrap">Step Guide</span>
          </a>
        </motion.div>

        {/* Promo Codes Grid: Responsive and Zoom Safe */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {[
            { label: 'Bonus ($5)', code: 'kzfx8', type: 'ref', highlight: false },
            { label: 'Virtual (20%)', code: 'RTC50', type: 'c1', highlight: true },
            { label: 'Physical (20%)', code: 'RTC100', type: 'c2', highlight: true }
          ].map((item) => (
            <div 
              key={item.type}
              className={`p-4 sm:p-5 rounded-2xl border flex flex-col items-center justify-center gap-3 transition-colors ${
                item.highlight 
                  ? 'bg-primary/5 border-primary/20 hover:border-primary/40' 
                  : 'bg-card border-border hover:border-primary/30'
              }`}
            >
              <p className="text-[10px] sm:text-xs font-bold text-muted uppercase tracking-wider text-center">{item.label}</p>
              <div 
                onClick={() => handleCopy(item.code, item.type)}
                className="flex items-center gap-2 bg-background px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl border border-border w-full justify-between cursor-pointer group hover:border-primary/50 transition-colors"
                title="Click to copy"
              >
                <span className={`text-base sm:text-lg font-black tracking-wide ${item.highlight ? 'text-primary' : 'text-foreground'}`}>
                  {item.code}
                </span>
                <div className={`p-2 rounded-lg transition-colors ${item.highlight ? 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white' : 'bg-secondary text-muted group-hover:text-foreground group-hover:bg-border'}`}>
                  {copiedCode === item.type 
                    ? <FaCheckCircle className="text-green-500 w-4 h-4 sm:w-4.5 sm:h-4.5" /> 
                    : <FaCopy className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                  }
                </div>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
