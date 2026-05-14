export type Property = {
  slug: string;
  title: string;
  shortTitle: string;
  status: 'active' | 'coming-soon';
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
    slug: 'mayan-studio-a',
    title: 'Skyline View Studio · Mayan 2',
    shortTitle: 'Skyline View Studio',
    status: 'active',
    statusLabel: 'Vacant Now',
    floor: '5th Floor',
    size: '550 sqft',
    beds: 'Studio',
    baths: '1 Bath',
    view: 'Community & Sunset',
    hero: '/images/studio-a/01-balcony-sunset.webp',
    thumb: '/images/studio-a/02-living-area.webp',
    hook: 'A refined studio residence with private balcony, sunset views, and full access to Mayan’s resort-grade amenities.',
  },
  {
    slug: 'mayan-studio-b',
    title: 'Corner Unit Studio · Mayan 2',
    shortTitle: 'Corner Unit Studio',
    status: 'coming-soon',
    statusLabel: 'Coming Soon',
    floor: '2nd Floor',
    size: '550 sqft',
    beds: 'Studio',
    baths: '1 Bath',
    view: 'Courtyard',
    hero: '/images/location/mayan-exterior.jpeg',
    thumb: '/images/location/mayan-exterior.jpeg',
    hook: 'A bright corner-unit studio on the second floor — joining the portfolio later this year. Register for early access.',
  },
];

export const studioAGallery = [
  { src: '/images/studio-a/01-balcony-sunset.webp', alt: 'Private balcony with sunset view over Yas Island', category: 'Balcony' },
  { src: '/images/studio-a/09-balcony-panoramic.webp', alt: 'Panoramic view from the balcony', category: 'Balcony' },
  { src: '/images/studio-a/02-living-area.webp', alt: 'Open-plan living area', category: 'Living' },
  { src: '/images/studio-a/03-kitchen-1.webp', alt: 'Kitchen with built-in cabinets', category: 'Kitchen' },
  { src: '/images/studio-a/04-kitchen-2.webp', alt: 'Kitchen detail', category: 'Kitchen' },
  { src: '/images/studio-a/05-kitchen-3.webp', alt: 'Kitchen with appliances', category: 'Kitchen' },
  { src: '/images/studio-a/08-wardrobe.webp', alt: 'Built-in wardrobe in sleeping area', category: 'Sleeping' },
  { src: '/images/studio-a/06-bathroom-vanity.webp', alt: 'Bathroom vanity', category: 'Bathroom' },
  { src: '/images/studio-a/07-shower.webp', alt: 'Glass shower enclosure', category: 'Bathroom' },
  { src: '/images/amenities/rooftop-pool.webp', alt: 'Rooftop swimming pool', category: 'Amenities' },
  { src: '/images/amenities/gym.webp', alt: 'Fully-equipped building gym', category: 'Amenities' },
  { src: '/images/amenities/kids-splash.jpeg', alt: 'Children’s splash area', category: 'Amenities' },
  { src: '/images/location/al-marasy-marina.jpeg', alt: 'Al Marasy Marina promenade', category: 'Neighbourhood' },
  { src: '/images/location/yas-bay-restaurants.jpeg', alt: 'Yas Bay waterfront restaurants', category: 'Neighbourhood' },
  { src: '/images/location/mayan-exterior.jpeg', alt: 'Mayan towers from the sea', category: 'Building' },
];
