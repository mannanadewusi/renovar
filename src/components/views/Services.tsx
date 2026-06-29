import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, MessageSquare, User, X, Leaf } from 'lucide-react';

interface ServicesProps {
  setCurrentView: (view: string) => void;
}

const servicesData = [
  {
    id: 1,
    category: 'massages',
    title: 'Swedish Massage',
    price: '₦45,000',
    duration: '60-90 MIN',
    desc: 'Long, gliding strokes designed to relax the entire body and improve circulation.',
    details: 'Classic therapeutic massage using light to medium pressure. Ideal for stress relief, improving blood flow, and easing general muscle tension. Uses our signature organic botanical oils.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnxuVf4mY10zmyz8nZCkGG7UA-nkrU7fznuzo08dMs-4H8679vPmR4Y5EADYV41JWap1UOecmWR2fBauckiOvLhYI_zierB0XjZfx5S5DjVX8uwMU3Ot_GjELeQUCu-GmTazaDDwwg8EdWzhR7pF8O6CE5bqDSardrnSQFGFDkcCHlwKOPTM6JiBhSrIVH_f8o482gQMcBecfHg2Xgj8P-W-FPoFym6Os6rTyQd5az6RS5cGx_4kPHwp3GkUzd_YL3eJUdWH6CsTc'
  },
  {
    id: 2,
    category: 'massages',
    title: 'Deep Tissue',
    price: '₦55,000',
    duration: '60-90 MIN',
    desc: 'Targeted pressure for chronic muscle tension and athletic recovery.',
    details: 'Focused therapy that targets deeper layers of muscle and connective tissue. Highly effective for persistent aches, stiff necks, and shoulder tightness. Recommended for athletes.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDeXPLPX1xwM6xcmgQY7ic_W1A_14pFaT_MeZD9zuSUq70wEljyJfGhjs_V-kvuDHSZtteSwV0xTqWJHIuipCErXyQZXVPAb3Q8AC8_t6ECo58OwTIgcv5gf_wLBvbZfZPre-x9Gn98ytSGdW9EZ3j7tTXqbPqsk26pNdTl86S3ER1KkzqNkWwnEho_FJ-E7rVqN9XaNnvVThDNAFSKMgr1a1n-2ukkbACJvUsrcdGSkwigQOlxj__oH-j6dPKVpjyjOQGWnH6-l78'
  },
  {
    id: 3,
    category: 'facials',
    title: 'Advanced Facial',
    price: '₦65,000',
    duration: '75 MIN',
    desc: 'High-performance skincare combining science and nature for visible results.',
    details: 'A comprehensive treatment using medical-grade serums and manual techniques. Includes deep cleansing, exfoliation, extractions, and a customized treatment mask for rejuvenation.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlqLr6-GtO7Rv9HwNC5gZ-7bcHufDj_wpvq2grH7wX5F8yur9ObahupsOaXhlkWtrCKcHQXrbnlFrLHTvBIUXCOlKjpFgcsm7uNSUYcXyzRbLhAGubsXr-pOU4g7OI7i944VSe9qEVu1uzjpiDbbIlZ-HC5kNMBrUf3xESBfLDInSEUJ8a-mJb6WS3CgZhx5559YBp5IGhMz_XQkgqkGk2Vn20yjCkb0AImGnJ9ff5trCCt9To3UGI1c6vrbAjekyEmHXPJvlr65M'
  },
  {
    id: 4,
    category: 'body',
    title: 'Salt Scrubs',
    price: '₦35,000',
    duration: '45 MIN',
    desc: 'Full-body exfoliation to reveal smooth, radiant, and hydrated skin.',
    details: 'An invigorating full-body exfoliation using mineral-rich sea salts and essential oils. Removes dead skin cells, stimulates circulation, and leaves skin feeling incredibly soft.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwf1WHJeuNynMkoSo19npyeIWs9BaAV3dPum_8u85BKWRM0yqsK_q5nckSLtQFJ7Qfm2A4zpKROqyN9W1gK81UhKVKus4Qj5gGyqvMiPd2vGH6a0RdA3HuRp8JSo2mHgD9QzphBgf2AyZl74gVk8-KsV9hfjzRgSFxfA13yjpH5ejlhxOIrA5aAbX7MudJbzzCpiAPuSehn8xltC_uniWgC3OznnVWoflEergD8ooA3Jd-OKYKS5ggjZej3jfdYyKG2fiEby5BgvE'
  },
  {
    id: 5,
    category: 'beauty',
    title: 'Luxury Mani/Pedi',
    price: '₦30,000',
    duration: '90 MIN',
    desc: 'Complete hand and foot care ritual with premium organic polish.',
    details: 'Our signature nail ritual. Includes aromatic soak, exfoliation, cuticle care, relaxing massage, and your choice of high-end, toxin-free lacquer.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoD2HDKqx9WRnEK2Xo-xzonF1VnNj2eX4atpAd_d3RyUo3LXGOCNWLH31QokHLezmUS7c51HKQfQItFvYgZ3GBmNXUyqCNuDEIb5Y1m2LL7296l_OCZcLBZFsjsGlkwCe-eUUxVyI9tkvr0uuhU6qATHjQkEH_d3-lATeo_ScBfwnrrmJtjK34fcuNrbWQhG1TNpD1B4I5bammCez00M6bvPf_-0MduK0NmeedXn5MNJiBuR0wEb9OvXqhmxVfEzHd69LOD-YLRtE'
  },
  {
    id: 6,
    category: 'body',
    title: 'Body Wraps',
    price: '₦48,000',
    duration: '60 MIN',
    desc: 'Detoxifying and nourishing treatments using mineral-rich clays.',
    details: 'A cocooning treatment where the body is coated in detoxifying mud or hydrating creams, then wrapped to allow nutrients to penetrate deeply while you enjoy a scalp massage.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAETMgKjQE1UtLwToNjaO8yk31YrZyPXZ2sl3gX9qe3wKBt0oFOx8jfx5fNpNfMhNN8L-MvZrQNM_Lw3mXBPWDHu56Kp1-4HyQs_5h5aCMDzyl1uRFRD_6MgSTHwRuZmjX4QYXWMFnRtT3TcWLy9X_mmqSwziSeXwf0hiegmuByxuiENM8tQdM5IYdZHLULNqw4Wq-Pvnh4Kt4n1uHrrbmNVUEO82KY1rE51Mv4QeCooK-9lzl7rHO8uy98705lNOkwewkcxkiMN5k'
  }
];

