import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const DSPricingSection: React.FC = () => {
  return (
    <section id="pricing" className="section" style={{ backgroundColor: 'var(--bg-offwhite-1)', paddingBottom: '6rem' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontFamily: 'var(--font-serif)',
            fontWeight: 700,
            color: 'var(--black)'
          }}>
            How to work with me
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          alignItems: 'stretch',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          
          {/* Tier 1: Trust Audit */}
          <div className="card-hard-shadow" style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-card)',
            padding: '2.5rem 2rem',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ marginBottom: '2rem' }}>
              <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, color: '#6B7280' }}>
                Quick Read
              </span>
              <h3 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-serif)', fontWeight: 700, marginTop: '0.5rem', marginBottom: '1rem' }}>
                Trust Audit
              </h3>
              <p style={{ fontSize: '1.05rem', color: '#4B5563', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                Most feedback looks at one page. I look at the whole path, from your first Instagram post to checkout, and map exactly where trust breaks.
              </p>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--skyblue-accent)', fontWeight: 700 }}>✓</span>
                <span style={{ fontSize: '0.95rem', color: '#111827' }}>Full walkthrough across LinkedIn, Instagram, and website</span>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--skyblue-accent)', fontWeight: 700 }}>✓</span>
                <span style={{ fontSize: '0.95rem', color: '#111827' }}>What's inconsistent, what's costing you trust, what to fix first</span>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--skyblue-accent)', fontWeight: 700 }}>✓</span>
                <span style={{ fontSize: '0.95rem', color: '#111827' }}>Recommendations built for your specific brand and audience</span>
              </li>
            </ul>

            <div style={{ marginTop: 'auto' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-sans)', marginBottom: '1.5rem' }}>
                €300
              </div>
              <a href="#audit-section" className="btn-coral" style={{ width: '100%', textAlign: 'center', fontSize: '1rem' }}>
                Get your audit
              </a>
            </div>
          </div>

          {/* Tier 2: Build Your Brand System */}
          <div className="card-hard-shadow" style={{
            backgroundColor: 'var(--ink-blue)',
            color: '#FFFFFF',
            borderRadius: 'var(--radius-card)',
            padding: '2.5rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            transform: 'scale(1.03)',
            zIndex: 2,
            position: 'relative'
          }}>
            {/* Best Value Badge */}
            <div style={{
              position: 'absolute',
              top: '-14px',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: 'var(--yellow-cta)',
              color: 'var(--black)',
              fontSize: '0.8rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              padding: '6px 16px',
              borderRadius: 'var(--radius-pill)',
              border: '2px solid var(--black)'
            }}>
              Most Popular
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, color: 'var(--skyblue-accent)' }}>
                Hands-On Build
              </span>
              <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', fontWeight: 700, marginTop: '0.5rem', marginBottom: '1rem' }}>
                Build Your Brand System
              </h3>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                Your voice and visual system, defined once and applied across LinkedIn, Instagram, brand visuals, slides, and your website. Built so it still sounds like you six months and two hundred posts later.
              </p>
              
              <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '12px', marginBottom: '1rem', fontSize: '0.9rem', lineHeight: 1.5 }}>
                <strong style={{ color: 'var(--yellow-cta)' }}>Starting from scratch?</strong> We start at positioning. Naming, voice, logo, and visual direction get built before a single page does, so nothing downstream has to be redone.
              </div>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '12px', marginBottom: '1.5rem', fontSize: '0.9rem', lineHeight: 1.5 }}>
                <strong style={{ color: 'var(--yellow-cta)' }}>Already have pieces?</strong> We keep what's working, cut what isn't, and rebuild the rest into one system.
              </div>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--skyblue-accent)', fontWeight: 700 }}>✓</span>
                <span style={{ fontSize: '0.95rem' }}>Live, collaborative sessions, not a file handed over at the end</span>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--skyblue-accent)', fontWeight: 700 }}>✓</span>
                <span style={{ fontSize: '0.95rem' }}>Built on your actual positioning, never a template</span>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--skyblue-accent)', fontWeight: 700 }}>✓</span>
                <span style={{ fontSize: '0.95rem' }}>Templates and workflows so you can run it yourself after launch</span>
              </li>
            </ul>

            <div style={{ marginTop: 'auto' }}>
              <a href="https://calendly.com/simplysaloni/30min" target="_blank" rel="noopener noreferrer" className="btn-yellow" style={{ width: '100%', textAlign: 'center', fontSize: '1rem' }}>
                Start with a Discovery Call
              </a>
            </div>
          </div>

          {/* Tier 3: Fits Your Existing Stack */}
          <div className="card-hard-shadow" style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-card)',
            padding: '2.5rem 2rem',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ marginBottom: '2rem' }}>
              <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, color: '#6B7280' }}>
                Ongoing
              </span>
              <h3 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-serif)', fontWeight: 700, marginTop: '0.5rem', marginBottom: '1rem' }}>
                Fits Your Existing Stack
              </h3>
              <p style={{ fontSize: '1.05rem', color: '#4B5563', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                For teams already shipping. I plug into the tools and workflows you use now, so on-brand output happens by default instead of by review.
              </p>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--skyblue-accent)', fontWeight: 700 }}>✓</span>
                <span style={{ fontSize: '0.95rem', color: '#111827' }}>Workflows built into your current stack, no migration</span>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--skyblue-accent)', fontWeight: 700 }}>✓</span>
                <span style={{ fontSize: '0.95rem', color: '#111827' }}>Your brand system, wired into the tools your team already opens</span>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--skyblue-accent)', fontWeight: 700 }}>✓</span>
                <span style={{ fontSize: '0.95rem', color: '#111827' }}>Monthly refinement as you learn what converts</span>
              </li>
            </ul>

            <div style={{ marginTop: 'auto' }}>
              <a href="https://calendly.com/simplysaloni/30min" target="_blank" rel="noopener noreferrer" className="btn-yellow" style={{ width: '100%', textAlign: 'center', fontSize: '1rem', backgroundColor: '#F3F4F6', color: 'var(--black)', border: '2.5px solid var(--black)' }}>
                Get custom quote
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
