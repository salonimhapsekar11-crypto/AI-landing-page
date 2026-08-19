import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import heroImg from '../assets/hero.jpg';

export const HeroSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="section bg-textured-dark" style={{
      minHeight: '92vh',
      paddingTop: '8rem',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div className="container hero-grid" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'center'
      }}>
        
        {/* Left Column */}
        <div style={{ maxWidth: '540px' }}>
          <h1 style={{
            fontSize: 'clamp(2.25rem, 4.5vw, 3.25rem)',
            fontFamily: 'var(--font-serif)',
            fontWeight: 700,
            color: '#FFFFFF',
            lineHeight: 1.15,
            marginBottom: '1.5rem'
          }}>
            Co-create with<br />Simply Saloni
          </h1>

          <p style={{
            fontSize: '1.15rem',
            color: 'rgba(255, 255, 255, 0.95)',
            lineHeight: 1.6,
            marginBottom: '2.5rem',
            fontFamily: 'var(--font-sans)',
            fontWeight: 400
          }}>
            I lead expert sessions for solopreneurs, accelerators and product teams turning what they know into workflows and reusable AI Skills.
          </p>

          <a 
            href="https://calendly.com/simplysaloni/30min" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-yellow"
            style={{
              fontSize: '1.05rem',
              padding: '0.95rem 2.25rem'
            }}
          >
            Book a Discovery Call
          </a>
        </div>

        {/* Right Column: Tilted (-2deg) Workshop Video Card */}
        <div style={{
          position: 'relative',
          width: '100%',
          maxWidth: '396px',
          margin: '0 auto',
          transform: 'rotate(-2deg)',
          borderRadius: '24px',
          overflow: 'hidden',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)',
          border: '2.5px solid rgba(255, 255, 255, 0.25)',
          backgroundColor: '#120554',
          aspectRatio: '3/4',
          transition: 'transform 0.3s ease'
        }} className="hero-tilted-card">
          {!isPlaying ? (
            <div 
              onClick={() => setIsPlaying(true)}
              style={{
                width: '100%',
                height: '100%',
                cursor: 'pointer',
                position: 'relative',
                backgroundImage: `url(${heroImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center top',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {/* Dark Overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.2)'
              }} />

              {/* White Play Button Overlay */}
              <div style={{
                position: 'relative',
                zIndex: 2,
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                backgroundColor: '#FFFFFF',
                color: 'var(--ink-blue)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 30px rgba(0,0,0,0.35)',
                transition: 'transform 0.2s ease'
              }} className="play-button-hover">
                <Play size={32} style={{ marginLeft: '4px' }} fill="var(--ink-blue)" />
              </div>
            </div>
          ) : (
            <div style={{ width: '100%', height: '100%', position: 'relative' }}>
              <button
                onClick={() => setIsPlaying(false)}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  zIndex: 10,
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <X size={20} />
              </button>
              <iframe
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0"
                title="System Demo Video"
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none'
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 3.5rem !important;
            text-align: center;
          }
          .hero-tilted-card {
            transform: rotate(0deg) !important;
          }
        }
        .hero-tilted-card:hover {
          transform: rotate(0deg) scale(1.02);
        }
        .play-button-hover:hover {
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
};
