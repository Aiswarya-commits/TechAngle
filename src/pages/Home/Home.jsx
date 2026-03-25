import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import './Home.css';
import Hero from '../../components/Hero/Hero';
import emailjs from '@emailjs/browser';

import AAPCLogo from '../../assets/AAPC.png';
import MKCLLogo from '../../assets/MKCL.png';
import CISILogo from '../../assets/CISI.png';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const statsRef = useRef([]);
  const coursesRef = useRef(null);
  const featuresRef = useRef(null);
  const testimonialsRef = useRef(null);
  const aboutRef = useRef(null);
  const accreditationsRef = useRef(null);
  const whyChooseRef = useRef(null);
  const callbackRef = useRef(null);
  const newsRef = useRef(null);
  const [animationsLoaded, setAnimationsLoaded] = useState(false);

  const [callbackFields, setCallbackFields] = useState({ name: '', email: '', phone: '', message: '' });
  const [callbackStatus, setCallbackStatus] = useState('idle');

  const handleCallbackSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone } = callbackFields;
    if (!name.trim() || !email.trim() || !phone.trim()) {
      setCallbackStatus('error');
      return;
    }
    setCallbackStatus('sending');
    try {
      await emailjs.send(
        'service_sigknpe',
        'template_jb9lkcz',
        {
          from_name: name,
          from_email: email,
          phone: phone,
          message: callbackFields.message || 'Callback request from Home page',
          subject: 'Callback Request - Home Page',
          reply_to: email,
        },
        '7S3PWZWuZMBZrDnqv'
      );
      setCallbackStatus('success');
      setCallbackFields({ name: '', email: '', phone: '', message: '' });
    } catch {
      setCallbackStatus('error');
    }
  };

  useEffect(() => {
    // Small delay to ensure DOM is ready
    const initTimer = setTimeout(() => {
      setAnimationsLoaded(true);

      // Refresh ScrollTrigger
      ScrollTrigger.refresh();

      // Stats animation
      statsRef.current.forEach((stat, i) => {
        if (stat) {
          gsap.fromTo(stat, {
            scale: 0,
            opacity: 0
          }, {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            delay: i * 0.2,
            scrollTrigger: {
              trigger: stat,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          });
        }
      });

      // About section animations
      if (aboutRef.current) {
        const aboutContent = aboutRef.current.querySelector('.about-content');
        const aboutImage = aboutRef.current.querySelector('.about-image');

        if (aboutContent) {
          gsap.fromTo(aboutContent, {
            x: -100,
            opacity: 0
          }, {
            x: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: aboutRef.current,
              start: 'top 70%',
              toggleActions: 'play none none none'
            }
          });
        }

        if (aboutImage) {
          gsap.fromTo(aboutImage, {
            x: 100,
            opacity: 0
          }, {
            x: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: aboutRef.current,
              start: 'top 70%',
              toggleActions: 'play none none none'
            }
          });
        }
        // Stacked cards animation
        const cards = aboutRef.current.querySelectorAll(".card");

        if (cards.length > 0) {
          gsap.fromTo(cards,
            {
              y: 80,
              opacity: 0,
              scale: 0.8
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.8,
              stagger: 0.2,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: aboutRef.current,
                start: "top 70%",
                toggleActions: "play none none none"
              }
            }
          );
        }


        const featureItems = aboutRef.current.querySelectorAll('.about-features-list li');
        if (featureItems.length > 0) {
          gsap.fromTo(featureItems, {
            x: -50,
            opacity: 0
          }, {
            x: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.15,
            scrollTrigger: {
              trigger: aboutRef.current.querySelector('.about-features-list'),
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          });
        }
      }

      // Accreditations section
      if (accreditationsRef.current) {
        const badges = accreditationsRef.current.querySelectorAll('.accreditation-badge');
        if (badges.length > 0) {
          gsap.fromTo(badges, {
            scale: 0,
            rotation: 360,
            opacity: 0
          }, {
            scale: 1,
            rotation: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: accreditationsRef.current,
              start: 'top 75%',
              toggleActions: 'play none none none'
            }
          });
        }
      }

      // Courses animation
      if (coursesRef.current) {
        const courseCards = coursesRef.current.querySelectorAll('.home-course-card');
        if (courseCards.length > 0) {
          gsap.fromTo(courseCards, {
            y: 100,
            opacity: 0
          }, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            scrollTrigger: {
              trigger: coursesRef.current,
              start: 'top 70%',
              toggleActions: 'play none none none'
            }
          });
        }
      }

      // Section headers animation
      const sectionHeaders = document.querySelectorAll('.section-header');
      sectionHeaders.forEach(header => {
        const elements = header.querySelectorAll('.section-tag, h2, p');
        if (elements.length > 0) {
          gsap.fromTo(elements, {
            y: 30,
            opacity: 0
          }, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.2,
            scrollTrigger: {
              trigger: header,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          });
        }
      });

      // Why Choose Us section
      if (whyChooseRef.current) {
        const whyCards = whyChooseRef.current.querySelectorAll('.why-choose-card');
        if (whyCards.length > 0) {
          gsap.fromTo(whyCards, {
            y: 80,
            opacity: 0
          }, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            scrollTrigger: {
              trigger: whyChooseRef.current,
              start: 'top 70%',
              toggleActions: 'play none none none'
            }
          });
        }
      }

      // Features animation
      if (featuresRef.current) {
        const featureItems = featuresRef.current.querySelectorAll('.home-feature-item');
        if (featureItems.length > 0) {
          gsap.fromTo(featureItems, {
            scale: 0,
            opacity: 0
          }, {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: featuresRef.current,
              start: 'top 70%',
              toggleActions: 'play none none none'
            }
          });
        }
      }

      // Callback form animation
      if (callbackRef.current) {
        const callbackImage = callbackRef.current.querySelector('.callback-image');
        const callbackForm = callbackRef.current.querySelector('.callback-form');

        if (callbackImage) {
          gsap.fromTo(callbackImage, {
            x: -100,
            opacity: 0
          }, {
            x: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: callbackRef.current,
              start: 'top 70%',
              toggleActions: 'play none none none'
            }
          });
        }

        if (callbackForm) {
          gsap.fromTo(callbackForm, {
            x: 100,
            opacity: 0
          }, {
            x: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: callbackRef.current,
              start: 'top 70%',
              toggleActions: 'play none none none'
            }
          });
        }
      }

      // Testimonials animation
      if (testimonialsRef.current) {
        const testimonialCards = testimonialsRef.current.querySelectorAll('.home-testimonial-card');
        if (testimonialCards.length > 0) {
          gsap.fromTo(testimonialCards, {
            x: 100,
            opacity: 0
          }, {
            x: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
              trigger: testimonialsRef.current,
              start: 'top 70%',
              toggleActions: 'play none none none'
            }
          });
        }
      }

      // News cards animation
      if (newsRef.current) {
        const newsCards = newsRef.current.querySelectorAll('.news-card');
        if (newsCards.length > 0) {
          gsap.fromTo(newsCards, {
            y: 80,
            opacity: 0
          }, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            scrollTrigger: {
              trigger: newsRef.current,
              start: 'top 70%',
              toggleActions: 'play none none none'
            }
          });
        }
      }

      // Parallax effects (only on elements that exist)
      const parallaxElements = document.querySelectorAll('.parallax-element');
      parallaxElements.forEach(element => {
        gsap.to(element, {
          y: -50,
          ease: 'none',
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
          }
        });
      });

      // Text reveal animations
      const revealTexts = document.querySelectorAll('.reveal-text');
      revealTexts.forEach(text => {
        gsap.fromTo(text, {
          y: 50,
          opacity: 0
        }, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: text,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        });
      });

      // Fade on scroll animations
      const fadeElements = document.querySelectorAll('.fade-on-scroll');
      fadeElements.forEach(element => {
        gsap.fromTo(element, {
          opacity: 0,
          y: 30
        }, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        });
      });
    }, 100);

    // Cleanup function
    return () => {
      clearTimeout(initTimer);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const courses = [
    {
      title: 'CBSE Computing Skills Program',
      description: 'Computer Applications, Computer Science, Information Technology and Informatics Practices for Class 9-12',
      icon: '🖥️',
      color: '#6366f1',
      slug: 'cbse-computing'
    },
    {
      title: 'Mastery Data Platform',
      description: 'Master data analytics, business intelligence and data platform tools for modern data-driven decisions',
      icon: '📊',
      color: '#8b5cf6',
      slug: 'mastery-data-platform'
    },
    {
      title: 'Digital Designing',
      description: 'Learn UI/UX, graphic design, Figma, Adobe tools and modern digital design principles',
      icon: '🎨',
      color: '#ec4899',
      slug: 'digital-designing'
    },
    {
      title: 'Google Certification Program',
      description: 'Prepare and earn Google certifications in digital marketing, cloud, data analytics and more',
      icon: '🔵',
      color: '#10b981',
      slug: 'google-certification'
    },
    {
      title: 'Financial Accounting',
      description: 'Comprehensive financial accounting, Tally, GST and business accounting fundamentals',
      icon: '💰',
      color: '#f59e0b',
      slug: 'financial-accounting'
    },
    {
      title: 'IT Hardware and Networking',
      description: 'Hardware fundamentals, network setup, troubleshooting and IT infrastructure management',
      icon: '🔧',
      color: '#06b6d4',
      slug: 'it-hardware-networking'
    },
    {
      title: 'Management Level',
      description: 'Business management, leadership skills and organizational management training programs',
      icon: '👔',
      color: '#6366f1',
      slug: 'management-level'
    },
    {
      title: 'Software Development',
      description: 'Full stack development, programming languages, web and mobile app development',
      icon: '💻',
      color: '#8b5cf6',
      slug: 'software-development'
    },
    {
      title: 'Soft Skills',
      description: 'Communication, leadership, teamwork, problem-solving and professional development skills',
      icon: '🤝',
      color: '#ec4899',
      slug: 'soft-skills'
    },
    {
      title: 'AI and Other Programs',
      description: 'Artificial Intelligence, Machine Learning, Data Science and emerging technology programs',
      icon: '🤖',
      color: '#10b981',
      slug: 'ai-programs'
    }
  ];
  const whyChooseItems = [
    {
      icon: '📚',
      number: '01',
      title: 'Expert-Led Courses',
      description: 'Our industry professionals bring years of real-world experience directly to the classroom, providing insights beyond textbooks'
    },
    {
      icon: '💼',
      number: '02',
      title: 'Hands-On Projects',
      description: 'Engage in practical, live projects that mirror real industry scenarios and build your professional portfolio'
    },
    {
      icon: '🎯',
      number: '03',
      title: 'Placement Assistance',
      description: 'Dedicated career support team helping you with interview prep, resume building, and job placement'
    },
    {
      icon: '🏆',
      number: '04',
      title: 'Industry Certifications',
      description: 'Receive recognized certifications from CISL and UAL that boost your professional credibility'
    }
  ];

  const features = [
    {
      icon: '👨‍💼',
      title: 'Industry Professionals',
      description: 'Learn from experts who bring real-world insights',
      bg: '/images/bg1.jpg'
    },
    {
      icon: '🚀',
      title: 'Live Projects',
      description: 'Engage in practical projects with real-world skills',
      bg: '/images/bg1.jpg'
    },
    {
      icon: '💼',
      title: 'Career Support',
      description: 'Dedicated placement assistance to help you succeed',
      bg: '/images/bg1.jpg'
    },
    {
      icon: '📈',
      title: 'Latest Technologies',
      description: 'Stay ahead with up-to-date industry trends',
      bg: '/images/bg1.jpg'
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
      title: 'Admission Open - Latest Batch Starting Soon',
      category: 'Announcement',
      date: 'Feb 10, 2026',
      image: '📢',
      color: '#ec4899'
    },
    {
      title: 'Internship Corner - New Opportunities with Tech Giants',
      category: 'Opportunities',
      date: 'Feb 8, 2026',
      image: '💼',
      color: '#8b5cf6'
    },
    {
      title: 'Exploring Future Possibilities of AI with Industry Leaders',
      category: 'Workshop',
      date: 'Feb 5, 2026',
      image: '🎓',
      color: '#6366f1'
    }
  ];

  return (
    <div className="home-page">
      <Hero />

      {/* About/Empowering Future Section */}
      <section className="home-about" ref={aboutRef}>
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <div className="stacked-images">

                <div className="card card-left">
                  <img src="https://i.pinimg.com/736x/b0/39/dd/b039dd3c928ce38226e30c128414e6eb.jpg" alt="img1" />
                </div>

                <div className="card card-center">
                  <img src="https://t3.ftcdn.net/jpg/07/52/08/12/360_F_752081227_nruXgif94zBL0Q4nYKNbrp0wQGvx6d6r.jpg" alt="img2" />
                </div>

                <div className="card card-right">
                  <img src="https://t3.ftcdn.net/jpg/16/21/80/52/360_F_1621805281_lZ5QvkFBUfQATJ8y5ld0JeDtW7Eifb0o.jpg" alt="img3" />
                </div>

              </div>
            </div>

            <div className="about-content">
              <span className="section-tag">About Company</span>
              <h2>Empowering Future Innovators</h2>
              <p>
                TechAngle is Kerala's leading training institute in Kochi, offering industry-relevant
                courses with expert instructors and real-world projects. We empower students with the
                skills and knowledge needed to excel in today's competitive tech landscape.
              </p>
              <ul className="about-features-list">
                <li>
                  <span className="check-icon">✓</span>
                  <div>
                    <strong>Straight to the point at first</strong>
                    <p>Expert-led courses with hands-on training</p>
                  </div>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <div>
                    <strong>Centralized and well-organized</strong>
                    <p>Comprehensive curriculum aligned with industry needs</p>
                  </div>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <div>
                    <strong>Growth of Reading or Research</strong>
                    <p>Continuous learning with updated course material</p>
                  </div>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <div>
                    <strong>Accessible for All Whether Old or New</strong>
                    <p>Welcoming environment for beginners and professionals</p>
                  </div>
                </li>
              </ul>
              <div className="about-badges">
                <div className="badge-item">
                  <span className="badge-icon">🎯</span>
                  <div>
                    <strong>Internship</strong>
                    <p>Opportunities</p>
                  </div>
                </div>
                <div className="badge-item">
                  <span className="badge-icon">🏅</span>
                  <div>
                    <strong>Industry</strong>
                    <p>Training</p>
                  </div>
                </div>
              </div>
              <Link to="/about">
                <button className="primary-btn">Read More</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations Section */}
      {/* Accreditations Section */}
      <section className="home-accreditations" ref={accreditationsRef}>
        <div className="container">
          <div className="section-header">
            <h2>TechAngle Accreditations</h2>
            <p>In association with <strong>Irez Academy</strong></p>
          </div>
          <div className="accreditations-grid">
            <div className="accreditation-badge">
              <a
                href="https://codingclarified.com/what-it-means-to-be-an-aapc-education-provider/"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: 'none', cursor: 'pointer' }}
              >
                <div className="badge-circle">
                  <span className="badge-text"><img src={AAPCLogo} style={{height:"100px"}}></img></span>
                  <span className="badge-text" style={{ display: 'none' }}><img src={AAPCLogo}></img></span>
                </div>
              </a>
              <p>AAPC Education Provider</p>
            </div>
            <div className="accreditation-badge">
              <a
                href="https://www.mkcl.org/"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: 'none', cursor: 'pointer' }}
              >
              <div className="badge-circle">
                <span className="badge-text"><img src={MKCLLogo} style={{height:"100px"}}></img></span>
                <span className="badge-text" style={{ display: 'none' }}><img src={MKCLLogo} style={{height:"100px"}}></img></span>
              </div>
              </a>
              <p>Maharashtra Knowledge Corporation Limited</p>
            </div>
            <div className="accreditation-badge">
              <a
                href="https://www.cisi.org/cisiweb2"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: 'none', cursor: 'pointer' }}
              >
              <div className="badge-circle">
                <img
                  src="https://www.cisi.org/cisiweb2/images/cisi-logo.png"
                  alt="CISI"
                  style={{ width: '80%', objectFit: 'contain' }}
                  onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }}
                />
                <span className="badge-text" style={{ display: 'none' }}><img src={CISILogo} style={{height:"100px"}}></img></span>
              </div>
              </a>
              <p>Chartered Institute for Securities & Investment</p>
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="home-stats">
        <div className="container">
          <div className="stats-grid">
            {[
              { number: '250+', label: 'Courses' },
              { number: '25+', label: 'Expert Trainers' },
              { number: '2800+', label: 'Students Trained' },
              { number: '100+', label: 'Hiring Partners' }
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
              <Link
                to={`/courses/${course.slug}`}
                key={i}
                style={{ textDecoration: 'none' }}
              >
                <div
                  className="home-course-card"
                  style={{ '--card-color': course.color }}
                >
                  <div className="course-icon">{course.icon}</div>
                  <h3 style={{ textAlign: "center" }}>{course.title}</h3>
                  <p style={{ textAlign: "center" }}>{course.description}</p>
                  <button className="learn-more-btn">
                    Learn More
                    <span className="arrow">→</span>
                  </button>
                </div>
              </Link>
            ))}
          </div>
          <div className="view-all-btn-container">
            <p className="courses-contact-text">
              Do You Have 2+ options that starting Feb 2026?
              <Link to="/contact"> Contact Us</Link>
            </p>
            <Link to="/courses">
              <button className="primary-btn">View All Courses</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="home-why-choose" ref={whyChooseRef}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">WHY CHOOSE US</span>
            <h2>Key Elements That Make Us Special</h2>
            <p>Discover what sets TechAngle apart from other training institutes</p>
          </div>

          <div className="why-choose-grid">
            {whyChooseItems.map((item, i) => (
              <div key={i} className="why-choose-card">
                <div className="card-number">{item.number}</div>
                <div className="card-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Callback Section */}
      <section className="home-callback" ref={callbackRef}>
        <div className="container">
          <div className="callback-grid">
            <div className="callback-image">
              <div className="image-placeholder">
                {/* <span className="image-icon"><img style={{ width: "100%", maxWidth: "300px", height: "auto" }} src="https://www.shutterstock.com/image-vector/headphone-customer-service-support-call-600nw-2602345185.jpg" alt="" /></span> */}
              </div>
            </div>
            <div className="callback-form">
              <h2>Request a Call Back</h2>
              <p>Have questions? We'll get right back to you!</p>

              {callbackStatus === 'success' ? (
                <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}></div>
                  <h3 style={{ color: '#4ade80', marginBottom: '0.5rem' }}>Message Sent!</h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                    We'll call you back shortly.
                  </p>
                  <button className="primary-btn" onClick={() => setCallbackStatus('idle')}>
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleCallbackSubmit} noValidate>
                  <input
                    type="text"
                    placeholder="Name *"
                    className="form-input"
                    value={callbackFields.name}
                    onChange={e => setCallbackFields({ ...callbackFields, name: e.target.value })}
                  />
                  <input
                    type="email"
                    placeholder="Email *"
                    className="form-input"
                    value={callbackFields.email}
                    onChange={e => setCallbackFields({ ...callbackFields, email: e.target.value })}
                  />
                  <input
                    type="tel"
                    placeholder="Phone *"
                    className="form-input"
                    value={callbackFields.phone}
                    onChange={e => setCallbackFields({ ...callbackFields, phone: e.target.value })}
                  />
                  <textarea
                    placeholder="Message"
                    className="form-textarea"
                    rows="4"
                    value={callbackFields.message}
                    onChange={e => setCallbackFields({ ...callbackFields, message: e.target.value })}
                  ></textarea>

                  {callbackStatus === 'error' && (
                    <p style={{ color: '#f87171', marginBottom: '1rem', fontSize: '0.9rem' }}>
                      ⚠️ Please fill in Name, Email and Phone.
                    </p>
                  )}

                  <button
                    type="submit"
                    className="primary-btn"
                    disabled={callbackStatus === 'sending'}
                  >
                    {callbackStatus === 'sending' ? 'Sending...' : 'Send Now'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="home-features" ref={featuresRef}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">WHAT WE OFFER</span>
            <h2>What Makes Us Different</h2>
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

      {/* News & Updates */}
      <section className="home-news" ref={newsRef}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Latest Updates</span>
            <h2>News & Updates</h2>
            <p>Stay informed with the latest news and announcements</p>
          </div>

          <div className="news-grid">
            {newsItems.map((news, i) => (
              <div key={i} className="news-card" style={{ '--news-color': news.color }}>
                <div className="news-icon">{news.image}</div>
                <span className="news-category">{news.category}</span>
                <h3>{news.title}</h3>
                <div className="news-footer">
                  <span className="news-date">{news.date}</span>
                  <Link to="/blog">
                    <button className="read-more-link">Read More →</button>
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
      <section className="home-cta">
        <div className="container">
          <div className="cta-content">
            <div className="cta-icon">💬</div>
            <h2>We are ready to help you</h2>
            <p>Ready to Transform Your Career?</p>
            <p>Join thousands of successful students and start your journey today</p>
            <div className="cta-buttons">
              <Link to="/contact">
                <button className="primary-btn">Contact Us</button>
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