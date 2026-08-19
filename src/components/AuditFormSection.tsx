import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, Link, Mail, Loader2 } from 'lucide-react';
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
      } catch (cErr) {
        // Confetti fallback safely ignored
      }
    } else {
      setErrorMessage('Submission failed. Please try again.');
    }
  };

  return (
    <section id="audit-section" className="section" style={{ backgroundColor: '#F3F1E9' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-xl)',
          padding: 'clamp(2rem, 4vw, 3.5rem)',
          boxShadow: 'var(--shadow-md)',
          border: '1px solid var(--border-light)'
        }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="badge badge-gold" style={{ marginBottom: '1rem' }}>
              <ShieldCheck size={15} /> Free 48-Hour Conversion Audit
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: 'var(--text-main)' }}>
              Find what's quietly losing your trust
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '620px', margin: '0 auto' }}>
              Send me your landing page, deck, or product page. I'll show you exactly where people stop trusting it, and reply personally within 48 hours.
            </p>
          </div>

          {submitted ? (
            <div style={{
              textAlign: 'center',
              padding: '3rem 1.5rem',
              backgroundColor: '#F0FDF4',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid #BBF7D0',
              animation: 'fadeIn 0.5s ease forwards'
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: '#22C55E',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto',
                boxShadow: '0 8px 20px rgba(34, 197, 94, 0.3)'
              }}>
                <CheckCircle2 size={36} />
              </div>
              <h3 style={{ fontSize: '1.6rem', color: '#14532D', marginBottom: '0.75rem' }}>
                Audit Requested!
              </h3>
              <p style={{ color: '#166534', fontSize: '1.1rem', fontWeight: 500 }}>
                Thanks! I'll be in touch about your audit soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              
              {errorMessage && (
                <div style={{
                  padding: '0.85rem 1.25rem',
                  backgroundColor: '#FEE2E2',
                  color: '#991B1B',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.95rem'
                }}>
                  {errorMessage}
                </div>
              )}

              {/* Field 1: Link to what you want audited */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="auditUrl" style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '0.975rem' }}>
                  Link to what you want audited <span style={{ color: '#DC2626' }}>*</span>
                </label>
                <div style={{ position: 'relative' }}>
                  <Link size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#9CA3AF' }} />
                  <input
                    id="auditUrl"
                    type="url"
                    required
                    placeholder="https://yourwebsite.com/landing-page"
                    value={auditUrl}
                    onChange={(e) => setAuditUrl(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem 0.85rem 2.6rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1.5px solid var(--border-medium)',
                      fontSize: '1rem',
                      fontFamily: 'var(--font-sans)',
                      outline: 'none',
                      transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
                    }}
                  />
                </div>
              </div>

              {/* Field 2: What should I look at */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="lookAtOption" style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '0.975rem' }}>
                  What should I look at <span style={{ color: '#DC2626' }}>*</span>
                </label>
                <select
                  id="lookAtOption"
                  required
                  value={lookAtOption}
                  onChange={(e) => setLookAtOption(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1.5px solid var(--border-medium)',
                    fontSize: '1rem',
                    fontFamily: 'var(--font-sans)',
                    backgroundColor: '#FFFFFF',
                    outline: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <option value="" disabled>Select option...</option>
                  <option value="Landing page">Landing page</option>
                  <option value="Pitch deck">Pitch deck</option>
                  <option value="Product or app onboarding">Product or app onboarding</option>
                  <option value="Program or workshop page">Program or workshop page</option>
                  <option value="Something else">Something else</option>
                </select>
              </div>

              {/* Field 3: Where do people hesitate most */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="hesitateOption" style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '0.975rem' }}>
                  Where do people hesitate most <span style={{ color: '#DC2626' }}>*</span>
                </label>
                <select
                  id="hesitateOption"
                  required
                  value={hesitateOption}
                  onChange={(e) => setHesitateOption(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1.5px solid var(--border-medium)',
                    fontSize: '1rem',
                    fontFamily: 'var(--font-sans)',
                    backgroundColor: '#FFFFFF',
                    outline: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <option value="" disabled>Select option...</option>
                  <option value="They don't believe a real team is behind it">They don't believe a real team is behind it</option>
                  <option value="No proof it's worked for anyone">No proof it's worked for anyone</option>
                  <option value="Pricing or process feels hidden">Pricing or process feels hidden</option>
                  <option value="It feels generic and not built for them">It feels generic and not built for them</option>
                  <option value="The first step feels like too much to ask">The first step feels like too much to ask</option>
                  <option value="Not sure, that's what I want to find out">Not sure, that's what I want to find out</option>
                </select>
              </div>

              {/* Field 4: Email */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="email" style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '0.975rem' }}>
                  Email <span style={{ color: '#DC2626' }}>*</span>
                </label>
                <div style={{ position: 'relative' }}>
                  <Mail size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#9CA3AF' }} />
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem 0.85rem 2.6rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1.5px solid var(--border-medium)',
                      fontSize: '1rem',
                      fontFamily: 'var(--font-sans)',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="btn btn-blue"
                style={{
                  padding: '1rem',
                  fontSize: '1.05rem',
                  marginTop: '0.75rem',
                  width: '100%'
                }}
              >
                {submitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin" /> Submitting Request...
                  </>
                ) : (
                  <>
                    <Send size={18} /> Get my audit
                  </>
                )}
              </button>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
