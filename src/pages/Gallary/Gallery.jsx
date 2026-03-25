/**
 * Gallery.jsx — TechAngle Photo Gallery Page
 *
 * Standalone gallery page — does NOT touch SuccessStories.jsx
 *
 * HOW TO WIRE UP:
 *   1. Add route:  <Route path="/gallery" element={<Gallery />} />
 *   2. Add nav link:  <Link to="/gallery">Gallery</Link>
 *
 * HOW TO ADD MORE PHOTOS:
 *   Import them at the top and add to GALLERY_ITEMS array.
 *   Categories: 'all' | 'classroom' | 'placement' | 'events' | 'certification'
 */

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Gallery.css';

// ── Import your photos ────────────────────────────────────
// These are the same assets already used in SuccessStories
import Pic1 from '../../../public/assets/Pic1.jpeg';
import Pic2 from '../../../public/assets/Pic2.jpeg';
import Pic3 from '../../../public/assets/Pic3.webp';
import Pic4 from '../../../public/assets/Pic4.webp';
import Pic5 from '../../../public/assets/Pic5.webp';
import Pic6 from '../../../public/assets/Pic6.webp';
import Pic7 from '../../../public/assets/Pic7.webp';
import Pic8 from '../../../public/assets/Pic8.png';
import Pic9 from '../../../public/assets/Pic9.png';
import Pic10 from '../../../public/assets/Pic10.png';
import Pic11 from '../../../public/assets/Pic11.png';
import Pic12 from '../../../public/assets/Pic12.png';
import Pic13 from '../../../public/assets/pic-13.jpeg';
import Pic14 from '../../../public/assets/pic-14.jpeg';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

/* ─────────────────────────────────────────────────────
   GALLERY DATA
   span: 'wide' | 'tall' | 'normal' — controls grid layout
   category: filter tag
───────────────────────────────────────────────────── */
const GALLERY_ITEMS = [
  { id: 1,  src: Pic1,  alt: 'TechAngle Session',          category: 'classroom',    span: 'wide',   caption: 'Interactive classroom session' },
  { id: 2,  src: Pic2,  alt: 'Workshop Activity',           category: 'classroom',    span: 'tall',   caption: 'Hands-on workshop activity' },
  { id: 3,  src: Pic3,  alt: 'Team Discussion',             category: 'events',       span: 'normal', caption: 'Live project discussion' },
  { id: 4,  src: Pic4,  alt: 'Guest Lecture',               category: 'events',       span: 'normal', caption: 'Industry expert lecture' },
  { id: 5,  src: Pic5,  alt: 'Student Project',             category: 'classroom',    span: 'wide',   caption: 'Collaborative student projects' },
  { id: 6,  src: Pic6,  alt: 'Placement Drive',             category: 'placement',    span: 'tall',   caption: 'Campus placement drive' },
  { id: 7,  src: Pic7,  alt: 'Certification Ceremony',      category: 'certification',span: 'normal', caption: 'Certification ceremony' },
  { id: 8,  src: Pic8,  alt: 'Batch Photo',                 category: 'certification',span: 'normal', caption: 'Proud batch of graduates' },
  { id: 9,  src: Pic9,  alt: 'Group Activity',              category: 'events',       span: 'wide',   caption: 'Team building activity' },
  { id: 10, src: Pic10, alt: 'Training Session',            category: 'classroom',    span: 'normal', caption: 'Advanced training session' },
  { id: 11, src: Pic11, alt: 'Awards Ceremony',             category: 'certification',span: 'tall',   caption: 'Student awards ceremony' },
  { id: 12, src: Pic12, alt: 'Placement Success',           category: 'placement',    span: 'normal', caption: 'Placement success stories' },
    { id: 13,  src: Pic13,  alt: 'TechAngle Session',          category: 'classroom',    span: 'wide',   caption: 'Interactive classroom session' },
  { id: 14,  src: Pic14,  alt: 'Workshop Activity',           category: 'classroom',    span: 'tall',   caption: 'Hands-on workshop activity' },

];

