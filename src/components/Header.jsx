'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiArrowRight } from 'react-icons/fi';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Partners', href: '#partners' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`sticky top-0 z-[100] transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-xl border-b border-border py-3 shadow-lg shadow-black/5' 
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="/" className="relative z-10 flex items-center">
          <img
            src="/logo.svg"
            alt="Visernic"
            className="h-8 md:h-10 w-auto object-contain transition-transform duration-300 hover:scale-105"
          />
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-5 py-2 text-sm lg:text-base font-bold text-foreground/80 hover:text-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-5 right-5 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 bg-primary text-white rounded-xl font-black text-sm lg:text-base flex items-center gap-2 hover:bg-opacity-90 hover:shadow-xl hover:shadow-primary/20 transition-all active:scale-95"
          >
            GET STARTED <FiArrowRight className="text-lg" />
          </button>
        </div>

        <button
          className="md:hidden p-2 text-foreground relative z-10"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 right-0 bg-white border-b border-border overflow-hidden md:hidden shadow-2xl"
            >
              <div className="p-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-bold text-foreground hover:text-primary transition-colors py-2 border-b border-secondary"
                  >
                    {link.name}
                  </a>
                ))}
                <button 
                  onClick={() => {
                    setIsOpen(false); 
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }} 
                  className="w-full mt-2 px-6 py-4 bg-primary text-white rounded-xl font-black flex items-center justify-center gap-2"
                >
                  START JOURNEY <FiArrowRight />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}