import React from 'react';
import aboutMeImg from '../assets/about-me.jpg';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section bg-textured-dark">
      <div className="container">
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '4rem',
          alignItems: 'center'
        }}>
          
          {/* Portrait Photo with Rounded Corners */}
          <div style={{
            position: 'relative',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
            border: '2.5px solid rgba(255, 255, 255, 0.2)',
            aspectRatio: '4/5',
            maxWidth: '420px',
            margin: '0 auto'
          }}>
            <img 
              src={aboutMeImg} 
              alt="Saloni Mhapsekar" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
                display: 'block'
              }}
            />
          </div>

          {/* Bio Copy in White */}
          <div>
            <h2 style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
              fontFamily: 'var(--font-serif)',
              fontWeight: 700,
              color: '#FFFFFF',
              marginBottom: '1.5rem'
            }}>
              Hi, I'm Saloni.
            </h2>

            <p style={{
              fontSize: '1.15rem',
              lineHeight: 1.7,
              color: '#FFFFFF',
              fontFamily: 'var(--font-sans)',
              fontWeight: 400,
              marginBottom: '1.5rem'
            }}>
              I'm a Senior Product Designer with 4+ years of experience designing products and driving 0-to-1 growth for early-stage ecommerce teams. My edge isn't that I use AI. It's that I've iterated enough to know where it earns its place and where it doesn't.
            </p>

            <p style={{
              fontSize: '1.1rem',
              lineHeight: 1.7,
              color: 'rgba(255, 255, 255, 0.9)',
              fontFamily: 'var(--font-sans)',
              fontWeight: 400
            }}>
              I test AI in my own practice first, then turn what works into hands-on workflows. Less AI hype. More testing, collaborating, and building things that actually hold up.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
