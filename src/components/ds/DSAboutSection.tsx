import React from 'react';
import aboutMeImg from '../assets/about-me.jpg';

export const DSAboutSection: React.FC = () => {
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
              lineHeight: 1.6,
              marginBottom: '1.5rem',
              color: '#FFFFFF'
            }}>
              Senior Product Designer, 4+ years driving 0-to-1 growth for brands that live or die on trust, from the first LinkedIn post to the website that closes the sale.
            </p>

            <p style={{
              fontSize: '1.15rem',
              lineHeight: 1.6,
              color: '#FFFFFF'
            }}>
              I use AI in my own work every day, which is exactly why I'm careful with it. I've watched my own writing go flat when I let a tool do too much of it. Everything I build is designed so that doesn't happen to you.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
