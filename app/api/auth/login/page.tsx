'use client';

import { useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';

function LoginContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const redirectUrl = searchParams.get('redirect') || '/dashboard';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    if (!email || !password) {
      setError('Please enter both email and password.');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Invalid credentials');
      }

      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', data.user.email);
      localStorage.setItem('userName', data.user.name);

      router.push(redirectUrl);
    } catch (err: any) {
      setError(err.message || 'Something went wrong during login.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickDemoLogin = () => {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userEmail', 'demo@agency.com');
    router.push(redirectUrl);
  };

  return (
    <div className="min-h-screen bg-[#080511] text-white py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center relative overflow-hidden">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-purple-600/10 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-md w-full relative z-10">
        
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-3 mb-4">
            <span className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center text-white font-black text-sm shadow-lg shadow-purple-600/30">
              CE
            </span>
            <span className="font-extrabold text-xl tracking-tight text-white">ClientEngine AI</span>
          </Link>
          <h1 className="text-2xl font-extrabold text-white tracking-tight uppercase mt-2">
            Sign In To Continue
          </h1>
          <p className="mt-2 text-xs text-slate-400">
            Access your autonomous acquisition engine & campaign workspace.
          </p>
        </div>

        <div className="glass-card p-6 sm:p-8 rounded-3xl border border-purple-500/20 shadow-2xl bg-slate-900/60 backdrop-blur-xl">
          
          {redirectUrl.includes('/checkout') && (
            <div className="mb-6 p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs flex items-center space-x-2.5">
              <span>Sign in required to proceed to secure account checkout.</span>
            </div>
          )}

          {error && (
            <div className="mb-6 p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center space-x-2.5">
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4 sm:space-y-5">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="agency@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-xs focus:outline-none focus:border-purple-500 transition"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-medium text-slate-300">
                  Password
                </label>
                <a href="#" className="text-[11px] text-purple-400 hover:underline">
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-xs focus:outline-none focus:border-purple-500 transition"
              />
            </div>

            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center space-x-2 cursor-pointer text-slate-400">
                <input
                  type="checkbox"
                  defaultChecked
                  className="rounded bg-slate-950 border-slate-800 text-purple-600 focus:ring-0 cursor-pointer"
                />
                <span>Remember me</span>
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs transition shadow-lg shadow-purple-600/30 flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
            >
              {isLoading ? (
                <span>Authenticating...</span>
              ) : (
                <>
                  <span>Sign In & Continue</span>
                  <span>&rarr;</span>
                </>
              )}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-slate-800/80 text-center">
            <p className="text-xs text-slate-400">
              Need quick testing?{' '}
              <button 
                type="button"
                onClick={handleQuickDemoLogin}
                className="text-purple-400 font-bold hover:underline cursor-pointer bg-transparent border-0 p-0"
              >
                Instant Access Demo Login
              </button>
            </p>
          </div>

        </div>

        <div className="mt-8 text-center text-[11px] text-slate-500">
          Engineered by <strong className="text-slate-400">Rai Marketing Agency</strong>
        </div>

      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#080511] text-white flex items-center justify-center text-xs font-mono">Loading Login...</div>}>
      <LoginContent />
    </Suspense>
  );
}