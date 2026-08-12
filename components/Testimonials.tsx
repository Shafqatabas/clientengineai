'use client';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "ClientEngine AI helped us book 15 discovery calls in week 1. The automated site audit reports make cold outreach feel like a warm introduction.",
      author: "Hassan Malik",
      role: "Founder, Rai Marketing Agency",
      metric: "15 Calls in Week 1",
      avatar: "HM",
      rating: 5,
    },
    {
      quote: "We went from spending 20 hours a week on manual lead scraping to under 30 minutes. The email deliverability and verified CEO contacts are top tier.",
      author: "Sarah Jenkins",
      role: "Growth Lead, Apex Media",
      metric: "20+ Hours Saved / Wk",
      avatar: "SJ",
      rating: 5,
    },
    {
      quote: "The personalized website flaw breakdown in cold emails tripled our response rate instantly. Signed two $3k/mo retainer clients in our first month.",
      author: "Tariq Mahmood",
      role: "CEO, ScaleVibe Digital",
      metric: "$6k/mo New ARR",
      avatar: "TM",
      rating: 5,
    },
  ];

  return (
    <section className="relative bg-[#080511] py-12 sm:py-20 lg:py-24 border-b border-purple-500/10 overflow-hidden">
      
      {/* Background Ambient Glow Responsive Sizing */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] lg:w-[700px] h-[200px] sm:h-[300px] lg:h-[350px] bg-indigo-600/10 blur-[120px] sm:blur-[160px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="px-3.5 py-1.5 sm:px-4 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold bg-purple-500/10 border border-purple-500/20 text-purple-300 uppercase tracking-widest inline-block mb-3 sm:mb-4">
            Proven Results
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Trusted By Agencies <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400">Closing Big Deals</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm lg:text-base mt-3 sm:mt-4 leading-relaxed">
            See how growth agencies and freelancers are scaling their client acquisition with ClientEngine AI.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group relative bg-slate-900/50 backdrop-blur-xl border border-slate-800/80 hover:border-purple-500/40 p-6 sm:p-8 rounded-2xl sm:rounded-3xl transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-purple-500/10 flex flex-col justify-between"
            >
              <div>
                {/* Metric Badge & Stars */}
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <span className="text-[11px] sm:text-xs font-bold font-mono px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300">
                    {item.metric}
                  </span>
                  
                  {/* Star Rating */}
                  <div className="flex space-x-1 text-amber-400 text-xs">
                    {[...Array(item.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>

                {/* Quote Text */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed italic mb-6 sm:mb-8">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-5 sm:pt-6 border-t border-slate-800/80 flex items-center space-x-3.5 sm:space-x-4">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center text-white font-bold text-xs sm:text-sm shrink-0 shadow-md">
                  {item.avatar}
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-purple-300 transition">
                    {item.author}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">
                    {item.role}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}