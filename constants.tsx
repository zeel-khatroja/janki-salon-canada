
import { SalonService, GalleryImage } from './types';

export const INITIAL_SERVICES: SalonService[] = [
  // ==========================================
  // 👰 BRIDAL ATELIER (Complete Packages)
  // ==========================================
  { id: 'bp-1', name: 'Basic Bridal Package (Makeup + Hair)', category: 'Bridal', subCategory: 'Complete Packages', description: 'Essential wedding day look featuring HD Makeup and one signature hairstyle.', price: 450, duration: '4 Hours', imageUrl: 'https://images.unsplash.com/photo-1594465919760-441fe5908ab0?q=80&w=800' },
  { id: 'bp-2', name: 'Premium Bridal Package', category: 'Bridal', subCategory: 'Complete Packages', description: 'Bridal Makeup, Hair, Pre-wedding Facial, and Intricate Mehendi support.', price: 850, duration: '6 Hours', imageUrl: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800' },
  { id: 'bp-3', name: 'Luxury Bridal Care (Full Journey)', category: 'Bridal', subCategory: 'Complete Packages', description: 'Head-to-toe treatment including all pre-bridal services and the big day glam.', price: 1500, duration: 'Multiple Days', imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800' },
  { id: 'bp-4', name: 'Destination Bridal Package', category: 'Bridal', subCategory: 'Complete Packages', description: 'Travel-ready elite services on-location anywhere in Canada.', price: 2000, duration: 'Custom', imageUrl: 'https://images.unsplash.com/photo-1519415510271-e62b4d75d8dc?q=80&w=800' },

  // --- Bridal Makeup ---
  { id: 'bm-1', name: 'Wedding Day Signature Makeup', category: 'Bridal', subCategory: 'Bridal Makeup', description: 'Waterproof, high-definition makeup designed for all-day radiance.', price: 350, duration: '150 Mins', imageUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800' },
  { id: 'bm-2', name: 'Engagement Glam', category: 'Bridal', subCategory: 'Bridal Makeup', description: 'Sophisticated dewy look for your first celebration.', price: 250, duration: '120 Mins', imageUrl: 'https://images.unsplash.com/photo-1522337660859-02fbefce4ffc?q=80&w=800' },
  { id: 'bm-3', name: 'Reception Gala Look', category: 'Bridal', subCategory: 'Bridal Makeup', description: 'Dramatic, shimmering evening makeup with luxury lashes.', price: 300, duration: '120 Mins', imageUrl: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800' },
  { id: 'bm-4', name: 'Haldi / Mehendi Fresh Look', category: 'Bridal', subCategory: 'Bridal Makeup', description: 'Natural, lightweight, and waterproof for daytime rituals.', price: 180, duration: '90 Mins', imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800' },
  { id: 'bm-5', name: 'Sangeet Party Makeup', category: 'Bridal', subCategory: 'Bridal Makeup', description: 'Vibrant, long-wear makeup that stays perfect through the dancing.', price: 220, duration: '100 Mins', imageUrl: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=800' },
  { id: 'bm-6', name: 'Bridesmaid Elite Glam', category: 'Bridal', subCategory: 'Bridal Makeup', description: 'Coordinated elegant look for the bridal party.', price: 150, duration: '60 Mins', imageUrl: 'https://images.unsplash.com/photo-1560869713-7d0a29430863?q=80&w=800' },

  // --- Bridal Hair ---
  { id: 'bh-1', name: 'Traditional Bridal Bun', category: 'Bridal', subCategory: 'Bridal Hairstyling', description: 'Classic updo with heavy dupatta and jewelry setting.', price: 150, duration: '90 Mins', imageUrl: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800' },
  { id: 'bh-2', name: 'Open Hair with Luxury Curls', category: 'Bridal', subCategory: 'Bridal Hairstyling', description: 'Soft, romantic waves or tight curls with floral accents.', price: 120, duration: '75 Mins', imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800' },
  { id: 'bh-3', name: 'Traditional Gujarati Hairstyle', category: 'Bridal', subCategory: 'Bridal Hairstyling', description: 'Cultural bun styling with specific jewelry placements.', price: 160, duration: '100 Mins', imageUrl: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=800' },
  { id: 'bh-4', name: 'Punjabi Bridal Braid', category: 'Bridal', subCategory: 'Bridal Hairstyling', description: 'Intricate long braid with paranda and floral jewelry.', price: 140, duration: '90 Mins', imageUrl: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800' },

  // ==========================================
  // 💆‍♀️ FACIAL SERVICES
  // ==========================================
  { id: 'fb-1', name: '24K Gold Luxury Facial', category: 'Facial', subCategory: 'Basic Facials', description: 'Pure gold leaves for an instant royal brightening effect.', price: 175, duration: '90 Mins', imageUrl: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800' },
  { id: 'fb-2', name: 'Pearl Whitening Facial', category: 'Facial', subCategory: 'Basic Facials', description: 'Real crushed pearls for a flawless, milky complexion.', price: 145, duration: '75 Mins', imageUrl: 'https://images.unsplash.com/photo-1590159746766-7af3fd87b7af?q=80&w=800' },
  { id: 'fs-1', name: 'Oxygen Infusion Therapy', category: 'Facial', subCategory: 'Specialty Facials', description: 'Medical grade oxygen to rejuvenate tired, dull skin.', price: 210, duration: '60 Mins', imageUrl: 'https://images.unsplash.com/photo-1570172619390-4bb96b8d99f8?q=80&w=800' },
  { id: 'fs-2', name: 'LED Light Therapy Facial', category: 'Facial', subCategory: 'Specialty Facials', description: 'NASA technology targeting acne and anti-aging.', price: 225, duration: '90 Mins', imageUrl: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800' },
  { id: 'ft-1', name: 'Traditional Bridal Ubtan', category: 'Facial', subCategory: 'Traditional Facials', description: 'Turmeric, sandalwood, and herbal scrub for pre-wedding glow.', price: 130, duration: '60 Mins', imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800' },

  // ==========================================
  // ✨ SKIN THERAPY
  // ==========================================
  { id: 'sk-1', name: 'Microdermabrasion Polish', category: 'Skin', subCategory: 'Basic Skin', description: 'Diamond-tip exfoliation for velvet texture.', price: 140, duration: '60 Mins', imageUrl: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=800' },
  { id: 'sk-2', name: 'Advanced Dermaplaning', category: 'Skin', subCategory: 'Basic Skin', description: 'Removal of dead skin and vellus hair for ultimate smoothness.', price: 110, duration: '45 Mins', imageUrl: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800' },
  { id: 'ska-1', name: 'Pigmentation Reduction Peel', category: 'Skin', subCategory: 'Advanced Skin', description: 'Targeting dark spots and uneven skin tone.', price: 195, duration: '60 Mins', imageUrl: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800' },
  { id: 'ska-2', name: 'Under-Eye Dark Circle Therapy', category: 'Skin', subCategory: 'Special Skin Care', description: 'Cooling infusion to reduce puffiness and darkness.', price: 95, duration: '40 Mins', imageUrl: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800' },
  { id: 'skb-1', name: 'Full Body Luxury Whitening', category: 'Skin', subCategory: 'Body Skin', description: 'Scrub and hydration for the entire body.', price: 250, duration: '120 Mins', imageUrl: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800' },

  // ==========================================
  // 💄 MAKEUP SERVICES
  // ==========================================
  { id: 'mk-1', name: 'Airbrush Red Carpet Glam', category: 'Makeup', subCategory: 'Professional Makeup', description: 'Flawless, sweat-proof, and lightweight coverage.', price: 185, duration: '90 Mins', imageUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800' },
  { id: 'mk-2', name: 'Traditional Festival Look', category: 'Makeup', subCategory: 'Occasion Makeup', description: 'Navratri/Diwali special vibrant makeup.', price: 140, duration: '75 Mins', imageUrl: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800' },
  { id: 'mk-3', name: 'Natural Subtle Glam', category: 'Makeup', subCategory: 'Casual Makeup', description: 'Enhance your features with a lightweight look.', price: 90, duration: '45 Mins', imageUrl: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800' },

  // ==========================================
  // 💅 NAIL BOUTIQUE
  // ==========================================
  { id: 'nl-1', name: 'Luxury Spa Gel Manicure', category: 'Nails', subCategory: 'Manicure', description: 'Exfoliation, massage, and 3-week gel polish.', price: 70, duration: '60 Mins', imageUrl: 'https://images.unsplash.com/photo-1604654894610-df490c81726a?q=80&w=800' },
  { id: 'nl-2', name: 'Chocolate Pedicure', category: 'Nails', subCategory: 'Pedicure', description: 'Relaxing cocoa soak for tired feet.', price: 85, duration: '75 Mins', imageUrl: 'https://images.unsplash.com/photo-1519415510271-e62b4d75d8dc?q=80&w=800' },
  { id: 'nl-3', name: '3D Bridal Nail Art', category: 'Nails', subCategory: 'Nail Art', description: 'Sculpted gems and floral designs for brides.', price: 120, duration: '120 Mins', imageUrl: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=800' },

  // ==========================================
  // 💇‍♀️ HAIR SERVICES
  // ==========================================
  { id: 'hr-1', name: 'Designer Haircut & Blow-dry', category: 'Hair', subCategory: 'Hair Cutting', description: 'Face-shaping cut with premium finish.', price: 85, duration: '60 Mins', imageUrl: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800' },
  { id: 'hr-2', name: 'Keratin Smoothing Therapy', category: 'Hair', subCategory: 'Hair Smoothing', description: 'Frizz-free shine for up to 4 months.', price: 280, duration: '180 Mins', imageUrl: 'https://images.unsplash.com/photo-1492162300535-c2d96ae24ec0?q=80&w=800' },
  { id: 'hr-3', name: 'Signature Hair Color/Highlights', category: 'Hair', subCategory: 'Hair Coloring', description: 'Luxury balayage or full color transformation.', price: 250, duration: '150 Mins', imageUrl: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800' },

  // ==========================================
  // 👁️ THREADING & WAXING
  // ==========================================
  { id: 'th-1', name: 'Precision Eyebrow Shaping', category: 'Threading', subCategory: 'Threading', description: 'The perfect arch mapping and threading.', price: 25, duration: '15 Mins', imageUrl: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800' },
  { id: 'wx-1', name: 'Full Body Silk Wax', category: 'Waxing', subCategory: 'Waxing', description: 'Hypoallergenic soft/hard wax for smooth skin.', price: 240, duration: '150 Mins', imageUrl: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?q=80&w=800' }
];

export const SERVICES = INITIAL_SERVICES;

export const GALLERY: GalleryImage[] = [
  { id: 'g1', url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200', category: 'Salon', title: 'Luxury Reception' },
  { id: 'g2', url: 'https://images.unsplash.com/photo-1594465919760-441fe5908ab0?q=80&w=1200', category: 'Bridal', title: 'Bridal Artistry' },
  { id: 'g3', url: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1200', category: 'Facial', title: 'Gold Facial Results' },
  { id: 'g4', url: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=1200', category: 'Nails', title: 'Nail Art' },
  { id: 'g5', url: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1200', category: 'Before & After', title: 'Skin Glow Up' },
  { id: 'g6', url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1200', category: 'Hair', title: 'Transformation Cut' }
];

export const OWNER_INFO = {
  name: 'Janki Khatroja',
  salonName: 'GirlLookedFor You',
  role: 'Master Artist & Founder',
  bio: 'A visionary in Ottawa\'s beauty scene, Janki combines decade-long technical expertise with a refined luxury aesthetic.',
  experience: '10+ Years',
  location: 'Ottawa, Ontario',
  instagram: 'https://www.instagram.com/girllookedfor_you',
  contact: {
    email: 'hello@girllookedforyou.com',
    phone: '+1 (613) 555-0123',
    address: '123 Elite Circle, Ottawa, ON K1P 5L1'
  },
  photo: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200'
};
