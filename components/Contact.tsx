import React, { useState, useEffect, useRef } from 'react';
import { Send, MapPin, Mail, Github, Linkedin, Phone } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate send
    const subject = encodeURIComponent(form.subject || "Project Inquiry");
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.open(`mailto:${SOCIAL_LINKS.email}?subject=${subject}&body=${body}`);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section ref={sectionRef} id="contact" className="bg-dark-900 pt-24 pb-8 border-t border-white/5">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white">CONTACT<span className="text-cyan-400">.NET</span></h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info Side */}
            <div className="space-y-8">
                <div className="bg-dark-800 p-8 rounded-2xl border-l-4 border-cyan-500">
                    <h3 className="text-2xl font-bold text-white mb-4">Connect with Me</h3>
                    <p className="text-gray-400 mb-6">
                        I am not interested in Jobs. Want a collaboration on a project? I'm always open to discussing new ideas and ventures. Let's Have a Great Business Collaboration!
                    </p>
                    
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 text-gray-300">
                            <div className="w-10 h-10 bg-dark-700 rounded-full flex items-center justify-center text-cyan-400">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="font-bold text-white">Lahore, Pakistan</p>
                                <p className="text-xs text-gray-500">Currently & Temporarily</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 text-gray-300">
                            <div className="w-10 h-10 bg-dark-700 rounded-full flex items-center justify-center text-cyan-400">
                                <Mail className="w-5 h-5" />
                            </div>
                             <div>
                                <p className="font-bold text-white">Available for Business Collabs</p>
                                <p className="text-xs text-gray-500">Worldwide</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-6 bg-dark-800 rounded-xl border border-dashed border-gray-700 font-mono text-sm text-gray-400">
                    <p className="mb-2"><span className="text-purple-400">$</span> ping Hammad_Khan</p>
                    <p className="text-green-400">Excuses don't impress me. Results do.</p>
                </div>
            </div>

            {/* Form Side */}
            <div className="bg-dark-800 p-8 rounded-2xl border border-white/5 shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                            <input 
                                type="text" 
                                className="w-full bg-dark-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                                placeholder="John Doe"
                                value={form.name}
                                onChange={e => setForm({...form, name: e.target.value})}
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                            <input 
                                type="email" 
                                className="w-full bg-dark-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                                placeholder="john@example.com"
                                value={form.email}
                                onChange={e => setForm({...form, email: e.target.value})}
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                        <input 
                            type="text" 
                            className="w-full bg-dark-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                            placeholder="Project Inquiry"
                            value={form.subject}
                            onChange={e => setForm({...form, subject: e.target.value})}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Your Message</label>
                        <textarea 
                            rows={4}
                            className="w-full bg-dark-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                            placeholder="Tell me about your project..."
                            value={form.message}
                            onChange={e => setForm({...form, message: e.target.value})}
                            required
                        ></textarea>
                    </div>

                    <button 
                        type="submit"
                        className="w-full bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 text-white font-bold py-4 rounded-lg shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1"
                    >
                        <Send className="w-5 h-5" />
                        Send Message
                    </button>
                </form>
            </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/10 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-500 rounded flex items-center justify-center font-bold text-white text-xs">
                  HK
                </div>
                <span className="text-gray-400 text-sm">© 2024 Hammad Khan. All rights reserved.</span>
            </div>

            <div className="flex items-center gap-6">
                <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                </a>
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                </a>
                <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-gray-500 hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;