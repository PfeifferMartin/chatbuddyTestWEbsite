import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { CustomerSection } from './components/CustomerSection';
import { Architecture } from './components/Architecture';
import { Automation } from './components/Automation';
import { UseCases } from './components/UseCases';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <Features />
        <CustomerSection />
        <Architecture />
        <Automation />
        <UseCases />
      </main>
      <Footer />
    </div>
  );
}