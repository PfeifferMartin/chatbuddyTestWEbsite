import React, { useState } from 'react';
import { MessageCircle, ShoppingBag, Clock, Users, ArrowRight, Star, HardHat, FileText, Lock, Building2, Globe } from 'lucide-react';
import { Button } from './Button';

export const CustomerSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'internal' | 'external'>('internal');

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Toggle Switch */}
        <div className="flex justify-center mb-16">
          <div className="bg-slate-100 p-1.5 rounded-full inline-flex relative shadow-inner border border-slate-200">
            {/* Sliding Background */}
            <div 
              className={`absolute top-1.5 bottom-1.5 w-[140px] bg-white rounded-full shadow-sm transition-all duration-300 ease-out border border-slate-200/50 ${activeTab === 'internal' ? 'left-1.5' : 'left-[148px]'}`}
            ></div>
            
            <button 
              onClick={() => setActiveTab('internal')}
              className={`relative z-10 w-[140px] py-2.5 rounded-full text-sm font-bold transition-colors duration-300 flex items-center justify-center gap-2 ${activeTab === 'internal' ? 'text-emerald-700' : 'text-slate-500 hover:text-slate-700'}`}
            >
              <HardHat className="w-4 h-4" />
              Intern (Team)
            </button>
            <button 
              onClick={() => setActiveTab('external')}
              className={`relative z-10 w-[140px] py-2.5 rounded-full text-sm font-bold transition-colors duration-300 flex items-center justify-center gap-2 ${activeTab === 'external' ? 'text-blue-700' : 'text-slate-500 hover:text-slate-700'}`}
            >
              <Users className="w-4 h-4" />
              Extern (Kunden)
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[600px]">
          
          {/* Content Side */}
          <div className={`space-y-8 transition-all duration-500 ${activeTab === 'internal' ? 'animate-in fade-in slide-in-from-left-4' : 'animate-in fade-in slide-in-from-right-4'}`} key={activeTab}>
            
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wider ${
              activeTab === 'internal' 
                ? 'bg-emerald-50 border-emerald-100 text-emerald-700' 
                : 'bg-blue-50 border-blue-100 text-blue-700'
            }`}>
              {activeTab === 'internal' ? (
                <><Lock className="w-3 h-3" /> Geschützter Kanal</>
              ) : (
                <><Globe className="w-3 h-3" /> Öffentlicher Kanal</>
              )}
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-slate-900">
              {activeTab === 'internal' ? (
                <>Das Betriebssystem <br/><span className="text-emerald-600">für Ihre Mitarbeiter.</span></>
              ) : (
                <>Die Zentrale <br/><span className="text-blue-600">für Ihre Kunden.</span></>
              )}
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              {activeTab === 'internal' 
                ? "Nutzen Sie eine dedizierte interne Nummer. Mitarbeiter senden Berichte, Fotos und Zeiten einfach per WhatsApp. Unsere Software verwandelt Chats in strukturierte Firmen-Daten." 
                : "Nutzen Sie eine offizielle Support-Nummer. Bündeln Sie alle Kundenanfragen an einem Ort, automatisieren Sie Termine und Bestellungen und antworten Sie schneller als je zuvor."}
            </p>

            <div className="space-y-4 pt-4">
              {(activeTab === 'internal' ? [
                { icon: FileText, title: "Projekt-Dokumentation", desc: "Fotos landen automatisch im richtigen Ordner." },
                { icon: Clock, title: "Zeiterfassung", desc: "Start/Stop direkt im Chat erfassen." },
                { icon: Building2, title: "Interne Nummer", desc: "Getrennt vom Kundenverkehr, nur für das Team." }
              ] : [
                { icon: ShoppingBag, title: "Bestellannahme", desc: "Kunden bestellen per Foto oder Text." },
                { icon: MessageCircle, title: "Unified Inbox", desc: "Alle Kundenchats im zentralen Team-Postfach." },
                { icon: Star, title: "Öffentliche Nummer", desc: "Professioneller Auftritt mit WhatsApp Business API." }
              ]).map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:shadow-sm transition-all">
                  <div className={`p-2 rounded-lg ${activeTab === 'internal' ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'}`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">{item.title}</h3>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button 
              variant="primary" 
              className={`mt-6 border-none shadow-lg ${
                activeTab === 'internal' 
                  ? 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-200' 
                  : 'bg-blue-600 hover:bg-blue-700 shadow-blue-200'
              }`}
            >
              {activeTab === 'internal' ? 'Demo für Teams' : 'Demo für Customer Care'} <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Phone Visual Side */}
          <div className="relative flex justify-center">
             {/* Background Blob */}
             <div className={`absolute inset-0 bg-gradient-to-tr rounded-full blur-3xl opacity-20 transition-colors duration-500 ${
               activeTab === 'internal' ? 'from-emerald-400 to-teal-300' : 'from-blue-400 to-indigo-300'
             }`}></div>

            {/* Phone Frame */}
            <div className="relative border-gray-900 bg-gray-900 border-[12px] rounded-[2.5rem] h-[600px] w-[320px] shadow-2xl flex flex-col overflow-hidden transform transition-all duration-500 hover:scale-[1.02]">
               <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[15px] top-[72px] rounded-l-lg"></div>
               <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[15px] top-[124px] rounded-l-lg"></div>
               
               {/* Dynamic Header */}
               <div className={`p-4 pt-8 pb-3 flex items-center gap-3 shadow-md z-10 transition-colors duration-300 ${
                 activeTab === 'internal' ? 'bg-[#075E54]' : 'bg-[#3b82f6]'
               }`}>
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold border border-white/30">
                    {activeTab === 'internal' ? <Building2 className="w-4 h-4" /> : <Users className="w-4 h-4" />}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">
                      {activeTab === 'internal' ? 'Zentrale (Intern)' : 'Kundenservice'}
                    </div>
                    <div className="text-white/80 text-[10px] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                      {activeTab === 'internal' ? '+49 151 (Intern)' : '+49 800 (Public)'}
                    </div>
                  </div>
               </div>

               {/* Dynamic Chat Body */}
               <div className="flex-1 bg-[#E5DDD5] p-3 space-y-4 overflow-hidden relative">
                  <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#4a4a4a 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

                  {activeTab === 'internal' ? (
                    // INTERNAL CHAT MOCKUP
                    <>
                      <div className="flex justify-center mb-2"><span className="bg-[#E1F3FB] text-slate-600 text-[10px] px-2 py-0.5 rounded shadow-sm">Heute</span></div>
                      
                      {/* Employee Msg */}
                      <div className="bg-[#DCF8C6] p-2 rounded-lg rounded-tr-none shadow-sm max-w-[85%] ml-auto relative z-10">
                        <div className="h-24 bg-slate-300 rounded overflow-hidden relative mb-1">
                           <img src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-cover" alt="Construction"/>
                        </div>
                        <p className="text-xs text-gray-800">Aufmaß Baustelle B42 fertig.</p>
                        <span className="text-[9px] text-gray-500 block text-right mt-1">14:20</span>
                      </div>

                      {/* Bot Response */}
                      <div className="bg-white p-2 rounded-lg rounded-tl-none shadow-sm max-w-[85%] relative z-10">
                        <p className="text-xs text-gray-800">✅ Gespeichert in <span className="text-emerald-600 font-mono bg-emerald-50 px-1 rounded">/Projekte/B42/Aufmaß</span></p>
                        <span className="text-[9px] text-gray-400 block text-right mt-1">14:20</span>
                      </div>
                    </>
                  ) : (
                    // EXTERNAL CHAT MOCKUP
                    <>
                      <div className="flex justify-center mb-2"><span className="bg-[#E1F3FB] text-slate-600 text-[10px] px-2 py-0.5 rounded shadow-sm">Heute</span></div>

                      {/* Customer Msg */}
                      <div className="bg-white p-2.5 rounded-lg rounded-tl-none shadow-sm max-w-[85%] relative z-10">
                        <p className="text-xs text-gray-800">Hallo, ich würde gerne einen Termin für die Wartung vereinbaren.</p>
                        <span className="text-[9px] text-gray-400 block text-right mt-1">09:15</span>
                      </div>

                      {/* Bot/Support Response */}
                      <div className="bg-[#DCF8C6] p-2.5 rounded-lg rounded-tr-none shadow-sm max-w-[85%] ml-auto relative z-10">
                        <p className="text-xs text-gray-800">Gerne! Hier sind unsere freien Termine für nächste Woche:</p>
                        <div className="mt-2 space-y-1">
                          <button className="w-full bg-white text-blue-600 text-xs py-1.5 rounded border border-blue-100 font-medium">Mo, 10:00 Uhr</button>
                          <button className="w-full bg-white text-blue-600 text-xs py-1.5 rounded border border-blue-100 font-medium">Di, 14:30 Uhr</button>
                        </div>
                        <span className="text-[9px] text-gray-500 block text-right mt-1">09:15</span>
                      </div>
                    </>
                  )}

               </div>
               
               {/* Input Bar */}
               <div className="bg-[#f0f2f5] p-2 flex items-center gap-2 z-20">
                  <div className="w-8 h-8 rounded-full bg-white text-slate-400 flex items-center justify-center">+</div>
                  <div className="flex-1 h-8 bg-white rounded-full px-3 text-xs flex items-center text-slate-300">Nachricht...</div>
                  <div className={`w-8 h-8 rounded-full text-white flex items-center justify-center ${activeTab === 'internal' ? 'bg-[#075E54]' : 'bg-[#3b82f6]'}`}>
                    <ArrowRight className="w-4 h-4" />
                  </div>
               </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
