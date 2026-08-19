import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Calendar } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backgroundColor: 'rgba(250, 249, 245, 0.9)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-light)',
      transition: 'all 0.3s ease'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.85rem 1.5rem'
      }}>
        {/* Scaled Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center' }}>
          <img 
            src="/assets/logo.png" 
            alt="Simply Saloni Logo" 
            style={{
              height: '42px',
              width: 'auto',
              maxHeight: '42px',
              objectFit: 'contain',
              display: 'block'
            }}
          />
        </a>

        {/* Desktop Navigation */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem'
        }} className="desktop-nav">
          <a 
            href="#about-me" 
            style={{
              fontWeight: 500,
              fontSize: '0.95rem',
              color: 'var(--text-main)'
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
              color: 'var(--text-main)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.25rem'
            }}
          >
            Design Services <ArrowUpRight size={15} style={{ opacity: 0.7 }} />
          </a>
          <a 
            href="https://simplysals.substack.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              fontWeight: 500,
              fontSize: '0.95rem',
              color: 'var(--text-main)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.25rem'
            }}
          >
            Subscribe on Substack <ArrowUpRight size={15} style={{ opacity: 0.7 }} />
          </a>
          <a 
            href="https://calendly.com/simplysaloni/30min" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{
              fontSize: '0.9rem',
              padding: '0.6rem 1.25rem'
            }}
          >
            <Calendar size={16} /> Book discovery
          </a>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-toggle"
          aria-label="Toggle Navigation Menu"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            color: 'var(--text-main)',
            display: 'none'
          }}
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: 'var(--bg-page)',
          borderBottom: '1px solid var(--border-light)',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem'
        }} className="mobile-menu">
          <a 
            href="#about-me" 
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontWeight: 500, fontSize: '1.05rem', color: 'var(--text-main)' }}
          >
            About me
          </a>
          <a 
            href="https://simplysals.framer.website/" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontWeight: 500, fontSize: '1.05rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
          >
            Design Services <ArrowUpRight size={18} />
          </a>
          <a 
            href="https://simplysals.substack.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontWeight: 500, fontSize: '1.05rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
          >
            Subscribe on Substack <ArrowUpRight size={18} />
          </a>
          <a 
            href="https://calendly.com/simplysaloni/30min" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="btn btn-blue"
            style={{ width: '100%', marginTop: '0.5rem' }}
          >
            <Calendar size={18} /> Book Discovery Call
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 868px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
};
