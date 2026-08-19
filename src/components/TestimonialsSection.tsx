import React from 'react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="section bg-textured-dark" style={{
      padding: '4.5rem 1.5rem',
      background: 'linear-gradient(135deg, #1B0BA1EB, #140249EB)',
      height: 'auto'
    }}>
      <div className="container">
        
        {/* Centered White Heading */}
        <div style={{ textAlign: 'left', marginBottom: '2.75rem' }}>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            fontFamily: 'var(--font-serif)',
            fontWeight: 700,
            color: '#FFFFFF'
          }}>
            Real results from real clients
          </h2>
        </div>

        {/* Two White Cards Styled Like Mini Browser Windows */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          alignItems: 'stretch'
        }}>
          
          {/* Browser Window Card 1 */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-card)',
            padding: '2.25rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 12px 36px rgba(0, 0, 0, 0.2)',
            transition: 'transform 0.25s ease'
          }} className="browser-card-hover">
            <div>
              {/* Traffic-Light Dots */}
              <div className="window-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>

              {/* Quote Text with Yellow Highlighted Stat Callouts */}
              <p style={{
                fontSize: '1.05rem',
                color: 'var(--black)',
                lineHeight: 1.65,
                fontWeight: 500,
                marginBottom: '2rem'
              }}>
                <mark>6 hours/week recovered</mark> . The workflow system cut my review time from 8 to 2 hours. I'm actually shipping design work again instead of just managing feedback cycles.
              </p>
            </div>

            {/* Role / Industry Tag Pills */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <span style={{
                backgroundColor: 'var(--yellow-cta)',
                color: 'var(--black)',
                fontWeight: 700,
                fontSize: '0.85rem',
                padding: '5px 16px',
                borderRadius: 'var(--radius-pill)'
              }}>
                Product Designer
              </span>
              <span style={{
                backgroundColor: 'var(--yellow-cta)',
                color: 'var(--black)',
                fontWeight: 700,
                fontSize: '0.85rem',
                padding: '5px 16px',
                borderRadius: 'var(--radius-pill)'
              }}>
                B2B SaaS
              </span>
            </div>
          </div>

          {/* Browser Window Card 2 */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-card)',
            padding: '2.25rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 12px 36px rgba(0, 0, 0, 0.2)',
            transition: 'transform 0.25s ease'
          }} className="browser-card-hover">
            <div>
              {/* Traffic-Light Dots */}
              <div className="window-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>

              {/* Quote Text with Yellow Highlighted Stat Callouts */}
              <p style={{
                fontSize: '1.05rem',
                color: 'var(--black)',
                lineHeight: 1.65,
                fontWeight: 500,
                marginBottom: '2rem'
              }}>
                <mark>12 hours/week saved</mark> . I thought I'd need a dev team. Instead, the AI system integrated into my existing Airtable and Zapier stack. Now campaigns run on rails, <mark>40% faster setup</mark> .
              </p>
            </div>

            {/* Role / Industry Tag Pills */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <span style={{
                backgroundColor: 'var(--yellow-cta)',
                color: 'var(--black)',
                fontWeight: 700,
                fontSize: '0.85rem',
                padding: '5px 16px',
                borderRadius: 'var(--radius-pill)'
              }}>
                Marketer
              </span>
              <span style={{
                backgroundColor: 'var(--yellow-cta)',
                color: 'var(--black)',
                fontWeight: 700,
                fontSize: '0.85rem',
                padding: '5px 16px',
                borderRadius: 'var(--radius-pill)'
              }}>
                Digital Agency
              </span>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        .browser-card-hover:hover {
          transform: translateY(-4px);
        }
      `}</style>
    </section>
  );
};
