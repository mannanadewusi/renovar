import React from 'react';

interface FooterProps {
  setCurrentView: (view: string) => void;
}

export function Footer({ setCurrentView }: FooterProps) {
  const handleNavClick = (id: string) => {
    if (id === 'services') {
      setCurrentView('services');
    } else {
      setCurrentView('home');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <footer className="w-full rounded-t-xl bg-surface-container-low pt-section-padding pb-8 mt-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-6 md:px-margin-desktop max-w-container-max mx-auto mb-16">
        <div className="col-span-1 md:col-span-2">
          <span className="font-headline-sm text-headline-sm text-primary mb-6 block">RENOVAR HAVEN</span>
          <p className="font-body-md text-on-surface-variant opacity-70 max-w-sm">
            A sanctuary of refined wellness in the heart of Lagos. Dedicated to the art of holistic well-being and restoring your natural balance.
          </p>
        </div>
        
        <div>
          <h4 className="font-label-caps text-label-caps text-primary mb-6">Quick Links</h4>
          <ul className="space-y-4">
            <li><button onClick={() => handleNavClick('services')} className="font-body-md text-on-surface-variant hover:text-secondary transition-colors">Services</button></li>
            <li><button onClick={() => handleNavClick('packages')} className="font-body-md text-on-surface-variant hover:text-secondary transition-colors">Packages</button></li>
            <li><button onClick={() => handleNavClick('gallery')} className="font-body-md text-on-surface-variant hover:text-secondary transition-colors">Gallery</button></li>
            <li><button onClick={() => handleNavClick('contact')} className="font-body-md text-on-surface-variant hover:text-secondary transition-colors">Contact</button></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-label-caps text-label-caps text-primary mb-6">Connect</h4>
          <ul className="space-y-4">
            <li><a href="#" className="font-body-md text-on-surface-variant hover:text-secondary transition-colors">Instagram</a></li>
            <li><a href="#" className="font-body-md text-on-surface-variant hover:text-secondary transition-colors">Facebook</a></li>
            <li><a href="https://wa.me/2349166416172" target="_blank" rel="noopener noreferrer" className="font-body-md text-on-surface-variant hover:text-secondary transition-colors">WhatsApp</a></li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-outline-variant/10 pt-8 px-6 md:px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-label-caps text-[10px] text-on-surface-variant">&copy; {new Date().getFullYear()} Renovar Haven Wellness & Spa.</p>
        <div className="flex gap-6">
          <a href="#" className="text-xs text-on-surface-variant hover:text-primary transition-colors font-label-caps">Privacy Policy</a>
          <a href="#" className="text-xs text-on-surface-variant hover:text-primary transition-colors font-label-caps">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
