'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function AuthPage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);

  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // UI State
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  // Handle Form Submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';
    const payload = isLogin ? { email, password } : { name, email, password };

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage({
          type: 'success',
          text: isLogin ? 'Login successful! Redirecting...' : 'Account created successfully! Please sign in.',
        });

        if (isLogin) {
          setTimeout(() => {
            router.push('/');
          }, 1500);
        } else {
          setIsLogin(true);
          setPassword('');
        }
      } else {
        setMessage({ type: 'error', text: data.message || 'Something went wrong' });
      }
    } catch (err) {
      setMessage({ type: 'error', text: 'Failed to connect to server.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#080511] text-white pt-24 sm:pt-28 pb-16 relative overflow-hidden font-sans selection:bg-purple-500 selection:text-black">
      
      {/* Background Animated Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] h-[200px] sm:h-[300px] bg-purple-600/15 blur-[80px] sm:blur-[100px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-cyan-500/10 blur-[100px] sm:blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center justify-center">
        
        {/* Back Button */}
        <Link 
          href="/" 
          className="self-start sm:absolute sm:top-10 sm:left-8 mb-6 sm:mb-0 flex items-center space-x-2 text-xs text-slate-400 hover:text-white transition"
        >
          <i className="fa-solid fa-arrow-left"></i>
          <span>Back to Home</span>
        </Link>

        {/* Brand Logo */}
        <Link href="/" className="flex items-center space-x-3 mb-8 cursor-pointer">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-purple-600/30">
            <i className="fa-solid fa-bolt text-white text-lg"></i>
          </div>
          <span className="text-2xl font-bold text-white tracking-tight">
            ClientEngine <span className="text-purple-400">AI</span>
          </span>
        </Link>

        {/* Auth Card */}
        <div className="w-full max-w-md glass-card p-6 sm:p-8 rounded-3xl border border-purple-500/20 shadow-2xl backdrop-blur-xl">
          
          {/* Tabs */}
          <div className="flex border-b border-slate-800 mb-6 text-sm">
            <button 
              type="button"
              onClick={() => {
                setIsLogin(true);
                setMessage({ type: '', text: '' });
              }}
              className={`flex-1 text-center pb-3 font-semibold transition ${
                isLogin ? 'text-purple-300 border-b-2 border-purple-500' : 'text-slate-400 hover:text-white'
              }`}
            >
              Sign In
            </button>
            <button 
              type="button"
              onClick={() => {
                setIsLogin(false);
                setMessage({ type: '', text: '' });
              }}
              className={`flex-1 text-center pb-3 font-semibold transition ${
                !isLogin ? 'text-purple-300 border-b-2 border-purple-500' : 'text-slate-400 hover:text-white'
              }`}
            >
              Register
            </button>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-white mb-4">
            {isLogin ? 'Welcome Back' : 'Create Your Engine Account'}
          </h3>

          {/* Success / Error Notification Message */}
          {message.text && (
            <div className={`p-3 rounded-xl mb-4 text-xs font-medium border ${
              message.type === 'success' 
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' 
                : 'bg-red-500/10 border-red-500/30 text-red-400'
            }`}>
              {message.text}
            </div>
          )}

          {/* Auth Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            
            {!isLogin && (
              <div>
                <label className="text-xs text-slate-400 mb-1 block">Full Name</label>
                <input 
                  type="text" 
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Rai Shafqat Abbas" 
                  className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-slate-900/80 text-sm text-white placeholder-slate-600 border border-purple-500/20 focus:outline-none focus:border-purple-400 transition"
                />
              </div>
            )}

            <div>
              <label className="text-xs text-slate-400 mb-1 block">Email Address</label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="CEO@Raimarketing.com" 
                className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-slate-900/80 text-sm text-white placeholder-slate-600 border border-purple-500/20 focus:outline-none focus:border-purple-400 transition"
              />
            </div>

            <div>
              <label className="text-xs text-slate-400 mb-1 block">Password</label>
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••" 
                className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-slate-900/80 text-sm text-white placeholder-slate-600 border border-purple-500/20 focus:outline-none focus:border-purple-400 transition"
              />
            </div>

            {isLogin && (
              <div className="text-right">
                <a href="#" className="text-xs text-purple-400 hover:text-purple-300 transition">
                  Forgot Password?
                </a>
              </div>
            )}

            <button 
              type="submit"
              disabled={loading}
              className="w-full py-3 mt-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 disabled:opacity-50 text-white font-bold text-sm rounded-xl shadow-lg shadow-purple-600/30 transition flex items-center justify-center space-x-2"
            >
              <span>{loading ? 'Processing...' : isLogin ? 'Sign In Now' : 'Create Account'}</span>
              {!loading && <i className="fa-solid fa-arrow-right text-xs"></i>}
            </button>
          </form>

          {/* Social Logins */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-800"></div>
            </div>
            <div className="relative flex justify-center text-[10px] sm:text-xs uppercase">
              <span className="bg-[#080511] px-3 text-slate-500">Or continue with</span>
            </div>
          </div>

          <div className="flex gap-3">
            <button type="button" className="flex-1 py-2.5 glass-card rounded-xl border border-slate-800 flex items-center justify-center hover:bg-slate-900 transition">
              <i className="fa-brands fa-google text-white text-base"></i>
            </button>
            <button type="button" className="flex-1 py-2.5 glass-card rounded-xl border border-slate-800 flex items-center justify-center hover:bg-slate-900 transition">
              <i className="fa-brands fa-github text-white text-base"></i>
            </button>
          </div>

        </div>

      </div>
    </main>
  );
}