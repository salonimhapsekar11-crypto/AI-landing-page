import React from 'react';
import { Quote, TrendingUp, Clock, Zap } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-page)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3.5rem auto' }}>
          <span className="badge badge-blue" style={{ marginBottom: '0.85rem' }}>
            Proven Impact
          </span>
          <h2>Real results from real clients</h2>
          <p>
            Here is how solopreneurs and design teams reclaim lost time and build scalable AI systems.
          </p>
        </div>

        <div className="grid-3" style={{ alignItems: 'stretch' }}>
          
          {/* Card 1 */}
          <div className="card-equal-height" style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-xl)',
            padding: '2.25rem',
            border: '1px solid var(--border-light)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%'
          }}>
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#EFF6FF',
                color: 'var(--accent-blue)',
                padding: '0.4rem 0.85rem',
                borderRadius: '9999px',
                fontWeight: 700,
                fontSize: '0.95rem',
                marginBottom: '1.5rem'
              }}>
                <Clock size={16} /> 6 hours/week recovered
              </div>

              <Quote size={28} style={{ color: '#CBD5E1', marginBottom: '0.75rem', display: 'block' }} />

              <p style={{
                color: 'var(--text-main)',
                fontSize: '1.025rem',
                lineHeight: 1.6,
                fontStyle: 'italic',
                marginBottom: '1.5rem'
              }}>
                "The workflow system cut my review time from 8 to 2 hours. I'm actually shipping design work again instead of just managing feedback cycles."
              </p>
            </div>

            <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--border-light)' }}>
              <div style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '0.975rem' }}>
                Product Designer
              </div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                B2B SaaS Startup
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card-equal-height" style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-xl)',
            padding: '2.25rem',
            border: '1px solid var(--border-light)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%'
          }}>
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#F0FDF4',
                color: '#16A34A',
                padding: '0.4rem 0.85rem',
                borderRadius: '9999px',
                fontWeight: 700,
                fontSize: '0.95rem',
                marginBottom: '1.5rem'
              }}>
                <TrendingUp size={16} /> 12 hours/week saved
              </div>

              <Quote size={28} style={{ color: '#CBD5E1', marginBottom: '0.75rem', display: 'block' }} />

              <p style={{
                color: 'var(--text-main)',
                fontSize: '1.025rem',
                lineHeight: 1.6,
                fontStyle: 'italic',
                marginBottom: '1.5rem'
              }}>
                "I thought I'd need a dev team. Instead, the AI system integrated directly into my existing Airtable and Zapier stack. Now campaigns run on rails."
              </p>
            </div>

            <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--border-light)' }}>
              <div style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '0.975rem' }}>
                Marketer
              </div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                Digital Agency
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card-equal-height" style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-xl)',
            padding: '2.25rem',
            border: '1px solid var(--border-light)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%'
          }}>
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#FEF3C7',
                color: '#D97706',
                padding: '0.4rem 0.85rem',
                borderRadius: '9999px',
                fontWeight: 700,
                fontSize: '0.95rem',
                marginBottom: '1.5rem'
              }}>
                <Zap size={16} /> 40% faster setup
              </div>

              <Quote size={28} style={{ color: '#CBD5E1', marginBottom: '0.75rem', display: 'block' }} />

              <p style={{
                color: 'var(--text-main)',
                fontSize: '1.025rem',
                lineHeight: 1.6,
                fontStyle: 'italic',
                marginBottom: '1.5rem'
              }}>
                "Turned our onboarding documentation into interactive AI prompts for our entire team. High-leverage execution from day 1."
              </p>
            </div>

            <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--border-light)' }}>
              <div style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '0.975rem' }}>
                Founder
              </div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                Early-Stage Accelerator
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
