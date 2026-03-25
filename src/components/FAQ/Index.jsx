import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Style.css';

gsap.registerPlugin(ScrollTrigger);

// ── FAQ Data ─────────────────────────────────────────────────────
const FAQ_CATEGORIES = [
  {
    id: 'learning',
    icon: '🎓',
    label: 'Learning',
    color: '#7C3AED',
    faqs: [
      {
        q: 'What modes of learning do you offer?',
        lines: [
          { type: 'text', text: 'We offer a variety of flexible learning formats to suit every lifestyle:' },
          { type: 'bullet', text: 'Online Live & Recorded Classes – Attend live sessions or catch up with recordings at your own pace.' },
          { type: 'bullet', text: 'Offline Classroom Sessions – Traditional in-person learning at our Kochi campus.' },
          { type: 'bullet', text: 'Blended Learning (Online + Offline) – A hybrid approach combining the best of both worlds.' },
          { type: 'text', text: 'This flexibility ensures learning convenience for professionals working across different shifts and schedules.' },
        ],
      },
      {
        q: 'Are your programs suitable for working professionals?',
        lines: [
          { type: 'text', text: 'Yes. All our programs are designed specifically for working professionals, with flexible learning models including online, weekend, and blended classes. This allows you to balance work, family, and studies without career disruption.' },
        ],
      },
      {
        q: 'Is there academic support after admission?',
        lines: [
          { type: 'text', text: 'Absolutely. We provide continuous academic coordination, student support, reminders, and guidance throughout your program—from admission to graduation. Our dedicated support team ensures no student is left behind.' },
        ],
      },
    ],
  },
  {
    id: 'career',
    icon: '🚀',
    label: 'Career',
    color: '#0EA5E9',
    faqs: [
      {
        q: 'Will the course help me with career growth and upskilling?',
        lines: [
          { type: 'text', text: "Definitely. Our programs are designed to enhance managerial skills, strategic thinking, leadership capability, and domain expertise—enabling reskilling and upskilling relevant to today's competitive job market." },
          { type: 'text', text: 'Graduates consistently report significant career advancements within 6 months of completing their program.' },
        ],
      },
      {
        q: 'Do you offer placement assistance?',
        lines: [
          { type: 'text', text: 'Yes! We have a dedicated placement cell with 100+ hiring partners across Kerala and Bangalore.' },
          { type: 'bullet', text: 'Active job placement connections with top companies' },
          { type: 'bullet', text: 'Mock interviews and resume-building support' },
          { type: 'bullet', text: 'Career counselling and guidance sessions' },
        ],
      },
      {
        q: 'What is the placement rate?',
        lines: [
          { type: 'text', text: 'We maintain a 98% placement rate among our graduates. Our strong industry network and job-ready curriculum ensure students are well-prepared for the workforce upon completion.' },
        ],
      },
    ],
  },
  {
    id: 'fees',
    icon: '💳',
    label: 'Fees & Admission',
    color: '#10B981',
    faqs: [
      {
        q: 'Is there an installment or flexible fee payment option?',
        lines: [
          { type: 'text', text: 'Yes. We offer student-friendly and flexible fee payment options, including installment plans, to make quality education accessible for working professionals.' },
          { type: 'bullet', text: '0% interest EMI for up to 12 months' },
          { type: 'bullet', text: 'Multiple banking partner integrations' },
          { type: 'bullet', text: 'Custom payment schedules available on request' },
        ],
      },
      {
        q: 'Are EMI options available?',
        lines: [
          { type: 'text', text: 'Absolutely. We offer 0% interest EMI for up to 12 months through our banking partners. This makes it possible to start your learning journey without any financial stress upfront.' },
        ],
      },
      {
        q: 'Is there a demo class?',
        lines: [
          { type: 'text', text: 'Yes, every course offers a free 2-hour demo session so you can experience our teaching methodology before committing.' },
          { type: 'text', text: 'Fill the contact form and mention "Request Demo" in your message to schedule your free session.' },
        ],
      },
    ],
  },
  {
    id: 'courses',
    icon: '📚',
    label: 'Courses',
    color: '#F59E0B',
    faqs: [
      {
        q: 'How long are the courses?',
        lines: [
          { type: 'text', text: 'Most courses run 3–6 months with weekend and weekday batches available. Duration varies based on program complexity and depth.' },
          { type: 'bullet', text: 'Accelerated tracks for experienced professionals' },
          { type: 'bullet', text: 'Standard tracks for beginners' },
          { type: 'bullet', text: 'Weekend and weekday batch options' },
        ],
      },
      {
        q: 'What courses do you offer?',
        lines: [
          { type: 'text', text: 'We offer a wide range of tech-focused programs:' },
          { type: 'bullet', text: 'CBSC Computing Skills & Mastery Data Platform' },
          { type: 'bullet', text: 'Digital Designing & Google Certification Programs' },
          { type: 'bullet', text: 'IT Hardware & Networking & Financial Accounting' },
          { type: 'bullet', text: 'Software Development & AI And Other Programs' },
          { type: 'bullet', text: 'Management Level & Soft Skills' },
        ],
      },
      {
        q: 'Do you provide course completion certificates?',
        lines: [
          { type: 'text', text: 'Yes! Upon successful completion, students receive industry-recognized certificates valued by employers. For select programs, we also facilitate Google, Microsoft, and other vendor certifications.' },
        ],
      },
    ],
  },
];

