import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { PersonaSection } from './components/PersonaSection';
import { AuditFormSection } from './components/AuditFormSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { LeverageSection } from './components/LeverageSection';
import { WorkshopsSection } from './components/WorkshopsSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { AgenticOutcomesSection } from './components/AgenticOutcomesSection';

export const App: React.FC = () => {
  return (
    <div className="app-root">
      <Header />
      <main>
        <HeroSection />
        <PersonaSection />
        <AuditFormSection />
        <AgenticOutcomesSection />
        <TestimonialsSection />
        <LeverageSection />
        <AboutSection />
        <WorkshopsSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
