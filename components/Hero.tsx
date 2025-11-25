import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Network, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = "Founder of multiple ventures and a developer at heart. I design digital identities that stand out. Innovation fuels my work, and the web is where ideas turn real. From the first spark to full execution, I bring concepts to life with intention and impact.";
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Typewriter Effect
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 30); 

    return () => clearInterval(timer);
  }, []);

  // Matrix Rain Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    const columns = Math.floor(width / 20);
    const drops: number[] = [];
    
    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100; // Start above screen randomly
    }

    const chars = "01HAMMADKHAN01<>";

    const handleResize = () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const draw = () => {
      // Semi-transparent black to create fade effect
      ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
      ctx.fillRect(0, 0, width, height);

      ctx.font = '15px JetBrains Mono';
      
      for (let i = 0; i < drops.length; i++) {
        // Random color between Cyan and Purple
        const isCyan = Math.random() > 0.5;
        ctx.fillStyle = isCyan ? '#22d3ee' : '#a855f7';
        
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * 20, drops[i] * 20);

        // Reset drop to top randomly
        if (drops[i] * 20 > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
      requestAnimationFrame(draw);
    };

    const animationId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden text-center">
      {/* Matrix Rain Background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" 
      />
      
      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-transparent to-transparent"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center">
        
        <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-4 tracking-tighter">
              <span className="block text-white drop-shadow-2xl">Hammad</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 glow-text animate-gradient-x">Khan</span>
            </h1>
            
            <div className="inline-flex items-center gap-2 text-green-400 font-medium tracking-wide bg-dark-800/80 px-4 py-2 rounded-full border border-green-500/20 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                Building Networks Worldwide & Collaborating on Projects
            </div>
        </div>

        <div className="relative w-full max-w-2xl mt-8 mb-12">
            {/* Code comment block style */}
            <div className="p-8 bg-dark-800/90 backdrop-blur-md rounded-2xl border border-white/10 relative overflow-hidden group shadow-2xl shadow-purple-900/20">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500"></div>
              <div className="font-mono text-base md:text-lg space-y-4 text-left">
                <p className="text-gray-500 flex items-center gap-2">
                  <span className="text-purple-400">const</span> 
                  <span className="text-yellow-200">developer</span> 
                  <span className="text-white">=</span> 
                  <span className="text-green-300">"Hammad Khan"</span>;
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <span className="text-gray-500 mr-2">//</span>
                  {text}
                  <span className="animate-pulse inline-block w-2 h-5 bg-cyan-500 ml-1 align-middle"></span>
                </p>
              </div>
            </div>
            
            {/* Decorative glows behind the box */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-20 -z-10 group-hover:opacity-40 transition-opacity duration-500"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <a href="#projects" className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-bold transition-all shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_40px_rgba(34,211,238,0.7)] hover:scale-105 flex items-center gap-2 border border-cyan-400/20">
            View Project 
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="group px-8 py-4 bg-transparent border border-purple-500/50 text-purple-400 rounded-lg font-bold hover:bg-purple-500 hover:text-white hover:border-purple-500 transition-all shadow-[0_0_10px_rgba(168,85,247,0.1)] hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] flex items-center gap-2 backdrop-blur-sm">
            Connect
            <Network className="w-5 h-5 group-hover:rotate-45 transition-transform" />
          </a>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500">
            <ChevronDown className="w-6 h-6" />
        </div>
      </div>
    </section>
  );
};

export default Hero;