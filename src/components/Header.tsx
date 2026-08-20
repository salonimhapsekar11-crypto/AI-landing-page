import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header style={{
      position: 'fixed',
      top: '24px',
      left: '24px',
      right: '24px',
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '12px',
      pointerEvents: 'none'
    }}>
      <div className="container" style={{
        backgroundColor: '#FFFFFF',
        borderRadius: 'var(--radius-pill)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.75rem 1.5rem',
        pointerEvents: 'auto',
        maxWidth: '1140px'
      }}>
        
        {/* Left Side: Logo & Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
          <a href="#" style={{ display: 'flex', alignItems: 'center' }}>
            <img 
              src="/assets/logo.png" 
              alt="Simply Saloni Logo" 
              style={{ height: '34px', width: 'auto', objectFit: 'contain' }}
            />
          </a>

          <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <a 
              href="#about" 
              className="nav-link"
              style={{ fontWeight: 500, fontSize: '0.95rem', color: 'var(--ink-blue)', opacity: 0.85, transition: 'opacity 0.2s' }}
            >
              About me
            </a>
            <a 
              href="https://simplysals.framer.website/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="nav-link"
              style={{ fontWeight: 500, fontSize: '0.95rem', color: 'var(--ink-blue)', opacity: 0.85, transition: 'opacity 0.2s' }}
            >
              Design Services
            </a>
            <a 
              href="https://www.linkedin.com/in/saloni-mhapsekar/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="nav-link"
              style={{ fontWeight: 500, fontSize: '0.95rem', color: 'var(--ink-blue)', opacity: 0.85, transition: 'opacity 0.2s' }}
            >
              LinkedIn
            </a>
          </nav>
        </div>

        {/* Right Side: CTA & Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <a 
            href="https://calendly.com/simplysaloni/30min" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-pill-outline desktop-nav"
            style={{ fontSize: '0.9rem', padding: '0.55rem 1.5rem' }}
          >
            Book a Discovery Call
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            aria-label="Toggle Navigation Menu"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', color: 'var(--ink-blue)', display: 'none' }}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div style={{
          backgroundColor: '#FFFFFF',
          padding: '1.5rem',
          borderRadius: '20px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
          width: '100%',
          maxWidth: '1140px',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
          pointerEvents: 'auto'
        }} className="mobile-menu">
          <a href="#about" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 500, color: 'var(--black)' }}>About me</a>
          <a href="https://simplysals.framer.website/" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 500, color: 'var(--black)' }}>Design Services</a>
          <a href="https://www.linkedin.com/in/saloni-mhapsekar/" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 500, color: 'var(--black)' }}>LinkedIn</a>
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
