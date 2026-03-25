import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Blog.css';
import BlogPost from './BlogPost';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

/* ── Data ─────────────────────────────────────────────── */
const BLOG_POSTS = [
  {
    id: 'medical-coding-career-paths',
    title: "Medical Coding Career Paths You Didn't Know About",
    excerpt:
      'When most people think about medical coding they imagine typing codes all day. There are exciting specializations that most people never hear about — explore all 15 of them.',
    category: 'Medical Coding',
    date: 'August 14, 2025',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&q=80',
    tags: ['medical coding', 'healthcare careers', 'career paths', 'EHR coder'],
    content: {
      intro:
        "When most people hear about medical coding they imagine someone sitting at a desk typing procedure codes all day. But the reality is far more dynamic. Medical coding is a field brimming with specializations that most newcomers never discover until they're already deep in their careers.\n\nIf you're considering a career in medical coding, or you're already a coder looking to grow, here's a treasure trove of 15 medical coding career paths you probably didn't know exist.",
      sections: [
        { title: '1. Medical Auditor', body: 'Reviews healthcare claims to ensure accuracy, compliance, and proper reimbursement. Combines coding knowledge with investigative skills.', skills: 'Healthcare knowledge, attention to detail, billing and compliance standards' },
        { title: '2. Clinical Documentation Improvement Specialist (CDIS)', body: "Works directly with physicians to ensure clinical documentation accurately reflects the patient's condition and supports coded diagnoses.", skills: 'Detail orientation, communication, clinical documentation, compliance awareness' },
        { title: '3. Coding Compliance Officer', body: 'Ensures that coding practices within a healthcare organization comply with all legal and ethical standards.', skills: 'Healthcare regulations, ethical judgment, leadership and compliance expertise' },
        { title: '4. Health Information Analyst', body: 'Analyzes coded health data to find trends, improve patient outcomes, and support organizational decision-making.', skills: 'Data analysis, health informatics, critical thinking and interpretation' },
        { title: '5. Medical Coding Educator/Trainer', body: 'Trains and mentors new coders, develops curricula, and updates staff on coding changes.', skills: 'Teaching skills, broad coding knowledge, communication and leadership' },
        { title: '6. Risk Adjustment Coder', body: 'Codes for risk adjustment programs to ensure payers and providers capture the true complexity of patient populations.', skills: 'ICD-10, CMS-HCC, risk adjustment coding, and documentation review' },
        { title: '7. Telehealth Coding Specialist', body: 'Codes for telehealth services and navigates the unique rules that govern remote patient care billing.', skills: 'Telehealth billing, CPT modifiers, HCPCS, and telehealth-specific compliance' },
        { title: '8. Medical Research Data Coder', body: 'Works in clinical research to code patient data for research studies, clinical trials, and public health databases.', skills: 'Research coding systems, clinical data management and analysis' },
        { title: '9. EHR Implementation Specialist', body: 'Assists healthcare organizations in implementing or upgrading EHR systems with coding accuracy in mind.', skills: 'EHR platforms, implementation best practices, coding-to-system translation' },
        { title: '10. DRG (Diagnosis-Related Group) Coder', body: 'Specializes in inpatient coding for hospital reimbursement through the DRG payment system.', skills: 'ICD-10-PCS, DRG groupers, inpatient coding for hospital payments' },
        { title: '11. Outpatient Surgery Coder', body: 'Focuses exclusively on coding procedures performed in ambulatory surgery settings.', skills: 'CPT surgery coding, outpatient guidelines, ambulatory surgery practices' },
        { title: '12. Medical Coding Auditor for International Markets', body: 'Works with global healthcare facilities to align coding practices with international coding systems like ICD-11.', skills: 'ICD-11, various coding systems, cross-cultural and international compliance' },
        { title: '13. Fraud Investigation Coding Specialist', body: 'Works with law enforcement or compliance departments to identify fraudulent billing patterns in healthcare.', skills: 'Compliance, investigative techniques, legal understanding of healthcare fraud' },
        { title: '14. Coding Software Quality Analyst', body: 'Tests and improves medical coding software to ensure it provides accurate code suggestions and workflow efficiency.', skills: 'Software testing, coding knowledge, quality assurance and reporting' },
        { title: '15. Public Health Data Coder', body: 'Codes health information for population studies, government health programs, and epidemiological research.', skills: 'Epidemiological coding, public health data management and population health systems' },
      ],
      gettingStarted: [
        { step: 'Earn a recognized certification', detail: 'CPC, CCS, or other industry-recognized certifications' },
        { step: 'Build strong medical knowledge', detail: 'Anatomy, physiology, medical terminology' },
        { step: 'Stay updated', detail: 'Subscribe to AAPC, AHIMA, and other professional resources' },
        { step: 'Network', detail: 'Join AAPC, AHIMA, or other professional organizations' },
      ],
      conclusion:
        "The medical coding field is far more diverse than most people realize. Whether you want to work in research, compliance, education, or fraud prevention, there's a coding specialty that can fit your passion. The key is to start with a strong foundation and keep exploring.",
    },
  },
  {
    id: 'college-to-career-non-it',
    title: 'From College to Career: A Guide for Non-IT Students to Break Into the Tech World!',
    excerpt:
      "Think a tech career is only for CS graduates? Think again. Here's a comprehensive guide for non-IT students to confidently break into the tech world.",
    category: 'Career Development',
    date: 'June 24, 2025',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80',
    tags: ['career development', 'non-IT', 'tech careers', 'student support'],
    content: {
      intro:
        "Think tech careers are only for engineers or computer science grads? Think again. If your career focus is on building a future in technology, you don’t need a traditional IT degree to get started. Here’s the good news — what truly matters is curiosity, commitment, and the right direction. The tech industry today is more inclusive and diverse than ever. Companies actively seek talent from various academic backgrounds because they understand that the best ideas come from diverse perspectives. Whether you're from arts, commerce, humanities, business, or science — there’s a meaningful space for you in tech. This guide is specially crafted for non-IT students who want to step confidently into the tech industry but aren’t sure where or how to begin. Whether you’re in college, a recent graduate, or considering a career switch, this guide will give you a clear, actionable roadmap to get started.",
      sections: [
        { title: '1. Why Your Background Is an Asset, Not a Barrier', body: 'Your academic and life experiences offer a unique perspective that tech companies value. Diverse thinking leads to better innovation and problem-solving.You already possess transferable skills like communication, critical thinking, and problem-solving.' },
        { title: '2. Beginner-Friendly Tech Careers You Can Explore (No Coding Required!)', body: "Explore in-demand roles that don’t require a technical degree: • UI/UX Designer • Digital Marketing Specialist • SEO Analyst • Data Analyst • Quality Assurance Tester • Technical Support Specialist • Product/Project Coordinator • Content Strategist These roles combine creativity, communication, and business acumen — perfect for non-tech backgrounds." },
        { title: '3. Learn the Smart Way: Affordable, Flexible Upskilling Paths', body: 'Take advantage of platforms like Coursera, Udemy, and LinkedIn Learning,Join beginner-friendly bootcamps and certification programs, Choose free or low-cost options and learn at your own pace, Focus on tools and skills aligned with your target role.' },
        { title: '4. Real-World Experience Without a Tech Degree', body: 'Gain practical experience through: Freelancing on platforms like Fiverr or Upwork, Online internships with startups and NGOs, Participating in hackathons and virtual challenges, Creating personal projects or contributing to open-source initiatives' },
        { title: '5. How to Build a Job-Winning Resume and Ace Tech Interviews', body: 'Highlight your transferable skills and hands-on projects, Tailor your resume to each role you apply for, Include certifications and any real-world learning experiences, Practice behavioral and situational interview questions.' },
        { title: '6. Real-Life Success Stories', body: 'Commerce graduates thriving as digital marketers, Arts and humanities students excelling in UI/UX design, Science graduates transitioning into data analytics and QA roles.' },
        { title: '7. This Guide Is for You If:', body: 'You’ve always been curious about tech but didn’t know where to begin, You want a career with growth, creativity, and flexibility, You’re ready to learn, adapt, and explore new possibilities, You’re seeking practical guidance — not just theory' },
        { title: '8. Final Word: You Don’t Need to Be a Coder to Build a Tech Career', body: 'All you need is the right mindset and a roadmap. This guide is your starting point — to recognize the skills you already have, identify what you need to learn, and take that confident first step into a fulfilling career in tech.' },
        // { title: '9. EHR Implementation Specialist', body: 'Assists healthcare organizations in implementing or upgrading EHR systems with coding accuracy in mind.', skills: 'EHR platforms, implementation best practices, coding-to-system translation' },
        // { title: '10. DRG (Diagnosis-Related Group) Coder', body: 'Specializes in inpatient coding for hospital reimbursement through the DRG payment system.', skills: 'ICD-10-PCS, DRG groupers, inpatient coding for hospital payments' },
        // { title: '11. Outpatient Surgery Coder', body: 'Focuses exclusively on coding procedures performed in ambulatory surgery settings.', skills: 'CPT surgery coding, outpatient guidelines, ambulatory surgery practices' },
        // { title: '12. Medical Coding Auditor for International Markets', body: 'Works with global healthcare facilities to align coding practices with international coding systems like ICD-11.', skills: 'ICD-11, various coding systems, cross-cultural and international compliance' },
        // { title: '13. Fraud Investigation Coding Specialist', body: 'Works with law enforcement or compliance departments to identify fraudulent billing patterns in healthcare.', skills: 'Compliance, investigative techniques, legal understanding of healthcare fraud' },
        // { title: '14. Coding Software Quality Analyst', body: 'Tests and improves medical coding software to ensure it provides accurate code suggestions and workflow efficiency.', skills: 'Software testing, coding knowledge, quality assurance and reporting' },
        // { title: '15. Public Health Data Coder', body: 'Codes health information for population studies, government health programs, and epidemiological research.', skills: 'Epidemiological coding, public health data management and population health systems' },
      ],
      // gettingStarted: [
      //   { step: 'Earn a recognized certification', detail: 'CPC, CCS, or other industry-recognized certifications' },
      //   { step: 'Build strong medical knowledge', detail: 'Anatomy, physiology, medical terminology' },
      //   { step: 'Stay updated', detail: 'Subscribe to AAPC, AHIMA, and other professional resources' },
      //   { step: 'Network', detail: 'Join AAPC, AHIMA, or other professional organizations' },
      // ],
      // conclusion:
      //   "The medical coding field is far more diverse than most people realize. Whether you want to work in research, compliance, education, or fraud prevention, there's a coding specialty that can fit your passion. The key is to start with a strong foundation and keep exploring.",
    },
  },
  {
    id: 'admissions-open-latest-batch',
    title: 'Admissions Open – Latest Batch Starting Soon!',
    excerpt:
      "Exciting news! TechAngle is opening admissions for its latest batch. Seats are filling fast — register now and take the first step toward your future.",
    category: 'Education',
    date: 'May 31, 2025',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=700&q=80',
    tags: ['admissions', 'batch', 'enrollment', 'register'],
    content: {
      intro:
        "Career is your next step! Moreover, Techangle is thrilled to announce that admissions are now open for our latest career-focused, skill-based training programs, which will effectively help you grow your career.",
      sections: [
        { title: '1. Search Engine Optimization (SEO)', body: 'Learn how to improve website rankings on Google and moreover, other search engines.Gain skills in digital marketing, which consequently is highly demanded by businesses worldwide.Understand tools like Google Analytics, Search Console, and keyword research software. Additionally, these tools help track and improve performance.Open doors to careers in marketing agencies, startups, freelancing, and content creation. Moreover, these opportunities can lead to long-term growth.Potential to earn through freelance SEO projects or consultancy. Furthermore, this allows flexibility and independence.' },
        { title: '2. Medical Coding', body: "Get certified in internationally recognized medical coding standards (ICD, CPT, HCPCS). Similarly, this enhances your professional credibility.Join the global healthcare industry with remote job opportunities. Moreover, this field offers stability and growth.Understand medical terminology, anatomy, and insurance claim processes. In addition, these skills build a strong foundation for medical coding.High demand for trained medical coders in hospitals, insurance companies, and billing firms. Consequently, skilled professionals enjoy better job security.Stable and well-paying career with scope for growth. Therefore, it attracts many aspiring professionals." },
        { title: '3. Web Designing & Development', body: 'Build creative and responsive websites from scratch using HTML, CSS, JavaScript, and more. Additionally, this skill makes you stand out in the tech industry.Learn front-end and basic back-end development for full website projects. Furthermore, this knowledge helps you become a versatile developer.Ideal for freelancing, startups, or working with IT companies. Thus, it opens multiple career pathways.Hands-on project experience that boosts your portfolio and employability. Indeed, it gives you an edge in the job market.These fields are highly in demand, and companies are looking for skilled professionals like you! Hence, pursuing them can secure your future.' },
        { title: '4. What You Will Gain', body: 'Industry-relevant curriculum. Moreover, it keeps you aligned with the latest market needs.Practical training with real-time projects. Additionally, it helps you gain job-ready experience.Hands-on experience with tools & software. Likewise, it enhances your practical skills.One-on-one mentorship from expert trainers. Furthermore, it ensures personalized guidance for better learning.Internship & placement support. Finally, it bridges the gap between learning and employment.Certification that adds value to your resume. Indeed, it strengthens your professional profile.' },
        { title: '5. What Career Benefits You Will Gain', body: 'College students looking to add extra skills can benefit greatly. Moreover, freshers who want to enter job-ready domains gain practical experience. Similarly, career switchers seeking a new direction find guidance to transition successfully. Additionally, freelancers and entrepreneurs who want to grow can leverage these opportunities to expand their professional horizons.' },
        // { title: '6. Risk Adjustment Coder', body: 'Codes for risk adjustment programs to ensure payers and providers capture the true complexity of patient populations.', skills: 'ICD-10, CMS-HCC, risk adjustment coding, and documentation review' },
        // { title: '7. Telehealth Coding Specialist', body: 'Codes for telehealth services and navigates the unique rules that govern remote patient care billing.', skills: 'Telehealth billing, CPT modifiers, HCPCS, and telehealth-specific compliance' },
        // { title: '8. Medical Research Data Coder', body: 'Works in clinical research to code patient data for research studies, clinical trials, and public health databases.', skills: 'Research coding systems, clinical data management and analysis' },
        // { title: '9. EHR Implementation Specialist', body: 'Assists healthcare organizations in implementing or upgrading EHR systems with coding accuracy in mind.', skills: 'EHR platforms, implementation best practices, coding-to-system translation' },
        // { title: '10. DRG (Diagnosis-Related Group) Coder', body: 'Specializes in inpatient coding for hospital reimbursement through the DRG payment system.', skills: 'ICD-10-PCS, DRG groupers, inpatient coding for hospital payments' },
        // { title: '11. Outpatient Surgery Coder', body: 'Focuses exclusively on coding procedures performed in ambulatory surgery settings.', skills: 'CPT surgery coding, outpatient guidelines, ambulatory surgery practices' },
        // { title: '12. Medical Coding Auditor for International Markets', body: 'Works with global healthcare facilities to align coding practices with international coding systems like ICD-11.', skills: 'ICD-11, various coding systems, cross-cultural and international compliance' },
        // { title: '13. Fraud Investigation Coding Specialist', body: 'Works with law enforcement or compliance departments to identify fraudulent billing patterns in healthcare.', skills: 'Compliance, investigative techniques, legal understanding of healthcare fraud' },
        // { title: '14. Coding Software Quality Analyst', body: 'Tests and improves medical coding software to ensure it provides accurate code suggestions and workflow efficiency.', skills: 'Software testing, coding knowledge, quality assurance and reporting' },
        // { title: '15. Public Health Data Coder', body: 'Codes health information for population studies, government health programs, and epidemiological research.', skills: 'Epidemiological coding, public health data management and population health systems' },
      ],
      // gettingStarted: [
      //   { step: 'Earn a recognized certification', detail: 'CPC, CCS, or other industry-recognized certifications' },
      //   { step: 'Build strong medical knowledge', detail: 'Anatomy, physiology, medical terminology' },
      //   { step: 'Stay updated', detail: 'Subscribe to AAPC, AHIMA, and other professional resources' },
      //   { step: 'Network', detail: 'Join AAPC, AHIMA, or other professional organizations' },
      // ],
      // conclusion:
      //   "The medical coding field is far more diverse than most people realize. Whether you want to work in research, compliance, education, or fraud prevention, there's a coding specialty that can fit your passion. The key is to start with a strong foundation and keep exploring.",
    },
  },
  {
    id: 'unlocking-career-opportunities',
    title: 'Unlocking Career Opportunities with TechAngle!',
    excerpt:
      'Discover how TechAngle is helping students transform their careers with industry-relevant courses and placement support across Kerala and beyond.',
    category: 'Career guidance',
    date: 'May 31, 2025',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&q=80',
    tags: ['career', 'placement', 'opportunities', 'skill development'],
    content: {
      intro:
        "Training is the key to success in today’s competitive world, where finding the right career path can be challenging. That’s why Techangle, a leading training institute, offers expert training to help students and job seekers unlock their full potential. Moreover, this training ensures they gain the right skills and confidence to secure their dream jobs in the IT industry.",
      sections: [
        { title: '1. Expert Training by Trainers with Real-World Experience', body: 'At Techangle, learning goes beyond textbooks. Moreover, the trainers are seasoned professionals with years of hands-on experience in the tech field. They don’t just teach—they mentor. With real-world insights, practical case studies, and up-to-date industry knowledge, they prepare students for the challenges of today’s job market. Whether it’s Python, Java, Web Development, Digital Marketing, Data Science, or UI/UX Design, Techangle ensures you’re learning from the best.' },
        { title: '2. Placement Support that Makes a Difference', body: "One of the major highlights of Techangle is its dedicated placement support. Moreover, the team works closely with students to build strong resumes, sharpen interview skills, and connect them with job opportunities. Consequently, with tie-ups with top IT companies and startups, many students have already landed jobs through campus drives, referral programs, and direct placement assistance.For example, “From training to placement, Techangle stood by me. I got placed in a reputed MNC as a Python Developer thanks to their constant guidance.” – Anjali R, former student.” – Anjali R, former student" },
        { title: '3. Skill-Oriented Training for Industry Demands', body: 'Techangle understands that the industry evolves rapidly. Therefore, the training modules are regularly updated to match current trends and technologies. Additionally, every course includes hands-on projects, mock interviews, coding challenges, and opportunities to build a professional portfolio.' },
        { title: '4. A Supportive Learning Environment', body: 'With a student-first approach, Techangle offers flexible batches, personal attention, and a positive environment that boosts confidence and growth. Moreover, whether you’re a fresher, final-year student, or someone looking to switch careers, Techangle ensures you get the right start.' },
        // { title: '5. Medical Coding Educator/Trainer', body: 'Trains and mentors new coders, develops curricula, and updates staff on coding changes.', skills: 'Teaching skills, broad coding knowledge, communication and leadership' },
        // { title: '6. Risk Adjustment Coder', body: 'Codes for risk adjustment programs to ensure payers and providers capture the true complexity of patient populations.', skills: 'ICD-10, CMS-HCC, risk adjustment coding, and documentation review' },
        // { title: '7. Telehealth Coding Specialist', body: 'Codes for telehealth services and navigates the unique rules that govern remote patient care billing.', skills: 'Telehealth billing, CPT modifiers, HCPCS, and telehealth-specific compliance' },
        // { title: '8. Medical Research Data Coder', body: 'Works in clinical research to code patient data for research studies, clinical trials, and public health databases.', skills: 'Research coding systems, clinical data management and analysis' },
        // { title: '9. EHR Implementation Specialist', body: 'Assists healthcare organizations in implementing or upgrading EHR systems with coding accuracy in mind.', skills: 'EHR platforms, implementation best practices, coding-to-system translation' },
        // { title: '10. DRG (Diagnosis-Related Group) Coder', body: 'Specializes in inpatient coding for hospital reimbursement through the DRG payment system.', skills: 'ICD-10-PCS, DRG groupers, inpatient coding for hospital payments' },
        // { title: '11. Outpatient Surgery Coder', body: 'Focuses exclusively on coding procedures performed in ambulatory surgery settings.', skills: 'CPT surgery coding, outpatient guidelines, ambulatory surgery practices' },
        // { title: '12. Medical Coding Auditor for International Markets', body: 'Works with global healthcare facilities to align coding practices with international coding systems like ICD-11.', skills: 'ICD-11, various coding systems, cross-cultural and international compliance' },
        // { title: '13. Fraud Investigation Coding Specialist', body: 'Works with law enforcement or compliance departments to identify fraudulent billing patterns in healthcare.', skills: 'Compliance, investigative techniques, legal understanding of healthcare fraud' },
        // { title: '14. Coding Software Quality Analyst', body: 'Tests and improves medical coding software to ensure it provides accurate code suggestions and workflow efficiency.', skills: 'Software testing, coding knowledge, quality assurance and reporting' },
        // { title: '15. Public Health Data Coder', body: 'Codes health information for population studies, government health programs, and epidemiological research.', skills: 'Epidemiological coding, public health data management and population health systems' },
      ],
      // gettingStarted: [
      //   { step: 'Earn a recognized certification', detail: 'CPC, CCS, or other industry-recognized certifications' },
      //   { step: 'Build strong medical knowledge', detail: 'Anatomy, physiology, medical terminology' },
      //   { step: 'Stay updated', detail: 'Subscribe to AAPC, AHIMA, and other professional resources' },
      //   { step: 'Network', detail: 'Join AAPC, AHIMA, or other professional organizations' },
      // ],
      // conclusion:
      //   "The medical coding field is far more diverse than most people realize. Whether you want to work in research, compliance, education, or fraud prevention, there's a coding specialty that can fit your passion. The key is to start with a strong foundation and keep exploring.",
    },
  },
  {
    id: 'creative-technology-art-design',
    title: 'Exploring Creative Technology: The Fusion of Art, Design, and Innovation',
    excerpt:
      'Creative technology is revolutionizing how we think about art and design. Explore the exciting intersection where creativity meets cutting-edge innovation.',
    category: 'Creative',
    date: 'February 21, 2025',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=700&q=80',
    tags: ['creative technology', 'art', 'design', 'innovation'],
    content: {
      intro:
        "Creative technology is an interdisciplinary domain that blends art, design, and advanced technology to deliver innovative solutions in media, entertainment, marketing, and beyond. By uniting creativity with modern technology, it reshapes how people engage with digital content and interactive platforms.",
      sections: [
        { title: '1. How It Works', body: 'To begin with, creative technology is revolutionizing industries by introducing groundbreaking innovations that enhance digital experiences and storytelling. In marketing and advertising, AI-driven content creation and dynamic ad personalization enable brands to engage with consumers in unique and compelling ways.Moreover, augmented reality (AR) and virtual reality (VR) redefine brand interactions, offering immersive experiences through virtual showrooms, interactive ads, and gamified promotions. In addition, AI-generated art — powered by tools such as DALL·E and MidJourney — merges human creativity with machine intelligence, opening new possibilities in digital design.Similarly, AI-driven music generators like AIVA and Amper Music craft compositions tailored to various moods and styles, thereby transforming how soundtracks and scores are produced. Furthermore, the metaverse is emerging as a new digital frontier, reshaping entertainment, business, and social interactions through virtual worlds.Equally important, holographic displays and 3D projections are enhancing presentations and digital communication, while robotics fuels kinetic sculptures and interactive installations. Finally, blockchain and NFTs are transforming digital ownership, giving creators novel ways to monetize and protect their work.' },
        { title: '2. Applications of Creative Technology', body: "First and foremost, creative technology finds application across multiple industries. For example, in education, immersive VR classrooms let students explore complex concepts through interactive simulations. In healthcare, AR-assisted procedures and AI diagnostics are improving outcomes and patient care.Likewise, in architecture and real estate, 3D modeling and virtual walkthroughs help stakeholders visualize spaces prior to construction. Entertainment companies, on the other hand, leverage motion capture, AI editing, and VR to craft more engaging narratives and games.Fashion & Retail — virtual try-ons and AI trend forecasting Advertising — dynamic personalization and immersive campaignsArt & Museums — interactive installations and digital curation" },
        { title: '3. Future Trends', body: 'Looking ahead, creative technology will continue to evolve and expand. As AI advances, we can expect hyper-personalized content experiences where every user interacts with tailored designs, sounds, and narratives. Moreover, mixed reality (MR) will blend the physical and digital worlds more seamlessly, unlocking new modes of collaboration and entertainment.At the same time, integrating blockchain for provenance and micropayments can establish a transparent creative economy. Consequently, creators will gain new monetization models while audiences enjoy verifiable ownership and scarcity in digital goods.' },
        { title: '4. Ethics and Challenges', body: 'Nonetheless, along with the opportunities come responsibilities. For instance, concerns around data privacy, deepfakes, and algorithmic bias must be addressed through clear policies and better tooling. Additionally, creators and technologists should prioritize accessibility so that immersive experiences are inclusive for diverse audiences.Therefore, ethical frameworks and interdisciplinary collaboration are essential to ensure creative technology benefits society as a whole.' },
        { title: '5. Conclusion — Why Adopt Creative Technology Now?', body: 'Ultimately, this fusion of art and technology is transforming industries and reshaping how humans connect, learn, and create. Consequently, businesses that embrace creative technology gain a competitive edge through richer customer experiences, improved engagement, and new revenue streams. Thus, adopting these tools is not merely forward-thinking—it’s a strategic imperative.Get Started with Creative Technology' },
        // { title: '6. Risk Adjustment Coder', body: 'Codes for risk adjustment programs to ensure payers and providers capture the true complexity of patient populations.', skills: 'ICD-10, CMS-HCC, risk adjustment coding, and documentation review' },
        // { title: '7. Telehealth Coding Specialist', body: 'Codes for telehealth services and navigates the unique rules that govern remote patient care billing.', skills: 'Telehealth billing, CPT modifiers, HCPCS, and telehealth-specific compliance' },
        // { title: '8. Medical Research Data Coder', body: 'Works in clinical research to code patient data for research studies, clinical trials, and public health databases.', skills: 'Research coding systems, clinical data management and analysis' },
        // { title: '9. EHR Implementation Specialist', body: 'Assists healthcare organizations in implementing or upgrading EHR systems with coding accuracy in mind.', skills: 'EHR platforms, implementation best practices, coding-to-system translation' },
        // { title: '10. DRG (Diagnosis-Related Group) Coder', body: 'Specializes in inpatient coding for hospital reimbursement through the DRG payment system.', skills: 'ICD-10-PCS, DRG groupers, inpatient coding for hospital payments' },
        // { title: '11. Outpatient Surgery Coder', body: 'Focuses exclusively on coding procedures performed in ambulatory surgery settings.', skills: 'CPT surgery coding, outpatient guidelines, ambulatory surgery practices' },
        // { title: '12. Medical Coding Auditor for International Markets', body: 'Works with global healthcare facilities to align coding practices with international coding systems like ICD-11.', skills: 'ICD-11, various coding systems, cross-cultural and international compliance' },
        // { title: '13. Fraud Investigation Coding Specialist', body: 'Works with law enforcement or compliance departments to identify fraudulent billing patterns in healthcare.', skills: 'Compliance, investigative techniques, legal understanding of healthcare fraud' },
        // { title: '14. Coding Software Quality Analyst', body: 'Tests and improves medical coding software to ensure it provides accurate code suggestions and workflow efficiency.', skills: 'Software testing, coding knowledge, quality assurance and reporting' },
        // { title: '15. Public Health Data Coder', body: 'Codes health information for population studies, government health programs, and epidemiological research.', skills: 'Epidemiological coding, public health data management and population health systems' },
      ],
      // gettingStarted: [
      //   { step: 'Earn a recognized certification', detail: 'CPC, CCS, or other industry-recognized certifications' },
      //   { step: 'Build strong medical knowledge', detail: 'Anatomy, physiology, medical terminology' },
      //   { step: 'Stay updated', detail: 'Subscribe to AAPC, AHIMA, and other professional resources' },
      //   { step: 'Network', detail: 'Join AAPC, AHIMA, or other professional organizations' },
      // ],
      // conclusion:
      //   "The medical coding field is far more diverse than most people realize. Whether you want to work in research, compliance, education, or fraud prevention, there's a coding specialty that can fit your passion. The key is to start with a strong foundation and keep exploring.",
    },
  },
  {
    id: 'hyperloop-transportation',
    title: 'Revolutionizing Transportation: The Hyperloop Phenomenon',
    excerpt:
      "Hyperloop technology promises to reshape how humans move across vast distances. Dive into the science, current status, and future of this groundbreaking innovation.",
    category: 'Technical',
    date: 'February 21, 2025',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=700&q=80',
    tags: ['hyperloop', 'transportation', 'innovation', 'technology'],
    content: {
      intro:
        "Hyperloop technology is a proposed mode of passenger and freight transportation that uses a system of sealed tubes or tunnels through which pods can travel at high speeds. These pods are designed to float above the track using magnetic levitation or air pressure, reducing friction and enabling speeds that could exceed those of traditional modes of transportation like trains and airplanes. The concept, initially proposed by Elon Musk in 2013, aims to provide ultra-fast, energy-efficient, and environmentally friendly transportation over long distances, with the potential to revolutionize the way people and goods are moved from one place to another.",
      sections: [
        { title: '1. How Hyperloop Technology Works?', body: 'The Hyperloop concept envisions a system where passenger or cargo pods travel at high speeds through a network of low-pressure tubes or tunnels, propelled by magnetic levitation and linear induction motors.Hyperloop pods travel through vacuum-sealed tubes to reduce air resistance.Magnetic levitation suspends pods above the track, minimizing friction.Electric propulsion systems propel pods forward within the tubes.Low-pressure environment inside the tubes allows pods to travel at high speeds.Energy-efficient design enables Hyperloop to be powered by renewable energy sources.Automated control systems ensure safe and precise pod movement.Minimal environmental impact due to elevated tracks and small land footprint.Potential for autonomous operation, reducing the need for human intervention.Integration of renewable energy sources like solar power for sustainable operation.Continuous innovation and research aim to optimize efficiency and safety.Overall, the Hyperloop system aims to provide ultra-fast, energy-efficient transportation with minimal environmental impact, revolutionizing long-distance travel and freight logistics. While the concept holds great promise, practical implementation requires overcoming technical, logistical, and regulatory challenges. Ongoing research and development efforts aim to address these challenges and bring Hyperloop technology closer to reality.' },
        // { title: '2. Clinical Documentation Improvement Specialist (CDIS)', body: "Works directly with physicians to ensure clinical documentation accurately reflects the patient's condition and supports coded diagnoses.", skills: 'Detail orientation, communication, clinical documentation, compliance awareness' },
        // { title: '3. Coding Compliance Officer', body: 'Ensures that coding practices within a healthcare organization comply with all legal and ethical standards.', skills: 'Healthcare regulations, ethical judgment, leadership and compliance expertise' },
        // { title: '4. Health Information Analyst', body: 'Analyzes coded health data to find trends, improve patient outcomes, and support organizational decision-making.', skills: 'Data analysis, health informatics, critical thinking and interpretation' },
        // { title: '5. Medical Coding Educator/Trainer', body: 'Trains and mentors new coders, develops curricula, and updates staff on coding changes.', skills: 'Teaching skills, broad coding knowledge, communication and leadership' },
        // { title: '6. Risk Adjustment Coder', body: 'Codes for risk adjustment programs to ensure payers and providers capture the true complexity of patient populations.', skills: 'ICD-10, CMS-HCC, risk adjustment coding, and documentation review' },
        // { title: '7. Telehealth Coding Specialist', body: 'Codes for telehealth services and navigates the unique rules that govern remote patient care billing.', skills: 'Telehealth billing, CPT modifiers, HCPCS, and telehealth-specific compliance' },
        // { title: '8. Medical Research Data Coder', body: 'Works in clinical research to code patient data for research studies, clinical trials, and public health databases.', skills: 'Research coding systems, clinical data management and analysis' },
        // { title: '9. EHR Implementation Specialist', body: 'Assists healthcare organizations in implementing or upgrading EHR systems with coding accuracy in mind.', skills: 'EHR platforms, implementation best practices, coding-to-system translation' },
        // { title: '10. DRG (Diagnosis-Related Group) Coder', body: 'Specializes in inpatient coding for hospital reimbursement through the DRG payment system.', skills: 'ICD-10-PCS, DRG groupers, inpatient coding for hospital payments' },
        // { title: '11. Outpatient Surgery Coder', body: 'Focuses exclusively on coding procedures performed in ambulatory surgery settings.', skills: 'CPT surgery coding, outpatient guidelines, ambulatory surgery practices' },
        // { title: '12. Medical Coding Auditor for International Markets', body: 'Works with global healthcare facilities to align coding practices with international coding systems like ICD-11.', skills: 'ICD-11, various coding systems, cross-cultural and international compliance' },
        // { title: '13. Fraud Investigation Coding Specialist', body: 'Works with law enforcement or compliance departments to identify fraudulent billing patterns in healthcare.', skills: 'Compliance, investigative techniques, legal understanding of healthcare fraud' },
        // { title: '14. Coding Software Quality Analyst', body: 'Tests and improves medical coding software to ensure it provides accurate code suggestions and workflow efficiency.', skills: 'Software testing, coding knowledge, quality assurance and reporting' },
        // { title: '15. Public Health Data Coder', body: 'Codes health information for population studies, government health programs, and epidemiological research.', skills: 'Epidemiological coding, public health data management and population health systems' },
      ],
      // gettingStarted: [
      //   { step: 'Earn a recognized certification', detail: 'CPC, CCS, or other industry-recognized certifications' },
      //   { step: 'Build strong medical knowledge', detail: 'Anatomy, physiology, medical terminology' },
      //   { step: 'Stay updated', detail: 'Subscribe to AAPC, AHIMA, and other professional resources' },
      //   { step: 'Network', detail: 'Join AAPC, AHIMA, or other professional organizations' },
      // ],
      // conclusion:
      //   "The medical coding field is far more diverse than most people realize. Whether you want to work in research, compliance, education, or fraud prevention, there's a coding specialty that can fit your passion. The key is to start with a strong foundation and keep exploring.",
    },
  },
];

