import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import './Home.css';
import Hero from '../../components/Hero/Hero';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const statsRef = useRef([]);
  const coursesRef = useRef(null);
  const featuresRef = useRef(null);
  const testimonialsRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const accreditationsRef = useRef(null);
  const newsRef = useRef(null);
  const ctaFinalRef = useRef(null);

  useEffect(() => {
    // Text fade-in/fade-out animation utility
    const animateTextElements = (selector, triggerElement, options = {}) => {
      const elements = gsap.utils.toArray(selector);
      elements.forEach((elem) => {
        gsap.fromTo(elem,
          {
            opacity: 0,
            y: options.y || 50,
            scale: options.scale || 1,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: options.duration || 1,
            ease: options.ease || 'power3.out',
            scrollTrigger: {
              trigger: triggerElement || elem,
              start: options.start || 'top 80%',
              end: options.end || 'bottom 20%',
              toggleActions: 'play none none reverse',
              ...options.scrollTrigger
            }
          }
        );
      });
    };

    // Stats animation with scale and rotation
    statsRef.current.forEach((stat, i) => {
      if (stat) {
        gsap.fromTo(stat,
          {
            scale: 0,
            opacity: 0,
            rotation: -180
          },
          {
            scale: 1,
            opacity: 1,
            rotation: 0,
            duration: 1,
            delay: i * 0.15,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: stat,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }
    });

    // About section parallax and text animations
    if (aboutSectionRef.current) {
      // Parallax image
      gsap.to('.about-image-wrapper', {
        y: -100,
        scrollTrigger: {
          trigger: aboutSectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      });

      // Fade in heading
      animateTextElements('.about-section .section-tag', aboutSectionRef.current, {
        y: 30,
        duration: 0.8
      });

      animateTextElements('.about-section h2', aboutSectionRef.current, {
        y: 50,
        duration: 1
      });

      animateTextElements('.about-section .about-description', aboutSectionRef.current, {
        y: 40,
        duration: 1,
        start: 'top 75%'
      });

      // Stagger list items
      gsap.fromTo('.about-list li',
        {
          opacity: 0,
          x: -50
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.about-list',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Stats boxes in about section
      gsap.fromTo('.about-stats-box',
        {
          opacity: 0,
          y: 30,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.about-stats-grid',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }

    // Accreditations section
    if (accreditationsRef.current) {
      animateTextElements('.accreditations-section .section-header', accreditationsRef.current, {
        y: 40
      });

      gsap.fromTo('.accreditation-card',
        {
          opacity: 0,
          scale: 0.8,
          y: 50
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: '.accreditations-grid',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }

    // Courses section with enhanced animations
    if (coursesRef.current) {
      animateTextElements('.home-courses .section-tag', coursesRef.current, {
        y: 30,
        duration: 0.8
      });

      animateTextElements('.home-courses .section-header h2', coursesRef.current, {
        y: 50,
        duration: 1
      });

      animateTextElements('.home-courses .section-header p', coursesRef.current, {
        y: 40,
        duration: 0.9
      });

      // Course cards with parallax
      gsap.utils.toArray('.home-course-card').forEach((card, i) => {
        gsap.fromTo(card,
          {
            y: 100,
            opacity: 0,
            scale: 0.9
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            delay: i * 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );

        // Parallax effect on course cards
        gsap.to(card, {
          y: -30,
          scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
          }
        });
      });
    }

    // Features section
    if (featuresRef.current) {
      animateTextElements('.home-features .section-header', featuresRef.current);

      gsap.fromTo('.home-feature-item',
        {
          scale: 0,
          opacity: 0,
          rotation: -45
        },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: featuresRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }

    // Testimonials section
    if (testimonialsRef.current) {
      animateTextElements('.home-testimonials .section-header', testimonialsRef.current);

      gsap.fromTo('.home-testimonial-card',
        {
          x: 100,
          opacity: 0,
          rotationY: 90
        },
        {
          x: 0,
          opacity: 1,
          rotationY: 0,
          duration: 1,
          stagger: 0.25,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: testimonialsRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }

    // News section
    if (newsRef.current) {
      animateTextElements('.news-section .section-header', newsRef.current);

      gsap.fromTo('.news-card',
        {
          y: 80,
          opacity: 0,
          scale: 0.95
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.news-grid',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }

    // Final CTA section
    if (ctaFinalRef.current) {
      gsap.fromTo('.home-cta',
        {
          opacity: 0,
          y: 60
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          scrollTrigger: {
            trigger: ctaFinalRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      animateTextElements('.home-cta h2', ctaFinalRef.current, {
        y: 40,
        duration: 0.9
      });

      animateTextElements('.home-cta p', ctaFinalRef.current, {
        y: 30,
        duration: 0.8,
        start: 'top 75%'
      });

      gsap.fromTo('.cta-buttons button',
        {
          scale: 0,
          opacity: 0
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.cta-buttons',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const courses = [
    {
      title: 'Internet of Things',
      description: 'Hands-on learning covering IoT fundamentals, device connectivity, and real-world applications',
      icon: '🌐',
      color: '#6366f1'
    },
    {
      title: 'Full Stack Development',
      description: 'Master front-end and back-end technologies to build complete web applications',
      icon: '💻',
      color: '#8b5cf6'
    },
    {
      title: 'Data Science & AI',
      description: 'Learn data analysis, machine learning, and artificial intelligence techniques',
      icon: '🤖',
      color: '#ec4899'
    }
  ];

  const features = [
    {
      icon: '👨‍💼',
      title: 'Industry Professionals',
      description: 'Learn from experts who bring real-world insights and experience'
    },
    {
      icon: '🚀',
      title: 'Live Projects',
      description: 'Engage in practical projects with real-world skills and applications'
    },
    {
      icon: '💼',
      title: 'Career Support',
      description: 'Dedicated placement assistance to help you succeed in your career'
    },
    {
      icon: '📈',
      title: 'Latest Technologies',
      description: 'Stay ahead with up-to-date industry trends and cutting-edge tools'
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Software Engineer at Tech Corp',
      image: '👨‍💻',
      text: 'Enrolling at TechAngle was a turning point in my career. The structured courses and placement assistance made learning both effective and enjoyable.'
    },
    {
      name: 'Priya Menon',
      role: 'Data Analyst at Analytics Inc',
      image: '👩‍💼',
      text: 'The hands-on projects and expert instructors helped me transition into data science. I highly recommend TechAngle to anyone looking to upskill.'
    }
  ];

  const newsItems = [
    {
      title: 'Industry Leaders Join Our Expert Panel',
      excerpt: 'Leading tech professionals join TechAngle to mentor the next generation',
      date: 'Feb 10, 2026',
      image: '📰'
    },
    {
      title: 'Upcoming Career Orientation with Industry Experts',
      excerpt: 'Join us for an exclusive career guidance session with top industry leaders',
      date: 'Feb 8, 2026',
      image: '🎓'
    },
    {
      title: 'Celebrating Success Stories of 2025',
      excerpt: 'Our students achieve remarkable placements at top tech companies',
      date: 'Jan 30, 2026',
      image: '🎉'
    }
  ];

  return (
    <div className="home-page">
      <Hero />

      {/* Stats Section */}
      <section className="home-stats">
        <div className="container">
          <div className="stats-grid">
            {[
              { number: '15+', label: 'Years Experience' },
              { number: '25+', label: 'Expert Trainers' },
              { number: '2000+', label: 'Students Trained' },
              { number: '100+', label: 'Companies Hiring' }
            ].map((stat, i) => (
              <div
                key={i}
                className="stat-card"
                ref={el => statsRef.current[i] = el}
              >
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Empowering Future Innovators */}
      <section className="about-section" ref={aboutSectionRef}>
        <div className="container">
          <div className="about-content-wrapper">
            <div className="about-image-wrapper">
              <div className="about-image">
                <div className="image-placeholder">
                  <span className="image-icon">🎓</span>
                </div>
              </div>
            </div>

            <div className="about-text-content">
              <span className="section-tag">ABOUT US</span>
              <h2>Empowering Future Innovators</h2>
              <p className="about-description">
                TechAngle offers a life-changing learning experience for anyone seeking to excel in their career.
                We provide industry-leading courses with real-world skills that matter.
              </p>

              <ul className="about-list">
                <li>✓ Cutting-edge curriculum</li>
                <li>✓ Expert instructors</li>
                <li>✓ Hands-on projects</li>
                <li>✓ Career guidance</li>
                <li>✓ 100% placement assistance</li>
                <li>✓ Industry-recognized certifications</li>
              </ul>

              <div className="about-stats-grid">
                <div className="about-stats-box">
                  <div className="stats-icon">🎯</div>
                  <div className="stats-content">
                    <h4>99.9%</h4>
                    <p>Success Rate</p>
                  </div>
                </div>
                <div className="about-stats-box">
                  <div className="stats-icon">👥</div>
                  <div className="stats-content">
                    <h4>Expert</h4>
                    <p>Training</p>
                  </div>
                </div>
              </div>

              <Link to="/about">
                <button className="primary-btn">Learn More</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations Section */}
      <section className="accreditations-section" ref={accreditationsRef}>
        <div className="container">
          <div className="section-header">
            <h2>TechAngle Accreditations</h2>
          </div>

          <div className="accreditations-grid">
            <div className="accreditation-card">
              <div className="accreditation-logo">
                <span className="logo-text">MSME</span>
              </div>
              <p>Ministry of Micro, Small & Medium Enterprises</p>
            </div>

            <div className="accreditation-card">
              <div className="accreditation-logo">
                <span className="logo-text">CISL</span>
              </div>
              <p>Cyber Intelligence Security Lab</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="home-courses" ref={coursesRef}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">OUR PROGRAMS</span>
            <h2>Popular Courses</h2>
            <p>Choose from our comprehensive range of tech courses</p>
          </div>

          <div className="home-courses-grid">
            {courses.map((course, i) => (
              <div
                key={i}
                className="home-course-card"
                style={{ '--card-color': course.color }}
              >
                <div className="course-icon">{course.icon}</div>
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <Link to="/courses">
                  <button className="learn-more-btn">
                    Learn More
                    <span className="arrow">→</span>
                  </button>
                </Link>
              </div>
            ))}
          </div>

          <div className="view-all-btn-container">
            <Link to="/courses">
              <button className="primary-btn">View All Courses</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features - Key Elements */}
      <section className="home-features" ref={featuresRef}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">WHY CHOOSE US</span>
            <h2>Key Elements That Make Us Special</h2>
            <p>Discover the advantages of learning with TechAngle</p>
          </div>

          <div className="home-features-grid">
            {features.map((feature, i) => (
              <div key={i} className="home-feature-item">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="home-testimonials" ref={testimonialsRef}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">SUCCESS STORIES</span>
            <h2>Why Students Trust Our Training Institute?</h2>
            <p>Real experiences from our successful graduates</p>
          </div>

          <div className="home-testimonials-grid">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="home-testimonial-card">
                <div className="quote-icon">"</div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{testimonial.image}</div>
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Updates Section */}
      <section className="news-section" ref={newsRef}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">LATEST</span>
            <h2>News & Updates</h2>
            <p>Stay informed about our latest achievements and events</p>
          </div>

          <div className="news-grid">
            {newsItems.map((news, i) => (
              <div key={i} className="news-card">
                <div className="news-image">
                  <span className="news-emoji">{news.image}</span>
                </div>
                <div className="news-content">
                  <span className="news-date">{news.date}</span>
                  <h3>{news.title}</h3>
                  <p>{news.excerpt}</p>
                  <Link to="/blog" className="read-more">
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="view-all-btn-container">
            <Link to="/blog">
              <button className="primary-btn">View All News</button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="home-cta" ref={ctaFinalRef}>
        <div className="container">
          <div className="cta-content">
            <h2>We Are Ready to Help You</h2>
            <p>Join thousands of successful students and start your journey today</p>
            <div className="cta-buttons">
              <Link to="/contact">
                <button className="primary-btn">Get Started</button>
              </Link>
              <Link to="/courses">
                <button className="secondary-btn">Browse Courses</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;