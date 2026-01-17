import { LucideIcon } from 'lucide-react';

export interface UseCase {
  title: string;
  description: string;
  icon: LucideIcon;
  category: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TechItem {
  name: string;
  description: string;
  detail: string;
}
