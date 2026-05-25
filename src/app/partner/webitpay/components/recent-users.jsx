'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUserCheck, FaCreditCard, FaCircle, FaUsers } from 'react-icons/fa';

export function WebitpayRecentUsers() {
  const [users, setUsers] = useState([]);
  const [isMounted, setIsMounted] = useState(false);

  const generateUsers = () => {
    const list = [];
    for (let i = 0; i < 10; i++) {
      const firstTwo = Math.floor(10 + Math.random() * 90);
      const lastFour = Math.floor(1000 + Math.random() * 9000);
      const rand = Math.random();
      
      let isVerified = false;
      let hasCard = false;
      
      if (rand > 0.5) {
        isVerified = true;
        hasCard = true;
      } else if (rand > 0.2) {
        isVerified = true;
        hasCard = false;
      }

      const minutes = i + 1 + Math.floor(Math.random() * 3);
      let timeStr = '';
      if (minutes < 60) {
        timeStr = `${minutes}m ago`;
      } else {
        const hours = Math.floor(minutes / 60);
        timeStr = `${hours}h ago`;
      }

      list.push({
        id: `webitpay-user-${Date.now()}-${i}-${Math.random()}`,
        uid: `UID: ${firstTwo}****${lastFour}`,
        isVerified,
        hasCard,
        time: timeStr
      });
    }
    return list;
  };

  useEffect(() => {
    setIsMounted(true);
    const savedData = localStorage.getItem('webitpay_recent_data');
    const savedTime = localStorage.getItem('webitpay_recent_time');
    const now = Date.now();

    if (savedData && savedTime && (now - parseInt(savedTime)) < 60000) {
      setUsers(JSON.parse(savedData));
    } else {
      const newData = generateUsers();
      setUsers(newData);
      localStorage.setItem('webitpay_recent_data', JSON.stringify(newData));
      localStorage.setItem('webitpay_recent_time', now.toString());
    }

    const interval = setInterval(() => {
      const newData = generateUsers();
      setUsers(newData);
      localStorage.setItem('webitpay_recent_data', JSON.stringify(newData));
      localStorage.setItem('webitpay_recent_time', Date.now().toString());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  if (!isMounted) return null;

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background relative overflow-hidden border-t border-border/50">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 mb-3 px-3 py-1 bg-primary/10 rounded-full border border-primary/20"
          >
            <FaUsers className="text-primary w-3 h-3" />
            <span className="text-[10px] sm:text-xs font-bold text-primary uppercase tracking-widest">Live Activity</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl font-black text-foreground mb-3 tracking-tight"
          >
            Recently Registered <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Users</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xs sm:text-base text-foreground/80 font-medium max-w-2xl mx-auto px-2 leading-relaxed"
          >
            Real-time feed of users joining Webitpay, completing KYC, and claiming their free virtual cards.
          </motion.p>
        </div>

        <div className="bg-card border border-border rounded-2xl sm:rounded-[2rem] p-4 sm:p-6 shadow-sm overflow-hidden">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4">
            <AnimatePresence mode="popLayout">
              {users.map((user) => (
                <motion.div 
                  layout
                  key={user.id}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="flex items-center justify-between p-3.5 sm:p-4 bg-background border border-border/70 rounded-xl hover:border-primary/40 transition-colors"
                >
                  <div className="flex flex-col gap-1.5">
                    <span className="text-sm sm:text-base font-black text-foreground tracking-wide">{user.uid}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] sm:text-xs text-foreground/60 font-bold flex items-center gap-1.5">
                        <FaCircle className="w-2 h-2 text-green-500 animate-pulse" /> Live Feed
                      </span>
                      <span className="text-[9px] sm:text-[10px] text-primary font-bold bg-primary/10 px-2 py-0.5 rounded-md">
                        {user.time}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {user.isVerified && (
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500/10 rounded-xl flex items-center justify-center text-green-500 border border-green-500/20 shadow-sm" title="KYC Verified">
                        <FaUserCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                    )}
                    {user.hasCard && (
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary border border-primary/20 shadow-sm" title="Virtual Card Claimed">
                        <FaCreditCard className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                    )}
                    {!user.isVerified && !user.hasCard && (
                      <span className="text-[10px] sm:text-xs font-bold text-foreground/60 bg-secondary px-3 py-1.5 rounded-lg border border-border shadow-sm">
                        Pending
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}