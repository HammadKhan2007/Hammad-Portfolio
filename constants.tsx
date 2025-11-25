import React from 'react';
import { 
  Code2, Server, Database, Cloud, Brain, Terminal, 
  Layout, Smartphone, Globe, Cpu, Layers, GitBranch,
  Shield, Box, Wrench, Command, MessageSquare, Share2,
  Settings, Wifi, Lock, Monitor
} from 'lucide-react';
import { Skill, Project, Testimonial } from './types';

export const SOCIAL_LINKS = {
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  whatsapp: "https://whatsapp.com",
  email: "contact@hammadkhan.com"
};

export const SKILLS: Skill[] = [
  // Frontend
  { name: 'React', level: 90, icon: <Code2 className="w-6 h-6" />, category: 'Frontend', isExpert: true, years: '1+ year' },
  { name: 'TypeScript', level: 85, icon: <Terminal className="w-6 h-6" />, category: 'Frontend', isExpert: true, years: '1+ year' },
  { name: 'Tailwind CSS', level: 95, icon: <Layout className="w-6 h-6" />, category: 'Frontend', isExpert: true, years: '2+ years' },
  { name: 'JavaScript', level: 95, icon: <Globe className="w-6 h-6" />, category: 'Frontend', isExpert: true, years: '5+ years' },
  { name: 'HTML', level: 97, icon: <Layout className="w-6 h-6" />, category: 'Frontend', isExpert: true, years: '5+ years' },
  { name: 'CSS', level: 90, icon: <Layout className="w-6 h-6" />, category: 'Frontend', isExpert: true, years: '5+ years' },

  // Backend
  { name: 'Node.js', level: 90, icon: <Server className="w-6 h-6" />, category: 'Backend', isExpert: true, years: '2+ years' },
  { name: 'PHP', level: 75, icon: <Database className="w-6 h-6" />, category: 'Backend', isExpert: true, years: '2+ years' },
  { name: 'Python', level: 85, icon: <Brain className="w-6 h-6" />, category: 'Backend', isExpert: true, years: '2+ years' },
  { name: 'REST APIs', level: 95, icon: <Globe className="w-6 h-6" />, category: 'Backend', isExpert: true, years: '3+ years' },

  // DevOps
  { name: 'AWS', level: 80, icon: <Cloud className="w-6 h-6" />, category: 'DevOps', isExpert: false, years: '2+ years' },
  { name: 'WHM/cPanel', level: 90, icon: <Settings className="w-6 h-6" />, category: 'DevOps', isExpert: true, years: '4+ years' },
  { name: 'Git', level: 95, icon: <GitBranch className="w-6 h-6" />, category: 'DevOps', isExpert: true, years: '3+ years' },
  { name: 'Linux Servers', level: 85, icon: <Terminal className="w-6 h-6" />, category: 'DevOps', isExpert: true, years: '3+ years' },
  { name: 'Nginx/Apache', level: 70, icon: <Server className="w-6 h-6" />, category: 'DevOps', isExpert: false, years: '3+ years' },

  // AI/ML
  { name: 'ChatGPT API', level: 95, icon: <Brain className="w-6 h-6" />, category: 'AI/ML', isExpert: true, years: '3+ years' },
  { name: 'API Integrations', level: 90, icon: <Share2 className="w-6 h-6" />, category: 'AI/ML', isExpert: true, years: '3+ years' },
  { name: 'n8n Automations', level: 95, icon: <WorkflowIcon className="w-6 h-6" />, category: 'AI/ML', isExpert: true, years: '1+ year' },
  { name: '3rd Party APIs', level: 95, icon: <Globe className="w-6 h-6" />, category: 'AI/ML', isExpert: true, years: '3+ years' },
  { name: 'Vector DBs', level: 80, icon: <Database className="w-6 h-6" />, category: 'AI/ML', isExpert: false, years: '1+ year' },
  { name: 'WhatsApp Cloud', level: 90, icon: <MessageSquare className="w-6 h-6" />, category: 'AI/ML', isExpert: true, years: '1+ year' },

  // Tools
  { name: 'VS Code', level: 95, icon: <Code2 className="w-6 h-6" />, category: 'Tools', isExpert: true, years: '5+ years' },
  { name: 'WordPress', level: 90, icon: <Globe className="w-6 h-6" />, category: 'Tools', isExpert: true, years: '4+ years' },
  { name: 'Firebase', level: 70, icon: <Database className="w-6 h-6" />, category: 'Tools', isExpert: false, years: '2+ years' },
  { name: 'CRM Systems', level: 70, icon: <Box className="w-6 h-6" />, category: 'Tools', isExpert: false, years: '2+ years' },
  { name: 'SaaS Systems', level: 80, icon: <Cloud className="w-6 h-6" />, category: 'Tools', isExpert: false, years: '1+ year' },
  { name: 'GitHub', level: 90, icon: <GitBranch className="w-6 h-6" />, category: 'Tools', isExpert: false, years: '3+ years' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "IT PYX",
    tagline: "Engineering Intelligence. Building the Future",
    description: "A comprehensive IT services platform specializing in website and app development, alongside offering comprehensive domain and hosting solutions powered by cutting-edge AI technology. Serving clients globally with reliable, scalable, and innovative solutions.",
    stats: [
      "500+ Internal experiments", 
      "99.9% System reliability", 
      "50+ Self-developed tools"
    ],
    tags: [
      "Linux Systems", "Bash/Shell Scripting", "Nginx/Apache", 
      "Node.js", "Python", "AI/LLM Integration", 
      "n8n Automation", "Cloud Linux", "Docker", 
      "Vector Databases", "Git/GitHub", "Internal Tooling"
    ],
    // UPDATE: Changed to use local image from public folder
    image: "/project.jpg",
    featured: true
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Muhammad Nadeem",
    role: "Managing Director at Sammers & Sammers, Lahore",
    content: "Whenever we get stuck with APIs, automations, or server logic, we just call Hammad. He handles the technical stuff. Sharp honest about what will work and what won't.",
    rating: 5
  },
  {
    id: 2,
    name: "Sana Ullah",
    role: "Co-Founder at IT PYX",
    content: "What makes Hammad different is the way he thinks. He doesn't blindly build whatever asked; he questions the logic, cuts the useless stuff, and pushes for a smarter direction.",
    rating: 5
  },
  {
    id: 3,
    name: "Hassan Salah elDin",
    role: "Owner at Wide Events LLC, Dubai",
    content: "Every time something broke on our server, we wasted hours Googling. He fixed things in minutes and actually explained what the hell was going on. Dude knows backend stuff like it's his muscle memory.",
    rating: 5
  },
  {
    id: 4,
    name: "Atif Memon",
    role: "Owner at Atif Photo Studio, Lahore",
    content: "Hammad built a complete invoicing CMS for us. The system runs smoothly, the reports are accurate, and the workflow finally makes sense!",
    rating: 5
  }
];

// Helper component for icon missing in lucide export
function WorkflowIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <rect width="8" height="8" x="3" y="3" rx="2" />
      <path d="M7 11v4a2 2 0 0 0 2 2h4" />
      <rect width="8" height="8" x="13" y="13" rx="2" />
    </svg>
  );
}