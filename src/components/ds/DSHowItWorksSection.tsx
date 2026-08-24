import React from 'react';
import { dsContent } from '../../content/designServices';

export const DSHowItWorksSection: React.FC = () => {
  const content = dsContent.howItWorks;

  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-offwhite-1)', paddingBottom: '6rem' }}>
      <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'left', marginBottom: '4rem' }}>
          <div style={{
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            fontWeight: 700,
            color: '#6B7280',
            fontSize: '0.85rem',
            marginBottom: '1rem'
          }}>
            {content.eyebrow}
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontFamily: 'var(--font-serif)',
            fontWeight: 700,
            color: 'var(--black)',
            lineHeight: 1.15
          }}>
            {content.headline}
          </h2>
        </div>

        {/* Steps Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '2rem'
        }}>
          {content.steps.map((step, idx) => (
            <div key={idx} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              {/* Number Circle */}
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'var(--ink-blue)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-serif)',
                fontSize: '1.25rem',
                fontWeight: 700
              }}>
                {step.number}
              </div>
              
              <h3 style={{
                fontSize: '1.25rem',
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                color: 'var(--black)',
                margin: 0
              }}>
                {step.title}
              </h3>
              
              <p style={{
                fontSize: '1.05rem',
                color: '#4B5563',
                lineHeight: 1.6,
                margin: 0
              }}>
                {step.body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
