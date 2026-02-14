import React from 'react';
import { OWNER_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-slate-950 text-white pt-32 pb-12 px-6 overflow-hidden">
      {/* Decorative Gold Accent Bar at the top */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
      
      {/* Subtle Background Element */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          
          {/* Brand Identity Section */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <h3 className="text-white text-4xl font-serif italic tracking-tighter">
                GirlLookedFor<span className="text-gold font-light not-italic"> You</span>
              </h3>
              <div className="w-12 h-[1px] bg-gold"></div>
            </div>
            
            <p className="text-lg leading-relaxed font-light italic max-w-md text-white/90">
              "We believe beauty is an intimate ceremony. Every treatment at our Ottawa studio is a bespoke journey toward your most radiant self."
            </p>

            <div className="flex items-center space-x-6">
              <a 
                href={OWNER_INFO.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative w-12 h-12 rounded-full border border-white/20 flex items-center justify-center transition-all duration-700 hover:border-gold"
              >
                <div className="absolute inset-0 bg-gold rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 opacity-20"></div>
                <svg className="w-5 h-5 text-white group-hover:text-gold transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <div className="flex flex-col">
                <span className="text-white text-xs font-bold tracking-widest uppercase mb-1">Join the Elite Circle</span>
                <span className="text-gold text-[10px] uppercase tracking-[0.2em]">Exclusives & Inspo</span>
              </div>
            </div>
          </div>

          {/* Quick Collections Section */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-white text-xs font-bold tracking-[0.3em] uppercase">Collections</h4>
            <ul className="space-y-4 text-sm font-light text-white/80">
              <li className="hover:text-gold transition-colors cursor-pointer">Bridal Packages</li>
              <li className="hover:text-gold transition-colors cursor-pointer">Advanced Skin</li>
              <li className="hover:text-gold transition-colors cursor-pointer">Elite Waxing</li>
              <li className="hover:text-gold transition-colors cursor-pointer">Signature Styling</li>
            </ul>
          </div>

          {/* Contact & Hours Section */}
          <div className="lg:col-span-5 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h4 className="text-white text-xs font-bold tracking-[0.3em] uppercase">The Atelier</h4>
                <div className="space-y-2 text-sm font-light text-white/90">
                  <p>{OWNER_INFO.contact.address}</p>
                  <p>Ottawa, ON, Canada</p>
                  <p className="pt-2 text-gold font-medium">{OWNER_INFO.contact.phone}</p>
                </div>
              </div>
              <div className="space-y-6">
                <h4 className="text-white text-xs font-bold tracking-[0.3em] uppercase">Hours</h4>
                <div className="space-y-2 text-sm font-light text-white/70">
                  <p>Tue — Sat: 10am - 8pm</p>
                  <p>Sun — Mon: Private Inquiries</p>
                  <p className="italic text-xs pt-2">By appointment only.</p>
                </div>
              </div>
            </div>
            
            {/* Minimalist Newsletter-style Sign off */}
            <div className="pt-8 border-t border-white/10">
              <div className="relative group max-w-sm">
                <input 
                  type="email" 
                  placeholder="The Beauty Letter (Email)" 
                  className="w-full bg-transparent border-b border-white/20 pb-4 text-sm outline-none focus:border-gold transition-all duration-700 text-white placeholder:text-white/40"
                />
                <button className="absolute right-0 bottom-4 text-gold text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[9px] tracking-[0.4em] uppercase text-white/40">
            &copy; {new Date().getFullYear()} GirlLookedFor You Luxury Boutique
          </div>
          <div className="flex items-center space-x-8 text-[9px] tracking-[0.2em] uppercase text-white/40 font-bold">
            <span className="hover:text-gold transition-colors cursor-pointer">Privacy</span>
            <span className="hover:text-gold transition-colors cursor-pointer">Terms</span>
            <span className="hover:text-gold transition-colors cursor-pointer">Accessibility</span>
          </div>
          <div className="text-[10px] italic font-serif text-gold">
            Artistry by {OWNER_INFO.name}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;