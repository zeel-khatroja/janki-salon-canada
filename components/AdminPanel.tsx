
import React, { useState, useEffect } from 'react';
import { storageService } from '../services/storageService';
import { Booking, SalonService, Review } from '../types';
import { INITIAL_SERVICES, OWNER_INFO } from '../constants';

const AdminPanel: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [services, setServices] = useState<SalonService[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [activeTab, setActiveTab] = useState<'bookings' | 'services' | 'reviews' | 'stats'>('bookings');
  
  const [newService, setNewService] = useState<Partial<SalonService>>({
    name: '', category: 'Skin', description: '', price: 0, duration: '', imageUrl: ''
  });

  useEffect(() => {
    if (isAuthenticated) {
      setBookings(storageService.getBookings());
      setServices(storageService.getServices(INITIAL_SERVICES));
      setReviews(storageService.getReviews());
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'janki123' || password === 'admin123') {
      setIsAuthenticated(true);
    } else {
      alert('Access Denied: Please check your password.');
    }
  };

  const updateStatus = (id: string, status: Booking['status']) => {
    storageService.updateBookingStatus(id, status);
    setBookings(storageService.getBookings());
  };

  const addService = (e: React.FormEvent) => {
    e.preventDefault();
    const serviceToAdd: SalonService = {
      ...newService as SalonService,
      id: 's' + Date.now(),
    };
    const updated = [...services, serviceToAdd];
    setServices(updated);
    storageService.saveServices(updated);
    setNewService({ name: '', category: 'Skin', description: '', price: 0, duration: '', imageUrl: '' });
  };

  const deleteService = (id: string) => {
    if (window.confirm("Are you sure you want to remove this service?")) {
      const updated = services.filter(s => s.id !== id);
      setServices(updated);
      storageService.saveServices(updated);
    }
  };

  const removeReview = (id: string) => {
    if (window.confirm("Delete this client testimonial?")) {
      storageService.deleteReview(id);
      setReviews(storageService.getReviews());
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4 bg-cream">
        <form onSubmit={handleLogin} className="bg-white p-12 rounded-[40px] shadow-2xl border border-gold/10 w-full max-w-md animate-fade-up">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-800 font-serif mb-2 uppercase tracking-tighter">Owner Access</h2>
            <p className="text-slate-400 text-xs tracking-widest uppercase">Secure Portal</p>
          </div>
          <div className="space-y-6">
            <input 
              type="password" 
              placeholder="Private Key (try janki123)" 
              className="w-full bg-slate-50 px-6 py-4 rounded-2xl border border-transparent focus:border-gold focus:outline-none transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-gold transition-colors duration-500 tracking-[0.2em] uppercase text-xs">
              Authorize Entry
            </button>
          </div>
        </form>
      </div>
    );
  }

  const revenue = bookings.reduce((acc, curr) => {
    const s = services.find(service => service.id === curr.serviceId);
    return acc + (s?.price || 0);
  }, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 animate-fade-up">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-bold text-slate-900 font-serif">{OWNER_INFO.salonName} Control</h1>
          <p className="text-slate-500 italic">"Management is the art of making beauty sustainable." — Janki</p>
        </div>
        <div className="flex bg-white p-1.5 rounded-2xl shadow-sm border border-slate-100 flex-wrap">
          {(['bookings', 'services', 'reviews', 'stats'] as const).map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${activeTab === tab ? 'bg-slate-900 text-white' : 'text-slate-400 hover:text-slate-600'}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {activeTab === 'bookings' && (
        <div className="bg-white rounded-[32px] shadow-sm border border-slate-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50/50 text-slate-400 text-[10px] uppercase tracking-[0.2em] font-bold">
                  <th className="px-8 py-5">Guest Profile</th>
                  <th className="px-8 py-5">Experience</th>
                  <th className="px-8 py-5">Schedule</th>
                  <th className="px-8 py-5">Status</th>
                  <th className="px-8 py-5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 text-sm">
                {bookings.length > 0 ? bookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-gold/[0.02] transition-colors">
                    <td className="px-8 py-6">
                      <div className="font-bold text-slate-800">{booking.clientName}</div>
                      <div className="text-[10px] text-slate-400">{booking.phone}</div>
                    </td>
                    <td className="px-8 py-6 text-slate-600 font-medium">{booking.serviceName}</td>
                    <td className="px-8 py-6 text-slate-600">
                      <div className="font-bold">{booking.date}</div>
                      <div className="text-[10px] text-slate-400">{booking.time}</div>
                    </td>
                    <td className="px-8 py-6">
                      <span className={`px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest ${
                        booking.status === 'confirmed' ? 'bg-green-50 text-green-600' :
                        booking.status === 'pending' ? 'bg-gold/10 text-gold' :
                        'bg-slate-100 text-slate-400'
                      }`}>
                        {booking.status}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <div className="flex justify-end space-x-3">
                        {booking.status === 'pending' && (
                          <button onClick={() => updateStatus(booking.id, 'confirmed')} className="px-4 py-2 bg-slate-900 text-white rounded-xl text-[10px] font-bold hover:bg-gold transition-colors">Confirm</button>
                        )}
                        <button onClick={() => updateStatus(booking.id, 'cancelled')} className="px-4 py-2 border border-slate-200 text-slate-400 rounded-xl text-[10px] font-bold hover:bg-rose-50 hover:text-rose-500 transition-colors">Cancel</button>
                      </div>
                    </td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan={5} className="px-8 py-20 text-center text-slate-400 italic font-serif">Awaiting your first elite booking...</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'services' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <form onSubmit={addService} className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm sticky top-32">
              <h3 className="text-xl font-serif font-bold mb-6 italic">Curate New Collection</h3>
              <div className="space-y-4">
                <input required placeholder="Service Name" className="w-full bg-slate-50 px-5 py-3 rounded-xl border-none focus:ring-1 focus:ring-gold outline-none" value={newService.name} onChange={e => setNewService({...newService, name: e.target.value})} />
                <select className="w-full bg-slate-50 px-5 py-3 rounded-xl border-none outline-none text-sm" value={newService.category} onChange={e => setNewService({...newService, category: e.target.value as any})}>
                  <option>Threading</option><option>Bridal</option><option>Hair</option><option>Facial</option><option>Skin</option><option>Nails</option><option>Waxing</option>
                </select>
                <input type="number" placeholder="Price ($)" className="w-full bg-slate-50 px-5 py-3 rounded-xl border-none outline-none" value={newService.price} onChange={e => setNewService({...newService, price: Number(e.target.value)})} />
                <input placeholder="Duration (e.g. 60 mins)" className="w-full bg-slate-50 px-5 py-3 rounded-xl border-none outline-none" value={newService.duration} onChange={e => setNewService({...newService, duration: e.target.value})} />
                <textarea placeholder="The Signature Narrative" className="w-full bg-slate-50 px-5 py-3 rounded-xl border-none outline-none h-24 resize-none text-sm" value={newService.description} onChange={e => setNewService({...newService, description: e.target.value})} />
                <input placeholder="Imagery URL" className="w-full bg-slate-50 px-5 py-3 rounded-xl border-none outline-none" value={newService.imageUrl} onChange={e => setNewService({...newService, imageUrl: e.target.value})} />
                <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-gold transition-all tracking-widest uppercase text-xs">Publish Experience</button>
              </div>
            </form>
          </div>
          <div className="lg:col-span-2 space-y-4">
             {services.map(s => (
               <div key={s.id} className="bg-white p-6 rounded-3xl border border-slate-100 flex items-center justify-between group animate-fade-up">
                 <div className="flex items-center space-x-6">
                   <div className="relative overflow-hidden w-16 h-16 rounded-2xl">
                    <img src={s.imageUrl} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                   </div>
                   <div>
                     <h4 className="font-bold text-slate-800 font-serif">{s.name}</h4>
                     <p className="text-[10px] text-gold font-bold uppercase tracking-wider">${s.price} • {s.duration}</p>
                   </div>
                 </div>
                 <button onClick={() => deleteService(s.id)} className="p-3 text-slate-200 hover:text-rose-500 transition-colors">
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                 </button>
               </div>
             ))}
          </div>
        </div>
      )}

      {activeTab === 'reviews' && (
        <div className="space-y-6">
          {reviews.map(r => (
            <div key={r.id} className="bg-white p-8 rounded-3xl border border-slate-100 flex items-center justify-between animate-fade-up">
              <div className="flex-1 mr-8">
                <div className="flex items-center space-x-4 mb-2">
                  <h4 className="font-bold text-slate-900 font-serif">{r.name}</h4>
                  <span className="text-gold text-xs">{'★'.repeat(r.rating)}</span>
                </div>
                <p className="text-slate-500 text-sm font-light italic leading-relaxed">"{r.comment}"</p>
                <p className="text-[9px] text-slate-400 mt-2 uppercase tracking-widest">{r.date}</p>
              </div>
              <button onClick={() => removeReview(r.id)} className="px-6 py-2 border border-slate-200 text-slate-400 rounded-xl text-[10px] font-bold hover:bg-rose-50 hover:text-rose-500 transition-colors">Remove</button>
            </div>
          ))}
          {reviews.length === 0 && (
            <div className="text-center py-20 text-slate-400 italic">No reviews recorded yet.</div>
          )}
        </div>
      )}

      {activeTab === 'stats' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-12 rounded-[40px] border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center">
            <h3 className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-6">Projected Revenue</h3>
            <p className="text-6xl font-serif font-bold text-slate-900">${revenue}</p>
          </div>
          <div className="bg-white p-12 rounded-[40px] border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center">
            <h3 className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-6">Concierge Requests</h3>
            <p className="text-6xl font-serif font-bold text-slate-900">{bookings.filter(b => b.status === 'pending').length}</p>
          </div>
          <div className="bg-white p-12 rounded-[40px] border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center">
            <h3 className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-6">Elite Patronage</h3>
            <p className="text-6xl font-serif font-bold text-slate-900">{new Set(bookings.map(b => b.phone)).size}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
