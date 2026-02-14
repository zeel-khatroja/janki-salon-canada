
import { Booking, SalonService, Review } from '../types';

const BOOKINGS_KEY = 'glf_bookings';
const SERVICES_KEY = 'glf_services';
const REVIEWS_KEY = 'glf_reviews';

const DEFAULT_REVIEWS: Review[] = [
  { id: 'r1', name: 'Sophia Montgomery', rating: 5, comment: 'The precision threading is unlike anything else in Ottawa. Truly a master at work.', date: new Date().toLocaleDateString(), isVerified: true },
  { id: 'r2', name: 'Isabella Chen', rating: 5, comment: 'My bridal glow was perfect thanks to the 24K Gold Skin Infusion. Janki is a magician!', date: new Date().toLocaleDateString(), isVerified: true }
];

export const storageService = {
  getBookings: (): Booking[] => {
    const data = localStorage.getItem(BOOKINGS_KEY);
    return data ? JSON.parse(data) : [];
  },

  addBooking: (booking: Booking): void => {
    const bookings = storageService.getBookings();
    bookings.push(booking);
    localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings));
  },

  updateBookingStatus: (id: string, status: Booking['status']): void => {
    const bookings = storageService.getBookings();
    const updated = bookings.map(b => b.id === id ? { ...b, status } : b);
    localStorage.setItem(BOOKINGS_KEY, JSON.stringify(updated));
  },

  getServices: (initialServices: SalonService[]): SalonService[] => {
    const data = localStorage.getItem(SERVICES_KEY);
    if (!data) {
      localStorage.setItem(SERVICES_KEY, JSON.stringify(initialServices));
      return initialServices;
    }
    return JSON.parse(data);
  },

  saveServices: (services: SalonService[]): void => {
    localStorage.setItem(SERVICES_KEY, JSON.stringify(services));
  },

  getReviews: (): Review[] => {
    const data = localStorage.getItem(REVIEWS_KEY);
    if (!data) {
      localStorage.setItem(REVIEWS_KEY, JSON.stringify(DEFAULT_REVIEWS));
      return DEFAULT_REVIEWS;
    }
    return JSON.parse(data);
  },

  addReview: (review: Review): void => {
    const reviews = storageService.getReviews();
    reviews.unshift(review);
    localStorage.setItem(REVIEWS_KEY, JSON.stringify(reviews));
  },

  deleteReview: (id: string): void => {
    const reviews = storageService.getReviews();
    const updated = reviews.filter(r => r.id !== id);
    localStorage.setItem(REVIEWS_KEY, JSON.stringify(updated));
  }
};
