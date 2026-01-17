import React from 'react';
import { DashboardPreview } from './DashboardPreview';

export const Architecture: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
           <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Vom Chat ins Büro
            </h2>
            <p className="text-slate-600 text-lg">
              Mitarbeiter nutzen WhatsApp, das Büro sieht strukturierte Daten.
            </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Explanation Column */}
          <div className="lg:col-span-4 space-y-8">
             <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold mb-4">1</div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">Input via WhatsApp</h3>
                <p className="text-slate-600 text-sm">Mitarbeiter sendet Fotos oder Audio an die Firmen-Nummer. Kein Login nötig.</p>
             </div>

             <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-100 rounded-bl-full -mr-8 -mt-8"></div>
                <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold mb-4 relative z-10">2</div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">Smart Engine</h3>
                <p className="text-slate-600 text-sm">
                   Die Engine analysiert und sortiert. <br/>
                   <span className="font-medium text-emerald-700">• Sprache zu Text</span><br/>
                   <span className="font-medium text-emerald-700">• Projekt-Zuordnung</span><br/>
                   <span className="font-medium text-emerald-700">• Datei-Extraktion</span>
                </p>
             </div>

             <div className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100 border-l-4 border-l-emerald-500">
                <div className="w-10 h-10 bg-white border-2 border-emerald-600 rounded-full flex items-center justify-center text-emerald-600 font-bold mb-4">3</div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">Zentrale Verwaltung</h3>
                <p className="text-slate-600 text-sm">Im Dashboard laufen alle Fäden zusammen. Status sehen, Daten nutzen, Aufgaben verteilen.</p>
             </div>
          </div>

          {/* Visual Dashboard Column */}
          <div className="lg:col-span-8">
            <div className="relative">
              {/* Decorative elements behind dashboard */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-emerald-200/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl"></div>
              
              <DashboardPreview />
              
              {/* Annotation labels */}
              <div className="absolute -left-4 top-20 bg-slate-900 text-white text-xs px-3 py-1 rounded-full shadow-lg hidden xl:block">
                 Live Eingang
              </div>
              <div className="absolute -right-4 bottom-40 bg-emerald-600 text-white text-xs px-3 py-1 rounded-full shadow-lg hidden xl:block">
                 KI Transkription
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};