import React, { useEffect } from 'react';
import { DSHeroSection } from '../components/ds/DSHeroSection';
import { DSProblemSection } from '../components/ds/DSProblemSection';
import { DSPersonaSection } from '../components/ds/DSPersonaSection';
import { DSAuditFormSection } from '../components/ds/DSAuditFormSection';
import { DSOutcomesSection } from '../components/ds/DSOutcomesSection';
import { DSHowItWorksSection } from '../components/ds/DSHowItWorksSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { DSPricingSection } from '../components/ds/DSPricingSection';
import { DSAboutSection } from '../components/ds/DSAboutSection';
import { DSWorkshopsSection } from '../components/ds/DSWorkshopsSection';
import { DSFooter } from '../components/ds/DSFooter';

export const DesignServicesPage: React.FC = () => {
  useEffect(() => {
    document.title = "Design Services | Simply Saloni";
    window.scrollTo(0, 0); // Scroll to top on load
  }, []);

  return (
    <main>
      <DSHeroSection />
      <DSProblemSection />
      <DSPersonaSection />
      <DSAuditFormSection />
      <DSOutcomesSection />
      <DSHowItWorksSection />
      <TestimonialsSection />
      <DSPricingSection />
      <DSAboutSection />
      <DSWorkshopsSection />
      <DSFooter />
    </main>
  );
};
