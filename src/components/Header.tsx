import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header style={{
      backgroundColor: '#FFFFFF',
      borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.9rem 1.5rem'
      }}>
        {/* Logo Left */}
        <a href="#" style={{ display: 'flex', alignItems: 'center' }}>
          <img 
            src="/assets/logo.png" 
            alt="Simply Saloni Logo" 
            style={{
              height: '38px',
              width: 'auto',
              objectFit: 'contain'
            }}
          />
        </a>

        {/* Links & Substack Button */}
        <nav className="desktop-nav" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2.5rem'
        }}>
          <a 
            href="#about" 
            style={{
              fontWeight: 500,
              fontSize: '0.95rem',
              color: 'var(--black)'
            }}
          >
            About me
          </a>
          <a 
            href="https://simplysals.framer.website/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              fontWeight: 500,
              fontSize: '0.95rem',
              color: 'var(--black)'
            }}
          >
            Design Services
          </a>
          <a 
            href="https://simplysals.substack.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-pill-outline"
            style={{
              fontSize: '0.9rem'
            }}
          >
            Subscribe on Substack
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-toggle"
          aria-label="Toggle Navigation Menu"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            color: 'var(--black)',
            display: 'none'
          }}
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div style={{
          backgroundColor: '#FFFFFF',
          padding: '1.5rem',
          borderBottom: '1px solid #E5E7EB',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem'
        }} className="mobile-menu">
          <a href="#about" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 500, color: 'var(--black)' }}>About me</a>
          <a href="https://simplysals.framer.website/" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 500, color: 'var(--black)' }}>Design Services</a>
          <a href="https://simplysals.substack.com/" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="btn-pill-outline" style={{ textAlign: 'center' }}>Subscribe on Substack</a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
};
