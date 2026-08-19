import React, { useState } from 'react';
import { CheckCircle2, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { submitAuditRequest } from '../firebase';

export const AuditFormSection: React.FC = () => {
  const [auditUrl, setAuditUrl] = useState('');
  const [lookAtOption, setLookAtOption] = useState('');
  const [hesitateOption, setHesitateOption] = useState('');
  const [email, setEmail] = useState('');

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!auditUrl || !lookAtOption || !hesitateOption || !email) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setSubmitting(true);

    const res = await submitAuditRequest({
      auditUrl,
      lookAtOption,
      hesitateOption,
      email
    });

    setSubmitting(false);

    if (res.success) {
      setSubmitted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {}
    } else {
      setErrorMessage('Submission failed. Please try again.');
    }
  };

  return (
    <section id="audit-section" className="section" style={{ backgroundColor: 'var(--bg-offwhite-2)' }}>
      <div className="container" style={{ maxWidth: '960px' }}>
        
        {/* Floating Dark Blue Rounded Card (no shadow, textured overlay) */}
        <div style={{
          backgroundColor: 'var(--ink-blue)',
          backgroundImage: `
            radial-gradient(circle at 50% 0%, rgba(66, 194, 255, 0.35) 0%, rgba(34, 9, 136, 0.95) 80%),
            url('/assets/bg-hero.png')
          `,
          backgroundBlendMode: 'multiply, normal',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: 'var(--radius-lg)',
          padding: 'clamp(2.5rem, 5vw, 4rem)',
          color: '#FFFFFF'
        }}>
          
          {/* Centered Heading + Subcopy */}
          <div style={{ textAlign: 'center', marginBottom: '2.5rem', maxWidth: '640px', margin: '0 auto 2.5rem auto' }}>
            <h2 style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              fontFamily: 'var(--font-serif)',
              fontWeight: 700,
              color: '#FFFFFF',
              marginBottom: '1rem'
            }}>
              Find What's Quietly Losing You Trust
            </h2>
            <p style={{
              color: 'rgba(255, 255, 255, 0.95)',
              fontSize: '1.05rem',
              lineHeight: 1.6
            }}>
              Send me your landing page, deck, or product page. I'll show you exactly where people stop trusting it, and reply personally within 48 hours.
            </p>
          </div>

          {submitted ? (
            <div style={{
              textAlign: 'center',
              padding: '3rem 1.5rem',
              backgroundColor: 'rgba(255, 255, 255, 0.12)',
              backdropFilter: 'blur(10px)',
              borderRadius: 'var(--radius-card)'
            }}>
              <CheckCircle2 size={48} style={{ color: 'var(--skyblue-accent)', margin: '0 auto 1rem auto' }} />
              <h3 style={{ fontSize: '1.75rem', color: '#FFFFFF', marginBottom: '0.5rem', fontFamily: 'var(--font-serif)' }}>Audit Requested!</h3>
              <p style={{ fontSize: '1.1rem', color: '#FFFFFF' }}>Thanks! I'll be in touch about your audit soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              
              {errorMessage && (
                <div style={{
                  padding: '0.85rem 1.25rem',
                  backgroundColor: '#FEE2E2',
                  color: '#991B1B',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '0.95rem',
                  textAlign: 'center'
                }}>
                  {errorMessage}
                </div>
              )}

              {/* URL Input */}
              <div>
                <input
                  type="url"
                  required
                  placeholder="Link to what you want audited"
                  value={auditUrl}
                  onChange={(e) => setAuditUrl(e.target.value)}
                  className="input-pill-white"
                />
              </div>

              {/* Two Dropdowns */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.25rem'
              }}>
                <select
                  required
                  value={lookAtOption}
                  onChange={(e) => setLookAtOption(e.target.value)}
                  className="input-pill-white"
                  style={{ color: lookAtOption ? 'var(--black)' : '#9CA3AF', cursor: 'pointer' }}
                >
                  <option value="" disabled>What should I look at</option>
                  <option value="Landing page">Landing page</option>
                  <option value="Pitch deck">Pitch deck</option>
                  <option value="Product or app onboarding">Product or app onboarding</option>
                  <option value="Program or workshop page">Program or workshop page</option>
                  <option value="Something else">Something else</option>
                </select>

                <select
                  required
                  value={hesitateOption}
                  onChange={(e) => setHesitateOption(e.target.value)}
                  className="input-pill-white"
                  style={{ color: hesitateOption ? 'var(--black)' : '#9CA3AF', cursor: 'pointer' }}
                >
                  <option value="" disabled>Where people hesitate</option>
                  <option value="They don't believe a real team is behind it">They don't believe a real team is behind it</option>
                  <option value="No proof it's worked for anyone">No proof it's worked for anyone</option>
                  <option value="Pricing or process feels hidden">Pricing or process feels hidden</option>
                  <option value="It feels generic and not built for them">It feels generic and not built for them</option>
                  <option value="The first step feels like too much to ask">The first step feels like too much to ask</option>
                  <option value="Not sure, that's what I want to find out">Not sure, that's what I want to find out</option>
                </select>
              </div>

              {/* Email Input & Coral Button */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.25rem'
              }}>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-pill-white"
                />

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-coral"
                  style={{ width: '100%', fontSize: '1.05rem' }}
                >
                  {submitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" /> Submitting...
                    </>
                  ) : (
                    'Get my audit'
                  )}
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
