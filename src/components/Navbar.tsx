import React from 'react';
import { Menu } from 'lucide-react';

interface NavbarProps {
  currentView: string;
  setCurrentView: (view: string) => void;
}

export function Navbar({ currentView, setCurrentView }: NavbarProps) {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'packages', label: 'Packages' },
    { id: 'reservations', label: 'Reservations' },
    { id: 'about', label: 'About' },
  ];

  return (
    <nav
      className={`sticky top-0 w-full z-50 transition-all duration-300 border-b border-outline-variant/10 ${
        isScrolled ? 'bg-white/95 shadow-lg' : 'bg-white/70 glass-nav shadow-sm shadow-primary/5'
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-margin-desktop py-4 max-w-container-max mx-auto">
        <button
          onClick={() => setCurrentView('home')}
          className="font-display-lg text-display-lg-mobile md:text-[32px] tracking-tighter text-primary focus:outline-none"
        >
          RENOVAR
        </button>

        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setCurrentView(link.id)}
              className={`font-label-caps text-label-caps transition-colors focus:outline-none ${
                currentView === link.id
                  ? 'text-primary border-b border-primary pb-1'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setCurrentView('reservations')}
            className="hidden md:block bg-primary-container text-white px-8 py-3 rounded-full font-label-caps text-label-caps hover:opacity-80 transition-all active:scale-95"
          >
            Book Appointment
          </button>
          <button className="md:hidden text-primary">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
}
