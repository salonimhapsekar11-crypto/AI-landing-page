import React from 'react';
import { Calendar, ArrowUpRight, Code, Palette, Users } from 'lucide-react';

export const WorkshopsSection: React.FC = () => {
  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-page)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3.5rem auto' }}>
          <span className="badge badge-blue" style={{ marginBottom: '0.85rem' }}>
            Live Cohorts & Sessions
          </span>
          <h2>Saloni's Next Workshops</h2>
          <p>
            Interactive live sessions designed to turn complex AI concepts into immediate, practical superpowers.
          </p>
        </div>

        <div className="grid-2" style={{ alignItems: 'stretch' }}>
          
          {/* Workshop Card 1 */}
          <div className="card-equal-height" style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            padding: 0,
            border: '1px solid var(--border-light)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%'
          }}>
            {/* Visual Cover Header */}
            <div style={{
              height: '200px',
              background: 'linear-gradient(135deg, #1E1B4B 0%, #312E81 50%, #4338CA 100%)',
              padding: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              color: '#FFFFFF'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(8px)',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem'
                }}>
                  <Code size={14} /> Live Interactive Lab
                </span>
                <span style={{ fontSize: '0.85rem', opacity: 0.9, fontWeight: 500 }}>
                  Luma Event
                </span>
              </div>

              <div>
                <span style={{ fontSize: '0.85rem', color: '#A5B4FC', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Claude Code + Notion
                </span>
                <h4 style={{ color: '#FFFFFF', fontSize: '1.25rem', marginTop: '0.25rem', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                  Build Your AI Content System
                </h4>
              </div>
            </div>

            {/* Card Body */}
            <div style={{ padding: '2rem', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--text-main)', marginBottom: '0.85rem' }}>
                  Hands-On with Claude Code + Notion: Build Your AI Content System
                </h3>
                <p style={{ fontSize: '0.975rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Learn how to connect Claude Code capabilities with Notion databases to engineer a self-updating, context-aware content machine.
                </p>

                <div style={{ display: 'flex', gap: '1.25rem', fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1.75rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Calendar size={15} style={{ color: 'var(--accent-blue)' }} /> Upcoming Session
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Users size={15} style={{ color: 'var(--accent-blue)' }} /> Limited Seats
                  </span>
                </div>
              </div>

              <a 
                href="https://luma.com/co-8dzk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-blue"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                View on Luma <ArrowUpRight size={18} />
              </a>
            </div>
          </div>

          {/* Workshop Card 2 */}
          <div className="card-equal-height" style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            padding: 0,
            border: '1px solid var(--border-light)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%'
          }}>
            {/* Visual Cover Header */}
            <div style={{
              height: '200px',
              background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0284C7 100%)',
              padding: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              color: '#FFFFFF'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(8px)',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem'
                }}>
                  <Palette size={14} /> Designer Special
                </span>
                <span style={{ fontSize: '0.85rem', opacity: 0.9, fontWeight: 500 }}>
                  Luma Event
                </span>
              </div>

              <div>
                <span style={{ fontSize: '0.85rem', color: '#7DD3FC', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  UX & Product Design
                </span>
                <h4 style={{ color: '#FFFFFF', fontSize: '1.25rem', marginTop: '0.25rem', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                  Everyday AI Club
                </h4>
              </div>
            </div>

            {/* Card Body */}
            <div style={{ padding: '2rem', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--text-main)', marginBottom: '0.85rem' }}>
                  Everyday AI Club: Product Designers
                </h3>
                <p style={{ fontSize: '0.975rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  A monthly masterclass and peer community for product designers integrating AI into research, UI prototyping, and design ops.
                </p>

                <div style={{ display: 'flex', gap: '1.25rem', fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1.75rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Calendar size={15} style={{ color: 'var(--accent-blue)' }} /> Monthly Club
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Users size={15} style={{ color: 'var(--accent-blue)' }} /> Product Designers
                  </span>
                </div>
              </div>

              <a 
                href="https://luma.com/everyday-ai-club-designers?tk=kFhCyd" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-blue"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                View on Luma <ArrowUpRight size={18} />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
