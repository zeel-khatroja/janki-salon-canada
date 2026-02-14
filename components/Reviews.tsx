
import React, { useState, useEffect } from 'react';
import { storageService } from '../services/storageService';
import { Review } from '../types';

const Reviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', rating: 5, comment: '' });

  useEffect(() => {
    setReviews(storageService.getReviews());
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newReview: Review = {
      id: Date.now().toString(),
      name: formData.name,
      rating: formData.rating,
      comment: formData.comment,
      date: new Date().toLocaleDateString(),
      isVerified: false
    };
    storageService.addReview(newReview);
    setReviews(storageService.getReviews());
    setShowForm(false);
    setFormData({ name: '', rating: 5, comment: '' });
  };

  const StarIcon = ({ filled }: { filled: boolean }) => (
    <svg className={`w-4 h-4 ${filled ? 'text-gold' : 'text-slate-200'}`} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-24 animate-fade-up">
        <span className="text-gold font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Client Voices</span>
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 font-serif italic">Testimonials</h1>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg font-light leading-relaxed italic">
          "The greatest reward is seeing the confidence in our clients' eyes."
        </p>
        <button 
          onClick={() => setShowForm(!showForm)}
          className="mt-12 btn-luxury bg-slate-900 text-white px-10 py-4 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-gold transition-all duration-500"
        >
          {showForm ? 'Cancel Entry' : 'Share Your Experience'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto mb-24 p-12 bg-white rounded-[40px] shadow-2xl border border-gold/10 animate-fade-up">
          <h3 className="text-2xl font-serif italic mb-8 text-center">Your Story</h3>
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Name</label>
              <input 
                required 
                className="w-full bg-slate-50 px-6 py-4 rounded-2xl border border-transparent focus:border-gold outline-none transition-all"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Rating</label>
              <div className="flex space-x-2 bg-slate-50 p-4 rounded-2xl">
                {[1, 2, 3, 4, 5].map(num => (
                  <button key={num} type="button" onClick={() => setFormData({...formData, rating: num})}>
                    <StarIcon filled={formData.rating >= num} />
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Your Experience</label>
              <textarea 
                required 
                className="w-full bg-slate-50 px-6 py-4 rounded-2xl border border-transparent focus:border-gold outline-none h-32 resize-none transition-all"
                value={formData.comment}
                onChange={(e) => setFormData({...formData, comment: e.target.value})}
              />
            </div>
            <button className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-gold transition-colors">
              Publish Testimonial
            </button>
          </div>
        </form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {reviews.map((review, idx) => (
          <div 
            key={review.id} 
            className="bg-white p-12 rounded-[50px] shadow-xl border border-slate-50 animate-fade-up flex flex-col justify-between group hover:shadow-gold/5 transition-all duration-700"
            style={{animationDelay: `${idx * 0.1}s`}}
          >
            <div>
              <div className="flex space-x-1 mb-8">
                {[1, 2, 3, 4, 5].map(star => (
                  <StarIcon key={star} filled={review.rating >= star} />
                ))}
              </div>
              <p className="text-slate-600 italic font-light leading-loose mb-10 text-lg">
                "{review.comment}"
              </p>
            </div>
            <div className="flex items-center justify-between pt-8 border-t border-slate-50">
              <div>
                <h4 className="font-bold text-slate-900 font-serif">{review.name}</h4>
                <p className="text-[9px] text-slate-400 uppercase tracking-widest mt-1">{review.date}</p>
              </div>
              {review.isVerified && (
                <div className="flex items-center space-x-2 bg-gold/5 px-3 py-1 rounded-full">
                  <span className="text-gold font-bold text-[8px] uppercase tracking-widest">Verified Guest</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
