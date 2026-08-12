'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#040209] text-slate-400 text-xs sm:text-sm border-t border-purple-500/10 relative overflow-hidden">
      
      {/* Background Subtle Ambient Glow Responsive Sizing */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] lg:w-[800px] h-[150px] sm:h-[200px] bg-purple-900/10 blur-[120px] sm:blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8 sm:pb-12 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 pb-8 sm:pb-12 border-b border-slate-800/80">
          
          {/* Brand Info (Spans 2 columns) */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            <Link href="/" className="inline-flex items-center space-x-3">
              <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-400 flex items-center justify-center text-white font-black text-sm shadow-lg shadow-purple-600/30">
                CE
              </span>
              <span className="font-extrabold text-base sm:text-lg text-white tracking-tight">
                ClientEngine AI
              </span>
            </Link>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Autonomous client acquisition engine built for growth agencies, freelancers, and B2B teams. Scrape verified leads, audit websites, and launch automated campaigns on autopilot.
            </p>

            {/* Live System Operational Status */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] sm:text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
              <span>All AI Scrapers & Email Engines Operational</span>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider font-mono">
              Product
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#how-it-works" className="hover:text-purple-400 transition-colors">
                  Sequential Agent Pipeline
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-purple-400 transition-colors">
                  AI Website Audit Engine
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-purple-400 transition-colors">
                  B2B Lead Scraper
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-purple-400 transition-colors">
                  Pricing Plans
                </a>
              </li>
              <li>
                <Link href="/auth" className="hover:text-purple-400 transition-colors">
                  Client Portal / Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Agency */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider font-mono">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="https://raimarketingagency.com" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-colors">
                  Rai Marketing Agency
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-purple-400 transition-colors">
                  VIP 24/7 Setup Support
                </a>
              </li>
              <li>
                <Link href="/auth" className="hover:text-purple-400 transition-colors">
                  Agency Partner Program
                </Link>
              </li>
              <li>
                <a href="mailto:support@clientengine.ai" className="hover:text-purple-400 transition-colors">
                  Contact Engineering Team
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider font-mono">
              Legal
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/privacy" className="hover:text-purple-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-purple-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-purple-400 transition-colors">
                  Data Security & GDPR
                </Link>
              </li>
              <li>
                <Link href="/acceptable-use" className="hover:text-purple-400 transition-colors">
                  Acceptable Use Policy
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Credit */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <div>
            &copy; {new Date().getFullYear()} ClientEngine AI. All rights reserved.
          </div>
          
          <div className="flex items-center justify-center space-x-1 text-slate-400">
            <span>Engineered with precision by</span>
            <span className="font-semibold text-purple-400">Rai Marketing Agency</span>
          </div>
        </div>

      </div>
    </footer>
  );
}