import React, { useEffect } from 'react';
import { HeroSection } from '../components/HeroSection';
import { PersonaSection } from '../components/PersonaSection';
import { AuditFormSection } from '../components/AuditFormSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { LeverageSection } from '../components/LeverageSection';
import { WorkshopsSection } from '../components/WorkshopsSection';
import { AboutSection } from '../components/AboutSection';
import { AgenticOutcomesSection } from '../components/AgenticOutcomesSection';
import { Footer } from '../components/Footer';

export const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = "Simply Saloni | Co-create with AI";
  }, []);

  return (
    <main>
      <HeroSection />
      <PersonaSection />
      <AuditFormSection />
      <AgenticOutcomesSection />
      <TestimonialsSection />
      <LeverageSection />
      <AboutSection />
      <WorkshopsSection />
      <Footer />
    </main>
  );
};
