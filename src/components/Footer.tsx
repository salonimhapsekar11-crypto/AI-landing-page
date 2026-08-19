import React from 'react';
import { ArrowUpRight, Calendar } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer style={{
      backgroundColor: '#070A10',
      color: '#9CA3AF',
      padding: '4rem 1.5rem 2.5rem 1.5rem',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)'
    }}>
      <div className="container" style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '3rem'
      }}>
        
        {/* Top Footer Row */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '2.5rem'
        }}>
          <div>
            <img 
              src="/assets/logo.png" 
              alt="Simply Saloni" 
              style={{
                height: '38px',
                width: 'auto',
                marginBottom: '1.25rem',
                filter: 'brightness(0) invert(1)'
              }}
            />
            <p style={{ color: '#9CA3AF', fontSize: '0.95rem', maxWidth: '340px', lineHeight: 1.6 }}>
              Turning knowledge into automated AI workflows, reusable skills, and scalable design systems.
            </p>
          </div>

          <div style={{
            display: 'flex',
            gap: '3.5rem',
            flexWrap: 'wrap'
          }}>
            <div>
              <h4 style={{ color: '#FFFFFF', fontSize: '0.95rem', fontFamily: 'var(--font-sans)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.25rem' }}>
                Navigation
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li>
                  <a href="#about-me" style={{ color: '#D1D5DB', fontSize: '0.925rem' }}>About me</a>
                </li>
                <li>
                  <a href="#audit-section" style={{ color: '#D1D5DB', fontSize: '0.925rem' }}>Audit Form</a>
                </li>
                <li>
                  <a href="https://simplysals.framer.website/" target="_blank" rel="noopener noreferrer" style={{ color: '#D1D5DB', fontSize: '0.925rem', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                    Design Services <ArrowUpRight size={13} />
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 style={{ color: '#FFFFFF', fontSize: '0.95rem', fontFamily: 'var(--font-sans)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.25rem' }}>
                Connect
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li>
                  <a href="https://simplysals.substack.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#D1D5DB', fontSize: '0.925rem', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                    Substack Newsletter <ArrowUpRight size={13} />
                  </a>
                </li>
                <li>
                  <a href="https://calendly.com/simplysaloni/30min" target="_blank" rel="noopener noreferrer" style={{ color: '#D1D5DB', fontSize: '0.925rem', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                    Book Discovery Call <ArrowUpRight size={13} />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <a 
              href="https://calendly.com/simplysaloni/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-blue"
              style={{ fontSize: '0.925rem', padding: '0.75rem 1.5rem' }}
            >
              <Calendar size={16} /> Book Discovery Call
            </a>
          </div>
        </div>

        {/* Bottom Footer Row */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.875rem'
        }}>
          <div>
            © {new Date().getFullYear()} Simply Saloni. All rights reserved.
          </div>
          <div>
            Designed & Built with Precision & Care
          </div>
        </div>

      </div>
    </footer>
  );
};
