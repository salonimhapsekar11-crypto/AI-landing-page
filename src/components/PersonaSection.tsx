import React from 'react';

export const PersonaSection: React.FC = () => {
  return (
    <section className="section" style={{ backgroundColor: '#FAF9F5' }}>
      <div className="container">
        
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2 style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
            fontFamily: 'var(--font-serif)',
            fontWeight: 700,
            color: '#000000'
          }}>
            What describes you better?
          </h2>
        </div>

        {/* Side-by-side Cards matching Screenshot 2 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2.5rem',
          alignItems: 'stretch'
        }} className="persona-grid">
          
          {/* Card 1 */}
          <div className="card-hard-shadow">
            <div>
              <h3 style={{
                fontSize: '1.6rem',
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                color: '#000000',
                lineHeight: 1.3,
                marginBottom: '1.25rem'
              }}>
                I'm juggling everything and <mark>my systems live in my head.</mark>
              </h3>

              <p style={{
                fontSize: '1rem',
                color: '#374151',
                lineHeight: 1.6,
                marginBottom: '2rem'
              }}>
                Get workflows built around how you actually work not a generic template you'll abandon in a week.
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
                color: '#000000'
              }}>
                <li style={{ display: 'flex', gap: '0.6rem' }}>
                  <span>→</span>
                  <span>Turn your positioning into something you can reuse, not rewrite every time.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.6rem' }}>
                  <span>→</span>
                  <span>Keep a content and marketing calendar running</span>
                </li>
                <li style={{ display: 'flex', gap: '0.6rem' }}>
                  <span>→</span>
                  <span>Tangible, step-by-step rulebooks you can use immediately.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card-hard-shadow">
            <div>
              <h3 style={{
                fontSize: '1.6rem',
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                color: '#000000',
                lineHeight: 1.3,
                marginBottom: '1.25rem'
              }}>
                Your team has shared accounts <mark>no actual system.</mark>
              </h3>

              <p style={{
                fontSize: '1rem',
                color: '#374151',
                lineHeight: 1.6,
                marginBottom: '2rem'
              }}>
                Shared logins aren't a strategy. Whether it's your team or your cohort, I build workflows that scale judgment, not just access.
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
                color: '#000000'
              }}>
                <li style={{ display: 'flex', gap: '0.6rem' }}>
                  <span>→</span>
                  <span>Shared context anyone can pick up.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.6rem' }}>
                  <span>→</span>
                  <span>Requirements turned into briefs and tickets, no jargon lost.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.6rem' }}>
                  <span>→</span>
                  <span>Built with compliance and data safety in mind.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 860px) {
          .persona-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
