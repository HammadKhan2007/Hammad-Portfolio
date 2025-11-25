import React, { useRef, useState, useEffect } from 'react';
import { SKILLS } from '../constants';
import { Skill } from '../types';

// SkillCard with Circular Progress and "Vibe Coding Expert" Badge
const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  // Circular Progress Calculation
  const radius = 36; // Slightly larger
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (skill.level / 100) * circumference;

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative rounded-2xl border border-white/10 bg-dark-800 p-6 transition-all duration-300 hover:border-cyan-500/30 overflow-hidden flex flex-col items-center justify-between text-center h-[260px] shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1"
    >
      {/* Spotlight Gradient */}
      <div
        className="pointer-events-none absolute -inset-px transition duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(34, 211, 238, 0.08), transparent 40%)`,
        }}
      />
      
      {/* Top Section: Progress Circle with Icon */}
      <div className="relative w-28 h-28 mb-2 transform transition-transform duration-500 group-hover:scale-105">
        {/* Background Circle */}
        <svg className="w-full h-full transform -rotate-90 drop-shadow-lg">
          <circle
            cx="56"
            cy="56"
            r={radius}
            stroke="#1f2937" // gray-800
            strokeWidth="8"
            fill="transparent"
            className="opacity-50"
          />
          {/* Progress Circle */}
          <circle
            cx="56"
            cy="56"
            r={radius}
            stroke="url(#gradient)"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={isHovered ? strokeDashoffset : circumference}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
          {/* Gradient definition for the stroke */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Icon Centered */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-400 group-hover:text-white transition-colors duration-300">
          <div className="transform transition-all duration-300 group-hover:scale-110 group-hover:text-cyan-400">
             {skill.icon}
          </div>
        </div>
      </div>
      
      {/* Middle Section: Name and Stats */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <h4 className="text-xl font-bold text-white mb-1 tracking-tight group-hover:text-cyan-400 transition-colors">{skill.name}</h4>
        
        <div className="flex items-center gap-2 mb-4">
             <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {skill.level}%
             </span>
             <span className="text-xs text-gray-500 font-mono mt-1">{skill.years}</span>
        </div>
      </div>

      {/* Bottom Section: Badge */}
      <div className="w-full mt-auto">
         {skill.isExpert ? (
             <div className="w-full py-1.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-300 text-[10px] font-bold uppercase tracking-wider shadow-[0_0_10px_rgba(34,211,238,0.1)] group-hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all">
                Vibe Coding Expert
             </div>
         ) : (
             <div className="w-full py-1.5 rounded-full bg-dark-700 border border-white/5 text-gray-400 text-[10px] font-bold uppercase tracking-wider">
                Intermediate
             </div>
         )}
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const categories = ['Frontend', 'Backend', 'DevOps', 'AI/ML', 'Tools'];
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-24 bg-dark-900 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">SKILLS & EXPERTISE</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A comprehensive toolkit of technologies and skills I've mastered over the years
          </p>
        </div>

        <div className="space-y-20">
          {categories.map((category, catIndex) => (
            <div 
              key={category}
              className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${catIndex * 150}ms` }}
            >
              <div className="flex items-center gap-4 mb-8">
                  <h3 className="text-2xl font-bold text-cyan-400 tracking-wide uppercase">{category}</h3>
                  <div className="h-px flex-grow bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                {SKILLS.filter(s => s.category === category).map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;