export function Services({ setCurrentView }: ServicesProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedService, setSelectedService] = useState<typeof servicesData[0] | null>(null);

  const filteredServices = activeCategory === 'all' 
    ? servicesData 
    : servicesData.filter(s => s.category === activeCategory);

  const categories = [
    { id: 'all', label: 'All Treatments' },
    { id: 'massages', label: 'Massages' },
    { id: 'facials', label: 'Facials' },
    { id: 'body', label: 'Body Treatments' },
    { id: 'beauty', label: 'Beauty & Nails' },
  ];

  return (
    <main>
      <section className="relative pt-20 pb-12 px-margin-mobile md:px-margin-desktop text-center max-w-4xl mx-auto">
        <motion.span 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="font-label-caps text-label-caps text-secondary tracking-[0.2em] mb-4 block"
        >
          EXPERIENCE TRANQUILITY
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6"
        >
          Our Services & Treatments
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto"
        >
          A curated selection of therapies designed to restore balance to your body and soul, rooted in the raw beauty of West African wellness traditions.
        </motion.p>
      </section>

      {/* Categories */}
      <section className="px-margin-mobile md:px-margin-desktop mb-12">
        <div className="max-w-container-max mx-auto flex flex-nowrap overflow-x-auto md:justify-center gap-8 md:gap-12 border-b border-outline-variant/30 pb-4 scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`font-label-caps text-label-caps whitespace-nowrap transition-all uppercase tracking-widest pb-2 focus:outline-none ${
                activeCategory === cat.id
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="px-margin-mobile md:px-margin-desktop py-8 max-w-container-max mx-auto min-h-[60vh]">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          <AnimatePresence>
            {filteredServices.map(service => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={service.id}
                className="group bg-surface-container-low rounded-xl overflow-hidden flex flex-col shadow-sm transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-primary font-label-caps text-[10px]">
                    {service.duration}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-headline-sm text-headline-sm text-primary">{service.title}</h3>
                    <span className="text-primary font-bold">{service.price}</span>
                  </div>
                  <p className="text-on-surface-variant font-body-md line-clamp-2 mb-6">{service.desc}</p>
                  <div className="mt-auto flex items-center justify-between gap-4">
                    <button 
                      onClick={() => setSelectedService(service)}
                      className="text-primary font-label-caps text-label-caps underline underline-offset-4 hover:text-secondary transition-colors"
                    >
                      View Details
                    </button>
                    <button 
                      onClick={() => setCurrentView('reservations')}
                      className="bg-primary text-on-primary px-5 py-2 rounded-full font-label-caps text-label-caps active:scale-95 transition-transform"
                    >
                      Quick Book
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* The Journey */}
      <section className="py-section-padding bg-surface-container px-margin-mobile md:px-margin-desktop mt-12">
        <div className="max-w-container-max mx-auto text-center mb-16">
          <h2 className="font-headline-md text-headline-md text-primary mb-4">The Renovar Journey</h2>
          <div className="h-1 w-20 bg-secondary mx-auto rounded-full"></div>
        </div>
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[1px] border-t border-dashed border-primary/20"></div>
          
          <div className="relative z-10 flex flex-col items-center text-center group">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
              <Leaf className="text-primary w-8 h-8" />
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Choose Treatment</h3>
            <p className="text-on-surface-variant px-4">Browse our curated menu and select the therapy that resonates with your current needs.</p>
          </div>
          
          <div className="relative z-10 flex flex-col items-center text-center group">
            <div className="w-20 h-20 bg-primary text-on-primary rounded-full flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
              <MessageSquare className="w-8 h-8" />
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Book via WhatsApp</h3>
            <p className="text-on-surface-variant px-4">Click our booking button to chat directly with our concierge and secure your slot instantly.</p>
          </div>
          
          <div className="relative z-10 flex flex-col items-center text-center group">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
              <User className="text-primary w-8 h-8" />
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Arrive & Relax</h3>
            <p className="text-on-surface-variant px-4">Step into our sanctuary and let our expert therapists guide you to a state of total tranquility.</p>
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <button 
            onClick={() => setCurrentView('reservations')}
            className="bg-primary text-on-primary px-10 py-4 rounded-full font-label-caps text-label-caps tracking-widest hover:shadow-xl hover:-translate-y-1 transition-all active:scale-95 inline-flex items-center gap-3"
          >
            <Calendar className="w-4 h-4" />
            START YOUR JOURNEY NOW
          </button>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-primary/40 backdrop-blur-sm"
              onClick={() => setSelectedService(null)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-2xl w-full max-w-lg relative z-10 overflow-hidden shadow-2xl"
            >
              <button 
                className="absolute top-4 right-4 p-2 bg-surface rounded-full hover:bg-surface-container transition-colors z-20"
                onClick={() => setSelectedService(null)}
              >
                <X className="w-5 h-5 text-on-surface-variant" />
              </button>
              
              <div className="p-8">
                <h2 className="font-headline-md text-headline-md text-primary mb-4 pt-4">{selectedService.title}</h2>
                <div className="h-0.5 w-12 bg-secondary mb-6"></div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-label-caps text-label-caps text-secondary mb-2">BENEFITS & DETAILS</h4>
                    <p className="text-on-surface-variant text-body-md leading-relaxed">{selectedService.details}</p>
                  </div>
                  
                  <div className="flex items-center gap-8 py-4 border-y border-outline-variant/20">
                    <div>
                      <p className="font-label-caps text-[10px] text-on-surface-variant">DURATION</p>
                      <p className="font-medium text-primary">{selectedService.duration}</p>
                    </div>
                    <div>
                      <p className="font-label-caps text-[10px] text-on-surface-variant">PREPARATION</p>
                      <p className="font-medium text-primary">Arrival 15m early</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 pt-4">
                    <button 
                      onClick={() => {
                        setSelectedService(null);
                        setCurrentView('reservations');
                      }}
                      className="flex-1 bg-primary text-on-primary py-4 rounded-full font-label-caps text-label-caps tracking-widest hover:opacity-90 active:scale-95 transition-all"
                    >
                      BOOK SESSION
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
