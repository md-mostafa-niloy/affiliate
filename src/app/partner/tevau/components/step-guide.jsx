'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaDownload, FaUserPlus, FaIdCard, FaCreditCard, FaTags, FaGift, FaTimes, FaSearchPlus, FaCopy, FaCheckCircle, FaExternalLinkAlt } from 'react-icons/fa';

export function TevauSteps() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [copiedCode, setCopiedCode] = useState('');

  useEffect(() => {
    if (selectedImage) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => document.body.style.overflow = 'unset';
  }, [selectedImage]);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(text);
    setTimeout(() => setCopiedCode(''), 2000);
  };

  const steps = [
    {
      icon: FaDownload,
      num: '01',
      title: 'Download & Visit',
      desc: (
        <>
          Use our official invite link (
          <a href="https://tevau.io/invite_registration/#/?inviteCode=972272" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary hover:text-primary/80 font-bold mx-1 transition-colors">
            tevau.io <FaExternalLinkAlt className="w-2.5 h-2.5" />
          </a>
          ) to download the Tevau app. Open it and select "Register".
        </>
      ),
      img: '/partner/assets/tevau-step-1.png'
    },
    {
      icon: FaUserPlus,
      num: '02',
      title: 'Register Account',
      desc: (
        <>
          Sign up with your email or phone. Enter the referral code 
          <button onClick={() => handleCopy('972272')} className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-2 py-0.5 rounded-md font-bold hover:bg-primary/20 transition-colors mx-1 active:scale-95">
            972272 {copiedCode === '972272' ? <FaCheckCircle className="w-3 h-3" /> : <FaCopy className="w-3 h-3" />}
          </button> 
          to bind your account to our partner discount network.
        </>
      ),
      img: '/partner/assets/tevau-step-2.png'
    },
    {
      icon: FaIdCard,
      num: '03',
      title: 'KYC Verification',
      desc: 'Complete the quick identity verification process. Submit a valid ID and selfie to secure your account and unlock high transaction limits.',
      img: '/partner/assets/tevau-step-3.png'
    },
    {
      icon: FaCreditCard,
      num: '04',
      title: 'Select Your Card',
      desc: 'Go to the Cards section. Choose between the Virtual ($10), Plastic Physical ($100), or the Premium Metal ($199) depending on your lifestyle.',
      img: '/partner/assets/tevau-step-4.png'
    },
    {
      icon: FaTags,
      num: '05',
      title: 'Apply 20% Promo Code',
      desc: (
        <>
          Before completing the payment, apply promo code 
          <button onClick={() => handleCopy('visernic')} className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-2 py-0.5 rounded-md font-bold hover:bg-primary/20 transition-colors mx-1 active:scale-95">
            visernic {copiedCode === 'visernic' ? <FaCheckCircle className="w-3 h-3" /> : <FaCopy className="w-3 h-3" />}
          </button> 
          at checkout to instantly receive a virtual card with 20% discount on any card tier!
          <button onClick={() => handleCopy('visernic8')} className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-2 py-0.5 rounded-md font-bold hover:bg-primary/20 transition-colors mx-1 active:scale-95">
            visernic8 {copiedCode === 'visernic8' ? <FaCheckCircle className="w-3 h-3" /> : <FaCopy className="w-3 h-3" />}
          </button> 
          at checkout to instantly receive a physical card with 20% discount on any card tier!
        </>
      ),
      img: '/partner/assets/tevau-step-5.png'
    }
  ];

  return (
    <section id="step-guide" className="py-12 sm:py-16 lg:py-24 bg-background overflow-hidden relative">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-14 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-3 sm:mb-4">
            How to Setup Your <span className="text-primary">Tevau Account</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-foreground/80 font-medium max-w-2xl mx-auto px-2">
            Follow these 5 steps to verify your profile and apply the promo code for massive discounts.
          </p>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col gap-14 sm:gap-20 lg:gap-28">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
              className={`flex flex-col gap-8 sm:gap-10 lg:gap-12 items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
            >
              <div className="w-full lg:w-[40%] flex flex-col justify-center text-center lg:text-left px-2 sm:px-0">
                <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                    <step.icon className="text-2xl sm:text-3xl" />
                  </div>
                  <span className="text-5xl sm:text-6xl lg:text-7xl font-black text-primary/10">{step.num}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-foreground mb-3">{step.title}</h3>
                <div className="text-[15px] sm:text-base lg:text-lg text-foreground/80 font-medium leading-relaxed">{step.desc}</div>
              </div>
              
              <div 
                className="w-full lg:w-[60%] relative group cursor-pointer"
                onClick={() => setSelectedImage(step.img)}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-[1.8rem] sm:rounded-[2.2rem] blur-lg group-hover:opacity-100 opacity-0 transition-opacity duration-500"></div>
                <div className="relative p-1.5 sm:p-2 bg-card border border-border rounded-[1.5rem] sm:rounded-[2rem] shadow-xl overflow-hidden">
                  <img 
                    src={step.img} 
                    alt={step.title} 
                    loading="lazy"
                    className="w-full h-auto rounded-[1.2rem] sm:rounded-[1.6rem] object-cover aspect-video transition-transform duration-500 group-hover:scale-105" 
                  />
                  
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 rounded-[1.5rem] sm:rounded-[2rem] flex items-center justify-center m-1.5 sm:m-2">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-black/70 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm shadow-2xl">
                      <FaSearchPlus className="text-xl sm:text-2xl" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          <motion.div
             initial={{ opacity: 0, scale: 0.98 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="w-full bg-gradient-to-r from-primary to-accent rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-8 lg:p-12 text-white text-center shadow-2xl relative overflow-hidden mt-4 lg:mt-8 max-w-5xl mx-auto"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.15)_0%,_transparent_70%)] pointer-events-none"></div>
            <FaGift className="text-4xl sm:text-5xl lg:text-6xl mx-auto mb-3 sm:mb-4 lg:mb-6 text-white relative z-10 animate-bounce" />
            <h3 className="text-xl sm:text-2xl lg:text-4xl font-black mb-2 sm:mb-3 lg:mb-4 relative z-10 text-white">Enjoy Your Tevau Card</h3>
            <p className="text-[13px] sm:text-base lg:text-lg font-medium max-w-2xl mx-auto relative z-10 text-white leading-relaxed px-2">
              With the 20% discount applied, you can now spend your crypto worldwide efficiently and securely.
            </p>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[150] flex items-center justify-center p-3 sm:p-6 lg:p-10 bg-black/95 cursor-pointer backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-[160] w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-primary text-white rounded-full flex items-center justify-center transition-all duration-300 border border-white/20 hover:scale-110"
            >
              <FaTimes className="text-lg sm:text-xl" />
            </button>
            
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-7xl max-h-[90vh] rounded-2xl overflow-hidden cursor-default flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage} 
                alt="Expanded Step Guide" 
                className="w-full h-auto max-h-[90vh] object-contain rounded-2xl drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}