
import React, { useState } from 'react';
import { GALLERY } from '../constants';

const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Makeup', 'Hair', 'Skin', 'Threading', 'Salon', 'Before & After'];

  const filteredGallery = activeFilter === 'All' 
    ? GALLERY 
    : GALLERY.filter(img => img.category === activeFilter);

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-20 animate-fade-up">
        <span className="text-gold font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">The Visual Diary</span>
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 font-serif italic leading-tight">Artistry & Transformations</h1>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg font-light leading-relaxed italic">
          "Every image tells a story of confidence rediscovered." — Janki Khatroja
        </p>
        <div className="w-24 h-1 bg-gold mx-auto mt-10 opacity-30"></div>
      </div>

      {/* Luxury Filter System */}
      <div className="flex flex-wrap justify-center gap-4 mb-20 animate-fade-up" style={{animationDelay: '0.2s'}}>
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-8 py-3 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all duration-700 border ${
              activeFilter === filter 
                ? 'bg-slate-900 text-white border-slate-900 shadow-xl' 
                : 'bg-white text-slate-400 border-slate-100 hover:border-gold hover:text-gold hover:-translate-y-1'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Masonry-inspired Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {filteredGallery.map((img, idx) => (
          <div 
            key={img.id} 
            className={`group relative overflow-hidden rounded-[50px] shadow-2xl animate-fade-up hover-zoom ${
              idx % 4 === 0 ? 'md:col-span-1 h-[600px]' : 'h-[500px]'
            }`}
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <img 
              src={img.url} 
              alt={img.title} 
              className="w-full h-full object-cover transition-transform duration-1000"
            />
            
            {/* Elegant Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-12">
              <span className="text-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                {img.category}
              </span>
              <h3 className="text-white text-3xl font-bold font-serif italic transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700 delay-100">
                {img.title}
              </h3>
              <div className="w-12 h-[1px] bg-gold/50 mt-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
            </div>
            
            {/* Delicate Light Shimmer */}
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            
            {/* Category Badge (Static) */}
            <div className="absolute top-8 left-8 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 z-10 group-hover:opacity-0 transition-opacity">
              <span className="text-white text-[8px] font-bold uppercase tracking-widest">{img.category}</span>
            </div>
          </div>
        ))}
      </div>

      {filteredGallery.length === 0 && (
        <div className="text-center py-40 animate-fade-up">
          <p className="text-slate-300 italic font-serif text-2xl">Updating our visual diary with new transformations...</p>
        </div>
      )}

      {/* Special Category Highlight: Bridal Diary */}
      {activeFilter === 'All' || activeFilter === 'Makeup' ? (
        <div className="mt-40 bg-slate-950 rounded-[80px] p-16 md:p-32 relative overflow-hidden animate-fade-up">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] -mr-48 -mt-48"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-20">
            <div className="max-w-xl text-center md:text-left">
              <span className="text-gold font-bold tracking-[0.5em] uppercase text-[10px] mb-8 block">Exclusive Feature</span>
              <h2 className="text-5xl md:text-7xl font-bold text-white font-serif italic mb-8 leading-tight">The Bridal Diary</h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed italic mb-12">
                "A bridal look is more than makeup; it's a legacy of grace." Experience our complete wedding day transformations from start to finish.
              </p>
              <button className="btn-luxury bg-gold text-white px-12 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-white hover:text-slate-900 transition-all duration-700">
                Inquire for Bridal
              </button>
            </div>
            <div className="relative grid grid-cols-2 gap-4 w-full md:w-auto">
              <img src="https://images.unsplash.com/photo-1594465919760-441fe5908ab0?q=80&w=600" className="w-48 h-64 md:w-64 md:h-80 object-cover rounded-3xl rotate-[-3deg] shadow-2xl" alt="Bridal 1" />
              <img src="https://images.unsplash.com/photo-1522337660859-02fbefce4ffc?q=80&w=600" className="w-48 h-64 md:w-64 md:h-80 object-cover rounded-3xl rotate-[6deg] mt-12 shadow-2xl" alt="Bridal 2" />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Gallery;
