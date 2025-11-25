import React from 'react';
import { ExternalLink } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
                <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                    <span className="text-purple-400 font-mono text-sm">PORTFOLIO</span>
                </div>
                <h2 className="text-4xl font-bold text-white">Featured Project</h2>
            </div>
            <p className="text-gray-400 max-w-md mt-4 md:mt-0 text-sm md:text-right">
                My primary focus and flagship project that powers innovative digital solutions
            </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group relative bg-dark-900 rounded-2xl overflow-hidden border border-white/5 hover:border-cyan-500/50 transition-all duration-300 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Content Side */}
                <div className="p-8 lg:p-10 flex flex-col order-2 lg:order-1">
                   {project.featured && (
                       <div className="flex justify-between items-start mb-4">
                           <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-600 text-white text-xs font-bold rounded shadow-lg shadow-purple-500/20">
                               <span className="text-yellow-300">⚡</span> FEATURED
                           </span>
                       </div>
                   )}
                   <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                   <p className="text-cyan-400 font-mono text-sm mb-6 border-l-2 border-cyan-500 pl-3">"{project.tagline}"</p>
                   
                   <p className="text-gray-300 mb-8 leading-relaxed text-sm">
                       {project.description}
                   </p>

                   <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                       {project.stats.map((stat, i) => (
                           <div key={i} className="flex flex-col justify-center p-3 bg-dark-800 rounded border border-white/5 hover:border-cyan-500/30 transition-colors">
                               <p className="text-white font-bold text-sm text-center">{stat}</p>
                           </div>
                       ))}
                   </div>

                   <div className="mt-auto space-y-6">
                        <div>
                           <h4 className="text-xs text-gray-500 uppercase font-bold mb-3 tracking-wider">Technology Stack</h4>
                           <div className="flex flex-wrap gap-2">
                               {project.tags.map(tag => (
                                   <span key={tag} className="px-2 py-1 bg-dark-800 hover:bg-dark-700 text-cyan-400/80 hover:text-cyan-300 text-xs rounded border border-white/10 transition-colors cursor-default">
                                       {tag}
                                   </span>
                               ))}
                           </div>
                        </div>

                        <a href="#" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-all w-full sm:w-auto shadow-lg shadow-blue-500/25">
                            Visit Website
                            <ExternalLink className="w-4 h-4" />
                        </a>
                   </div>
                </div>

                {/* Image Side */}
                <div className="relative min-h-[300px] lg:h-auto order-1 lg:order-2 overflow-hidden bg-dark-800">
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent z-10 lg:hidden"></div>
                    <div className="absolute inset-0 bg-gradient-to-l from-dark-900 via-dark-900/20 to-transparent z-10 hidden lg:block"></div>
                    <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100"
                    />
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
