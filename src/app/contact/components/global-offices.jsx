'use client';

import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaBuilding } from 'react-icons/fa';

const offices = [
  {
    country: 'United Kingdom',
    city: 'Southampton',
    type: 'Global Headquarters',
    address: 'Southampton, United Kingdom',
    email: 'uk@visernic.com',
    phone: '+44 20 1234 5678',
    icon: FaBuilding
  },
  {
    country: 'Bangladesh',
    city: 'Nazipur',
    type: 'Development Center',
    address: 'Nazipur, Naogaon, Bangladesh',
    email: 'bd@visernic.com',
    phone: '+880 1700 000000',
    icon: FaMapMarkerAlt
  }
];

export function GlobalOffices() {
  return (
    <section className="w-full bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[300px] sm:h-[400px] bg-[radial-gradient(ellipse_at_top,_var(--color-primary)_0%,_transparent_60%)] opacity-[0.08] pointer-events-none"></div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 relative z-10 py-8 sm:py-12 border-t border-border/50">
        <div className="text-center mb-10 sm:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground mb-4 tracking-tight text-balance"
          >
            Our Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Presence</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm sm:text-base text-muted max-w-2xl mx-auto leading-relaxed font-medium text-balance"
          >
            Find us across the globe. Our dedicated teams are strategically located to provide you with seamless support and innovative solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {offices.map((office, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="group bg-card p-6 sm:p-8 rounded-[2rem] border-2 border-border hover:border-primary/50 shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 relative overflow-hidden isolate transform-gpu hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shadow-inner group-hover:bg-primary transition-colors duration-300">
                  <office.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-foreground group-hover:text-primary transition-colors duration-300">
                    {office.country}
                  </h3>
                  <p className="text-xs font-bold text-muted uppercase tracking-wider">{office.type}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 text-sm font-medium text-muted">
                  <FaMapMarkerAlt className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>{office.address}</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-medium text-muted">
                  <FaEnvelope className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{office.email}</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-medium text-muted">
                  <FaPhoneAlt className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{office.phone}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}