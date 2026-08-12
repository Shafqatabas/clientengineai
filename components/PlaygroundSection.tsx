'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PlaygroundSection() {
  const [niche, setNiche] = useState('');
  const [location, setLocation] = useState('');
  const router = useRouter();

  const handleRunPlayground = (e: React.FormEvent) => {
    e.preventDefault();
    if (!niche.trim()) return;

    // Streamlit app link par query parameters ke sath redirect karna
    const streamlitUrl = `https://rai-sdr-dashboard.streamlit.app/?niche=${encodeURIComponent(niche)}&location=${encodeURIComponent(location)}`;
    
    window.open(streamlitUrl, '_blank');
  };

  return (
    <section id="playground" className="relative bg-[#080511] py-12 sm:py-20 lg:py-24 border-b border-purple-500/10 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] lg:w-[800px] h-[250px] sm:h-[400px] bg-purple-600/10 blur-[140px] sm:blur-[180px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="px-3.5 py-1.5 sm:px-4 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold bg-purple-500/10 border border-purple-500/20 text-purple-300 uppercase tracking-widest inline-block mb-3 sm:mb-4">
            Interactive AI Demo
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Test The AI Engine <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400">Live In Action</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm lg:text-base mt-3 sm:mt-4 leading-relaxed">
            Enter your target business niche and launch your live Streamlit AI dashboard instantly to extract verified CEO contacts.
          </p>
        </div>

        {/* Playground Card */}
        <div className="max-w-3xl mx-auto rounded-2xl sm:rounded-3xl bg-slate-900/60 backdrop-blur-2xl border border-purple-500/30 p-6 sm:p-10 shadow-2xl shadow-purple-950/40">
          
          <form onSubmit={handleRunPlayground} className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">Target Business Niche</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Real Estate, Dental Clinic"
                  value={niche}
                  onChange={(e) => setNiche(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/90 border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:border-purple-500 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">Target Location (Optional)</label>
                <input
                  type="text"
                  placeholder="e.g. New York, London, Sahiwal"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/90 border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:border-purple-500 transition"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm transition shadow-lg shadow-purple-600/30 cursor-pointer flex items-center justify-center space-x-2"
            >
              <span>Launch Live AI Dashboard &rarr;</span>
            </button>
          </form>

          <p className="text-center text-[11px] sm:text-xs text-slate-500 mt-4">
            Opens your live Streamlit agent pipeline in a new tab securely.
          </p>

        </div>

      </div>
    </section>
  );
}