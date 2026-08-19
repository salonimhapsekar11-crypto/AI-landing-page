import React from 'react';
import { Calendar, ArrowUpRight, Award, Compass, Layers } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about-me" className="section" style={{ backgroundColor: '#FAF9F5' }}>
      <div className="container">
        
        {/* Main About Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap: '4rem',
          alignItems: 'center',
          marginBottom: '5rem'
        }} className="about-grid">
          
          {/* Visual Column / Card */}
          <div style={{
            position: 'relative',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            backgroundColor: '#0B0F19',
            color: '#FFFFFF',
            padding: '3rem 2.5rem',
            boxShadow: 'var(--shadow-lg)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <div style={{
              position: 'absolute',
              top: '-20%',
              right: '-20%',
              width: '300px',
              height: '300px',
              background: 'radial-gradient(circle, rgba(37, 99, 235, 0.35) 0%, rgba(0,0,0,0) 70%)',
              filter: 'blur(50px)'
            }} />

            <div style={{ position: 'relative', zIndex: 2 }}>
              <img 
                src="/assets/logo.png" 
                alt="Simply Saloni" 
                style={{ height: '38px', width: 'auto', marginBottom: '2rem', filter: 'brightness(0) invert(1)' }} 
              />

              <h3 style={{ fontSize: '1.8rem', color: '#FFFFFF', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>
                Product Design & AI Systems Strategist
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '10px', backgroundColor: 'rgba(59, 130, 246, 0.2)', color: '#60A5FA', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Layers size={18} />
                  </div>
                  <span style={{ fontSize: '0.95rem', color: '#E5E7EB' }}>0-to-1 Product & Growth Architecture</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '10px', backgroundColor: 'rgba(59, 130, 246, 0.2)', color: '#60A5FA', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Award size={18} />
                  </div>
                  <span style={{ fontSize: '0.95rem', color: '#E5E7EB' }}>UXcamp Europe & Service Design Jam Facilitator</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '10px', backgroundColor: 'rgba(59, 130, 246, 0.2)', color: '#60A5FA', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Compass size={18} />
                  </div>
                  <span style={{ fontSize: '0.95rem', color: '#E5E7EB' }}>Practical AI Workflows & Systems Thinking</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bio Text */}
          <div>
            <span className="badge badge-blue" style={{ marginBottom: '1.25rem' }}>
              Behind the Workflows
            </span>

            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', marginBottom: '1.5rem' }}>
              Hi, I'm Saloni.
            </h2>

            <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'var(--text-main)', marginBottom: '1.25rem' }}>
              With 4+ years as a product designer, I translate jargon into whatever language the room needs—whether it be a founder, marketer, or fellow designer.
            </p>

            <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: '2rem' }}>
              My background in 0-to-1 and ecommerce growth means I've built workflows under real business constraints, not just in theory. Every method I teach is grounded in research and design thinking, tested on my own work first, then shaped into something a live group can actually use. The same facilitation skill I've built running sessions at UXcamp Europe and a 48-hour Service Design Jam.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a 
                href="https://simplysals.framer.website/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Explore Design Portfolio <ArrowUpRight size={16} />
              </a>
              <a 
                href="https://simplysals.substack.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Read on Substack <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

        </div>

        {/* High-Converting CTA Banner */}
        <div style={{
          backgroundColor: '#0B0F19',
          color: '#FFFFFF',
          borderRadius: 'var(--radius-xl)',
          padding: 'clamp(2.5rem, 5vw, 4rem)',
          textAlign: 'center',
          boxShadow: '0 25px 60px rgba(0,0,0,0.4)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `radial-gradient(circle at 50% 0%, rgba(37, 99, 235, 0.4) 0%, rgba(11, 15, 25, 0) 75%)`,
            pointerEvents: 'none'
          }} />

          <div style={{ position: 'relative', zIndex: 2, maxWidth: '720px', margin: '0 auto' }}>
            <h2 style={{ color: '#FFFFFF', fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginBottom: '1rem' }}>
              Ready to turn your expertise into a structured business?
            </h2>
            
            <p style={{ color: '#D1D5DB', fontSize: '1.15rem', marginBottom: '2.5rem' }}>
              Let's build a system that scales your judgment, not your hours.
            </p>

            <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a 
                href="https://calendly.com/simplysaloni/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-blue"
                style={{ padding: '1rem 2.25rem', fontSize: '1.05rem' }}
              >
                <Calendar size={18} /> Book Your Discovery Call
              </a>
              
              <a 
                href="https://simplysals.substack.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-light-outline"
                style={{ padding: '1rem 2rem', fontSize: '1rem' }}
              >
                Subscribe on Substack <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};
