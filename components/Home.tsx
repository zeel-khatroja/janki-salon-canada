
import React, { useState } from 'react';
import { INITIAL_SERVICES, OWNER_INFO } from '../constants';
import { getBeautyAdvice } from '../services/geminiService';
import { storageService } from '../services/storageService';

interface HomeProps {
  onBookNow: () => void;
}

const Home: React.FC<HomeProps> = ({ onBookNow }) => {
  const [advicePrompt, setAdvicePrompt] = useState('');
  const [adviceResult, setAdviceResult] = useState('');
  const [loadingAdvice, setLoadingAdvice] = useState(false);
  
  const currentServices = storageService.getServices(INITIAL_SERVICES);

  const handleGetAdvice = async () => {
    if (!advicePrompt.trim()) return;
    setLoadingAdvice(true);
    const result = await getBeautyAdvice(advicePrompt);
    setAdviceResult(result || '');
    setLoadingAdvice(false);
  };

  return (
    <div className="space-y-32 pb-32">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2400" 
            alt="Luxury Salon Interior" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-white w-full">
          <div className="max-w-3xl animate-fade-up">
            <span className="text-gold font-bold tracking-[0.4em] uppercase text-[10px] mb-8 block">Ottawa's Premier Beauty Sanctuary</span>
            <h1 className="text-7xl md:text-9xl font-bold leading-[0.9] mb-10 font-serif tracking-tighter">
              Redefining <br/>Grace <span className="text-gold font-serif italic text-6xl md:text-8xl">&</span> Luxury
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-14 font-light max-w-xl leading-relaxed opacity-80">
              Exclusive waxing, advanced skin treatments, and signature artistry by Janki Khatroja.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button onClick={onBookNow} className="btn-luxury bg-gold text-white px-12 py-5 rounded-full font-bold transition-all duration-700 shadow-2xl tracking-[0.2em] uppercase text-xs hover:bg-white hover:text-slate-900">
                Book Appointment
              </button>
              <a 
                href={OWNER_INFO.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-luxury inline-flex items-center justify-center border border-white/20 hover:border-gold hover:text-gold px-12 py-5 rounded-full font-bold transition-all duration-700 tracking-[0.2em] uppercase text-xs backdrop-blur-sm"
              >
                Follow on Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Services Collection */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 animate-fade-up">
          <div>
            <span className="text-gold font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">The Collection</span>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 font-serif italic">Our Signatures</h2>
          </div>
          <p className="max-w-md text-slate-400 text-right mt-6 md:mt-0 font-light italic">"From precision waxing to medical-grade skin therapy."</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {currentServices.slice(0, 3).map((service, idx) => (
            <div key={service.id} className="group cursor-pointer animate-fade-up hover-zoom" style={{animationDelay: `${idx * 0.3}s`}}>
              <div className="relative h-[600px] overflow-hidden rounded-[50px] mb-10 shadow-3xl border border-white/5">
                <img src={service.imageUrl} alt={service.name} className="w-full h-full object-cover transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>
                <div className="absolute bottom-12 left-12 right-12 text-white transform transition-transform duration-700 group-hover:-translate-y-4">
                  <span className="text-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">{service.category}</span>
                  <h3 className="text-3xl font-bold font-serif italic leading-tight group-hover:text-gold transition-colors">{service.name}</h3>
                  <div className="h-0 group-hover:h-12 overflow-hidden transition-all duration-500 opacity-0 group-hover:opacity-100 mt-4">
                    <p className="text-sm font-light text-slate-200">Starting from ${service.price}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Photo Section (Waxing/Skin focus) */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative animate-fade-up hover-zoom">
            <img src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1200" className="rounded-[60px] shadow-2xl object-cover w-full h-[600px]" alt="Advanced Skin Therapy" />
            <div className="absolute -bottom-10 -right-10 bg-white p-12 rounded-[40px] shadow-xl max-w-xs border border-gold/10 hidden lg:block">
                <h4 className="font-serif italic text-2xl mb-4">The Skin Gallery</h4>
                <p className="text-slate-400 text-sm font-light">Witness results that redefine confidence. Our advanced skin treatments use medical-grade technology.</p>
            </div>
        </div>
        <div className="space-y-8 pl-0 md:pl-20 animate-fade-up" style={{animationDelay: '0.4s'}}>
            <span className="text-gold font-bold tracking-[0.4em] uppercase text-[10px]">Medical Grade Artistry</span>
            <h2 className="text-5xl font-serif leading-tight italic">Radiance Reimagined</h2>
            <p className="text-slate-500 font-light leading-relaxed text-lg">
                At {OWNER_INFO.salonName}, we don't just treat the surface. Our advanced skin protocols are designed to repair, restore, and rejuvenate your natural beauty from within.
            </p>
            <ul className="space-y-4">
                {['Full Body Silk Waxing', 'Microneedling Therapy', 'Carbon Hollywood Facial'].map((item, idx) => (
                    <li key={idx} className="flex items-center text-slate-800 font-medium group cursor-pointer">
                        <span className="w-8 h-[1px] bg-gold mr-4 group-hover:w-12 transition-all"></span>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
      </section>

      {/* Instagram Spotlight */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="bg-slate-50 rounded-[60px] p-16 md:p-24 flex flex-col md:flex-row items-center justify-between gap-12 border border-slate-100 shadow-sm">
          <div className="max-w-lg animate-fade-up">
            <h2 className="text-4xl font-serif mb-6">Experience the Glamour</h2>
            <p className="text-slate-500 mb-10 leading-relaxed font-light">Follow us for daily results, luxury waxing tips, and Ottawa's finest beauty transformations.</p>
            <a 
              href={OWNER_INFO.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-luxury inline-flex items-center space-x-4 bg-slate-900 text-white px-10 py-5 rounded-full hover:bg-gold transition-all duration-500 group"
            >
              <span className="font-bold tracking-widest uppercase text-xs">@glamgirlbyjanki</span>
              <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full md:w-1/2 animate-fade-up" style={{animationDelay: '0.3s'}}>
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600" className="w-full aspect-square object-cover rounded-3xl hover:scale-105 transition-all cursor-pointer" alt="Glam 1" />
              <img src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=600" className="w-full aspect-square object-cover rounded-3xl hover:scale-105 transition-all cursor-pointer" alt="Glam 2" />
            </div>
            <div className="space-y-4 mt-8">
              <img src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=600" className="w-full aspect-square object-cover rounded-3xl hover:scale-105 transition-all cursor-pointer" alt="Glam 3" />
              <img src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=600" className="w-full aspect-square object-cover rounded-3xl hover:scale-105 transition-all cursor-pointer" alt="Glam 4" />
            </div>
          </div>
        </div>
      </section>

      {/* AI Consultant */}
      <section className="bg-slate-900 py-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[150px] -mr-96 -mt-96 animate-pulse"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-gold font-bold tracking-[0.4em] uppercase text-[10px] mb-8 block">Virtual Atelier</span>
          <h2 className="text-5xl md:text-6xl font-bold text-white mt-4 font-serif italic mb-10 animate-fade-up">The Digital Consultation</h2>
          
          <div className="flex flex-col md:flex-row gap-6 mb-12 animate-fade-up" style={{animationDelay: '0.2s'}}>
            <input 
              type="text" 
              placeholder="e.g. Which waxing is best for sensitive skin?"
              className="flex-1 bg-white/5 border border-white/10 px-8 py-6 rounded-3xl text-white outline-none focus:border-gold transition-all text-lg placeholder:text-white/20"
              value={advicePrompt}
              onChange={(e) => setAdvicePrompt(e.target.value)}
            />
            <button 
              onClick={handleGetAdvice}
              disabled={loadingAdvice}
              className="btn-luxury bg-gold text-white px-12 py-6 rounded-3xl font-bold hover:bg-white hover:text-slate-900 transition-all duration-700 disabled:opacity-50 tracking-[0.2em] uppercase text-xs"
            >
              {loadingAdvice ? 'Refining...' : 'Inquire'}
            </button>
          </div>

          {adviceResult && (
            <div className="bg-white/5 p-12 rounded-[50px] border border-white/10 animate-fade-up text-left backdrop-blur-xl">
              <p className="text-slate-300 text-xl leading-relaxed italic opacity-90">"{adviceResult}"</p>
              <p className="text-gold font-bold mt-8 tracking-[0.3em] uppercase text-[10px]">Janki Khatroja — Art Director</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
