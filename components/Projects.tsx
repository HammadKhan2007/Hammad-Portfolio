import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, CheckCircle2, Server, Terminal, Database, Cpu } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
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
    <section ref={sectionRef} id="projects" className="py-24 bg-dark-800 relative">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>
      
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/10 pb-8">
            <div>
                <div className="flex items-center gap-2 mb-3">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                    </span>
                    <span className="text-purple-400 font-mono text-sm tracking-widest uppercase">My Portfolio</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white">Featured Projects</h2>
            </div>
            <p className="text-gray-400 max-w-md mt-4 md:mt-0 text-sm md:text-right border-l-2 md:border-l-0 md:border-r-2 border-cyan-500 pl-4 md:pl-0 md:pr-4">
                My primary focus and flagship project that powers innovative digital solutions
            </p>
        </div>

        <div className="grid grid-cols-1 gap-16">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group relative bg-dark-900 rounded-3xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-500 shadow-2xl">
              
              {/* Decorative top gradient line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500"></div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                
                {/* Left Content Column (7 cols) */}
                <div className="lg:col-span-7 p-8 md:p-10 flex flex-col h-full border-r border-white/5">
                   <div className="mb-6">
                       {project.featured && (
                           <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-500/10 text-purple-400 text-xs font-bold rounded-full border border-purple-500/20 mb-4">
                               <span className="text-yellow-300">★</span> FEATURED PROJECT
                           </span>
                       )}
                       <h3 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">{project.title}</h3>
                       <p className="text-cyan-400 font-mono text-sm md:text-base italic">
                           "{project.tagline}"
                       </p>
                   </div>
                   
                   <p className="text-gray-300 mb-8 leading-relaxed text-base border-l-2 border-white/10 pl-4">
                       {project.description}
                   </p>

                   {/* Stats Grid */}
                   <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                       {project.stats.map((stat, i) => {
                           // Split stat into number and label for styling
                           const match = stat.match(/^([\d%.+]+)\s+(.+)$/);
                           const value = match ? match[1] : "";
                           const label = match ? match[2] : stat;
                           
                           return (
                               <div key={i} className="flex flex-col p-4 bg-dark-800 rounded-xl border border-white/5 hover:border-cyan-500/20 transition-all group/stat">
                                   <span className="text-2xl font-bold text-white group-hover/stat:text-cyan-400 transition-colors">{value}</span>
                                   <span className="text-xs text-gray-500 mt-1 leading-tight">{label}</span>
                               </div>
                           );
                       })}
                   </div>

                   {/* Research Areas / Features */}
                   {project.features && (
                       <div className="mb-8 bg-dark-800/50 rounded-2xl p-6 border border-white/5">
                           <h4 className="text-sm text-gray-400 uppercase font-bold mb-4 flex items-center gap-2">
                               <Terminal className="w-4 h-4 text-cyan-500" /> Research Areas
                           </h4>
                           <ul className="space-y-3">
                               {project.features.map((feature, idx) => (
                                   <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                                       <CheckCircle2 className="w-5 h-5 text-cyan-500/70 flex-shrink-0 mt-0.5" />
                                       <span>{feature}</span>
                                   </li>
                               ))}
                           </ul>
                       </div>
                   )}

                   {/* Tech Stack & Action */}
                   <div className="mt-auto pt-6 border-t border-white/5 flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center">
                        <div className="flex-1">
                           <h4 className="text-xs text-gray-500 uppercase font-bold mb-3 tracking-wider flex items-center gap-2">
                               <Cpu className="w-4 h-4" /> Technology Stack
                           </h4>
                           <div className="flex flex-wrap gap-2">
                               {project.tags.slice(0, 6).map(tag => (
                                   <span key={tag} className="px-2.5 py-1 bg-dark-800 text-cyan-400/80 text-xs font-medium rounded border border-cyan-500/10 hover:border-cyan-500/30 transition-colors cursor-default">
                                       {tag}
                                   </span>
                               ))}
                               {project.tags.length > 6 && (
                                   <span className="px-2.5 py-1 bg-dark-800 text-gray-500 text-xs font-medium rounded border border-white/5">+{project.tags.length - 6} more</span>
                               )}
                           </div>
                        </div>

                        <a href="#" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-105 whitespace-nowrap w-full sm:w-auto">
                            Visit Website
                            <ExternalLink className="w-4 h-4" />
                        </a>
                   </div>
                </div>

                {/* Right Image Column (5 cols) */}
                <div className="lg:col-span-5 relative min-h-[400px] lg:h-auto overflow-hidden bg-dark-800">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-900 lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-dark-900 z-10 pointer-events-none"></div>
                    
                    {/* Abstract overlay */}
                    <div className="absolute top-0 right-0 p-8 z-20 opacity-50">
                        <Server className="w-64 h-64 text-white/5 rotate-12" />
                    </div>

                    <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover object-left-top transform group-hover:scale-105 transition-transform duration-1000 ease-out opacity-80 group-hover:opacity-100"
                    />
                    
                    <div className="absolute bottom-6 right-6 z-20 flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
                        <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse delay-75"></div>
                        <div className="w-2 h-2 rounded-full bg-white animate-pulse delay-150"></div>
                    </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;