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
    hook: 'A turnkey, fully furnished corner studio on the 2nd floor — 8.5★ on Booking.com, with sea-view balcony and access to the full Mayan amenity collection.',
  },
  {
    slug: 'coming-soon',
    title: 'New Listing · Coming Soon',
    shortTitle: 'New Listing Coming Soon',
    status: 'coming-soon',
    statusLabel: 'Coming Soon',
    floor: 'To be announced',
    size: '~550 sqft',
    beds: 'Studio',
    baths: '1 Bath',
    view: 'TBA',
    hero: '/images/amenities/beach-panoramic.jpg',
    thumb: '/images/amenities/beach-panoramic.jpg',
    hook: 'A second residence will join the portfolio later this year. Register interest for early access.',
  },
];

export const studio2Gallery = [
  { src: '/images/studio-2f/01-bedroom-living.jpg', alt: 'Furnished bedroom and living area with smart TV and artwork', category: 'Interior' },
  { src: '/images/studio-2f/02-living-room.jpg', alt: 'Living area with grey sofa, smart TV and coastal artwork', category: 'Living' },
  { src: '/images/studio-2f/03-dining.jpg', alt: 'Dining area set with chairs and table', category: 'Living' },
  { src: '/images/studio-2f/04-kitchen.jpg', alt: 'Fully-equipped kitchen with oven, washing machine, microwave and coffee maker', category: 'Kitchen' },
  { src: '/images/studio-2f/05-balcony-chairs.jpg', alt: 'Private balcony with colourful chairs and community view', category: 'Balcony' },
  { src: '/images/studio-2f/06-sea-view.jpg', alt: 'Balcony view of the sea and Yas Island towers', category: 'Balcony' },
  { src: '/images/studio-2f/07-balcony-bedroom.jpg', alt: 'Balcony looking into the bedroom', category: 'Balcony' },
  { src: '/images/studio-2f/08-bathroom.jpg', alt: 'Designer bathroom with vessel sink and mosaic tile', category: 'Bathroom' },
  { src: '/images/studio-2f/09-bathroom-amenities.jpg', alt: 'Premium bathroom amenities', category: 'Bathroom' },
  { src: '/images/amenities/infinity-pool.jpg', alt: 'Resort infinity pool with beach view', category: 'Amenities' },
  { src: '/images/amenities/beach.jpg', alt: 'Private white-sand beach with turquoise water', category: 'Amenities' },
  { src: '/images/amenities/beach-panoramic.jpg', alt: 'Panoramic beach view with sun loungers', category: 'Amenities' },
  { src: '/images/amenities/gym-new.jpg', alt: 'Fully-equipped building gym', category: 'Amenities' },
  { src: '/images/amenities/sauna.jpg', alt: 'Building sauna', category: 'Amenities' },
];
