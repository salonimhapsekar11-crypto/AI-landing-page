import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section style={{
      backgroundColor: '#160DBA',
      backgroundImage: `
        radial-gradient(circle at 80% 20%, rgba(67, 56, 202, 0.6) 0%, rgba(22, 13, 186, 1) 70%),
        url('/assets/bg-hero.png')
      `,
      backgroundBlendMode: 'screen, normal',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: '#FFFFFF',
      padding: '5rem 1.5rem 6rem 1.5rem',
      minHeight: '80vh',
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
            fontSize: 'clamp(2.75rem, 5vw, 4rem)',
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
            color: 'rgba(255, 255, 255, 0.9)',
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
            className="btn-pill-white"
            style={{
              padding: '0.9rem 2.25rem',
              fontSize: '1rem'
            }}
          >
            Book a Discovery Call
          </a>
        </div>

        {/* Right Column: Workshop Presentation Video Player */}
        <div style={{
          position: 'relative',
          width: '100%',
          maxWidth: '460px',
          margin: '0 auto',
          borderRadius: '24px',
          overflow: 'hidden',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)',
          border: '2px solid rgba(255, 255, 255, 0.2)',
          backgroundColor: '#0F0B38',
          aspectRatio: '3/4'
        }}>
          {!isPlaying ? (
            <div 
              onClick={() => setIsPlaying(true)}
              style={{
                width: '100%',
                height: '100%',
                cursor: 'pointer',
                position: 'relative',
                backgroundImage: `url('https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {/* Overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.25)'
              }} />

              {/* Play Icon Circle matching screenshot 1 */}
              <div style={{
                position: 'relative',
                zIndex: 2,
                width: '68px',
                height: '68px',
                borderRadius: '50%',
                backgroundColor: '#FFFFFF',
                color: '#160DBA',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
                transition: 'transform 0.2s ease'
              }} className="play-icon-pulse">
                <Play size={28} style={{ marginLeft: '4px' }} fill="#160DBA" />
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
            gap: 3rem !important;
            text-align: center;
          }
          .hero-grid div { margin: 0 auto; }
        }
        .play-icon-pulse:hover {
          transform: scale(1.08);
        }
      `}</style>
    </section>
  );
};
