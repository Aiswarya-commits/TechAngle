import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import emailjs from '@emailjs/browser';
import './Contact.css';

// ─── CONFIG: Replace these with your EmailJS credentials ──────────────────────
const EMAILJS_SERVICE_ID = 'service_sigknpe';   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'template_jb9lkcz';  // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY = '7S3PWZWuZMBZrDnqv';   // e.g. 'abcDEFghiJKL'
// ──────────────────────────────────────────────────────────────────────────────

const COURSES = [
  'Internet of Things',
  'Full Stack Development',
  'Data Science & AI',
  'Cloud Computing',
  'Cyber Security',
  'Mobile Development',
  'UI/UX Design',
  'DevOps & CI/CD',
];

const FAQS = [
  { q: 'How long are the courses?', a: 'Most courses run 3–6 months with weekend and weekday batches available.' },
  { q: 'Do you offer placement assistance?', a: 'Yes! We have a dedicated placement cell with 100+ hiring partners across Kerala and Bangalore.' },
  { q: 'Are EMI options available?', a: 'Absolutely. We offer 0% interest EMI for up to 12 months through our banking partners.' },
  { q: 'Is there a demo class?', a: 'Yes, every course offers a free 2-hour demo session. Fill the form and select "Request Demo".' },
];

const FloatingParticles = () => (
  <div className="particles" aria-hidden="true">
    {Array.from({ length: 20 }).map((_, i) => (
      <span key={i} className={`particle p${i}`} />
    ))}
  </div>
);

