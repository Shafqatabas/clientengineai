'use client';

import Link from 'next/link';

export default function CtaBanner() {
  return (
    <section className="relative bg-[#080511] py-12 sm:py-20 lg:py-24 overflow-hidden border-b border-purple-500/10">
      
      {/* Background Glow Responsive Sizing */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[300px] sm:w-[500px] lg:w-[700px] h-[200px] sm:h-[300px] lg:h-[350px] bg-gradient-to-r from-purple-600/20 via-indigo-600/20 to-cyan-500/10 blur-[120px] sm:blur-[160px] rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner Box */}
        <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-b from-purple-900/30 via-slate-900/80 to-slate-950/90 border border-purple-500/30 p-6 sm:p-12 lg:p-16 text-center backdrop-blur-2xl shadow-2xl shadow-purple-950/50">
          
          <span className="px-3.5 py-1.5 sm:px-4 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold bg-purple-500/10 border border-purple-500/30 text-purple-300 uppercase tracking-widest inline-block mb-4 sm:mb-6">
            Start Your Free Trial
          </span>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight max-w-3xl mx-auto leading-tight">
            Ready to Automate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400">Client Acquisition?</span>
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm lg:text-base max-w-2xl mx-auto mt-4 sm:mt-6 leading-relaxed">
            Join 100+ growth agencies and freelancers using ClientEngine AI to scrape leads, run automated audits, and close high-ticket clients on autopilot.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/auth"
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm transition-all transform hover:-translate-y-0.5 shadow-lg shadow-purple-600/30 flex items-center justify-center space-x-2"
            >
              <span>Get Started For Free</span>
              <span className="text-sm sm:text-base">&rarr;</span>
            </Link>
          </div>

          <p className="text-[11px] sm:text-xs text-slate-500 mt-5 sm:mt-6 font-medium">
            No credit card required. Instant access to lead generation engines.
          </p>
        </div>

      </div>
    </section>
  );
}