// ── Answer renderer ──────────────────────────────────────────────
function AnswerLines({ lines }) {
  return (
    <div className="faq-answer-inner">
      {lines.map((line, i) =>
        line.type === 'bullet' ? (
          <p key={i} className="faq-bullet-row">
            <span className="faq-bullet-dot" />
            {line.text}
          </p>
        ) : (
          <p key={i} className="faq-text-row">{line.text}</p>
        )
      )}
    </div>
  );
}

// ── Floating Orbs ────────────────────────────────────────────────
function FloatingOrbs() {
  return (
    <div className="faq-orbs" aria-hidden="true">
      {[...Array(6)].map((_, i) => (
        <div key={i} className={`orb orb-${i + 1}`} />
      ))}
    </div>
  );
}

// ── Grid Pattern ─────────────────────────────────────────────────
function GridPattern() {
  return (
    <svg className="faq-grid" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="faqgrid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#faqgrid)" />
    </svg>
  );
}

// ── Main Page ─────────────────────────────────────────────────────
export default function FAQ() {
  const heroRef = useRef(null);
  const parallaxBgRef = useRef(null);
  const statsRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('learning');
  const [openFaq, setOpenFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const currentCategory = FAQ_CATEGORIES.find(c => c.id === activeCategory);

  const filteredFaqs = searchQuery.trim()
    ? FAQ_CATEGORIES.flatMap(cat =>
      cat.faqs
        .filter(f =>
          f.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
          f.lines.some(l => l.text.toLowerCase().includes(searchQuery.toLowerCase()))
        )
        .map(f => ({ ...f, category: cat }))
    )
    : currentCategory.faqs.map(f => ({ ...f, category: currentCategory }));

  useEffect(() => {
    window.scrollTo(0, 0);

    const tl = gsap.timeline({ delay: 0.15 });
    tl.fromTo('.faq-hero-eyebrow',
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' })
      .fromTo('.faq-hero-title',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' }, '-=0.3')
      .fromTo('.faq-hero-sub',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 }, '-=0.5')
      .fromTo('.faq-search-wrap',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 }, '-=0.4')
      .fromTo('.faq-stat',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 }, '-=0.3');

    // Parallax on scroll
    gsap.to(parallaxBgRef.current, {
      yPercent: 40,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    // Orbs slow parallax
    gsap.utils.toArray('.orb').forEach((orb, i) => {
      gsap.to(orb, {
        y: (i % 2 === 0 ? -1 : 1) * (30 + i * 12),
        ease: 'none',
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: 'bottom bottom',
          scrub: i * 0.3 + 0.5,
        },
      });
    });

    // Section reveals
    gsap.utils.toArray('.reveal-section').forEach(el => {
      gsap.fromTo(el,
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 85%' },
        }
      );
    });

    // Overview cards
    ScrollTrigger.create({
      trigger: '.overview-grid',
      start: 'top 85%',
      onEnter: () => {
        gsap.fromTo('.overview-card',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'power2.out' }
        );
      },
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  useEffect(() => {
    setOpenFaq(null);
    setTimeout(() => {
      gsap.fromTo('.faq-item',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.07, ease: 'power2.out' }
      );
    }, 10);
  }, [activeCategory, searchQuery]);

  const toggleFaq = (idx) => {
    setOpenFaq(prev => (prev === idx ? null : idx));
  };

  return (
    <div className="faq-page">
      <FloatingOrbs />
      <GridPattern />

      {/* ── HERO ── */}
      <section className="faq-hero" ref={heroRef}>
        <div className="faq-parallax-bg" ref={parallaxBgRef}>
          <div className="aurora-faq">
            <div className="af-1" /><div className="af-2" /><div className="af-3" />
          </div>
        </div>

        <div className="faq-hero-content container">
          <div className="faq-hero-eyebrow">
            <span className="eyebrow-dot" />
            Knowledge Base
          </div>
          <h1 className="faq-hero-title">
            Frequently Asked<br />
            <span className="faq-title-gradient">Questions</span>
          </h1>
          <p className="faq-hero-sub">
            Everything you need to know about TechAngle — learning modes, career support,
            fees, and more. Can't find what you're looking for?{' '}
            <a href="/contact" className="faq-contact-link">Contact us →</a>
          </p>

          <div className="faq-search-wrap">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              className="faq-search"
              placeholder="Search any question…"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button className="search-clear" onClick={() => setSearchQuery('')}>✕</button>
            )}
          </div>
        </div>

        <div className="faq-stats-bar" ref={statsRef}>
          <div className="container">
            <div className="faq-stats-inner">
              {[['3500+', 'Students Trained'], ['98%', 'Placement Rate'], ['100+', 'Hiring Partners'], ['250+', 'Courses Offered']].map(([n, l]) => (
                <div className="faq-stat" key={l}>
                  <strong>{n}</strong><span>{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN FAQ SECTION ── */}
      {/* ── MAIN FAQ SECTION ── */}
      <section className="faq-main reveal-section">
        <div className="container">

          <div className="faq-section-header">
            <span className="section-eyebrow">COMMON QUESTIONS</span>
            <h2>FAQs</h2>
          </div>

          <div className="faq-list-wrap">
            {(searchQuery.trim()
              ? FAQ_CATEGORIES.flatMap(cat =>
                cat.faqs
                  .filter(f =>
                    f.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    f.lines.some(l => l.text.toLowerCase().includes(searchQuery.toLowerCase()))
                  )
                  .map(f => ({ ...f, category: cat }))
              )
              : FAQ_CATEGORIES.flatMap(cat => cat.faqs.map(f => ({ ...f, category: cat })))
            ).length === 0 ? (
              <div className="faq-empty">
                <span>🤔</span>
                <p>No results found. Try a different term or <a href="/contact">contact us</a>.</p>
              </div>
            ) : (
              (searchQuery.trim()
                ? FAQ_CATEGORIES.flatMap(cat =>
                  cat.faqs
                    .filter(f =>
                      f.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
                      f.lines.some(l => l.text.toLowerCase().includes(searchQuery.toLowerCase()))
                    )
                    .map(f => ({ ...f, category: cat }))
                )
                : FAQ_CATEGORIES.flatMap(cat => cat.faqs.map(f => ({ ...f, category: cat })))
              ).map((faq, i) => (
                <div
                  key={i}
                  className={`faq-item${openFaq === i ? ' open' : ''}`}
                  style={{ '--accent': faq.category ? faq.category.color : '#7C3AED' }}
                  onClick={() => toggleFaq(i)}
                >
                  <div className="faq-question">
                    <span className="faq-q-text">{faq.q}</span>
                    <span className="faq-toggle-plus">
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </div>
                  <div className="faq-answer">
                    <AnswerLines lines={faq.lines} />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* ── ALL TOPICS OVERVIEW ── */}
      <section className="faq-overview reveal-section">
        <div className="container">
          <div className="faq-overview-header">
            <span className="section-eyebrow">At a Glance</span>
            <h2>Browse All Topics</h2>
          </div>
          <div className="overview-grid">
            {FAQ_CATEGORIES.map(cat => (
              <div key={cat.id} className="overview-card" style={{ '--oc': cat.color }}
                onClick={() => { setActiveCategory(cat.id); setSearchQuery(''); window.scrollTo({ top: 600, behavior: 'smooth' }); }}
              >
                <div className="oc-icon">{cat.icon}</div>
                <div className="oc-info"><h3>{cat.label}</h3><span>{cat.faqs.length} questions</span></div>
                <span className="oc-arrow">→</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="faq-cta reveal-section">
        <div className="container">
          <div className="faq-cta-inner">
            <div className="cta-glow" />
            <span className="cta-emoji">💬</span>
            <h2>Still have questions?</h2>
            <p>Our counsellors are ready to help — reach out via any channel below.</p>
            <div className="cta-actions">
              <a href="/contact" className="cta-btn primary">Contact Us</a>
              <a href="https://wa.me/917907372646?text=Hi%2C%20I%27m%20interested%20in%20your%20courses" target="_blank" rel="noreferrer" className="cta-btn whatsapp">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.9.524 3.67 1.43 5.185L2.01 22l4.9-1.395A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.95 7.95 0 01-4.045-1.101l-.29-.173-3.005.855.825-2.98-.19-.307A7.97 7.97 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z" />
                </svg>
                WhatsApp
              </a>
              <a href="tel:+917907372646" className="cta-btn phone">📞 Call Us</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FLOATING WHATSAPP ── */}
      <a href="https://wa.me/917907372646?text=Hi%2C%20I%27m%20interested%20in%20your%20courses"
        target="_blank" rel="noreferrer" className="floating-wa" aria-label="WhatsApp">
        <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.9.524 3.67 1.43 5.185L2.01 22l4.9-1.395A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.95 7.95 0 01-4.045-1.101l-.29-.173-3.005.855.825-2.98-.19-.307A7.97 7.97 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z" />
        </svg>
      </a>
    </div>
  );
}