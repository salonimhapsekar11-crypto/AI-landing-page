import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-textured-dark" style={{
      padding: '5rem 1.5rem 2.5rem 1.5rem',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <div className="container">
        
        {/* Footer CTA Container */}
        <div style={{
          textAlign: 'center',
          maxWidth: '720px',
          margin: '0 auto 4rem auto'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            fontFamily: 'var(--font-serif)',
            fontWeight: 700,
            color: '#FFFFFF',
            marginBottom: '1rem',
            lineHeight: 1.2
          }}>
            Ready to turn your expertise into a structured business?
          </h2>

          <p style={{
            fontSize: '1.15rem',
            color: 'rgba(255, 255, 255, 0.95)',
            marginBottom: '2.5rem'
          }}>
            Let's build a system that scales your judgment, not your hours.
          </p>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem'
          }}>
            {/* Yellow Primary Button */}
            <a 
              href="https://calendly.com/simplysaloni/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-yellow"
              style={{
                fontSize: '1.05rem',
                padding: '0.95rem 2.5rem',
                width: '100%',
                maxWidth: '340px'
              }}
            >
              Book Your Discovery Call
            </a>

            {/* Outlined White Button Below */}
            <a 
              href="https://simplysals.substack.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-pill-outline-white"
              style={{
                fontSize: '1rem',
                padding: '0.85rem 2.25rem',
                width: '100%',
                maxWidth: '340px'
              }}
            >
              Subscribe on Substack
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.12)',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.875rem',
          color: 'rgba(255, 255, 255, 0.7)'
        }}>
          <div>
            © {new Date().getFullYear()} Simply Saloni. All rights reserved.
          </div>
          <div>
            AI Workflows & Product Strategy
          </div>
        </div>

      </div>
    </footer>
  );
};
