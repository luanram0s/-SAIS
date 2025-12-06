import { LucideIcon } from 'lucide-react';

export enum NavItemType {
  DASHBOARD = 'DASHBOARD',
  ANALYTICS = 'ANALYTICS',
  SETTINGS = 'SETTINGS',
  USERS = 'USERS',
  REPORTS = 'REPORTS'
}

export interface NavItem {
  id: NavItemType;
  label: string;
  icon: LucideIcon;
}

export interface StatCardProps {
  label: string;
  value: string;
  trend: number;
  icon: LucideIcon;
  color: 'blue' | 'green' | 'purple' | 'orange';
}

export interface ChartDataPoint {
  name: string;
  value: number;
  secondary: number;
}