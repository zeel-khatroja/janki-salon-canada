
import React, { useState } from 'react';
import { storageService } from '../services/storageService';
import { Booking } from '../types';
import { INITIAL_SERVICES } from '../constants';
import { getBookingConfirmationMessage } from '../services/geminiService';

interface BookingPageProps {
  initialServiceId?: string;
  onSuccess: () => void;
}

const BookingPage: React.FC<BookingPageProps> = ({ initialServiceId, onSuccess }) => {
  const currentServices = storageService.getServices(INITIAL_SERVICES);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceId: initialServiceId || '',
    date: '',
    time: '',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [personalNote, setPersonalNote] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const selectedService = currentServices.find(s => s.id === formData.serviceId);
    
    // Generate AI message from Janki
    const note = await getBookingConfirmationMessage(formData.name, selectedService?.name || 'Treatment');
    setPersonalNote(note || '');

    const newBooking: Booking = {
      id: Math.random().toString(36).substr(2, 9),
      clientName: formData.name,
      email: formData.email,
      phone: formData.phone,
      serviceId: formData.serviceId,
      serviceName: selectedService?.name || 'Custom Service',
      date: formData.date,
      time: formData.time,
      status: 'pending',
      notes: formData.notes,
      createdAt: new Date().toISOString()
    };

    storageService.addBooking(newBooking);
    setIsSubmitting(false);
    setIsComplete(true);
    
    setTimeout(() => {
      onSuccess();
    }, 8000); // Give them time to read the note
  };

  if (isComplete) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-32 text-center animate-fade-up">
        <div className="w-24 h-24 bg-gold/10 text-gold rounded-full flex items-center justify-center mx-auto mb-8 border border-gold/20">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 13l4 4L19 7" /></svg>
        </div>
        <h2 className="text-4xl font-bold text-slate-900 mb-6 font-serif">Booking Request Received</h2>
        <div className="glass-card p-8 rounded-3xl border-l-4 border-gold italic text-slate-700 mb-8 leading-relaxed">
          "{personalNote}"
          <p className="mt-4 not-italic font-bold text-slate-900">— Janki Khatroja</p>
        </div>
        <p className="text-slate-500 mb-4">
          We will contact you shortly at {formData.phone} to confirm the final time slot.
        </p>
        <button onClick={onSuccess} className="text-gold font-bold underline underline-offset-8">Return to Homepage</button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="animate-fade-up">
          <span className="text-gold font-bold tracking-widest uppercase text-xs mb-4 block">Reservation</span>
          <h1 className="text-5xl font-bold text-slate-900 mb-8 font-serif leading-tight">Secure Your Moment <br/>of Luxury</h1>
          <p className="text-slate-500 mb-12 text-lg leading-relaxed">
            Please provide your details below. Each appointment is personally curated by Janki to ensure a high-end, bespoke experience for our Ottawa clients.
          </p>

          <div className="space-y-8">
            <div className="flex items-center space-x-6">
              <div className="w-14 h-14 bg-white shadow-lg rounded-2xl flex items-center justify-center text-gold border border-gold/10">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
              </div>
              <span className="text-slate-800 font-medium">123 Elite Circle, Ottawa, Ontario</span>
            </div>
            <div className="flex items-center space-x-6">
              <div className="w-14 h-14 bg-white shadow-lg rounded-2xl flex items-center justify-center text-gold border border-gold/10">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h2.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <span className="text-slate-800 font-medium">+1 (613) 555-0123</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-[40px] p-10 shadow-2xl border border-gold/5 space-y-8 animate-fade-up" style={{animationDelay: '0.2s'}}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
              <input required type="text" className="w-full bg-slate-50 px-6 py-4 rounded-2xl border border-transparent focus:border-gold focus:bg-white focus:outline-none transition-all" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Phone</label>
              <input required type="tel" className="w-full bg-slate-50 px-6 py-4 rounded-2xl border border-transparent focus:border-gold focus:bg-white focus:outline-none transition-all" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Treatment Selection</label>
            <select required className="w-full bg-slate-50 px-6 py-4 rounded-2xl border border-transparent focus:border-gold focus:bg-white focus:outline-none appearance-none transition-all" value={formData.serviceId} onChange={(e) => setFormData({...formData, serviceId: e.target.value})}>
              <option value="">Choose your experience...</option>
              {currentServices.map(s => (
                <option key={s.id} value={s.id}>{s.name} — ${s.price}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Date</label>
              <input required type="date" className="w-full bg-slate-50 px-6 py-4 rounded-2xl border border-transparent focus:border-gold focus:bg-white focus:outline-none transition-all" value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Time</label>
              <input required type="time" className="w-full bg-slate-50 px-6 py-4 rounded-2xl border border-transparent focus:border-gold focus:bg-white focus:outline-none transition-all" value={formData.time} onChange={(e) => setFormData({...formData, time: e.target.value})} />
            </div>
          </div>

          <button type="submit" disabled={isSubmitting} className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold shadow-xl hover:bg-gold transition-all duration-500 group">
            {isSubmitting ? 'Finalizing Your Luxury Moment...' : 'Request Appointment'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;
