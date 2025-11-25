import React, { useRef, useState, useEffect } from 'react';
import { SKILLS } from '../constants';
import { Skill } from '../types';

// SkillCard with Circular Progress and Spotlight Effect
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
  const radius = 32; // Radius of the circle
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (skill.level / 100) * circumference;

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative rounded-xl border border-white/10 bg-dark-800 p-6 transition-all duration-300 hover:border-cyan-500/30 overflow-hidden flex flex-col items-center justify-center text-center h-[220px]"
    >
      {/* Spotlight Gradient */}
      <div
        className="pointer-events-none absolute -inset-px transition duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(34, 211, 238, 0.1), transparent 40%)`,
        }}
      />
      
      {/* Circular Progress Container */}
      <div className="relative w-24 h-24 mb-4 transform transition-transform duration-500 group-hover:scale-110">
        {/* Background Circle */}
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="48"
            cy="48"
            r={radius}
            stroke="#1f2937" // gray-800
            strokeWidth="6"
            fill="transparent"
          />
          {/* Progress Circle */}
          <circle
            cx="48"
            cy="48"
            r={radius}
            stroke="currentColor"
            strokeWidth="6"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={isHovered ? strokeDashoffset : circumference}
            strokeLinecap="round"
            className="text-cyan-400 transition-all duration-1000 ease-out drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]"
          />
        </svg>
        
        {/* Icon Centered */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-300 group-hover:text-white transition-colors duration-300">
          <div className="transform transition-all duration-300 group-hover:scale-110 group-hover:text-cyan-400">
             {skill.icon}
          </div>
        </div>
      </div>
      
      {/* Text Content */}
      <div className="relative z-10 w-full">
        <h4 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">{skill.name}</h4>
        
        <div className="flex items-center justify-center gap-2 text-xs">
           <span className="font-mono text-gray-500 group-hover:text-gray-300 transition-colors">{skill.years}</span>
           <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
           <span className={`font-mono transition-all duration-300 ${isHovered ? 'text-cyan-400 font-bold scale-110' : 'text-gray-500'}`}>
             {skill.level}%
           </span>
        </div>

        {/* Expert Badge - Visible on Hover */}
        <div className={`mt-3 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
           <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${skill.isExpert ? 'bg-purple-500/20 text-purple-300 border border-purple-500/20' : 'bg-gray-700 text-gray-300'}`}>
              {skill.isExpert ? 'Expert' : 'Intermediate'}
           </span>
        </div>
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
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">SKILLS & EXPERTISE</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and skills I've mastered over the years
          </p>
        </div>

        <div className="space-y-16">
          {categories.map((category, catIndex) => (
            <div 
              key={category}
              className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${catIndex * 150}ms` }}
            >
              <h3 className="text-xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]"></span>
                {category}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
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