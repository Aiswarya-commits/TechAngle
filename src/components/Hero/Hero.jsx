import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import './Hero.css';
import TechAngleVideo from '../../assets/TechAngleVideo.mp4';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const videoRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);

  const openVideo = () => {
    setVideoOpen(true);
    document.body.style.overflow = 'hidden'; // prevent bg scroll
  };

  const closeVideo = () => {
    setVideoOpen(false);
    document.body.style.overflow = '';
    if (videoRef.current) videoRef.current.pause();
  };

  /* ── Close on Escape key ── */
  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') closeVideo(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    // Small delay to ensure DOM is ready
    const initTimer = setTimeout(() => {
      setIsLoaded(true);

      const tl = gsap.timeline({
        defaults: { ease: 'power4.out' }
      });

      // Animate title spans with fromTo for explicit control
      if (titleRef.current && titleRef.current.children) {
        gsap.fromTo(titleRef.current.children, {
          y: 100,
          opacity: 0
        }, {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power4.out'
        });
      }

      // Animate subtitle
      if (subtitleRef.current) {
        gsap.fromTo(subtitleRef.current, {
          y: 50,
          opacity: 0
        }, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.5,
          ease: 'power2.out'
        });
      }

      // Animate CTA buttons
      if (ctaRef.current && ctaRef.current.children) {
        gsap.fromTo(ctaRef.current.children, {
          scale: 0,
          opacity: 0
        }, {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          delay: 0.8,
          stagger: 0.2,
          ease: 'back.out(1.7)'
        });
      }

      // Parallax effect for background
      gsap.to('.hero-bg', {
        y: 300,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      });

      // Fade out hero content on scroll
      gsap.to('.hero-content', {
        opacity: 0,
        y: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      });

      // Fade out scroll indicator
      gsap.to('.scroll-indicator', {
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '20% top',
          scrub: 1
        }
      });
    }, 100);

    return () => {
      clearTimeout(initTimer);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-bg"></div>
      <div className="particles">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          ></div>
        ))}
      </div>

      <div className="hero-content">
        <h1 ref={titleRef}>
          <span>Unlock Your Potential</span>
          <span>With TechAngle</span>
        </h1>
        <p ref={subtitleRef}>
          Leading training institute in Kochi offering industry-relevant courses with
          career support and placement assistance
        </p>
        <div className="hero-cta" ref={ctaRef}>
          <Link to="/courses">
            <button className="primary-btn">Explore Courses</button>
          </Link>
          <button className="secondary-btn" onClick={openVideo}>
            <span className="secondary-btn__play"></span>
            Watch Video
          </button>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse"></div>
        <span>Scroll Down</span>
      </div>
      {videoOpen && (
        <div
          className="vm-backdrop"
          onClick={e => { if (e.target === e.currentTarget) closeVideo(); }}
          role="dialog"
          aria-modal="true"
          aria-label="TechAngle Video"
        >
          <div className="vm-box">
            {/* Close button */}
            <button className="vm-close" onClick={closeVideo} aria-label="Close video">
              ✕
            </button>

            {/* Video */}
            <video
              ref={videoRef}
              className="vm-video"
              src={TechAngleVideo}
              controls
              autoPlay
              playsInline
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;