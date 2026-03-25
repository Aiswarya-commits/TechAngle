import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import './Course.css';

import iotImage from '../../assets/Iot.jpg';
import webImage from '../../assets/web.jpg';
import uiuxImage from '../../assets/UiUx.avif';
import roboticsImage from '../../assets/robotics.jpg';
import Financial from '../../assets/Financial.jpg';
import healthcareImage from '../../assets/healthcare.webp';
import medicalCodingImage from '../../assets/medical-coding.jpg';
import digitalMarketingImage from '../../assets/digital-marketing.avif';
import Skills from '../../assets/Skill.jpg';
import AiImage from '../../assets/main-banner.webp';
import stockMarketImage from '../../assets/stock-market.webp';
import riskManagementImage from '../../assets/risk-management.jpg';
import wealthManagementImage from '../../assets/wealth-management.jpg';
import complianceImage from '../../assets/compliance.jpg';

gsap.registerPlugin(ScrollTrigger);

const Courses = () => {
  const heroRef = useRef(null);
  const coursesRef = useRef(null);
  const categoriesRef = useRef(null);
  const includedRef = useRef(null);
  const callbackRef = useRef(null);
  const applyRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('all');

  // ── TAB STATE ────────────────────────────────────────────
  const [activeTab, setActiveTab] = useState(0);
  const tabPanelRefs = useRef([]);
  const tabsNavRef = useRef(null);
  const activeTabRef = useRef(0);

  // ── TAB SWITCH with GSAP ─────────────────────────────────
  const switchTab = (index) => {
    if (index === activeTabRef.current) return;
    const prev = activeTabRef.current;
    activeTabRef.current = index;
    setActiveTab(index);

    const prevEl = tabPanelRefs.current[prev];
    const nextEl = tabPanelRefs.current[index];
    if (prevEl && nextEl) {
      gsap.timeline()
        .to(prevEl, {
          opacity: 0,
          y: -20,
          duration: 0.3,
          ease: 'power2.in',
          onComplete: () => {
            prevEl.style.display = 'none';
            nextEl.style.display = 'block';
            // Re-trigger inner animations for newly shown panel
            const cards = nextEl.querySelectorAll(
              '.partner-course-card, .cisi-stack-card, .partner-info-card, .partner-badge, .partner-section-title'
            );
            gsap.fromTo(nextEl,
              { opacity: 0, y: 30 },
              { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
            );
            if (cards.length) {
              gsap.fromTo(cards,
                { opacity: 0, y: 24 },
                { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out', delay: 0.1 }
              );
            }
          }
        });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    const initTimer = setTimeout(() => {

      // ── Initialize tab panels visibility ─────────────────
      tabPanelRefs.current.forEach((panel, i) => {
        if (panel) {
          panel.style.display = i === 0 ? 'block' : 'none';
          panel.style.opacity = i === 0 ? '1' : '0';
        }
      });

      // ── Animate tabs nav ──────────────────────────────────
      if (tabsNavRef.current) {
        gsap.fromTo(tabsNavRef.current,
          { y: 40, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
            scrollTrigger: { trigger: tabsNavRef.current, start: 'top 88%' }
          }
        );
        const tabBtns = tabsNavRef.current.querySelectorAll('.section-tab-btn');
        gsap.fromTo(tabBtns,
          { scale: 0.85, opacity: 0 },
          {
            scale: 1, opacity: 1, duration: 0.5, stagger: 0.12, ease: 'back.out(1.7)',
            scrollTrigger: { trigger: tabsNavRef.current, start: 'top 88%' }
          }
        );
      }

      // ── ENHANCED HERO ANIMATIONS ──────────────────────────
      gsap.fromTo('.hero-grid-line-h', {
        scaleX: 0, transformOrigin: 'left center', opacity: 0
      }, { scaleX: 1, opacity: 1, duration: 1.4, stagger: 0.12, ease: 'power2.inOut', delay: 0.1 });

      gsap.fromTo('.hero-grid-line-v', {
        scaleY: 0, transformOrigin: 'top center', opacity: 0
      }, { scaleY: 1, opacity: 1, duration: 1.4, stagger: 0.1, ease: 'power2.inOut', delay: 0.2 });

      gsap.fromTo('.hero-orb', { scale: 0, opacity: 0 }, {
        scale: 1, opacity: 1, duration: 1.6, stagger: 0.2, ease: 'power3.out', delay: 0.1
      });

      gsap.fromTo('.hero-tag', { x: -60, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.7, ease: 'power3.out', delay: 0.4
      });

      gsap.fromTo('.hero-word', { y: 110, opacity: 0, rotateX: -40 }, {
        y: 0, opacity: 1, rotateX: 0, duration: 0.9, stagger: 0.12, ease: 'power4.out', delay: 0.5
      });

      gsap.fromTo('.hero-subtitle-text', { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.7, ease: 'power2.out', delay: 1.0
      });

      gsap.fromTo('.hero-breadcrumb-pill', { y: 20, opacity: 0, scale: 0.92 }, {
        y: 0, opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)', delay: 1.2
      });

      gsap.fromTo('.hero-stat', { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out', delay: 1.3
      });

      gsap.fromTo('.hero-divider', { scaleX: 0 }, {
        scaleX: 1, duration: 1, ease: 'power3.inOut', delay: 1.1
      });

      gsap.fromTo('.hero-scroll-indicator', { opacity: 0, y: -10 }, {
        opacity: 1, y: 0, duration: 0.5, delay: 1.6
      });
      gsap.to('.hero-scroll-dot', {
        y: 10, repeat: -1, yoyo: true, duration: 0.8, ease: 'sine.inOut', delay: 1.8
      });

      if (heroRef.current) {
        gsap.to('.hero-orb-1', {
          y: -80, x: 30, ease: 'none',
          scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: 1.5 }
        });
        gsap.to('.hero-orb-2', {
          y: -50, x: -20, ease: 'none',
          scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: 1 }
        });
        gsap.to('.hero-orb-3', {
          y: -120, ease: 'none',
          scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: 2 }
        });
        gsap.to('.hero-title-wrap', {
          y: 60, ease: 'none',
          scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: true }
        });
      }

      // ── REST OF ORIGINAL ANIMATIONS ───────────────────────
      if (categoriesRef.current) {
        const pills = categoriesRef.current.querySelectorAll('.category-pill');
        gsap.fromTo(pills, { scale: 0, opacity: 0 }, {
          scale: 1, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(1.7)',
          scrollTrigger: { trigger: categoriesRef.current, start: 'top 80%' }
        });
      }

      if (coursesRef.current) {
        const cards = coursesRef.current.querySelectorAll('.course-card');
        gsap.fromTo(cards, { y: 80, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.15,
          scrollTrigger: { trigger: coursesRef.current, start: 'top 70%' }
        });
      }

      if (includedRef.current) {
        const features = includedRef.current.querySelectorAll('.included-item');
        gsap.fromTo(features, { scale: 0, opacity: 0 }, {
          scale: 1, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'back.out(1.7)',
          scrollTrigger: { trigger: includedRef.current, start: 'top 70%' }
        });
      }

      if (callbackRef.current) {
        gsap.fromTo('.callback-image-courses', { x: -100, opacity: 0 }, {
          x: 0, opacity: 1, duration: 1,
          scrollTrigger: { trigger: callbackRef.current, start: 'top 70%' }
        });
        gsap.fromTo('.callback-form-courses', { x: 100, opacity: 0 }, {
          x: 0, opacity: 1, duration: 1,
          scrollTrigger: { trigger: callbackRef.current, start: 'top 70%' }
        });
      }

      if (applyRef.current) {
        gsap.fromTo(applyRef.current, { y: 50, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.8,
          scrollTrigger: { trigger: applyRef.current, start: 'top 80%' }
        });
      }

    }, 100);

    return () => {
      clearTimeout(initTimer);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const categories = [
    { id: 'all', name: 'All Courses' },
    { id: 'technology', name: 'Technology and Innovation' },
    { id: 'management', name: 'Management and Marketing' },
    { id: 'finance', name: 'Finance' }
  ];

  const courses = [
    {
      id: 'cbse-computing', title: 'CBSC Computing Skills Program', category: 'technology',
      description: 'The Internet of Things (IoT) connects people globally and boosts productivity by enabling seamless data exchange and automation.',
      features: ['Gain in-depth knowledge of IoT', 'Hands-on experience with real devices', 'Learn cloud and sensor integration', 'Industry-relevant projects and case studies', 'Enhance career opportunities in IoT'],
      image: iotImage, color: '#6366f1', slug: 'cbse-computing'
    },
    {
      id: 'mastery-data-platform', title: 'Mastery Data Platform', category: 'technology',
      description: 'Master the fundamentals of Web Design & Development. Learn to create stunning websites with HTML, CSS, JavaScript, PHP, WordPress, and more.',
      features: ['Gain hands-on experience with live projects', 'Learn from experienced industry professionals', 'Master both front-end and back-end development', 'Receive a course completion certificate', 'Build a strong portfolio for job opportunities'],
      image: webImage, color: '#8b5cf6', slug: 'mastery-data-platform'
    },
    {
      id: 'digital-designing', title: 'Digital Designing', category: 'technology',
      description: 'Dive into the world of User Interface and User Experience Design. Learn essential design principles using Figma, Adobe XD, and usability testing.',
      features: ['Master UI/UX Tools Like Figma And Adobe XD', 'Learn Wireframing, Prototyping, And User Journey Mapping', 'Work On Real-Time UI/UX Projects', 'Build A Strong Design Portfolio', 'Receive a Professional Course Completion Certificate'],
      image: uiuxImage, color: '#ec4899', slug: 'digital-designing'
    },
    {
      id: 'google-certification', title: 'Google Certification Program', category: 'technology',
      description: 'Robotics revolutionizes industries through intelligent machines. Learn automation, AI integration, programming, and real-world applications.',
      features: ['Gain practical experience in robotics', 'Learn industry-relevant automation skills', 'Work on real-world robotics projects', 'Improve problem-solving & coding abilities', 'Get a recognized certification'],
      image: roboticsImage, color: '#10b981', slug: 'google-certification'
    },
    {
      id: 'financial-accounting', title: 'Financial Accounting', category: 'finance',
      description: 'Master financial accounting principles and practices with TechAngle\'s comprehensive course.',
      features: ['Learn fundamental accounting concepts', 'Master financial statement preparation', 'Understand accounting standards and regulations', 'Gain practical experience with real-world scenarios', 'Receive a professional certification upon completion'],
      image: Financial, color: '#f59e0b', slug: 'financial-accounting'
    },
    {
      id: 'it-hardware-networking', title: 'IT Hardware and Networking', category: 'technology',
      description: 'Comprehensive training in IT hardware and networking fundamentals, covering installation, configuration, troubleshooting, and maintenance.',
      features: ['Hardware installation and configuration', 'Network setup and management', 'Troubleshooting techniques', 'Security best practices', 'Industry certifications'],
      image: healthcareImage, color: '#06b6d4', slug: 'it-hardware-networking'
    },
    {
      id: 'management-level', title: 'Management Level', category: 'management',
      description: 'Learn management principles and practices for effective leadership in any organization.',
      features: ['Leadership skills development', 'Team management techniques', 'Project planning and execution', 'Communication and conflict resolution', 'Performance evaluation and feedback'],
      image: medicalCodingImage, color: '#8b5cf6', slug: 'management-level'
    },
    {
      id: 'software-development', title: 'Software Development', category: 'technology',
      description: 'Master software development principles and practices including programming, testing, deployment, and maintenance.',
      features: ['Programming fundamentals', 'Software testing and debugging', 'Version control systems', 'Deployment strategies', 'Project management'],
      image: digitalMarketingImage, color: '#ec4899', slug: 'software-development'
    },
    {
      id: 'soft-skills', title: 'Soft Skill', category: 'management',
      description: 'Combine human resources management with marketing strategies for comprehensive business development skills.',
      features: ['HR management fundamentals', 'Recruitment strategies', 'Marketing principles', 'Brand management', 'Employee engagement'],
      image: Skills, color: '#6366f1', slug: 'soft-skills'
    },
    {
      id: 'ai-other-programs', title: 'AI And Other Programs', category: 'management',
      description: 'Learn research methodologies, innovation management, and product development strategies.',
      features: ['Research methodologies', 'Innovation management', 'Product development', 'Data analysis', 'Project management'],
      image: AiImage, color: '#10b981', slug: 'ai-other-programs'
    },
  ];

  const filteredCourses = activeCategory === 'all'
    ? courses
    : courses.filter(course => course.category === activeCategory);

  const includedFeatures = [
    { icon: '📚', title: 'Comprehensive Curriculum', description: 'Industry-aligned syllabus updated regularly' },
    { icon: '👨‍🏫', title: 'Expert Instructors', description: 'Learn from industry professionals' },
    { icon: '💼', title: 'Live Projects', description: 'Real-world hands-on experience' },
    { icon: '🎓', title: 'Certification', description: 'Industry-recognized certificate' },
    { icon: '🤝', title: 'Placement Support', description: 'Dedicated career assistance' },
    { icon: '⏰', title: 'Lifetime Access', description: 'Access course materials anytime' }
  ];

  // Tab labels
  const tabLabels = [
    { icon: '🎓', label: 'AAPC Programs' },
    { icon: '🏥', label: 'IREZ Academy' },
    { icon: '📊', label: 'CISI Programs' },
  ];

  return (
    <div className="courses-page">

      {/* ── ENHANCED HERO SECTION ──────────────────────────────── */}
      <section className="courses-hero" ref={heroRef}>
        <div className="hero-grid" aria-hidden="true">
          {[...Array(5)].map((_, i) => (
            <div key={`h${i}`} className="hero-grid-line-h" style={{ top: `${20 + i * 18}%` }} />
          ))}
          {[...Array(7)].map((_, i) => (
            <div key={`v${i}`} className="hero-grid-line-v" style={{ left: `${10 + i * 14}%` }} />
          ))}
        </div>
        <div className="hero-orb hero-orb-1" aria-hidden="true" />
        <div className="hero-orb hero-orb-2" aria-hidden="true" />
        <div className="hero-orb hero-orb-3" aria-hidden="true" />
        <div className="hero-noise" aria-hidden="true" />

        <div className="container hero-content-wrap">
          <div className="hero-tag">
            <span className="hero-tag-dot" />
            Explore · Learn · Grow
          </div>
          <div className="hero-title-wrap">
            <h1 className="courses-hero-title">
              <span className="hero-word"></span>
              <span className="hero-word hero-word-accent">About Courses</span>
            </h1>
          </div>
          <p className="hero-subtitle-text">
            Industry-relevant programs designed to launch and accelerate your career in technology, management, and beyond.
          </p>
          <div className="hero-divider" />
          <div className="hero-breadcrumb-pill">
            <Link to="/" className="hero-bc-link">Home</Link>
            <span className="hero-bc-sep">›</span>
            <span className="hero-bc-current">About Courses</span>
          </div>
          <div className="hero-stats-row">
            <div className="hero-stat">
              <span className="hero-stat-num">250+</span>
              <span className="hero-stat-label">Programs</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-num">200+</span>
              <span className="hero-stat-label">Sub-courses</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-num">100%</span>
              <span className="hero-stat-label">Placement Support</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-num">Global</span>
              <span className="hero-stat-label">Certifications</span>
            </div>
          </div>
        </div>

        <div className="hero-scroll-indicator" aria-hidden="true">
          <div className="hero-scroll-track">
            <div className="hero-scroll-dot" />
          </div>
          <span>Scroll</span>
        </div>

        <div className="hero-wave-bottom">
          <svg viewBox="0 0 1440 90" preserveAspectRatio="none">
            <path d="M0,45 C240,90 480,0 720,45 C960,90 1200,0 1440,45 L1440,90 L0,90 Z"
              fill="var(--darker-bg, #0f1117)" />
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION TABS NAV — sits between hero and sections
          ══════════════════════════════════════════════════════ */}
      <div className="section-tabs-wrapper" ref={tabsNavRef}>
        <div className="section-tabs-nav">
          {tabLabels.map((tab, i) => (
            <button
              key={i}
              className={`section-tab-btn${activeTab === i ? ' section-tab-btn--active' : ''}`}
              onClick={() => switchTab(i)}
            >
              <span className="section-tab-icon">{tab.icon}</span>
              <span className="section-tab-label">{tab.label}</span>
              {activeTab === i && <span className="section-tab-indicator" />}
            </button>
          ))}
        </div>
        {/* Animated underline track */}
        <div className="section-tabs-track" />
      </div>

      {/* ══════════════════════════════════════════════════════
          TAB PANEL 0 — Our Courses (original courses-main)
          ══════════════════════════════════════════════════════ */}
      <div
        className="section-tab-panel"
        ref={el => tabPanelRefs.current[0] = el}
      >
        <section className="courses-main">
          <div className="container">
            <div className="section-header">
              <h2>Explore Our Career-Focused Courses</h2>
              <p>Fast enhance your skills, then advance with industry-relevant courses, and ultimately access rewarding success</p>
            </div>

            <div className="categories-filter" ref={categoriesRef}>
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`category-pill ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>

            <div className="courses-grid" ref={coursesRef}>
              {filteredCourses.map(course => (
                <div key={course.id} className="course-card" style={{ '--course-color': course.color }}>
                  <div
                    className="course-image"
                    style={{ backgroundImage: course.image ? `url(${course.image})` : 'none' }}
                    data-emoji={course.image ? '' : course.image}
                  />
                  <div className="course-content">
                    <h3>{course.title}</h3>
                    <p>{course.description}</p>
                    <Link to={`/courses/${course.slug}`}>
                      <button className="explore-btn">Explore</button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ══════════════════════════════════════════════════════
          TAB PANEL 1 — IREZ Academy
          ══════════════════════════════════════════════════════ */}
      <div
        className="section-tab-panel"
        ref={el => tabPanelRefs.current[1] = el}
      >
        <section className="partner-courses-section partner-irez">
          <div className="container">
            <div className="partner-section-header">
              <div className="partner-badge partner-badge-irez">
                <span className="partner-badge-icon">🏥</span>
                In Association With IREZ Academy
              </div>
              <h2 className="partner-section-title">
                Courses Offered By TechAngle
                <span className="partner-title-highlight"> In Association With IREZ Academy</span>
              </h2>
              <p className="partner-section-subtitle">
                Globally recognized medical coding programs powered by AAPC — opening doors to healthcare careers worldwide with 100% placement support.
              </p>
            </div>

            <div className="partner-courses-grid">
              <div className="partner-course-card" style={{ '--partner-color': '#0369a1' }}>
                <div className="partner-card-image" style={{ backgroundImage: `url(${medicalCodingImage})` }}>
                  <div className="partner-card-overlay">
                    <span className="partner-card-badge">AAPC Certified</span>
                  </div>
                </div>
                <div className="partner-card-content">
                  <div className="partner-card-logo partner-logo-irez">IREZ × AAPC</div>
                  <h3>Medical Coding</h3>
                  <p>Master ICD-10-CM, CPT coding, medical billing, and healthcare compliance. Prepare for AAPC certification with expert guidance and 100% placement assistance.</p>
                  <div className="partner-card-tags">
                    <span>ICD-10-CM</span>
                    <span>CPT Coding</span>
                    <span>Medical Billing</span>
                    <span>AAPC Exam Prep</span>
                  </div>
                  <Link to="/courses/medical-coding">
                    <button className="partner-explore-btn partner-btn-irez">Explore Course →</button>
                  </Link>
                </div>
              </div>

              <div className="partner-info-card partner-info-irez">
                <div className="partner-info-icon">🌐</div>
                <h4>Why IREZ Academy?</h4>
                <ul className="partner-info-list">
                  <li><span className="pil-dot" />AAPC Official Education Provider</li>
                  <li><span className="pil-dot" />Globally recognized certification</li>
                  <li><span className="pil-dot" />Remote-work friendly career</li>
                  <li><span className="pil-dot" />100% placement assistance</li>
                  <li><span className="pil-dot" />International job opportunities</li>
                  <li><span className="pil-dot" />Mock exams & exam support</li>
                </ul>
                <div className="partner-info-stat">
                  <span className="pis-num">100%</span>
                  <span className="pis-label">Placement Support</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ══════════════════════════════════════════════════════
          TAB PANEL 2 — CISI Programs
          ══════════════════════════════════════════════════════ */}
      <div
        className="section-tab-panel"
        ref={el => tabPanelRefs.current[2] = el}
      >
        <section className="partner-courses-section partner-cisi">
          <div className="container">
            <div className="partner-section-header">
              <div className="partner-badge partner-badge-cisi">
                <span className="partner-badge-icon">📊</span>
                In Association With CISI
              </div>
              <h2 className="partner-section-title">
                Courses Offered By TechAngle
                <span className="partner-title-highlight partner-title-cisi"> In Association With CISI</span>
              </h2>
              <p className="partner-section-subtitle">
                Chartered Institute for Securities &amp; Investment programs — the gold standard in global finance certifications, recognized by Deutsche Bank, JPMorgan, HSBC &amp; more.
              </p>
            </div>

            <div className="partner-courses-grid partner-courses-grid-cisi">
              <div className="partner-info-card partner-info-cisi">
                <div className="partner-info-icon">🏦</div>
                <h4>Why CISI?</h4>
                <ul className="partner-info-list">
                  <li><span className="pil-dot pil-dot-cisi" />Recognized by 100+ countries</li>
                  <li><span className="pil-dot pil-dot-cisi" />Deutsche Bank, JPMorgan, HSBC</li>
                  <li><span className="pil-dot pil-dot-cisi" />Up to 24 UCAS points</li>
                  <li><span className="pil-dot pil-dot-cisi" />300+ byte-size certificates</li>
                  <li><span className="pil-dot pil-dot-cisi" />AI, Blockchain & ESG modules</li>
                  <li><span className="pil-dot pil-dot-cisi" />Global membership access</li>
                </ul>
                <div className="partner-info-stat partner-info-stat-cisi">
                  <span className="pis-num">100+</span>
                  <span className="pis-label">Countries Recognized</span>
                </div>
              </div>

              <div className="partner-card-stack">
                {[
                  { title: 'ICWIM India', desc: 'International Certificate in Wealth & Investment Management', icon: '💰' },
                  { title: 'Financial Risk Program', desc: 'Advanced risk assessment and financial risk management', icon: '📉' },
                  { title: 'Financial Compliance', desc: 'Regulatory compliance and governance frameworks', icon: '⚖️' },
                  { title: 'Technology in Investment', desc: 'Fintech, AI and digital transformation in finance', icon: '🤖' },
                  { title: 'Corporate Finance', desc: 'Capital markets, valuation and corporate strategy', icon: '🏢' },
                ].map((item, i) => (
                  <div className="cisi-stack-card" key={i} style={{ '--delay': `${i * 0.08}s` }}>
                    <span className="cisi-card-icon">{item.icon}</span>
                    <div className="cisi-card-text">
                      <strong>{item.title}</strong>
                      <span>{item.desc}</span>
                    </div>
                    <Link to="/courses/cisi-programs" className="cisi-card-arrow">→</Link>
                  </div>
                ))}
                <Link to="/courses/cisi-programs">
                  <button className="partner-explore-btn partner-btn-cisi">View All CISI Programs →</button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ── All sections below remain completely unchanged ── */}

      <section className="courses-included" ref={includedRef}>
        <div className="container">
          <div className="section-header">
            <h2>What's Included in Every Course</h2>
          </div>
          <div className="included-grid">
            {includedFeatures.map((feature, index) => (
              <div key={index} className="included-item">
                <div className="included-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="courses-callback" ref={callbackRef}>
        <div className="container">
          <div className="callback-grid">
            <div className="callback-image-courses">
              <div className="image-placeholder">
                <span className="image-icon">📞</span>
              </div>
            </div>
            <div className="callback-form-courses">
              <h2>Request a Call Back</h2>
              <p>Request a call back & a quick response, moreover, our experts provide instant support to your needs.</p>
              <button onClick={() => window.location.href = "/contact"} type="submit" className="submit-btn">Contact</button>
            </div>
          </div>
        </div>
      </section>

      <section className="apply-section" ref={applyRef}>
        <div className="container">
          <div className="apply-content">
            <h2>Apply to Course</h2>
            <p className="apply-subtitle">Take the first step toward your future — Register now</p>
            <p className="apply-description">
              Whether you're a beginner eager to start with your First Knowledge guide for web pages Hands-on Learning
              and practical exercises. With real-world applications, you'll gain valuable experience. Click "Apply Now"
              to secure your spot. Stop contemplating on Facebook and Instagram for updates, tips, and news related
              to support your journey!
            </p>
            <div className="apply-buttons">
              <Link to="/contact">
                <button className="apply-btn">Apply Now</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;