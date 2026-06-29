import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Leaf, BedDouble, Sparkles } from 'lucide-react';

interface HomeProps {
  setCurrentView: (view: string) => void;
}

const revealVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export function Home({ setCurrentView }: HomeProps) {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary/30 z-10"></div>
          <img 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_1PcbgFCqYdbJ1olxTpUeeIvoij1OcsZVxGmw5ze4JI4jVFW_QASL1OVvSYoZzKdho1axBau-Dx49KdzGSuU4K8O-RcvgAwxf8eXGxLbdevhkpSDMKgBuUUGFfyW4Tdh3ZgvpJPxrRDyu7wIejeLS6Nm8UZEwAQDcjJDf_4vXEZ3TR3xqOu44rWhfiFPm65WYgJeVnM_YCf4ZjJHcgwsPo3M3cCMKxph6BdCfFqToxRhFC2f_ZdSMFOoe7mWRd7hgmKPYSwY_OUc"
            alt="Luxury spa interior"
          />
        </div>
        <div className="relative z-20 text-center text-white px-margin-mobile max-w-4xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, letterSpacing: '0em' }}
            animate={{ opacity: 1, letterSpacing: '0.3em' }}
            transition={{ duration: 1 }}
            className="font-label-caps text-label-caps uppercase mb-6 block text-secondary-fixed"
          >
            Elevated Wellness
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display-lg text-[48px] md:text-display-lg mb-8 leading-tight"
          >
            Curated Experiences
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto font-body-lg text-white/90 mb-10"
          >
            Escape the rhythmic pulse of the city. Discover our collection of signature journeys designed to restore balance to mind, body, and spirit.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
             <button 
                onClick={() => setCurrentView('reservations')}
                className="bg-secondary-fixed text-on-secondary-fixed hover:bg-secondary-container transition-all px-8 py-4 rounded-full font-label-caps text-label-caps inline-flex items-center gap-2 group"
              >
                Begin Your Journey
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-section-padding px-6 md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={revealVariants}
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden group">
              <img 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpKqu9VjC8JjZH-Fyu6V1mIliKOWai3m4dbzPrhMRCSnG_xSsDWtZ0kiKpGRhOHk2mvhXQUriHMQ-7wh8zdwvSFvkjUK35CL-kBQkzGUdIszh-uyEZfZxkiixHwGEVQzQ22PkUB-GKj64iliZf5-xUSvRpxmfcBl3xl7kdXAqhMNqBF8EMqj6lJcgC5Iyot_IhEvfxlGVYTEedW43fNSFdWVAQwb4BH6r2OqlQY1K6WhYpcC1UbcmC67hr1javlqRsnItmFX_jWQE"
                alt="Spa stones"
              />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={revealVariants}
          >
            <span className="text-secondary font-label-caps text-label-caps mb-4 block">Our Philosophy</span>
            <h2 className="font-headline-md text-headline-md text-primary mb-8 leading-tight">Where Wellness Meets Unparalleled Luxury</h2>
            <p className="text-on-surface-variant font-body-lg mb-12">
              Renovar Haven is more than a spa; it is an architectural journey into tranquility. We combine ancient healing wisdom with modern physiological expertise to create the necessary silence to hear your own intuition.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center flex-shrink-0">
                  <Leaf className="text-primary w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-headline-sm text-[20px] text-primary mb-2">Personalized Treatments</h3>
                  <p className="text-on-surface-variant text-sm">Every session begins with a consultation to tailor our botanical oils and pressures to your specific needs.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center flex-shrink-0">
                  <BedDouble className="text-primary w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-headline-sm text-[20px] text-primary mb-2">Private Sanctuary Rooms</h3>
                  <p className="text-on-surface-variant text-sm">Sound-proofed suites designed with organic materials to ensure complete isolation from the outside world.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center flex-shrink-0">
                  <Sparkles className="text-primary w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-headline-sm text-[20px] text-primary mb-2">Exceptional Hygiene</h3>
                  <p className="text-on-surface-variant text-sm">Medical-grade sterilization protocols that exceed international hospitality standards for your peace of mind.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-section-padding px-6 md:px-margin-desktop max-w-container-max mx-auto bg-surface-container-low rounded-3xl mb-section-padding">
        <div className="text-center mb-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariants}>
            <h2 className="font-headline-md text-headline-md mb-4">Premium Bundles</h2>
            <div className="w-12 h-[1px] bg-secondary mx-auto"></div>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Package 1 */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariants}
            className="group"
          >
            <div className="relative overflow-hidden rounded-xl mb-8 aspect-[4/5]">
              <img 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2jeWMvIVzArERPj4MLp5HI94z-vR3-i-CTYjxSbCZdn4ibOUerV82sux4pGHUtkrBjQFqD7AsM-Z4qGD4jxeNDP-UPmsmb3XU2SNGEHLkujP7_MPhzQ4jqfDegcdvwft9TGFnlKHBPDlBl5aMVgMReH3c7eHq1lOBaHuwyjX1-qLQUWzYr9sbdlsKIcZH3HfrUolOjH9zPLjMKlkuxUatCj1ORIxFQugxGrZcyMmUKNV3r2G-dDgemkGiVZB5zPlixt20gRjGY8M"
                alt="Rejuvenation Escape"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-white/80 font-label-caps text-label-caps mb-2 block">4 HOURS</span>
                <h3 className="text-white font-headline-md text-headline-md">The Rejuvenation Escape</h3>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start gap-6">
              <ul className="space-y-3 font-body-md text-on-surface-variant flex-1">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0"></span>Deep Tissue Harmonizing Massage</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0"></span>Botanical Infusion Glow Facial</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0"></span>Organic Sea Salt Body Scrub</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0"></span>Gourmet Wellness Lunch</li>
              </ul>
              <div className="sm:text-right w-full sm:w-auto">
                <p className="font-display-lg text-headline-md text-primary mb-2">₦120,000</p>
                <button 
                  onClick={() => setCurrentView('reservations')}
                  className="font-label-caps text-label-caps text-secondary hover-gold-expand"
                >
                  SELECT JOURNEY
                </button>
              </div>
            </div>
          </motion.div>

          {/* Package 2 */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariants} transition={{ delay: 0.2 }}
            className="group"
          >
            <div className="relative overflow-hidden rounded-xl mb-8 aspect-[4/5]">
              <img 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkGzLzsYyFisi2YnOFxyHX6ucFzyt5Ge3V-qcZ9Ah6kC0bD_yIzUqygNxxTzrW_9g5wC7t9kM3RzeflQTRInAAX6TtrXgs6Gd2iUTLWvxnYKree1lPJOFv96QQRwnwJhV0AyMTp_LzqKpxFw_pc76yKzScErSTPpQ_upueWRybxiiWq_9vRSItE1-mf_cyU32c6KLvSbWre9tDoZ9X5gIWVmmu9snXwK-sxRPAkO7OR1rI17X77-Kg4l2jB2ubw4RSGosDBV2bscA"
                alt="Couples Haven"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-white/80 font-label-caps text-label-caps mb-2 block">5 HOURS</span>
                <h3 className="text-white font-headline-md text-headline-md">Couples Haven Journey</h3>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start gap-6">
              <ul className="space-y-3 font-body-md text-on-surface-variant flex-1">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0"></span>Private Steam Room Experience</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0"></span>Side-by-Side Signature Massage</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0"></span>Luxury Petal-Infused Bath</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0"></span>Champagne & Truffle Service</li>
              </ul>
              <div className="sm:text-right w-full sm:w-auto">
                <p className="font-display-lg text-headline-md text-primary mb-2">₦210,000</p>
                <button 
                  onClick={() => setCurrentView('reservations')}
                  className="font-label-caps text-label-caps text-secondary hover-gold-expand"
                >
                  SELECT JOURNEY
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-section-padding">
        <div className="text-center mb-16 px-6">
          <h2 className="font-headline-md text-headline-md mb-2">Our Ambience</h2>
          <p className="font-label-caps text-label-caps text-on-surface-variant">A GLIMPSE INTO SERENITY</p>
        </div>
        <div className="px-6 md:px-margin-desktop max-w-container-max mx-auto">
          <div className="masonry">
            {[
              "https://lh3.googleusercontent.com/aida-public/AB6AXuA-gY95cOede6TcnFSjULukd1emcUYJl6xfxYdkcvV6Wt23tV3n3Wt0xHZ2sL_AYXsIGUgrHkABKcMAj5j_8z0GCjMIkfj8ywqNKesbIkOhLX4qhC6rkILSbS_endA9HZcwg2wlApRSGVTDNqhw9pVSWR3zBVdDM21w9qLTB0ihkfXdpfewTL_OR37jNk1j0Y8RdOa0f_9EFo8E2vr0PyAFQC_gV4B0S3ZgRbQM35X_X69N2-mKKhbnenFGHLatTSkKWgRMrcja-oo",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuCWy5WQo-VeaEyZIKneR2qdA67cCMQ3D4lprmAxfARiJNxvorz58c4Jusycn1bDtjW0VNmszNCa6vOBiAWhIuF5Lf2riXqLZsNt9TiTtgBqq92ucvxwuygZQpcn-Ak7M92elptpr9ws0qxH9F_x2C7B9ih7oDSi979zuuJIvu9MnNAckoji7nh3B8kPRgdawf-w68OBcX_5x95blKo9koQdUys4tQDIfW5N-eotWFKUILha_xZ5GzKop1JQ-ena2E_3GycQgUWX454",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuANRwPDm9EtuX82ITnEzDf02lNeX6V-gMrn2dhLODmRBGqHsLxBETIA5hgkLrb4KDHzx6Y240Zn-PbgxiKSgzTmvuqjIyAwpzmFtOlCLFymumM84sLbtiLU2_bjwaji8mLs-hLRjUg6iO7A5aDzcr_ePPJqR0MKIiYEGGrPZVDHA7l3CyhNGxw1bc3CZr-GTcwKpYEg_kTtix-9cF025nq3ibgZYWKN16999h901gK09jHhANVlIy3IJKa0lfhga19QJ8lhXjoIXd8",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuC8ZGjZoDdJZI6ePzP3bharAEHFaDuHIsmo-uhRXrwVO8awgS-4f8a23MPrN6eUoPisLH5zsxCVjDJvyI9j6oAgzMxbTi5IAUrpZKxlNYYWzaBFZVb2suaIBtBRGas6vNGhFQcM2hVlYcvaBZgS-_S9KbhaN83T-ooAIuY3nWjzCEEwcppnBxlZcm83RGZAjzp-tHQoihbFIuvQmbLEQDnBkd_HmITDEKBYxLl9HWoTgkYg5x4vSpnlUfLCqmmnQU3lHFBrLpimFz4",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuBQ2yKPzI-8Z9YYsqmDcVf5WJiAL2UrAR1UZn0OYAiCxj4PluX-hI9M0gl2nNqw0SS8CUAbRhuh6xeasdu-x4-8KF3s-ucQXHPG9phyVRuyXfT5-jCnfcVnDv-8KY0aed4cNDbK6AMoM7kD2wt_j8h7gFCeBVXlukOWX9mTPihQbPhKN7x-C6mTyS6gtNxxQpJz2KxVVYDfXGvAOVPF1No4FGtJeC-WffovD-psrCGkyTddLCoagGDAGNaFyqrWEF1sfsAswR_bw7M",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuDHftF7mZPskq_UaaTi62R_qw1NUTIsse8rldHlrQj0O1CcDKLVU3GecLArJ37yK7dJJ_f8o1agNL85-fRk7irEOq6Qf5o3aqItcc51v84TwnsFC9Y70RX5KpLjGCttHf_Q_UDVZNQ_yJYqb4QCKyQ8WU_-s6eIgBeXq-vCF0U_8ECsOzvLAJsCtdPv1zifHQGiN4-A0FkT-KbijpwPx80TrdqsP-BAnxdc4b2O7sRb9lYpjym4-WhSi9LSjdeiAAt_ruVKt-TKPgQ"
            ].map((src, i) => (
              <motion.div 
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariants} transition={{ delay: i * 0.1 }}
                className="masonry-item relative overflow-hidden rounded-lg group"
              >
                <img src={src} alt="Spa Ambience" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
