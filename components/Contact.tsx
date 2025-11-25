import React, { useState } from 'react';
import { Send, MapPin, Mail, Github, Linkedin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate send
    alert("Message sent! (Simulation)");
  };

  return (
    <section id="contact" className="bg-dark-900 pt-24 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
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
                    <p className="mb-2"><span className="text-purple-400">$</span> ping Faarid_Hussnain</p>
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
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold py-4 rounded-lg hover:from-cyan-500 hover:to-blue-500 transition-all flex items-center justify-center gap-2"
                    >
                        <Send className="w-4 h-4" />
                        Send Message
                    </button>
                    <p className="text-xs text-gray-500 text-center mt-4">
                        By clicking send, you'll be redirected to WhatsApp to complete your message
                    </p>
                </form>
            </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-black py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
              <div className="col-span-1 md:col-span-1">
                  <h3 className="font-bold text-white text-lg mb-4">Faarid Hussain</h3>
                  <p className="text-gray-500 leading-relaxed">
                      Full-stack developer and entrepreneur specializing in AI-powered solutions, web development, and cloud infrastructure. Building digital excellence, one project at a time.
                  </p>
                  <div className="flex gap-4 mt-6">
                      <a href="#" className="text-gray-400 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                  </div>
              </div>
              
              <div>
                  <h4 className="font-bold text-white mb-4">Quick Links</h4>
                  <ul className="space-y-2 text-gray-500">
                      <li><a href="#home" className="hover:text-cyan-400 transition-colors">Home</a></li>
                      <li><a href="#about" className="hover:text-cyan-400 transition-colors">About</a></li>
                      <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a></li>
                      <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
                  </ul>
              </div>

              <div>
                  <h4 className="font-bold text-white mb-4">Skills / Domains</h4>
                  <ul className="space-y-2 text-gray-500">
                      <li>Backend Engineering</li>
                      <li>AI / LLM Integration</li>
                      <li>Cloud & Linux Infrastructure</li>
                      <li>API Architecture</li>
                  </ul>
              </div>

              <div>
                  <h4 className="font-bold text-white mb-4">Connect</h4>
                  <ul className="space-y-2 text-gray-500">
                      <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> contact@faaridhussnain.com</li>
                      <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> WhatsApp Chat</li>
                  </ul>
              </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-white/5 text-center text-gray-600 text-xs">
              &copy; {new Date().getFullYear()} Faarid Hussain. All rights reserved.
          </div>
      </footer>
    </section>
  );
};

export default Contact;