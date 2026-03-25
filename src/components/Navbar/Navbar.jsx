import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import './Navbar.css';

gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="logo" onClick={scrollToTop}>
          <span className="logo-text">Tech</span>
          <span className="logo-accent">Angle</span>
        </Link>

        <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={scrollToTop}>Home</Link>
          <Link to="/about" onClick={scrollToTop}>About</Link>
          <Link to="/courses" onClick={scrollToTop}>Courses</Link>
          <Link to="/success" onClick={scrollToTop}>Success Stories</Link>
          <Link to="/gallery" onClick={scrollToTop}>Gallery</Link>
          <Link to="/blog" onClick={scrollToTop}>Blog</Link>
          <Link to="/faq" onClick={scrollToTop}>FAQ</Link>
          <Link to="/career" onClick={scrollToTop}>Career</Link>
          <Link to="/contact" onClick={scrollToTop}>Contact</Link>
        </div>

        <Link to="/contact" onClick={scrollToTop}>
          <button className="cta-button">Enroll Now</button>
        </Link>

        <div
          className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;