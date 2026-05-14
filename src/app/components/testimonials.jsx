'use client';

import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaCheckCircle, FaStarHalfAlt } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'Top Affiliate',
    image: 'https://i.pravatar.cc/150?u=alex',
    text: 'Ei platform e join korar por amar passive income 3 gun bereche. Dashboard analytics gulo khub sahaj ebong payouts ekdom shomoymoto hoy. Best experience ever!',
    rating: 5
  },
  {
    id: 2,
    name: 'Sarah Miller',
    role: 'Digital Marketer',
    image: 'https://i.pravatar.cc/150?u=sarah',
    text: 'Premium partners ebong dedicated support team amar business grow korte khub help koreche. Truly a professional network jeta onno kothao paini.',
    rating: 5
  },
  {
    id: 3,
    name: 'Rahat Islam',
    role: 'Content Creator',
    image: 'https://i.pravatar.cc/150?u=rahat',
    text: 'Advanced security features ebong premium UI er karone ami amar referral niye onek nishchinto. Highly recommended for all creators.',
    rating: 4.5
  }
];

export function Testimonials() {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-400 w-4 h-4" />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400 w-4 h-4" />);
    }
    while (stars.length < 5) {
      stars.push(<FaStar key={`empty-${stars.length}`} className="text-muted/30 w-4 h-4" />);
    }
    return stars;
  };

  return (
    <section id="testimonials" className="py-10 sm:py-16 lg:py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[300px] sm:h-[400px] bg-[radial-gradient(ellipse_at_top,_var(--color-primary)_0%,_transparent_60%)] opacity-[0.08] pointer-events-none"></div>
      
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-[300px] sm:h-[400px] bg-[radial-gradient(ellipse_at_bottom,_var(--color-primary)_0%,_transparent_60%)] opacity-[0.08] pointer-events-none"></div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10 sm:mb-14">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground mb-4 tracking-tight"
          >
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Partners Say</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm sm:text-base text-muted max-w-2xl mx-auto leading-relaxed font-medium text-balance"
          >
            Join thousands of satisfied affiliates who have scaled their businesses and maximized their earnings through our premium network.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="group bg-card p-6 sm:p-8 rounded-[2rem] border-2 border-border shadow-md hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/60 transition-all duration-300 relative flex flex-col h-full isolate transform-gpu"
            >
              <div className="absolute -top-5 right-6 w-10 h-10 bg-primary rounded-xl rotate-12 group-hover:rotate-0 transition-transform duration-300 flex items-center justify-center shadow-lg z-10">
                <FaQuoteLeft className="text-white w-4 h-4" />
              </div>

              <div className="flex gap-1 mb-5">
                {renderStars(item.rating)}
              </div>

              <p className="text-muted text-sm leading-relaxed mb-8 flex-grow font-medium">
                "{item.text}"
              </p>

              <div className="flex items-center gap-4 pt-5 border-t border-border/60 mt-auto">
                <div className="relative isolate">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/20 group-hover:border-primary transition-colors" 
                  />
                  <div className="absolute -bottom-1 -right-1 bg-green-500 text-white w-4 h-4 rounded-full flex items-center justify-center border-2 border-card z-10">
                    <FaCheckCircle className="w-2.5 h-2.5" />
                  </div>
                </div>
                <div>
                  <h4 className="font-black text-foreground text-sm group-hover:text-primary transition-colors">{item.name}</h4>
                  <p className="text-[10px] sm:text-xs text-muted font-bold uppercase tracking-wider">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}