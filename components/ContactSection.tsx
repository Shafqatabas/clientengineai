'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    agency: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Thank you! Our engineering team will get back to you within 2 hours.');
    setFormData({ name: '', email: '', agency: '', message: '' });
  };

  return (
    <section id="contact" className="relative bg-[#080511] py-12 sm:py-20 lg:py-24 border-b border-purple-500/10 overflow-hidden">
      
      {/* Background Ambient Glow Responsive Sizing */}
      <div className="absolute top-1/2 right-4 sm:right-10 -translate-y-1/2 w-[280px] sm:w-[400px] lg:w-[500px] h-[200px] sm:h-[250px] lg:h-[300px] bg-indigo-600/10 blur-[120px] sm:blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          {/* Left Side: Real Contact Details */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            <span className="px-3.5 py-1.5 sm:px-4 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold bg-purple-500/10 border border-purple-500/20 text-purple-300 uppercase tracking-widest inline-block">
              24/7 VIP Priority Support
            </span>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Have Questions? <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400">
                Let's Talk Growth
              </span>
            </h2>

            <p className="text-slate-400 text-xs sm:text-sm lg:text-base leading-relaxed">
              Need a custom lead plan, API integration, or VIP agency onboarding? Reach out directly to Rai Marketing Agency's support desk.
            </p>

            <div className="space-y-3 sm:space-y-4 pt-2 sm:pt-4">

              {/* Agency Tech Desk Email */}
              <div className="flex items-center space-x-3.5 sm:space-x-4 p-3.5 sm:p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center font-bold shrink-0">
                  <i className="fa-solid fa-headset text-sm"></i>
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] sm:text-xs text-slate-400">Agency Tech Desk</div>
                  <a href="mailto:hello@raimarketingagency.online" className="text-xs sm:text-sm font-semibold text-white hover:text-purple-400 transition truncate block">
                    hello@raimarketingagency.online
                  </a>
                </div>
              </div>

              {/* VIP WhatsApp Line */}
              <div className="flex items-center space-x-3.5 sm:space-x-4 p-3.5 sm:p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold shrink-0">
                  <i className="fa-brands fa-whatsapp text-sm"></i>
                </div>
                <div>
                  <div className="text-[11px] sm:text-xs text-slate-400">VIP WhatsApp Line</div>
                  <a href="https://wa.me/92166025651" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm font-semibold text-emerald-400 hover:underline">
                    +92 1660 25651
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-slate-900/50 backdrop-blur-xl border border-slate-800/80 shadow-2xl relative">
              
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 sm:mb-2">Send Us A Message</h3>
              <p className="text-[11px] sm:text-xs text-slate-400 mb-5 sm:mb-6">Fill out the form below and our engineering team will respond within 2 hours.</p>

              {status && (
                <div className="mb-5 sm:mb-6 p-3.5 sm:p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[11px] sm:text-xs font-medium">
                  {status}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Shafqat Abbas"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-xs focus:outline-none focus:border-purple-500 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">Work Email</label>
                    <input
                      type="email"
                      required
                      placeholder="name@agency.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-xs focus:outline-none focus:border-purple-500 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">Agency / Company Name</label>
                  <input
                    type="text"
                    placeholder="Rai Marketing Agency"
                    value={formData.agency}
                    onChange={(e) => setFormData({ ...formData, agency: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-xs focus:outline-none focus:border-purple-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">How can we help you?</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your target niche or campaign requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-xs focus:outline-none focus:border-purple-500 transition resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs transition shadow-lg shadow-purple-600/30 cursor-pointer"
                >
                  Send Message &rarr;
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}