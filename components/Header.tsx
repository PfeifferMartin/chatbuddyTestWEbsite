import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
            K
          </div>
          <span className="font-bold text-slate-900 text-lg">KMU Connect</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#features" className="hover:text-emerald-600 transition-colors">Vorteile</a>
          <a href="#how-it-works" className="hover:text-emerald-600 transition-colors">Wie es funktioniert</a>
          <a href="#use-cases" className="hover:text-emerald-600 transition-colors">Anwendungsfälle</a>
        </nav>

        <a 
          href="#waitlist" 
          className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors"
        >
          Early Access
        </a>
      </div>
    </header>
  );
};