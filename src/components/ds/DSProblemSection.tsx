import React from 'react';

export const DSProblemSection: React.FC = () => {
  return (
    <section className="section bg-textured-dark" style={{
      padding: '4.5rem 1.5rem',
      backgroundColor: 'var(--ink-blue)',
      color: '#FFFFFF'
    }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        <p style={{
          fontSize: '1rem',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          fontWeight: 700,
          color: 'var(--skyblue-accent)',
          marginBottom: '1rem'
        }}>
          If this sounds familiar
        </p>

        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontFamily: 'var(--font-serif)',
          fontWeight: 700,
          color: '#FFFFFF',
          marginBottom: '1.5rem',
          lineHeight: 1.2
        }}>
          You used to sound like you. Now you sound like a prompt.
        </h2>

        <p style={{
          fontSize: '1.15rem',
          color: 'rgba(255, 255, 255, 0.95)',
          lineHeight: 1.6,
          marginBottom: '2.5rem'
        }}>
          You started using AI to move faster but now it is hard to standout. Your brand reads like every other brand using the same tools:
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {[
            "Content that's technically fine and completely forgettable",
            "A homepage that could belong to any company in your category",
            "Visuals that look designed but not like yours",
            "People who follow you but don't buy from you"
          ].map((bullet, idx) => (
            <div key={idx} style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1rem',
              backgroundColor: 'rgba(255,255,255,0.06)',
              padding: '1.25rem',
              borderRadius: '12px'
            }}>
              <div style={{
                marginTop: '4px',
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: 'var(--skyblue-accent)',
                flexShrink: 0
              }} />
              <p style={{ margin: 0, fontSize: '1.05rem', color: '#FFFFFF', lineHeight: 1.5 }}>
                {bullet}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
