import React from 'react';
import { MessageSquare, GitBranch, Briefcase, Mail, Zap, Smartphone, User, ArrowDown } from 'lucide-react';

export const Automation: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
           <span className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-4 border border-indigo-100">
             Workflow Builder
           </span>
           <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Automatisierung <br/>
              <span className="text-indigo-600">einfach gemacht.</span>
            </h2>
            <p className="text-slate-600 text-lg">
              Erstellen Sie visuelle Abläufe für Mitarbeiter und Kunden. Unser System erkennt die Absicht und führt die passenden Schritte aus.
            </p>
        </div>

        {/* Visual Flow Builder Mockup - Improved Design */}
        <div className="max-w-4xl mx-auto">
           <div className="relative bg-white rounded-2xl shadow-xl border border-slate-200 p-8 lg:p-12 overflow-hidden">
              {/* Grid Background inside the card */}
              <div className="absolute inset-0 opacity-[0.3]" style={{ backgroundImage: 'linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

              <div className="relative z-10 flex flex-col items-center gap-8">
                
                {/* Trigger Card */}
                <div className="w-full max-w-sm bg-white rounded-xl shadow-lg border-2 border-slate-100 p-1 hover:border-indigo-100 transition-colors">
                   <div className="bg-slate-50 p-3 rounded-t-lg border-b border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="bg-green-100 p-1.5 rounded-md">
                           <MessageSquare className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="font-semibold text-slate-700 text-sm">Eingehende Nachricht</span>
                      </div>
                      <span className="text-[10px] bg-slate-200 px-2 py-0.5 rounded text-slate-600">Start</span>
                   </div>
                   <div className="p-4">
                      <div className="text-sm text-slate-600 mb-2">Wenn eine Nachricht eintrifft auf:</div>
                      <div className="bg-green-50 text-green-800 px-3 py-2 rounded border border-green-100 text-sm font-medium flex items-center gap-2">
                         <Smartphone className="w-4 h-4" /> WhatsApp Business
                      </div>
                   </div>
                </div>

                {/* Connection Line */}
                <div className="h-8 w-0.5 bg-slate-300 relative">
                   <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 bg-slate-300 rounded-full"></div>
                </div>

                {/* AI Classifier Card */}
                <div className="w-full max-w-sm bg-white rounded-xl shadow-lg border-2 border-indigo-100 ring-4 ring-indigo-50 p-1">
                   <div className="bg-indigo-50 p-3 rounded-t-lg border-b border-indigo-100 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="bg-indigo-500 p-1.5 rounded-md">
                           <Zap className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-semibold text-indigo-900 text-sm">KI Entscheidung</span>
                      </div>
                      <span className="text-[10px] bg-indigo-200 text-indigo-800 px-2 py-0.5 rounded">Auto</span>
                   </div>
                   <div className="p-4 space-y-3">
                      <div className="text-sm text-slate-600">Analysiere Inhalt & Absicht...</div>
                      
                      {/* Branch logic visualisation */}
                      <div className="flex gap-2">
                         <div className="flex-1 bg-slate-50 border border-slate-200 rounded p-2 text-center relative">
                            <span className="text-xs font-bold text-slate-700 block mb-1">Kunde</span>
                            <span className="text-[10px] text-slate-400">"Tisch reservieren..."</span>
                            <div className="absolute -bottom-5 left-1/2 w-0.5 h-5 bg-slate-300"></div>
                         </div>
                         <div className="flex-1 bg-slate-50 border border-slate-200 rounded p-2 text-center relative">
                            <span className="text-xs font-bold text-slate-700 block mb-1">Mitarbeiter</span>
                            <span className="text-[10px] text-slate-400">"Krankmeldung..."</span>
                            <div className="absolute -bottom-5 left-1/2 w-0.5 h-5 bg-slate-300"></div>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Branches Container */}
                <div className="flex w-full max-w-2xl gap-8 pt-4">
                   
                   {/* Left Branch (Customer) */}
                   <div className="flex-1 flex flex-col items-center">
                      <div className="w-full bg-white rounded-xl shadow-sm border border-slate-200 p-1 opacity-90 hover:opacity-100 transition-opacity">
                         <div className="bg-blue-50 p-2 rounded-t-lg border-b border-blue-100 flex items-center gap-2">
                            <User className="w-3.5 h-3.5 text-blue-600" />
                            <span className="font-semibold text-blue-900 text-xs">Bot Antwort</span>
                         </div>
                         <div className="p-3">
                            <div className="text-xs text-slate-600 bg-slate-50 p-2 rounded border border-slate-100 italic">
                               "Gerne! Wann möchten Sie kommen?"
                            </div>
                         </div>
                      </div>
                      <ArrowDown className="w-4 h-4 text-slate-300 my-2" />
                      <div className="w-full bg-white rounded-xl shadow-sm border border-slate-200 p-1">
                         <div className="bg-blue-50 p-2 rounded-t-lg border-b border-blue-100 flex items-center gap-2">
                            <Briefcase className="w-3.5 h-3.5 text-blue-600" />
                            <span className="font-semibold text-blue-900 text-xs">Kalender Eintrag</span>
                         </div>
                         <div className="p-3 text-xs text-slate-500">
                            Erstelle Termin im System.
                         </div>
                      </div>
                   </div>

                   {/* Right Branch (Employee) */}
                   <div className="flex-1 flex flex-col items-center">
                      <div className="w-full bg-white rounded-xl shadow-sm border border-slate-200 p-1 opacity-90 hover:opacity-100 transition-opacity">
                         <div className="bg-orange-50 p-2 rounded-t-lg border-b border-orange-100 flex items-center gap-2">
                            <Mail className="w-3.5 h-3.5 text-orange-600" />
                            <span className="font-semibold text-orange-900 text-xs">HR Benachrichtigen</span>
                         </div>
                         <div className="p-3 text-xs text-slate-500">
                            Email an personal@firma.de senden.
                         </div>
                      </div>
                   </div>

                </div>

              </div>
           </div>
        </div>

      </div>
    </section>
  );
};