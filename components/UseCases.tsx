import React from 'react';
import { Camera, CalendarClock, Hammer, ShoppingCart, Mic, Stethoscope, CheckSquare, QrCode } from 'lucide-react';
import { UseCase } from '../types';

export const UseCases: React.FC = () => {
  const cases: UseCase[] = [
    {
      title: "Automatisierte Bauakte",
      description: "Fotos landen automatisch im korrekten Projektordner.",
      icon: Camera,
      category: "Dokumentation"
    },
    {
      title: "Schichtplan Verteilung",
      description: "Diskrete Verteilung von Plänen per 'Blind Copy'.",
      icon: CalendarClock,
      category: "Organisation"
    },
    {
      title: "Regiearbeiten",
      description: "Leistungen sofort per Foto & Audio dokumentieren.",
      icon: Hammer,
      category: "Abrechnung"
    },
    {
      title: "Materialbestellung",
      description: "Foto vom Etikett direkt an den Einkauf senden.",
      icon: ShoppingCart,
      category: "Einkauf"
    },
    {
      title: "Bautagebuch",
      description: "Sprachnachrichten werden automatisch zu Textberichten.",
      icon: Mic,
      category: "Dokumentation"
    },
    {
      title: "Krankmeldung",
      description: "Abwesenheiten schnell per Menü melden.",
      icon: Stethoscope,
      category: "HR"
    },
    {
      title: "Fertigmeldung",
      description: "Abschluss melden und Rechnung sofort auslösen.",
      icon: CheckSquare,
      category: "Prozess"
    },
    {
      title: "Wissen to go",
      description: "QR-Code an der Maschine scannen, Anleitung empfangen.",
      icon: QrCode,
      category: "Wissen"
    }
  ];

  return (
    <section id="use-cases" className="py-20 bg-emerald-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-emerald-300 font-semibold tracking-wider uppercase text-sm">Use Cases</span>
          <h2 className="text-3xl font-bold mt-2 mb-4">Ein Werkzeug, viele Möglichkeiten</h2>
          <p className="text-emerald-100/80">
            Von der Baustelle bis ins Büro.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((item, index) => (
            <div key={index} className="bg-emerald-800/50 backdrop-blur-sm p-6 rounded-xl border border-emerald-700/50 hover:bg-emerald-800 transition-colors group">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-emerald-900/50 rounded-lg group-hover:bg-emerald-500 transition-colors">
                  <item.icon className="w-6 h-6 text-emerald-100 group-hover:text-white" />
                </div>
                <span className="text-xs font-medium text-emerald-400 bg-emerald-950 px-2 py-1 rounded">
                  {item.category}
                </span>
              </div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-emerald-200/80 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};