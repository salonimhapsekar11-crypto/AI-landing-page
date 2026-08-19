import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer style={{
      backgroundColor: '#FFFFFF',
      borderTop: '1px solid rgba(0, 0, 0, 0.08)',
      padding: '3.5rem 1.5rem 2rem 1.5rem',
      color: '#000000'
    }}>
      <div className="container" style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2.5rem'
      }}>
        
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}>
          <img 
            src="/assets/logo.png" 
            alt="Simply Saloni" 
            style={{ height: '36px', width: 'auto' }} 
          />

          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', fontSize: '0.95rem', fontWeight: 500 }}>
            <a href="#about-me" style={{ color: '#000000' }}>About me</a>
            <a href="https://simplysals.framer.website/" target="_blank" rel="noopener noreferrer" style={{ color: '#000000' }}>Design Services</a>
            <a href="https://simplysals.substack.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#000000' }}>Substack</a>
            <a href="https://calendly.com/simplysaloni/30min" target="_blank" rel="noopener noreferrer" style={{ color: '#000000' }}>Discovery Call</a>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(0, 0, 0, 0.08)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.85rem',
          color: '#6B7280'
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
