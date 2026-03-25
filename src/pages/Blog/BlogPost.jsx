import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './BlogPost.css';

gsap.registerPlugin(ScrollTrigger);

const RELATED_TAGS = {
  'medical-coding-career-paths': [
    'medical billing and coding jobs', 'coding compliance officer',
    'health information management', 'medical auditor career',
    'healthcare IT career', 'risk adjustment coder', 'CDI specialist',
    'ICD-10 coder', 'medical coding certification', 'outpatient coding',
  ],
};

const CATEGORIES = [
  'Career courses', 'Career Development', 'Career guidance', 'Creative',
  'Education', 'Health Information Management', 'Healthcare careers',
  'IT training', 'Marketing', 'Medical Billing & Coding', 'Medical Coding',
  'Professional training', 'Skill development', 'Student support',
  'Technical', 'Uncategorized',
];

export default function BlogPost({ post, onBack }) {
  const heroRef = useRef(null);
  const parallaxRef = useRef(null);

  const tags = RELATED_TAGS[post.id] || post.tags || [];

  useEffect(() => {
    window.scrollTo(0, 0);

    /* Ensure visibility first */
    gsap.set(['.bp-hero__cat', '.bp-hero__title', '.bp-hero__meta',
      '.bp-section-block', '.bp-step-item', '.bp-getting-started',
      '.bp-conclusion', '.bp-cta', '.bp-tags-section', '.bp-social',
      '.bp-comment-box'],
      { opacity: 1, y: 0, x: 0 });

    /* Parallax hero */
    gsap.to(parallaxRef.current, {
      yPercent: 35, ease: 'none',
      scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: 1 },
    });

    /* Hero entrance */
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo('.bp-hero__cat', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 })
      .fromTo('.bp-hero__title', { y: 55, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, '-=0.2')
      .fromTo('.bp-hero__meta', { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.55');

    /* Section blocks */
    ScrollTrigger.batch('.bp-section-block', {
      onEnter: batch => gsap.fromTo(batch,
        { y: 45, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.65, stagger: 0.08, ease: 'power3.out' }
      ),
      once: true, start: 'top 90%',
    });

    /* Steps */
    gsap.fromTo('.bp-step-item',
      { x: -35, opacity: 0 },
      {
        x: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.bp-getting-started', start: 'top 85%', once: true }
      }
    );

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <div className="bp-page">

      {/* ── HERO ───────────────────────────────────── */}
      <section className="bp-hero" ref={heroRef}>
        <div
          className="bp-hero__parallax"
          ref={parallaxRef}
          style={{ backgroundImage: `url(${post.image})` }}
        />
        <div className="bp-hero__overlay" />
        <div className="bp-hero__glow" />

        <div className="bp-hero__content">
          <button className="bp-back-btn" onClick={onBack}>
            ← Back to Blog
          </button>
          <div className="bp-hero__cat">{post.category}</div>
          <h1 className="bp-hero__title">{post.title}</h1>
          <div className="bp-hero__meta">
            <span className="bp-hero__meta-item">👤 Admin</span>
            <span className="bp-hero__meta-sep">·</span>
            <span className="bp-hero__meta-item">📅 {post.date}</span>
            <span className="bp-hero__meta-sep">·</span>
            <span className="bp-hero__meta-item">⏱ {post.readTime}</span>
          </div>
        </div>
      </section>

      {/* ── BODY ───────────────────────────────────── */}
      <div className="bp-body-wrap">

        {/* Article */}
        <article className="bp-article">
          {post.content ? (
            <>
              {/* Intro paragraphs */}
              {post.content.intro.split('\n\n').map((para, i) => (
                <p key={i} className="bp-intro-text">{para}</p>
              ))}

              {/* Career sections */}
              {post.content.sections && post.content.sections.map((sec, i) => (
                <div key={i} className="bp-section-block">
                  <h3>{sec.title}</h3>
                  <p>{sec.body}</p>
                  <div className="bp-skills-row">
                    {/* <span className="bp-skills-label">Key Skills:</span>
                    <span className="bp-skills-text">{sec.skills}</span> */}
                  </div>
                </div>
              ))}

              {/* Getting Started */}
              {post.content.gettingStarted && (
                <div className="bp-getting-started">
                  <h2>How to Get Started in Medical Coding Careers</h2>
                  {post.content.gettingStarted.map((item, i) => (
                    <div key={i} className="bp-step-item">
                      <div className="bp-step-num">{i + 1}</div>
                      <div className="bp-step-content">
                        <strong>{item.step}</strong>
                        <span> — {item.detail}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Conclusion */}
              {post.content.conclusion && (
                <div className="bp-conclusion">
                  <h2>Final Thoughts</h2>
                  <p>{post.content.conclusion}</p>
                </div>
              )}

              {/* CTA */}
              <div className="bp-cta">
                <h3>Apply to Course</h3>
                <p>Take the first step toward your future — Register now</p>
                <button className="bp-cta-btn">Apply Now</button>
              </div>
            </>
          ) : (
            <div className="bp-coming-soon">
              <p>Full article content coming soon...</p>
              <button className="bp-cta-btn" onClick={onBack}>← Back to Blog</button>
            </div>
          )}

          {/* Tags */}
          {tags.length > 0 && (
            <div className="bp-tags-section">
              <p className="bp-tags-label">Related Tags:</p>
              <div className="bp-tags-wrap">
                {tags.map(tag => (
                  <span key={tag} className="bp-tag">{tag}</span>
                ))}
              </div>
            </div>
          )}

          {/* Social share */}
          <div className="bp-social">
            <span className="bp-social-label">Social Share:</span>
            {['f', 't', 'in', 'yt'].map(s => (
              <button key={s} className="bp-share-btn">{s}</button>
            ))}
          </div>

          {/* Comment */}
          <div className="bp-comment-box">
            <h3>Leave A Comment</h3>
            <div className="bp-comment-row">
              <input placeholder="Name" />
              <input placeholder="Email" type="email" />
            </div>
            <textarea placeholder="Write a comment..." />
            <button className="bp-submit-btn">Post A Comment</button>
          </div>
        </article>

        {/* Sidebar */}
        <aside>
          <div className="sidebar-box" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.07)', padding: '1.5rem', marginBottom: '1.5rem', position: 'relative', overflow: 'hidden' }}>
            <style>{`.sidebar-box::after{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,#6366f1,#8b5cf6,#ec4899)}`}</style>
            <p style={{ color: '#fff', fontWeight: 700, fontFamily: "'Syne',sans-serif", fontSize: '0.95rem', marginBottom: '1.2rem' }}>🔍 Search Articles</p>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <input placeholder="Enter article title..." style={{ flex: 1, padding: '0.65rem 1rem', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: '0.83rem', outline: 'none', fontFamily: "'DM Sans',sans-serif" }} />
              <button style={{ padding: '0.65rem 1rem', borderRadius: '10px', background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', border: 'none', color: '#fff', fontWeight: 700, fontSize: '0.82rem', cursor: 'pointer', fontFamily: "'DM Sans',sans-serif" }}>Go</button>
            </div>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.07)', padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
            <p style={{ color: '#fff', fontWeight: 700, fontFamily: "'Syne',sans-serif", fontSize: '0.95rem', marginBottom: '1.2rem' }}>🏷 Categories</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {CATEGORIES.map(cat => (
                <li key={cat} onClick={onBack} style={{ padding: '0.48rem 0', borderBottom: '1px solid rgba(255,255,255,0.04)', color: post.category === cat ? '#a78bfa' : 'rgba(255,255,255,0.48)', cursor: 'pointer', fontSize: '0.84rem', display: 'flex', alignItems: 'center', gap: '0.6rem', fontFamily: "'DM Sans',sans-serif", transition: 'color 0.2s' }}>
                  <span style={{ color: post.category === cat ? '#a78bfa' : '#6366f1', fontSize: '0.58rem' }}>▶</span>
                  {cat}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}