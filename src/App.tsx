/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './components/views/Home';
import { Services } from './components/views/Services';
import { Reservations } from './components/views/Reservations';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [currentView]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentView={currentView} setCurrentView={setCurrentView} />
      
      <div className="flex-grow">
        {currentView === 'home' && <Home setCurrentView={setCurrentView} />}
        {currentView === 'services' && <Services setCurrentView={setCurrentView} />}
        {currentView === 'reservations' && <Reservations />}
      </div>

      <Footer />

      {/* Floating WhatsApp Action */}
      <a 
        href="https://wa.me/2349166416172"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform active:scale-95 group"
      >
        <MessageCircle fill="currentColor" stroke="none" className="w-7 h-7" />
        <span className="absolute right-full mr-4 bg-white px-4 py-2 rounded-lg text-xs font-label-caps text-primary shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with us
        </span>
      </a>
    </div>
  );
}
