import React from 'react';

const STATS = [
  { value: "5+", label: "Startups Founded", icon: "🚀" },
  { value: "50+", label: "Projects Completed", icon: ">_" },
  { value: "30+", label: "Happy Clients", icon: "☺" },
  { value: "5+", label: "Years Experience", icon: "⚙" },
];

const Stats: React.FC = () => {
  return (
    <section className="py-12 bg-dark-900 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, index) => (
            <div key={index} className="relative group text-center p-6 bg-dark-800/50 rounded-lg border border-white/5 hover:border-cyan-500/30 transition-all duration-300">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 flex items-center justify-center bg-dark-900 border border-cyan-500/50 rounded text-cyan-400 text-xs">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-wider font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
            <div className="flex items-center gap-2 text-green-400 bg-green-400/10 px-4 py-2 rounded-full text-sm font-mono border border-green-400/20">
                <span className="animate-pulse">$</span> Building digital excellence, one project at a time
            </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;