/**
 * SuccessStories.jsx — TechAngle Success Stories Page
 *
 * Cards use real student PHOTOS as full background images.
 * If a student has no photo, a gradient + initials fallback is shown.
 *
 * HOW TO ADD PHOTOS:
 *   1. Import the photo at the top:   import AliceName from '../../assets/AliceName.jpeg';
 *   2. Add  img: AliceName  to that student's object in STUDENTS array
 *   3. Optionally set  imgPosition: 'center top'  to frame the face better
 */

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Success.css';

// ── Import all available student photos ───────────────────
import GopikaSreekumar from '../../assets/GopikaSreekumar.jpeg';
// Add more as you get them:
import JumanaMuhammed from '../../assets/JumanaMuhammed.jpeg';
import Thasniyoosaf from '../../assets/Thasniyoosaf.jpeg';
import Akshara from '../../assets/Akshara.jpeg';
import Nikil from '../../assets/Nikil.jpeg';
import Aiswarya from '../../assets/Aiswarya.jpeg';
import Najuma from '../../assets/Najuma.jpeg';
import Simina from '../../assets/Simina.jpeg';
import AshminJohnson from '../../assets/AshminJohnson.jpeg';
import Divya from '../../assets/Divya.jpeg';
import Anagha from '../../assets/Anagha.jpeg';
import Abhiram from '../../assets/Abhiram.jpeg';
import JijithaDevi from '../../assets/JijithaDevi.jpeg';
import Sananj from '../../assets/Sananj.jpeg';
import Swathy from '../../assets/Swathi.jpeg';
import Athulya from '../../assets/Athulya.jpeg';
import FathimaNasrin from '../../assets/FathimaNasrin.jpeg';
import Amal from '../../assets/Amal.jpeg';
import Alna from '../../assets/Alna.jpeg';
import Gowri from '../../assets/Gowri.jpeg';
import Vrindha from '../../assets/Vrindha.jpeg';
import Sehala from '../../assets/Sehala.jpeg';
import Arifa from '../../assets/Arifa.jpeg';
import ahsana from '../../assets/Ahsana.jpeg';
import DonsavioPauly from '../../assets/DonsavioPauly.jpeg';
import Sweety from '../../assets/Sweety.jpeg';
import Prethya from '../../assets/Prethya.jpeg';
import Aparna from '../../assets/Aparna.jpeg';
import Jijina from '../../assets/Jijina.jpeg';
import Sana from '../../assets/Sana.jpeg';
import Angelin from '../../assets/Angelin.jpeg';
import Hitha from '../../assets/Hitha.jpeg';
import Divyasree from '../../assets/Divyasree.jpeg';
import Karthik from '../../assets/Karthik.jpeg';
import Athulyas from '../../assets/Athulyas.jpeg';
import Nandana from '../../assets/Nandana.jpeg';
import Aleena from '../../assets/Aleena.jpeg';
import Meenakshi from '../../assets/Meenakshi.jpeg';
import Joshma from '../../assets/Joshma.jpeg';
import Gouri from '../../assets/Gouris.jpeg';
import Gayathri from '../../assets/Gayathri.jpeg';
import Ariya from '../../assets/Aria.jpeg';
import Anuraj from '../../assets/Anuraj.jpeg';
import Megha from '../../assets/Megha.jpeg';
import Chinnu from '../../assets/Chinnu.jpeg';
import Pic1 from '../../assets/Pic1.jpeg';
import Pic2 from '../../assets/Pic2.jpeg';
import Pic3 from '../../assets/Pic3.webp';
import Pic4 from '../../assets/Pic4.webp';
import Pic5 from '../../assets/Pic5.webp';
import Pic6 from '../../assets/Pic6.webp';
import Pic7 from '../../assets/Pic7.webp';
import Pic8 from '../../assets/Pic8.png';
import Pic9 from '../../assets/Pic9.png';
import Pic10 from '../../assets/Pic10.png';
import Pic11 from '../../assets/Pic11.png';
import Pic12 from '../../assets/Pic12.png';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

