'use client';

import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaCopy, FaCheckCircle, FaGooglePlay, FaBookOpen, FaGift } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export function TevauHero() {
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

  const inviteLink = "https://tevau.io/invite_registration/#/?inviteCode=972272";
  const appLink = "https://play.google.com/store/apps/details?id=uni.UNI2317D55";

  return (
    <section className="relative w-full flex items-center justify-center pt-8 pb-6 lg:pt-12 lg:pb-10 overflow-hidden bg-background">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <div className="max-w-5xl mx-auto px-3 sm:px-6 relative z-10 flex flex-col items-center text-center w-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="inline-flex items-center gap-1.5 mb-4 px-3 py-1.5 bg-primary/10 rounded-full border border-primary/20"
        >
          <FaGift className="text-primary w-2.5 h-2.5 sm:w-3 sm:h-3" />
          <span className="text-[9px] sm:text-xs font-bold text-primary uppercase tracking-widest">Premium {currentYear || '2026'} Deals</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.05 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-black text-foreground mb-3 sm:mb-5 leading-[1.15] tracking-tight max-w-4xl px-2"
        >
          Unlock Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Tevau Cards</span> With Discounts
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.1 }}
          className="text-xs sm:text-base lg:text-lg text-foreground/80 mb-8 font-medium leading-relaxed max-w-2xl px-2 sm:px-4"
        >
          Register with our official referral code and apply our promo code to instantly receive a 20% discount on Virtual, Plastic, and Metal crypto cards.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.15 }}
          className="grid grid-cols-3 gap-1.5 sm:gap-4 w-full max-w-2xl mb-10"
        >
          <a 
            href={inviteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-1 sm:px-6 py-2.5 sm:py-4 bg-primary text-white rounded-lg sm:rounded-xl font-bold text-[10px] sm:text-sm flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 shadow-md hover:shadow-lg active:scale-95 transition-all"
          >
            <span className="whitespace-nowrap">Apply Code</span> <FaExternalLinkAlt className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
          </a>
          <a 
            href="#download-app"
            className="px-1 sm:px-6 py-2.5 sm:py-4 bg-card border border-border text-foreground rounded-lg sm:rounded-xl font-bold text-[10px] sm:text-sm flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 hover:border-primary hover:text-primary active:scale-95 transition-all shadow-sm"
          >
            <FaGooglePlay className="w-3 h-3 sm:w-4 sm:h-4" /> <span className="whitespace-nowrap">Download</span>
          </a>
          <a 
            href="#step-guide"
            className="px-1 sm:px-6 py-2.5 sm:py-4 bg-secondary text-foreground rounded-lg sm:rounded-xl font-bold text-[10px] sm:text-sm flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 hover:bg-secondary/80 active:scale-95 transition-all shadow-sm"
          >
            <FaBookOpen className="w-3 h-3 sm:w-4 sm:h-4 text-foreground/70" /> <span className="whitespace-nowrap">Step Guide</span>
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6"
        >
          {[
            { label: 'Referral Code', code: '972272', type: 'ref', highlight: false },
            { label: '20% OFF Virtual Promo', code: 'VISERNIC', type: 'c1', highlight: true },
            { label: '20% OFF Physical Promo', code: 'VISERNIC8', type: 'c2', highlight: true }
          ].map((item) => (
            <div 
              key={item.type}
              className={`p-3 sm:p-6 rounded-xl sm:rounded-[1.5rem] border flex flex-col items-center justify-center gap-2 sm:gap-4 transition-all hover:-translate-y-1 ${
                item.highlight 
                  ? 'bg-primary/5 border-primary/30 hover:border-primary/60' 
                  : 'bg-card border-border hover:border-primary/40'
              }`}
            >
              <p className="text-[10px] sm:text-xs font-bold text-foreground/60 uppercase tracking-wider text-center line-clamp-1">{item.label}</p>
              <div 
                onClick={() => handleCopy(item.code, item.type)}
                className="flex items-center gap-2 sm:gap-3 bg-background px-2 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl border border-border w-full justify-between cursor-pointer group hover:border-primary/40 transition-colors select-none"
                title="Click to copy"
              >
                <span className={`text-xs sm:text-lg font-black tracking-wide pl-1 sm:pl-0 ${item.highlight ? 'text-primary' : 'text-foreground'}`}>
                  {item.code}
                </span>
                <div className={`p-1.5 sm:p-2 rounded-md sm:rounded-lg transition-colors ${item.highlight ? 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white' : 'bg-secondary text-foreground/70 group-hover:text-foreground group-hover:bg-border'}`}>
                  {copiedCode === item.type 
                    ? <FaCheckCircle className="text-green-500 w-3 h-3 sm:w-4 sm:h-4" /> 
                    : <FaCopy className="w-3 h-3 sm:w-4 sm:h-4" />
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