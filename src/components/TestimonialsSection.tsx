import React from 'react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="section" style={{ backgroundColor: '#160DBA' }}>
      <div className="container">
        
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2 style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
            fontFamily: 'var(--font-serif)',
            fontWeight: 700,
            color: '#FFFFFF'
          }}>
            Real results from real clients
          </h2>
        </div>

        {/* Testimonial Cards Grid matching Screenshot 4 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2.5rem',
          alignItems: 'stretch'
        }} className="testimonial-grid">
          
          {/* Card 1 */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            padding: '2.25rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 12px 32px rgba(0, 0, 0, 0.15)'
          }}>
            <div>
              {/* Window Dots 🔴 🟡 🟢 */}
              <div className="window-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>

              <p style={{
                fontSize: '1.05rem',
                color: '#000000',
                lineHeight: 1.65,
                fontWeight: 500,
                marginBottom: '2rem'
              }}>
                <mark>6 hours/week recovered</mark> . The workflow system cut my review time from 8 to 2 hours. I'm actually shipping design work again instead of just managing feedback cycles.
              </p>
            </div>

            {/* Bottom Yellow Tags */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <span style={{
                backgroundColor: '#FFE600',
                color: '#000000',
                fontWeight: 700,
                fontSize: '0.85rem',
                padding: '6px 16px',
                borderRadius: '9999px'
              }}>
                Product Designer
              </span>
              <span style={{
                backgroundColor: '#FFE600',
                color: '#000000',
                fontWeight: 700,
                fontSize: '0.85rem',
                padding: '6px 16px',
                borderRadius: '9999px'
              }}>
                B2B SaaS
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            padding: '2.25rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 12px 32px rgba(0, 0, 0, 0.15)'
          }}>
            <div>
              {/* Window Dots 🔴 🟡 🟢 */}
              <div className="window-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>

              <p style={{
                fontSize: '1.05rem',
                color: '#000000',
                lineHeight: 1.65,
                fontWeight: 500,
                marginBottom: '2rem'
              }}>
                <mark>12 hours/week saved</mark> . I thought I'd need a dev team. Instead, the AI system integrated into my existing Airtable and Zapier stack. Now campaigns run on rails, <mark>40% faster setup</mark> .
              </p>
            </div>

            {/* Bottom Yellow Tags */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <span style={{
                backgroundColor: '#FFE600',
                color: '#000000',
                fontWeight: 700,
                fontSize: '0.85rem',
                padding: '6px 16px',
                borderRadius: '9999px'
              }}>
                Marketer
              </span>
              <span style={{
                backgroundColor: '#FFE600',
                color: '#000000',
                fontWeight: 700,
                fontSize: '0.85rem',
                padding: '6px 16px',
                borderRadius: '9999px'
              }}>
                Digital Agency
              </span>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 860px) {
          .testimonial-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