/* ─────────────────────────────────────────────────────
   STUDENTS DATA
   Fields:
     img          → imported photo asset  (use as bg image)
     imgPosition  → CSS background-position to frame the face (default 'center center')
     initials     → shown as large decorative text when NO photo
     grad         → fallback gradient when no photo
     accentColor  → per-card accent colour
───────────────────────────────────────────────────── */
const STUDENTS = [
  {
    id: 1,
    name: 'Hithah',
    img: Hitha,
    imgPosition: 'center top',
    role: 'SEO',
    company: 'Serah Travel & Tours Pvt.Ltd Kozhencherry, Pathanamthitta',
    quote: "TechAngle opened doors I never thought possible. I'm now working at my dream company!",
    grad: 'linear-gradient(160deg,#6366f1 0%,#312e81 60%,#0f172a 100%)',
    accentColor: '#818cf8',
  },
  {
    id: 1,
    name: 'Prethya Ranjen',
    img: Prethya,
    imgPosition: 'center top',
    role: 'SEO',
    company: 'SEO SPECIALIST, MP DOMINIC & CO.',
    quote: "Joining this course was the turning point in my career.",
    grad: 'linear-gradient(160deg,#6366f1 0%,#312e81 60%,#0f172a 100%)',
    accentColor: '#818cf8',
  },
  {
    id: 24,
    name: 'ahsana',
    initials: 'AM',
    img: ahsana,
    role: 'HR & Marketing',
    company: 'Northlux',
    quote: 'From zero experience to a full-time HR role — TechAngle made it possible!',
    grad: 'linear-gradient(160deg,#14b8a6 0%,#134e4a 60%,#0f172a 100%)',
    accentColor: '#5eead4',
  },
  {
    id: 1,
    name: 'Angelin Grace Johnson',
    img: Angelin,
    imgPosition: 'center top',
    role: 'Digital Marketing',
    company: 'Allianz, Technopark TVM',
    quote: "I came in with doubts and left with confidence and a job offer!",
    grad: 'linear-gradient(160deg,#6366f1 0%,#312e81 60%,#0f172a 100%)',
    accentColor: '#818cf8',
  },
  {
    id: 1,
    name: 'Megha',
    img: Megha,
    imgPosition: 'center top',
    role: 'HR & Marketing',
    company: 'Value Mentor AT Infopark koratty',
    quote: "This training completely transformed my skills and mindset.",
    grad: 'linear-gradient(160deg,#6366f1 0%,#312e81 60%,#0f172a 100%)',
    accentColor: '#818cf8',
  },
  // {
  //   id: 1,
  //   name: 'Sabari',
  //   img: Angelin,
  //   imgPosition: 'center top',
  //   role: 'HR & Marketing',
  //   company: 'Academy of Media and Design',
  //   quote: "I finally feel industry-ready thanks to this program.",
  //   grad: 'linear-gradient(160deg,#6366f1 0%,#312e81 60%,#0f172a 100%)',
  //   accentColor: '#818cf8',
  // },
  // {
  //   id: 1,
  //   name: 'Sreejaya',
  //   img: Angelin,
  //   imgPosition: 'center top',
  //   role: 'HR & Marketing',
  //   company: 'Academy of Media and Design',
  //   quote: "The experience here pushed me closer to my goals.",
  //   grad: 'linear-gradient(160deg,#6366f1 0%,#312e81 60%,#0f172a 100%)',
  //   accentColor: '#818cf8',
  // },
  {
    id: 1,
    name: 'Chinnu',
    img: Chinnu,
    imgPosition: 'center top',
    role: 'Junior Seo Specialist',
    company: 'LimeTea Media',
    quote: "I never imagined learning tech could be this practical and exciting.",
    grad: 'linear-gradient(160deg,#6366f1 0%,#312e81 60%,#0f172a 100%)',
    accentColor: '#818cf8',
  },
  {
    id: 29,
    name: 'Sana Fathima P M',
    initials: 'CH',
    img: Sana,
    role: 'SEO',
    company: 'Zero4studios',
    quote: 'The SEO curriculum at TechAngle is incredibly comprehensive.',
    grad: 'linear-gradient(160deg,#14b8a6 0%,#ec4899 60%,#0f172a 100%)',
    accentColor: '#6ee7b7',
  },
  {
    id: 1,
    name: 'Gopika Sreekumar',
    img: GopikaSreekumar,
    imgPosition: 'center top',
    // role: 'Digital Marketing',
    // company: 'Zenokstudios',
    quote: "Today I’m working professionally because of what I learned here.",
    grad: 'linear-gradient(160deg,#6366f1 0%,#312e81 60%,#0f172a 100%)',
    accentColor: '#818cf8',
  },
  {
    id: 2,
    name: 'Jumana Muhammed',
    initials: 'JU',
    img: JumanaMuhammed,
    imgPosition: 'center top',
    // company: 'Serah Travel & Tours Pvt Ltd',
    quote: 'TechAngle gave me real-world skills that helped me land my dream job in digital marketing!',
    grad: 'linear-gradient(160deg,#6366f1 0%,#312e81 60%,#0f172a 100%)',
    accentColor: '#818cf8',
  },
  {
    id: 3,
    name: 'Thasni Yoosaf',
    initials: 'TY',
    img: Thasniyoosaf,
    // role: 'HR & Marketing',
    // company: 'MF Dominic & Co.',
    quote: 'The training here is practical and industry-focused. I got placed within weeks!',
    grad: 'linear-gradient(160deg,#8b5cf6 0%,#4c1d95 60%,#0f172a 100%)',
    accentColor: '#c084fc',
  },
  {
    id: 4,
    name: 'Akshara',
    initials: 'AM',
    img: Akshara,
    // role: 'HR & Marketing',
    // company: 'Noritsa',
    quote: 'This course gave me the boost I needed to succeed.',
    grad: 'linear-gradient(160deg,#14b8a6 0%,#134e4a 60%,#0f172a 100%)',
    accentColor: '#5eead4',
  },
  {
    id: 5,
    name: 'Nikhil john george',
    initials: 'AG',
    img: Nikil,
    // role: 'Digital Marketing',
    // company: 'Allianz, Technopark TVM',
    quote: 'The mentors here are exceptional. They guided me every step of the way.',
    grad: 'linear-gradient(160deg,#f59e0b 0%,#92400e 60%,#0f172a 100%)',
    accentColor: '#fcd34d',
  },
  {
    id: 6,
    name: 'Aiswarya',
    initials: 'ME',
    img: Aiswarya,
    // role: 'HR & Marketing',
    // company: 'Value Mentor AF, Infopark',
    quote: "TechAngle's placement support is unmatched. They connected me with top companies.",
    grad: 'linear-gradient(160deg,#ec4899 0%,#831843 60%,#0f172a 100%)',
    accentColor: '#f9a8d4',
  },
  {
    id: 7,
    name: 'Najuma',
    initials: 'SA',
    img: Najuma,
    // role: 'HR & Marketing',
    // company: 'Academy of Media and Design',
    quote: 'Hands-on projects and real assignments gave me confidence to ace my interviews.',
    grad: 'linear-gradient(160deg,#6366f1 0%,#14b8a6 60%,#0f172a 100%)',
    accentColor: '#a5f3fc',
  },
  {
    id: 8,
    name: 'Simina',
    initials: 'SR',
    img: Simina,
    // role: 'HR & Marketing',
    // company: 'Academy of Media and Design',
    quote: "I joined as a fresher and left with a job offer. That's the TechAngle difference!",
    grad: 'linear-gradient(160deg,#8b5cf6 0%,#6366f1 60%,#0f172a 100%)',
    accentColor: '#a78bfa',
  },
  {
    id: 9,
    name: 'Ashmin Johnson',
    initials: 'CH',
    img: AshminJohnson,
    // role: 'Junior SEO Specialist',
    // company: 'Limerline Media',
    quote: 'The SEO curriculum at TechAngle is incredibly comprehensive.',
    grad: 'linear-gradient(160deg,#14b8a6 0%,#ec4899 60%,#0f172a 100%)',
    accentColor: '#6ee7b7',
  },
  {
    id: 10,
    name: 'Divya',
    initials: 'SN',
    img: Divya,
    // role: 'SEO Specialist',
    // company: 'Zenokstudios',
    quote: "I walked in as a beginner and walked out job-ready.",
    grad: 'linear-gradient(160deg,#f59e0b 0%,#8b5cf6 60%,#0f172a 100%)',
    accentColor: '#fde68a',
  },
  {
    id: 11,
    name: 'Anagha',
    img: Anagha,
    imgPosition: 'center top',
    // role: 'Digital Marketing',
    // company: 'Zenokstudios',
    quote: "The journey here truly changed my future.",
    grad: 'linear-gradient(160deg,#6366f1 0%,#312e81 60%,#0f172a 100%)',
    accentColor: '#818cf8',
  },
  {
    id: 12,
    name: 'Abhiram',
    initials: 'JU',
    img: Abhiram,
    imgPosition: 'center top',
    // company: 'Serah Travel & Tours Pvt Ltd',
    quote: 'I’m proud of how far I’ve come after this training.',
    grad: 'linear-gradient(160deg,#6366f1 0%,#312e81 60%,#0f172a 100%)',
    accentColor: '#818cf8',
  },
  {
    id: 13,
    name: 'Jijitha Devi',
    initials: 'JD',
    img: JijithaDevi,
    // role: 'HR & Marketing',
    // company: 'MF Dominic & Co.',
    quote: 'Every class brought me one step closer to my dream career.',
    grad: 'linear-gradient(160deg,#8b5cf6 0%,#4c1d95 60%,#0f172a 100%)',
    accentColor: '#c084fc',
  },
  {
    id: 14,
    name: 'Sananj P S',
    initials: 'AM',
    img: Sananj,
    // role: 'HR & Marketing',
    // company: 'Noritsa',
    quote: 'I gained real skills that employers actually look for.',
    grad: 'linear-gradient(160deg,#14b8a6 0%,#134e4a 60%,#0f172a 100%)',
    accentColor: '#5eead4',
  },
  {
    id: 15,
    name: 'Swathy S',
    initials: 'AG',
    img: Swathy,
    // role: 'Digital Marketing',
    // company: 'Allianz, Technopark TVM',
    quote: 'The mentors here are exceptional. They guided me every step of the way.',
    grad: 'linear-gradient(160deg,#f59e0b 0%,#92400e 60%,#0f172a 100%)',
    accentColor: '#fcd34d',
  },
  {
    id: 16,
    name: 'Athulya Abhilash',
    initials: 'ME',
    img: Athulya,
    // role: 'HR & Marketing',
    // company: 'Value Mentor AF, Infopark',
    quote: "TechAngle's placement support is unmatched.",
    grad: 'linear-gradient(160deg,#ec4899 0%,#831843 60%,#0f172a 100%)',
    accentColor: '#f9a8d4',
  },
  {
    id: 17,
    name: 'Fathima Nasrin',
    initials: 'FN',
    img: FathimaNasrin,
    // role: 'HR & Marketing',
    // company: 'Academy of Media and Design',
    quote: 'Hands-on projects and real assignments gave me confidence to ace my interviews.',
    grad: 'linear-gradient(160deg,#6366f1 0%,#14b8a6 60%,#0f172a 100%)',
    accentColor: '#a5f3fc',
  },
  {
    id: 18,
    name: 'Amal Varghese',
    initials: 'SR',
    img: Amal,
    // role: 'HR & Marketing',
    // company: 'Academy of Media and Design',
    quote: "The confidence I have today started from this course.",
    grad: 'linear-gradient(160deg,#8b5cf6 0%,#6366f1 60%,#0f172a 100%)',
    accentColor: '#a78bfa',
  },
  {
    id: 19,
    name: 'Alna',
    initials: 'CH',
    img: Alna,
    // role: 'Junior SEO Specialist',
    // company: 'Limerline Media',
    quote: 'This was more than a course — it was a career breakthrough.',
    grad: 'linear-gradient(160deg,#14b8a6 0%,#ec4899 60%,#0f172a 100%)',
    accentColor: '#6ee7b7',
  },
  {
    id: 20,
    name: 'Gouri S Kumar',
    initials: 'SN',
    img: Gowri,
    // role: 'SEO Specialist',
    // company: 'Zenokstudios',
    quote: "I now feel prepared to take on real industry challenges.",
    grad: 'linear-gradient(160deg,#f59e0b 0%,#8b5cf6 60%,#0f172a 100%)',
    accentColor: '#fde68a',
  },
  {
    id: 21,
    name: 'Vrindha S Nair',
    img: Vrindha,
    imgPosition: 'center top',
    // role: 'Digital Marketing',
    // company: 'Zenokstudios',
    quote: "The knowledge I gained here is priceless.",
    grad: 'linear-gradient(160deg,#6366f1 0%,#312e81 60%,#0f172a 100%)',
    accentColor: '#818cf8',
  },
  {
    id: 22,
    name: 'Sehala Sameer',
    initials: 'JU',
    img: Sehala,
    imgPosition: 'center top',
    // company: 'Serah Travel & Tours Pvt Ltd',
    quote: 'I finally found the right place to build my tech career.',
    grad: 'linear-gradient(160deg,#6366f1 0%,#312e81 60%,#0f172a 100%)',
    accentColor: '#818cf8',
  },
  {
    id: 23,
    name: 'Arifa U A',
    initials: 'TY',
    img: Arifa,
    // role: 'HR & Marketing',
    // company: 'MF Dominic & Co.',
    quote: 'The training here is practical and industry-focused.',
    grad: 'linear-gradient(160deg,#8b5cf6 0%,#4c1d95 60%,#0f172a 100%)',
    accentColor: '#c084fc',
  },

  {
    id: 25,
    name: 'Donsavio Pauly',
    initials: 'AG',
    img: DonsavioPauly,
    // role: 'Digital Marketing',
    // company: 'Allianz, Technopark TVM',
    quote: 'My skills improved faster than I ever expected.',
    grad: 'linear-gradient(160deg,#f59e0b 0%,#92400e 60%,#0f172a 100%)',
    accentColor: '#fcd34d',
  },
  {
    id: 26,
    name: 'Sweety P',
    initials: 'ME',
    img: Sweety,
    // role: 'HR & Marketing',
    // company: 'Value Mentor AF, Infopark',
    quote: "This experience helped me believe in my potential.",
    grad: 'linear-gradient(160deg,#ec4899 0%,#831843 60%,#0f172a 100%)',
    accentColor: '#f9a8d4',
  },
  {
    id: 27,
    name: 'Aparna N H',
    initials: 'SA',
    img: Aparna,
    // role: 'HR & Marketing',
    // company: 'Academy of Media and Design',
    quote: 'I’m grateful for the guidance that shaped my path.',
    grad: 'linear-gradient(160deg,#6366f1 0%,#14b8a6 60%,#0f172a 100%)',
    accentColor: '#a5f3fc',
  },
  {
    id: 28,
    name: 'Jijina',
    initials: 'SR',
    img: Jijina,
    // role: 'HR & Marketing',
    // company: 'Academy of Media and Design',
    quote: "The learning here made a real difference in my life.",
    grad: 'linear-gradient(160deg,#8b5cf6 0%,#6366f1 60%,#0f172a 100%)',
    accentColor: '#a78bfa',
  },

  {
    id: 10,
    name: 'Divya',
    initials: 'SN',
    img: Divya,
    // role: 'SEO Specialist',
    // company: 'Zenokstudios',
    quote: "I achieved goals I once thought were impossible.",
    grad: 'linear-gradient(160deg,#f59e0b 0%,#8b5cf6 60%,#0f172a 100%)',
    accentColor: '#fde68a',
  },
  {
    id: 10,
    name: 'Divyasree T Y',
    initials: 'SN',
    img: Divyasree,
    // role: 'SEO Specialist',
    // company: 'Zenokstudios',
    quote: "This was the smartest investment I made in myself",
    grad: 'linear-gradient(160deg,#f59e0b 0%,#8b5cf6 60%,#0f172a 100%)',
    accentColor: '#fde68a',
  },
  {
    id: 11,
    name: 'Karthik Balakrishnan',
    initials: 'KB',
    img: Karthik,
    // role: 'SEO Specialist',
    // company: 'Zenokstudios',
    quote: "TechAngle gave me the confidence to chase my dream career.",
    grad: 'linear-gradient(160deg,#f59e0b 0%,#8b5cf6 60%,#0f172a 100%)',
    accentColor: '#fde68a',
  },
  {
    id: 11,
    name: 'Athulya Sankar',
    initials: 'KB',
    img: Athulyas,
    // role: 'SEO Specialist',
    // company: 'Zenokstudios',
    quote: "This course changed my future for the better",
    grad: 'linear-gradient(160deg,#f59e0b 0%,#8b5cf6 60%,#0f172a 100%)',
    accentColor: '#fde68a',
  },
  {
    id: 11,
    name: 'Nandana P',
    initials: 'KB',
    img: Nandana,
    // role: 'SEO Specialist',
    // company: 'Zenokstudios',
    quote: "I’m now doing what I once thought was impossible.",
    grad: 'linear-gradient(160deg,#f59e0b 0%,#8b5cf6 60%,#0f172a 100%)',
    accentColor: '#fde68a',
  },
  {
    id: 12,
    name: 'Aleena Safar. K',
    initials: 'AS',
    img: Aleena,
    // role: 'SEO Specialist',
    // company: 'Zenokstudios',
    quote: "The skills I gained here opened real opportunities.",
    grad: 'linear-gradient(160deg,#f59e0b 0%,#8b5cf6 60%,#0f172a 100%)',
    accentColor: '#fde68a',
  },
  {
    id: 13,
    name: 'Meenakshi',
    initials: 'ME',
    img: Meenakshi,
    // role: 'SEO Specialist',
    // company: 'Zenokstudios',
    quote: "I finally feel confident calling myself a professional",
    grad: 'linear-gradient(160deg,#f59e0b 0%,#8b5cf6 60%,#0f172a 100%)',
    accentColor: '#fde68a',
  },
  {
    id: 14,
    name: 'Joshma',
    initials: 'JS',
    img: Joshma,
    // role: 'SEO Specialist',
    // company: 'Zenokstudios',
    quote: "This journey turned my passion into a career.",
    grad: 'linear-gradient(160deg,#f59e0b 0%,#8b5cf6 60%,#0f172a 100%)',
    accentColor: '#fde68a',
  },
  {
    id: 15,
    name: 'Gouri',
    initials: 'GO',
    img: Gouri,
    // role: 'SEO Specialist',
    // company: 'Zenokstudios',
    quote: "Learning here was the best decision I ever made.",
    grad: 'linear-gradient(160deg,#f59e0b 0%,#8b5cf6 60%,#0f172a 100%)',
    accentColor: '#fde68a',
  },
  {
    id: 15,
    name: 'Gayathri',
    initials: 'GA',
    img: Gayathri,
    // role: 'SEO Specialist',
    // company: 'Zenokstudios',
    quote: "My career started the day I joined this program.",
    grad: 'linear-gradient(160deg,#f59e0b 0%,#8b5cf6 60%,#0f172a 100%)',
    accentColor: '#fde68a',
  },
  {
    id: 16,
    name: 'A Ariya sasi',
    initials: 'AS',
    img: Ariya,
    // role: 'SEO Specialist',
    // company: 'Zenokstudios',
    quote: "I’m now working in a role I always dreamed about.",
    grad: 'linear-gradient(160deg,#f59e0b 0%,#8b5cf6 60%,#0f172a 100%)',
    accentColor: '#fde68a',
  },
  {
    id: 17,
    name: 'Anuraj K R',
    initials: 'AN',
    img: Anuraj,
    // role: 'SEO Specialist',
    // company: 'Zenokstudios',
    quote: "This training truly unlocked my potential.",
    grad: 'linear-gradient(160deg,#f59e0b 0%,#8b5cf6 60%,#0f172a 100%)',
    accentColor: '#fde68a',
  },

];

