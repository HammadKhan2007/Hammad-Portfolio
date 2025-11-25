import React, { useState, useEffect } from 'react';
import { ArrowRight, Network } from 'lucide-react';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = "Founder of multiple ventures and a developer at heart. I Designed digital identities that stand out. Innovation fuels my work, and the web is where ideas turn real. From the first spark to full execution, I bring concepts to life with intention and impact.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 30); // Adjust typing speed here (lower is faster)

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-dark-900">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]"></div>
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Faarid</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 glow-text">Hussnain</span>
              </h1>
              
              <div className="flex items-center gap-2 text-green-400 font-medium tracking-wide">
                 <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                 Building Networks Worldwide & Collaborating on Projects
              </div>
            </div>

            <div className="relative mt-8">
               {/* Code comment block style */}
               <div className="p-6 bg-dark-800 rounded-lg border border-dashed border-gray-700 relative overflow-hidden group min-h-[160px]">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-cyan-500"></div>
                  <div className="font-mono text-sm space-y-2">
                    <p className="text-gray-500">// @entrepreneur @faarid_hussnain</p>
                    <p className="text-gray-300 leading-relaxed">
                      {text}
                      <span className="animate-pulse inline-block w-2 h-4 bg-cyan-500 ml-1 align-middle"></span>
                    </p>
                  </div>
               </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#projects" className="group px-8 py-3 bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 text-white rounded font-medium transition-all shadow-lg shadow-cyan-500/25 flex items-center gap-2">
                View Project 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="px-8 py-3 bg-dark-800 border border-purple-500/30 text-white rounded font-medium hover:bg-dark-700 hover:border-purple-500/60 transition-all flex items-center gap-2">
                Connect
                <Network className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="relative hidden lg:block">
            {/* Visual Abstract Representation */}
            <div className="relative w-full aspect-square max-w-md mx-auto">
               <div className="absolute inset-0 border border-dashed border-cyan-500/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
               <div className="absolute inset-8 border border-dashed border-purple-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-48 h-48 bg-gradient-to-b from-gray-800 to-black rounded-full p-1 border border-white/10 shadow-2xl">
                     <img 
                       src="https://picsum.photos/400/400?random=10" 
                       alt="Profile"
                       className="w-full h-full object-cover rounded-full opacity-80"
                     />
                     <div className="absolute -bottom-4 -right-4 bg-dark-800 p-3 rounded-lg border border-white/10 shadow-xl flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-xs font-mono">System Online</span>
                     </div>
                  </div>
               </div>
               
               {/* Floating Elements */}
               <svg className="absolute top-0 right-10 w-12 h-12 text-purple-500/40 animate-bounce" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"/>
               </svg>
               <div className="absolute bottom-20 left-0 w-4 h-4 bg-cyan-500 rounded-full animate-ping"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;