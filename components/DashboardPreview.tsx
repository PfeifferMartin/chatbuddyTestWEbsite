import React from 'react';
import { Search, Bell, Settings, User, Phone, Mail, MoreHorizontal, FileText, Calendar, Paperclip, Mic, Filter, List, Check } from 'lucide-react';

export const DashboardPreview: React.FC = () => {
  return (
    <div className="w-full bg-slate-50 rounded-xl overflow-hidden border border-slate-200 shadow-2xl flex flex-col h-[600px] text-xs sm:text-sm font-sans">
      {/* Top Bar */}
      <div className="bg-white border-b border-slate-200 h-14 flex items-center justify-between px-4 shrink-0">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-emerald-800 rounded-lg flex items-center justify-center text-white font-bold">KMU</div>
          <span className="font-semibold text-slate-700 hidden sm:block">Dashboard</span>
        </div>
        <div className="flex items-center gap-4 text-slate-400">
           <Search className="w-5 h-5 hover:text-slate-600 cursor-pointer"/>
           <Bell className="w-5 h-5 hover:text-slate-600 cursor-pointer"/>
           <div className="w-8 h-8 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 font-bold">
             Admin
           </div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar (Navigation) */}
        <div className="w-16 bg-emerald-900 flex flex-col items-center py-4 gap-6 shrink-0 text-emerald-100/60">
           <div className="p-2 bg-emerald-800 rounded-lg text-white cursor-pointer"><List className="w-6 h-6"/></div>
           <div className="p-2 hover:bg-emerald-800 rounded-lg hover:text-white cursor-pointer"><User className="w-6 h-6"/></div>
           <div className="p-2 hover:bg-emerald-800 rounded-lg hover:text-white cursor-pointer"><FileText className="w-6 h-6"/></div>
           <div className="mt-auto p-2 hover:bg-emerald-800 rounded-lg hover:text-white cursor-pointer"><Settings className="w-6 h-6"/></div>
        </div>

        {/* List Column */}
        <div className="w-64 bg-white border-r border-slate-200 flex flex-col hidden md:flex shrink-0">
           <div className="p-4 border-b border-slate-100">
              <div className="flex justify-between items-center mb-4">
                 <h3 className="font-bold text-slate-800">Eingang</h3>
                 <Filter className="w-4 h-4 text-slate-400 cursor-pointer"/>
              </div>
              <div className="relative">
                 <input type="text" placeholder="Suchen..." className="w-full bg-slate-50 border border-slate-200 rounded-md py-1.5 px-3 text-xs outline-none focus:border-emerald-500"/>
              </div>
           </div>
           
           <div className="overflow-y-auto flex-1">
              {/* Item 1 */}
              <div className="p-3 border-l-4 border-emerald-500 bg-emerald-50/50 cursor-pointer hover:bg-slate-50">
                 <div className="flex justify-between mb-1">
                    <span className="font-bold text-slate-800">Thomas Müller</span>
                    <span className="text-[10px] text-slate-400">14:24</span>
                 </div>
                 <p className="text-slate-600 truncate text-xs">🎤 Audio: Materialbestellung...</p>
                 <div className="flex gap-2 mt-2">
                    <span className="px-1.5 py-0.5 bg-blue-100 text-blue-700 rounded text-[10px]">BV Müller</span>
                    <span className="px-1.5 py-0.5 bg-emerald-100 text-emerald-700 rounded text-[10px] flex items-center gap-1">2 <Paperclip className="w-3 h-3"/></span>
                 </div>
              </div>

               {/* Item 2 */}
               <div className="p-3 border-l-4 border-transparent hover:bg-slate-50 cursor-pointer border-b border-slate-50">
                 <div className="flex justify-between mb-1">
                    <span className="font-bold text-slate-700">Anna Schmidt</span>
                    <span className="text-[10px] text-slate-400">13:10</span>
                 </div>
                 <p className="text-slate-500 truncate text-xs">📸 Foto: Abnahme Küche</p>
                 <div className="flex gap-2 mt-2">
                    <span className="px-1.5 py-0.5 bg-orange-100 text-orange-700 rounded text-[10px]">Sanierung West</span>
                 </div>
              </div>

               {/* Item 3 */}
               <div className="p-3 border-l-4 border-transparent hover:bg-slate-50 cursor-pointer border-b border-slate-50 opacity-60">
                 <div className="flex justify-between mb-1">
                    <span className="font-bold text-slate-700">Michael Bauer</span>
                    <span className="text-[10px] text-slate-400">Gestern</span>
                 </div>
                 <p className="text-slate-500 truncate text-xs">Krankmeldung für Montag</p>
              </div>
           </div>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col bg-slate-50/50">
           {/* Chat Header */}
           <div className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0">
              <div>
                 <h2 className="font-bold text-slate-800">Thomas Müller</h2>
                 <p className="text-xs text-slate-500">+49 171 1234567 • Vorarbeiter</p>
              </div>
              <div className="flex gap-2">
                 <button className="px-3 py-1.5 bg-white border border-slate-300 rounded text-slate-600 text-xs font-medium hover:bg-slate-50">Erledigt</button>
                 <button className="px-3 py-1.5 bg-emerald-600 text-white rounded text-xs font-medium hover:bg-emerald-700">Zu Projektakte</button>
              </div>
           </div>

           {/* Chat Messages */}
           <div className="flex-1 overflow-y-auto p-6 space-y-6">
              
              {/* Message Bubble (Left) */}
              <div className="flex gap-3 max-w-[80%]">
                 <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center shrink-0 text-slate-600 font-bold text-xs">TM</div>
                 <div>
                    <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm border border-slate-200 text-slate-700">
                       <p className="mb-2">Hier ist der Fortschritt im EG. Die Wand ist fertig verputzt.</p>
                       <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" className="rounded-md w-full h-32 object-cover mb-2" alt="Wand"/>
                       <div className="flex items-center gap-2 text-xs text-emerald-600 bg-emerald-50 p-1.5 rounded border border-emerald-100">
                          <Check className="w-3 h-3"/> Automatisch gespeichert in: /2024/Müller/Doku
                       </div>
                    </div>
                    <span className="text-[10px] text-slate-400 mt-1 block">14:23</span>
                 </div>
              </div>

               {/* Message Bubble (Left - Audio) */}
               <div className="flex gap-3 max-w-[80%]">
                 <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center shrink-0 text-slate-600 font-bold text-xs">TM</div>
                 <div>
                    <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm border border-slate-200 text-slate-700">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-emerald-100 rounded-full text-emerald-600"><Mic className="w-4 h-4"/></div>
                            <div className="h-1 bg-slate-200 w-32 rounded-full overflow-hidden">
                                <div className="h-full w-2/3 bg-emerald-500"></div>
                            </div>
                            <span className="text-xs text-slate-500">0:14</span>
                        </div>
                       <div className="text-xs bg-slate-50 p-2 rounded border border-slate-100">
                          <span className="font-semibold text-slate-500 block text-[10px] uppercase mb-1">Transkription (Whisper AI)</span>
                          "Wir brauchen für morgen noch 5 Sack Rotband und einmal Gewebeband. Bitte an Einkauf weitergeben."
                       </div>
                    </div>
                    <span className="text-[10px] text-slate-400 mt-1 block">14:24</span>
                 </div>
              </div>

              {/* Message Bubble (Right - System) */}
              <div className="flex gap-3 max-w-[80%] ml-auto flex-row-reverse">
                 <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center shrink-0 text-white font-bold text-xs">S</div>
                 <div>
                    <div className="bg-emerald-50 p-3 rounded-lg rounded-tr-none border border-emerald-100 text-slate-700">
                       <p>Bestellung wurde erfasst (ID: #392) und an den Einkauf gesendet. ✅</p>
                    </div>
                    <span className="text-[10px] text-slate-400 mt-1 block text-right">14:24</span>
                 </div>
              </div>

           </div>

           {/* Input placeholder */}
           <div className="p-4 bg-white border-t border-slate-200">
              <div className="bg-slate-50 border border-slate-200 rounded-lg h-10 flex items-center px-4 text-slate-400 text-sm">
                 Antworten oder Notiz hinzufügen...
              </div>
           </div>
        </div>

        {/* Right Details Column */}
        <div className="w-72 bg-white border-l border-slate-200 flex flex-col hidden lg:flex shrink-0">
           <div className="p-6 border-b border-slate-100">
              <div className="w-16 h-16 bg-slate-100 rounded-full mx-auto mb-3 flex items-center justify-center text-2xl">👷‍♂️</div>
              <h3 className="text-center font-bold text-slate-800">Thomas Müller</h3>
              <p className="text-center text-xs text-slate-500">Vorarbeiter • Seit 2018</p>
              
              <div className="flex justify-center gap-3 mt-4">
                 <div className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer"><Phone className="w-4 h-4 text-slate-600"/></div>
                 <div className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer"><Mail className="w-4 h-4 text-slate-600"/></div>
                 <div className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer"><MoreHorizontal className="w-4 h-4 text-slate-600"/></div>
              </div>
           </div>

           <div className="p-4 space-y-6 overflow-y-auto">
              <div>
                 <h4 className="font-bold text-xs text-slate-400 uppercase tracking-wider mb-3">Aktive Zuordnung</h4>
                 <div className="bg-blue-50 border border-blue-100 rounded-lg p-3">
                    <div className="font-semibold text-blue-900 text-sm">BV Müller (EFH)</div>
                    <div className="text-blue-700/70 text-xs mt-1">P-2024-01 • Rohbau</div>
                 </div>
              </div>

              <div>
                 <h4 className="font-bold text-xs text-slate-400 uppercase tracking-wider mb-3">Erkannte Daten</h4>
                 <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                       <Paperclip className="w-4 h-4 text-slate-400"/>
                       <span>2 Dateien (Heute)</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                       <Calendar className="w-4 h-4 text-slate-400"/>
                       <span>3 Termine offen</span>
                    </div>
                 </div>
              </div>

              <div>
                 <h4 className="font-bold text-xs text-slate-400 uppercase tracking-wider mb-3">Automationen</h4>
                 <div className="flex items-center justify-between text-sm py-2 border-b border-slate-50">
                    <span className="text-slate-600">Bauakte Sync</span>
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                 </div>
                 <div className="flex items-center justify-between text-sm py-2 border-b border-slate-50">
                    <span className="text-slate-600">Stundenzettel</span>
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};