/* ─────────────────────────────────────────────────────
   TESTIMONIALS
───────────────────────────────────────────────────── */
const TESTIMONIALS = [
  {
    id: 1, name: 'Prethya Ranjan', initials: 'PR',
    role: 'SEO Specialist', company: 'MF Dominic & Co.', stars: 5,
    grad: 'linear-gradient(135deg,#8b5cf6,#ec4899)',
    text: 'The curriculum at TechAngle is carefully designed with industry needs in mind. Every module gave me tangible skills I use every day at work. Absolutely worth it!',
  },
  {
    id: 2, name: 'Angelin Grace Johnson', initials: 'AG',
    role: 'Digital Marketing Executive', company: 'Allianz, Technopark TVM', stars: 5,
    grad: 'linear-gradient(135deg,#f59e0b,#ef4444)',
    text: "TechAngle's counselors were supportive throughout my career transition. The practical exposure and mock interviews made me job-ready faster than I expected.",
  },
  {
    id: 3, name: 'Sabari', initials: 'SA',
    role: 'HR & Marketing Executive', company: 'Academy of Media and Design', stars: 5,
    grad: 'linear-gradient(135deg,#6366f1,#14b8a6)',
    text: "What sets TechAngle apart is how they treat students like professionals from day one. Real projects, real deadlines, and real feedback. I've grown more here than anywhere else.",
  },
  {
    id: 4, name: 'Ahsana Mp', initials: 'AM',
    role: 'HR & Marketing', company: 'Noritsa', stars: 5,
    grad: 'linear-gradient(135deg,#14b8a6,#6366f1)',
    text: "TechAngle helped me discover my passion for HR. The trainers were experienced, patient, and always available. I couldn't have asked for a better start to my career.",
  },
  {
    id: 5, name: 'Chinnu', initials: 'CH',
    role: 'Junior SEO Specialist', company: 'Limerline Media', stars: 5,
    grad: 'linear-gradient(135deg,#14b8a6,#ec4899)',
    text: 'The SEO course was incredibly detailed — from on-page to technical SEO. The placement team worked tirelessly to get me hired. So grateful!',
  },
  {
    id: 6, name: 'Megha', initials: 'ME',
    role: 'HR & Marketing', company: 'Value Mentor AF, Infopark Society', stars: 5,
    grad: 'linear-gradient(135deg,#ec4899,#8b5cf6)',
    text: "TechAngle's network is amazing. Through their placement cell I connected with top companies across Kerala. Within 3 months I had my first job offer.",
  },
];

