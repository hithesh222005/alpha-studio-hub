import { ServiceItem, ServiceCategory } from '../types';

export const CATEGORIES: { key: ServiceCategory; label: string; icon: string }[] = [
  { key: 'all', label: 'All Services', icon: 'Grid' },
  { key: 'printing', label: 'Printing & Documents', icon: 'Printer' },
  { key: 'government', label: 'Government e-Services', icon: 'FileCheck' },
  { key: 'payments', label: 'Recharge & Financial', icon: 'CreditCard' },
  { key: 'travel', label: 'Travel Ticket Booking', icon: 'Ticket' },
  { key: 'stationery', label: 'Stationery Store', icon: 'PenTool' },
];

export const SERVICES_DATA: ServiceItem[] = [
  // Printing & Documents
  {
    id: 'passport-photo',
    title: 'Passport Size Photo',
    category: 'printing',
    categoryLabel: 'Printing & Documents',
    description: 'Instant studio quality passport photos with background removal, suit editing, and standard 8/16/32 copy sheets.',
    iconName: 'Camera',
    popular: true,
    estTime: '5-10 mins',
    startingPrice: '₹50 for 8 copies',
    highlights: ['Instant Photo Print', 'Background Color Change', 'Official Visa & Govt Specs']
  },
  {
    id: 'printout-bw-color',
    title: 'Printout B&W & Color',
    category: 'printing',
    categoryLabel: 'Printing & Documents',
    description: 'High-speed high-resolution monochrome and vivid color document printouts from PDF, Word, Email, or WhatsApp.',
    iconName: 'Printer',
    popular: true,
    estTime: 'Instant',
    startingPrice: '₹2 / page',
    highlights: ['High-GSM Paper', 'Duplex (Both sides)', 'Bulk Student Rates']
  },
  {
    id: 'spiral-binding',
    title: 'Spiral Binding & Book Binding',
    category: 'printing',
    categoryLabel: 'Printing & Documents',
    description: 'Neat durable spiral binding with transparent front cover, hard cover book binding for project reports & records.',
    iconName: 'BookOpen',
    estTime: '15-20 mins',
    startingPrice: '₹30 / book',
    highlights: ['Transparent Protective Covers', 'Heavy Duty Rings', 'College Project Formatting']
  },
  {
    id: 'lamination-scanning',
    title: 'Lamination & HD Scanning',
    category: 'printing',
    categoryLabel: 'Printing & Documents',
    description: 'Heat sealed pouch lamination for certificates & IDs. High-definition color scanning to PDF / JPG.',
    iconName: 'Layers',
    estTime: 'Instant',
    startingPrice: '₹10 / document',
    highlights: ['Waterproof Lamination', 'High DPI Scan', 'Direct Email / WhatsApp Transfer']
  },
  {
    id: 'photo-design',
    title: 'Photo Editing & Custom Design',
    category: 'printing',
    categoryLabel: 'Printing & Documents',
    description: 'Professional portrait retouches, banner layout designs, greeting cards, invitation cards, and custom collage creation.',
    iconName: 'Palette',
    estTime: '30-45 mins',
    startingPrice: '₹100 onwards',
    highlights: ['Custom Typography', 'Flex Banner Design', 'Invitation Cards']
  },
  {
    id: 'photo-frame',
    title: 'Custom Photo Framing',
    category: 'printing',
    categoryLabel: 'Printing & Documents',
    description: 'Premium wooden, synthetic, and glass photo frames in standard (4x6, 8x10, 12x18) and custom gift sizes.',
    iconName: 'Image',
    estTime: 'Same Day',
    startingPrice: '₹150 onwards',
    highlights: ['Glass & Acrylic Framing', 'Gift Wraps Available', 'Matt Finish Prints']
  },

  // Recharge & Payments
  {
    id: 'mobile-dth-recharge',
    title: 'Mobile & DTH Recharge',
    category: 'payments',
    categoryLabel: 'Recharge & Payments',
    description: 'Instant prepaid recharges, postpaid bill payments, DTH top-ups for Airtel, Jio, Vi, Tata Play, Sun Direct, Dish TV.',
    iconName: 'Smartphone',
    popular: true,
    estTime: 'Instant',
    highlights: ['Best Plan Guidance', 'Zero Hidden Fees', 'Instant Confirmation Receipt']
  },
  {
    id: 'online-transactions',
    title: 'Online Money Transfer & Payments',
    category: 'payments',
    categoryLabel: 'Recharge & Payments',
    description: 'Safe IMPS / NEFT money transfers to any Indian bank, electricity bill, water bill, and credit card bill payments.',
    iconName: 'Send',
    popular: true,
    estTime: 'Instant',
    highlights: ['All Bank Accounts Supported', 'Printed Payment Receipts', 'Secure Verification']
  },
  {
    id: 'pf-oap-amount',
    title: 'PF Withdrawal & OAP Pension Service',
    category: 'payments',
    categoryLabel: 'Recharge & Payments',
    description: 'PF / EPFO balance checking, online PF claim submission, and Old Age Pension (OAP) status checking & application.',
    iconName: 'Wallet',
    estTime: 'Same Day',
    highlights: ['EPFO UAN Activation', 'KYC Update Assistance', 'Claim Status Tracking']
  },

  // Government Services
  {
    id: 'tnega-services',
    title: 'TNeGA (e-Sevai) Services',
    category: 'government',
    categoryLabel: 'Government Services',
    description: 'Official Tamil Nadu e-Governance application filing for Income, Community, Nativity, First Graduate & Legal Heir certificates.',
    iconName: 'Landmark',
    popular: true,
    estTime: 'Fast Processing',
    highlights: ['Official e-Sevai Registration', 'Document Upload Assistance', 'SMS Status Updates']
  },
  {
    id: 'voter-id-apply',
    title: 'Voter ID Application & Correction',
    category: 'government',
    categoryLabel: 'Government Services',
    description: 'New Voter ID card registration, address/name correction, epic card download, and electoral roll status search.',
    iconName: 'CheckSquare',
    estTime: '15 mins',
    highlights: ['Form 6 / Form 8 Filing', 'E-EPIC Card Printing', 'Address Shift Correction']
  },
  {
    id: 'pan-card-apply',
    title: 'PAN Card New & Correction',
    category: 'government',
    categoryLabel: 'Government Services',
    description: 'Instant e-PAN generation via Aadhaar OTP or physical PAN card application with physical delivery to your doorstep.',
    iconName: 'CreditCard',
    popular: true,
    estTime: 'Instant e-PAN',
    highlights: ['NDSL & UTIITSL Authorized', 'Minor & Adult PAN', 'Correction & Re-print']
  },
  {
    id: 'aadhar-service',
    title: 'Aadhaar Card Download & Print',
    category: 'government',
    categoryLabel: 'Government Services',
    description: 'Official e-Aadhaar download, address update appointment booking, PVC smart Aadhaar card printing with QR code.',
    iconName: 'Fingerprint',
    popular: true,
    estTime: 'Instant Print',
    highlights: ['High Quality PVC Card', 'UIDAI Verified Print', 'Demographic Update Guidance']
  },
  {
    id: 'driving-licence-apply',
    title: '2-Wheeler & 4-Wheeler Licence Apply',
    category: 'government',
    categoryLabel: 'Government Services',
    description: 'Learner’s Licence (LLR) online test slot booking, permanent Driving Licence application, and RC renewal guidance.',
    iconName: 'Car',
    estTime: 'Same Day Filing',
    highlights: ['LLR Online Exam Prep', 'Slot Booking Choice', 'DL Renewal & Address Change']
  },
  {
    id: 'all-insurance-apply',
    title: 'All Vehicle & Health Insurance',
    category: 'government',
    categoryLabel: 'Government Services',
    description: 'Instant insurance policy issue for 2-wheelers, cars, commercial vehicles, third-party and comprehensive coverage.',
    iconName: 'ShieldCheck',
    estTime: '10 mins',
    highlights: ['Multi-brand Comparison', 'Instant Policy Copy', 'Renewal Reminders']
  },

  // Travel
  {
    id: 'ticket-bookings',
    title: 'Bus, Train & Flight Ticket Bookings',
    category: 'travel',
    categoryLabel: 'Travel Services',
    description: 'IRCTC train ticket booking (Tatkal & General), private sleeper/AC bus tickets, and domestic/international flight booking.',
    iconName: 'Plane',
    popular: true,
    estTime: '5 mins',
    highlights: ['IRCTC Authorized Search', 'Seat & Sleeper Choice', 'Instant Print & WhatsApp PDF']
  },

  // Stationery
  {
    id: 'stationery-items',
    title: 'School & Office Stationery Supplies',
    category: 'stationery',
    categoryLabel: 'Stationery Items',
    description: 'Wide range of quality notebooks, pens, exam boards, project files, sticky notes, calculators, and art supplies.',
    iconName: 'Briefcase',
    estTime: 'In Stock',
    highlights: ['Top Brands (Classmate, Reynolds, Camlin)', 'Bulk Student Packs', 'Project Art Materials']
  }
];
