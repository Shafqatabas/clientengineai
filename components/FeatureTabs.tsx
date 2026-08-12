'use client';

export default function CoreFeatures() {
  const features = [
    {
      id: "01",
      badge: "Scraper AI",
      title: "Automated Lead Scraping",
      description: "Extract verified business emails, phone numbers, and decision-maker contact info in seconds with zero manual effort.",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      highlight: "Over 98% email deliverability rate"
    },
    {
      id: "02",
      badge: "Automated Audits",
      title: "AI Website Audits",
      description: "Generate instant, white-label website review reports for prospective clients to highlight missing SEO, slow load speeds, and UI flaws.",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      highlight: "Convert cold prospects into warm leads"
    },
    {
      id: "03",
      badge: "Personalized Outreach",
      title: "Smart Cold Emailing",
      description: "Send personalized, AI-crafted cold emails at scale. Automatically incorporate audit insights to drive sky-high reply rates.",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      highlight: "3x higher response rate"
    },
    {
      id: "04",
      badge: "Pipeline Engine",
      title: "Live Pipeline CRM",
      description: "Track deal stages, automated follow-ups, and agency revenue in real-time without leaving your unified dashboard.",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 001 1h2a2 2 0 001-1m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      highlight: "Effortlessly close high-ticket clients"
    }
  ];

  return (
    <section className="relative bg-[#080511] py-12 sm:py-24 border-b border-purple-500/10 overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] sm:w-[800px] h-[200px] sm:h-[400px] bg-purple-600/10 blur-[90px] sm:blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-indigo-500/10 blur-[80px] sm:blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold bg-purple-500/10 border border-purple-500/20 text-purple-300 uppercase tracking-widest inline-block mb-3 sm:mb-4">
            Engine Core Capabilities
          </span>
          <h2 className="text-2xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Everything You Need To <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Automate Client Acquisition</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-base mt-3 sm:mt-4 leading-relaxed">
            Stop wasting 20+ hours every week on manual prospecting. Let AI scrapers, audit engines, and smart outreach fill your calendar.
          </p>
        </div>

        {/* Responsive Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group relative bg-slate-900/50 backdrop-blur-xl border border-slate-800/80 hover:border-purple-500/40 p-5 sm:p-8 rounded-2xl sm:rounded-3xl transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-purple-500/10 flex flex-col justify-between"
            >
              {/* Card Header */}
              <div>
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-slate-800/80 border border-slate-700/50 flex items-center justify-center group-hover:scale-110 group-hover:border-purple-500/40 transition-all shrink-0">
                    {feature.icon}
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold font-mono px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-slate-800 text-slate-400 group-hover:text-purple-300 group-hover:bg-purple-900/30 transition">
                    {feature.badge}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-purple-300 transition">
                  {feature.title}
                </h3>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                  {feature.description}
                </p>
              </div>

              {/* Card Footer Highlight */}
              <div className="pt-3 sm:pt-4 border-t border-slate-800/60 flex items-center space-x-2 text-[11px] sm:text-xs font-medium text-emerald-400">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>{feature.highlight}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}