export default function Comparison() {
  return (
    <section id="comparison" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white uppercase">Save Big With ClientEngine AI</h2>
          <p className="text-xs text-slate-400 mt-2">Why pay multiple subscriptions when you can get everything for $97/mo?</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: Traditional Way */}
          <div className="glass-card p-8 rounded-3xl border border-red-500/20">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Other Ways</div>
            <p className="text-xs text-slate-500 mb-6">If you subscribe to each tool individually, you pay:</p>
            
            <div className="text-4xl font-extrabold text-red-400 mb-6">$1,500 <span className="text-xs text-slate-500 font-normal">/month</span></div>

            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-center justify-between"><span>Lead Scraper Software</span> <span className="text-slate-500">$299/mo</span></li>
              <li className="flex items-center justify-between"><span>Audit & SEO Tools</span> <span className="text-slate-500">$199/mo</span></li>
              <li className="flex items-center justify-between"><span>Email Verification Service</span> <span className="text-slate-500">$149/mo</span></li>
              <li className="flex items-center justify-between"><span>AI Cold Email Copywriter</span> <span className="text-slate-500">$99/mo</span></li>
              <li className="flex items-center justify-between"><span>Agency CRM & Pipeline</span> <span className="text-slate-500">$299/mo</span></li>
            </ul>
          </div>

          {/* Card 2: With ClientEngine AI */}
          <div className="glass-card p-8 rounded-3xl border-2 border-purple-500 bg-gradient-to-b from-purple-900/20 to-transparent relative shadow-2xl shadow-purple-900/30">
            <span className="absolute -top-3 right-6 px-3 py-1 bg-purple-600 text-white font-bold text-[10px] rounded-full uppercase tracking-wider">ALL-IN-ONE</span>
            <div className="text-xs font-bold text-purple-300 uppercase tracking-wider mb-2">With ClientEngine AI</div>
            <p className="text-xs text-purple-200/60 mb-6">Get full access to all features in one unified workspace:</p>

            <div className="text-4xl font-extrabold text-white mb-6">$97 <span className="text-xs text-purple-300/60 font-normal">/month</span></div>

            <ul className="space-y-3 text-xs text-slate-200">
              <li className="flex items-center space-x-2"><i className="fa-solid fa-circle-check text-purple-400"></i><span>Unlimited Lead Generation</span></li>
              <li className="flex items-center space-x-2"><i className="fa-solid fa-circle-check text-purple-400"></i><span>Automated Technical Audit Engine</span></li>
              <li className="flex items-center space-x-2"><i className="fa-solid fa-circle-check text-purple-400"></i><span>Verified Decision Maker Contact Data</span></li>
              <li className="flex items-center space-x-2"><i className="fa-solid fa-circle-check text-purple-400"></i><span>AI Pitch Generator & Cold Sequences</span></li>
              <li className="flex items-center space-x-2"><i className="fa-solid fa-circle-check text-purple-400"></i><span>Built-In Agency CRM Dashboard</span></li>
            </ul>

            <button className="w-full mt-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-purple-600/30">
              Get Access Now
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}