/* ─────────────────────────────────────────────────────
   GALLERY
───────────────────────────────────────────────────── */
const GALLERY = [
  { id: 1, src: Pic1, alt: 'TechAngle' },
  { id: 2, src: Pic2, alt: 'Certified student 2' },
  { id: 3, src: Pic3, alt: 'Certified student 3' },
  { id: 4, src: Pic4, alt: 'Certified student 4' },
  { id: 5, src: Pic5, alt: 'Certified student 5' },
  { id: 6, src: Pic6, alt: 'Certified student 6' },
  { id: 7, src: Pic7, alt: 'Certified student 7' },
  { id: 8, src: Pic8, alt: 'Certified student 8' },
  { id: 9, src: Pic9, alt: 'Certified student 9' },
  { id: 10, src: Pic10, alt: 'Certified student 10' },
  { id: 11, src: Pic11, alt: 'Certified student 11' },
  { id: 12, src: Pic12, alt: 'Certified student 12' },
];

const METRICS = [
  { icon: '🎓', num: '3500+', label: 'Students Trained' },
  { icon: '💼', num: '200+', label: 'Students Placed' },
  { icon: '🏢', num: '80+', label: 'Partner Companies' },
  { icon: '⭐', num: '4.9', label: 'Average Rating' },
  { icon: '📍', num: '10+', label: 'Cities Reached' },
];

