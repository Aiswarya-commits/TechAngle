import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import './About.css';

import DarrelImg from '../../assets/Darrel.webp';
import AjithImg from '../../assets/AjithCEO.jpeg';
import SureshImg from '../../assets/DirectCEO.jpeg';
import ArunImg from '../../assets/ArunCEO.jpeg';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const About = () => {
  const pageRef = useRef(null);
  const heroRef = useRef(null);
  const parallaxRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (index) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    // Mouse parallax effect
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // ─── HERO ANIMATIONS ────────────────────────────────────────────────────
    // Use gsap.set first to make elements visible, then animate IN
    try {
      gsap.set([
        '.about-hero-badge',
        '.about-hero h1 .word',
        '.about-hero-subtitle',
        '.hero-stats-item',
      ], { opacity: 1, clearProps: 'all' });

      const heroTimeline = gsap.timeline({ delay: 0.1 });
      heroTimeline
        .fromTo('.about-hero-badge',
          { scale: 0, rotation: -180, opacity: 0 },
          { scale: 1, rotation: 0, opacity: 1, duration: 0.8, ease: 'back.out(1.7)' }
        )
        .fromTo('.about-hero h1 .word',
          { y: 60, opacity: 0, rotationX: -60, transformOrigin: 'top' },
          { y: 0, opacity: 1, rotationX: 0, stagger: 0.08, duration: 0.7, ease: 'power4.out' },
          '-=0.3'
        )
        .fromTo('.about-hero-subtitle',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out' },
          '-=0.4'
        )
        .fromTo('.hero-stats-item',
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, stagger: 0.1, duration: 0.5, ease: 'back.out(1.7)' },
          '-=0.3'
        );
    } catch (e) {
      // Ensure elements remain visible if GSAP fails
      document.querySelectorAll('.about-hero-badge, .about-hero h1 .word, .about-hero-subtitle, .hero-stats-item')
        .forEach(el => { el.style.opacity = '1'; el.style.transform = 'none'; });
    }

    // ─── PARALLAX BACKGROUND ────────────────────────────────────────────────
    try {
      gsap.to('.parallax-layer-1', {
        y: '30%',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      });

      gsap.to('.parallax-layer-2', {
        y: '20%',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      });
    } catch (e) { /* non-critical */ }

    // ─── STORY SECTION ──────────────────────────────────────────────────────
    try {
      gsap.fromTo('.story-content-wrapper',
        { x: -60, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1,
          scrollTrigger: {
            trigger: '.story-section',
            start: 'top 75%',
            toggleActions: 'play none none none'
          }
        }
      );

      gsap.fromTo('.story-image-wrapper',
        { x: 60, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1,
          scrollTrigger: {
            trigger: '.story-section',
            start: 'top 75%',
            toggleActions: 'play none none none'
          }
        }
      );
    } catch (e) {
      document.querySelectorAll('.story-content-wrapper, .story-image-wrapper')
        .forEach(el => { el.style.opacity = '1'; el.style.transform = 'none'; });
    }

    // ─── SHAPING SECTION ────────────────────────────────────────────────────
    try {
      gsap.fromTo('.shaping-point',
        { scale: 0.8, opacity: 0, y: 40 },
        {
          scale: 1, opacity: 1, y: 0, stagger: 0.12, duration: 0.7, ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.shaping-section',
            start: 'top 75%',
            toggleActions: 'play none none none'
          }
        }
      );
    } catch (e) {
      document.querySelectorAll('.shaping-point')
        .forEach(el => { el.style.opacity = '1'; el.style.transform = 'none'; });
    }

    // ─── MISSION CARDS ──────────────────────────────────────────────────────
    try {
      gsap.utils.toArray('.mission-card').forEach((card) => {
        gsap.fromTo(card,
          { rotationY: 60, opacity: 0, scale: 0.9 },
          {
            rotationY: 0, opacity: 1, scale: 1, duration: 0.9, ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 82%',
              toggleActions: 'play none none none'
            }
          }
        );

        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = (y - centerY) / 10;
          const rotateY = (centerX - x) / 10;
          gsap.to(card, { rotationX: rotateX, rotationY: rotateY, transformPerspective: 1000, duration: 0.3 });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, { rotationX: 0, rotationY: 0, duration: 0.5 });
        });
      });
    } catch (e) {
      document.querySelectorAll('.mission-card')
        .forEach(el => { el.style.opacity = '1'; el.style.transform = 'none'; });
    }

    // ─── VALUES SECTION ─────────────────────────────────────────────────────
    try {
      gsap.fromTo('.value-item',
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, stagger: 0.1, duration: 0.7,
          scrollTrigger: {
            trigger: '.values-section',
            start: 'top 75%',
            toggleActions: 'play none none none'
          }
        }
      );
    } catch (e) {
      document.querySelectorAll('.value-item')
        .forEach(el => { el.style.opacity = '1'; el.style.transform = 'none'; });
    }

    // ─── TEAM MEMBERS ───────────────────────────────────────────────────────
    try {
      gsap.utils.toArray('.team-member').forEach((member, i) => {
        const direction = i % 2 === 0 ? -80 : 80;
        gsap.fromTo(member,
          { x: direction, opacity: 0, rotation: direction > 0 ? 4 : -4 },
          {
            x: 0, opacity: 1, rotation: 0, duration: 0.9, ease: 'power3.out',
            scrollTrigger: {
              trigger: member,
              start: 'top 82%',
              toggleActions: 'play none none none'
            }
          }
        );
      });
    } catch (e) {
      document.querySelectorAll('.team-member')
        .forEach(el => { el.style.opacity = '1'; el.style.transform = 'none'; });
    }

    // ─── VISIONARIES ────────────────────────────────────────────────────────
    try {
      gsap.fromTo('.visionary-card',
        { scale: 0.85, opacity: 0, y: 40 },
        {
          scale: 1, opacity: 1, y: 0, stagger: 0.15, duration: 0.8, ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.visionaries-section',
            start: 'top 75%',
            toggleActions: 'play none none none'
          }
        }
      );
    } catch (e) {
      document.querySelectorAll('.visionary-card')
        .forEach(el => { el.style.opacity = '1'; el.style.transform = 'none'; });
    }

    // ─── EDUCATORS ──────────────────────────────────────────────────────────
    try {
      gsap.utils.toArray('.educator-card').forEach((card) => {
        gsap.fromTo(card,
          { rotationY: -60, opacity: 0 },
          {
            rotationY: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 82%',
              toggleActions: 'play none none none'
            }
          }
        );
      });
    } catch (e) {
      document.querySelectorAll('.educator-card')
        .forEach(el => { el.style.opacity = '1'; el.style.transform = 'none'; });
    }

    // ─── ACCREDITATIONS ─────────────────────────────────────────────────────
    try {
      gsap.fromTo('.accreditation-item',
        { scale: 0.7, opacity: 0 },
        {
          scale: 1, opacity: 1, stagger: 0.12, duration: 0.6, ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.accreditations-section',
            start: 'top 75%',
            toggleActions: 'play none none none'
          }
        }
      );
    } catch (e) {
      document.querySelectorAll('.accreditation-item')
        .forEach(el => { el.style.opacity = '1'; el.style.transform = 'none'; });
    }

    // ─── NUMBER COUNTER ─────────────────────────────────────────────────────
    try {
      gsap.utils.toArray('.number-item h3').forEach((number) => {
        const target = number.textContent;
        const isPercentage = target.includes('%');
        const isRating = target.includes('/');
        let endValue;

        if (isPercentage) {
          endValue = parseInt(target);
        } else if (isRating) {
          endValue = parseFloat(target);
        } else {
          endValue = parseInt(target.replace('+', ''));
        }

        // Keep original text visible until animation fires
        const originalText = target;

        ScrollTrigger.create({
          trigger: number,
          start: 'top 82%',
          toggleActions: 'play none none none',
          onEnter: () => {
            gsap.fromTo({ value: 0 }, { value: endValue },
              {
                duration: 2,
                ease: 'power2.out',
                onUpdate: function () {
                  if (isRating) {
                    number.textContent = this.targets()[0].value.toFixed(1) + '/5';
                  } else if (isPercentage) {
                    number.textContent = Math.round(this.targets()[0].value) + '%';
                  } else {
                    number.textContent = Math.round(this.targets()[0].value) + '+';
                  }
                }
              }
            );
          }
        });
      });
    } catch (e) { /* counter is cosmetic, non-critical */ }

    // ─── TESTIMONIALS ───────────────────────────────────────────────────────
    try {
      gsap.fromTo('.testimonial-slide',
        { x: 60, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.9,
          scrollTrigger: {
            trigger: '.testimonials-section',
            start: 'top 75%',
            toggleActions: 'play none none none'
          }
        }
      );
    } catch (e) {
      document.querySelectorAll('.testimonial-slide')
        .forEach(el => { el.style.opacity = '1'; el.style.transform = 'none'; });
    }

    // ─── CTA PULSE ──────────────────────────────────────────────────────────
    try {
      gsap.to('.cta-content', {
        scale: 1.02,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    } catch (e) { /* non-critical */ }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const missions = [
    {
      icon: '🎯',
      title: 'Our Mission',
      description: 'To provide world-class tech education that empowers individuals to achieve their career goals and drive innovation in the technology industry.'
    },
    {
      icon: '👁️',
      title: 'Our Vision',
      description: 'To be the leading training institute in India, recognized for excellence in tech education and producing industry-ready professionals.'
    },
    {
      icon: '⚡',
      title: 'Our Approach',
      description: 'Hands-on learning with industry experts, real-world projects, and continuous support to ensure every student succeeds.'
    }
  ];

  const values = [
    { icon: '🎓', title: 'Excellence', description: 'We strive for excellence in everything we do' },
    { icon: '🤝', title: 'Integrity', description: 'We maintain the highest standards of integrity' },
    { icon: '💡', title: 'Innovation', description: 'We encourage innovation and creative thinking' },
    { icon: '🌟', title: 'Student Success', description: 'Your success is our top priority' },
    { icon: '🔄', title: 'Continuous Learning', description: 'We believe in lifelong learning and growth' },
    { icon: '🌍', title: 'Community', description: 'We build a supportive learning community' }
  ];

  const visionaries = [
    // {
    //   name: 'Darrel Daniel',
    //   role: 'CFO',
    //   image: DarrelImg,
    //   description: 'An investment in knowledge pays the best interest. Techangle is dedicated to build a strong foundation where every child can dream, explore, and grow. For us, education is the bridge between potential and possibility.'
    // },
    {
      name: 'Ajith S',
      role: 'CEO',
      image: AjithImg,
      description: 'Remember, education is simply the soul of a society as it passes from one generation to another, therefore, the greatest aim of Techangle is to nurture young minds in preparing them for the coming future.'
    },
    {
      name: 'A H Arun Kumar',
      role: 'Business Consultant',
      image: ArunImg,
      description: 'Education is not just the filling of a pail, but the lighting of a fire. At our core, we believe in igniting curiosity and a lifelong love for learning. Techangle mission is to shape individuals who are not only knowledgeable but also wise, compassionate, and ready to lead.'
    },
    {
      name: 'Suresh kumar B',
      role: 'Managing Director',
      image: SureshImg,
      description: 'An investment in knowledge pays the best interest. Techangle is dedicated to build a strong foundation where every child can dream, explore, and grow. For us, education is the bridge between potential and possibility.'
    },
  ];

  const educators = [
    {
      name: 'Vishnupriya',
      role: 'Trainer - UI/UX Design',
      expertise: 'Educational Technology Expert',
      courses: '15+ Years Experience',
      students: '2000+ Students Taught',
      image: 'educator-1.jpg'
    },
    {
      name: 'Anagha N S',
      role: 'Trainer - Web Design & Development | SEO',
      expertise: 'IoT & Embedded Systems',
      courses: '50+ Industry Projects',
      students: '1500+ Students Trained',
      image: 'educator-2.jpg'
    },
    {
      name: 'Meera Sharma',
      role: 'Trainer - IOT & Robotics',
      expertise: 'Machine Learning & AI',
      courses: 'PhD in Computer Science',
      students: '1800+ Students Mentored',
      image: 'educator-3.jpg'
    }
  ];

  const shapingPoints = [
    { icon: '💼', title: 'Career Development', description: 'Personalized career guidance' },
    { icon: '🚀', title: 'Hands-on Projects', description: 'Real-world project experience' },
    { icon: '🎯', title: 'Industry Focus', description: 'Latest industry standards' },
    { icon: '🤝', title: 'Job Placement', description: '95% placement success rate' },
    { icon: '📚', title: 'Comprehensive Curriculum', description: 'Cutting-edge content' },
    { icon: '🏆', title: 'Expert Mentorship', description: 'Learn from the best' }
  ];

  return (
    <div className="about-page" ref={pageRef}>
      {/* Hero Section with Parallax */}
      <section className="about-hero" ref={heroRef}>
        <div className="parallax-layer-1" style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}></div>
        <div className="parallax-layer-2" style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` }}></div>

        <div className="container">
          <div className="about-hero-badge">About TechAngle</div>
          <h1>
            <span className="word">Founded</span>
            <span className="word">on</span>
            <span className="word">a</span>
            <span className="word">Vision</span>
            <span className="word">of</span>
            <span className="word">Excellence</span>
          </h1>
          <p className="about-hero-subtitle">
            Empowering the next generation of tech professionals through quality education,
            industry expertise, and unwavering support since 2022.
          </p>

          <div className="hero-stats">
            <div className="hero-stats-item">
              <h3>2800+</h3>
              <p>Students Trained</p>
            </div>
            <div className="hero-stats-item">
              <h3>95%</h3>
              <p>Placement Rate</p>
            </div>
            <div className="hero-stats-item">
              <h3>100+</h3>
              <p>Hiring Partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-grid">
            <div className="story-content-wrapper">
              <span className="section-tag">OUR STORY</span>
              <h2>Shaping the Future Through Innovation</h2>
              <p>
                TechAngle was founded in 2022 with a simple yet powerful vision: to bridge the gap between
                academic learning and industry requirements. We recognized that many talented individuals
                struggle to find quality tech education that truly prepares them for the modern workplace.
              </p>
              <p>
                Starting in the heart of Kochi's tech hub at Infopark, we began with just two courses and
                a handful of students. Today, we're proud to have trained over 5,000 students across 20+
                courses, with a remarkable 95% placement rate.
              </p>
              <p>
                Our success is built on three pillars: industry-experienced instructors, hands-on project-based
                learning, and comprehensive career support. Every course is designed in collaboration with
                industry partners to ensure our students learn the most relevant and in-demand skills.
              </p>
            </div>

            <div className="story-image-wrapper">
              <div className="story-image-bg"></div>
              <div className="story-stats">
                <div className="story-stat">
                  <h4>2022</h4>
                  <p>Year Founded</p>
                </div>
                <div className="story-stat">
                  <h4>20+</h4>
                  <p>Courses</p>
                </div>
                <div className="story-stat">
                  <h4>50+</h4>
                  <p>Expert Instructors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shaping Future Section */}
      <section className="shaping-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">OUR COMMITMENT</span>
            <h2>Shaping the Future Through Innovation</h2>
            <p>We equip our students with the skills and knowledge needed to excel in the technology industry</p>
          </div>

          <div className="shaping-grid">
            {shapingPoints.map((point, i) => (
              <div key={i} className="shaping-point">
                <div className="shaping-icon">{point.icon}</div>
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-grid">
            {missions.map((mission, i) => (
              <div key={i} className="mission-card">
                <div className="mission-icon">{mission.icon}</div>
                <h3>{mission.title}</h3>
                <p>{mission.description}</p>
                <div className="mission-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Circular Mission Diagram */}
      <section className="mission-diagram-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">OUR CORE</span>
            <h2>What Drives TechAngle</h2>
            <p>Five pillars that define our commitment to excellence</p>
          </div>

          <div className="mission-orbit-wrapper">
            {/* Center */}
            <div className="orbit-center">
              <div className="orbit-center-ring"></div>
              <div className="orbit-center-ring ring-2"></div>
              <span className="orbit-center-text">Our<br />Mission</span>
            </div>

            {/* Orbit ring */}
            <div className="orbit-ring"></div>

            {/* Orbit items */}
            {[
              { icon: '📈', title: 'Bigger', desc: 'Reaching a large number of aspiring tech professionals', angle: 90 },
              { icon: '🏆', title: 'Better', desc: 'With world-class quality education', angle: 18 },
              { icon: '💰', title: 'Cheaper', desc: 'At affordable cost for everyone', angle: 306 },
              { icon: '⚡', title: 'Faster', desc: 'At a faster learning pace', angle: 234 },
              { icon: '🌐', title: 'Wider', desc: 'Wider geographical accessibility', angle: 162 },
            ].map((item, i) => {
              const rad = (item.angle - 90) * (Math.PI / 180);
              const r = 220;
              const x = 50 + (r / 5.2) * Math.cos(rad);
              const y = 50 + (r / 5.2) * Math.sin(rad);
              return (
                <div
                  key={i}
                  className="orbit-node"
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  <div className="orbit-icon">{item.icon}</div>
                  <div className="orbit-label">
                    <strong>{item.title}</strong>
                    <span>{item.desc}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">OUR VALUES</span>
            <h2>What We Stand For</h2>
            <p>The principles that guide everything we do</p>
          </div>

          <div className="values-grid">
            {values.map((value, i) => (
              <div key={i} className="value-item">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations Section */}
      {/* <section className="accreditations-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">ACCREDITATIONS</span>
            <h2>TechAngle Accreditations</h2>
            <p>Recognized by leading organizations and industry bodies</p>
          </div>

          <div className="accreditations-grid">
            <div className="accreditation-item">
              <div className="accreditation-logo">NSDC</div>
              <p>National Skill Development Corporation</p>
            </div>
            <div className="accreditation-item">
              <div className="accreditation-logo">CISL</div>
              <p>Cyber Security Institute</p>
            </div>
            <div className="accreditation-item">
              <div className="accreditation-logo">ISO</div>
              <p>ISO 9001:2015 Certified</p>
            </div>
            <div className="accreditation-item">
              <div className="accreditation-logo">MSME</div>
              <p>Ministry of MSME Recognized</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Visionaries Section */}
      <section className="visionaries-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">LEADERSHIP</span>
            <h2>Meet the Visionaries Leading TechAngle</h2>
            <p>Experienced leaders driving innovation and excellence in tech education</p>
          </div>

          <div className="visionaries-grid">
            {visionaries.map((visionary, i) => (
              <div key={i} className="visionary-card">
                <div className="visionary-image">
                  {!imageErrors[i] ? (
                    <>
                      <img
                        src={visionary.image}
                        alt={visionary.name}
                        onError={() => handleImageError(i)}
                      />
                      <div className="visionary-gradient-overlay"></div>
                    </>
                  ) : (
                    <div className="visionary-fallback">
                      <div className="visionary-avatar-large">
                        {visionary.name.split(' ').map(n => n.charAt(0)).join('')}
                      </div>
                    </div>
                  )}
                  <div className="visionary-info-overlay">
                    <h3>{visionary.name}</h3>
                    <p>{visionary.role}</p>
                  </div>
                </div>
                <div className="visionary-content">
                  <p className="visionary-description">{visionary.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educators Section */}
      {/* <section className="educators-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">OUR TEAM</span>
            <h2>Educators Who Inspire</h2>
            <p>Meet our team of industry professionals with years of real-world experience</p>
          </div>

          <div className="educators-grid">
            {educators.map((educator, i) => (
              <div key={i} className="educator-card">
                <div className="educator-avatar">{educator.name.charAt(0)}</div>
                <h3>{educator.name}</h3>
                <p className="educator-role">{educator.role}</p>
                <div className="educator-details">
                  <div className="educator-detail">
                    <span className="detail-icon">🎓</span>
                    <span>{educator.expertise}</span>
                  </div>
                  <div className="educator-detail">
                    <span className="detail-icon">💼</span>
                    <span>{educator.courses}</span>
                  </div>
                  <div className="educator-detail">
                    <span className="detail-icon">👥</span>
                    <span>{educator.students}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Numbers Section */}
      <section className="numbers-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">IMPACT</span>
            <h2>TechAngle by the Numbers</h2>
            <p>Our commitment to excellence reflected in measurable outcomes</p>
          </div>

          <div className="numbers-grid">
            <div className="number-item">
              <h3>2800+</h3>
              <p>Students Trained</p>
            </div>
            <div className="number-item">
              <h3>50+</h3>
              <p>Industry Experts</p>
            </div>
            <div className="number-item">
              <h3>95%</h3>
              <p>Placement Rate</p>
            </div>
            <div className="number-item">
              <h3>15+</h3>
              <p>Courses Offered</p>
            </div>
            <div className="number-item">
              <h3>200+</h3>
              <p>Hiring Partners</p>
            </div>
            <div className="number-item">
              <h3>4.8/5</h3>
              <p>Student Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">TESTIMONIALS</span>
            <h2>What They Say</h2>
            <p>Hear from our successful alumni and students</p>
          </div>

          <div className="testimonial-slider">
            <div className="testimonial-slide">
              <div className="testimonial-quote">"</div>
              <p className="testimonial-text">
                TechAngle transformed my career. The hands-on training and industry exposure
                gave me the confidence to excel in my role. The instructors are truly passionate
                about student success.
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">S</div>
                <div>
                  <h4>Sreekanth Menon</h4>
                  <p>Software Engineer at TCS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Journey?</h2>
            <p>Join thousands of successful students who transformed their careers with TechAngle</p>
            <div className="cta-buttons">
              <button onClick={() => window.location.href = '/courses'} className="btn-primary">Explore Courses</button>
              <button onClick={() => window.location.href = '/contact'} className="btn-secondary">Contact Us</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;