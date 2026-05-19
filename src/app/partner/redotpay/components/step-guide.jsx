'use client';

import { motion } from 'framer-motion';
import { FaDownload, FaUserPlus, FaIdCard, FaCreditCard, FaTags, FaGift } from 'react-icons/fa';

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
  return (
    <section id="step-guide" className="py-12 sm:py-16 lg:py-24 bg-background overflow-hidden relative">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-3 sm:mb-5">
            How to Claim Your <span className="text-primary">$10 USD Bonus</span>
          </h2>
          <p className="text-sm sm:text-base text-muted font-medium max-w-2xl mx-auto px-2">
            Follow these 5 easy steps to set up your account, apply the discounts, and get your final bonus!
          </p>
        </div>

        <div className="max-w-5xl mx-auto flex flex-col gap-12 sm:gap-16 lg:gap-24">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
              className={`flex flex-col gap-6 sm:gap-8 items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
            >
              <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left px-2 sm:px-0">
                <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <step.icon className="text-xl sm:text-2xl" />
                  </div>
                  <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-primary/10">{step.num}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-foreground mb-2 sm:mb-3">{step.title}</h3>
                <p className="text-sm sm:text-base text-muted font-medium leading-relaxed">{step.desc}</p>
              </div>
              
              <div className="w-full lg:w-1/2 p-1.5 sm:p-2 bg-card border border-border rounded-[1.5rem] sm:rounded-[2rem] shadow-lg transform-gpu">
                <img 
                  src={step.img} 
                  alt={step.title} 
                  loading="lazy"
                  className="w-full h-auto rounded-[1.2rem] sm:rounded-[1.6rem] object-cover aspect-[4/3] sm:aspect-video" 
                />
              </div>
            </motion.div>
          ))}

          <motion.div
             initial={{ opacity: 0, scale: 0.98 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="w-full bg-gradient-to-r from-primary to-accent rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-8 lg:p-10 text-white text-center shadow-xl relative overflow-hidden transform-gpu"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.15)_0%,_transparent_70%)] pointer-events-none"></div>
            <FaGift className="text-4xl sm:text-5xl mx-auto mb-3 sm:mb-4 text-white/90 relative z-10" />
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black mb-2 sm:mb-3 relative z-10">Final Step: Claim Extra $5 USDT</h3>
            <p className="text-sm sm:text-base font-medium max-w-2xl mx-auto relative z-10 text-white/90 leading-relaxed">
              After purchasing your card using the codes, do not forget to contact Redotpay customer support to claim an additional $5 USDT bonus!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}