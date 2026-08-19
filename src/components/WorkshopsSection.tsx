import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const WorkshopsSection: React.FC = () => {
  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-offwhite-2)' }}>
      <div className="container">
        
        {/* Centered Heading */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2 style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
            fontFamily: 'var(--font-serif)',
            fontWeight: 700,
            color: 'var(--ink-blue)'
          }}>
            Saloni's Next Workshops
          </h2>
        </div>

        {/* 2-Column Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          alignItems: 'stretch'
        }}>
          
          {/* Workshop Card 1 */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-card)',
            overflow: 'hidden',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.05)',
            border: '1.5px solid rgba(0, 0, 0, 0.08)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%'
          }}>
            <div>
              {/* Square Poster Image */}
              <div style={{
                width: '100%',
                aspectRatio: '16/9',
                backgroundColor: 'var(--ink-blue)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80" 
                  alt="Claude Code + Notion Workshop" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>

              {/* Title & Description */}
              <div style={{ padding: '2rem 2rem 1rem 2rem' }}>
                <h3 style={{
                  fontSize: '1.45rem',
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 700,
                  color: 'var(--black)',
                  lineHeight: 1.3,
                  marginBottom: '0.85rem'
                }}>
                  Hands-On with Claude Code + Notion: Build Your AI Content System
                </h3>

                <p style={{ fontSize: '0.975rem', color: '#4B5563', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Learn how to connect Claude Code capabilities with Notion databases to engineer a self-updating content machine.
                </p>
              </div>
            </div>

            {/* Yellow Pill Link Button "View on Luma" */}
            <div style={{ padding: '0 2rem 2rem 2rem' }}>
              <a 
                href="https://luma.com/co-8dzk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-yellow"
                style={{ width: '100%', gap: '0.5rem' }}
              >
                View on Luma <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          {/* Workshop Card 2 */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-card)',
            overflow: 'hidden',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.05)',
            border: '1.5px solid rgba(0, 0, 0, 0.08)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%'
          }}>
            <div>
              {/* Square Poster Image */}
              <div style={{
                width: '100%',
                aspectRatio: '16/9',
                backgroundColor: 'var(--ink-blue)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                  alt="Everyday AI Club: Product Designers" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>

              {/* Title & Description */}
              <div style={{ padding: '2rem 2rem 1rem 2rem' }}>
                <h3 style={{
                  fontSize: '1.45rem',
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 700,
                  color: 'var(--black)',
                  lineHeight: 1.3,
                  marginBottom: '0.85rem'
                }}>
                  Everyday AI Club: Product Designers
                </h3>

                <p style={{ fontSize: '0.975rem', color: '#4B5563', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  A monthly masterclass and peer community for product designers integrating AI into research, UI prototyping, and design ops.
                </p>
              </div>
            </div>

            {/* Yellow Pill Link Button "View on Luma" */}
            <div style={{ padding: '0 2rem 2rem 2rem' }}>
              <a 
                href="https://luma.com/everyday-ai-club-designers?tk=kFhCyd" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-yellow"
                style={{ width: '100%', gap: '0.5rem' }}
              >
                View on Luma <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
