'use client';

import { useState } from 'react';
import Link from 'next/link'; // Import Link component

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#080511]/90 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center space-x-3 cursor-pointer">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-purple-600/30">
            <i className="fa-solid fa-bolt text-white text-sm"></i>
          </div>
          <span className="text-xl font-bold text-white tracking-tight">
            ClientEngine <span className="text-purple-400">AI</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
          <a href="/#pricing" className="hover:text-purple-400 transition">Prices</a>
          <a href="/#how-it-works" className="hover:text-purple-400 transition">How It Works</a>
          <a href="/#features" className="hover:text-purple-400 transition">Features</a>
          <a href="/#playground" className="hover:text-purple-400 transition">Playground</a>
        </div>

        {/* Desktop Right Side Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          
          {/* Sign In Button with actual Link */}
          <Link 
            href="/auth" 
            className="text-sm font-medium text-slate-300 hover:text-white px-3 py-2 transition"
          >
            Sign in
          </Link>
          
          <a 
            href="/#pricing" 
            className="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-xl shadow-lg shadow-purple-600/30 transition flex items-center space-x-2"
          >
            <span>Start Today</span>
            <i className="fa-solid fa-arrow-right text-xs"></i>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
          >
            <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'} text-lg`}></i>
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Drawer Menu */}
      <div 
        className={`md:hidden transition-all duration-300 overflow-hidden bg-[#0d091b] border-b border-purple-500/20 ${
          isOpen ? 'max-h-96 opacity-100 py-6 px-6' : 'max-h-0 opacity-0 py-0 px-6'
        }`}
      >
        <div className="flex flex-col space-y-4 text-sm font-medium text-slate-300">
          <a 
            href="/#pricing" 
            onClick={closeMenu}
            className="hover:text-purple-400 transition py-1 border-b border-slate-800/50"
          >
            Prices
          </a>
          <a 
            href="/#how-it-works" 
            onClick={closeMenu}
            className="hover:text-purple-400 transition py-1 border-b border-slate-800/50"
          >
            How It Works
          </a>
          <a 
            href="/#features" 
            onClick={closeMenu}
            className="hover:text-purple-400 transition py-1 border-b border-slate-800/50"
          >
            Features
          </a>
          <a 
            href="/#playground" 
            onClick={closeMenu}
            className="hover:text-purple-400 transition py-1 border-b border-slate-800/50"
          >
            Playground
          </a>

          {/* Mobile Buttons */}
          <div className="pt-2 flex flex-col space-y-3">
            
            {/* Mobile Sign In with actual Link */}
            <Link 
              href="/auth" 
              onClick={closeMenu}
              className="w-full text-center py-2.5 text-sm font-medium text-slate-300 hover:text-white bg-slate-900/80 rounded-xl border border-slate-800"
            >
              Sign in
            </Link>
            
            <a 
              href="/#pricing" 
              onClick={closeMenu}
              className="w-full text-center py-3 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl shadow-lg shadow-purple-600/30 flex items-center justify-center space-x-2"
            >
              <span>Start Today</span>
              <i className="fa-solid fa-arrow-right text-xs"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}