/* ─────────────────────────────────────────────────────
   LIGHTBOX
───────────────────────────────────────────────────── */
function Lightbox({ images, index, onClose, onNav }) {
  const isOpen = index !== null;
  useEffect(() => {
    const h = e => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNav(-1);
      if (e.key === 'ArrowRight') onNav(1);
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [onClose, onNav]);

  return (
    <div className={`ss-lightbox${isOpen ? ' is-open' : ''}`}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      {isOpen && (
        <div className="ss-lightbox__inner">
          <img className="ss-lightbox__img" src={images[index]?.src} alt={images[index]?.alt} />
          <button className="ss-lightbox__close" onClick={onClose}>✕</button>
          <button className="ss-lightbox__nav ss-lightbox__nav--prev" onClick={() => onNav(-1)}>‹</button>
          <button className="ss-lightbox__nav ss-lightbox__nav--next" onClick={() => onNav(1)}>›</button>
          <div className="ss-lightbox__counter">{index + 1} / {images.length}</div>
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────
   PROFILE CARD — photo bg OR gradient fallback
───────────────────────────────────────────────────── */
function ProfileCard({ s }) {
  const hasPhoto = Boolean(s.img);
  return (
    <div className="ss-profile-card" style={{ '--accent': s.accentColor }}>

      {/* Visual background — PHOTO or GRADIENT */}
      {hasPhoto ? (
        <div
          className="ss-profile-card__photo"
          style={{
            backgroundImage: `url(${s.img})`,
            backgroundPosition: s.imgPosition || 'center center',
            backgroundSize: 'cover',
          }}
        />
      ) : (
        <div className="ss-profile-card__grad" style={{ background: s.grad }}>
          <span className="ss-profile-card__bg-initial">{s.initials}</span>
        </div>
      )}

      {/* Dark gradient scrim — sharpens text readability */}
      <div className="ss-profile-card__scrim" />

      {/* Placed badge */}
      <div className="ss-profile-card__badge">✓ Certified</div>

      {/* Name + role at bottom — always visible */}
      <div className="ss-profile-card__info">
        <span className="ss-profile-card__role-pill">{s.role}</span>
        <h3 className="ss-profile-card__name">{s.name}</h3>
        <p className="ss-profile-card__company">{s.company}</p>
      </div>

      {/* Hover quote panel */}
      <div className="ss-profile-card__hover">
        <div className="ss-profile-card__qmark">"</div>
        <p className="ss-profile-card__quote">{s.quote}</p>
        <span className="ss-profile-card__hover-name">— {s.name}</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────── */
export default function SuccessStories() {
  const heroRef = useRef(null);
  const bgRef = useRef(null);
  const ranAnim = useRef(false);
  const [lightboxIdx, setLightboxIdx] = useState(null);
  const openLightbox = idx => setLightboxIdx(idx);
  const closeLightbox = useCallback(() => setLightboxIdx(null), []);
  const navLightbox = useCallback(dir =>
    setLightboxIdx(p => p === null ? null : (p + dir + GALLERY.length) % GALLERY.length), []);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (ranAnim.current) return;
    ranAnim.current = true;

    // Parallax hero
    if (bgRef.current && heroRef.current) {
      gsap.to(bgRef.current, {
        yPercent: 35, ease: 'none',
        scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: 1.5 },
      });
    }

    // Hero text
    gsap.timeline({ delay: 0.15, defaults: { ease: 'expo.out' } })
      .from('.ss-hero__badge', { y: 30, opacity: 0, duration: 0.7 })
      .from('.ss-hero__line1', { y: 60, opacity: 0, duration: 0.9 }, '-=0.35')
      .from('.ss-hero__line2', { y: 60, opacity: 0, duration: 0.9 }, '-=0.7')
      .from('.ss-hero__sub', { y: 30, opacity: 0, duration: 0.7 }, '-=0.6')
      .from('.ss-hero__stats-pill', { y: 20, opacity: 0, duration: 0.5, stagger: 0.1 }, '-=0.4')
      .from('.ss-hero__scroll', { opacity: 0, duration: 0.6 }, '-=0.2');

    // Section headers
    gsap.utils.toArray('.ss-section-hd').forEach(el => {
      gsap.from(el.children, {
        y: 36, opacity: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      });
    });

    // Profile cards
    ScrollTrigger.batch('.ss-profile-card', {
      onEnter: batch => gsap.fromTo(batch,
        { y: 80, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.85, stagger: 0.1, ease: 'expo.out' }),
      once: true, start: 'top 92%',
    });

    // Metrics
    gsap.from('.ss-metric', {
      y: 50, opacity: 0, scale: 0.88, duration: 0.75,
      stagger: { each: 0.12, from: 'center' }, ease: 'back.out(1.5)',
      scrollTrigger: { trigger: '.ss-metrics', start: 'top 87%', once: true },
    });

    // Testimonials
    ScrollTrigger.batch('.ss-tcard', {
      onEnter: batch => gsap.from(batch, { x: 60, opacity: 0, duration: 0.75, stagger: 0.1, ease: 'expo.out' }),
      once: true, start: 'top 90%',
    });

    // Gallery
    ScrollTrigger.batch('.ss-gallery__item', {
      onEnter: batch => gsap.from(batch, { scale: 0.85, opacity: 0, duration: 0.6, stagger: 0.05, ease: 'power3.out' }),
      once: true, start: 'top 93%',
    });

    // CTA
    gsap.from('.ss-cta__box', {
      y: 60, opacity: 0, scale: 0.96, duration: 1, ease: 'expo.out',
      scrollTrigger: { trigger: '.ss-cta', start: 'top 88%', once: true },
    });

    // Orb parallax
    gsap.utils.toArray('.ss-deco').forEach((el, i) => {
      gsap.to(el, {
        yPercent: i % 2 === 0 ? -40 : 40, ease: 'none',
        scrollTrigger: { trigger: el.closest('section') || el, start: 'top bottom', end: 'bottom top', scrub: 2 },
      });
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
    <div className="ss-page">

      {/* HERO */}
      <section className="ss-hero" ref={heroRef}>
        <div className="ss-hero__bg" ref={bgRef} />
        <div className="ss-hero__overlay" />
        <div className="ss-deco ss-orb ss-orb--1" />
        <div className="ss-deco ss-orb ss-orb--2" />
        <div className="ss-deco ss-orb ss-orb--3" />
        <div className="ss-hero__grid-lines" />
        <div className="ss-hero__content">
          <div className="ss-hero__badge"><span className="ss-hero__badge-dot" />Student Achievements</div>
          <h1 className="ss-hero__title">
            <span className="ss-hero__line1">Real People,</span>
            <span className="ss-hero__line2"><em>Real Success</em></span>
          </h1>
          <p className="ss-hero__sub">
            Our students are placed at top companies across Kerala and India.
            Every story here is proof that the right training changes lives.
          </p>
          <div className="ss-hero__pills">
            {[['3500+', 'Trained'], ['200+', 'Placed'], ['80+', 'Companies'], ['4.9★', 'Rating']].map(([n, l]) => (
              <div key={l} className="ss-hero__stats-pill">
                <span className="ss-hero__pill-n">{n}</span>
                <span className="ss-hero__pill-l">{l}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="ss-hero__scroll"><div className="ss-hero__scroll-line" /><span>Scroll</span></div>
      </section>

      {/* PLACED STUDENTS */}
      <section className="ss-placed">
        <div className="ss-deco ss-placed__orb" />
        <div className="ss-section-hd">
          <div className="ss-eyebrow">Placements</div>
          <h2 className="ss-section-title">Placed Students from TechAngle</h2>
          <p className="ss-section-desc">Hover over any card to see their story. These are just a few of the hundreds of lives TechAngle has transformed.</p>
        </div>
        <div className="ss-profiles">
          {STUDENTS.map(s => <ProfileCard key={s.id} s={s} />)}
        </div>
      </section>

      {/* METRICS */}
      <section className="ss-metrics">
        <div className="ss-deco ss-metrics__deco" />
        <div className="ss-metrics__inner">
          {METRICS.map(m => (
            <div key={m.label} className="ss-metric">
              <span className="ss-metric__icon">{m.icon}</span>
              <span className="ss-metric__num">{m.num}</span>
              <span className="ss-metric__label">{m.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="ss-testimonials">
        <div className="ss-section-hd">
          <div className="ss-eyebrow ss-eyebrow--pink">In Their Own Words</div>
          <h2 className="ss-section-title">What Our Students Say</h2>
          <p className="ss-section-desc">Don't just take our word for it — hear directly from the people whose lives TechAngle has helped shape.</p>
        </div>
        <div className="ss-tslider">
          {TESTIMONIALS.map(t => (
            <div key={t.id} className="ss-tcard">
              <div className="ss-tcard__glow" style={{ background: t.grad }} />
              <div className="ss-tcard__top">
                <div className="ss-tcard__av" style={{ background: t.grad }}>{t.initials}</div>
                <div>
                  <div className="ss-tcard__name">{t.name}</div>
                  <div className="ss-tcard__role">{t.role}</div>
                  <div className="ss-tcard__company">{t.company}</div>
                </div>
              </div>
              <div className="ss-tcard__stars">{'⭐'.repeat(t.stars)}</div>
              <p className="ss-tcard__text">"{t.text}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      {/* <section className="ss-gallery">
        <div className="ss-section-hd">
          <div className="ss-eyebrow ss-eyebrow--teal">Photo Gallery</div>
          <h2 className="ss-section-title">Our Proud Certified Students</h2>
          <p className="ss-section-desc">Click any photo to view full size. These moments capture the pride and joy of achieving certification at TechAngle.</p>
        </div>
        <div className="ss-gallery__grid">
          {GALLERY.map((img, idx) => (
            <div key={img.id} className="ss-gallery__item"
              onClick={() => openLightbox(idx)} role="button" tabIndex={0}
              aria-label={`View ${img.alt}`}
              onKeyDown={e => e.key === 'Enter' && openLightbox(idx)}>
              <img className="ss-gallery__img" src={img.src} alt={img.alt} loading="lazy" />
              <div className="ss-gallery__shimmer" />
              <div className="ss-gallery__zoom">⤢</div>
            </div>
          ))}
        </div>
      </section> */}

      {/* CTA */}
      <div className="ss-cta">
        <div className="ss-cta__box">
          <div className="ss-cta__orb" />
          <div className="ss-cta__tag">Start Today</div>
          <h2 className="ss-cta__title">Ready to Write Your Own<br /><em>Success Story?</em></h2>
          <p className="ss-cta__desc">Join hundreds of students who transformed their careers with TechAngle. Enroll today and take the first step toward your future.</p>
          <a href="#courses" className="ss-cta__btn">
            <Link to="/contact">Enroll Now</Link>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
        </div>
      </div>

      <Lightbox images={GALLERY} index={lightboxIdx} onClose={closeLightbox} onNav={navLightbox} />
    </div>
  );
}