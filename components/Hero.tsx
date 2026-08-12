'use client';

export default function Hero() {
  return (
    <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 relative overflow-hidden bg-[#080511] text-white">
      
      {/* Dynamic Animated Background Elements - Responsive sizing */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        
        {/* Main Rotating Glowing Orbs - Reduced size on mobile */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[200px] sm:h-[350px] bg-purple-600/25 blur-[80px] sm:blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute top-10 right-10 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-cyan-500/15 blur-[100px] sm:blur-[140px] rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-10 left-10 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-indigo-600/20 blur-[110px] sm:blur-[150px] rounded-full"></div>

        {/* Floating Moving Lights / Glowing Particles */}
        <div className="absolute top-1/3 left-1/5 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_12px_#06b6d4] animate-bounce duration-1000"></div>
        <div className="absolute top-2/3 right-1/4 w-2.5 h-2.5 rounded-full bg-purple-400 shadow-[0_0_15px_#c084fc] animate-pulse"></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 rounded-full bg-indigo-300 shadow-[0_0_10px_#a5b4fc] animate-ping"></div>

        {/* Subtle Grid Lines Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] sm:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Headline, Subheadline & Buttons */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6 flex flex-col items-center lg:items-start">
            
            {/* Top Badge */}
            <div className="inline-flex items-center space-x-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full glass-card text-purple-300 text-[11px] sm:text-xs font-medium border border-purple-500/30 backdrop-blur-md">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Next-Gen B2B Client Acquisition Engine</span>
            </div>

            {/* Main Headline - Responsive Text Sizes */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.2] sm:leading-[1.1] uppercase max-w-xl lg:max-w-none">
              Get High-Paying <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400">
                B2B Clients
              </span> On Autopilot
            </h1>

            {/* Sub-headline - Smaller on mobile */}
            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-lg lg:max-w-2xl font-normal">
              Autonomous AI agent swarm that finds leads, audits website bugs & Meta Pixel flaws, extracts verified CEO contacts, and dispatches personalized pitch emails automatically.
            </p>

            {/* 2 Call to Action Buttons - Stacks vertically on mobile */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto max-w-sm sm:max-w-none">
              
              {/* Button 1: WhatsApp Button */}
              <a 
                href="https://wa.me/923166025651" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-5 sm:px-6 py-3 sm:py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-emerald-600/30 transition flex items-center justify-center space-x-2"
              >
                <i className="fa-brands fa-whatsapp text-base sm:text-lg"></i>
                <span>Get Touch in WhatsApp</span>
              </a>

              {/* Button 2: Get Client Engine AI */}
              <a 
                href="#pricing" 
                className="px-5 sm:px-6 py-3 sm:py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-purple-600/30 transition flex items-center justify-center space-x-2"
              >
                <span>Get Client Engine AI</span>
                <i className="fa-solid fa-arrow-right text-[10px] sm:text-xs"></i>
              </a>

            </div>

          </div>

          {/* RIGHT COLUMN: Tool Preview Mockup - Scales and centers on mobile */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0 max-w-md mx-auto lg:max-w-none w-full">
            <div className="relative rounded-2xl sm:rounded-3xl glass-card p-3 sm:p-4 border border-purple-500/30 shadow-2xl shadow-purple-950/50 overflow-hidden group backdrop-blur-xl">
              
              {/* Header Bar - Smaller text on mobile */}
              <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-white/10 mb-3 sm:mb-4 text-[10px] sm:text-xs text-slate-400">
                <div className="flex items-center space-x-1.5 sm:space-x-2">
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-500/80"></span>
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-yellow-500/80"></span>
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-500/80"></span>
                </div>
                <span className="font-mono text-[9px] sm:text-[10px] text-purple-300">ClientEngine AI v2.4</span>
              </div>

              {/* Tool Dashboard Visual - Smaller paddings */}
              <div className="relative rounded-xl sm:rounded-2xl bg-slate-950/80 p-4 sm:p-5 border border-white/5 space-y-3 sm:space-y-4">
                
                <div className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-purple-950/30 border border-purple-500/20">
                  <div className="flex items-center space-x-2.5 sm:space-x-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-purple-600/20 flex items-center justify-center text-purple-400">
                      <i className="fa-solid fa-bolt text-[11px] sm:text-xs"></i>
                    </div>
                    <div>
                      <div className="text-[11px] sm:text-xs font-bold text-white">Active AI Swarm</div>
                      <div className="text-[9px] sm:text-[10px] text-slate-400">6 Agents Processing</div>
                    </div>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 sm:px-2 py-0.5 rounded border border-emerald-500/20">
                    Live Scrapes
                  </span>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1.5 sm:space-y-2">
                  <div className="flex items-center justify-between text-[11px] sm:text-xs">
                    <span className="font-bold text-white truncate mr-2">Apex Marketing Ltd.</span>
                    <span className="text-[9px] sm:text-[10px] text-red-400 bg-red-500/10 px-1.5 sm:px-2 py-0.5 rounded flex-shrink-0">Pixel Missing</span>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-slate-400 truncate">CEO Contact: alex@apexmarketing.com</p>
                  <div className="flex items-center justify-between pt-1 sm:pt-1.5 border-t border-slate-800 text-[9px] sm:text-[10px] text-indigo-300">
                    <span>Audit Status: Flaws Detected</span>
                    <span className="text-emerald-400">Pitch Sent &check;</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-[9px] sm:text-[10px] text-slate-400 font-mono">
                    <span>Target Acquisition Flow</span>
                    <span className="text-purple-400">89%</span>
                  </div>
                  <div className="w-full bg-slate-900 h-1 sm:h-1.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-purple-500 to-cyan-400 h-full w-[89%] rounded-full"></div>
                  </div>
                </div>

              </div>

              {/* Floating Badge - Responsive positioning and size */}
              <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 glass-card px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl border border-purple-500/40 shadow-xl flex items-center space-x-1.5 sm:space-x-2 backdrop-blur-md">
                <i className="fa-solid fa-circle-check text-emerald-400 text-xs sm:text-sm"></i>
                <span className="text-[10px] sm:text-xs font-bold text-white">4 New Deals Closed Today</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}