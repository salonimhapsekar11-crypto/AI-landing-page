import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about-me" className="section" style={{ backgroundColor: '#FAF9F5' }}>
      <div className="container" style={{ maxWidth: '880px' }}>
        
        {/* Title */}
        <div style={{ textAlign: 'left', marginBottom: '2rem' }}>
          <h2 style={{
            fontSize: 'clamp(2.4rem, 4.5vw, 3.5rem)',
            fontFamily: 'var(--font-serif)',
            fontWeight: 700,
            color: '#000000'
          }}>
            Hi, I'm Saloni.
          </h2>
        </div>

        {/* Bio Copy */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '4rem' }}>
          <p style={{
            fontSize: '1.15rem',
            lineHeight: 1.7,
            color: '#1F2937',
            fontFamily: 'var(--font-sans)',
            fontWeight: 400
          }}>
            With 4+ years as a product designer, I translate jargon into whatever language the room needs Whether it be a founder, marketer, or fellow designer.
          </p>

          <p style={{
            fontSize: '1.15rem',
            lineHeight: 1.7,
            color: '#374151',
            fontFamily: 'var(--font-sans)',
            fontWeight: 400
          }}>
            My background in 0-to-1 and ecommerce growth means I've built workflows under real business constraints, not just in theory. Every method I teach is grounded in research and design thinking, tested on my own work first, then shaped into something a live group can actually use. The same facilitation skill I've built running sessions at UXcamp Europe and a 48-hour Service Design Jam.
          </p>
        </div>

        {/* Closing Banner */}
        <div style={{
          backgroundColor: '#160DBA',
          borderRadius: '24px',
          padding: 'clamp(2.5rem, 5vw, 3.5rem)',
          color: '#FFFFFF',
          textAlign: 'center'
        }}>
          <h3 style={{
            fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
            fontFamily: 'var(--font-serif)',
            fontWeight: 700,
            color: '#FFFFFF',
            marginBottom: '1rem',
            lineHeight: 1.2
          }}>
            Ready to turn your expertise into a structured business?
          </h3>

          <p style={{
            fontSize: '1.1rem',
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '2.25rem'
          }}>
            Let's build a system that scales your judgment, not your hours.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="https://calendly.com/simplysaloni/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-pill-white"
              style={{ fontSize: '1rem', padding: '0.85rem 2rem' }}
            >
              Book Your Discovery Call
            </a>
            
            <a 
              href="https://simplysals.substack.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-pill-outline"
              style={{ color: '#FFFFFF', borderColor: '#FFFFFF', fontSize: '1rem', padding: '0.85rem 2rem' }}
            >
              Subscribe on Substack
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
