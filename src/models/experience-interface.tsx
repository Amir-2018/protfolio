import { LucideIcon } from 'lucide-react';

export interface ExperienceProps {
    title: string;
    company: string;
    companyIcon?: LucideIcon;
    iconColor?: string;
    period: string;
    tasks: string[];
  }
  