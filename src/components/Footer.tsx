import React from 'react';

export function Footer() {
  return (
    <footer className="w-full rounded-t-xl bg-surface-container-low pt-section-padding pb-8 mt-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-6 md:px-margin-desktop max-w-container-max mx-auto mb-16">
        <div className="col-span-1 md:col-span-1">
          <span className="font-headline-sm text-headline-sm text-primary mb-6 block">RENOVAR</span>
          <p className="font-body-md text-on-surface-variant opacity-70 mb-6 max-w-xs">
            A sanctuary of refined wellness in the heart of Lagos. Dedicated to the art of holistic well-being.
          </p>
        </div>
        
        <div>
          <h4 className="font-label-caps text-label-caps text-primary mb-6">Experience</h4>
          <ul className="space-y-4">
            <li><a href="#" className="font-body-md text-on-surface-variant hover:text-secondary transition-colors">Massages</a></li>
            <li><a href="#" className="font-body-md text-on-surface-variant hover:text-secondary transition-colors">Facials</a></li>
            <li><a href="#" className="font-body-md text-on-surface-variant hover:text-secondary transition-colors">Body Treatments</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-label-caps text-label-caps text-primary mb-6">Connect</h4>
          <ul className="space-y-4">
            <li><a href="#" className="font-body-md text-on-surface-variant hover:text-secondary transition-colors">Instagram</a></li>
            <li><a href="#" className="font-body-md text-on-surface-variant hover:text-secondary transition-colors">Facebook</a></li>
            <li><a href="#" className="font-body-md text-on-surface-variant hover:text-secondary transition-colors">WhatsApp</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-label-caps text-label-caps text-primary mb-6">Legal</h4>
          <ul className="space-y-4">
            <li><a href="#" className="font-body-md text-on-surface-variant hover:text-secondary transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="font-body-md text-on-surface-variant hover:text-secondary transition-colors">Terms of Service</a></li>
            <li><a href="#" className="font-body-md text-on-surface-variant hover:text-secondary transition-colors">Refund Policy</a></li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-outline-variant/10 pt-8 px-6 md:px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-label-caps text-[10px] text-on-surface-variant">© 2024 Renovar Haven Wellness & Spa. Sanctuary in Lagos.</p>
        <div className="flex gap-6">
          <a href="#" className="text-xs text-on-surface-variant hover:text-primary transition-colors font-label-caps">Instagram</a>
          <a href="#" className="text-xs text-on-surface-variant hover:text-primary transition-colors font-label-caps">Facebook</a>
        </div>
      </div>
    </footer>
  );
}
