'use client';

import { useState } from 'react';

export default function AuditDashboard() {
  const [country, setCountry] = useState('United States');
  const [keyword, setKeyword] = useState('Real Estate');
  const [service, setService] = useState('Lead Generation');

  return (
    <section id="audit" className="py-20 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold text-white">Website Audit Engine</h2>
          <p className="text-sm text-slate-400 mt-2">Real-time audit results and AI insights per prospective client.</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
          {/* Controls Bar */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">Country</label>
              <select value={country} onChange={(e) => setCountry(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white">
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Canada">Canada</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">Industry Keyword</label>
              <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">Offered Service</label>
              <select value={service} onChange={(e) => setService(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white">
                <option value="Lead Generation">Lead Generation</option>
                <option value="Website Speed Optimization">Website Speed</option>
              </select>
            </div>
            <div className="flex items-end">
              <button className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-2.5 rounded-xl transition text-sm flex items-center justify-center space-x-2">
                <i className="fa-solid fa-wand-magic-sparkles"></i>
                <span>Run Audit</span>
              </button>
            </div>
          </div>

          {/* Audit Result Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-5 bg-slate-950 rounded-2xl border border-red-500/20">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-bold text-white">Meta Pixel</span>
                <span className="px-2 py-0.5 rounded text-[10px] bg-red-500/10 text-red-400 font-bold">Issue Detected</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-1">Meta Pixel Missing</h4>
              <p className="text-xs text-slate-400">No Meta Pixel found on target landing page. Conversion tracking inactive.</p>
            </div>

            <div className="p-5 bg-slate-950 rounded-2xl border border-amber-500/20 text-center">
              <span className="text-xs font-bold text-white block text-left mb-2">Mobile Speed</span>
              <div className="w-20 h-20 mx-auto rounded-full border-4 border-amber-500 flex items-center justify-center my-2">
                <span className="text-2xl font-bold text-white">28<span className="text-xs text-slate-500">/100</span></span>
              </div>
              <p className="text-xs text-slate-400">Page load speed poor on mobile devices.</p>
            </div>

            <div className="p-5 bg-slate-950 rounded-2xl border border-emerald-500/20">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-bold text-white">SSL Certificate</span>
                <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-400 font-bold">Secure</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-1">SSL is Active</h4>
              <p className="text-xs text-slate-400">Website secured with valid SSL certificate.</p>
            </div>
          </div>

          {/* Contact + Auto Pitch Preview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 bg-slate-950 rounded-2xl border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase">Verified CEO Email</span>
                <div className="text-base font-bold text-white mt-2">john.doe@prestigerealestate.com</div>
                <span className="inline-block mt-2 px-2.5 py-0.5 rounded-full text-xs bg-emerald-500/10 text-emerald-400">Confidence Score: 98%</span>
              </div>
              <button className="w-full mt-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl">
                Unlock Contact Details
              </button>
            </div>

            <div className="p-5 bg-slate-950 rounded-2xl border border-slate-800">
              <span className="text-xs font-bold text-cyan-400 uppercase block mb-2">AI Generated Pitch Preview</span>
              <p className="text-xs text-slate-300 italic leading-relaxed">
                "Hi John, I noticed Prestige Real Estate's website is running active ads but missing key tracking tools like Meta Pixel, costing you qualified leads. Would love to share a 2-minute video fix."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}