export type PropertyStatus = 'available' | 'sold';

export type Property = {
  slug: string;
  href: string;
  title: string;
  status: PropertyStatus;
  statusLabel: string;
  floor: string;
  size: string;
  beds: string;
  baths: string;
  view: string;
  hero: string;
  cardImage: string;
  badge: string;
  hook: string;
};

export const corner: Property = {
  slug: 'luxury-corner-studio',
  href: '/luxury-corner-studio',
  title: 'Luxury Corner Studio',
  status: 'available',
  statusLabel: 'Available',
  floor: '2nd Floor · Corner Unit',
  size: '~550 sqft',
  beds: 'Studio',
  baths: '1 Bath',
  view: 'Sea & Community',
  hero: '/images/studio-2f/01-bedroom-living.jpg',
  cardImage: '/images/studio-2f/01-bedroom-living.jpg',
  badge: 'Available',
  hook: 'Furnished corner studio on the 2nd floor. Twin-balcony exposures, designer interiors, and access to the full Mayan amenity collection.',
};

export const cityView: Property = {
  slug: 'furnished-studio-city-view',
  href: '/furnished-studio-city-view',
  title: 'Furnished Studio with City View',
  status: 'sold',
  statusLabel: 'Sold',
  floor: '5th Floor',
  size: '~550 sqft',
  beds: 'Studio',
  baths: '1 Bath',
  view: 'Community & Sunset',
  hero: '/images/studio-5f/03-balcony-sunset.png',
  cardImage: '/images/studio-5f/03-balcony-sunset.png',
  badge: 'Sold',
  hook: 'A 5th-floor studio with a private balcony framing the Yas Island skyline at sunset. Sold privately.',
};

export const properties: Property[] = [corner, cityView];

export const cornerGallery = [
  { src: '/images/studio-2f/01-bedroom-living.jpg', alt: 'Furnished bedroom and living area with smart TV and artwork', category: 'Interior' },
  { src: '/images/studio-2f/02-living-room.jpg', alt: 'Living area with grey sofa, smart TV and coastal artwork', category: 'Living' },
  { src: '/images/studio-2f/03-dining.jpg', alt: 'Dining area set with chairs and table', category: 'Living' },
  { src: '/images/studio-2f/04-kitchen.jpg', alt: 'Fully-equipped kitchen with oven, washing machine, microwave and coffee maker', category: 'Kitchen' },
  { src: '/images/studio-2f/05-balcony-chairs.jpg', alt: 'Private balcony with chairs and community view', category: 'Balcony' },
  { src: '/images/studio-2f/06-sea-view.jpg', alt: 'Sea view from balcony', category: 'Balcony' },
  { src: '/images/studio-2f/07-balcony-bedroom.jpg', alt: 'Bedroom looking out to balcony and sea', category: 'Balcony' },
  { src: '/images/studio-2f/08-bathroom.jpg', alt: 'Designer bathroom with vessel sink and mosaic tile', category: 'Bathroom' },
  { src: '/images/studio-2f/09-bathroom-amenities.jpg', alt: 'Bathroom with stocked amenities', category: 'Bathroom' },
  { src: '/images/amenities/infinity-pool.jpg', alt: 'Resort infinity pool with beach view', category: 'Amenities' },
  { src: '/images/amenities/beach.jpg', alt: 'Private white-sand beach with turquoise water', category: 'Amenities' },
  { src: '/images/amenities/gym-new.jpg', alt: 'Fully-equipped building gym with Cybex equipment', category: 'Amenities' },
];

export const cityViewGallery = [
  { src: '/images/studio-5f/03-balcony-sunset.png', alt: 'Private balcony at sunset framing the Yas Island skyline', category: 'Balcony' },
  { src: '/images/studio-5f/01-living-kitchen.png', alt: 'Open-plan living and kitchen with floor-to-ceiling windows', category: 'Interior' },
  { src: '/images/studio-5f/04-balcony-wider.png', alt: 'Wider balcony view across the Mayan community', category: 'Balcony' },
  { src: '/images/studio-5f/05-balcony-angle.png', alt: 'Balcony at another angle showing community below', category: 'Balcony' },
  { src: '/images/studio-5f/06-composite.png', alt: 'Composite shot of studio interior and balcony view', category: 'Interior' },
  { src: '/images/studio-5f/02-bathroom.png', alt: 'Designer bathroom with premium fixtures', category: 'Bathroom' },
  { src: '/images/amenities/infinity-pool.jpg', alt: 'Resort infinity pool with beach view', category: 'Amenities' },
  { src: '/images/amenities/beach.jpg', alt: 'Private white-sand beach with turquoise water', category: 'Amenities' },
  { src: '/images/amenities/beach-panoramic.jpg', alt: 'Panoramic beach view with sun loungers', category: 'Amenities' },
  { src: '/images/amenities/gym-new.jpg', alt: 'Fully-equipped building gym with Cybex equipment', category: 'Amenities' },
  { src: '/images/amenities/sauna.jpg', alt: 'Building sauna and steam suite', category: 'Amenities' },
  { src: '/images/amenities/beach-water.jpg', alt: 'Beach with Mayan building behind', category: 'Amenities' },
];

export const monthlyRevenue = [
  { month: 'Apr', value: 9000, peak: false },
  { month: 'May', value: 11000, peak: false },
  { month: 'Jun', value: 8000, peak: false },
  { month: 'Jul', value: 7000, peak: false },
  { month: 'Aug', value: 9000, peak: false },
  { month: 'Sep', value: 7000, peak: false },
  { month: 'Oct', value: 11000, peak: true },
  { month: 'Nov', value: 14000, peak: true },
  { month: 'Dec', value: 23000, peak: true },
  { month: 'Jan', value: 17000, peak: true },
  { month: 'Feb', value: 14000, peak: true },
  { month: 'Mar', value: 2000, peak: false, partial: true },
];

export const revenueStats = {
  totalLabel: 'AED 148,310',
  reservations: 167,
  occupancy: 69,
  averageMonthlyLabel: 'AED 12,359',
  peakMonthlyLabel: 'AED 23,000',
};

export const whatsappPhone = '971547026170';
export const whatsappDisplay = '+971 54 702 6170';
export const whatsappMessage = "Hi%2C%20I'm%20interested%20in%20the%20Luxury%20Corner%20Studio%20at%20Mayan%202%2C%20Yas%20Island.%20Is%20it%20still%20available%3F";
export const whatsappURL = `https://wa.me/${whatsappPhone}?text=${whatsappMessage}`;
