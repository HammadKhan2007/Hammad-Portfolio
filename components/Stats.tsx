import React, { useState, useEffect, useRef } from 'react';

const STATS = [
  { value: "5+", label: "Startups Founded", icon: "🚀" },
  { value: "50+", label: "Projects Completed", icon: ">_" },
  { value: "30+", label: "Happy Clients", icon: "☺" },
  { value: "5+", label: "Years Experience", icon: "⚙" },
];

const Stats: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
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
    <section ref={sectionRef} className="py-24 bg-dark-800/30 border-y border-white/5 relative z-20">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat, index) => (
            <div key={index} className="relative group text-center p-10 bg-dark-800 rounded-2xl border border-white/10 hover:border-cyan-500/50 shadow-lg hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 flex items-center justify-center bg-dark-900 border border-cyan-500/50 rounded-lg text-cyan-400 text-xl shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="mt-4 text-5xl md:text-6xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-base text-gray-400 uppercase tracking-widest font-bold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
            <div className="flex items-center gap-2 text-green-400 bg-green-400/10 px-6 py-3 rounded-full text-base font-mono border border-green-400/20 shadow-lg hover:shadow-green-400/20 transition-all cursor-default">
                <span className="animate-pulse font-bold">$</span> Building digital excellence, one project at a time
            </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;