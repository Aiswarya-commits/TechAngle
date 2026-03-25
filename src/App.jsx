import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Courses from './pages/Courses/Course';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';
import Careers from './pages/Careers/Careers';
import Success from './pages/Success/Success';
import ChatWidget from './components/ChatWidget/ChatWidget';
import CourseDetail from './pages/Courses/CourseDetail';
import FAQ from './components/FAQ/Index';
import Gallery from './pages/Gallary/Gallery';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/career" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/success" element={<Success />} />
          <Route path="/courses/:slug" element={<CourseDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          
        </Routes>
        <Footer />

        {/* Global Floating WhatsApp Button */}
        <a
          href="https://wa.me/917907372646?text=Hi%2C%20I%27m%20interested%20in%20your%20courses"
          target="_blank"
          rel="noreferrer"
          className="global-floating-wa"
          aria-label="WhatsApp"
          
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 2C6.477 2 2 6.477 2 12c0 1.9.524 3.67 1.43 5.185L2.01 22l4.9-1.395A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.95 7.95 0 01-4.045-1.101l-.29-.173-3.005.855.825-2.98-.19-.307A7.97 7.97 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z" />
          </svg>
        </a>
        <ChatWidget />

      </div>
    </Router>
  );
}

export default App;