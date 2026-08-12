'use client';

import { useState, useEffect } from 'react';

export default function AgentWorkflow() {
  const [activeStep, setActiveStep] = useState(0);

  const agents = [
    { id: 1, title: 'Agent 1: Data Input', desc: 'Connect target niche, location & service specs.', icon: 'fa-database' },
    { id: 2, title: 'Agent 2: Lead Finder', desc: 'Scrapes business profiles & web listings.', icon: 'fa-magnifying-glass' },
    { id: 3, title: 'Agent 3: Site Inspector', desc: 'Audits Meta Pixel & mobile speed bugs automatically.', icon: 'fa-chart-pie' },
    { id: 4, title: 'Agent 4: Contact Extractor', desc: 'Extracts verified CEO emails & phone numbers.', icon: 'fa-address-card' },
    { id: 5, title: 'Agent 5: Pitch Emailer', desc: 'Drafts personalized emails & launches campaigns.', icon: 'fa-paper-plane' },
    { id: 6, title: 'Agent 6: Auto Follow-Up', desc: 'Tracks replies, sends follow-ups & closes deals.', icon: 'fa-comments' },
  ];

  // Auto Sequence Timer
  useEffect(() => {
    if (activeStep < 7) {
      const timer = setTimeout(() => {
        setActiveStep((prev) => prev + 1);
      }, 1400);
      return () => clearTimeout(timer);
    }
  }, [activeStep]);

  const restartFlow = () => {
    setActiveStep(0);
  };

  return (
    <section id="how-it-works" className="py-12 sm:py-24 relative bg-[#080511] text-white overflow-hidden border-b border-purple-500/10">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[150px] sm:h-[300px] bg-purple-600/10 blur-[80px] sm:blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <span className="px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold bg-purple-500/10 border border-purple-500/20 text-purple-300 uppercase tracking-widest inline-block mb-3 sm:mb-4">
            Interactive Automation Demo
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            How <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400">ClientEngine AI</span> Works
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 sm:mt-3 leading-relaxed">
            Autonomous agents drop in sequence, link together, and handle your client acquisition end-to-end.
          </p>

          <button 
            onClick={restartFlow}
            className="mt-4 sm:mt-6 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-purple-600/20 hover:bg-purple-600/40 border border-purple-500/30 text-purple-300 text-[11px] sm:text-xs font-mono transition inline-flex items-center space-x-2 cursor-pointer"
          >
            <i className="fa-solid fa-rotate-right"></i>
            <span>Replay Demo Animation</span>
          </button>
        </div>

        {/* 3 Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-center relative">
          
          {/* COLUMN 1: Steps 1 to 3 */}
          <div className="space-y-4 sm:space-y-6 relative">
            {agents.slice(0, 3).map((agent, idx) => {
              const stepNumber = idx + 1;
              const isVisible = activeStep >= stepNumber;
              const isLinked = activeStep > stepNumber;

              return (
                <div key={agent.id} className="relative">
                  <div 
                    className={`transition-all duration-700 transform ${
                      isVisible 
                        ? 'translate-y-0 opacity-100 scale-100' 
                        : '-translate-y-10 sm:-translate-y-20 opacity-0 scale-95 pointer-events-none'
                    } glass-card p-4 sm:p-5 rounded-2xl border ${
                      isLinked ? 'border-purple-500/50 shadow-lg shadow-purple-900/30' : 'border-slate-800'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-full border border-purple-500/20">
                        Step 0{agent.id}
                      </span>
                      <span className={`w-2 h-2 rounded-full ${isLinked ? 'bg-emerald-400 animate-pulse' : 'bg-purple-500'}`}></span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-purple-600/20 flex items-center justify-center border border-purple-500/30 text-purple-300 shrink-0">
                        <i className={`fa-solid ${agent.icon} text-xs sm:text-sm`}></i>
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-white">{agent.title}</h4>
                        <p className="text-[11px] sm:text-xs text-slate-400 leading-tight mt-0.5">{agent.desc}</p>
                      </div>
                    </div>
                  </div>

                  {idx < 2 && (
                    <div className="h-4 sm:h-6 w-0.5 mx-auto bg-slate-800 relative overflow-hidden my-1">
                      <div 
                        className={`w-full bg-gradient-to-b from-purple-500 to-cyan-400 transition-all duration-500 ${
                          activeStep > stepNumber ? 'h-full' : 'h-0'
                        }`}
                      ></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* COLUMN 2: Steps 4 to 6 */}
          <div className="space-y-4 sm:space-y-6 relative">
            {agents.slice(3, 6).map((agent, idx) => {
              const stepNumber = idx + 4;
              const isVisible = activeStep >= stepNumber;
              const isLinked = activeStep > stepNumber;

              return (
                <div key={agent.id} className="relative">
                  <div 
                    className={`transition-all duration-700 transform ${
                      isVisible 
                        ? 'translate-y-0 opacity-100 scale-100' 
                        : '-translate-y-10 sm:-translate-y-20 opacity-0 scale-95 pointer-events-none'
                    } glass-card p-4 sm:p-5 rounded-2xl border ${
                      isLinked ? 'border-indigo-500/50 shadow-lg shadow-indigo-900/30' : 'border-slate-800'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-full border border-indigo-500/20">
                        Step 0{agent.id}
                      </span>
                      <span className={`w-2 h-2 rounded-full ${isLinked ? 'bg-emerald-400 animate-pulse' : 'bg-indigo-500'}`}></span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-indigo-600/20 flex items-center justify-center border border-indigo-500/30 text-indigo-300 shrink-0">
                        <i className={`fa-solid ${agent.icon} text-xs sm:text-sm`}></i>
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-white">{agent.title}</h4>
                        <p className="text-[11px] sm:text-xs text-slate-400 leading-tight mt-0.5">{agent.desc}</p>
                      </div>
                    </div>
                  </div>

                  {idx < 2 && (
                    <div className="h-4 sm:h-6 w-0.5 mx-auto bg-slate-800 relative overflow-hidden my-1">
                      <div 
                        className={`w-full bg-gradient-to-b from-indigo-500 to-cyan-400 transition-all duration-500 ${
                          activeStep > stepNumber ? 'h-full' : 'h-0'
                        }`}
                      ></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* COLUMN 3: Final Output Status Card */}
          <div className="flex items-center justify-center relative mt-4 lg:mt-0">
            <div 
              className={`w-full transition-all duration-700 transform ${
                activeStep >= 7 
                  ? 'translate-y-0 opacity-100 scale-100' 
                  : '-translate-y-12 sm:-translate-y-24 opacity-0 scale-90 pointer-events-none'
              } glass-card p-5 sm:p-8 rounded-2xl sm:rounded-3xl border-2 border-emerald-500/80 bg-gradient-to-b from-emerald-950/40 to-slate-900/90 text-center shadow-2xl shadow-emerald-500/20`}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center mx-auto mb-3 sm:mb-4 text-emerald-400 text-xl sm:text-2xl shadow-lg shadow-emerald-500/30 animate-bounce">
                <i className="fa-solid fa-circle-check"></i>
              </div>

              <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-emerald-500/20">
                PIPELINE STATUS
              </span>

              <h3 className="text-lg sm:text-xl font-black text-white mt-2 sm:mt-3 mb-1.5 sm:mb-2">WORK COMPLETED</h3>

              <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed mb-4 sm:mb-6">
                All 6 AI Agents executed successfully. Target niche scanned, website bugs audited, CEO emails verified, and pitches sent.
              </p>

              <div className="p-2.5 sm:p-3 bg-slate-950/80 rounded-xl border border-slate-800 text-left text-[11px] sm:text-xs space-y-1.5 sm:space-y-2 font-mono text-slate-300">
                <div className="flex justify-between"><span>Leads Scanned:</span> <span className="text-emerald-400">247</span></div>
                <div className="flex justify-between"><span>Pitches Sent:</span> <span className="text-emerald-400">19</span></div>
                <div className="flex justify-between"><span>Meetings Booked:</span> <span className="text-emerald-400">4 Deals</span></div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}