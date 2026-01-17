import React from 'react';
import { Smartphone, Zap, FileCheck, Lock } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Keine Diensthandys",
      description: "Mitarbeiter nutzen ihre vertraute private WhatsApp-App. Keine Installation, kein Schulungsaufwand."
    },
    {
      icon: Zap,
      title: "Doku in Echtzeit",
      description: "Fotos und Sprachnotizen landen sofort strukturiert auf dem Server. Kein abendliches Zettelchaos."
    },
    {
      icon: FileCheck,
      title: "Automatische Ordnung",
      description: "Unsere intelligente Zentrale ordnet Nachrichten automatisch den richtigen Projekten zu."
    },
    {
      icon: Lock,
      title: "DSGVO & Datenhoheit",
      description: "Offizielle Meta API. Strikt getrennt von privaten Chats. Volle Datenkontrolle."
    }
  ];

  return (
    <section id="features" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Schluss mit Chat-Chaos</h2>
          <p className="text-slate-600">
            Professionalisieren Sie Ihre Kommunikation ohne Komplexität.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};