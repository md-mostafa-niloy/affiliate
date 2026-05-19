'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaDownload, FaUserPlus, FaIdCard, FaCreditCard, FaTags, FaGift, FaTimes, FaSearchPlus } from 'react-icons/fa';

const steps = [
  {
    icon: FaDownload,
    num: '01',
    title: 'Download & Visit',
    desc: 'Download the app from the Play Store or App Store. Once installed, open the app and navigate to the "Register" screen. Click "Register Now" to begin.',
    img: '/partner/assets/redotpay-step-1.png'
  },
  {
    icon: FaUserPlus,
    num: '02',
    title: 'Register & Claim $5',
    desc: 'Register with your email or mobile number. Make sure to enter the referral code "kzfx8" to claim your bonus. Complete the registration to receive your $5 bonus instantly.',
    img: '/partner/assets/redotpay-step-2.png'
  },
  {
    icon: FaIdCard,
    num: '03',
    title: 'Account KYC Verification',
    desc: 'To ensure the security of your account, you will need to complete the KYC verification process. This typically involves submitting a valid ID and a selfie.',
    img: '/partner/assets/redotpay-step-3.png'
  },
  {
    icon: FaCreditCard,
    num: '04',
    title: 'Select Your Card',
    desc: 'Navigate to the home page and click on the "Card" option in the footer. Choose between a virtual card or a physical card and click "order card".',
    img: '/partner/assets/redotpay-step-4.png'
  },
  {
    icon: FaTags,
    num: '05',
    title: 'Apply 20% Discount',
    desc: 'Before completing your purchase, enter promo code "RTC50" for the virtual card or "RTC100" for the physical card to receive a 20% discount. Add billing info and pay.',
    img: '/partner/assets/redotpay-step-5.png'
  }
];

export function RedotpaySteps() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (selectedImage) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => document.body.style.overflow = 'unset';
  }, [selectedImage]);

  return (
    <section id="step-guide" className="py-12 sm:py-16 lg:py-24 bg-background overflow-hidden relative">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-14 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-3 sm:mb-5">
            How to Claim Your <span className="text-primary">$10 USD Bonus</span>
          </h2>
          <p className="text-sm sm:text-base text-muted font-medium max-w-2xl mx-auto px-2">
            Follow these 5 easy steps to set up your account, apply the discounts, and get your final bonus!
          </p>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col gap-14 sm:gap-20 lg:gap-28">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
              className={`flex flex-col gap-8 sm:gap-10 items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
            >
              <div className="w-full lg:w-[45%] flex flex-col justify-center text-center lg:text-left px-2 sm:px-0">
                <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary transform-gpu hover:scale-110 transition-transform">
                    <step.icon className="text-2xl sm:text-3xl" />
                  </div>
                  <span className="text-5xl sm:text-6xl lg:text-7xl font-black text-primary/10">{step.num}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-foreground mb-3 sm:mb-4">{step.title}</h3>
                <p className="text-base sm:text-lg text-muted font-medium leading-relaxed">{step.desc}</p>
              </div>
              
              <div 
                className="w-full lg:w-[55%] relative group cursor-pointer"
                onClick={() => setSelectedImage(step.img)}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-[1.8rem] sm:rounded-[2.2rem] blur-lg group-hover:opacity-100 opacity-0 transition-opacity duration-500"></div>
                <div className="relative p-1.5 sm:p-2 bg-card border border-border rounded-[1.5rem] sm:rounded-[2rem] shadow-xl overflow-hidden transform-gpu">
                  <img 
                    src={step.img} 
                    alt={step.title} 
                    loading="lazy"
                    className="w-full h-auto rounded-[1.2rem] sm:rounded-[1.6rem] object-cover aspect-video transition-transform duration-500 group-hover:scale-105" 
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 rounded-[1.5rem] sm:rounded-[2rem] flex items-center justify-center m-1.5 sm:m-2">
                    <div className="w-14 h-14 bg-black/60 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform-gpu scale-75 group-hover:scale-100 transition-all duration-300 backdrop-blur-sm shadow-2xl">
                      <FaSearchPlus className="text-2xl" />
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
             className="w-full bg-gradient-to-r from-primary to-accent rounded-[1.5rem] sm:rounded-[2rem] p-8 sm:p-10 lg:p-12 text-white text-center shadow-2xl relative overflow-hidden transform-gpu mt-6"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.15)_0%,_transparent_70%)] pointer-events-none"></div>
            <FaGift className="text-5xl sm:text-6xl mx-auto mb-4 sm:mb-6 text-white/95 relative z-10 animate-bounce" />
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-3 sm:mb-4 relative z-10">Final Step: Claim Extra $5 USDT</h3>
            <p className="text-base sm:text-lg font-medium max-w-2xl mx-auto relative z-10 text-white/90 leading-relaxed">
              After purchasing your card using the codes, do not forget to contact Redotpay customer support to claim an additional $5 USDT bonus!
            </p>
          </motion.div>
        </div>
      </div>

      {/* Lightbox / Image Popup */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-8 bg-black/95 cursor-pointer backdrop-blur-sm"
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
              className="relative max-w-6xl w-full h-auto max-h-[90vh] rounded-2xl overflow-hidden cursor-default flex items-center justify-center"
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
