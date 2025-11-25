import React, { useState, useEffect, useRef } from 'react';
import { Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';

const About: React.FC = () => {
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
    <section ref={sectionRef} id="about" className="py-24 bg-dark-900 relative">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex flex-col items-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                ABOUT<span className="text-cyan-400">.SYS</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
           {/* Left Column: Text Content */}
           <div className="order-2 md:order-1 h-full">
              <div className="bg-dark-800 p-8 rounded-2xl border border-white/5 shadow-2xl relative overflow-hidden group h-full flex flex-col">
                 {/* Decorative gradient line */}
                 <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-500"></div>
                 
                 <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-cyan-400 mb-6">Digital Identity</h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                        I don't just build websites—I engineer experiences, automate processes, and craft digital ecosystems that work smarter, not harder.
                    </p>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                        Every pixel, every line of code, and every automation I create is designed for impact—whether it's streamlining businesses, enhancing user experiences, or redefining how digital tools should work.
                    </p>
                    <p className="text-gray-300 italic border-l-2 border-purple-500 pl-4 mb-8">
                        "I believe in efficiency, innovation, and making technology work for you—not the other way around. If it doesn't elevate, automate, or dominate, it's not worth building."
                    </p>
                 </div>
                 
                 {/* Social Icons */}
                 <div className="flex gap-6 mt-4 pt-4 border-t border-white/5">
                    <a href="#" className="text-cyan-400 hover:text-white transition-colors hover:scale-110 transform duration-200"><Facebook className="w-5 h-5" /></a>
                    <a href="#" className="text-cyan-400 hover:text-white transition-colors hover:scale-110 transform duration-200"><Instagram className="w-5 h-5" /></a>
                    <a href="#" className="text-cyan-400 hover:text-white transition-colors hover:scale-110 transform duration-200"><Youtube className="w-5 h-5" /></a>
                    <a href="#" className="text-cyan-400 hover:text-white transition-colors hover:scale-110 transform duration-200"><MessageCircle className="w-5 h-5" /></a>
                 </div>
              </div>
           </div>

           {/* Right Column: Image and Skills Dock */}
           <div className="order-1 md:order-2 flex flex-col items-center">
              <div className="relative rounded-2xl overflow-hidden border-2 border-cyan-500/20 shadow-2xl shadow-cyan-500/10 w-full max-w-md">
                  <img 
                    src="/profile.jpg" 
                    alt="Hammad Khan" 
                    className="w-full h-auto object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "https://ui-avatars.com/api/?name=Hammad+Khan&background=0D8ABC&color=fff&size=512";
                    }} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent pointer-events-none"></div>
                  
                  {/* Decorative corner accents */}
                  <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-cyan-500 rounded-tr-xl"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-purple-500 rounded-bl-xl"></div>
              </div>

              {/* Skills/Tags Dock */}
              <div className="mt-8 px-8 py-4 bg-dark-800 rounded-full border border-cyan-500/30 shadow-[0_0_20px_rgba(34,211,238,0.15)] flex flex-wrap justify-center gap-6 relative">
                  <div className="absolute inset-0 bg-cyan-500/5 rounded-full blur-sm -z-10"></div>
                  <span className="text-cyan-400 font-mono text-sm font-bold hover:text-white transition-colors cursor-default">Developer</span>
                  <span className="text-purple-400 font-mono text-sm font-bold hover:text-white transition-colors cursor-default">Writer</span>
                  <span className="text-cyan-400 font-mono text-sm font-bold hover:text-white transition-colors cursor-default">Ai Engineer</span>
                  <span className="text-pink-500 font-mono text-sm font-bold hover:text-white transition-colors cursor-default">Enterpreneur</span>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default About;