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
  // Programming
  { name: 'Python', level: 95, icon: <Code2 className="w-8 h-8" />, category: 'Programming', isExpert: true, years: '3+ years' },
  { name: 'R', level: 80, icon: <Terminal className="w-8 h-8" />, category: 'Programming', isExpert: false, years: '2+ years' },
  { name: 'SQL', level: 90, icon: <Database className="w-8 h-8" />, category: 'Programming', isExpert: true, years: '3+ years' },
  { name: 'Bash', level: 75, icon: <Command className="w-8 h-8" />, category: 'Programming', isExpert: false, years: '2+ years' },

  // Data Analysis
  { name: 'Pandas', level: 95, icon: <Layers className="w-8 h-8" />, category: 'Data Analysis', isExpert: true, years: '3+ years' },
  { name: 'NumPy', level: 90, icon: <Box className="w-8 h-8" />, category: 'Data Analysis', isExpert: true, years: '3+ years' },
  { name: 'Matplotlib', level: 85, icon: <Layout className="w-8 h-8" />, category: 'Data Analysis', isExpert: true, years: '2+ years' },
  { name: 'Tableau', level: 80, icon: <Monitor className="w-8 h-8" />, category: 'Data Analysis', isExpert: false, years: '2+ years' },

  // Machine Learning
  { name: 'Scikit-Learn', level: 90, icon: <Brain className="w-8 h-8" />, category: 'Machine Learning', isExpert: true, years: '2+ years' },
  { name: 'TensorFlow', level: 85, icon: <Cpu className="w-8 h-8" />, category: 'Machine Learning', isExpert: true, years: '1+ year' },
  { name: 'PyTorch', level: 80, icon: <Cpu className="w-8 h-8" />, category: 'Machine Learning', isExpert: false, years: '1+ year' },
  { name: 'NLP', level: 85, icon: <MessageSquare className="w-8 h-8" />, category: 'Machine Learning', isExpert: true, years: '2+ years' },

  // Tools & MLOps
  { name: 'Jupyter', level: 95, icon: <Terminal className="w-8 h-8" />, category: 'Tools', isExpert: true, years: '3+ years' },
  { name: 'Git', level: 90, icon: <GitBranch className="w-8 h-8" />, category: 'Tools', isExpert: true, years: '3+ years' },
  { name: 'Docker', level: 80, icon: <Box className="w-8 h-8" />, category: 'Tools', isExpert: false, years: '2+ years' },
  { name: 'AWS', level: 75, icon: <Cloud className="w-8 h-8" />, category: 'Tools', isExpert: false, years: '1+ year' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "IT PYX",
    tagline: "Engineering Intelligence. Building the Future",
    description: "A comprehensive IT services platform specializing in website and app development, alongside offering comprehensive domain and hosting solutions powered by cutting-edge AI technology. Serving clients globally with reliable, scalable, and innovative solutions.",
    stats: [
      "500+ Internal experiments & prototypes", 
      "99.9% System reliability across our research stacks", 
      "50+ Self-developed tools, frameworks, and automations"
    ],
    features: [
      "Autonomous AI agents & applied automation",
      "Infrastructure intelligence for large-scale systems",
      "Experimental backend architectures",
      "Human-AI interaction and workflow augmentation",
      "High-availability compute systems on Linux"
    ],
    tags: [
      "Linux Systems", "Bash/Shell Scripting", "Nginx/Apache", 
      "Node.js", "Python", "AI/LLM Integration", 
      "n8n Automation", "Cloud Linux", "Docker", 
      "Vector Databases", "System Monitoring & Observability", "Git/GitHub", "Custom Internal Tooling"
    ],
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