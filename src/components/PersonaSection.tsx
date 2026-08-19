import React from 'react';
import { User, Users, CheckCircle2 } from 'lucide-react';

export const PersonaSection: React.FC = () => {
  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-page)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 3.5rem auto' }}>
          <span className="badge badge-blue" style={{ marginBottom: '0.85rem' }}>
            Tailored Engagement
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 2.75rem)' }}>
            What describes you better?
          </h2>
          <p>
            Whether you operate as a lean solopreneur or lead a collaborative product team, AI workflows adapt to your exact rhythm.
          </p>
        </div>

        {/* Equal Height Cards Grid */}
        <div className="grid-2" style={{ alignItems: 'stretch' }}>
          
          {/* Box 1: Solopreneurs */}
          <div className="card-equal-height" style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid var(--border-light)',
            borderRadius: 'var(--radius-xl)',
            padding: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%'
          }}>
            <div>
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '16px',
                backgroundColor: '#EFF6FF',
                color: 'var(--accent-blue)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                <User size={26} />
              </div>

              <h3 style={{
                fontSize: '1.45rem',
                lineHeight: 1.3,
                marginBottom: '0.85rem',
                color: 'var(--text-main)'
              }}>
                I'm juggling everything and{' '}
                <span style={{ color: 'var(--accent-blue)', fontWeight: 600 }}>
                  my systems live in my head.
                </span>
              </h3>

              <p style={{
                color: 'var(--text-muted)',
                fontSize: '1.025rem',
                lineHeight: 1.6,
                marginBottom: '2rem'
              }}>
                Get workflows built around how you actually work—not a generic template you'll abandon in a week.
              </p>

              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--text-main)', fontSize: '0.975rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--accent-blue)', marginTop: '3px', flexShrink: 0 }} />
                  <span>Turn your positioning into something you can reuse, not rewrite every time.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--text-main)', fontSize: '0.975rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--accent-blue)', marginTop: '3px', flexShrink: 0 }} />
                  <span>Keep a content and marketing calendar running smoothly on autopilot.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--text-main)', fontSize: '0.975rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--accent-blue)', marginTop: '3px', flexShrink: 0 }} />
                  <span>Tangible, step-by-step rulebooks you can use immediately.</span>
                </li>
              </ul>
            </div>

            <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-light)' }}>
              <a 
                href="https://calendly.com/simplysaloni/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ width: '100%' }}
              >
                Explore Solopreneur System
              </a>
            </div>
          </div>

          {/* Box 2: Teams */}
          <div className="card-equal-height" style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid var(--border-light)',
            borderRadius: 'var(--radius-xl)',
            padding: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%'
          }}>
            <div>
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '16px',
                backgroundColor: '#F0FDF4',
                color: '#16A34A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                <Users size={26} />
              </div>

              <h3 style={{
                fontSize: '1.45rem',
                lineHeight: 1.3,
                marginBottom: '0.85rem',
                color: 'var(--text-main)'
              }}>
                Your team has shared accounts,{' '}
                <span style={{ color: '#16A34A', fontWeight: 600 }}>
                  no actual system.
                </span>
              </h3>

              <p style={{
                color: 'var(--text-muted)',
                fontSize: '1.025rem',
                lineHeight: 1.6,
                marginBottom: '2rem'
              }}>
                Shared logins aren't a strategy. I help teams turn how they already work into a system, so judgment scales instead of getting lost in someone's chat history.
              </p>

              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--text-main)', fontSize: '0.975rem' }}>
                  <CheckCircle2 size={18} style={{ color: '#16A34A', marginTop: '3px', flexShrink: 0 }} />
                  <span>Shared context anyone can pick up without endless onboarding calls.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--text-main)', fontSize: '0.975rem' }}>
                  <CheckCircle2 size={18} style={{ color: '#16A34A', marginTop: '3px', flexShrink: 0 }} />
                  <span>Requirements turned into clear briefs and tickets—no jargon lost.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--text-main)', fontSize: '0.975rem' }}>
                  <CheckCircle2 size={18} style={{ color: '#16A34A', marginTop: '3px', flexShrink: 0 }} />
                  <span>Built with compliance and data safety in mind from day one.</span>
                </li>
              </ul>
            </div>

            <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-light)' }}>
              <a 
                href="https://calendly.com/simplysaloni/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ width: '100%' }}
              >
                Scale Team Judgment
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
