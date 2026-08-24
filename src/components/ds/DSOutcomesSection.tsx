import React from 'react';
import { dsContent } from '../../content/designServices';

export const DSOutcomesSection: React.FC = () => {
  const content = dsContent.outcomes;

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
            {content.heading}
          </h2>
          <p style={{
            fontSize: '1.15rem',
            color: '#4B5563',
            lineHeight: 1.6,
            fontFamily: 'var(--font-sans)',
            margin: 0
          }}>
            {content.subhead}
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
                {content.card1.heading}
              </h3>
              <p style={{
                fontSize: '1.05rem',
                color: '#4B5563',
                lineHeight: 1.6,
                margin: 0
              }}>
                {content.card1.body}
              </p>
            </div>
            {/* Tags Container */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {content.card1.tags.map((tag, i) => (
                <span key={i} style={{
                  backgroundColor: 'var(--yellow-cta)',
                  color: 'var(--black)',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-pill)',
                  letterSpacing: '0.02em'
                }}>{tag}</span>
              ))}
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
                {content.card2.heading}
              </h3>
              <p style={{
                fontSize: '1.05rem',
                color: '#4B5563',
                lineHeight: 1.6,
                margin: 0
              }}>
                {content.card2.body}
              </p>
            </div>
            {/* Tags Container */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {content.card2.tags.map((tag, i) => (
                <span key={i} style={{
                  backgroundColor: 'var(--yellow-cta)',
                  color: 'var(--black)',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-pill)',
                  letterSpacing: '0.02em'
                }}>{tag}</span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
