import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, MapPin, Clock, Mail, ArrowUpRight, ChevronDown, ArrowLeft } from 'lucide-react';

export function Reservations() {
  const [step, setStep] = useState(1);

  const nextStep = (n: number) => {
    setStep(n);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const faqs = [
    {
      q: 'When should I arrive for my appointment?',
      a: 'We recommend arriving 15 minutes before your scheduled treatment to allow time for registration and a sensory welcome ritual. Late arrivals may result in reduced treatment time.'
    },
    {
      q: 'Do you offer couples treatments?',
      a: 'Yes, our "Couples Haven" suite is specifically designed for shared experiences. You can choose any of our body rituals or facials to enjoy together in a private, candlelit sanctuary.'
    },
    {
      q: 'What is your rescheduling policy?',
      a: 'Appointments can be rescheduled or cancelled up to 24 hours in advance without any fee. Within 24 hours, a 50% cancellation fee may apply to ensure our practitioners\' time is respected.'
    },
    {
      q: 'Which payment methods are accepted?',
      a: 'We accept all major debit cards, bank transfers, and digital payments via our secure booking portal. For your safety and ours, we operate as a primarily cashless sanctuary.'
    }
  ];

  return (
    <main>
      <section className="relative pt-20 pb-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
        <motion.span 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="font-label-caps text-label-caps text-secondary mb-4 block"
        >
          Begin Your Journey
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6"
        >
          Reservations
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto"
        >
          Secure your moment of serenity. Select your desired treatments and find a time that aligns with your schedule.
        </motion.p>
      </section>

      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pb-section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          
          {/* Wizard */}
          <div className="lg:col-span-8 glass-panel rounded-xl p-8 shadow-sm relative overflow-hidden bg-white/60">
            {/* Progress Indicator */}
            <div className="flex items-center justify-between mb-12 relative z-10">
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-outline-variant -z-10"></div>
              {[
                { n: 1, label: 'CATEGORY' },
                { n: 2, label: 'SERVICE' },
                { n: 3, label: 'DATETIME' },
                { n: 4, label: 'DETAILS' }
              ].map(item => (
                <div key={item.n} className="flex flex-col items-center gap-2 bg-transparent px-2 sm:px-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                    step >= item.n ? 'bg-primary-container text-white' : 'bg-surface-container-high text-on-surface-variant'
                  }`}>
                    {item.n}
                  </div>
                  <span className={`font-label-caps text-[10px] hidden sm:block ${
                    step >= item.n ? 'text-primary' : 'text-on-surface-variant'
                  }`}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div 
                  key="step1"
                  initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
                  className="space-y-6"
                >
                  <h2 className="font-headline-sm text-headline-sm text-primary mb-8 text-center">What are you looking for?</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { title: 'Body Rituals', sub: 'Massage, Scrubs, Wraps', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByXikXgI0DsYzUe57ofTyHiNwuWRv3tRpnV88PEXLCmx9JvdZC9F9PmNmDJBalSy_FF2YgPOIidU4KzkPD9WOMEiiivW62ZbXTTiMLw3flKk5HQOmZtoUvMcVE1c02lb9rvPmsBCuj30FljobEhIWcBulESjDadARqgj5e2G5__EV6pK5iKfj9y0I3iVk8aq_iKKdEiYVVqgHmL-ELClF-NTCPYzjLl1VI_k4swiTZu9X58wANlA363XDk_20vE9337tE1LNKwVAw' },
                      { title: 'Facial Therapy', sub: 'Hydrating, Anti-aging, Glow', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApHdsR1Bhwl9XNfpFd8JIWQHsxxHGPDtlmKGdaXKAk6jlv8vtNOE71w97xRg9oMJEqN1XtbIuavgm280CmRqJeKbHu8t5xIZZdH120JARN5meJWgi9m2EX04rsbu2jmHbhL9ADNEn7g96-n-T4A1tXZ7xEyoqE6Z2fMJSyz-7zj2HMhd3-agkABHH6RgpMSUJbLak-v1biRZJTnCNTwBwHqY6-kv4XQGq2o_bjBDWW2kZUxnczM9ymuHGHzDU2OrFRj6LPZawGO88' },
                      { title: 'Wellness Concierge', sub: 'Pedicures, Manicures, Waxing', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWdTRBkd_A1i4Bl3BgbwwxT5EkHVf2VsQ9L5FxjjpUxQI4zeKcU0_AIePxkA3-11oFU8shjb_f0cr5EGVDgel0m0KmL2XWboYF67RSa64FJ1ScvgbXlR3s8EKuRKu_Vl_lo5pNvyzhq4rD-CglTFM2hhpDx_jMOrWNnABnfN2JFgJXMmJhNhwriQO-dAcDLESJpYE5782ESHVPQvadzkad5yM0JfTi16acxOHNNjY-e_DP4P7foSrHV7gjGnyKc2YAH6SOklZspKw' },
                      { title: 'Couples Haven', sub: 'Shared Journeys, Romance', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvn18i-KIe3F1Duorg4ZOwU1zAgbH9ZYXzK74aMgO8n-gJT-CJ8jYocaQfjV1kbYTlFNP4YufcC8evjZ31k1q0olikSbAyWyJfQ1xY8fP--QnKzyFZx0huZocCZ43Fobn6kAexx32HhHdH-Q-s9abMLZUUgvG1MjLisViyUWG_-ItXup71PZsd7cabIncZ03RppLflZEjfLn_xH5aFxqhm1aNHVW_dTPvFhPXzxqIhD_XSdMlKP6iuYhD3P6LSz63AjCPM90q27X0' }
                    ].map((card, i) => (
                      <button 
                        key={i} onClick={() => nextStep(2)}
                        className="group relative aspect-[16/10] overflow-hidden rounded-lg border border-outline-variant hover:border-primary transition-all text-left"
                      >
                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${card.img}')` }}></div>
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
                        <div className="absolute bottom-6 left-6 text-white">
                          <h3 className="font-headline-sm text-[24px]">{card.title}</h3>
                          <p className="font-label-caps text-[10px] opacity-80 mt-1">{card.sub}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div 
                  key="step2"
                  initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
                >
                  <div className="flex items-center gap-4 mb-8">
                    <button onClick={() => nextStep(1)} className="flex items-center justify-center w-10 h-10 rounded-full border border-outline hover:bg-surface-container transition-colors">
                      <ArrowLeft className="w-5 h-5 text-primary" />
                    </button>
                    <h2 className="font-headline-sm text-headline-sm text-primary">Select Date & Time</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Mock Calendar */}
                    <div className="bg-surface-container p-6 rounded-xl">
                      <div className="flex items-center justify-between mb-6">
                        <span className="font-bold text-primary">November 2024</span>
                        <div className="flex gap-2 text-on-surface-variant">
                          <ChevronLeft className="w-5 h-5 cursor-pointer hover:text-secondary" />
                          <ChevronRight className="w-5 h-5 cursor-pointer hover:text-secondary" />
                        </div>
                      </div>
                      <div className="grid grid-cols-7 gap-1 text-center text-xs font-label-caps text-on-surface-variant mb-4">
                        <span>SU</span><span>MO</span><span>TU</span><span>WE</span><span>TH</span><span>FR</span><span>SA</span>
                      </div>
                      <div className="grid grid-cols-7 gap-1 text-center text-sm">
                        {Array.from({length: 35}).map((_, i) => {
                          const isPast = i < 5;
                          const isSelected = i === 11;
                          return (
                            <div 
                              key={i} 
                              className={`p-2 rounded ${
                                isPast ? 'opacity-30' : 
                                isSelected ? 'bg-primary-container text-white cursor-pointer' : 
                                'hover:bg-white cursor-pointer transition-colors'
                              }`}
                            >
                              {(i % 30) + 1}
                            </div>
                          )
                        })}
                      </div>
                    </div>
                    {/* Time Slots */}
                    <div className="space-y-4 flex flex-col">
                      <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-4">AVAILABLE SLOTS</h3>
                      <div className="grid grid-cols-2 gap-3 flex-grow">
                        {['09:00 AM', '10:30 AM', '01:00 PM', '03:30 PM', '05:00 PM', '07:00 PM'].map((time, i) => (
                          <button key={i} className={`px-4 py-3 border rounded transition-all text-sm ${
                            time === '01:00 PM' ? 'border-primary bg-primary/5 text-primary font-bold' : 'border-outline-variant hover:border-primary hover:bg-primary/5 text-on-surface-variant'
                          }`}>
                            {time}
                          </button>
                        ))}
                      </div>
                      <button onClick={() => nextStep(3)} className="w-full mt-4 bg-primary-container text-white py-4 rounded-full font-label-caps tracking-widest hover:bg-opacity-90 transition-all">
                        PROCEED TO DETAILS
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {step >= 3 && (
                <motion.div 
                  key="step3"
                  initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
                  className="max-w-lg mx-auto"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <button onClick={() => nextStep(2)} className="flex items-center justify-center w-10 h-10 rounded-full border border-outline hover:bg-surface-container transition-colors">
                      <ArrowLeft className="w-5 h-5 text-primary" />
                    </button>
                    <h2 className="font-headline-sm text-headline-sm text-primary">Final Details</h2>
                  </div>
                  <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Booking complete!"); setStep(1); }}>
                    <div className="space-y-2">
                      <label className="font-label-caps text-[10px] text-secondary">FULL NAME</label>
                      <input type="text" className="w-full bg-transparent border-0 border-b border-primary-container/30 py-2 focus:ring-0 focus:border-secondary outline-none transition-colors" placeholder="Chidi Adeyemi" />
                    </div>
                    <div className="space-y-2">
                      <label className="font-label-caps text-[10px] text-secondary">EMAIL ADDRESS</label>
                      <input type="email" className="w-full bg-transparent border-0 border-b border-primary-container/30 py-2 focus:ring-0 focus:border-secondary outline-none transition-colors" placeholder="chidi@example.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="font-label-caps text-[10px] text-secondary">PHONE NUMBER</label>
                      <input type="tel" className="w-full bg-transparent border-0 border-b border-primary-container/30 py-2 focus:ring-0 focus:border-secondary outline-none transition-colors" placeholder="+234 800 000 0000" />
                    </div>
                    <div className="space-y-2">
                      <label className="font-label-caps text-[10px] text-secondary">SPECIAL REQUESTS</label>
                      <textarea rows={2} className="w-full bg-transparent border-0 border-b border-primary-container/30 py-2 focus:ring-0 focus:border-secondary outline-none transition-colors resize-none" placeholder="Tell us about allergies or preferences..."></textarea>
                    </div>
                    <div className="pt-8">
                      <button type="submit" className="w-full bg-primary-container text-white py-4 rounded-full font-label-caps tracking-widest hover:shadow-lg transition-all">
                        CONFIRM BOOKING
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Contact Info (Side) */}
          <div className="lg:col-span-4 space-y-gutter">
            <div className="glass-panel rounded-xl p-8 shadow-sm bg-white/60">
              <h3 className="font-headline-sm text-headline-sm text-primary mb-6">Find Your Haven</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="text-secondary w-5 h-5 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-primary mb-1">Our Address</p>
                    <address className="not-italic text-on-surface-variant text-sm">
                      2B Adenugba Street,<br/>Oregun, Ikeja,<br/>Lagos, Nigeria
                    </address>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="text-secondary w-5 h-5 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-primary mb-1">Opening Hours</p>
                    <p className="text-on-surface-variant text-sm">Mon - Sat: 9:00 AM - 8:00 PM</p>
                    <p className="text-on-surface-variant text-sm">Sun: 12:00 PM - 6:00 PM</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="text-secondary w-5 h-5 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-primary mb-1">General Inquiries</p>
                    <p className="text-on-surface-variant text-sm">hello@renovarhaven.com</p>
                    <p className="text-on-surface-variant text-sm">+234 (0) 90 200 400</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-sm aspect-square relative group">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAqJ51iExDOgDTa23FTuJUA5-n1UFPKVRscE_AN0slhVQ8C6Il7FRy8BZ8dhX0_0O4phISC82l5vCg9r0QcmI-ZI6lELLDx1zoBDy9aSKqPi_BmhXEBX4X41XemT3loRXnscIpmGqa11Mo__l7lFGBISmyXijGSqSdWBctsEdILi9RXBecr1HRLEvjrW0xv9e3WA_w5_H3R1VbP0ipwrFIYc-J9mWJO5rLxTX77AkZYLtZccoMhsER_ef6lOkfyUfCDlIQ6ut2sPcY')" }}></div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-lg flex items-center justify-between cursor-pointer hover:bg-white transition-colors">
                <span className="text-xs font-label-caps">OPEN IN GOOGLE MAPS</span>
                <ArrowUpRight className="text-primary w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-surface-container-low py-section-padding">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center mb-16">
            <span className="font-label-caps text-label-caps text-secondary mb-4 block">Information</span>
            <h2 className="font-display-lg text-[40px] md:text-headline-md text-primary">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group glass-panel rounded-lg overflow-hidden transition-all duration-300 open:ring-1 open:ring-secondary/30 bg-white/50">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none focus:outline-none">
                  <h3 className="font-headline-sm text-[20px] text-primary">{faq.q}</h3>
                  <ChevronDown className="text-primary transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-6 text-on-surface-variant text-body-md">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
