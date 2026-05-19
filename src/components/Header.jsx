'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiArrowRight } from 'react-icons/fi';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Partners', href: '/partner' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header 
      className={`sticky top-0 z-[100] w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-[0_4px_30px_rgba(0,0,0,0.03)]' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
        
        <Link href="/" className="flex items-center shrink-0">
          <img
            src="/logo.svg"
            alt="Visernic"
            className="h-7 sm:h-8 w-auto object-contain transition-transform duration-300 hover:scale-102"
          />
        </Link>

        <div className="hidden md:flex items-center gap-1 bg-secondary/40 backdrop-blur-xs p-1.5 rounded-full border border-border/40">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-5 py-2 text-xs lg:text-sm font-bold text-muted hover:text-primary rounded-full transition-all duration-200 hover:bg-background relative group"
            >
              <span className="relative z-10">{link.name}</span>
            </Link>
          ))}
        </div>

        <div className="hidden md:block shrink-0">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-full font-black text-xs sm:text-sm shadow-xs hover:bg-primary/95 hover:shadow-md active:scale-98 transition-all transform-gpu"
          >
            GET STARTED
            <div className="w-5 h-5 bg-white/10 rounded-full flex items-center justify-center">
              <FiArrowRight className="text-xs" />
            </div>
          </Link>
        </div>

        <button
          className="md:hidden p-2 text-foreground rounded-lg bg-secondary/50 border border-border/50 active:scale-95 transition-transform"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
              className="absolute top-full left-0 w-full bg-background/98 backdrop-blur-md border-b border-border shadow-lg md:hidden overflow-hidden"
            >
              <div className="p-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-bold text-foreground hover:text-primary transition-colors py-3 px-4 rounded-xl hover:bg-secondary/60 flex items-center justify-between group"
                  >
                    <span>{link.name}</span>
                    <FiArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                  </Link>
                ))}
                
                <div className="pt-2 mt-1 border-t border-border/50">
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="w-full px-5 py-3.5 bg-primary text-white rounded-xl font-black text-sm flex items-center justify-center gap-2 active:scale-98 transition-all transform-gpu shadow-xs"
                  >
                    START JOURNEY <FiArrowRight className="text-base" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </nav>
    </header>
  );
}
