import React from 'react';
import { Check, Calendar, ArrowRight, Sparkles } from 'lucide-react';

export const LeverageSection: React.FC = () => {
  return (
    <section className="section" style={{ backgroundColor: '#F8F6F0' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 3.5rem auto' }}>
          <span className="badge badge-gold" style={{ marginBottom: '0.85rem' }}>
            Structured Offerings
          </span>
          <h2>Choose your leverage point</h2>
          <p>
            From quick diagnostic audits to end-to-end custom AI system design for teams.
          </p>
        </div>

        <div className="grid-3" style={{ alignItems: 'stretch' }}>
          
          {/* Tier 1: Quick Read */}
          <div className="card-equal-height" style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-xl)',
            padding: '2.5rem 2rem',
            border: '1px solid var(--border-light)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
            position: 'relative'
          }}>
            <div>
              <div style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: 'var(--text-muted)',
                marginBottom: '0.5rem'
              }}>
                Quick Read
              </div>

              <h3 style={{ fontSize: '1.45rem', marginBottom: '0.85rem', color: 'var(--text-main)' }}>
                Automation Readiness Audit
              </h3>

              <p style={{ fontSize: '0.975rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                Most AI advice misses your context. I map what to automate, what to skip, and hand you resources built for your case.
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.925rem', color: 'var(--text-main)' }}>
                  <Check size={16} style={{ color: 'var(--accent-blue)', marginTop: '3px', flexShrink: 0 }} />
                  <span>Walkthrough of your current process</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.925rem', color: 'var(--text-main)' }}>
                  <Check size={16} style={{ color: 'var(--accent-blue)', marginTop: '3px', flexShrink: 0 }} />
                  <span>What to automate, what to keep human</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.925rem', color: 'var(--text-main)' }}>
                  <Check size={16} style={{ color: 'var(--accent-blue)', marginTop: '3px', flexShrink: 0 }} />
                  <span>Resources picked for your specific case</span>
                </li>
              </ul>
            </div>

            <div>
              <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'baseline', gap: '0.75rem' }}>
                <span style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-main)' }}>€300</span>
                <span style={{ fontSize: '1.2rem', textDecoration: 'line-through', color: '#9CA3AF' }}>€380</span>
              </div>
              <a 
                href="#audit-section" 
                className="btn btn-outline"
                style={{ width: '100%' }}
              >
                Learn more <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Tier 2: Hands-On Build (Featured Card) */}
          <div className="card-equal-height" style={{
            backgroundColor: '#0B0F19',
            color: '#FFFFFF',
            borderRadius: 'var(--radius-xl)',
            padding: '2.5rem 2rem',
            border: '2px solid var(--accent-blue)',
            boxShadow: '0 20px 40px rgba(37, 99, 235, 0.25)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: '-14px',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: 'var(--accent-blue)',
              color: '#FFFFFF',
              padding: '0.25rem 1rem',
              borderRadius: '9999px',
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem'
            }}>
              <Sparkles size={12} /> Most Popular
            </div>

            <div>
              <div style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: '#93C5FD',
                marginBottom: '0.5rem'
              }}>
                Hands-On Build
              </div>

              <h3 style={{ fontSize: '1.45rem', marginBottom: '0.85rem', color: '#FFFFFF' }}>
                Build Your Second Brain
              </h3>

              <p style={{ fontSize: '0.975rem', color: '#9CA3AF', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                Move from AI-curious to AI-capable in one session, built together.
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.925rem', color: '#F3F4F6' }}>
                  <Check size={16} style={{ color: '#60A5FA', marginTop: '3px', flexShrink: 0 }} />
                  <span>Group session, cohort, or 1:1</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.925rem', color: '#F3F4F6' }}>
                  <Check size={16} style={{ color: '#60A5FA', marginTop: '3px', flexShrink: 0 }} />
                  <span>Live, custom skill built together</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.925rem', color: '#F3F4F6' }}>
                  <Check size={16} style={{ color: '#60A5FA', marginTop: '3px', flexShrink: 0 }} />
                  <span>Follow-up materials and ongoing support</span>
                </li>
              </ul>
            </div>

            <div>
              <div style={{ fontSize: '0.9rem', color: '#D1D5DB', marginBottom: '1.25rem', fontStyle: 'italic' }}>
                Customized to your team or cohort.
              </div>
              <a 
                href="https://calendly.com/simplysaloni/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-blue"
                style={{ width: '100%' }}
              >
                <Calendar size={16} /> Start with a Discovery Call
              </a>
            </div>
          </div>

          {/* Tier 3: Ongoing Build */}
          <div className="card-equal-height" style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-xl)',
            padding: '2.5rem 2rem',
            border: '1px solid var(--border-light)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%'
          }}>
            <div>
              <div style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: 'var(--text-muted)',
                marginBottom: '0.5rem'
              }}>
                Ongoing Build
              </div>

              <h3 style={{ fontSize: '1.45rem', marginBottom: '0.85rem', color: 'var(--text-main)' }}>
                Systems That Know Your Work
              </h3>

              <p style={{ fontSize: '0.975rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                Documentation and connections so your tools understand how your team works.
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.925rem', color: 'var(--text-main)' }}>
                  <Check size={16} style={{ color: 'var(--accent-blue)', marginTop: '3px', flexShrink: 0 }} />
                  <span>1:1 or team sessions</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.925rem', color: 'var(--text-main)' }}>
                  <Check size={16} style={{ color: 'var(--accent-blue)', marginTop: '3px', flexShrink: 0 }} />
                  <span>Custom system & design work where useful</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.925rem', color: 'var(--text-main)' }}>
                  <Check size={16} style={{ color: 'var(--accent-blue)', marginTop: '3px', flexShrink: 0 }} />
                  <span>Ongoing refinement and optimization</span>
                </li>
              </ul>
            </div>

            <div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.25rem', fontStyle: 'italic' }}>
                Scoped to your team, priced after a call.
              </div>
              <a 
                href="https://calendly.com/simplysaloni/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ width: '100%' }}
              >
                Get custom quote
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
