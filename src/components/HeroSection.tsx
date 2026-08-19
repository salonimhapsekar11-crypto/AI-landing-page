import React, { useState } from 'react';
import { Play, Calendar, Sparkles, X } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section 
      style={{
        position: 'relative',
        backgroundColor: '#0B0F19',
        color: '#FFFFFF',
        overflow: 'hidden',
        padding: '5.5rem 1.5rem',
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {/* Background Image with Blue Blend Overlay */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 70% 30%, rgba(37, 99, 235, 0.45) 0%, rgba(11, 15, 25, 0.85) 70%),
            linear-gradient(135deg, rgba(15, 23, 42, 0.94), rgba(30, 58, 138, 0.85)),
            url('/assets/bg-hero.png')
          `,
          backgroundBlendMode: 'screen, multiply, normal',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.85,
          zIndex: 1
        }}
      />

      {/* Decorative Glow Effects */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        left: '10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(0,0,0,0) 70%)',
        filter: 'blur(60px)',
        zIndex: 1,
        pointerEvents: 'none'
      }} />

      <div className="container hero-grid" style={{
        position: 'relative',
        zIndex: 2,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'center'
      }}>
        
        {/* Left Column: Content */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <div 
            className="badge" 
            style={{
              backgroundColor: 'rgba(59, 130, 246, 0.2)',
              color: '#60A5FA',
              border: '1px solid rgba(96, 165, 250, 0.3)',
              marginBottom: '1.5rem'
            }}
          >
            <Sparkles size={14} /> AI Workflows & Product Strategy
          </div>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 4.8vw, 3.8rem)',
            fontFamily: 'var(--font-serif)',
            fontWeight: 500,
            lineHeight: 1.15,
            color: '#FFFFFF',
            marginBottom: '1.25rem'
          }}>
            Co-create with <br />
            <span style={{ 
              background: 'linear-gradient(135deg, #60A5FA 0%, #93C5FD 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Simply Saloni
            </span>
          </h1>

          <p style={{
            fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
            color: '#D1D5DB',
            lineHeight: 1.6,
            marginBottom: '2.25rem',
            maxWidth: '540px'
          }}>
            I lead expert sessions for solopreneurs, accelerators and product teams turning what they know into workflows and reusable AI Skills.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a 
              href="https://calendly.com/simplysaloni/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-blue"
              style={{
                padding: '0.95rem 2rem',
                fontSize: '1.05rem',
                boxShadow: '0 8px 25px rgba(37, 99, 235, 0.4)'
              }}
            >
              <Calendar size={18} /> Book a Discovery Call
            </a>

            <a 
              href="#audit-section" 
              className="btn btn-light-outline"
              style={{
                padding: '0.95rem 1.75rem',
                fontSize: '1rem'
              }}
            >
              Get Your Free Audit
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Video Player */}
        <div style={{
          position: 'relative',
          width: '100%',
          borderRadius: 'var(--radius-xl)',
          overflow: 'hidden',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          backgroundColor: '#111827',
          aspectRatio: '16/10'
        }}>
          {!isPlaying ? (
            <div 
              onClick={() => setIsPlaying(true)}
              style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                cursor: 'pointer',
                backgroundImage: `url('/assets/bg-hero.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {/* Dark overlay for thumbnail clarity */}
              <div style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: 'rgba(11, 15, 25, 0.45)',
                transition: 'background-color 0.3s ease'
              }} />

              {/* Pulsing Play Button */}
              <div style={{
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <div style={{
                  width: '76px',
                  height: '76px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent-blue)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 0 12px rgba(37, 99, 235, 0.25), 0 10px 30px rgba(0, 0, 0, 0.5)',
                  transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                }} className="play-button-hover">
                  <Play size={32} style={{ marginLeft: '4px' }} fill="#FFFFFF" />
                </div>
                <span style={{
                  color: '#FFFFFF',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  letterSpacing: '0.03em',
                  textShadow: '0 2px 8px rgba(0,0,0,0.8)'
                }}>
                  Watch System Demo
                </span>
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
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
        .play-button-hover:hover {
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
};
