'use client';

export default function FounderSection() {
  return (
    <section className="py-12 sm:py-20 relative bg-[#0b0718] border-y border-white/5 text-white overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[180px] sm:h-[300px] bg-purple-600/10 blur-[80px] sm:blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 border border-purple-500/20 shadow-2xl relative bg-gradient-to-r from-purple-950/30 via-slate-900/60 to-slate-950/80">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            {/* Left Side: Agency & Founder Details */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-[10px] sm:text-xs font-mono">
                <i className="fa-solid fa-award text-purple-400"></i>
                <span>Engineered By Rai Marketing Agency</span>
              </div>

              {/* Title */}
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight uppercase leading-snug sm:leading-tight">
                Built By Growth Experts, <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400">
                  Backed By 24/7 VIP Support
                </span>
              </h2>

              {/* Subtext */}
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                ClientEngine AI is an exclusive autonomous acquisition workflow created by <strong className="text-white">Rai Marketing Agency</strong>. When you launch with us, you don't just get an AI tool—you get our team resolving every setup challenge and campaign issue around the clock.
              </p>

              {/* Founder Info & Signature Card */}
              <div className="pt-4 flex items-center space-x-3 sm:space-x-4 border-t border-white/10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-500 p-0.5 shadow-lg shadow-purple-600/30 shrink-0">
                  <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center font-bold text-base sm:text-lg text-purple-300 font-mono">
                    SA
                  </div>
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white tracking-wide">Shafqat Abbas</h4>
                  <p className="text-[11px] sm:text-xs font-mono text-purple-400">Founder & CEO — Rai Marketing Agency</p>
                </div>
              </div>

            </div>

            {/* Right Side: 24/7 Dedicated Support & Problem Solving Cards */}
            <div className="lg:col-span-5 space-y-3 sm:space-y-4 mt-2 lg:mt-0">
              
              {/* Feature Box 1 */}
              <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl glass-card border border-purple-500/20 bg-slate-900/60 flex items-start space-x-3 sm:space-x-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-base sm:text-lg shrink-0">
                  <i className="fa-solid fa-headset"></i>
                </div>
                <div>
                  <h5 className="text-xs sm:text-sm font-bold text-white mb-1">24/7 Direct Support</h5>
                  <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                    Get 24/7 priority assistance via WhatsApp and email for any campaign configuration or agent tweaking needs.
                  </p>
                </div>
              </div>

              {/* Feature Box 2 */}
              <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl glass-card border border-purple-500/20 bg-slate-900/60 flex items-start space-x-3 sm:space-x-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 text-base sm:text-lg shrink-0">
                  <i className="fa-solid fa-screwdriver-wrench"></i>
                </div>
                <div>
                  <h5 className="text-xs sm:text-sm font-bold text-white mb-1">100% Problem Solving Guarantee</h5>
                  <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                    Our technical engineers personally monitor your lead pipelines and resolve delivery or scraping issues immediately.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}