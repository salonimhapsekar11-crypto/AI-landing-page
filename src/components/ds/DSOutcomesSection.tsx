import React from 'react';

export const DSOutcomesSection: React.FC = () => {
  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-offwhite-1)', paddingBottom: '6rem' }}>
      <div className="container">
        
        {/* Heading & Subhead */}
        <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontFamily: 'var(--font-sans)',
            fontWeight: 700,
            color: 'var(--black)',
            marginBottom: '1rem',
            lineHeight: 1.15,
            letterSpacing: '-0.02em'
          }}>
            Build trust. Then convert it.
          </h2>
          <p style={{
            fontSize: '1.15rem',
            color: '#4B5563',
            lineHeight: 1.6,
            fontFamily: 'var(--font-sans)',
            margin: '0 auto',
            maxWidth: '640px'
          }}>
            One system, four surfaces. LinkedIn and Instagram build trust before someone's ready to buy. Your brand visuals and website convert it once they are.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '1.5rem',
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          
          {/* Card 1 */}
          <div style={{
            backgroundColor: 'var(--bg-offwhite-2)',
            borderRadius: '32px',
            padding: '3rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '3rem',
            height: '100%'
          }}>
            <h3 style={{
              fontSize: '1.75rem',
              fontFamily: 'var(--font-sans)',
              fontWeight: 700,
              color: 'var(--black)',
              lineHeight: 1.2,
              margin: 0,
              letterSpacing: '-0.01em'
            }}>
              Where trust gets built
            </h3>

            {/* Middle Graphic Area */}
            <div style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1rem',
              minHeight: '220px'
            }}>
              {['Voice System', 'Content Workflow', 'Visual Templates'].map((tag, i) => (
                <div key={i} style={{
                  backgroundColor: '#FFFFFF',
                  padding: '1rem 2rem',
                  borderRadius: '16px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                  fontWeight: 600,
                  color: 'var(--black)',
                  fontSize: '1.05rem',
                  width: '80%',
                  textAlign: 'center',
                  transform: `translateX(${i === 1 ? '10px' : i === 2 ? '-10px' : '0'})`
                }}>
                  {tag}
                </div>
              ))}
            </div>

            <p style={{
              fontSize: '1.05rem',
              color: '#4B5563',
              lineHeight: 1.6,
              margin: 0
            }}>
              LinkedIn and Instagram. Content that sounds like a person with a point of view, not a brand running the same prompt as its competitors. Consistent enough to be recognised, specific enough to be believed.
            </p>
          </div>

          {/* Card 2 */}
          <div style={{
            backgroundColor: 'var(--bg-offwhite-2)',
            borderRadius: '32px',
            padding: '3rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '3rem',
            height: '100%'
          }}>
            <h3 style={{
              fontSize: '1.75rem',
              fontFamily: 'var(--font-sans)',
              fontWeight: 700,
              color: 'var(--black)',
              lineHeight: 1.2,
              margin: 0,
              letterSpacing: '-0.01em'
            }}>
              Where trust gets converted
            </h3>

            {/* Middle Graphic Area */}
            <div style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1rem',
              minHeight: '220px'
            }}>
              {['Brand Identity', 'Landing Page Design', 'Trust Audit'].map((tag, i) => (
                <div key={i} style={{
                  backgroundColor: 'var(--ink-blue)',
                  color: '#FFFFFF',
                  padding: '1rem 2rem',
                  borderRadius: '16px',
                  boxShadow: '0 8px 24px rgba(34, 9, 136, 0.15)',
                  fontWeight: 600,
                  fontSize: '1.05rem',
                  width: '80%',
                  textAlign: 'center',
                  transform: `translateX(${i === 1 ? '-10px' : i === 2 ? '10px' : '0'})`
                }}>
                  {tag}
                </div>
              ))}
            </div>

            <p style={{
              fontSize: '1.05rem',
              color: '#4B5563',
              lineHeight: 1.6,
              margin: 0
            }}>
              Your brand visuals, decks, and website. The moment someone decides whether the thing you've been posting about is real. This is where inconsistency costs you money.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
