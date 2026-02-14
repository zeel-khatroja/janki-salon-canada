
import React, { useState, useEffect } from 'react';
import { INITIAL_SERVICES } from '../constants';
import { ServiceCategory, SalonService } from '../types';
import { storageService } from '../services/storageService';

interface ServicesProps {
  onBook: (serviceId: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onBook }) => {
  const [filter, setFilter] = useState<ServiceCategory | 'All'>('All');
  const [services, setServices] = useState<SalonService[]>([]);

  useEffect(() => {
    setServices(storageService.getServices(INITIAL_SERVICES));
  }, []);

  const categories: (ServiceCategory | 'All')[] = [
    'All', 'Bridal', 'Facial', 'Skin', 'Makeup', 'Nails', 'Hair', 'Threading', 'Waxing'
  ];

  const filteredServices = filter === 'All' 
    ? services 
    : services.filter(s => s.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-20 animate-fade-up">
        <span className="text-gold font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">The Full Collection</span>
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 font-serif italic">Bespoke Treatments</h1>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg font-light leading-relaxed italic">
          "Ottawa's most comprehensive luxury menu, from precision threading to clinical skin therapy."
        </p>
        <div className="w-24 h-1 bg-gold mx-auto mt-10 opacity-30"></div>
      </div>

      {/* Elegant Filter Bar */}
      <div className="flex overflow-x-auto pb-6 justify-start md:justify-center gap-4 mb-20 animate-fade-up scrollbar-hide" style={{animationDelay: '0.2s'}}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-8 py-3 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all duration-700 border flex-shrink-0 ${
              filter === cat 
                ? 'bg-slate-900 text-white border-slate-900 shadow-xl' 
                : 'bg-white text-slate-400 border-slate-100 hover:border-gold hover:text-gold hover:-translate-y-1'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
        {filteredServices.map((service, idx) => (
          <div 
            key={service.id} 
            className="group bg-white rounded-[50px] overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-50 hover:shadow-gold/20 transition-all duration-700 animate-fade-up hover-zoom"
            style={{ animationDelay: `${idx * 0.05}s` }}
          >
            <div className="h-72 relative overflow-hidden">
              <img 
                src={service.imageUrl || 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800'} 
                alt={service.name} 
                className="w-full h-full object-cover" 
              />
              <div className="absolute top-6 left-6 flex flex-col gap-2">
                <div className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-gold font-bold text-[9px] uppercase tracking-[0.2em] shadow-sm z-10">
                  {service.category}
                </div>
                {service.subCategory && (
                  <div className="bg-slate-900/80 backdrop-blur-md px-4 py-1.5 rounded-full text-white font-bold text-[8px] uppercase tracking-[0.1em] shadow-sm z-10">
                    {service.subCategory}
                  </div>
                )}
              </div>
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-700"></div>
            </div>
            
            <div className="p-10">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-slate-800 font-serif italic leading-tight group-hover:text-gold transition-colors">{service.name}</h3>
                <span className="text-gold font-bold text-xl ml-4 tracking-tighter">${service.price}</span>
              </div>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-8 font-light line-clamp-3">
                {service.description}
              </p>
              
              <div className="flex items-center justify-between pt-8 border-t border-slate-50">
                <div className="flex items-center text-slate-300 text-[10px] font-bold uppercase tracking-widest">
                  <svg className="w-4 h-4 mr-2 text-gold opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {service.duration}
                </div>
                <button 
                  onClick={() => onBook(service.id)}
                  className="btn-luxury bg-slate-900 text-white px-8 py-3.5 rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-gold transition-all duration-500 shadow-lg shadow-slate-200 group-hover:-translate-y-2"
                >
                  Reserve
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredServices.length === 0 && (
        <div className="text-center py-32 animate-fade-up">
          <p className="text-slate-300 italic font-serif text-xl">Our artisans are curating new experiences in this collection...</p>
        </div>
      )}
    </div>
  );
};

export default Services;
