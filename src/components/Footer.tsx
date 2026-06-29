import React from 'react';

export function Footer() {
  return (
    <footer className="w-full rounded-t-xl bg-surface-container-low pt-section-padding pb-8 mt-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-6 md:px-margin-desktop max-w-container-max mx-auto mb-16">
        <div className="col-span-1 md:col-span-2">
          <span className="font-headline-sm text-headline-sm text-primary mb-6 block">RENOVAR HAVEN</span>
          <p className="font-body-md text-on-surface-variant opacity-70 mb-2">
            2B Adenugba Street<br/>
            Oregun, Ikeja<br/>
            Lagos
          </p>
          <a href="https://maps.app.goo.gl/WacaMMJdrtj8BZbi8" target="_blank" rel="noopener noreferrer" className="font-label-caps text-xs text-secondary hover:text-primary transition-colors mb-6 inline-block">
            View on Google Maps
          </a>
          
          <div className="mt-4 space-y-1">
            <p className="font-body-md text-on-surface-variant">Phone: <a href="tel:09166416172" className="hover:text-primary transition-colors">0916 641 6172</a></p>
            <p className="font-body-md text-on-surface-variant">Email: <a href="mailto:renovarhaven@gmail.com" className="hover:text-primary transition-colors">renovarhaven@gmail.com</a></p>
          </div>
        </div>
        
        <div>
          <h4 className="font-label-caps text-label-caps text-primary mb-6">Business Hours</h4>
          <ul className="space-y-4">
            <li className="font-body-md text-on-surface-variant">Open Daily</li>
            <li className="font-body-md text-on-surface-variant">Closes 6:00 PM</li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-label-caps text-label-caps text-primary mb-6">Connect</h4>
          <ul className="space-y-4">
            <li><a href="#" className="font-body-md text-on-surface-variant hover:text-secondary transition-colors">Instagram: @renovarhavenspa</a></li>
            <li><a href="#" className="font-body-md text-on-surface-variant hover:text-secondary transition-colors">Facebook: Renovar Haven Wellness & Spa</a></li>
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
