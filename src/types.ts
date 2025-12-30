export type Language = 'en' | 'fa' | 'ar';

export interface Product {
  id: number;
  title: string;
  description: string;
  content?: string;
  category: 'Trading' | 'Services';
  image: string;
  gallery?: string[];
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  image: string;
  author: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface CompanyInfo {
  name: string;
  address: string;
  phone: string[];
  email: string[];
  copyright: string;
}