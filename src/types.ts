export type ServiceCategory = 
  | 'all'
  | 'printing'
  | 'payments'
  | 'government'
  | 'travel'
  | 'stationery';

export interface ServiceItem {
  id: string;
  title: string;
  category: ServiceCategory;
  categoryLabel: string;
  description: string;
  iconName: string;
  popular?: boolean;
  estTime?: string;
  startingPrice?: string;
  highlights?: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  date: string;
}

export interface EstimateItem {
  id: string;
  name: string;
  unitPrice: number;
  unit: string;
}
