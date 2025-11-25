import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section id="testimonials" className="py-24 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                TESTIMONIALS<span className="text-purple-500">.JSON</span>
            </h2>
            <p className="text-gray-400">Don't just take my word for it—here's what collaborators say.</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
            {/* Main Card */}
            <div className="bg-dark-900 rounded-2xl p-8 md:p-12 border border-white/5 relative shadow-2xl">
                <div className="absolute top-8 left-8 text-purple-500/20">
                    <Quote className="w-16 h-16" />
                </div>
                
                <div className="relative z-10 min-h-[200px] flex flex-col justify-center items-center text-center">
                    <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8 italic">
                        "{TESTIMONIALS[activeIndex].content}"
                    </p>
                    
                    <div className="flex flex-col items-center gap-2">
                        <div className="flex gap-1 mb-2">
                            {[...Array(TESTIMONIALS[activeIndex].rating)].map((_, i) => (
                                <span key={i} className="text-yellow-500">★</span>
                            ))}
                        </div>
                        <h4 className="text-white font-bold text-lg">{TESTIMONIALS[activeIndex].name}</h4>
                        <p className="text-cyan-400 text-sm">{TESTIMONIALS[activeIndex].role}</p>
                    </div>
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12">
                <button onClick={prev} className="p-3 bg-dark-800 rounded-full text-white hover:bg-cyan-500 hover:text-white transition-all border border-white/10">
                    <ChevronLeft className="w-6 h-6" />
                </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12">
                <button onClick={next} className="p-3 bg-dark-800 rounded-full text-white hover:bg-cyan-500 hover:text-white transition-all border border-white/10">
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>
            
            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
                {TESTIMONIALS.map((_, i) => (
                    <button 
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        className={`w-3 h-3 rounded-full transition-all ${i === activeIndex ? 'bg-cyan-400 w-8' : 'bg-dark-700'}`}
                    />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;