const CATEGORIES = [
  'Career courses', 'Career Development', 'Career guidance', 'Creative',
  'Education', 'Health Information Management', 'Healthcare careers',
  'IT training', 'Marketing', 'Medical Billing & Coding', 'Medical Coding',
  'Professional training', 'Skill development', 'Student support',
  'Technical', 'Uncategorized',
];

/* ── Component ─────────────────────────────────────────── */
export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState(null);
  const [nlEmail, setNlEmail] = useState('');
const [nlStatus, setNlStatus] = useState('idle');
const navigate = useNavigate()

const handleNewsletter = async (e) => {
  e.preventDefault();
  if (!nlEmail) return;
  setNlStatus('sending');
  try {
    await emailjs.send(
      'service_sigknpe',
      'template_jb9lkcz',
      { 
        from_name: 'Newsletter Subscriber',
        from_email: nlEmail,
        subject: 'Newsletter Subscription',
        message: `New newsletter subscription from: ${nlEmail}`,
        reply_to: nlEmail,
      },
      '7S3PWZWuZMBZrDnqv'
    );
    setNlStatus('success');
    setNlEmail('');
    setTimeout(() => setNlStatus('idle'), 4000);
  } catch {
    setNlStatus('error');
    setTimeout(() => setNlStatus('idle'), 4000);
  }
};

  const heroRef = useRef(null);
  const parallaxRef = useRef(null);
  const animDoneRef = useRef(false);

  const filtered = BLOG_POSTS.filter(p => {
    const q = searchTerm.toLowerCase();
    const hit = p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q);
    const cat = !activeCategory || p.category === activeCategory;
    return hit && cat;
  });

  /* ── Animations ──────────────────────────────────────── */
  useEffect(() => {
    if (selectedPost) return;
    if (animDoneRef.current) return;
    animDoneRef.current = true;

    /* Make everything visible first — prevents blank page */
    gsap.set(['.blog-hero__badge', '.blog-hero__title', '.blog-hero__subtitle',
      '.blog-hero__breadcrumb', '.blog-card', '.blog-sidebar', '.blog-newsletter__inner'],
      { opacity: 1, y: 0, x: 0 });

    /* Parallax scroll on hero bg */
    gsap.to(parallaxRef.current, {
      yPercent: 35,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    });

    /* Hero text entrance */
    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    heroTl
      .fromTo('.blog-hero__badge', { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 })
      .fromTo('.blog-hero__title', { y: 55, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, '-=0.3')
      .fromTo('.blog-hero__subtitle', { y: 35, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, '-=0.55')
      .fromTo('.blog-hero__breadcrumb', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, '-=0.4');

    /* Cards stagger on scroll */
    ScrollTrigger.batch('.blog-card', {
      onEnter: batch => gsap.fromTo(batch,
        { y: 70, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.75, stagger: 0.1, ease: 'power3.out' }
      ),
      once: true,
      start: 'top 90%',
    });

    /* Sidebar slide in */
    gsap.fromTo('.blog-sidebar',
      { x: 50, opacity: 0 },
      {
        x: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '.blog-sidebar', start: 'top 85%', once: true }
      }
    );

    /* Newsletter */
    gsap.fromTo('.blog-newsletter__inner',
      { y: 55, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.blog-newsletter', start: 'top 85%', once: true }
      }
    );

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 300);

    return () => {
      clearTimeout(refreshTimer);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [selectedPost]);

  /* ── Sub-page render ──────────────────────────────────── */
  if (selectedPost) {
    return (
      <BlogPost
        post={selectedPost}
        onBack={() => {
          setSelectedPost(null);
          animDoneRef.current = false;
          setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50);
        }}
      />
    );
  }

  /* ── Main render ──────────────────────────────────────── */
  return (
    <div className="blog-page">

      {/* ── HERO ───────────────────────────────────────── */}
      <section className="blog-hero" ref={heroRef}>
        <div className="blog-hero__bg" ref={parallaxRef} />
        <div className="blog-hero__overlay" />
        <div className="blog-hero__glow-orb" />
        <div className="blog-hero__shape-tl" />
        <div className="blog-hero__shape-br" />

        <div className="blog-hero__content">
          <div className="blog-hero__badge">
            <span className="blog-hero__badge-dot" />
            TechAngle
          </div>
          <h1 className="blog-hero__title">
            Blog &amp; <span className="blog-hero__title-accent">Insights</span>
          </h1>
          <p className="blog-hero__subtitle">
            Insights, tutorials, and industry news to keep you ahead in tech
          </p>
          <div className="blog-hero__breadcrumb">
            <span className="blog-hero__bc-link" onClick={() => navigate('/')}>Home</span>
            <span className="blog-hero__bc-sep">›</span>
            <span>Blog</span>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ──────────────────────────────────── */}
      <div className="blog-stats">
        <div className="blog-stats__inner">
          <div className="blog-stat-item">📝 <strong>{BLOG_POSTS.length}</strong>&nbsp;Articles</div>
          <div className="blog-stat-item">🏷 <strong>{CATEGORIES.length}</strong>&nbsp;Categories</div>
          <div className="blog-stat-item">📅 Updated&nbsp;<strong>2025</strong></div>
          <div className="blog-stat-item">🎓 By&nbsp;<strong>TechAngle</strong></div>
        </div>
      </div>

      {/* ── MAIN CONTENT ───────────────────────────────── */}
      <section className="blog-layout">

        {/* Grid */}
        <div className="blog-grid">
          {filtered.length === 0 && (
            <div className="blog-empty">
              <p>No articles found for your search.</p>
            </div>
          )}

          {filtered.map(post => (
            <article
              key={post.id}
              className="blog-card"
              onClick={() => {
                setSelectedPost(post);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && setSelectedPost(post)}
            >
              <div className="blog-card__shine" />

              <div className="blog-card__img-wrap">
                <img
                  className="blog-card__img"
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                />
                <div className="blog-card__img-overlay" />
                <span className="blog-card__cat">{post.category}</span>
              </div>

              <div className="blog-card__body">
                <p className="blog-card__date">
                  <span className="blog-card__date-pip" />
                  Published on {post.date}
                </p>
                <h3 className="blog-card__title">{post.title}</h3>
                <p className="blog-card__excerpt">{post.excerpt}</p>
                <div className="blog-card__footer">
                  <span className="blog-card__rt">⏱ {post.readTime}</span>
                  <span className="blog-card__readmore">Read More <span>→</span></span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Sidebar */}
        <aside className="blog-sidebar">
          {/* Search */}
          <div className="sidebar-box">
            <p className="sidebar-box__title">🔍 Search Articles</p>
            <div className="s-search">
              <input
                type="text"
                placeholder="Enter article title..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
              <button type="button">Go</button>
            </div>
          </div>

          {/* Categories */}
          <div className="sidebar-box">
            <p className="sidebar-box__title">🏷 Categories</p>
            <ul className="cat-list">
              {CATEGORIES.map(cat => (
                <li
                  key={cat}
                  className={activeCategory === cat ? 'cat-active' : ''}
                  onClick={() => setActiveCategory(prev => prev === cat ? null : cat)}
                >
                  <span>▶</span>
                  {cat}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      {/* ── NEWSLETTER ─────────────────────────────────── */}
      <section className="blog-newsletter">
  <div className="blog-newsletter__inner">
    <span className="nl-badge">Newsletter</span>
    <h2 className="blog-newsletter__title">Subscribe to Our Newsletter</h2>
    <p className="blog-newsletter__desc">
      Get the latest tech articles, tutorials, and updates delivered to your inbox
    </p>
    <form className="blog-newsletter__form" onSubmit={handleNewsletter}>
      <input
        type="email"
        placeholder="Enter your email"
        value={nlEmail}
        onChange={e => setNlEmail(e.target.value)}
        required
        disabled={nlStatus === 'sending'}
      />
      <button type="submit" disabled={nlStatus === 'sending'}>
        {nlStatus === 'sending' ? 'Sending...' : 'Subscribe'}
      </button>
    </form>
    {nlStatus === 'success' && (
      <p className="nl-msg nl-msg--success">✅ Subscribed! Thank you.</p>
    )}
    {nlStatus === 'error' && (
      <p className="nl-msg nl-msg--error">❌ Something went wrong. Try again.</p>
    )}
  </div>
</section>
    </div>
  );
}