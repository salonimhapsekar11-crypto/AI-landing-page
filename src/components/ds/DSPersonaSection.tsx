import React from 'react';

export const DSPersonaSection: React.FC = () => {
  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-offwhite-1)' }}>
      <div className="container">
        
        {/* Centered Heading */}
        <div style={{ textAlign: 'left', marginBottom: '2.75rem' }}>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            fontFamily: 'var(--font-serif)',
            fontWeight: 700,
            color: 'var(--black)'
          }}>
            What describes you better?
          </h2>
        </div>

        {/* Side-by-Side Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          alignItems: 'stretch'
        }}>
          
          {/* Card 1 */}
          <div className="card-hard-shadow">
            <div>
              <h3 style={{
                fontSize: '1.65rem',
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                color: 'var(--black)',
                lineHeight: 1.3,
                marginBottom: '1.25rem'
              }}>
                For experts building a brand from scratch, wanting to get the foundation right.
              </h3>

              <p style={{
                fontSize: '1rem',
                color: '#374151',
                lineHeight: 1.6,
                marginBottom: '2rem'
              }}>
                Nothing exists yet, and you'd rather not spend a year sounding like everyone else before you find your voice.
              </p>

              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '1.1rem',
                fontSize: '0.975rem',
                fontWeight: 600,
                color: 'var(--black)'
              }}>
                <li style={{ display: 'flex', gap: '0.6rem' }}>
                  <span>→</span>
                  <span>Positioning and voice defined before anything gets designed</span>
                </li>
                <li style={{ display: 'flex', gap: '0.6rem' }}>
                  <span>→</span>
                  <span>One system built across LinkedIn, Instagram, brand visuals, and your site</span>
                </li>
                <li style={{ display: 'flex', gap: '0.6rem' }}>
                  <span>→</span>
                  <span>Workflows so you can keep producing without losing the thread</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card-hard-shadow">
            <div>
              <h3 style={{
                fontSize: '1.65rem',
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                color: 'var(--black)',
                lineHeight: 1.3,
                marginBottom: '1.25rem'
              }}>
                For brands already moving fast, but dropping trust along the way.
              </h3>

              <p style={{
                fontSize: '1rem',
                color: '#374151',
                lineHeight: 1.6,
                marginBottom: '2rem'
              }}>
                You have pieces, but they don't match. The Instagram doesn't sound like the landing page, and it's costing you conversions.
              </p>

              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '1.1rem',
                fontSize: '0.975rem',
                fontWeight: 600,
                color: 'var(--black)'
              }}>
                <li style={{ display: 'flex', gap: '0.6rem' }}>
                  <span>→</span>
                  <span>Trust audit across all four major conversion surfaces</span>
                </li>
                <li style={{ display: 'flex', gap: '0.6rem' }}>
                  <span>→</span>
                  <span>We keep what works, cut what doesn't, and unify the rest</span>
                </li>
                <li style={{ display: 'flex', gap: '0.6rem' }}>
                  <span>→</span>
                  <span>Your team gets one source of truth for voice and visuals</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
