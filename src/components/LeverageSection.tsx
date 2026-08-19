import React from 'react';

export const LeverageSection: React.FC = () => {
  return (
    <section className="section" style={{ backgroundColor: '#FAF9F5' }}>
      <div className="container">
        
        {/* Title matching Screenshot 5 */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2 style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
            fontFamily: 'var(--font-serif)',
            fontWeight: 700,
            color: '#0B0836'
          }}>
            Choose your leverage point
          </h2>
        </div>

        {/* 3 Pricing Cards Grid matching Screenshot 5 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem',
          alignItems: 'stretch'
        }} className="leverage-grid">
          
          {/* Card 1: Quick Read */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            padding: '2.5rem 2rem',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04)',
            border: '1px solid rgba(0, 0, 0, 0.06)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%'
          }}>
            <div>
              <span style={{
                display: 'inline-block',
                backgroundColor: '#ECE7FE',
                color: '#4F46E5',
                fontSize: '0.8rem',
                fontWeight: 700,
                padding: '4px 14px',
                borderRadius: '9999px',
                marginBottom: '1.25rem'
              }}>
                Quick Read
              </span>

              <h3 style={{
                fontSize: '1.5rem',
                fontFamily: 'var(--font-serif)',
                fontWeight: 700,
                color: '#0B0836',
                marginBottom: '0.85rem'
              }}>
                Automation Readiness Audit
              </h3>

              <p style={{
                fontSize: '0.95rem',
                color: '#6B7280',
                lineHeight: 1.6,
                marginBottom: '1.75rem'
              }}>
                Most AI advice misses your context. I map what to automate, what to skip, and hand you resources built for your case.
              </p>

              <div style={{ margin: '0 0 2rem 0' }}>
                <div style={{ borderBottom: '1px solid #E5E7EB', padding: '10px 0', fontSize: '0.925rem', color: '#1F2937', fontWeight: 500 }}>
                  Walkthrough of your current process
                </div>
                <div style={{ borderBottom: '1px solid #E5E7EB', padding: '10px 0', fontSize: '0.925rem', color: '#1F2937', fontWeight: 500 }}>
                  What to automate, what to keep human
                </div>
                <div style={{ padding: '10px 0', fontSize: '0.925rem', color: '#1F2937', fontWeight: 500 }}>
                  Resources picked for your specific case
                </div>
              </div>
            </div>

            <div>
              <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'baseline', gap: '0.6rem' }}>
                <span style={{ fontSize: '1.15rem', color: '#9CA3AF', textDecoration: 'line-through' }}>€380</span>
                <span style={{ fontSize: '2rem', fontWeight: 800, color: '#0B0836', fontFamily: 'var(--font-serif)' }}>€300</span>
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

          {/* Card 2: Hands-On Build (Dark Card matching Screenshot 5) */}
          <div style={{
            backgroundColor: '#070327',
            color: '#FFFFFF',
            borderRadius: '20px',
            padding: '2.5rem 2rem',
            boxShadow: '0 16px 40px rgba(7, 3, 39, 0.3)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%'
          }}>
            <div>
              <span style={{
                display: 'inline-block',
                backgroundColor: '#4C0519',
                color: '#F43F5E',
                fontSize: '0.8rem',
                fontWeight: 700,
                padding: '4px 14px',
                borderRadius: '9999px',
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
                fontSize: '0.95rem',
                color: '#D1D5DB',
                lineHeight: 1.6,
                marginBottom: '1.75rem'
              }}>
                Move from AI-curious to AI-capable in one session, built together.
              </p>

              <div style={{ margin: '0 0 2rem 0' }}>
                <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.12)', padding: '10px 0', fontSize: '0.925rem', color: '#F9FAFB', fontWeight: 500 }}>
                  Group session, cohort, or 1:1
                </div>
                <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.12)', padding: '10px 0', fontSize: '0.925rem', color: '#F9FAFB', fontWeight: 500 }}>
                  Live, custom skill built together
                </div>
                <div style={{ padding: '10px 0', fontSize: '0.925rem', color: '#F9FAFB', fontWeight: 500 }}>
                  Follow-up materials and support
                </div>
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.9rem', color: '#9CA3AF', marginBottom: '1.25rem' }}>
                Customized to your team or cohort.
              </div>

              <a 
                href="https://calendly.com/simplysaloni/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-pill-orange"
                style={{ width: '100%', textAlign: 'center', justifyContent: 'center' }}
              >
                Start with a Discovery Call
              </a>
            </div>
          </div>

          {/* Card 3: Ongoing Build */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            padding: '2.5rem 2rem',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04)',
            border: '1px solid rgba(0, 0, 0, 0.06)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%'
          }}>
            <div>
              <span style={{
                display: 'inline-block',
                backgroundColor: '#ECE7FE',
                color: '#4F46E5',
                fontSize: '0.8rem',
                fontWeight: 700,
                padding: '4px 14px',
                borderRadius: '9999px',
                marginBottom: '1.25rem'
              }}>
                Ongoing Build
              </span>

              <h3 style={{
                fontSize: '1.5rem',
                fontFamily: 'var(--font-serif)',
                fontWeight: 700,
                color: '#0B0836',
                marginBottom: '0.85rem'
              }}>
                Systems That Know Your Work
              </h3>

              <p style={{
                fontSize: '0.95rem',
                color: '#6B7280',
                lineHeight: 1.6,
                marginBottom: '1.75rem'
              }}>
                Documentation and connections so your tools understand how your team works.
              </p>

              <div style={{ margin: '0 0 2rem 0' }}>
                <div style={{ borderBottom: '1px solid #E5E7EB', padding: '10px 0', fontSize: '0.925rem', color: '#1F2937', fontWeight: 500 }}>
                  1:1 or team sessions
                </div>
                <div style={{ borderBottom: '1px solid #E5E7EB', padding: '10px 0', fontSize: '0.925rem', color: '#1F2937', fontWeight: 500 }}>
                  Custom system, and design work where it's useful
                </div>
                <div style={{ padding: '10px 0', fontSize: '0.925rem', color: '#1F2937', fontWeight: 500 }}>
                  Ongoing refinement
                </div>
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.9rem', color: '#6B7280', marginBottom: '1.25rem' }}>
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
        @media (max-width: 900px) {
          .leverage-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
