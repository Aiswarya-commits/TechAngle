import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    // Animated title with split text effect
    tl.from(titleRef.current.children, {
      y: 150,
      opacity: 0,
      rotationX: -90,
      transformOrigin: 'top center',
      duration: 1.2,
      stagger: 0.3,
      ease: 'power4.out'
    })
      .from(subtitleRef.current, {
        y: 80,
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: 'power3.out'
      }, '-=0.6')
      .from(ctaRef.current.children, {
        scale: 0,
        opacity: 0,
        rotation: 180,
        duration: 0.7,
        stagger: 0.2,
        ease: 'back.out(2)'
      }, '-=0.4');

    // Parallax effect on background
    gsap.to('.hero-bg', {
      y: 400,
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5
      }
    });

    // Parallax on particles
    gsap.to(particlesRef.current, {
      y: 200,
      opacity: 0.3,
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 2
      }
    });

    // Hero content fade out on scroll
    gsap.to('.hero-content', {
      opacity: 0,
      y: -100,
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      }
    });

    // Floating animation for particles
    gsap.to('.particle', {
      y: 'random(-100, 100)',
      x: 'random(-100, 100)',
      duration: 'random(3, 6)',
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: {
        amount: 2,
        from: 'random'
      }
    });

    // Scroll indicator pulse
    gsap.to('.scroll-indicator', {
      opacity: 0,
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: '100px top',
        scrub: true
      }
    });

  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-bg">
        <div className="bg-gradient-1"></div>
        <div className="bg-gradient-2"></div>
        <div className="bg-gradient-3"></div>
      </div>

      <div className="particles" ref={particlesRef}>
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 15}s`
            }}
          ></div>
        ))}
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-icon">🎓</span>
          <span className="badge-text">Best Training Institute in Kochi</span>
        </div>

        <h1 ref={titleRef}>
          <span className="title-line-1">Transform Your Future</span>
          <span className="title-line-2">With TechAngle</span>
        </h1>

        <p ref={subtitleRef}>
          Leading training institute offering industry-relevant courses with
          expert instructors, hands-on projects, and 100% placement assistance
        </p>

        <div className="hero-cta" ref={ctaRef}>
          <Link to="/courses">
            <button className="primary-btn">
              <span>Explore Courses</span>
              <span className="btn-icon">→</span>
            </button>
          </Link>
          <button className="secondary-btn">
            <span className="play-icon">▶</span>
            <span>See How</span>
          </button>
        </div>

        <div className="hero-features">
          <div className="hero-feature-item">
            <div className="feature-number">15+</div>
            <div className="feature-label">Years</div>
          </div>
          <div className="hero-feature-divider"></div>
          <div className="hero-feature-item">
            <div className="feature-number">2000+</div>
            <div className="feature-label">Students</div>
          </div>
          <div className="hero-feature-divider"></div>
          <div className="hero-feature-item">
            <div className="feature-number">100%</div>
            <div className="feature-label">Placement</div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="mouse-wheel"></div>
        </div>
        <span>Scroll Down</span>
      </div>

      {/* Decorative elements */}
      <div className="hero-decoration hero-decoration-1"></div>
      <div className="hero-decoration hero-decoration-2"></div>
      <div className="hero-decoration hero-decoration-3"></div>
    </section>
  );
};

export default Hero;