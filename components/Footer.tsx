import React from 'react';
import { WaitlistForm } from './WaitlistForm';

export const Footer: React.FC = () => {
  return (
    <footer id="waitlist" className="bg-slate-50 border-t border-slate-200 pt-20 pb-10">
      <div className="container mx-auto px-4">
        
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-slate-100 mb-20 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Bereit für Ordnung?</h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            Setzen Sie sich unverbindlich auf die Warteliste für KMU Connect.
          </p>
          <div className="flex justify-center">
            <WaitlistForm />
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-emerald-600 rounded flex items-center justify-center text-white font-bold text-xs">
                K
              </div>
              <span className="font-bold text-slate-900">KMU Connect</span>
            </div>
            <p className="text-sm text-slate-500 max-w-xs">
              Die smarte WhatsApp-Lösung für moderne KMUs.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-4 text-sm">Produkt</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="#" className="hover:text-emerald-600">Funktionen</a></li>
              <li><a href="#" className="hover:text-emerald-600">Sicherheit</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4 text-sm">Rechtliches</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="#" className="hover:text-emerald-600">Impressum</a></li>
              <li><a href="#" className="hover:text-emerald-600">Datenschutz</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>&copy; {new Date().getFullYear()} KMU Connect.</p>
          <p>Made for SMEs.</p>
        </div>
      </div>
    </footer>
  );
};