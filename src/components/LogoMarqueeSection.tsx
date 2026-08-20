import React from 'react';

const LOGOS = [
  '/logos/Push conference.jpeg',
  '/logos/UX australia.png',
  '/logos/UX camp logo.webp',
  '/logos/everyday ai club.avif',
  '/logos/ladies that ux.jpeg'
];

export const LogoMarqueeSection: React.FC = () => {
  return (
    <section className="marquee-section" style={{ backgroundColor: 'var(--bg-offwhite-1)' }}>
      <div className="marquee-container">
        <h3 className="marquee-label">
          Conferences I've Spoken At
        </h3>
        
        <div className="marquee-scroll-window">
          {/* Edge fade masks */}
          <div className="marquee-fade marquee-fade-left"></div>
          <div className="marquee-fade marquee-fade-right"></div>
          
          <div className="marquee-track">
            {/* Group 1 */}
            <div className="marquee-group">
              {LOGOS.map((src, i) => (
                <img key={`logo-1-${i}`} src={src} alt="Conference Logo" className="marquee-logo" />
              ))}
            </div>
            {/* Group 2 (Duplicate for seamless loop) */}
            <div className="marquee-group">
              {LOGOS.map((src, i) => (
                <img key={`logo-2-${i}`} src={src} alt="Conference Logo" className="marquee-logo" />
              ))}
            </div>
            {/* Group 3 (Extra duplicate to ensure no visual break on wide screens) */}
            <div className="marquee-group">
              {LOGOS.map((src, i) => (
                <img key={`logo-3-${i}`} src={src} alt="Conference Logo" className="marquee-logo" />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .marquee-section {
          padding: 5rem 0 5.5rem 0;
          overflow: hidden;
          width: 100%;
        }

        .marquee-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .marquee-label {
          font-family: var(--font-sans);
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #6B7280;
          font-weight: 600;
          margin-bottom: 2.5rem;
          text-align: center;
        }

        .marquee-scroll-window {
          position: relative;
          width: 100%;
          max-width: 900px;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .marquee-fade {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 100px;
          z-index: 2;
          pointer-events: none;
        }

        .marquee-fade-left {
          left: 0;
          background: linear-gradient(to right, var(--bg-offwhite-1) 0%, transparent 100%);
        }

        .marquee-fade-right {
          right: 0;
          background: linear-gradient(to left, var(--bg-offwhite-1) 0%, transparent 100%);
        }

        .marquee-track {
          display: flex;
          align-items: center;
          width: max-content;
          animation: scrollLeft 35s linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        .marquee-group {
          display: flex;
          align-items: center;
          justify-content: space-around;
          min-width: 100%;
          padding: 0 1.5rem;
          gap: 3rem;
        }

        .marquee-logo {
          height: 32px;
          width: auto;
          object-fit: contain;
          filter: grayscale(100%) opacity(55%);
          transition: filter 0.3s ease, transform 0.3s ease;
          mix-blend-mode: multiply;
        }

        .marquee-logo:hover {
          filter: grayscale(0%) opacity(100%);
          transform: scale(1.05);
        }

        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.3333%);
          }
        }

        @media (max-width: 768px) {
          .marquee-section {
            padding: 2.5rem 0 3rem 0;
          }
          .marquee-logo {
            height: 24px;
          }
          .marquee-group {
            gap: 2.5rem;
            padding: 0 1.25rem;
          }
          .marquee-fade {
            width: 40px;
          }
        }
      `}</style>
    </section>
  );
};
