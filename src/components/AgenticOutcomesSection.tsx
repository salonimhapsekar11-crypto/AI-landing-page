import React from 'react';

export const AgenticOutcomesSection: React.FC = () => {
  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-offwhite-1)', minHeight: '640px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div className="container">
        
        {/* Section Heading */}
        <div style={{ textAlign: 'left', marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            fontFamily: 'var(--font-serif)',
            fontWeight: 700,
            color: 'var(--ink-blue)'
          }}>
            Agentic Outcomes for Different Industries
          </h2>
        </div>

        {/* 3-Column Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          alignItems: 'stretch'
        }}>
          
          {/* Card 1: D2C Brands */}
          <div className="card-hard-shadow" style={{ borderRadius: 'var(--radius-card)' }}>
            <div>
              <h3 style={{
                fontSize: '1.5rem',
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                color: 'var(--ink-blue)',
                marginBottom: '1rem'
              }}>
                D2C Brands
              </h3>
              <p style={{
                fontSize: '1.05rem',
                fontFamily: 'var(--font-sans)',
                color: '#4B5563',
                lineHeight: 1.6,
                marginBottom: '2rem'
              }}>
                Audit funnels, refine product ads, and read customer sentiment with a designer's eye, not just a dashboard.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <span style={getPillStyle('yellow')}>CRO Audit</span>
              <span style={getPillStyle('blue')}>Product Ads</span>
              <span style={getPillStyle('lilac')}>Sentiment Analysis</span>
            </div>
          </div>

          {/* Card 2: Solopreneurs */}
          <div className="card-hard-shadow" style={{ borderRadius: 'var(--radius-card)' }}>
            <div>
              <h3 style={{
                fontSize: '1.5rem',
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                color: 'var(--ink-blue)',
                marginBottom: '1rem'
              }}>
                Solopreneurs
              </h3>
              <p style={{
                fontSize: '1.05rem',
                fontFamily: 'var(--font-sans)',
                color: '#4B5563',
                lineHeight: 1.6,
                marginBottom: '2rem'
              }}>
                Systems that sound like you, run without you, and free up the hours currently lost to admin.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <span style={getPillStyle('blue')}>Content Systems</span>
              <span style={getPillStyle('lilac')}>Voice Matching</span>
              <span style={getPillStyle('yellow')}>Invoicing</span>
            </div>
          </div>

          {/* Card 3: Startups */}
          <div className="card-hard-shadow" style={{ borderRadius: 'var(--radius-card)' }}>
            <div>
              <h3 style={{
                fontSize: '1.5rem',
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                color: 'var(--ink-blue)',
                marginBottom: '1rem'
              }}>
                Startups
              </h3>
              <p style={{
                fontSize: '1.05rem',
                fontFamily: 'var(--font-sans)',
                color: '#4B5563',
                lineHeight: 1.6,
                marginBottom: '2rem'
              }}>
                The minimum agentic workflow that earns its keep in month one, built with 0-to-1 judgment, not scope creep.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <span style={getPillStyle('lilac')}>Workflow Design</span>
              <span style={getPillStyle('yellow')}>Ops Audit</span>
              <span style={getPillStyle('blue')}>Growth Experiments</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const getPillStyle = (type: 'lilac' | 'pink' | 'blue' | 'yellow'): React.CSSProperties => {
  const styles = {
    lilac: { bg: '#ECE7FE', text: '#4F46E5' },
    pink: { bg: '#FFE4E6', text: '#E11D48' },
    blue: { bg: '#E0F2FE', text: '#0284C7' },
    yellow: { bg: '#FEF3C7', text: '#D97706' }
  };
  return {
    backgroundColor: styles[type].bg,
    color: styles[type].text,
    fontWeight: 700,
    fontSize: '0.8rem',
    padding: '4px 14px',
    borderRadius: 'var(--radius-pill)',
    fontFamily: 'var(--font-sans)',
    display: 'inline-block'
  };
};
