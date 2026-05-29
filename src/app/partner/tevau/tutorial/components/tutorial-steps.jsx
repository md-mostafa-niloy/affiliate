'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCopy, FaCheckCircle, FaExclamationTriangle, FaSearchPlus, FaTimes, FaDownload, FaUserPlus, FaIdCard, FaCreditCard, FaTags } from 'react-icons/fa';

export function TutorialSteps() {
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
      num: '01',
      icon: FaDownload,
      title: 'Download & Visit Website',
      desc: 'Start by downloading the official Tevau application from your app store or visit the website. Open the app to proceed to the registration screen.',
      images: [
        '/partner/assets/tevau-t-1.png',
        '/partner/assets/tevau-t-2.png'
      ]
    },
    {
      num: '02',
      icon: FaUserPlus,
      title: 'Register & Claim $5 Bonus',
      desc: 'Click on the "Register" or "Sign Up" button. Complete the registration form. It is mandatory to enter our specific referral code to activate the partner benefits. Once your account is created with the code, you will receive a $5 bonus instantly!',
      images: [
        '/partner/assets/tevau-t-3.jpeg',
        '/partner/assets/tevau-t-4.jpeg',
        '/partner/assets/tevau-t-5.jpeg'
      ],
      referralData: '972272'
    },
    {
      num: '03',
      icon: FaIdCard,
      title: 'Account KYC Verification',
      desc: 'To purchase a card, you must verify your identity. From the main dashboard, click on the "KYC" button or open the 3-dot profile menu and select verification. Submit your documents. Verification takes about 5-10 minutes, after which a verified badge will appear.',
      images: [
        '/partner/assets/tevau-t-6.jpeg',
        '/partner/assets/tevau-t-7.jpeg',
        '/partner/assets/tevau-t-8.jpeg'
      ]
    },
    {
      num: '04',
      icon: FaCreditCard,
      title: 'Select Your Card',
      desc: 'Once your account is verified, navigate to the card section. Here you can choose which card you want to purchase: Virtual Card or Physical Card.',
      images: [
        '/partner/assets/tevau-t-9.jpeg',
        '/partner/assets/tevau-t-10.jpeg'
      ]
    },
    {
      num: '05',
      icon: FaTags,
      title: 'Apply 20% Promo Code',
      desc: 'Before finalizing your card purchase, you must apply the 20% discount promo code. Use "VISERNIC" for the Virtual Card and "VISERNIC8" for the Physical Card. Complete the checkout process to get your discounted card!',
      images: [
        '/partner/assets/tevau-t-11.jpeg',
        '/partner/assets/tevau-t-12.jpeg'
      ],
      promoData: [
        { label: 'Virtual Card Code', code: 'VISERNIC' },
        { label: 'Physical Card Code', code: 'VISERNIC8' }
      ]
    }
  ];

  return (
    <section className="py-12 lg:py-24 bg-background relative overflow-hidden">
      <div className="max-w-360 mx-auto px-4 sm:px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16 p-6 sm:p-8 bg-red-500/10 border-2 border-red-500/30 rounded-3xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-black px-4 py-1.5 rounded-bl-2xl">CRITICAL RULE</div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white shrink-0 shadow-lg shadow-red-500/30">
              <FaExclamationTriangle className="text-xl" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-red-500 mb-2">Referral Code is Mandatory</h3>
              <p className="text-sm sm:text-base text-foreground/80 font-medium leading-relaxed">
                This exclusive $5 bonus and the 20% promo code discounts are strictly valid <strong className="text-foreground">ONLY</strong> for users who register using our referral code. If you create an account without the referral code, the promo codes will not work.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="max-w-7xl mx-auto space-y-20 lg:space-y-32">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-8 lg:gap-16"
            >
              <div className="w-full flex flex-col items-center text-center max-w-3xl mx-auto">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shadow-inner">
                    <step.icon className="text-2xl sm:text-3xl" />
                  </div>
                  <span className="text-5xl sm:text-6xl font-black text-primary/10">{step.num}</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-black text-foreground mb-4">{step.title}</h3>
                <p className="text-base sm:text-lg text-foreground/80 font-medium leading-relaxed mb-6">
                  {step.desc}
                </p>

                {step.referralData && (
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                    <div className="flex items-center justify-between w-full max-w-xs bg-card border-2 border-primary/30 p-3 rounded-xl shadow-md">
                      <div className="flex flex-col text-left">
                        <span className="text-[10px] font-bold text-muted uppercase">Referral Code</span>
                        <span className="font-black text-primary text-xl tracking-widest">{step.referralData}</span>
                      </div>
                      <button 
                        onClick={() => handleCopy(step.referralData)}
                        className="px-4 py-3 bg-primary text-white rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-opacity-90 transition-colors active:scale-95"
                      >
                        {copiedCode === step.referralData ? <FaCheckCircle className="text-lg" /> : <FaCopy className="text-lg" />}
                      </button>
                    </div>
                  </div>
                )}

                {step.promoData && (
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                    {step.promoData.map((promo, pIndex) => (
                      <div key={pIndex} className="flex items-center justify-between w-full max-w-xs bg-card border-2 border-primary/30 p-3 rounded-xl shadow-md">
                        <div className="flex flex-col text-left">
                          <span className="text-[10px] font-bold text-muted uppercase">{promo.label}</span>
                          <span className="font-black text-primary text-lg tracking-widest">{promo.code}</span>
                        </div>
                        <button 
                          onClick={() => handleCopy(promo.code)}
                          className="p-3 bg-primary/10 text-primary rounded-lg text-sm font-bold hover:bg-primary hover:text-white transition-colors active:scale-95"
                        >
                          {copiedCode === promo.code ? <FaCheckCircle className="text-lg" /> : <FaCopy className="text-lg" />}
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <div className={`grid gap-4 sm:gap-6 w-full ${step.images.length === 3 ? 'grid-cols-1 sm:grid-cols-3' : 'grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto'}`}>
                {step.images.map((imgSrc, imgIndex) => (
                  <div 
                    key={imgIndex}
                    className="relative group cursor-pointer w-full"
                    onClick={() => setSelectedImage(imgSrc)}
                  >
                    <div className="absolute -inset-2 bg-linear-to-r from-primary/10 to-accent/10 rounded-4xl blur-lg group-hover:opacity-100 opacity-0 transition-opacity duration-500"></div>
                    <div className="relative p-2 sm:p-3 bg-card border border-border rounded-[1.5rem] sm:rounded-[2rem] shadow-xl overflow-hidden group-hover:border-primary/40 transition-colors">
                      <div className="relative w-full aspect-[9/16] overflow-hidden rounded-[1rem] sm:rounded-[1.5rem] bg-secondary">
                        <img 
                          src={imgSrc} 
                          alt={`${step.title} image ${imgIndex + 1}`} 
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                          <div className="w-12 h-12 bg-black/70 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm shadow-xl scale-75 group-hover:scale-100">
                            <FaSearchPlus className="text-xl" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8 bg-black/95 cursor-pointer backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-[210] w-12 h-12 bg-white/10 hover:bg-primary text-white rounded-full flex items-center justify-center transition-all duration-300 border border-white/20 hover:scale-110"
            >
              <FaTimes className="text-xl" />
            </button>
            
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl h-[90vh] rounded-2xl overflow-hidden cursor-default flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage} 
                alt="Expanded Step" 
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}