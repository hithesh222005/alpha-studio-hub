import { FAQItem, ReviewItem, EstimateItem } from '../types';
import studioBannerImg from '../assets/images/studio_hub_banner_1786089404340.jpg';

const ownerPortraitUrl = "/owner.jpg.png";

export const SHOP_INFO = {
  name: 'Alpha Studio Hub',
  tagline: 'Your One-Stop Digital & Print Service Hub',
  subTagline: 'Professional Xerox, Instant Passport Photos, Govt e-Services, Bill Payments & Travel Ticket Bookings under one roof.',
  phone: '7867076197',
  formattedPhone: '+91 78670 76197',
  whatsappNumber: '917867076197',
  whatsappUrl: 'https://wa.me/917867076197?text=Hello%20Alpha%20Studio%20Hub,%20I%20would%20like%20to%20inquire%20about%20your%20services.',
  email: 'alphastudiohub.sta@gmail.com',
  instagramHandle: '@alpha_studio_hub',
  instagramUrl: 'https://instagram.com/alpha_studio_hub',
  googleMapsUrl: 'https://www.google.com/maps/place/Alpha+Studio+hub/@13.3649567,80.19123,17z/data=!3m1!4b1!4m6!3m5!1s0x3a4d81aad2c5faa9:0x3f249bfb756c2cc8!8m2!3d13.3649567!4d80.19123!16s%2Fg%2F11z9j58n9_?entry=ttu',
  embedMapUrl: 'https://maps.google.com/maps?q=13.3649567,80.19123&z=17&output=embed',
  address: 'Alpha Studio Hub, Main Road, Near Bus Stop, Ponneri / Thiruvallur Region, Thiruvallur, Tamil Nadu',
  hours: [
    { days: 'Monday - Saturday', time: '8:30 AM - 9:30 PM' },
    { days: 'Sunday', time: '9:00 AM - 2:00 PM (Half Day)' },
  ],
  owner: {
    name: 'SUMANKUMAR.S',
    title: 'Founder & Managing Director',
    experience: '7+ Years Experience in Digital Printing & e-Gov Services',
    photoUrl: "/owner.jpg.png",
    quote: "At Alpha Studio Hub, every document, photo, and government application is handled with utmost precision, speed, and genuine respect for your time. Your satisfaction is my personal guarantee.",
    bio: "Hi, I'm Sumankumar S, founder and owner of Alpha Studio Hub! I started this center with a single promise: to give our local community a modern, dependable, and hassle-free destination for all digital, document, photo, and e-governance needs. Whether you need urgent passport photos for an interview, error-free PAN/Aadhaar applications, or high-speed printing for college projects, my team and I are always here to guide you step-by-step."
  },
  images: {
    heroBanner: studioBannerImg,
    ownerPortrait: ownerPortraitUrl,
  }
};

export const REVIEWS: ReviewItem[] = [
  {
    id: 'r1',
    name: 'Karthik Subramanian',
    role: 'Local Resident & Teacher',
    rating: 5,
    comment: 'The owner is extremely polite, quick, and knowledgeable! Got 16 passport photos printed in less than 7 minutes with fantastic color accuracy. Highly recommended!',
    date: '2 days ago'
  },
  {
    id: 'r2',
    name: 'Anitha Ramesh',
    role: 'College Student',
    rating: 5,
    comment: 'Best Xerox and Spiral binding spot in town! Very affordable pricing for student project prints. You can also send PDFs directly via WhatsApp and collect when ready.',
    date: '1 week ago'
  },
  {
    id: 'r3',
    name: 'Venkatesh Kumar',
    role: 'Business Owner',
    rating: 5,
    comment: 'Applied for PAN card correction and 2-wheeler insurance here. Everything was done cleanly without any mistakes. Trustworthy e-Sevai shop!',
    date: '2 weeks ago'
  },
  {
    id: 'r4',
    name: 'Priya Sundar',
    role: 'Parent',
    rating: 5,
    comment: 'Got my daughter’s school book lamination and stationery items here. Very neat work, spacious shop, and prompt response on phone call.',
    date: '1 month ago'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'Can I send documents via WhatsApp or Email for printing before visiting?',
    answer: 'Yes, absolutely! You can send your PDFs, images, or documents to our official WhatsApp number (7867076197) or email. Mention your page count and B&W/Color preference, and we will keep your printouts ready to collect!'
  },
  {
    question: 'How fast can I get Passport Size Photos printed?',
    answer: 'Our instant studio photo printing takes just 5 to 10 minutes! We also edit backgrounds, adjust brightness/contrast, and apply formal attire if requested for official visa or exam applications.'
  },
  {
    question: 'What government (TNeGA / e-Sevai) certificates can I apply for here?',
    answer: 'We assist with Community Certificate, Income Certificate, First Graduate, Nativity Certificate, Legal Heir, Voter ID (New/Correction), PAN Card, PVC Aadhaar Cards, and Driving Licence slot bookings.'
  },
  {
    question: 'Do you book bus, train, and flight tickets with instant printouts?',
    answer: 'Yes! We book IRCTC train tickets, sleeper/AC private bus tickets, and flight tickets. We provide instant printed tickets and send PDF confirmation straight to your mobile.'
  },
  {
    question: 'What are your shop working hours?',
    answer: 'We are open Monday through Saturday from 8:30 AM to 9:30 PM, and on Sundays from 9:00 AM to 2:00 PM. Emergency printing calls are also welcomed!'
  }
];

export const ESTIMATOR_ITEMS: EstimateItem[] = [
  { id: 'bw-print', name: 'Black & White Printout / Xerox (A4)', unitPrice: 2, unit: 'page' },
  { id: 'color-print', name: 'Color Printout (A4)', unitPrice: 10, unit: 'page' },
  { id: 'passport-photo-8', name: 'Passport Photos (8 Copies)', unitPrice: 50, unit: 'set' },
  { id: 'spiral-binding', name: 'Spiral Binding (Up to 100 pgs)', unitPrice: 30, unit: 'book' },
  { id: 'lamination', name: 'A4 Document Lamination', unitPrice: 20, unit: 'sheet' },
  { id: 'pvc-card', name: 'PVC Smart ID Card Print', unitPrice: 60, unit: 'card' },
];
