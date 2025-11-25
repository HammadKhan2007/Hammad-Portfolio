import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-dark-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                ABOUT<span className="text-cyan-400">.SYS</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"></div>
        </div>

        {/* Changed grid-cols-1 lg:grid-cols-2 to md:grid-cols-2 to trigger side-by-side earlier (on tablets/laptops) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
           <div className="order-2 md:order-1 space-y-6">
              <div className="bg-dark-800 p-8 rounded-2xl border border-white/5 shadow-2xl relative overflow-hidden group">
                 <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-500"></div>
                 <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">Digital Identity</h3>
                 <p className="text-gray-400 mb-4 leading-relaxed">
                    I don't just build websites—I engineer experiences, automate processes, and craft digital ecosystems that work smarter, not harder.
                 </p>
                 <p className="text-gray-400 mb-6 leading-relaxed">
                    Every pixel, every line of code, and every automation I create is designed for impact—whether it's streamlining businesses, enhancing user experiences, or redefining how digital tools should work.
                 </p>
                 <p className="text-gray-300 italic border-l-2 border-purple-500 pl-4">
                    "I believe in efficiency, innovation, and making technology work for you—not the other way around. If it doesn't elevate, automate, or dominate, it's not worth building."
                 </p>
              </div>
              
              <div className="flex gap-4">
                  {['Developer', 'Writer', 'AI Engineer', 'Entrepreneur'].map(tag => (
                      <span key={tag} className="px-3 py-1 bg-dark-800 rounded border border-white/10 text-xs font-mono text-cyan-400">
                          {tag}
                      </span>
                  ))}
              </div>
           </div>

           <div className="order-1 md:order-2 relative">
              <div className="relative rounded-2xl overflow-hidden border-2 border-cyan-500/20 shadow-2xl shadow-cyan-500/10">
                  {/* UPDATE: Changed src to use local image from public folder */}
                  {/* Removed grayscale and hover scale effects */}
                  <img 
                    src="/profile.jpg" 
                    alt="Hammad Khan" 
                    className="w-full h-auto object-cover"
                    onError={(e) => {
                      // Fallback if image is missing
                      e.currentTarget.src = "https://ui-avatars.com/api/?name=Hammad+Khan&background=0D8ABC&color=fff&size=512";
                    }} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent pointer-events-none"></div>
                  
                  {/* Decorative corner accents */}
                  <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-cyan-500 rounded-tr-xl"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-purple-500 rounded-bl-xl"></div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default About;