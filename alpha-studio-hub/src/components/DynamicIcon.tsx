import React from 'react';
import { 
  Printer, 
  Camera, 
  BookOpen, 
  Layers, 
  Palette, 
  Image as ImageIcon, 
  Smartphone, 
  Send, 
  Wallet, 
  Landmark, 
  CheckSquare, 
  CreditCard, 
  Fingerprint, 
  Car, 
  ShieldCheck, 
  Plane, 
  Briefcase, 
  Grid, 
  FileCheck, 
  Ticket, 
  PenTool, 
  HelpCircle,
  PhoneCall,
  MapPin,
  Clock,
  Sparkles,
  CheckCircle2,
  Award,
  Star,
  Search,
  X,
  Menu,
  MessageCircle,
  ExternalLink,
  ChevronDown,
  Calculator,
  Upload,
  ArrowRight,
  Shield,
  ThumbsUp,
  UserCheck
} from 'lucide-react';

interface DynamicIconProps {
  name: string;
  className?: string;
  size?: number;
}

const iconMap: Record<string, React.ElementType> = {
  Printer,
  Camera,
  BookOpen,
  Layers,
  Palette,
  Image: ImageIcon,
  Smartphone,
  Send,
  Wallet,
  Landmark,
  CheckSquare,
  CreditCard,
  Fingerprint,
  Car,
  ShieldCheck,
  Plane,
  Briefcase,
  Grid,
  FileCheck,
  Ticket,
  PenTool,
  HelpCircle,
  PhoneCall,
  MapPin,
  Clock,
  Sparkles,
  CheckCircle2,
  Award,
  Star,
  Search,
  X,
  Menu,
  MessageCircle,
  ExternalLink,
  ChevronDown,
  Calculator,
  Upload,
  ArrowRight,
  Shield,
  ThumbsUp,
  UserCheck
};

export const DynamicIcon: React.FC<DynamicIconProps> = ({ name, className = "w-5 h-5", size }) => {
  const IconComponent = iconMap[name] || Sparkles;
  return <IconComponent className={className} size={size} />;
};
