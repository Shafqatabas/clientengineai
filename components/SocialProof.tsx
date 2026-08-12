'use client';

import { useEffect, useState } from 'react';

// Animated Counter Sub-Component
function Counter({ target, suffix = '', decimals = 0 }: { target: number; suffix?: string; decimals?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString()}
      {suffix}
    </span>
  );
}

export default function SocialProof() {
  const stats = [
    { label: "Active Agencies", target: 100, suffix: "+" },
    { label: "Websites Audited", target: 50000, suffix: "+" },
    { label: "Leads Extracted", target: 250000, suffix: "+" },
    { label: "Avg. Conversion Boost", target: 3.4, suffix: "x", decimals: 1 },
  ];

  const items = [
    { name: "Next.js", icon: "N" },
    { name: "Prisma", icon: "P" },
    { name: "Tailwind CSS", icon: "T" },
    { name: "OpenAI", icon: "AI" },
    { name: "PostgreSQL", icon: "PG" },
    { name: "Stripe", icon: "S" },
    { name: "Rai Marketing", icon: "RM" },
    { name: "Apex Media", icon: "AM" },
    { name: "ScaleVibe Agency", icon: "SV" },
  ];

  const marqueeList = [...items, ...items, ...items];

  return (
    <section className="relative bg-[#080511] py-8 sm:py-12 border-y border-purple-500/10 overflow-hidden">
      
      {/* Infinite Left to Right Animation Styles */}
      <style>{`
        @keyframes scroll-ltr {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee-ltr {
          display: flex;
          width: max-content;
          animation: scroll-ltr 25s linear infinite;
        }
        .animate-marquee-ltr:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Background Subtle Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[100px] bg-purple-600/10 blur-[80px] sm:blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Responsive Metric Counter Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pb-8 sm:pb-10 border-b border-slate-800/80">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center sm:text-left p-2 sm:p-0">
              <div className="text-xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">
                <Counter target={stat.target} suffix={stat.suffix} decimals={stat.decimals || 0} />
              </div>
              <div className="text-[11px] sm:text-sm text-slate-400 mt-1 font-medium leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Moving Logo Marquee Section */}
        <div className="mt-6 sm:mt-8 text-center">
          <p className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-400 font-semibold mb-4 sm:mb-6">
            Trusted By Top Growth Agencies & Powered By Enterprise Tech
          </p>

          {/* Marquee Wrapper with Side Fades */}
          <div className="relative w-full overflow-hidden">
            {/* Left/Right Gradient Fades for Mobile & Desktop */}
            <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-r from-[#080511] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-l from-[#080511] to-transparent z-10 pointer-events-none"></div>

            <div className="animate-marquee-ltr space-x-3 sm:space-x-4 py-1">
              {marqueeList.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-purple-500/40 transition shrink-0 group cursor-pointer"
                >
                  <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-purple-500/20 text-purple-300 font-bold text-[10px] sm:text-xs flex items-center justify-center group-hover:bg-purple-500 group-hover:text-white transition">
                    {item.icon}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-slate-300 group-hover:text-white transition whitespace-nowrap">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}