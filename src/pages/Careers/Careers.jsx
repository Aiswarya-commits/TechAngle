import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Careers.css';

import BusinessImg from "../../assets/businessdevelopement.jpg";
import TeleCallerImg from "../../assets/Telecaller.jpg";
import CounsilerImg from "../../assets/Counsiler.webp";
import Finance from "../../assets/finance.webp";
import Digital from "../../assets/Digital.jpg";
import { useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

/* ── Data ──────────────────────────────────────────────── */
const EMAIL = 'info@techangle.org';

const JOBS = [
  {
    id: 1,
    title: 'Finance Faculty',
    type: 'Full-time',
    isNew: true,
    location: 'Infopark, Kochi',
    experience: '1–3 years',
    qualification: 'Any Degree',
    illus: Finance,
    isImage: true,
    color: '#14b8a6',
    description:
      'We are looking for a passionate Finance Faculty to join our training team at TechAngle. You will deliver high-quality sessions on accounting, financial management, and related topics, helping students build job-ready finance skills for real-world industry roles.',
    roles: [
      'Deliver finance & accounting training sessions',
      'Prepare course materials and assessments',
      'Mentor and guide students on career paths',
      'Coordinate with placement team for student readiness',
    ],
    skills: ['Accounting', 'Tally/ERP', 'MS Excel', 'Financial Reporting'],
    subject: 'Application for Finance Faculty Position',
  },
  {
    id: 2,
    title: 'Digital Marketing Faculty',
    type: 'Full-time',
    isNew: true,
    location: 'Infopark, Kochi',
    experience: '1–3 years',
    qualification: 'Any Degree with Digital Marketing Expertise',
    illus: Digital,
    isImage: true,
    color: '#ec4899',
    description:
      'TechAngle is seeking an experienced Digital Marketing Faculty to train the next generation of marketers. You will conduct hands-on sessions covering SEO, social media, Google Ads, content marketing, and analytics — turning beginners into industry-ready professionals.',
    roles: [
      'Teach SEO, SEM, social media & content marketing',
      'Conduct live campaigns and practical workshops',
      'Develop up-to-date curriculum and learning resources',
      'Support students with placement preparation',
    ],
    skills: ['SEO', 'Google Ads', 'Meta Ads', 'Analytics'],
    subject: 'Application for Digital Marketing Faculty Position',
  },
  {
    id: 3,
    title: 'Business Development Executive (BDE)',
    type: 'Full-time',
    isNew: true,
    location: 'Infopark, Kochi',
    experience: '0–2 years',
    qualification: 'Any Degree',
    illus: BusinessImg,
    isImage: true,
    color: '#6366f1',
    description:
      'This job role is a great place for people to start a career in business development. A business development executive will acquire practical experience in lead generation, sales support, and client communication while honing essential professional skills in a fast-paced, growth-oriented environment.',
    roles: [
      'Client communication & meetings',
      'Lead generation & follow-ups',
      'Sales growth support',
      'Market research & reporting',
    ],
    skills: ['Sales', 'CRM', 'Communication', 'Lead Generation'],
    subject: 'Application for Business Development Executive Position',
  },
  {
    id: 4,
    title: 'Telecaller',
    type: 'Full-time',
    isNew: false,
    location: 'Infopark, Kochi',
    experience: '0–1 year',
    qualification: 'Any Degree',
    illus: TeleCallerImg,
    isImage: true,
    color: '#8b5cf6',
    description:
      'This job is best suited for recent graduates who have a positive outlook and excellent communication skills. You will answer calls, manage inquiries, keep call logs, and assist the sales team as a telecaller. It\'s the ideal way to start a career in a fast-paced setting, acquire experience, and boost confidence.',
    roles: [
      'Inbound & outbound calling',
      'Client queries and conversion',
      'Call log maintenance',
      'Sales team coordination',
    ],
    skills: ['Malayalam/English', 'Patience', 'Communication', 'CRM Tools'],
    subject: 'Application for Telecaller Position',
  },
  {
    id: 5,
    title: 'Student Counselor (Female)',
    type: 'Full-time',
    isNew: true,
    location: 'Infopark, Kochi',
    experience: 'Fresher or Experienced',
    qualification: 'Any Degree',
    illus: CounsilerImg,
    isImage: true,
    color: '#ec4899',
    description:
      'Join our team and help guide students to success! As a Student Counselor, you will provide essential support and guidance to students, assisting them in academic planning, career choices, and personal development. Empathy and communication are your strongest tools.',
    roles: [
      'Student counseling and guidance',
      'Career planning support',
      'Maintaining student records',
      'Coordinating with faculty',
    ],
    skills: ['English & Malayalam', 'Communication', 'Empathy', 'Counseling'],
    subject: 'Application for Student Counselor Position',
  },
];

const PERKS = [
  { icon: '🚀', title: 'Career Growth', desc: 'Fast-track learning with real industry exposure from day one.' },
  { icon: '🧠', title: 'Skill Training', desc: 'Regular workshops, certifications, and upskilling sessions.' },
  { icon: '💼', title: 'Industry Network', desc: 'Build connections with professionals across Kerala and beyond.' },
  { icon: '🕐', title: 'Flexible Culture', desc: 'A supportive, collaborative team environment that values you.' },
  { icon: '🏆', title: 'Recognition', desc: 'Performance awards, incentives, and monthly highlights.' },
  { icon: '🌍', title: 'Infopark Location', desc: 'Prime Kochi tech hub location — right where the action is.' },
];

const PROCESS = [
  { num: '01', title: 'Apply Online', desc: 'Send your resume via email with your desired role as subject.' },
  { num: '02', title: 'Shortlisting', desc: 'Our HR team reviews applications within 3–5 business days.' },
  { num: '03', title: 'Interview', desc: 'Face-to-face or virtual interview with our hiring team.' },
  { num: '04', title: 'Offer & Join', desc: 'Receive your offer letter and join the TechAngle family!' },
];

/* ── Helpers ───────────────────────────────────────────── */
function buildMailto(job) {
  const body = encodeURIComponent(
    `Hi TechAngle HR Team,\n\nI am interested in applying for the ${job.title} position.\n\nPlease find my details below:\n\nName: \nPhone: \nEmail: \nExperience: \n\nI look forward to hearing from you.\n\nThank you.`
  );
  return `mailto:${EMAIL}?subject=${encodeURIComponent(job.subject)}&body=${body}`;
}
function UrgentHiringPopup({ onClose }) {
  const [isClosing, setIsClosing] = React.useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 500);
  };

  return (
    <div className={`uhp-backdrop ${isClosing ? 'uhp-backdrop--out' : ''}`} onClick={handleClose}>
      <div
        className={`uhp-modal ${isClosing ? 'uhp-modal--out' : ''}`}
        onClick={e => e.stopPropagation()}
      >
        {/* Animated background layers */}
        <div className="uhp-bg-orb uhp-bg-orb--1" />
        <div className="uhp-bg-orb uhp-bg-orb--2" />
        <div className="uhp-bg-orb uhp-bg-orb--3" />
        <div className="uhp-grid-lines" />

        {/* Pulsing ring */}
        <div className="uhp-ring uhp-ring--1" />
        <div className="uhp-ring uhp-ring--2" />
        <div className="uhp-ring uhp-ring--3" />

        {/* Close button */}
        <button className="uhp-close" onClick={handleClose} aria-label="Close">
          ✕
        </button>

        {/* Header badge */}
        <div className="uhp-badge">
          <span className="uhp-badge__pulse" />
          <span className="uhp-badge__pulse uhp-badge__pulse--delay" />
          🔥 URGENT HIRING
        </div>

        {/* Main headline */}
        <h2 className="uhp-headline">
          We're Hiring
          <span className="uhp-headline__accent"> Right Now!</span>
        </h2>

        <p className="uhp-sub">
          Immediate openings at <strong>Infopark, Kochi</strong> — apply today and
          join TechAngle within days, not weeks.
        </p>

        {/* Job pills */}
        <div className="uhp-jobs">
          {[
            { icon: '', title: 'finance faculty', tag: 'Immediate' },
            { icon: '', title: 'digital marketing faculty', tag: 'Immediate' },
            { icon: '📈', title: 'BDE', tag: 'Immediate' },
            { icon: '📞', title: 'Telecaller', tag: 'Immediate' },
            { icon: '🎓', title: 'Counselor', tag: 'Immediate' },
          ].map((job, i) => (
            <div key={job.title} className="uhp-job" style={{ animationDelay: `${0.6 + i * 0.12}s` }}>
              <span className="uhp-job__icon">{job.icon}</span>
              <span className="uhp-job__title">{job.title}</span>
              <span className="uhp-job__tag">{job.tag}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a
          href="mailto:info@techangle.org?subject=Urgent%20Job%20Application%20%E2%80%94%20TechAngle"
          className="uhp-cta"
          onClick={handleClose}
        >
          <span className="uhp-cta__shimmer" />
          Apply Immediately →
        </a>

        <p className="uhp-note">
          <span className="uhp-note__dot" />
          Hiring closes soon — limited seats available
        </p>
      </div>
    </div>
  );
}

/* ── Component ─────────────────────────────────────────── */
export default function Careers() {
  const [showPopup, setShowPopup] = React.useState(true);
  const heroRef = useRef(null);
  const parallaxRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      /* ── Parallax hero bg ── */
      if (parallaxRef.current && heroRef.current) {
        gsap.to(parallaxRef.current, {
          yPercent: 32,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.2,
          },
        });
      }

      /* ── Hero entrance ── */
      const heroElements = document.querySelectorAll('.careers-hero__badge, .careers-hero__title, .careers-hero__subtitle, .careers-hero__breadcrumb, .careers-hero__scroll');
      if (heroElements.length > 0) {
        const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
        heroTl
          .fromTo('.careers-hero__badge', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 })
          .fromTo('.careers-hero__title', { y: 65, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, '-=0.3')
          .fromTo('.careers-hero__subtitle', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, '-=0.6')
          .fromTo('.careers-hero__breadcrumb', { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, '-=0.4')
          .fromTo('.careers-hero__scroll', { opacity: 0 }, { opacity: 1, duration: 0.6 }, '-=0.2');
      }

      /* ── Stats ── */
      const statsElements = document.querySelectorAll('.careers-stat');
      if (statsElements.length > 0) {
        gsap.fromTo('.careers-stat',
          { y: 30, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.6, stagger: 0.12, ease: 'power3.out',
            scrollTrigger: { trigger: '.careers-stats', start: 'top 88%', once: true },
          }
        );
      }

      /* ── Perks ── */
      const perkCards = document.querySelectorAll('.perk-card');
      if (perkCards.length > 0) {
        ScrollTrigger.batch('.perk-card', {
          onEnter: batch =>
            gsap.fromTo(batch,
              { y: 55, opacity: 0, scale: 0.96 },
              { y: 0, opacity: 1, scale: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out' }
            ),
          once: true, start: 'top 90%',
        });
      }

      /* ── Job cards ── */
      const jobCards = document.querySelectorAll('.job-card');
      if (jobCards.length > 0) {
        jobCards.forEach((card, i) => {
          const dir = i % 2 === 0 ? -60 : 60;
          gsap.fromTo(card,
            { x: dir, opacity: 0 },
            {
              x: 0, opacity: 1, duration: 0.85, ease: 'power3.out',
              scrollTrigger: { trigger: card, start: 'top 85%', once: true },
            }
          );
        });
      }

      /* ── Process steps ── */
      const processSteps = document.querySelectorAll('.process-step');
      if (processSteps.length > 0) {
        gsap.fromTo('.process-step',
          { y: 45, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.7, stagger: 0.14, ease: 'power3.out',
            scrollTrigger: { trigger: '.careers-process', start: 'top 85%', once: true },
          }
        );
      }

      /* ── CTA ── */
      const ctaElement = document.querySelector('.careers-cta');
      if (ctaElement) {
        gsap.fromTo('.careers-cta',
          { y: 55, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 1, ease: 'power3.out',
            scrollTrigger: { trigger: '.careers-cta', start: 'top 88%', once: true },
          }
        );
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  /* ── Render ─────────────────────────────────────────── */
  return (
    <div className="careers-page">
      {showPopup && <UrgentHiringPopup onClose={() => setShowPopup(false)} />}

      {/* ══ HERO ══════════════════════════════════════════ */}
      <section className="careers-hero" ref={heroRef}>
        <div className="careers-hero__bg" ref={parallaxRef} />
        <div className="careers-hero__overlay" />
        <div className="careers-hero__glow" />
        <div className="careers-hero__ring careers-hero__ring--1" />
        <div className="careers-hero__ring careers-hero__ring--2" />

        <div className="careers-hero__content">
          <div className="careers-hero__badge">
            <span className="careers-hero__badge-dot" />
            We're Hiring
          </div>

          <h1 className="careers-hero__title">
            Shape Your <span className="careers-hero__title-accent">Future</span>
            <br />with TechAngle
          </h1>

          <p className="careers-hero__subtitle">
            Join a passionate team building the next generation of tech talent.
            Explore roles in business, counseling, and communications at Infopark, Kochi.
          </p>

          <div className="careers-hero__breadcrumb">
            <span className="careers-hero__bc-link">Home</span>
            <span className="careers-hero__bc-sep">›</span>
            <span>Careers</span>
          </div>
        </div>

        <div className="careers-hero__scroll">
          <div className="careers-hero__scroll-mouse">
            <div className="careers-hero__scroll-dot" />
          </div>
          Scroll
        </div>
      </section>

      {/* ══ STATS ═════════════════════════════════════════ */}
      <div className="careers-stats">
        <div className="careers-stats__inner">
          {[
            { num: '5+', label: 'Open Positions' },
            { num: '200+', label: 'Students Placed' },
            { num: '2022', label: 'Founded' },
            { num: 'Kochi', label: 'Infopark HQ' },
          ].map(s => (
            <div key={s.label} className="careers-stat">
              <span className="careers-stat__num">{s.num}</span>
              <span className="careers-stat__label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ══ PERKS ═════════════════════════════════════════ */}
      <div className="careers-perks">
        <h2 className="careers-perks__title">Why Work at TechAngle?</h2>
        <p className="careers-perks__sub">
          More than a job — it's a launchpad for your career.
        </p>
        <div className="careers-perks__grid">
          {PERKS.map(p => (
            <div key={p.title} className="perk-card">
              <div className="perk-card__icon">{p.icon}</div>
              <div className="perk-card__title">{p.title}</div>
              <div className="perk-card__desc">{p.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ══ JOB LISTINGS ══════════════════════════════════ */}
      <section className="careers-section">
        <div className="careers-section__header">
          <span className="careers-section__eyebrow">Open Roles</span>
          <h2 className="careers-section__title">Current Openings</h2>
          <p className="careers-section__desc">
            Find the role that fits your ambitions and join our growing team at Infopark, Kochi.
          </p>
        </div>

        <div className="jobs-list">
          {JOBS.map((job, i) => {
            const isAlt = i % 2 !== 0;
            return (
              <article
                key={job.id}
                className={`job-card${isAlt ? ' job-card--alt' : ''}`}
              >
                {/* Visual panel */}
                <div className="job-card__visual">
                  <div className="job-card__visual-deco job-card__visual-deco--1" />
                  <div className="job-card__visual-deco job-card__visual-deco--2" />
                  <div className="job-card__num">{String(i + 1).padStart(2, '0')}</div>

                  {/* Render image or emoji based on type */}
                  {job.isImage ? (
                    <div className="job-card__illus job-card__illus--image">
                      <img src={job.illus} alt={job.title} />
                    </div>
                  ) : (
                    <span className="job-card__illus job-card__illus--emoji">
                      {job.illus}
                    </span>
                  )}
                </div>

                {/* Content panel */}
                <div className="job-card__content">
                  <div className="job-card__type-row">
                    <span className="job-card__badge job-card__badge--type">
                      {job.type}
                    </span>
                    {job.isNew && (
                      <span className="job-card__badge job-card__badge--new">
                        ✨ New
                      </span>
                    )}
                  </div>

                  <h3 className="job-card__title">{job.title}</h3>

                  <div className="job-card__meta">
                    <div className="job-card__meta-item">
                      <span className="job-card__meta-icon">📍</span>
                      <strong>{job.location}</strong>
                    </div>
                    <div className="job-card__meta-item">
                      <span className="job-card__meta-icon">⏳</span>
                      Experience: <strong>{job.experience}</strong>
                    </div>
                    <div className="job-card__meta-item">
                      <span className="job-card__meta-icon">🎓</span>
                      {job.qualification}
                    </div>
                  </div>

                  <p className="job-card__desc">{job.description}</p>

                  <p className="job-card__roles-title">Roles &amp; Responsibilities</p>
                  <div className="job-card__roles">
                    {job.roles.map(r => (
                      <div key={r} className="job-card__role-item">
                        <span className="job-card__role-dot" />
                        {r}
                      </div>
                    ))}
                  </div>

                  <div className="job-card__skills-row">
                    <span className="job-card__skills-label">Skills:</span>
                    {job.skills.map(s => (
                      <span key={s} className="job-card__skill-tag">{s}</span>
                    ))}
                  </div>

                  <div className="job-card__actions">
                    <a
                      href={buildMailto(job)}
                      className="btn-apply"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Apply Now
                      <span className="btn-apply__arrow">→</span>
                    </a>
                    <button
                      className="btn-share"
                      title="Share this job"
                      onClick={() => {
                        if (navigator.share) {
                          navigator.share({ title: job.title, text: job.description, url: window.location.href });
                        } else {
                          navigator.clipboard.writeText(window.location.href);
                        }
                      }}
                    >
                      🔗
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ══ PROCESS ═══════════════════════════════════════ */}
      <div className="careers-process">
        <div className="careers-process__header">
          <span className="careers-section__eyebrow">Simple &amp; Transparent</span>
          <h2 className="careers-section__title">How to Apply</h2>
        </div>
        <div className="careers-process__steps">
          {PROCESS.map(step => (
            <div key={step.num} className="process-step">
              <div className="process-step__num">{step.num}</div>
              <div className="process-step__title">{step.title}</div>
              <div className="process-step__desc">{step.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ══ CTA BANNER ════════════════════════════════════ */}
      <div className="careers-cta">
        <h2 className="careers-cta__title">Don't See Your Role? Reach Out Anyway.</h2>
        <p className="careers-cta__desc">
          We're always looking for talented, motivated people. Drop us your resume
          and we'll keep you in mind for future openings.
        </p>
        <a
          href={`mailto:${EMAIL}?subject=General%20Job%20Enquiry%20%E2%80%94%20TechAngle&body=Hi%20TechAngle%20HR%20Team%2C%0A%0AI%20am%20interested%20in%20joining%20TechAngle.%20Please%20find%20my%20resume%20attached.%0A%0AName%3A%20%0APhone%3A%20%0AExperience%3A%20%0ARole%20Interested%20In%3A%20%0A%0AThank%20you.`}
          className="careers-cta__email-link"
        >
          ✉️ Email Us Your Resume
        </a>
      </div>

    </div>
  );
}