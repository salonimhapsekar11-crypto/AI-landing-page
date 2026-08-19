import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const WorkshopsSection: React.FC = () => {
  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-offwhite-2)' }}>
      <div className="container">
        
        {/* Centered Heading */}
        <div style={{ textAlign: 'left', marginBottom: '2.75rem' }}>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
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
          <a 
            href="https://luma.com/co-8dzk" 
            target="_blank" 
            rel="noopener noreferrer"
            className="luma-card"
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
              border: '1px solid rgba(0, 0, 0, 0.06)',
              display: 'flex',
              flexDirection: 'column',
              textDecoration: 'none',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              height: '100%'
            }}
          >
            {/* Square Poster Image */}
            <div style={{
              width: '100%',
              aspectRatio: '16/9',
              position: 'relative',
              overflow: 'hidden',
              borderBottom: '1px solid rgba(0,0,0,0.04)'
            }}>
              <img 
                src="https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=1,anim=false,background=white,quality=75,width=800,height=800/uploads/ls/70d94f61-057c-45f0-944d-c20e8297e12d.png" 
                alt="Claude Code + Notion Workshop" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              {/* Luma Badge Overlay */}
              <div style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(4px)',
                padding: '6px 10px',
                borderRadius: '8px',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: '#111827',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
              }}>
                <ArrowUpRight size={14} style={{ color: '#4B5563' }} /> Luma
              </div>
            </div>

            {/* Title & Description */}
            <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <h3 style={{
                fontSize: '1.15rem',
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                color: '#111827',
                lineHeight: 1.4,
                marginBottom: '0.5rem'
              }}>
                Hands-On with Claude Code + Notion: Build Your AI Content System
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#6B7280', lineHeight: 1.5, marginBottom: '0' }}>
                Learn how to connect Claude Code capabilities with Notion databases to engineer a self-updating content machine.
              </p>
            </div>
          </a>

          {/* Workshop Card 2 */}
          <a 
            href="https://luma.com/everyday-ai-club-designers?tk=kFhCyd" 
            target="_blank" 
            rel="noopener noreferrer"
            className="luma-card"
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
              border: '1px solid rgba(0, 0, 0, 0.06)',
              display: 'flex',
              flexDirection: 'column',
              textDecoration: 'none',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              height: '100%'
            }}
          >
            {/* Square Poster Image */}
            <div style={{
              width: '100%',
              aspectRatio: '16/9',
              position: 'relative',
              overflow: 'hidden',
              borderBottom: '1px solid rgba(0,0,0,0.04)'
            }}>
              <img 
                src="https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=1,anim=false,background=white,quality=75,width=800,height=800/uploads/sf/c65eb45d-9455-4bfd-b94f-78a162115e18.jpg" 
                alt="Everyday AI Club: Product Designers" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              {/* Luma Badge Overlay */}
              <div style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(4px)',
                padding: '6px 10px',
                borderRadius: '8px',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: '#111827',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
              }}>
                <ArrowUpRight size={14} style={{ color: '#4B5563' }} /> Luma
              </div>
            </div>

            {/* Title & Description */}
            <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <h3 style={{
                fontSize: '1.15rem',
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                color: '#111827',
                lineHeight: 1.4,
                marginBottom: '0.5rem'
              }}>
                Everyday AI Club: Product Designers
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#6B7280', lineHeight: 1.5, marginBottom: '0' }}>
                A monthly masterclass and peer community for product designers integrating AI into research, UI prototyping, and design ops.
              </p>
            </div>
          </a>

        </div>

      </div>
    </section>
  );
};
