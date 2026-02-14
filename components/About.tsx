
import React from 'react';
import { OWNER_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 overflow-hidden relative">
      {/* Background Animated Elements */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[120px] animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[120px] animate-pulse pointer-events-none" style={{ animationDelay: '2s' }}></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        
        {/* Left Column: Narrative */}
        <div className="order-2 lg:order-1">
          <div className="mb-12 overflow-hidden">
            <span className="text-gold font-bold tracking-[0.5em] uppercase text-[10px] mb-4 block animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Owner
            </span>
            <h1 className="text-6xl md:text-8xl font-bold text-slate-900 mb-8 font-serif italic leading-tight animate-fade-up" style={{ animationDelay: '0.3s' }}>
              {OWNER_INFO.name}
            </h1>
            <div className="w-24 h-1 bg-gold opacity-40 animate-fade-up" style={{ animationDelay: '0.5s' }}></div>
          </div>
          
          <div className="space-y-8 text-slate-500 font-light leading-relaxed text-lg italic animate-fade-up" style={{ animationDelay: '0.7s' }}>
            <p className="border-l-4 border-gold/30 pl-8 py-2 bg-gradient-to-r from-gold/5 to-transparent rounded-r-3xl">
              "Every face is a unique canvas, and every treatment is a ceremony of self-love. At {OWNER_INFO.salonName}, we don't just provide services; we curate moments of pure transformation."
            </p>
            <p className="text-slate-600 leading-loose">
              With over a decade of elite experience in high-fashion artistry and clinical skin care, Janki has established herself as Ottawa's most sought-after beauty specialist. Her journey began with a deep appreciation for the technical precision of threading and evolved into a comprehensive mastery of bridal transformations and advanced dermatological aesthetics.
            </p>
            <p className="text-slate-600 leading-loose">
              Janki's signature approach blends the warmth of personal care with the rigor of medical-grade standards. Her Ottawa studio is designed as a sanctuary where technical excellence meets soulful rejuvenation.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 animate-fade-up" style={{ animationDelay: '0.9s' }}>
            <div className="group p-6 rounded-3xl hover:bg-white hover:shadow-2xl hover:shadow-gold/10 transition-all duration-700 cursor-default">
              <div className="text-5xl font-bold text-slate-900 font-serif mb-2 group-hover:text-gold transition-colors italic">10+</div>
              <div className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Years Mastery</div>
            </div>
            <div className="group p-6 rounded-3xl hover:bg-white hover:shadow-2xl hover:shadow-gold/10 transition-all duration-700 cursor-default">
              <div className="text-5xl font-bold text-slate-900 font-serif mb-2 group-hover:text-gold transition-colors italic">5k+</div>
              <div className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Client Smiles</div>
            </div>
            <div className="group p-6 rounded-3xl hover:bg-white hover:shadow-2xl hover:shadow-gold/10 transition-all duration-700 cursor-default hidden md:block">
              <div className="text-4xl font-bold text-slate-900 font-serif mb-2 group-hover:text-gold transition-colors italic">Ottawa</div>
              <div className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Main Studio</div>
            </div>
          </div>
        </div>

        {/* Right Column: The Portrait */}
        <div className="order-1 lg:order-2 relative">
          {/* Decorative Animated Floating Rings */}
          <div className="absolute -top-16 -right-16 w-80 h-80 border-2 border-gold/10 rounded-full animate-pulse pointer-events-none" style={{ animationDuration: '4s' }}></div>
          <div className="absolute -bottom-20 -left-20 w-96 h-96 border border-gold/5 rounded-full animate-pulse pointer-events-none" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
          
          {/* Main Portrait Container */}
          <div className="relative z-10 aspect-[4/5] rounded-[80px] overflow-hidden shadow-[0_80px_120px_-30px_rgba(0,0,0,0.3)] border-8 border-white group animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-10"></div>
            <img 
              src={OWNER_INFO.photo} 
              alt={OWNER_INFO.name} 
              className="w-full h-full object-cover transition-all duration-1000 scale-110 group-hover:scale-100 grayscale-[15%] group-hover:grayscale-0" 
            />
            
            {/* Elegant Shimmer Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 via-transparent to-white/10 opacity-40"></div>
          </div>

          {/* Floating Luxury Contact Box */}
          <div className="absolute -bottom-10 -right-4 md:-right-16 bg-white p-10 md:p-14 rounded-[50px] shadow-[0_40px_80px_-20px_rgba(212,175,55,0.2)] z-20 border border-gold/20 max-w-sm group/card hover:-translate-y-4 transition-all duration-700 animate-fade-up" style={{ animationDelay: '1.2s' }}>
            <div className="w-12 h-[2px] bg-gold mb-8 group-hover/card:w-20 transition-all duration-700"></div>
            <h3 className="text-3xl font-serif mb-4 italic text-slate-900">Direct Connect</h3>
            <p className="text-[10px] text-slate-400 mb-8 font-bold tracking-[0.3em] uppercase">Private Consultations Only</p>
            
            <div className="space-y-6">
              <a href={`tel:${OWNER_INFO.contact.phone}`} className="flex items-center space-x-5 text-slate-900 hover:text-gold transition-colors group/item">
                <div className="w-10 h-10 rounded-full bg-gold/5 flex items-center justify-center group-hover/item:bg-gold/10 transition-colors">
                  <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                </div>
                <span className="font-bold text-xl tracking-tighter">{OWNER_INFO.contact.phone}</span>
              </a>
              <div className="text-slate-400 text-sm italic pl-1 shadow-sm pb-1 inline-block border-b border-gold/20">
                {OWNER_INFO.contact.email}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
