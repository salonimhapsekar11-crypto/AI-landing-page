import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const WorkshopsSection: React.FC = () => {
  return (
    <section className="section" style={{ backgroundColor: '#160DBA' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2 style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
            fontFamily: 'var(--font-serif)',
            fontWeight: 700,
            color: '#FFFFFF'
          }}>
            Saloni's Next Workshops
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2.5rem',
          alignItems: 'stretch'
        }} className="workshop-grid">
          
          {/* Card 1 */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            padding: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 12px 32px rgba(0, 0, 0, 0.15)'
          }}>
            <div>
              <span style={{
                display: 'inline-block',
                backgroundColor: '#FFE600',
                color: '#000000',
                fontWeight: 700,
                fontSize: '0.8rem',
                padding: '4px 14px',
                borderRadius: '9999px',
                marginBottom: '1.25rem'
              }}>
                Claude Code + Notion
              </span>

              <h3 style={{
                fontSize: '1.5rem',
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                color: '#000000',
                lineHeight: 1.3,
                marginBottom: '1rem'
              }}>
                Hands-On with Claude Code + Notion: Build Your AI Content System
              </h3>

              <p style={{ fontSize: '0.975rem', color: '#4B5563', lineHeight: 1.6, marginBottom: '2rem' }}>
                Learn how to connect Claude Code capabilities with Notion databases to engineer a self-updating content machine.
              </p>
            </div>

            <a 
              href="https://luma.com/co-8dzk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-pill-outline"
              style={{ justifyContent: 'center', gap: '0.5rem' }}
            >
              View on Luma <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Card 2 */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            padding: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 12px 32px rgba(0, 0, 0, 0.15)'
          }}>
            <div>
              <span style={{
                display: 'inline-block',
                backgroundColor: '#FFE600',
                color: '#000000',
                fontWeight: 700,
                fontSize: '0.8rem',
                padding: '4px 14px',
                borderRadius: '9999px',
                marginBottom: '1.25rem'
              }}>
                Product Designers
              </span>

              <h3 style={{
                fontSize: '1.5rem',
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                color: '#000000',
                lineHeight: 1.3,
                marginBottom: '1rem'
              }}>
                Everyday AI Club: Product Designers
              </h3>

              <p style={{ fontSize: '0.975rem', color: '#4B5563', lineHeight: 1.6, marginBottom: '2rem' }}>
                A monthly masterclass and peer community for product designers integrating AI into research, UI prototyping, and design ops.
              </p>
            </div>

            <a 
              href="https://luma.com/everyday-ai-club-designers?tk=kFhCyd" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-pill-outline"
              style={{ justifyContent: 'center', gap: '0.5rem' }}
            >
              View on Luma <ArrowUpRight size={16} />
            </a>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 860px) {
          .workshop-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
