import React from 'react';

export interface Project {
  id: number;
  title: string;
  tagline: string;
  description: string;
  stats: string[];
  tags: string[];
  image: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  category: 'Frontend' | 'Backend' | 'DevOps' | 'AI/ML' | 'Tools';
  isExpert: boolean;
  years: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}