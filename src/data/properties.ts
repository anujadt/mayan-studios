export type Property = {
  slug: string;
  title: string;
  shortTitle: string;
  status: 'active' | 'off-market';
  statusLabel: string;
  floor: string;
  size: string;
  beds: string;
  baths: string;
  view: string;
  hero: string;
  thumb: string;
  hook: string;
};

export const properties: Property[] = [
  {
    slug: 'studio-corner-2f',
    title: 'Furnished Corner Studio · Mayan 2',
    shortTitle: 'Furnished Corner Studio',
    status: 'active',
    statusLabel: 'For Sale · Furnished',
    floor: '2nd Floor · Corner Unit',
    size: '~550 sqft',
    beds: 'Studio',
    baths: '1 Bath',
    view: 'Sea & Community',
    hero: '/images/studio-2f/01-bedroom-living.jpg',
    thumb: '/images/studio-2f/02-living-room.jpg',
    hook: 'A turnkey, fully furnished corner studio on the 2nd floor — 8.5★ on Booking.com, AED 148K annual revenue, sea-view balcony and access to the full Mayan amenity collection.',
  },
];

export const studio2Gallery = [
  { src: '/images/studio-2f/01-bedroom-living.jpg', alt: 'Furnished bedroom and living area with smart TV and artwork', category: 'Interior' },
  { src: '/images/studio-2f/02-living-room.jpg', alt: 'Living area with grey sofa, smart TV and coastal artwork', category: 'Living' },
  { src: '/images/studio-2f/03-dining.jpg', alt: 'Dining area set with chairs and table', category: 'Living' },
  { src: '/images/studio-2f/04-kitchen.jpg', alt: 'Fully-equipped kitchen with oven, washing machine, microwave and coffee maker', category: 'Kitchen' },
  { src: '/images/studio-2f/05-balcony-chairs.jpg', alt: 'Private balcony with chairs and community view', category: 'Balcony' },
  { src: '/images/studio-2f/08-bathroom.jpg', alt: 'Designer bathroom with vessel sink and mosaic tile', category: 'Bathroom' },
  { src: '/images/amenities/infinity-pool.jpg', alt: 'Resort infinity pool with beach view', category: 'Amenities' },
  { src: '/images/amenities/beach.jpg', alt: 'Private white-sand beach with turquoise water', category: 'Amenities' },
  { src: '/images/amenities/beach-water.jpg', alt: 'Mayan 2 beachfront with water sports', category: 'Amenities' },
  { src: '/images/amenities/gym-new.jpg', alt: 'Fully-equipped building gym with Cybex equipment', category: 'Amenities' },
  { src: '/images/amenities/sauna.jpg', alt: 'Building sauna and steam suite', category: 'Amenities' },
  { src: '/images/studio-2f/06-sea-view.jpg', alt: 'Sea view from balcony', category: 'Balcony' },
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
  total: 132000,
  totalLabel: 'AED 132,000',
  annualised: 148310,
  annualisedLabel: 'AED 148,310',
  reservations: 167,
  occupancy: 69,
  guestRating: 4.51,
  bookingRating: 8.5,
  averageMonthly: 12359,
  averageMonthlyLabel: 'AED 12,359',
  peakMonthly: 23000,
  peakMonthlyLabel: 'AED 23,000',
};

export const comparison = [
  { feature: 'Status', sold: 'No longer available', available: 'Available now', highlight: true },
  { feature: 'Layout', sold: 'Standard', available: 'Corner unit · more light', highlight: true },
  { feature: 'Furnishing', sold: 'Unfurnished', available: 'Fully furnished', highlight: true },
  { feature: 'Booking.com', sold: 'Not listed', available: '★ 8.5 rated', highlight: true },
  { feature: 'Proven revenue', sold: '—', available: 'AED 148K annual', highlight: true },
  { feature: 'Occupancy', sold: '—', available: '69% booking rate', highlight: true },
  { feature: 'Move-in ready', sold: 'Requires fit-out', available: 'Turnkey', highlight: true },
];

export const whatsappMessage = "Hi%2C%20I'm%20interested%20in%20the%20Mayan%202%20corner%20studio%20on%20Yas%20Island.%20Is%20it%20still%20available%3F";
export const whatsappURL = `https://wa.me/971547026170?text=${whatsappMessage}`;