const CATEGORIES = [
  { key: 'all',           label: 'All Photos',    icon: '✦' },
  { key: 'classroom',     label: 'Classroom',     icon: '📚' },
  { key: 'placement',     label: 'Placements',    icon: '💼' },
  { key: 'events',        label: 'Events',        icon: '🎯' },
  { key: 'certification', label: 'Certifications',icon: '🏆' },
];

const STATS = [
  { num: '3500+', label: 'Students Trained' },
  { num: '200+', label: 'Placed Successfully' },
  { num: '80+',  label: 'Partner Companies' },
  { num: '4.9★', label: 'Average Rating' },
];

/* ─────────────────────────────────────────────────────
   LIGHTBOX COMPONENT
───────────────────────────────────────────────────── */
function Lightbox({ items, index, onClose, onNav }) {
  const isOpen = index !== null;
  const imgRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNav(-1);
      if (e.key === 'ArrowRight') onNav(1);
    };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, onNav]);

  useEffect(() => {
    if (isOpen && imgRef.current) {
      gsap.fromTo(imgRef.current,
        { scale: 0.88, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.45, ease: 'expo.out' }
      );
    }
  }, [index, isOpen]);

  if (!isOpen) return null;
  const item = items[index];

  return (
    <div className="gl-lightbox" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="gl-lightbox__backdrop" />
      <div className="gl-lightbox__shell">
        <img ref={imgRef} className="gl-lightbox__img" src={item.src} alt={item.alt} />
        <div className="gl-lightbox__info">
          <span className="gl-lightbox__caption">{item.caption}</span>
          <span className="gl-lightbox__counter">{index + 1} / {items.length}</span>
        </div>
        <button className="gl-lightbox__close" onClick={onClose} aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
        <button className="gl-lightbox__nav gl-lightbox__nav--prev" onClick={() => onNav(-1)} aria-label="Previous">‹</button>
        <button className="gl-lightbox__nav gl-lightbox__nav--next" onClick={() => onNav(1)} aria-label="Next">›</button>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────
   GALLERY CARD
───────────────────────────────────────────────────── */
function GalleryCard({ item, index, onClick }) {
  const cardRef = useRef(null);
  const imgRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    gsap.to(cardRef.current, {
      rotateY: x * 8,
      rotateX: -y * 8,
      duration: 0.4,
      ease: 'power2.out',
      transformPerspective: 800,
    });
    gsap.to(imgRef.current, {
      x: x * 10,
      y: y * 10,
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, { rotateY: 0, rotateX: 0, duration: 0.6, ease: 'expo.out' });
    gsap.to(imgRef.current, { x: 0, y: 0, duration: 0.6, ease: 'expo.out' });
  };

  return (
    <div
      ref={cardRef}
      className={`gl-card gl-card--${item.span}`}
      onClick={() => onClick(index)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick(index)}
      aria-label={`View ${item.alt}`}
      style={{ '--delay': `${(index % 4) * 0.08}s` }}
    >
      <div className="gl-card__inner">
        <img ref={imgRef} className="gl-card__img" src={item.src} alt={item.alt} loading="lazy" />
        <div className="gl-card__scrim" />
        <div className="gl-card__overlay">
          <div className="gl-card__zoom-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/>
            </svg>
          </div>
          <div className="gl-card__meta">
            <span className="gl-card__caption">{item.caption}</span>
            <span className="gl-card__cat-tag">{item.category}</span>
          </div>
        </div>
        <div className="gl-card__shine" />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────
   MAIN GALLERY PAGE
───────────────────────────────────────────────────── */
export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxIdx, setLightboxIdx] = useState(null);
  const [filteredItems, setFilteredItems] = useState(GALLERY_ITEMS);
  const [isFiltering, setIsFiltering] = useState(false);
    const navigate = useNavigate();


  const heroRef = useRef(null);
  const bgRef = useRef(null);
  const gridRef = useRef(null);
  const ranAnim = useRef(false);

  const openLightbox = useCallback((idx) => setLightboxIdx(idx), []);
  const closeLightbox = useCallback(() => setLightboxIdx(null), []);
  const navLightbox = useCallback((dir) =>
    setLightboxIdx((p) => p === null ? null : (p + dir + filteredItems.length) % filteredItems.length),
  [filteredItems.length]);

  // Filter handler with exit animation
  const handleFilter = (cat) => {
    if (cat === activeFilter) return;
    setIsFiltering(true);
    const cards = gridRef.current?.querySelectorAll('.gl-card');
    if (cards?.length) {
      gsap.to(cards, {
        y: 20, opacity: 0, scale: 0.95, duration: 0.25,
        stagger: 0.03, ease: 'power2.in',
        onComplete: () => {
          setActiveFilter(cat);
          setFilteredItems(cat === 'all' ? GALLERY_ITEMS : GALLERY_ITEMS.filter(i => i.category === cat));
          setIsFiltering(false);
        }
      });
    } else {
      setActiveFilter(cat);
      setFilteredItems(cat === 'all' ? GALLERY_ITEMS : GALLERY_ITEMS.filter(i => i.category === cat));
      setIsFiltering(false);
    }
  };

  // Animate in newly filtered cards
  useEffect(() => {
    if (isFiltering) return;
    const cards = gridRef.current?.querySelectorAll('.gl-card');
    if (cards?.length) {
      gsap.fromTo(cards,
        { y: 40, opacity: 0, scale: 0.92 },
        { y: 0, opacity: 1, scale: 1, duration: 0.55, stagger: 0.06, ease: 'expo.out', delay: 0.05 }
      );
    }
  }, [filteredItems, isFiltering]);

  // Scroll-triggered animations
  useEffect(() => {
    window.scrollTo(0, 0);
    if (ranAnim.current) return;
    ranAnim.current = true;

    // Hero parallax
    if (bgRef.current && heroRef.current) {
      gsap.to(bgRef.current, {
        yPercent: 30, ease: 'none',
        scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: 1.5 },
      });
    }

    // Hero entrance
    gsap.timeline({ delay: 0.1, defaults: { ease: 'expo.out' } })
      .from('.gl-hero__eyebrow', { y: 24, opacity: 0, duration: 0.6 })
      .from('.gl-hero__title', { y: 60, opacity: 0, duration: 0.9, clipPath: 'inset(0 0 100% 0)' }, '-=0.3')
      .from('.gl-hero__sub', { y: 24, opacity: 0, duration: 0.7 }, '-=0.55')
      .from('.gl-hero__stat', { y: 20, opacity: 0, duration: 0.5, stagger: 0.09 }, '-=0.5')
      .from('.gl-filter-bar', { y: 16, opacity: 0, duration: 0.5 }, '-=0.3');

    // Floating orbs parallax
    gsap.utils.toArray('.gl-deco-orb').forEach((orb, i) => {
      gsap.to(orb, {
        yPercent: i % 2 === 0 ? -50 : 50, ease: 'none',
        scrollTrigger: { trigger: orb.closest('section') || orb, start: 'top bottom', end: 'bottom top', scrub: 2 },
      });
    });

    // Stats counter section
    gsap.from('.gl-stat', {
      y: 40, opacity: 0, scale: 0.9, duration: 0.6,
      stagger: 0.1, ease: 'back.out(1.6)',
      scrollTrigger: { trigger: '.gl-stats-bar', start: 'top 88%', once: true },
    });

    // Section header reveal
    gsap.utils.toArray('.gl-section-hd').forEach(el => {
      gsap.from(el.querySelectorAll('*'), {
        y: 30, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      });
    });

    // CTA box
    gsap.from('.gl-cta__box', {
      y: 50, opacity: 0, scale: 0.97, duration: 0.9, ease: 'expo.out',
      scrollTrigger: { trigger: '.gl-cta', start: 'top 88%', once: true },
    });

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 300);

    return () => {
      clearTimeout(refreshTimer);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="gl-page">

      {/* ── HERO ── */}
      <section className="gl-hero" ref={heroRef}>
        <div className="gl-hero__bg" ref={bgRef} />
        <div className="gl-hero__overlay" />
        <div className="gl-hero__grid" />

        <div className="gl-deco-orb gl-deco-orb--1" />
        <div className="gl-deco-orb gl-deco-orb--2" />
        <div className="gl-deco-orb gl-deco-orb--3" />
        <div className="gl-deco-orb gl-deco-orb--4" />

        {/* Floating image strips for visual depth */}
        <div className="gl-hero__strip gl-hero__strip--left">
          {[Pic1, Pic3, Pic7, Pic11].map((src, i) => (
            <div key={i} className="gl-strip__img" style={{ backgroundImage: `url(${src})` }} />
          ))}
        </div>
        <div className="gl-hero__strip gl-hero__strip--right">
          {[Pic2, Pic6, Pic8, Pic12].map((src, i) => (
            <div key={i} className="gl-strip__img" style={{ backgroundImage: `url(${src})` }} />
          ))}
        </div>

        <div className="gl-hero__content">
          <div className="gl-hero__eyebrow">
            <span className="gl-eyebrow-dot" />
            Photo Gallery
          </div>
          <h1 className="gl-hero__title">
            <span className="gl-hero__title-line1">Our Moments,</span>
            <span className="gl-hero__title-line2"><em>Captured</em></span>
          </h1>
          <p className="gl-hero__sub">
            Every photo tells a story of growth, achievement, and community.
            Browse through our classrooms, events, placements and celebrations.
          </p>
          <div className="gl-hero__stats">
            {STATS.map((s) => (
              <div key={s.label} className="gl-hero__stat">
                <span className="gl-hero__stat-num">{s.num}</span>
                <span className="gl-hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="gl-hero__scroll">
          <div className="gl-hero__scroll-track" />
          <span>Explore</span>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="gl-stats-bar">
        <div className="gl-stats-bar__inner">
          {STATS.map((s) => (
            <div key={s.label} className="gl-stat">
              <span className="gl-stat__num">{s.num}</span>
              <span className="gl-stat__divider" />
              <span className="gl-stat__label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── GALLERY SECTION ── */}
      <section className="gl-section">
        <div className="gl-deco-orb gl-deco-orb--mid" />

        <div className="gl-section-hd">
          <div className="gl-eyebrow gl-eyebrow--teal">Browse All Photos</div>
          <h2 className="gl-section-title">Moments from TechAngle</h2>
          <p className="gl-section-desc">
            Filter by category to explore classroom sessions, placement drives,
            events, and certification ceremonies.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="gl-filter-bar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              className={`gl-filter-btn${activeFilter === cat.key ? ' is-active' : ''}`}
              onClick={() => handleFilter(cat.key)}
            >
              <span className="gl-filter-btn__icon">{cat.icon}</span>
              <span>{cat.label}</span>
              <span className="gl-filter-btn__count">
                {cat.key === 'all'
                  ? GALLERY_ITEMS.length
                  : GALLERY_ITEMS.filter(i => i.category === cat.key).length}
              </span>
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="gl-grid" ref={gridRef}>
          {filteredItems.map((item, idx) => (
            <GalleryCard
              key={`${item.id}-${activeFilter}`}
              item={item}
              index={idx}
              onClick={openLightbox}
            />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="gl-empty">
            <span className="gl-empty__icon">📷</span>
            <p>No photos in this category yet.</p>
          </div>
        )}
      </section>

      {/* ── CTA ── */}
      <div className="gl-cta">
        <div className="gl-cta__box">
          <div className="gl-cta__orb" />
          <div className="gl-cta__tag">Join Us</div>
          <h2 className="gl-cta__title">
            Be Part of Our<br /><em>Next Story</em>
          </h2>
          <p className="gl-cta__desc">
            Your success photo could be featured right here.
            Enroll today and start your journey with TechAngle.
          </p>
          <a href="#courses" className="gl-cta__btn" onClick={() => navigate('/contact')}>
            <span>Enroll Now</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        items={filteredItems}
        index={lightboxIdx}
        onClose={closeLightbox}
        onNav={navLightbox}
      />
    </div>
  );
}