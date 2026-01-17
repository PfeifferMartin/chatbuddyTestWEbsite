import React from 'react';
import { WaitlistForm } from './WaitlistForm';
import { MessageSquare, ShieldCheck, Database, Camera, Mic, Paperclip, Check } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-24 lg:pt-32 lg:pb-40">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Coming Soon 2026
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
              Die App, die Ihr Team schon liebt. <br/>
              <span className="text-emerald-600">Für Ihr Business.</span>
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed">
              Interne Prozesse automatisieren. Kundenanfragen zentralisieren. Alles in einer Plattform für WhatsApp.
            </p>

            <div className="space-y-4">
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                Early Access anfordern
              </p>
              <WaitlistForm />
              <p className="text-xs text-slate-400">
                Kein Spam. Jederzeit kündbar.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 pt-4 text-sm font-medium text-slate-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                DSGVO Konform
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-emerald-600" />
                Meta Cloud API
              </div>
              <div className="flex items-center gap-2">
                <Database className="w-5 h-5 text-emerald-600" />
                Datenhoheit
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative flex justify-center lg:justify-end">
            <div className="relative border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl flex flex-col overflow-hidden">
                <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                
                {/* Screen Content */}
                <div className="flex-1 bg-[#E5DDD5] overflow-hidden flex flex-col w-full">
                  {/* Header */}
                  <div className="bg-[#075E54] p-4 flex items-center gap-3 shadow-md z-10">
                    <div className="w-8 h-8 rounded-full bg-emerald-100/20 flex items-center justify-center text-white font-bold border border-white/30">
                      <Database className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">Firmen Zentrale</div>
                      <div className="text-emerald-100 text-xs">Auto-Ablage</div>
                    </div>
                  </div>

                  {/* Chat Area */}
                  <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                    
                    <div className="flex justify-center mb-4">
                       <span className="bg-[#E1F3FB] text-slate-600 text-[10px] px-2 py-1 rounded shadow-sm border border-slate-200 uppercase font-bold tracking-wide">Heute</span>
                    </div>

                    {/* User Photo Upload - Proactive */}
                    <div className="bg-[#DCF8C6] p-1 rounded-lg rounded-tr-none shadow-sm max-w-[85%] ml-auto">
                      <div className="h-32 bg-slate-300 rounded overflow-hidden relative mb-1">
                         <img 
                           src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                           alt="Construction site" 
                           className="w-full h-full object-cover"
                         />
                      </div>
                      <p className="text-sm text-gray-800 px-2">Wand im EG fertig.</p>
                      <div className="flex justify-end gap-1 items-center px-1 pb-1">
                        <span className="text-[10px] text-gray-500">14:23</span>
                        <Check className="w-3 h-3 text-blue-400" />
                      </div>
                    </div>

                    {/* System Acknowledge (Small) */}
                    <div className="bg-white p-2 rounded-lg rounded-tl-none shadow-sm max-w-[85%] self-start flex items-center gap-2">
                       <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                          <Check className="w-3 h-3 text-emerald-600" />
                       </div>
                       <div>
                          <p className="text-xs text-gray-600">Gespeichert: <span className="font-mono text-emerald-700 bg-emerald-50 px-1 rounded">/Müller/Doku</span></p>
                       </div>
                    </div>

                    {/* User Voice Note - Proactive */}
                    <div className="bg-[#DCF8C6] p-3 rounded-lg rounded-tr-none shadow-sm max-w-[85%] ml-auto">
                      <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                            <Mic className="w-4 h-4" />
                         </div>
                         <div className="flex-1">
                             <div className="h-1 bg-emerald-600/20 rounded-full w-20 relative overflow-hidden">
                                <div className="absolute left-0 top-0 h-full w-1/2 bg-emerald-600"></div>
                             </div>
                             <div className="text-[10px] text-gray-500 mt-1">0:14 • Material</div>
                         </div>
                      </div>
                      <div className="flex justify-end gap-1 items-center mt-1">
                        <span className="text-[10px] text-gray-500">14:24</span>
                        <Check className="w-3 h-3 text-blue-400" />
                      </div>
                    </div>

                     {/* System Acknowledge (Small) */}
                     <div className="bg-white p-2 rounded-lg rounded-tl-none shadow-sm max-w-[85%] self-start flex items-center gap-2">
                       <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                          <Check className="w-3 h-3 text-emerald-600" />
                       </div>
                       <div>
                          <p className="text-xs text-gray-600">Bestellung erfasst.</p>
                       </div>
                    </div>

                  </div>

                  {/* Input Area */}
                  <div className="bg-gray-100 p-2 flex items-center gap-2">
                     <div className="p-2 text-gray-500"><Paperclip className="w-5 h-5"/></div>
                     <div className="flex-1 bg-white rounded-full h-9 px-4 text-sm flex items-center text-gray-400">Nachricht...</div>
                     <div className="p-2 bg-[#075E54] rounded-full text-white"><Mic className="w-4 h-4"/></div>
                  </div>
                </div>
            </div>
            
            {/* Floating decoration card */}
            <div className="absolute bottom-20 -left-12 bg-white p-4 rounded-xl shadow-xl border border-slate-100 hidden lg:block animate-pulse">
                <div className="flex items-center gap-3">
                    <div className="bg-emerald-100 p-2 rounded-lg">
                        <Database className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                        <div className="text-xs text-slate-500 font-semibold">Live Sync</div>
                        <div className="text-sm font-bold text-slate-800">4 Dateien</div>
                        <div className="text-xs text-emerald-600">Heute, 14:24 Uhr</div>
                    </div>
                </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};