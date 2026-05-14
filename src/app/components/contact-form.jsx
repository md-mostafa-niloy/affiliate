'use client';

import { useState, useRef, useEffect } from 'react';
import { 
  FaEnvelope, 
  FaPhoneAlt, 
  FaMapMarkerAlt, 
  FaPaperPlane, 
  FaClock, 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin, 
  FaCheckCircle,
  FaChevronDown,
  FaUser,
  FaInfoCircle,
  FaHandshake,
  FaWrench,
  FaCreditCard
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { MathCaptcha } from './math-captcha';

const subjectOptions = [
  { id: 'general', label: 'General Inquiry', icon: FaInfoCircle },
  { id: 'partnership', label: 'Partnership Proposal', icon: FaHandshake },
  { id: 'support', label: 'Technical Support', icon: FaWrench },
  { id: 'billing', label: 'Billing & Payments', icon: FaCreditCard }
];

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubjectSelect = (label) => {
    setFormData((prev) => ({ ...prev, subject: label }));
    setIsDropdownOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isCaptchaValid || !formData.subject) return;

    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsCaptchaValid(false);
      
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="w-full bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[300px] sm:h-[400px] bg-[radial-gradient(ellipse_at_top,_var(--color-primary)_0%,_transparent_60%)] opacity-[0.08] pointer-events-none"></div>
      
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-[300px] sm:h-[400px] bg-[radial-gradient(ellipse_at_bottom,_var(--color-primary)_0%,_transparent_60%)] opacity-[0.08] pointer-events-none"></div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 relative z-10 py-8 sm:py-12">
        
        <div className="text-center mb-10 sm:mb-14">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4 px-4 sm:px-5 py-2 sm:py-2.5 bg-primary/10 rounded-full border border-primary/20 shadow-sm backdrop-blur-sm"
          >
            <FaEnvelope className="text-primary w-3 h-3 sm:w-4 sm:h-4 animate-pulse" />
            <span className="text-[10px] sm:text-xs font-bold text-primary uppercase tracking-widest">Get In Touch</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-4 tracking-tight text-balance"
          >
            Our Support <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Together</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm sm:text-base text-muted max-w-2xl mx-auto font-medium leading-relaxed text-balance"
          >
            Have a question, partnership proposal, or just want to say hi? Fill out the form below and our dedicated team will get back to you within 24 hours.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 items-stretch max-w-7xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-2 space-y-6 flex flex-col h-full transform-gpu"
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6">
              <div className="group flex items-center gap-4 p-5 sm:p-6 bg-card rounded-[1.5rem] border-2 border-border shadow-sm hover:shadow-lg hover:shadow-primary/10 hover:border-primary/50 transition-all duration-300 isolate">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300 shadow-inner">
                  <FaPhoneAlt className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-foreground mb-1 uppercase tracking-wider group-hover:text-primary transition-colors">Call Us Directly</h4>
                  <p className="text-muted text-xs sm:text-sm font-medium">+1 (555) 123-4567</p>
                  <p className="text-muted text-xs sm:text-sm font-medium">+1 (555) 987-6543</p>
                </div>
              </div>

              <div className="group flex items-center gap-4 p-5 sm:p-6 bg-card rounded-[1.5rem] border-2 border-border shadow-sm hover:shadow-lg hover:shadow-primary/10 hover:border-primary/50 transition-all duration-300 isolate">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300 shadow-inner">
                  <FaEnvelope className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-foreground mb-1 uppercase tracking-wider group-hover:text-primary transition-colors">Email Address</h4>
                  <p className="text-muted text-xs sm:text-sm font-medium">hello@yourbrand.com</p>
                  <p className="text-muted text-xs sm:text-sm font-medium">support@yourbrand.com</p>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="p-5 sm:p-6 bg-card rounded-[1.5rem] border-2 border-border shadow-sm hover:border-primary/30 transition-colors">
                <h4 className="text-xs sm:text-sm font-bold text-foreground mb-3 uppercase tracking-wider flex items-center gap-2">
                  <FaClock className="text-primary" /> Working Hours
                </h4>
                <p className="text-muted text-xs sm:text-sm mb-2 font-medium">Mon - Fri: 9AM - 6PM</p>
                <div className="inline-flex px-2.5 py-1 bg-red-500/10 text-red-500 rounded-lg text-[10px] font-bold uppercase mt-1">
                  Weekend: Support Only
                </div>
              </div>

              <div className="p-5 sm:p-6 bg-card rounded-[1.5rem] border-2 border-border shadow-sm hover:border-primary/30 transition-colors">
                <h4 className="text-xs sm:text-sm font-bold text-foreground mb-4 uppercase tracking-wider">Follow Our Socials</h4>
                <div className="flex gap-2.5">
                  <a href="#" className="w-10 h-10 bg-secondary border border-border rounded-xl flex items-center justify-center text-primary hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all shadow-sm">
                    <FaFacebook className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-secondary border border-border rounded-xl flex items-center justify-center text-primary hover:text-white hover:bg-sky-500 hover:border-sky-500 transition-all shadow-sm">
                    <FaTwitter className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-secondary border border-border rounded-xl flex items-center justify-center text-primary hover:text-white hover:bg-blue-700 hover:border-blue-700 transition-all shadow-sm">
                    <FaLinkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex-grow relative mt-2 isolate">
              <div className="absolute -inset-1 bg-gradient-to-br from-primary to-accent rounded-[2.2rem] opacity-20 blur-md group-hover:opacity-40 transition-opacity"></div>
              <div className="h-full min-h-[250px] sm:min-h-[300px] w-full bg-card rounded-[2rem] p-1.5 shadow-lg overflow-hidden relative z-10 transform-gpu border border-border">
                <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden isolate">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10 pointer-events-none"></div>
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.096417742111!2d-122.39572458468164!3d37.78776897975765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064ba2c90cb%3A0xc6a827038e12d46e!2sTech%20District!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 w-full h-full object-cover filter contrast-125 saturate-50 hover:saturate-100 transition-all duration-700 transform-gpu"
                  ></iframe>
                  <div className="absolute top-4 left-4 z-20 bg-background/90 backdrop-blur-xl px-4 py-2 rounded-xl border border-primary/30 shadow-lg flex items-center gap-3">
                    <div className="relative flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-primary animate-ping absolute"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-primary relative"></div>
                    </div>
                    <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-foreground">HQ Location</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-3 h-full transform-gpu"
          >
            <div className="bg-card p-6 sm:p-8 md:p-10 rounded-[2.5rem] border-2 border-border shadow-xl hover:shadow-2xl hover:border-primary/50 transition-all duration-300 relative overflow-hidden h-full flex flex-col isolate">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-[5rem] -z-10"></div>
              
              <h3 className="text-2xl sm:text-3xl font-black text-foreground mb-6 sm:mb-8 relative z-10 flex items-center gap-3">
                Send us a Message <span className="w-10 h-1 bg-primary rounded-full"></span>
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6 relative z-10 flex-grow flex flex-col">
                <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                  <div className="space-y-2 group">
                    <label className="text-[10px] sm:text-xs font-bold text-muted uppercase tracking-wider flex items-center gap-1.5">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted group-focus-within:text-primary transition-colors">
                        <FaUser className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-11 pr-4 py-3.5 sm:py-4 bg-background border-2 border-border rounded-xl focus:outline-none focus:ring-0 focus:border-primary text-foreground transition-all text-sm sm:text-base font-medium placeholder-muted/50"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 group">
                    <label className="text-[10px] sm:text-xs font-bold text-muted uppercase tracking-wider flex items-center gap-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted group-focus-within:text-primary transition-colors">
                        <FaEnvelope className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-11 pr-4 py-3.5 sm:py-4 bg-background border-2 border-border rounded-xl focus:outline-none focus:ring-0 focus:border-primary text-foreground transition-all text-sm sm:text-base font-medium placeholder-muted/50"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2" ref={dropdownRef}>
                  <label className="text-[10px] sm:text-xs font-bold text-muted uppercase tracking-wider flex items-center justify-between">
                    <span>Subject / Topic <span className="text-red-500">*</span></span>
                    {!formData.subject && submitted === false && (
                      <span className="text-[9px] text-red-500 bg-red-500/10 px-2 py-0.5 rounded-full">Required</span>
                    )}
                  </label>
                  <div className="relative">
                    <div 
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className={`w-full px-4 py-3.5 sm:py-4 bg-background border-2 rounded-xl cursor-pointer flex items-center justify-between transition-all ${
                        isDropdownOpen ? 'border-primary shadow-sm shadow-primary/10' : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <span className={`text-sm sm:text-base font-medium ${formData.subject ? 'text-foreground' : 'text-muted/70'}`}>
                        {formData.subject || 'Select a specific topic...'}
                      </span>
                      <FaChevronDown className={`text-muted transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-primary' : ''}`} />
                    </div>

                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute z-50 w-full mt-2 bg-card border-2 border-border rounded-xl shadow-2xl overflow-hidden"
                        >
                          {subjectOptions.map((option) => {
                            const Icon = option.icon;
                            return (
                              <div 
                                key={option.id}
                                onClick={() => handleSubjectSelect(option.label)}
                                className={`flex items-center gap-3 px-4 py-3.5 cursor-pointer transition-colors ${
                                  formData.subject === option.label 
                                    ? 'bg-primary/10 text-primary font-bold' 
                                    : 'hover:bg-secondary text-foreground'
                                }`}
                              >
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shadow-inner ${
                                  formData.subject === option.label ? 'bg-primary text-white' : 'bg-background border border-border text-muted'
                                }`}>
                                  <Icon className="w-3.5 h-3.5" />
                                </div>
                                <span className="text-sm sm:text-base">{option.label}</span>
                                {formData.subject === option.label && (
                                  <FaCheckCircle className="ml-auto text-primary w-4 h-4" />
                                )}
                              </div>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <div className="space-y-2 flex-grow flex flex-col group">
                  <label className="text-[10px] sm:text-xs font-bold text-muted uppercase tracking-wider">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <div className="relative flex-grow flex flex-col">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full flex-grow min-h-[120px] px-4 py-3.5 sm:py-4 bg-background border-2 border-border rounded-xl focus:outline-none focus:ring-0 focus:border-primary text-foreground transition-all resize-none text-sm sm:text-base font-medium placeholder-muted/50"
                      placeholder="Tell us everything we need to know..."
                    ></textarea>
                  </div>
                </div>

                <div className="pt-2 border-t border-border/60">
                  <MathCaptcha onVerify={setIsCaptchaValid} />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || submitted || !isCaptchaValid || !formData.subject}
                  className={`w-full py-3.5 sm:py-4 mt-2 rounded-xl font-black text-sm sm:text-base flex items-center justify-center gap-2 sm:gap-3 transition-all duration-300 overflow-hidden relative active:scale-95 ${
                    submitted 
                      ? 'bg-green-500 text-white shadow-[0_0_20px_rgba(34,197,94,0.4)]' 
                      : (!isCaptchaValid || !formData.subject)
                      ? 'bg-muted text-muted-foreground cursor-not-allowed border-2 border-transparent'
                      : 'bg-primary text-white hover:bg-opacity-90 hover:shadow-lg hover:shadow-primary/30'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 sm:w-6 sm:h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : submitted ? (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center gap-2">
                      <FaCheckCircle className="text-lg sm:text-xl" /> Message Delivered!
                    </motion.div>
                  ) : (
                    <>
                      <FaPaperPlane className={isCaptchaValid && formData.subject ? 'animate-bounce' : ''} /> 
                      {isCaptchaValid && formData.subject ? "Send Message Now" : "Complete Form to Send"}
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}