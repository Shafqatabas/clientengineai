'use client';

import { useRouter } from 'next/navigation';

export default function PricingSection() {
  const router = useRouter();

  const handlePlanSelect = (planKey: string) => {
    // Check user login status
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const targetDestination = `/checkout?plan=${planKey}`;

    // Seedha checkout page par navigate karein taake 404 error na aaye
    router.push(targetDestination);
  };

  return (
    <section id="pricing" className="py-12 sm:py-24 relative bg-[#080511] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full glass-card text-purple-300 text-[11px] sm:text-xs font-medium mb-3 sm:mb-4 border border-purple-500/20">
            <i className="fa-solid fa-tags text-purple-400"></i>
            <span>One-Time Investment • Lifetime Access</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white uppercase tracking-tight leading-tight">
            Choose Your AI Acquisition Engine
          </h2>
          <p className="mt-2 sm:mt-3 text-slate-400 text-xs sm:text-sm leading-relaxed">
            Pay once and scale your agency outreach with dedicated autonomous agents. No recurring monthly fees.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          
          {/* CARD 1: Cold Outreach Engine */}
          <div className="glass-card p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-purple-500/20 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4 sm:mb-6 text-purple-400 text-lg sm:text-xl">
                <i className="fa-solid fa-paper-plane"></i>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 sm:mb-2">Cold Outreach Engine</h3>
              <p className="text-[11px] sm:text-xs text-slate-400 mb-4 sm:mb-6 leading-relaxed">
                Essential setup for automated business finding, contact extraction, and initial cold outreach.
              </p>

              <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
                PKR 9,599
              </div>
              <div className="text-[11px] text-purple-400 font-mono mb-4 sm:mb-6">
                One-Time Payment
              </div>

              <div className="text-[11px] sm:text-xs font-mono uppercase text-purple-300 mb-3 tracking-wider font-bold">Package Features:</div>
              
              <ul className="space-y-2.5 sm:space-y-3 text-xs text-slate-300 mb-6 sm:mb-8">
                <li className="flex items-start space-x-2.5">
                  <i className="fa-solid fa-circle-check text-purple-400 mt-0.5 shrink-0"></i>
                  <span>Enter Your Niche & Service Requirements Data</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <i className="fa-solid fa-circle-check text-purple-400 mt-0.5 shrink-0"></i>
                  <span>Target Business & Local Lead Finder</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <i className="fa-solid fa-circle-check text-purple-400 mt-0.5 shrink-0"></i>
                  <span>Verified CEO & Founder Contact Data Extraction</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <i className="fa-solid fa-circle-check text-purple-400 mt-0.5 shrink-0"></i>
                  <span>Automated Cold Email Pitching (Offering Your Services)</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <i className="fa-solid fa-headset text-emerald-400 mt-0.5 shrink-0"></i>
                  <span><strong className="text-white">24/7 Priority Support</strong> (WhatsApp & Email)</span>
                </li>
              </ul>
            </div>

            <button 
              onClick={() => handlePlanSelect('cold-outreach')}
              className="w-full py-3 sm:py-3.5 bg-purple-900/40 hover:bg-purple-800/60 text-purple-200 font-bold text-xs rounded-xl border border-purple-500/30 transition cursor-pointer active:scale-[0.98]"
            >
              Launch Outreach Engine
            </button>
          </div>

          {/* CARD 2: Multi-Ad Inspector & Full Swarm (HIGHLIGHTED) */}
          <div className="glass-card p-5 sm:p-8 rounded-2xl sm:rounded-3xl border-2 border-purple-500 bg-gradient-to-b from-purple-900/30 via-indigo-950/20 to-transparent relative flex flex-col justify-between shadow-2xl shadow-purple-900/40">
            
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 sm:px-4 sm:py-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-extrabold text-[9px] sm:text-[10px] rounded-full uppercase tracking-wider shadow-lg shadow-purple-600/30 whitespace-nowrap">
              MOST POPULAR
            </span>

            <div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center mb-4 sm:mb-6 text-white text-lg sm:text-xl shadow-lg shadow-purple-600/30">
                <i className="fa-solid fa-wand-magic-sparkles"></i>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 sm:mb-2">Ad Inspector & Full Swarm</h3>
              <p className="text-[11px] sm:text-xs text-purple-200/70 mb-4 sm:mb-6 leading-relaxed">
                Complete AI Swarm with live Meta, Google & TikTok Ads scanner plus automated site flaw pitch generation.
              </p>

              <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
                PKR 16,499
              </div>
              <div className="text-[11px] text-cyan-300 font-mono mb-4 sm:mb-6">
                One-Time Payment
              </div>

              <div className="text-[11px] sm:text-xs font-mono uppercase text-purple-300 mb-3 tracking-wider font-bold">Everything in Card 1, Plus:</div>

              <ul className="space-y-2.5 sm:space-y-3 text-xs text-slate-200 mb-6 sm:mb-8">
                <li className="flex items-start space-x-2.5">
                  <i className="fa-solid fa-sparkles text-cyan-400 mt-0.5 shrink-0"></i>
                  <span><strong className="text-white">Meta, Google & TikTok Ads Tracker:</strong> Detect active running ad campaigns</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <i className="fa-solid fa-sparkles text-cyan-400 mt-0.5 shrink-0"></i>
                  <span><strong className="text-white">Client Website Flaw Scanner:</strong> Find missing Meta Pixel & technical bugs</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <i className="fa-solid fa-sparkles text-cyan-400 mt-0.5 shrink-0"></i>
                  <span><strong className="text-white">Smart Flaw Pitching:</strong> Auto-generate pitches based on found website issues</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <i className="fa-solid fa-headset text-emerald-400 mt-0.5 shrink-0"></i>
                  <span><strong className="text-white">24/7 VIP Dedicated Direct Support</strong></span>
                </li>
              </ul>
            </div>

            <button 
              onClick={() => handlePlanSelect('full-swarm')}
              className="w-full py-3 sm:py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-purple-600/40 transition cursor-pointer active:scale-[0.98]"
            >
              Start Scaling Now
            </button>
          </div>

          {/* CARD 3: Custom Offer Engine */}
          <div className="glass-card p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-purple-500/20 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4 sm:mb-6 text-indigo-400 text-lg sm:text-xl">
                <i className="fa-solid fa-sliders"></i>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 sm:mb-2">Custom Offer Engine</h3>
              <p className="text-[11px] sm:text-xs text-slate-400 mb-4 sm:mb-6 leading-relaxed">
                Tailor-made autonomous agent pipeline designed specifically around your agency workflow and volume.
              </p>

              <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
                Custom Quote
              </div>
              <div className="text-[11px] text-indigo-300 font-mono mb-4 sm:mb-6">
                One-Time Project Fee
              </div>

              <div className="text-[11px] sm:text-xs font-mono uppercase text-indigo-300 mb-3 tracking-wider font-bold">Custom Build Features:</div>

              <ul className="space-y-2.5 sm:space-y-3 text-xs text-slate-300 mb-6 sm:mb-8">
                <li className="flex items-start space-x-2.5">
                  <i className="fa-solid fa-check text-indigo-400 mt-0.5 shrink-0"></i>
                  <span>Custom Scraping Rules & High-Volume Leads</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <i className="fa-solid fa-check text-indigo-400 mt-0.5 shrink-0"></i>
                  <span>White-Labeled Client Reporting Portal</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <i className="fa-solid fa-check text-indigo-400 mt-0.5 shrink-0"></i>
                  <span>Dedicated AI Agent Fine-Tuning for Your Niche</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <i className="fa-solid fa-headset text-emerald-400 mt-0.5 shrink-0"></i>
                  <span><strong className="text-white">24/7 Priority Dedicated Engineering Support</strong></span>
                </li>
              </ul>
            </div>

            <button 
              onClick={() => handlePlanSelect('custom-offer')}
              className="w-full py-3 sm:py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl border border-slate-700 transition cursor-pointer active:scale-[0.98]"
            >
              Request Custom Offer
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}