export default function Contact() {
  const formRef = useRef(null);
  const infoRef = useRef(null);
  const heroRef = useRef(null);

  const [fields, setFields] = useState({
    firstName: '', lastName: '', email: '', phone: '', course: '', subject: '', message: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [openFaq, setOpenFaq] = useState(null);
  const [charCount, setCharCount] = useState(0);

  // ── Animations ───────────────────────────────────────────────────────────────
  useEffect(() => {
    window.scrollTo(0, 0);
    const tl = gsap.timeline({ delay: 0.1 });
    tl.fromTo(heroRef.current, { opacity: 0 }, { opacity: 1, duration: 0.6 })
      .fromTo('.hero-badge', { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, '-=0.3')
      .fromTo('.contact-hero h1', { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' }, '-=0.2')
      .fromTo('.contact-hero p', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, '-=0.5')
      .fromTo('.hero-stats .stat', { y: 40, opacity: 0, stagger: 0.15 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.3')
      .fromTo(infoRef.current, { x: -60, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }, '-=0.2')
      .fromTo(formRef.current, { x: 60, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }, '-=0.6');
  }, []);

  // ── Validation ───────────────────────────────────────────────────────────────
  const validate = () => {
    const e = {};
    if (!fields.firstName.trim()) e.firstName = 'Required';
    if (!fields.lastName.trim()) e.lastName = 'Required';
    if (!/\S+@\S+\.\S+/.test(fields.email)) e.email = 'Valid email required';
    if (!/^\+?[\d\s\-]{8,}$/.test(fields.phone)) e.phone = 'Valid phone required';
    if (!fields.course) e.course = 'Please select a course';
    if (fields.message.trim().length < 10) e.message = 'Message too short (min 10 chars)';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(er => ({ ...er, [name]: '' }));
    if (name === 'message') setCharCount(value.length);
  };

  // ── Submit via EmailJS ────────────────────────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setStatus('sending');
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: `${fields.firstName} ${fields.lastName}`,
          from_email: fields.email,
          phone: fields.phone,
          course: fields.course,
          subject: fields.subject || 'Contact Form Submission',
          message: fields.message,
          reply_to: fields.email,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setFields({ firstName: '', lastName: '', email: '', phone: '', course: '', subject: '', message: '' });
      setCharCount(0);
      gsap.fromTo('.success-overlay', { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="contact-page">
      <FloatingParticles />

      {/* ── HERO ── */}
      <section className="contact-hero" ref={heroRef}>
        <div className="aurora" aria-hidden="true">
          <div className="aurora-1" /><div className="aurora-2" /><div className="aurora-3" />
        </div>
        <div className="container">
          <div className="hero-badge">✨ We respond within 24 hours</div>
          <h1>Let's <span className="gradient-word">Connect</span></h1>
          <p>Transform your career with TechAngle. Reach out and we'll chart your path together.</p>
          <div className="hero-stats">
            {[['5000+', 'Students'], ['98%', 'Placement Rate'], ['24h', 'Response Time'], ['100+', 'Hiring Partners']].map(([n, l]) => (
              <div className="stat" key={l}><strong>{n}</strong><span>{l}</span></div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUICK CONTACT BAR ── */}
      <div className="quick-bar">
        <div className="container quick-bar-inner">
          <a href="mailto:info@techangle.org" className="qb-item">
            <span className="qb-icon">✉️</span> info@techangle.org
          </a>
          <a href="https://wa.me/917907372646" target="_blank" rel="noreferrer" className="qb-item whatsapp">
            <span className="qb-icon">💬</span> WhatsApp Us
          </a>
          <a href="tel:+917907372646" className="qb-item">
            <span className="qb-icon">📞</span> +91 7907372646
          </a>
          <span className="qb-item hours">
            <span className="qb-icon">🕐</span> Mon–Sat 9AM–6PM IST
          </span>
        </div>
      </div>

      {/* ── MAIN ── */}
      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">

            {/* ── INFO COLUMN ── */}
            <div className="contact-info" ref={infoRef}>

              <div className="info-card location-card">
                <div className="card-accent" />
                <div className="info-icon-wrap">📍</div>
                <h3>Visit Us</h3>
                <p>TechAngle Training Institute<br />Infopark Campus, Kakkanad<br />Kochi, Kerala – 682042</p>
                <a href="https://www.google.com/maps/place/TechAngle/@10.0142114,76.345034,15z/data=!3m2!4b1!5s0x3b080c8576a7743d:0x85e50fccded2b4d7!4m6!3m5!1s0x3b080d5f9e85acf7:0xdf2fa053c826a859!8m2!3d10.0141908!4d76.3634881!16s%2Fg%2F11y4xn_rxn?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer" className="card-link">Open in Maps →</a>
              </div>

              <div className="info-card">
                <div className="card-accent accent-2" />
                <div className="info-icon-wrap">📧</div>
                <h3>Email Us</h3>
                <p>
                  <a href="mailto:info@techangle.org">info@techangle.org</a><br />
                  <a href="mailto:techangle00@gmail.com">techangle00@gmail.com</a>
                </p>
              </div>

              <div className="info-card whatsapp-card">
                <div className="card-accent accent-3" />
                <div className="info-icon-wrap">💬</div>
                <h3>WhatsApp</h3>
                <p>Chat with our counsellors for instant admission guidance</p>
                <a href="https://wa.me/917907372646?text=Hi%2C%20I%27m%20interested%20in%20your%20courses" target="_blank" rel="noreferrer" className="card-link wa-btn">
                  Chat on WhatsApp →
                </a>
              </div>

              <div className="info-card social-card">
                <div className="card-accent accent-4" />
                <div className="info-icon-wrap">🌐</div>
                <h3>Follow Us</h3>
                <div className="social-links-contact">
                  {[
                    { label: 'Facebook', href: 'https://www.facebook.com/techangle/', icon: 'f', color: '#1877F2' },
                    { label: 'Instagram', href: 'https://www.instagram.com/techangle_org?igsh=MTRveXZ5aWZ3ODJhcw==', icon: 'ig', color: '#E1306C' },
                    { label: 'LinkedIn', href: 'https://www.linkedin.com/school/techangle/', icon: 'in', color: '#0A66C2' },
                    { label: 'YouTube', href: 'https://www.youtube.com/@techangleorg', icon: '▶', color: '#FF0000' },
                    // { label: 'Twitter', href: '#', icon: '𝕏', color: '#000' },
                  ].map(s => (
                    <a key={s.label} href={s.href} aria-label={s.label} className="social-pill" style={{ '--sc': s.color }}>
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>

            </div>

            {/* ── FORM COLUMN ── */}
            <div className="form-wrapper" ref={formRef}>
              {status === 'success' ? (
                <div className="success-overlay">
                  <div className="success-icon">🎉</div>
                  <h2>Message Sent!</h2>
                  <p>Thank you for reaching out. Our team will contact you within <strong>24 hours</strong>.</p>
                  <p className="success-sub">Check your inbox for a confirmation email.</p>
                  <button className="submit-btn" onClick={() => setStatus('idle')}>Send Another</button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="form-header">
                    <h2>Send a Message</h2>
                    <p className="form-description">Fill in the details below and we'll get back to you ASAP.</p>
                  </div>

                  {status === 'error' && (
                    <div className="error-banner">
                      ⚠️ Something went wrong. Please try again or email us directly at info@techangle.org
                    </div>
                  )}

                  <div className="form-row">
                    <Field label="First Name" name="firstName" placeholder="John" value={fields.firstName} onChange={handleChange} error={errors.firstName} required />
                    <Field label="Last Name" name="lastName" placeholder="Doe" value={fields.lastName} onChange={handleChange} error={errors.lastName} required />
                  </div>
                  <Field label="Email Address" name="email" type="email" placeholder="john.doe@example.com" value={fields.email} onChange={handleChange} error={errors.email} required />
                  <Field label="Phone Number" name="phone" type="tel" placeholder="+91 98765 43210" value={fields.phone} onChange={handleChange} error={errors.phone} required />
                  <Field label="Subject" name="subject" placeholder="How can we help you?" value={fields.subject} onChange={handleChange} />

                  <div className="form-group">
                    <label className="field-label">Course Interested In <span className="req">*</span></label>
                    <div className="course-grid">
                      {COURSES.map(c => (
                        <button type="button" key={c}
                          className={`course-chip${fields.course === c ? ' selected' : ''}`}
                          onClick={() => { setFields(f => ({ ...f, course: c })); setErrors(er => ({ ...er, course: '' })); }}>
                          {c}
                        </button>
                      ))}
                    </div>
                    {errors.course && <span className="field-error">{errors.course}</span>}
                  </div>

                  <div className="form-group">
                    <label className="field-label">Message <span className="req">*</span></label>
                    <textarea name="message" rows="5" placeholder="Tell us about your goals, background, or any questions..." value={fields.message} onChange={handleChange} className={errors.message ? 'has-error' : ''} maxLength={1000} />
                    <div className="char-meta">
                      {errors.message && <span className="field-error">{errors.message}</span>}
                      <span className="char-count">{charCount}/1000</span>
                    </div>
                  </div>

                  <button type="submit" className={`submit-btn${status === 'sending' ? ' sending' : ''}`} disabled={status === 'sending'}>
                    {status === 'sending' ? <><span className="spinner" /> Sending…</> : '🚀 Send Message'}
                  </button>

                  <p className="privacy-note">🔒 Your information is secure and will never be shared with third parties.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──
      <section className="faq-section">
        <div className="container">
          <div className="section-label">Common Questions</div>
          <h2 className="section-title">FAQs</h2>
          <div className="faq-list">
            {FAQS.map((f, i) => (
              <div key={i} className={`faq-item${openFaq === i ? ' open' : ''}`} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <div className="faq-q">
                  <span>{f.q}</span>
                  <span className="faq-chevron">{openFaq === i ? '−' : '+'}</span>
                </div>
                <div className="faq-a">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── MAP ── */}
      {/* ── MAP ── */}
<section className="map-section">
  <div className="container">
    <div className="section-label">Our Location</div>
    <h2 className="section-title">Find Us</h2>
    <div className="map-frame">
      <iframe
        title="TechAngle Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.0474!2d76.3609132!3d10.0141961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d5f9e85acf7%3A0xdf2fa053c826a859!2sTechAngle!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  </div>
</section>

      {/* ── FLOATING WHATSAPP ── */}
      <a href="https://wa.me/917907372646?text=Hi%2C%20I%27m%20interested%20in%20your%20courses" target="_blank" rel="noreferrer" className="floating-wa" aria-label="WhatsApp">
        <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 2C6.477 2 2 6.477 2 12c0 1.9.524 3.67 1.43 5.185L2.01 22l4.9-1.395A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.95 7.95 0 01-4.045-1.101l-.29-.173-3.005.855.825-2.98-.19-.307A7.97 7.97 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z" /></svg>
      </a>
    </div>
  );
}

// ── Reusable Field Component ──────────────────────────────────────────────────
function Field({ label, name, type = 'text', placeholder, value, onChange, error, required }) {
  return (
    <div className="form-group">
      <label className="field-label">{label}{required && <span className="req"> *</span>}</label>
      <input type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} className={error ? 'has-error' : ''} />
      {error && <span className="field-error">{error}</span>}
    </div>
  );
}