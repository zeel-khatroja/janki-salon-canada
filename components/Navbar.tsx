
import React, { useState } from 'react';
import { OWNER_INFO } from '../constants';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Collections', id: 'services' },
    { name: 'Reviews', id: 'reviews' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'The Artist', id: 'about' },
    { name: 'Reserve', id: 'booking', primary: true },
    { name: 'Admin', id: 'admin' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-2xl border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between h-24">
          <div 
            className="flex items-center cursor-pointer group" 
            onClick={() => onNavigate('home')}
          >
            {/* Custom Ladies Salon Logo Design */}
            <div className="mr-4 relative animate-logo">
              <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-[15deg] transition-transform duration-700 animate-shimmer-gold overflow-hidden">
                <svg viewBox="0 0 24 24" fill="none" className="w-9 h-9 text-gold" xmlns="http://www.w3.org/2000/svg">
                  {/* Stylized Profile / Hair silhouette */}
                  <path 
                    d="M16 4C14.5 3.5 12.5 3.5 11 4C9.5 4.5 8 5.5 7 7C6 8.5 5.5 10.5 6 12.5C6.5 14.5 8 16 9.5 17C11 18 12.5 19 12.5 21" 
                    stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"
                  />
                  <path 
                    d="M12 4C10 3 7 4 5 7C3 10 4 14 6 16" 
                    stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.6"
                  />
                  <path 
                    d="M19 8C18.5 6.5 17.5 5 16 4.5C14.5 4 13 4.5 12 5.5C11 6.5 10.5 8 11 9.5C11.5 11 13 12 14.5 12.5C16 13 17.5 12.5 18.5 11.5C19.5 10.5 20 9.5 19 8Z" 
                    fill="currentColor" fillOpacity="0.2"
                  />
                  <circle cx="14" cy="9" r="0.8" fill="currentColor" />
                  <path 
                    d="M18 13C19 15 19.5 18 18.5 20" 
                    stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4"
                  />
                </svg>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gold rounded-full animate-ping opacity-75"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-gold/20 rounded-2xl scale-125 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"></div>
            </div>

            <span className="text-2xl md:text-3xl font-bold tracking-tighter text-slate-900 font-serif">
              GirlLookedFor<span className="text-gold italic font-light"> You</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300 ${
                  item.primary 
                    ? 'bg-slate-900 text-white px-8 py-3.5 rounded-full hover:bg-gold shadow-2xl shadow-gold/20 btn-luxury'
                    : currentPage === item.id ? 'text-gold underline underline-offset-[12px] decoration-1' : 'text-slate-500 hover:text-gold'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 p-2">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"} /></svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/95 border-b border-gold/10 animate-fade-up">
          <div className="px-6 pt-4 pb-8 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { onNavigate(item.id); setIsOpen(false); }}
                className={`block w-full text-left py-4 text-sm font-bold tracking-widest uppercase ${
                  item.primary ? 'text-gold' : 'text-slate-600'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
