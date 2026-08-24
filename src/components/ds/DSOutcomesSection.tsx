import React from 'react';

export const DSOutcomesSection: React.FC = () => {
  return (
    <section className="section" style={{ backgroundColor: '#ede7f6', paddingBottom: '5rem' }}>
      <div className="container">
        
        {/* Heading & Subhead */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem', maxWidth: '800px', margin: '0 auto 3.5rem auto' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontFamily: 'var(--font-serif)',
            fontWeight: 700,
            color: 'var(--black)',
            marginBottom: '1rem',
            lineHeight: 1.15
          }}>
            Build trust. Then convert it.
          </h2>
          <p style={{
            fontSize: '1.15rem',
            color: '#4B5563',
            lineHeight: 1.6,
            fontFamily: 'var(--font-sans)',
            margin: 0
          }}>
            One system, four surfaces. LinkedIn and Instagram build trust before someone's ready to buy. Your brand visuals and website convert it once they are. Most brands are now generic on all four at once.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          
          {/* Card 1 */}
          <div className="card-hard-shadow" style={{
            backgroundColor: 'var(--bg-offwhite-1)',
            borderRadius: 'var(--radius-card)',
            padding: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '2rem'
          }}>
            <div>
              <h3 style={{
                fontSize: '1.5rem',
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                color: 'var(--black)',
                marginBottom: '1rem',
                lineHeight: 1.3
              }}>
                Where trust gets built
              </h3>
              <p style={{
                fontSize: '1.05rem',
                color: '#4B5563',
                lineHeight: 1.6,
                margin: 0
              }}>
                LinkedIn and Instagram. Content that sounds like a person with a point of view, not a brand running the same prompt as its competitors. Consistent enough to be recognised, specific enough to be believed.
              </p>
            </div>
            {/* Tags Container */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <span style={{
                backgroundColor: 'var(--yellow-cta)',
                color: 'var(--black)',
                fontSize: '0.85rem',
                fontWeight: 700,
                padding: '6px 14px',
                borderRadius: 'var(--radius-pill)',
                letterSpacing: '0.02em'
              }}>Voice System</span>
              <span style={{
                backgroundColor: 'var(--yellow-cta)',
                color: 'var(--black)',
                fontSize: '0.85rem',
                fontWeight: 700,
                padding: '6px 14px',
                borderRadius: 'var(--radius-pill)',
                letterSpacing: '0.02em'
              }}>Content Workflow</span>
              <span style={{
                backgroundColor: 'var(--yellow-cta)',
                color: 'var(--black)',
                fontSize: '0.85rem',
                fontWeight: 700,
                padding: '6px 14px',
                borderRadius: 'var(--radius-pill)',
                letterSpacing: '0.02em'
              }}>Visual Templates</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card-hard-shadow" style={{
            backgroundColor: 'var(--bg-offwhite-1)',
            borderRadius: 'var(--radius-card)',
            padding: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '2rem'
          }}>
            <div>
              <h3 style={{
                fontSize: '1.5rem',
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                color: 'var(--black)',
                marginBottom: '1rem',
                lineHeight: 1.3
              }}>
                Where trust gets converted
              </h3>
              <p style={{
                fontSize: '1.05rem',
                color: '#4B5563',
                lineHeight: 1.6,
                margin: 0
              }}>
                Your brand visuals, decks, and website. The moment someone decides whether the thing you've been posting about is real. This is where inconsistency costs you money.
              </p>
            </div>
            {/* Tags Container */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <span style={{
                backgroundColor: 'var(--yellow-cta)',
                color: 'var(--black)',
                fontSize: '0.85rem',
                fontWeight: 700,
                padding: '6px 14px',
                borderRadius: 'var(--radius-pill)',
                letterSpacing: '0.02em'
              }}>Brand Identity</span>
              <span style={{
                backgroundColor: 'var(--yellow-cta)',
                color: 'var(--black)',
                fontSize: '0.85rem',
                fontWeight: 700,
                padding: '6px 14px',
                borderRadius: 'var(--radius-pill)',
                letterSpacing: '0.02em'
              }}>Landing Page Design</span>
              <span style={{
                backgroundColor: 'var(--yellow-cta)',
                color: 'var(--black)',
                fontSize: '0.85rem',
                fontWeight: 700,
                padding: '6px 14px',
                borderRadius: 'var(--radius-pill)',
                letterSpacing: '0.02em'
              }}>Trust Audit</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
