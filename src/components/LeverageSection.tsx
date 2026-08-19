import React from 'react';

export const LeverageSection: React.FC = () => {
  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-offwhite-1)' }}>
      <div className="container">
        
        {/* Centered Heading */}
        <div style={{ textAlign: 'left', marginBottom: '1.75rem' }}>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            fontFamily: 'var(--font-serif)',
            fontWeight: 700,
            color: 'var(--ink-blue)'
          }}>
            Choose your leverage point
          </h2>
        </div>

        {/* 3-Column Card Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          alignItems: 'stretch'
        }}>
          
          {/* Card 1: Light Outlined Card */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-card)',
            padding: '1.25rem',
            border: '1.5px solid rgba(0, 0, 0, 0.1)',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            transition: 'transform 0.25s ease'
          }} className="pricing-card-hover">
            <div>
              <span style={{
                display: 'inline-block',
                backgroundColor: '#ECE7FE',
                color: '#4F46E5',
                fontSize: '0.8rem',
                fontWeight: 700,
                padding: '4px 14px',
                borderRadius: 'var(--radius-pill)',
                marginBottom: '1rem'
              }}>
                Quick Read
              </span>

              <h3 style={{
                fontSize: '1.5rem',
                fontFamily: 'var(--font-serif)',
                fontWeight: 700,
                color: 'var(--ink-blue)',
                marginBottom: '0.85rem'
              }}>
                Automation Readiness Audit
              </h3>

              <p style={{
                fontSize: '0.9rem',
                color: '#6B7280',
                lineHeight: 1.5,
                marginBottom: '1rem'
              }}>
                Most AI advice misses your context. I map what to automate, what to skip, and hand you resources built for your case.
              </p>

              <div style={{ margin: '0 0 1.5rem 0' }}>
                <div style={{ borderBottom: '1px solid #E5E7EB', padding: '8px 0', fontSize: '0.9rem', color: '#1F2937', fontWeight: 500 }}>
                  Walkthrough of your current process
                </div>
                <div style={{ borderBottom: '1px solid #E5E7EB', padding: '8px 0', fontSize: '0.9rem', color: '#1F2937', fontWeight: 500 }}>
                  What to automate, what to keep human
                </div>
                <div style={{ padding: '8px 0', fontSize: '0.9rem', color: '#1F2937', fontWeight: 500 }}>
                  Resources picked for your specific case
                </div>
              </div>
            </div>

            <div>
              <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'baseline', gap: '0.6rem' }}>
                <span style={{ fontSize: '1rem', color: '#9CA3AF', textDecoration: 'line-through' }}>€380</span>
                <span style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--ink-blue)', fontFamily: 'var(--font-serif)' }}>€300</span>
              </div>

              <a 
                href="#audit-section" 
                className="btn-pill-outline"
                style={{ width: '100%', textAlign: 'center', justifyContent: 'center' }}
              >
                Learn more
              </a>
            </div>
          </div>

          {/* Card 2: Dark Featured Card (Coral CTA) */}
          <div style={{
            backgroundColor: '#160867', /* slightly lighter than ink-blue so it stands out */
            color: '#FFFFFF',
            borderRadius: 'var(--radius-card)',
            padding: '1.25rem',
            boxShadow: '0 16px 40px rgba(18, 5, 84, 0.35)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            transition: 'transform 0.25s ease'
          }} className="pricing-card-hover">
            <div>
              <span style={{
                display: 'inline-block',
                backgroundColor: '#4C0519',
                color: '#F43F5E',
                fontSize: '0.8rem',
                fontWeight: 700,
                padding: '4px 14px',
                borderRadius: 'var(--radius-pill)',
                marginBottom: '1.25rem'
              }}>
                Hands-On Build
              </span>

              <h3 style={{
                fontSize: '1.5rem',
                fontFamily: 'var(--font-serif)',
                fontWeight: 700,
                color: '#FFFFFF',
                marginBottom: '0.85rem'
              }}>
                Build Your Second Brain
              </h3>

              <p style={{
                fontSize: '0.9rem',
                color: '#D1D5DB',
                lineHeight: 1.5,
                marginBottom: '1rem'
              }}>
                Move from AI-curious to AI-capable in one session, built together.
              </p>

              <div style={{ margin: '0 0 1.5rem 0' }}>
                <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.12)', padding: '8px 0', fontSize: '0.9rem', color: '#F9FAFB', fontWeight: 500 }}>
                  Group session, cohort, or 1:1
                </div>
                <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.12)', padding: '8px 0', fontSize: '0.9rem', color: '#F9FAFB', fontWeight: 500 }}>
                  Live, custom skill built together
                </div>
                <div style={{ padding: '8px 0', fontSize: '0.9rem', color: '#F9FAFB', fontWeight: 500 }}>
                  Follow-up materials and support
                </div>
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.85rem', color: '#9CA3AF', marginBottom: '1rem' }}>
                Customized to your team or cohort.
              </div>

              <a 
                href="https://calendly.com/simplysaloni/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-coral"
                style={{ width: '100%', textAlign: 'center', justifyContent: 'center' }}
              >
                Start with a Discovery Call
              </a>
            </div>
          </div>

          {/* Card 3: Light Outlined Card */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-card)',
            padding: '1.25rem',
            border: '1.5px solid rgba(0, 0, 0, 0.1)',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            transition: 'transform 0.25s ease'
          }} className="pricing-card-hover">
            <div>
              <span style={{
                display: 'inline-block',
                backgroundColor: '#ECE7FE',
                color: '#4F46E5',
                fontSize: '0.8rem',
                fontWeight: 700,
                padding: '4px 14px',
                borderRadius: 'var(--radius-pill)',
                marginBottom: '1.25rem'
              }}>
                Ongoing Build
              </span>

              <h3 style={{
                fontSize: '1.5rem',
                fontFamily: 'var(--font-serif)',
                fontWeight: 700,
                color: 'var(--ink-blue)',
                marginBottom: '0.85rem'
              }}>
                Systems That Know Your Work
              </h3>

              <p style={{
                fontSize: '0.9rem',
                color: '#6B7280',
                lineHeight: 1.5,
                marginBottom: '1rem'
              }}>
                Documentation and connections so your tools understand how your team works.
              </p>

              <div style={{ margin: '0 0 1.5rem 0' }}>
                <div style={{ borderBottom: '1px solid #E5E7EB', padding: '8px 0', fontSize: '0.9rem', color: '#1F2937', fontWeight: 500 }}>
                  1:1 or team sessions
                </div>
                <div style={{ borderBottom: '1px solid #E5E7EB', padding: '8px 0', fontSize: '0.9rem', color: '#1F2937', fontWeight: 500 }}>
                  Custom system, and design work where it's useful
                </div>
                <div style={{ padding: '8px 0', fontSize: '0.9rem', color: '#1F2937', fontWeight: 500 }}>
                  Ongoing refinement
                </div>
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.85rem', color: '#6B7280', marginBottom: '1rem' }}>
                Scoped to your team, priced after a call.
              </div>

              <a 
                href="https://calendly.com/simplysaloni/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-pill-outline"
                style={{ width: '100%', textAlign: 'center', justifyContent: 'center' }}
              >
                Get custom quote
              </a>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        .pricing-card-hover:hover {
          transform: translateY(-4px);
        }
      `}</style>
    </section>
  );
};
