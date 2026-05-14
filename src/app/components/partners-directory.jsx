'use client';

import { useState, useMemo, useRef, useEffect } from 'react';
import { 
  FaSearch, 
  FaExternalLinkAlt, 
  FaUsers, 
  FaUserCircle, 
  FaStar, 
  FaCrown, 
  FaMapMarkerAlt, 
  FaCalendarAlt, 
  FaBuilding, 
  FaExclamationCircle, 
  FaRocket,
  FaChevronDown,
  FaCheckCircle
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import partnersData from '../../data/partners.json';
import categoriesData from '../../data/categories.json';

export function PartnersDirectory() {
  const [selectedCategoryId, setSelectedCategoryId] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCount, setVisibleCount] = useState(6);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const allCategories = [{ id: 'all', name: 'All Categories' }, ...categoriesData];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredPartners = useMemo(() => {
    return partnersData.filter((partner) => {
      const matchesCategory = selectedCategoryId === 'all' || partner.categoryId === selectedCategoryId;
      const matchesSearch = partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        partner.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategoryId, searchTerm]);

  const isSearchEmpty = searchTerm !== '' && filteredPartners.length === 0;
  const isCategoryEmpty = searchTerm === '' && filteredPartners.length === 0;

  const handleLoadMore = () => setVisibleCount(prev => prev + 6);

  const selectedCategoryName = allCategories.find(c => c.id === selectedCategoryId)?.name || 'Select Category';

  return (
    <section id="partners" className="w-full bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[300px] sm:h-[400px] bg-[radial-gradient(ellipse_at_top,_var(--color-primary)_0%,_transparent_60%)] opacity-[0.08] pointer-events-none"></div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 relative z-10 py-6 sm:py-8">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 sm:px-5 py-2 sm:py-2.5 bg-primary/10 rounded-full border border-primary/20 shadow-sm backdrop-blur-sm">
            <FaUsers className="text-primary w-3 h-3 sm:w-4 sm:h-4 animate-pulse" />
            <span className="text-[10px] sm:text-xs font-bold text-primary uppercase tracking-widest">
              Premium Network
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-4 sm:mb-5 tracking-tight text-balance flex flex-col items-center justify-center w-full">
            <span className="block w-full">Discover Our Elite</span>
            <span className="block w-full text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent pb-1.5">Global Partners</span>
          </h2>
          <p className="text-sm sm:text-base text-muted max-w-2xl mx-auto font-medium text-balance">
            Connect with top-tier companies and services. Filter through our verified partners to find the perfect match for your business needs.
          </p>
        </motion.div>

        <div className="mb-10 space-y-6 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative group md:col-span-2">
              <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-muted group-focus-within:text-primary transition-colors" />
              <input
                type="text"
                placeholder="Search partners, services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 sm:pl-14 pr-5 py-3.5 sm:py-4 text-sm sm:text-base border-2 border-border rounded-2xl focus:outline-none focus:border-primary bg-card shadow-sm transition-all font-medium"
              />
            </div>

            <div className="relative" ref={dropdownRef}>
              <div 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`w-full px-5 py-3.5 sm:py-4 bg-card border-2 rounded-2xl cursor-pointer flex items-center justify-between transition-all shadow-sm ${
                  isDropdownOpen ? 'border-primary shadow-primary/10' : 'border-border hover:border-primary/50'
                }`}
              >
                <span className="font-bold text-sm sm:text-base text-foreground truncate pr-2">
                  {selectedCategoryName}
                </span>
                <FaChevronDown className={`text-muted flex-shrink-0 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-primary' : ''}`} />
              </div>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute z-50 w-full mt-2 bg-card border-2 border-border rounded-2xl shadow-2xl overflow-hidden max-h-72 overflow-y-auto"
                  >
                    {allCategories.map((category) => (
                      <div 
                        key={category.id}
                        onClick={() => {
                          setSelectedCategoryId(category.id);
                          setVisibleCount(6);
                          setIsDropdownOpen(false);
                        }}
                        className={`flex items-center justify-between px-5 py-3.5 cursor-pointer transition-colors ${
                          selectedCategoryId === category.id 
                            ? 'bg-primary/10 text-primary font-bold' 
                            : 'hover:bg-secondary text-foreground font-medium'
                        }`}
                      >
                        <span className="text-sm truncate">{category.name}</span>
                        {selectedCategoryId === category.id && (
                          <FaCheckCircle className="text-primary w-4 h-4 flex-shrink-0" />
                        )}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <motion.div 
          key={selectedCategoryId + searchTerm}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
        >
          {filteredPartners.slice(0, visibleCount).map((partner) => (
            <div
              key={partner.id}
              className="group bg-card rounded-[2rem] border-2 border-border hover:border-primary transition-colors duration-300 flex flex-col h-full shadow-lg hover:shadow-2xl isolate transform-gpu"
            >
              <div className="relative h-48 sm:h-56 overflow-hidden rounded-t-[1.8rem] bg-muted shrink-0 z-0 mask-image-webkit">
                <img 
                  src={partner.image} 
                  alt={partner.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                
                {partner.isPremium && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg text-[10px] font-black uppercase flex items-center gap-1.5 shadow-xl">
                    <FaCrown className="text-black w-3 h-3" /> Premium
                  </div>
                )}
                
                <div className="absolute bottom-4 left-5 right-5 flex flex-col gap-2 sm:gap-3">
                  <h3 className="text-xl sm:text-2xl font-black text-white leading-tight drop-shadow-md">{partner.name}</h3>
                  <div className="flex justify-between items-end">
                    <div className="flex flex-wrap gap-1.5">
                      {partner.tags.map(tag => (
                        <span key={tag} className="text-[9px] sm:text-[10px] font-bold bg-white/20 backdrop-blur-md text-white px-2 py-1 rounded-md border border-white/20">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-1.5 text-yellow-400 font-bold text-xs sm:text-sm bg-black/60 px-2 py-1 rounded-lg backdrop-blur-sm border border-white/10 shrink-0">
                      <FaStar className="w-3 h-3 sm:w-4 sm:h-4" /> {partner.rating}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-7 flex flex-col flex-grow relative z-10 bg-card rounded-b-[1.8rem]">
                <div className="flex flex-wrap gap-x-3 gap-y-2 mb-4 pb-4 border-b border-border/60 text-[11px] sm:text-xs font-bold text-muted">
                  <div className="flex items-center gap-1.5"><FaCalendarAlt className="text-primary" /> Est. {partner.foundedYear}</div>
                  <div className="flex items-center gap-1.5"><FaMapMarkerAlt className="text-primary" /> {partner.location}</div>
                  <div className="flex items-center gap-1.5"><FaBuilding className="text-primary" /> {partner.teamSize} Emp.</div>
                </div>

                <p className="text-muted text-sm leading-relaxed mb-6 flex-grow font-medium">
                  {partner.description}
                </p>

                <div className="mt-auto space-y-5">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 sm:p-4 bg-secondary/50 rounded-2xl border border-border group-hover:bg-primary/5 transition-colors">
                      <span className="block text-[9px] sm:text-[10px] uppercase font-bold text-muted mb-1">Commission</span>
                      <span className="text-lg sm:text-xl font-black text-primary">{partner.commission}</span>
                    </div>
                    <div className="p-3 sm:p-4 bg-secondary/50 rounded-2xl border border-border group-hover:bg-primary/5 transition-colors">
                      <span className="block text-[9px] sm:text-[10px] uppercase font-bold text-muted mb-1">Total Revenue</span>
                      <span className="text-lg sm:text-xl font-black text-foreground">{partner.revenue}</span>
                    </div>
                  </div>

                  <div className="flex gap-2 sm:gap-3">
                    <a href={partner.externalProfileLink} target="_blank" rel="noreferrer" className="flex-1 py-3 bg-foreground text-background rounded-xl font-black text-xs flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-colors shadow-md">
                      <FaUserCircle className="text-base" /> PROFILE
                    </a>
                    <a href={partner.website} target="_blank" rel="noreferrer" className="flex-1 py-3 border-2 border-border text-foreground rounded-xl font-black text-xs flex items-center justify-center gap-2 hover:border-primary hover:text-primary transition-colors">
                      <FaExternalLinkAlt /> VISIT
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {visibleCount < filteredPartners.length && (
          <div className="mt-12 text-center">
            <button
              onClick={handleLoadMore}
              className="px-8 sm:px-10 py-3.5 bg-card border-2 border-border rounded-xl font-black text-xs sm:text-sm text-foreground hover:border-primary hover:text-primary active:scale-95 transition-all shadow-sm tracking-wide"
            >
              LOAD MORE PARTNERS
            </button>
          </div>
        )}

        <AnimatePresence>
          {filteredPartners.length === 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-8"
            >
              {isSearchEmpty ? (
                <div className="max-w-2xl mx-auto text-center py-12 sm:py-16 px-4 sm:px-6 bg-card border-2 border-border rounded-[2rem] border-dashed shadow-sm">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-5">
                    <FaExclamationCircle className="w-8 h-8 sm:w-10 sm:h-10 text-red-500" />
                  </div>
                  <h3 className="text-xl sm:text-3xl font-black text-foreground mb-3">Company Not Found</h3>
                  <p className="text-muted text-sm sm:text-base mb-6 px-4">We couldn't find any match for "<span className="text-foreground font-bold">{searchTerm}</span>". Please check the spelling.</p>
                  <button 
                    onClick={() => setSearchTerm('')} 
                    className="px-5 sm:px-6 py-2.5 bg-primary/10 text-primary font-bold text-sm rounded-xl hover:bg-primary hover:text-white transition-colors"
                  >
                    Clear Search
                  </button>
                </div>
              ) : isCategoryEmpty ? (
                <div className="max-w-3xl mx-auto text-center py-16 sm:py-24 px-6 relative overflow-hidden bg-card border-2 border-primary/20 rounded-[2.5rem] shadow-[0_0_50px_rgba(var(--primary),0.08)] isolate transform-gpu">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_60%)] opacity-10"></div>
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-background border-2 border-primary/30 rounded-full flex items-center justify-center mx-auto mb-6 relative shadow-[0_0_30px_rgba(var(--primary),0.2)]">
                    <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping"></div>
                    <FaRocket className="w-8 h-8 sm:w-10 sm:h-10 text-primary relative z-10 animate-bounce" />
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-black text-foreground mb-4 relative z-10 tracking-tight">Exciting Partners <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Coming Soon!</span></h3>
                  <p className="text-muted text-sm sm:text-base leading-relaxed max-w-lg mx-auto relative z-10 font-medium">
                    We are currently finalizing premium deals with top-tier companies for this category. Check back shortly for exciting new additions to our network.
                  </p>
                </div>
              ) : null}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}