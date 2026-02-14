
export type ServiceCategory = 'Bridal' | 'Facial' | 'Skin' | 'Makeup' | 'Nails' | 'Threading' | 'Waxing' | 'Hair';

export interface SalonService {
  id: string;
  name: string;
  category: ServiceCategory;
  subCategory?: string;
  description: string;
  price: number;
  duration: string;
  imageUrl: string;
}

export interface Booking {
  id: string;
  clientName: string;
  email: string;
  phone: string;
  serviceId: string;
  serviceName: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  notes?: string;
  createdAt: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  isVerified: boolean;
}

export interface GalleryImage {
  id: string;
  url: string;
  category: string;
  title: string;
}
