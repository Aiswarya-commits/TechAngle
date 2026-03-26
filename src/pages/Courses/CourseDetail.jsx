import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './CourseDetail.css';

gsap.registerPlugin(ScrollTrigger);

// ─── COMPLETE COURSE DATA FROM BROCHURE ─────────────────────────────────────

const coursesData = {
  'cbse-computing': {
    title: 'CBSE Computing Skills Program',
    subtitle: 'CBSE Computing',
    category: 'Technology',
    icon: '🖥️',
    color: '#2563eb',
    accentColor: '#60a5fa',
    description:
      'TechAngle\'s CBSE Computing Skills Program is tailored for school students preparing for board examinations in Computer Science, Information Technology, Computer Applications, and Informatics Practices. Covering Classes IX through XII under CBSE curriculum, this program builds strong fundamentals in programming, databases, networking, and digital literacy — giving students a competitive edge in academics and future careers.',
    subCourses: [
      'Computer Applications – Class X CBSE',
      'Computer Science – Class 12',
      'Information Technology – Class X',
      'Computer Applications – Class IX',
      'Computer Applications – Class 11',
      'Informatics Practices – Class 11',
      'Informatics Practices – Class 12',
    ],
    benefits: [
      'Complete CBSE board syllabus coverage with practical labs',
      'Expert tutors with deep knowledge of CBSE examination patterns',
      'Step-by-step programming guidance from basics to advanced',
      'Mock exams and practice papers for board exam readiness',
      'Personalized doubt-clearing sessions and mentorship',
    ],
    whyChoose: [
      'Curriculum perfectly aligned with CBSE guidelines',
      'Experienced trainers with school-level teaching expertise',
      'Interactive learning through real coding projects',
      'Flexible batch timings for school students',
      'Affordable fee structure with quality assurance',
    ],
    faqs: [
      {
        question: 'Which classes are covered in this program?',
        answer:
          'The program covers Classes IX, X, XI, and XII under CBSE curriculum, including Computer Applications, Computer Science, Information Technology, and Informatics Practices.',
      },
      {
        question: 'Is this suitable for students with no coding background?',
        answer:
          'Absolutely. The program starts from the very basics and progressively advances to board-level topics, making it ideal for beginners.',
      },
      {
        question: 'Will students receive study materials?',
        answer:
          'Yes, comprehensive notes, sample papers, and practice assignments aligned with CBSE patterns are provided to every enrolled student.',
      },
    ],
    services: [
      'Board Exam Preparation',
      'Hands-On Programming Labs',
      'Mock Tests & Practice Papers',
      'One-on-One Mentoring',
      'Certificate Upon Completion',
    ],
  },

  'mastery-data-platform': {
    title: 'Mastery Data Platform',
    subtitle: 'Data & Excel Mastery',
    category: 'Technology',
    icon: '📊',
    color: '#0891b2',
    accentColor: '#22d3ee',
    description:
      'TechAngle\'s Mastery Data Platform is a comprehensive program covering everything from basic data entry to advanced analytics and visualization. Master Microsoft Excel, data management, SQL databases, and reporting tools used by top organizations worldwide. Whether you are a beginner or a professional looking to sharpen your data skills, this program delivers real-world expertise recognized by employers.',
    subCourses: [
      'Data Reporting with Excel',
      'Advanced Excel 2025',
      'Data Entry and Data Management 2025',
      'Database Essentials',
      'Excel Analytics Pro',
      'Mastering Data Analysis',
      'Advanced Data Mastery',
      'Advanced Data Analytics and Data Visualisation',
      'MS Word and MS Excel Basics',
      'MS Excel and MS PowerPoint Basics',
      'Data Mastery Basics',
      'Data Entry Pro',
      'Excel Essentials',
      'Basics of Data Analytics and Data Visualisation',
      'Data Analysis Techniques using Microsoft Excel',
      'Data Management',
      'Data Visualization and Automation Strategies',
      'Efficient Techniques for Data Entry',
      'Database Management Fundamentals',
      'Data Security and Ethical Considerations',
      'Fundamentals of Excel, Formulas, and Functions',
      'Data Visualisation Essentials',
      'Introduction to MS Excel',
      'Database Management and SQL Mastery',
      'Advanced Database Management and SQL Mastery',
      'Advanced Database Management and Application',
      'MYSQL Databases',
      'Utilizing Excel for Data Entry and Analysis',
    ],
    benefits: [
      'Master Excel from basics to advanced analytics and automation',
      'Learn industry-standard data management and SQL databases',
      'Work on real-world datasets and business case studies',
      'Gain expertise in data visualization tools and dashboards',
      'Receive a globally recognized certification upon completion',
    ],
    whyChoose: [
      'Comprehensive curriculum covering 28+ data courses',
      'Practical, hands-on approach with live data projects',
      'Expert trainers with industry experience in data analytics',
      'Flexible learning schedule for working professionals',
      'Job assistance and career guidance included',
    ],
    faqs: [
      {
        question: 'Do I need prior knowledge of Excel?',
        answer:
          'No prior knowledge is needed. The program starts with basics and advances to professional-level data analytics at your own pace.',
      },
      {
        question: 'What software will I learn?',
        answer:
          'You will learn Microsoft Excel, MySQL, MS Word, MS PowerPoint, and various data visualization and reporting tools.',
      },
      {
        question: 'Is there a certificate provided?',
        answer:
          'Yes, upon completion of the chosen course(s), you will receive an industry-recognized certificate from TechAngle.',
      },
    ],
    services: [
      'Excel & Data Analytics Training',
      'SQL & Database Management',
      'Data Visualization Workshops',
      'Career Support & Job Assistance',
      'Certification Upon Completion',
    ],
  },

  'digital-designing': {
    title: 'Digital Designing',
    subtitle: 'Design & Creative Arts',
    category: 'Design',
    icon: '🎨',
    color: '#7c3aed',
    accentColor: '#a78bfa',
    description:
      'Unleash your creative potential with TechAngle\'s Digital Designing program. From photo editing and graphic design to advanced video editing and web design, this course arms you with the skills to create stunning visuals for print, digital media, and the web. Master industry-leading tools like Adobe Photoshop, Illustrator, CorelDRAW, and video editing suites used by design professionals globally.',
    subCourses: [
      'Photo Editing',
      'Content Illustration',
      'Web Designing 2025',
      'Desktop Publishing (Adobe and CorelDRAW) 2025',
      'Graphic Designing 2025',
      'Video Editing (2025)',
      'Digital Illustration Pro',
      'Digital Design Toolbox',
      'Web Design 101',
      'Advanced Web Designing Concepts',
      'Advanced Video Editing Techniques',
      'Advanced Graphics Design',
      'Service Designing and Operations',
      'Advanced Image Editing',
      'Advanced Illustration Techniques',
      'Illustration Basics 101',
      'CorelDraw Essentials',
      'CineMagic: Creative Editing',
      'Design Basics 101 (Graphic Design)',
      'Fundamentals of Image Editing',
      'Fundamentals of Graphic Design',
      'Creating Brand Identity and Logo Design',
      'Designing for Print and Digital Media',
      'Fundamentals of Web Design',
      'Responsive Web Design Techniques',
      'Video Editing Techniques',
      'Creative Elements in Video Editing',
      'Mastering Video Editing Tools and Motion Design',
      'CorelDRAW Essentials and Advanced Mastery',
      'Creating Efficient Designs',
    ],
    benefits: [
      'Master 30+ design tools and creative software',
      'Build a professional portfolio with real-world projects',
      'Learn both print and digital design workflows',
      'Develop brand identity, logo design, and visual communication skills',
      'Receive an industry-recognized design certification',
    ],
    whyChoose: [
      'Expert creative mentors from the design industry',
      'Practical design challenges mirroring real client briefs',
      'Access to professional-grade design resources and software',
      'Career-oriented approach with portfolio development support',
      'Affordable training with flexible batch options',
    ],
    faqs: [
      {
        question: 'Do I need any prior design experience?',
        answer:
          'No experience is needed. The program caters to absolute beginners and also helps experienced designers advance their skills.',
      },
      {
        question: 'What software will be taught?',
        answer:
          'Adobe Photoshop, Adobe Illustrator, CorelDRAW, video editing tools, and web design platforms are all covered in detail.',
      },
      {
        question: 'Will I build a portfolio?',
        answer:
          'Yes! Building a professional design portfolio is a core component of the program, preparing you for freelance or agency work.',
      },
    ],
    services: [
      'Graphic Design Training',
      'Video Editing Workshops',
      'Web & UI Design Courses',
      'Portfolio & Brand Building',
      'Certification Upon Completion',
    ],
  },

  'google-certification': {
    title: 'Google Certification Program',
    subtitle: 'Google & Office Productivity',
    category: 'Technology',
    icon: '🔵',
    color: '#059669',
    accentColor: '#34d399',
    description:
      'TechAngle\'s Google Certification Program equips you with comprehensive expertise in Google Workspace tools, Microsoft Office applications, and essential digital productivity skills. Learn to navigate Gmail, Google Drive, Google Sheets, Docs, Slides, and advanced workspace management — credentials recognized by employers across industries. This program also covers soft skills and social media mastery to make you a complete digital professional.',
    subCourses: [
      'Google Workspace Expert',
      'Office Assistance',
      'Google Pro Techniques',
      'Advanced Google Workspace Skills',
      'MS Word and MS PowerPoint Basics',
      'MS Windows and MS Word Basics',
      'MS Windows and MS PowerPoint Basics',
      'Google Skills 101',
      'Advanced DBMS Concepts',
      'Introduction to Google Workspace',
      'Advanced Techniques in Google Workspace',
      'Introduction to MS Office Tools',
      'Introduction to Windows Basics',
      'Introduction to MS Word',
      'Introduction to MS PowerPoint',
      'Mastering Social Media Platforms and Tools',
    ],
    benefits: [
      'Gain globally recognized Google Workspace certification',
      'Master full Microsoft Office suite for workplace productivity',
      'Learn advanced database management concepts (DBMS)',
      'Social media mastery for personal and business branding',
      'Career-ready skills for administrative and office roles',
    ],
    whyChoose: [
      'Google-aligned curriculum with certification preparation',
      'Practical training using real Google and Microsoft tools',
      'Expert instructors with corporate experience',
      'Flexible online and offline learning options',
      'Job placement assistance included',
    ],
    faqs: [
      {
        question: 'Is this an official Google certification?',
        answer:
          'TechAngle prepares you for Google certification exams and provides its own industry-recognized certification. Guidance for official Google exams is also provided.',
      },
      {
        question: 'Who should take this course?',
        answer:
          'Students, office professionals, administrators, and anyone seeking to improve their digital productivity skills will benefit greatly.',
      },
      {
        question: 'Are soft skills included?',
        answer:
          'Yes, the program includes modules on soft skills and social media mastery as part of the comprehensive digital professional toolkit.',
      },
    ],
    services: [
      'Google Workspace Training',
      'MS Office Productivity Courses',
      'Social Media & Digital Skills',
      'Certification Exam Preparation',
      'Career & Placement Guidance',
    ],
  },

  'financial-accounting': {
    title: 'Financial Accounting',
    subtitle: 'Accounting & Finance',
    category: 'Finance',
    icon: '💰',
    color: '#d97706',
    accentColor: '#fbbf24',
    description:
      'TechAngle\'s Financial Accounting program provides in-depth, practical training in accounting, banking, and financial management using industry-standard tools like Tally Prime, GST compliance, and BFSI (Banking Financial Services Insurance). Designed for aspiring accountants, finance professionals, and entrepreneurs, this program bridges the gap between theoretical knowledge and real-world accounting practice.',
    subCourses: [
      'Tally Prime with GST 2025',
      'Banking Financial Services Insurance (BFSI) 2025',
      'Advanced Tally Pro 2025',
      'Tally Master Essentials',
      'Mastering Advanced Accounting',
      'Financial Analytics with Tally Prime',
      'Advanced Accounting Pro',
      'Accounting Basics with Inventory Management in Tally',
      'Advanced Accounting Insights',
      'Banking Financial Services Insurance (BFSI)',
      'Maintenance of Information in Books of Accounts',
      'Analysis of Accounting Information',
      'Tally Software',
      'Tally Prime',
      'Banking Essentials',
      'Accounting as Information System',
      'Finance Foundations: Indian Banking and Taxes',
    ],
    benefits: [
      'Master Tally Prime with GST — the most in-demand accounting tool',
      'Gain practical knowledge of BFSI operations and banking',
      'Learn real-world inventory management and financial reporting',
      'Understand Indian taxation system, GST, and TDS compliance',
      'Receive a job-ready accounting certification',
    ],
    whyChoose: [
      'Industry-aligned curriculum with Tally Prime and GST focus',
      'Experienced CAs and finance professionals as trainers',
      'Practical assignments using real financial data',
      'Placement support with top accounting firms',
      'Affordable pricing with flexible learning options',
    ],
    faqs: [
      {
        question: 'Do I need prior accounting knowledge?',
        answer:
          'Basic commerce knowledge is helpful but not mandatory. The program starts with accounting fundamentals and progresses to advanced Tally and GST.',
      },
      {
        question: 'Is Tally Prime software included?',
        answer:
          'Hands-on training is provided with Tally Prime. Students learn in a fully equipped lab environment with the latest version of the software.',
      },
      {
        question: 'What career opportunities does this open?',
        answer:
          'Graduates can pursue roles as accountants, bookkeepers, finance executives, tax consultants, and BFSI professionals.',
      },
    ],
    services: [
      'Tally Prime & GST Training',
      'BFSI Certification Courses',
      'Advanced Accounting Workshops',
      'Career & Placement Assistance',
      'Certification Upon Completion',
    ],
  },

  'it-hardware-networking': {
    title: 'IT Hardware & Networking',
    subtitle: 'Hardware & Cyber Security',
    category: 'Technology',
    icon: '🔧',
    color: '#dc2626',
    accentColor: '#f87171',
    description:
      'TechAngle\'s IT Hardware & Networking program provides hands-on training in computer hardware, networking fundamentals, troubleshooting, and cybersecurity. Designed for students and professionals seeking a career in IT support, network administration, or hardware engineering, this program covers everything from assembling computers to setting up enterprise networks and securing them against cyber threats.',
    subCourses: [
      'IT Hardware & Networking',
      'IT Hardware Support 2025',
      'Hardware Fundamentals and Troubleshooting',
      'Understanding Computer Networks',
      'Hardware and Cyber Security',
    ],
    benefits: [
      'Gain hands-on experience with real hardware components and networks',
      'Master troubleshooting techniques for hardware and software issues',
      'Learn enterprise networking setup and configuration',
      'Understand cybersecurity fundamentals and best practices',
      'Receive an industry-recognized certification in IT Hardware & Networking',
    ],
    whyChoose: [
      'State-of-the-art hardware lab with real equipment',
      'Expert trainers with IT industry field experience',
      'Practical troubleshooting sessions and case studies',
      'Career guidance for IT support and network engineer roles',
      'Affordable program with globally recognized certifications',
    ],
    faqs: [
      {
        question: 'Do I need prior IT knowledge?',
        answer:
          'No prior knowledge is required. The program is designed for beginners and covers everything from the ground up.',
      },
      {
        question: 'Is there physical hardware practice?',
        answer:
          'Yes! TechAngle has a dedicated hardware lab where students get hands-on experience assembling, configuring, and troubleshooting real hardware.',
      },
      {
        question: 'What career roles can I pursue after this course?',
        answer:
          'Graduates can work as IT support engineers, hardware technicians, network administrators, and cybersecurity associates.',
      },
    ],
    services: [
      'Hardware Lab Training',
      'Network Setup & Configuration',
      'Cybersecurity Fundamentals',
      'IT Support Career Guidance',
      'Certification Upon Completion',
    ],
  },

  'management-level': {
    title: 'Management Level',
    subtitle: 'Business & Marketing Management',
    category: 'Management',
    icon: '📈',
    color: '#0284c7',
    accentColor: '#38bdf8',
    description:
      'TechAngle\'s Management Level program equips aspiring managers and business professionals with essential skills in marketing, retail management, service operations, and organizational behavior. Covering both theoretical frameworks and practical applications, this program prepares you for leadership roles across industries — from service businesses to retail chains and digital marketing agencies.',
    subCourses: [
      'Management Basics with Soft Skills',
      'Marketing',
      'Management',
      'Social Media Marketing 2025',
      'Retail Management',
      'Service Marketing Strategies',
      'Customer Centric Marketing',
      'Managing Service Operations',
      'Service Quality',
      'Service Entrepreneurship',
      'Basics of Management and Behavioral Science',
      'Mastering Management & Research Processes',
      'Basics of Social Media Marketing',
      'Foundations of Digital and Social Media Marketing',
      'Business Mathematics and Statistics',
      'Retail Insights & Sales Mastery',
      'Retail Business Dynamics',
      'Mastering Management: Objectives & Processes',
      'Marketing 101: Strategy & Process',
      'Service Marketing Strategies for Success',
      'Service Expectation Management',
      'Customer-Centric Service Strategies',
      'Service Quality Optimization Essentials',
      'Services in Modern Economy',
      'Enhancing Service Through People and Technology',
      'Global Services Management',
    ],
    benefits: [
      'Develop comprehensive business and marketing management skills',
      'Master service operations, retail management, and customer strategy',
      'Learn social media marketing and digital business strategies',
      'Work on real-world management case studies and simulations',
      'Receive a professional management certification',
    ],
    whyChoose: [
      'Curriculum developed with industry managers and business leaders',
      'Case study-based learning from real market scenarios',
      'Expert faculty with corporate management experience',
      'Flexible programs for working professionals and students',
      'Career guidance for management and marketing roles',
    ],
    faqs: [
      {
        question: 'Is this suitable for commerce students?',
        answer:
          'Yes, this program is ideal for commerce, business management, and MBA students as well as working professionals seeking to advance into management roles.',
      },
      {
        question: 'Does the program cover digital marketing?',
        answer:
          'Yes, Social Media Marketing, Digital Marketing Foundations, and Customer-Centric Digital Strategies are core components of the program.',
      },
      {
        question: 'What kind of certificate will I receive?',
        answer:
          'An industry-recognized management and marketing certification from TechAngle, with CISI association benefits available for eligible programs.',
      },
    ],
    services: [
      'Business Management Training',
      'Marketing & Social Media Courses',
      'Retail & Service Operations',
      'Leadership Development Workshops',
      'Certification & Career Support',
    ],
  },

  'software-development': {
    title: 'Software Development',
    subtitle: 'Programming & Web Development',
    category: 'Technology',
    icon: '💻',
    color: '#7c3aed',
    accentColor: '#c4b5fd',
    description:
      'TechAngle\'s Software Development program is a comprehensive coding and web development curriculum covering Python, Java, C/C++, C#, PHP, HTML/CSS, and full-stack web development. Whether you are a beginner learning your first language or an experienced developer expanding your skills, this program equips you with the expertise to build professional software applications and web solutions.',
    subCourses: [
      'Python Programming (Complete)',
      'Java Programming (Complete)',
      'C & C++ Programming and Java Programming Essentials',
      'Python Programming 2025',
      'Java Programming 2025',
      'Java Programming Unleashed',
      'Java Programming Essentials',
      'Python and MYSQL Fundamentals',
      'C and C++ Programming',
      'Advanced Java Programming and Web Development using Java',
      'Fundamentals of HTML and Introduction to CSS',
      'Basics of Data Structures using C and C++',
      'Fundamentals of PHP',
      'Basics of C Sharp (C#)',
      'Advanced Data Structures with C and C++',
      'Advanced HTML and CSS',
      'Advanced C Sharp (C#)',
      'Python Fundamentals and Programming Basics',
      'Intelligence with Python',
      'Introduction to Java Programming Fundamentals',
      'Web Development using Java Technologies',
      'Foundations of Data Structures with C and C++',
      'Object-Oriented Data Structures in C++',
      'Applications of Data Structures in C and C++',
      'Mastery of Methods, Arrays, and Strings in C#',
      'Foundations of HTML & Web Development',
      'Introduction to CSS & Web Styling Techniques',
      'Advanced CSS & Front-End Design',
      'Foundations of MySQL and PHP',
      'Web Development with Advanced PHP Concepts',
      'Practical Implementation in Java',
    ],
    benefits: [
      'Master 5+ programming languages from Python to Java to C#',
      'Build full-stack web applications with HTML, CSS, PHP, and MySQL',
      'Learn data structures and algorithms for competitive programming',
      'Work on real-world software development projects',
      'Receive an industry-recognized software development certification',
    ],
    whyChoose: [
      'Comprehensive curriculum covering frontend, backend, and databases',
      'Expert developers and trainers with industry project experience',
      'Hands-on coding from day one with practical projects',
      'Interview preparation and coding challenge support',
      'Career guidance for developer and software engineer roles',
    ],
    faqs: [
      {
        question: 'Which programming language should I start with?',
        answer:
          'Python is recommended for beginners due to its simplicity. Our advisors will guide you to the best starting point based on your goals.',
      },
      {
        question: 'Will I build real projects?',
        answer:
          'Yes! Every course module includes practical projects. By the end, you will have a portfolio of working software applications.',
      },
      {
        question: 'Is web development included?',
        answer:
          'Yes, full-stack web development using HTML, CSS, JavaScript, PHP, MySQL, and Java web technologies is a core part of the curriculum.',
      },
    ],
    services: [
      'Programming Language Training',
      'Web Development Bootcamp',
      'Data Structures & Algorithms',
      'Portfolio Project Development',
      'Certification & Career Support',
    ],
  },

  'soft-skills': {
    title: 'Soft Skills',
    subtitle: 'Communication & Personal Development',
    category: 'Skills',
    icon: '🌟',
    color: '#db2777',
    accentColor: '#f472b6',
    description:
      'TechAngle\'s Soft Skills program develops the human side of professional excellence. Covering communication, emotional intelligence, behavioral science, and written communication, this program prepares you to navigate workplace dynamics, lead teams, and make lasting impressions. In today\'s competitive world, technical skills open doors — but soft skills determine how far you go.',
    subCourses: [
      'Soft Skills',
      'Understanding Human Behaviour',
      'Written Communication Skills',
    ],
    benefits: [
      'Develop powerful verbal and non-verbal communication skills',
      'Master emotional intelligence and professional conduct',
      'Improve written communication for emails, reports, and presentations',
      'Build leadership and teamwork capabilities',
      'Gain confidence and poise for interviews and workplace interactions',
    ],
    whyChoose: [
      'Trained by communication and HR industry experts',
      'Role-play sessions and real-world scenario training',
      'Personalized feedback and confidence-building exercises',
      'Curriculum developed for both students and working professionals',
      'Certification that enhances your professional profile',
    ],
    faqs: [
      {
        question: 'Who should take this course?',
        answer:
          'Everyone — from students to senior professionals. Soft skills are universally valued and directly impact career growth and personal relationships.',
      },
      {
        question: 'How are sessions conducted?',
        answer:
          'Sessions include interactive workshops, group activities, presentations, role-plays, and individual coaching for holistic skill development.',
      },
      {
        question: 'Can this be combined with other TechAngle courses?',
        answer:
          'Absolutely! In fact, many students combine Soft Skills with Technical or Management courses for a complete professional development package.',
      },
    ],
    services: [
      'Communication Skills Training',
      'Personality Development Workshops',
      'Interview Preparation Coaching',
      'Leadership & Team Dynamics',
      'Certification Upon Completion',
    ],
  },

  'ai-other-programs': {
    title: 'AI and Other Programs',
    subtitle: 'Artificial Intelligence & Emerging Tech',
    category: 'Technology',
    icon: '🤖',
    color: '#0f766e',
    accentColor: '#2dd4bf',
    description:
      'TechAngle\'s AI and Other Programs explores the cutting edge of technology — from Artificial Intelligence and Machine Learning to Mobile App Development, AutoCAD, 3D Modeling, and Digital Freelancing. Stay ahead of the curve with future-ready skills that are shaping industries globally. Whether you\'re a tech enthusiast, creative professional, or entrepreneur, these programs open doors to tomorrow\'s opportunities.',
    subCourses: [
      'AI-ML Basics 2025',
      'Machine Learning (ML)',
      'First Lessons in AI (FlAi)',
      'DEEP AI',
      'Intelligence with Python',
      'Science and AI-ML Unleashed',
      'Mobile App Development',
      'Android Studio',
      'With Flask and Django',
      'AutoCAD Basics',
      'Advanced Techniques in 3D Modeling',
      '3D Basics Express',
      'Generated Imagery (CGI)',
      'Desktop Publishing Pro',
      'Basics of Digital Freelancing',
      'Indian Market Investment Essentials',
      'Mastering Research Processes',
      'Integrated Branding and Pricing Strategies',
      'Entrepreneurship Journey: From Idea to Impact',
      'IT (DEEP IT)',
      'Basics of DBMS',
      'Basic IT Skills',
      'WebCraft Fundamentals',
      'Advanced Bizops Insights',
      'Exploring Advanced Tools and Techniques',
      'Photo Restoration Methods',
      'TDS Compliance',
      'Understanding the Marketplace',
    ],
    benefits: [
      'Learn AI and Machine Learning concepts with hands-on Python projects',
      'Develop mobile apps for Android using Android Studio',
      'Explore 3D modeling, CGI, and advanced creative technologies',
      'Master digital freelancing and entrepreneurship strategies',
      'Receive certifications in emerging and future-ready technologies',
    ],
    whyChoose: [
      'Future-focused curriculum updated with latest AI and tech trends',
      'Expert trainers from AI, mobile development, and tech industries',
      'Practical projects using real AI tools and frameworks',
      'Entrepreneurship and freelancing modules for independent careers',
      'Career guidance for AI, tech, and creative industry roles',
    ],
    faqs: [
      {
        question: 'Do I need programming knowledge for AI/ML?',
        answer:
          'Basic Python knowledge is helpful. The AI-ML Basics course starts from fundamentals, and you can combine it with our Python programming course.',
      },
      {
        question: 'Are mobile app development courses included?',
        answer:
          'Yes! Android app development using Android Studio, Flask, and Django is part of the program portfolio.',
      },
      {
        question: 'Is digital freelancing taught as a career path?',
        answer:
          'Yes, Basics of Digital Freelancing and Entrepreneurship Journey modules specifically prepare you for independent and remote work careers.',
      },
    ],
    services: [
      'AI & Machine Learning Training',
      'Mobile App Development',
      '3D Modeling & CGI Workshops',
      'Digital Freelancing Bootcamp',
      'Certification & Career Guidance',
    ],
  },

  'medical-coding': {
    title: 'Medical Coding',
    subtitle: 'Medical Coding & Billing',
    category: 'Healthcare',
    icon: '🏥',
    color: '#0369a1',
    accentColor: '#38bdf8',
    description:
      'Medical Coding & Billing stands out as one of the most sought-after careers in the healthcare industry. With rising global demand for certified professionals, it delivers strong job opportunities, competitive salaries, and flexibility for remote or international work. TechAngle\'s expertly designed program — in association with IREZ Academy — equips students to analyze medical records, apply standardized codes, and ensure regulatory compliance for accurate billing and reimbursement. Amid a wide gap between job openings and qualified experts, our training makes you job-ready and industry-certified.',
    subCourses: [
      'Medical Coding & Billing Fundamentals',
      'ICD-10-CM & CPT Coding',
      'Medical Billing & Reimbursement',
      'Healthcare Compliance & Regulations',
      'AAPC Certification Exam Preparation',
    ],
    benefits: [
      'Industry certification recognized globally (AAPC)',
      'High job demand with competitive salaries in healthcare',
      'Flexibility for remote work and international career opportunities',
      'Expert guidance tailored specifically for AAPC certification',
      '100% placement assistance connecting you with top employers',
    ],
    whyChoose: [
      'In association with IREZ Academy — a trusted name in medical coding',
      'AAPC Education Provider status ensuring top-quality training',
      'Regular mock exams mimicking real exam conditions',
      'Experienced instructors with hands-on healthcare coding experience',
      'Membership & exam support for AAPC registration and scheduling',
    ],
    faqs: [
      {
        question: 'What is the AAPC certification?',
        answer:
          'AAPC (American Academy of Professional Coders) is the world\'s leading medical coding certification body. TechAngle is an official AAPC Education Provider preparing students for CPC and other coding exams.',
      },
      {
        question: 'Can I work remotely after completing this course?',
        answer:
          'Yes! Medical coding is one of the top remote-work friendly careers. AAPC-certified coders are hired by hospitals, insurance companies, and healthcare firms worldwide.',
      },
      {
        question: 'What is the duration of the program?',
        answer:
          'Program duration varies by track. Our advisors will help you choose the right timeline based on your goals and schedule.',
      },
    ],
    services: [
      'AAPC Certification Training',
      'Mock Exams & Test Preparation',
      'Membership & Exam Registration Support',
      '100% Placement Assistance',
      'Internationally Recognized Certification',
    ],
    partnerBadge: 'In Association With IREZ Academy',
    partnerLogo: 'AAPC',
  },

  'cisi-programs': {
    title: 'CISI Programs',
    subtitle: 'Finance & Investment Certification',
    category: 'Finance',
    icon: '📋',
    color: '#1e40af',
    accentColor: '#60a5fa',
    description:
      'TechAngle offers CISI (Chartered Institute for Securities & Investment) programs — globally recognized qualifications for finance careers in securities, investments, wealth management, and compliance. Ranging from entry-level certificates to advanced diplomas, CISI programs emphasize ethics, regulations, and practical skills. These credentials support careers in banking, operations, financial planning, and investment management at leading institutions worldwide.',
    subCourses: [
      'International Certificate in Wealth and Investment Management (ICWIM) India',
      'Technology in Investment Management',
      'Financial Risk Program',
      'Financial Compliance Program',
      'Corporate Finance',
    ],
    benefits: [
      'Globally recognized CISI chartered certification',
      'Industry knowledge aligned with international financial markets',
      'Placement and internship opportunities with leading financial firms',
      'Access to CISI global membership and networking',
      'Access to 300 byte-size certificates in Blockchain, AI, and ESG',
    ],
    whyChoose: [
      'Official CISI education partner — guaranteed exam preparation quality',
      'Networking opportunities with global finance industry experts',
      'Programs recognized by Deutsche Bank, JPMorgan, HSBC, Barclays, and more',
      'Up to 24 UCAS points achievable through CertISI programs',
      'Career support for banking, wealth management, and compliance roles',
    ],
    faqs: [
      {
        question: 'What is CISI?',
        answer:
          'CISI stands for the Chartered Institute for Securities & Investment — the world\'s leading financial planning and securities body with members across 100+ countries.',
      },
      {
        question: 'Which companies recognize CISI certifications?',
        answer:
          'Deutsche Bank, JPMorgan, HSBC, Barclays, Goldman Sachs, Morgan Stanley, Standard Chartered, UBS, BNY Mellon, and many more top financial institutions recognize CISI qualifications.',
      },
      {
        question: 'Can students and professionals both apply?',
        answer:
          'Yes! CISI programs are designed for both students entering finance careers and working professionals seeking globally recognized credentials to advance their careers.',
      },
    ],
    services: [
      'CISI Exam Preparation & Coaching',
      'Wealth & Investment Management Training',
      'Financial Risk & Compliance Programs',
      'CISI Membership Application Support',
      'Globally Recognized Certification',
    ],
    partnerBadge: 'In Association With CISI',
    partnerLogo: 'CISI',
  },
};

// ─── SIDEBAR NAVIGATION ─────────────────────────────────────────────────────

const sidebarCourses = [
  { name: 'CBSE Computing Skills Program', slug: 'cbse-computing' },
  { name: 'Mastery Data Platform', slug: 'mastery-data-platform' },
  { name: 'Digital Designing', slug: 'digital-designing' },
  { name: 'Google Certification Program', slug: 'google-certification' },
  { name: 'Financial Accounting', slug: 'financial-accounting' },
  { name: 'IT Hardware & Networking', slug: 'it-hardware-networking' },
  { name: 'Management Level', slug: 'management-level' },
  { name: 'Software Development', slug: 'software-development' },
  { name: 'Soft Skills', slug: 'soft-skills' },
  { name: 'AI and Other Programs', slug: 'ai-other-programs' },
  { name: 'Medical Coding', slug: 'medical-coding' },
  { name: 'CISI Programs', slug: 'cisi-programs' },
];

// ─── CATEGORY COLOR MAP ───────────────────────────────────────────────────────

const categoryColors = {
  Technology: '#2563eb',
  Design: '#7c3aed',
  Finance: '#d97706',
  Management: '#0284c7',
  Healthcare: '#0369a1',
  Skills: '#db2777',
};

// ─── FAQ ITEM ─────────────────────────────────────────────────────────────────

const FaqItem = ({ faq, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
      <div className="faq-question">
        <span className="faq-q-label">Q{index + 1}</span>
        <h3>{faq.question}</h3>
        <span className="faq-chevron">{open ? '▲' : '▼'}</span>
      </div>
      <div className={`faq-answer ${open ? 'visible' : ''}`}>
        <p>{faq.answer}</p>
      </div>
    </div>
  );
};

// ─── MAIN COMPONENT ─────────────────────────────────────────────────────────

const CourseDetail = () => {
  const { slug } = useParams();
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const sidebarRef = useRef(null);
  const benefitsRef = useRef(null);
  const whyRef = useRef(null);
  const faqRef = useRef(null);
  const servicesRef = useRef(null);
  const subCoursesRef = useRef(null);
  const floatingRef = useRef(null);
  const navigate = useNavigate()

  const course = coursesData[slug] || coursesData['cbse-computing'];

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // Hero parallax title
      gsap.fromTo(
        '.cd-hero-title',
        { y: 80, opacity: 0, skewY: 3 },
        { y: 0, opacity: 1, skewY: 0, duration: 1, ease: 'power3.out', delay: 0.1 }
      );
      gsap.fromTo(
        '.cd-hero-breadcrumb',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.5 }
      );
      gsap.fromTo(
        '.cd-hero-badge',
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.5, delay: 0.7, ease: 'back.out(1.7)' }
      );

      // Floating icon parallax on scroll
      if (heroRef.current) {
        gsap.to('.cd-hero-icon', {
          y: 60,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      // Main content slide in
      gsap.fromTo(
        '.cd-main-content',
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.cd-main-content', start: 'top 85%' },
        }
      );

      // Sidebar
      gsap.fromTo(
        '.cd-sidebar',
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.cd-sidebar', start: 'top 85%' },
        }
      );

      // Sub-courses stagger
      if (subCoursesRef.current) {
        const chips = subCoursesRef.current.querySelectorAll('.sub-course-chip');
        gsap.fromTo(
          chips,
          { opacity: 0, y: 20, scale: 0.92 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.4,
            stagger: 0.04,
            ease: 'power2.out',
            scrollTrigger: { trigger: subCoursesRef.current, start: 'top 80%' },
          }
        );
      }

      // Benefits
      if (benefitsRef.current) {
        const items = benefitsRef.current.querySelectorAll('.cd-benefit-item');
        gsap.fromTo(
          items,
          { x: -40, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: { trigger: benefitsRef.current, start: 'top 80%' },
          }
        );
      }

      // Why Choose
      if (whyRef.current) {
        const items = whyRef.current.querySelectorAll('.cd-why-item');
        gsap.fromTo(
          items,
          { x: -40, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: { trigger: whyRef.current, start: 'top 80%' },
          }
        );
      }

      // Services
      if (servicesRef.current) {
        const items = servicesRef.current.querySelectorAll('.cd-service-item');
        gsap.fromTo(
          items,
          { scale: 0.8, opacity: 0, y: 30 },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: 'back.out(1.5)',
            scrollTrigger: { trigger: servicesRef.current, start: 'top 80%' },
          }
        );
      }

      // Section headers reveal
      gsap.utils.toArray('.cd-section-title').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 85%' },
          }
        );
      });
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [slug]);

  const accentStyle = { '--course-accent': course.color, '--course-light': course.accentColor };

  const handleDownloadBrochure = () => {
    const generatePDF = () => {
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();

      const hexToRgb = (hex) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return [r, g, b];
      };
      const [cr, cg, cb] = hexToRgb(course.color);

      const pageW = doc.internal.pageSize.getWidth();
      const pageH = doc.internal.pageSize.getHeight();
      const margin = 14;

      const addNewPage = () => {
        doc.addPage();
        doc.setFillColor(13, 17, 23);
        doc.rect(0, 0, pageW, pageH, 'F');
      };

      const checkPageBreak = (y, needed = 14) => {
        if (y + needed > pageH - 16) {
          addNewPage();
          return 20;
        }
        return y;
      };

      // ── PAGE 1 BACKGROUND ──
      doc.setFillColor(13, 17, 23);
      doc.rect(0, 0, pageW, pageH, 'F');

      // ── HEADER ──
      doc.setFillColor(cr, cg, cb);
      doc.rect(0, 0, pageW, 50, 'F');

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(22);
      doc.setTextColor(255, 255, 255);
      doc.text('TechAngle', margin, 18);

      doc.setFontSize(9);
      doc.setFont('helvetica', 'normal');
      doc.text('Course Brochure', margin, 27);

      doc.setFontSize(13);
      doc.setFont('helvetica', 'bold');
      const titleLines = doc.splitTextToSize(course.title, pageW - margin * 2);
      doc.text(titleLines, margin, 40);

      // ── ABOUT ──
      let y = 62;
      doc.setFontSize(11);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(cr, cg, cb);
      doc.text('About This Program', margin, y);
      y += 7;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.setTextColor(185, 185, 185);
      const descLines = doc.splitTextToSize(course.description, pageW - margin * 2);
      descLines.forEach((line) => {
        y = checkPageBreak(y, 6);
        doc.text(line, margin, y);
        y += 5.5;
      });
      y += 6;

      // ── COURSES INCLUDED ──
      y = checkPageBreak(y, 20);
      doc.setFontSize(11);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(cr, cg, cb);
      doc.text('Courses Included', margin, y);
      y += 7;

      const cols = 2;
      const colW = (pageW - margin * 2) / cols;
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);

      course.subCourses.forEach((c, i) => {
        const col = i % cols;
        if (col === 0) {
          y = checkPageBreak(y, 6);
        }
        const x = margin + col * colW;
        const rowY = col === 0 ? y : y; // both cols share same y per row
        doc.setTextColor(cr, cg, cb);
        doc.text('-', x, rowY);
        doc.setTextColor(200, 200, 200);
        const label = doc.splitTextToSize(c, colW - 8)[0];
        doc.text(label, x + 5, rowY);
        if (col === cols - 1 || i === course.subCourses.length - 1) {
          y += 6;
        }
      });
      y += 6;

      // ── BENEFITS ──
      y = checkPageBreak(y, 20);
      doc.setFontSize(11);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(cr, cg, cb);
      doc.text('Key Benefits', margin, y);
      y += 7;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      course.benefits.forEach((item) => {
        y = checkPageBreak(y, 6);
        doc.setTextColor(cr, cg, cb);
        doc.text('>', margin, y);
        doc.setTextColor(200, 200, 200);
        const wrapped = doc.splitTextToSize(item, pageW - margin * 2 - 8);
        wrapped.forEach((line, li) => {
          if (li > 0) y = checkPageBreak(y, 5.5);
          doc.text(line, margin + 6, y);
          if (li < wrapped.length - 1) y += 5.5;
        });
        y += 6;
      });
      y += 4;

      // ── WHY TECHANGLE ──
      y = checkPageBreak(y, 20);
      doc.setFontSize(11);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(cr, cg, cb);
      doc.text('Why Choose TechAngle?', margin, y);
      y += 7;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      course.whyChoose.forEach((item) => {
        y = checkPageBreak(y, 6);
        doc.setTextColor(cr, cg, cb);
        doc.text('*', margin, y);
        doc.setTextColor(200, 200, 200);
        const wrapped = doc.splitTextToSize(item, pageW - margin * 2 - 8);
        wrapped.forEach((line, li) => {
          if (li > 0) y = checkPageBreak(y, 5.5);
          doc.text(line, margin + 6, y);
          if (li < wrapped.length - 1) y += 5.5;
        });
        y += 6;
      });
      y += 4;

      // ── SERVICES ──
      y = checkPageBreak(y, 20);
      doc.setFontSize(11);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(cr, cg, cb);
      doc.text('Services We Provide', margin, y);
      y += 7;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      course.services.forEach((s) => {
        y = checkPageBreak(y, 6);
        doc.setTextColor(cr, cg, cb);
        doc.text('+', margin, y);
        doc.setTextColor(200, 200, 200);
        doc.text(s, margin + 6, y);
        y += 6;
      });
      y += 6;

      // ── CONTACT BLOCK ──
      y = checkPageBreak(y, 34);
      doc.setFillColor(cr, cg, cb);
      doc.roundedRect(margin - 2, y - 4, pageW - margin * 2 + 4, 32, 4, 4, 'F');

      doc.setFontSize(11);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(255, 255, 255);
      doc.text('Contact Us', margin + 2, y + 6);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.text('Phone: +91 7907372646', margin + 2, y + 15);
      doc.text('Location: InfoPark, Kochi, Kerala', margin + 2, y + 22);

      // ── FOOTER (last page) ──
      const totalPages = doc.internal.getNumberOfPages();
      for (let p = 1; p <= totalPages; p++) {
        doc.setPage(p);
        doc.setFillColor(cr, cg, cb);
        doc.rect(0, pageH - 12, pageW, 12, 'F');
        doc.setFontSize(8);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(255, 255, 255);
        doc.text(
          'TechAngle  |  Empowering Careers Through Technology  |  www.techangle.org',
          pageW / 2,
          pageH - 5,
          { align: 'center' }
        );
      }

      doc.save(`TechAngle-${course.title.replace(/\s+/g, '-')}-Brochure.pdf`);
    };

    // If jsPDF already loaded, use it directly
    if (window.jspdf) {
      generatePDF();
      return;
    }

    // Otherwise inject script once
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
    script.onload = generatePDF;
    script.onerror = () => alert('Failed to load PDF library. Please check your internet connection.');
    document.head.appendChild(script);
  };
  return (
    <div className="cd-page" style={accentStyle}>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="cd-hero" ref={heroRef} style={{ '--hero-color': course.color }}>
        <div className="cd-hero-bg-grid" />
        <div className="cd-hero-orb cd-orb-1" />
        <div className="cd-hero-orb cd-orb-2" />
        <div className="cd-container cd-hero-inner">
          <div className="cd-hero-text">
            {course.partnerBadge && (
              <div className="cd-partner-badge">{course.partnerBadge}</div>
            )}
            <div className="cd-hero-badge">{course.category}</div>
            <h1 className="cd-hero-title">{course.title}</h1>
            <nav className="cd-hero-breadcrumb">
              <Link to="/">Home</Link>
              <span>›</span>
              <Link to="/courses">Courses</Link>
              <span>›</span>
              <span>{course.subtitle}</span>
            </nav>
          </div>
          <div className="cd-hero-icon-wrap">
            <div className="cd-hero-icon">{course.icon}</div>
            <div className="cd-hero-icon-ring" />
          </div>
        </div>
        <div className="cd-hero-wave">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="var(--cd-bg)" />
          </svg>
        </div>
      </section>

      {/* ── MAIN LAYOUT ──────────────────────────────────────────── */}
      <section className="cd-body">
        <div className="cd-container cd-grid">

          {/* LEFT CONTENT */}
          <div className="cd-main-content" ref={contentRef}>

            {/* Description */}
            <div className="cd-card cd-desc-card">
              <div className="cd-card-accent" style={{ background: course.color }} />
              <h2 className="cd-section-title">{course.title}</h2>
              <p className="cd-desc-text">{course.description}</p>
              <button className="cd-apply-btn" style={{ background: course.color }} onClick={() => navigate('/contact')}>
                Apply Now
                <span className="cd-btn-arrow">→</span>
              </button>
            </div>

            {/* Sub-Courses */}
            <div className="cd-card" ref={subCoursesRef}>
              <h2 className="cd-section-title">
                <span className="cd-title-dot" style={{ background: course.color }} />
                Courses Included
              </h2>
              <div className="cd-sub-courses-grid">
                {course.subCourses.map((c, i) => (
                  <span className="sub-course-chip" key={i} style={{ borderColor: course.color + '44' }}>
                    <span className="chip-dot" style={{ background: course.color }} />
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="cd-card" ref={benefitsRef}>
              <h2 className="cd-section-title">
                <span className="cd-title-dot" style={{ background: course.color }} />
                Benefits of This Course
              </h2>
              <ul className="cd-list">
                {course.benefits.map((b, i) => (
                  <li className="cd-benefit-item" key={i}>
                    <span className="cd-check" style={{ background: course.color }}>✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Why TechAngle */}
            <div className="cd-card" ref={whyRef}>
              <h2 className="cd-section-title">
                <span className="cd-title-dot" style={{ background: course.color }} />
                Why Choose TechAngle?
              </h2>
              <ul className="cd-list">
                {course.whyChoose.map((w, i) => (
                  <li className="cd-why-item" key={i}>
                    <span className="cd-star" style={{ color: course.color }}>★</span>
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* FAQs */}
            <div className="cd-card" ref={faqRef}>
              <h2 className="cd-section-title">
                <span className="cd-title-dot" style={{ background: course.color }} />
                Frequently Asked Questions
              </h2>
              <div className="cd-faq-list">
                {course.faqs.map((f, i) => (
                  <FaqItem faq={f} index={i} key={i} />
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="cd-card" ref={servicesRef}>
              <h2 className="cd-section-title">
                <span className="cd-title-dot" style={{ background: course.color }} />
                Services We Provide
              </h2>
              <div className="cd-services-grid">
                {course.services.map((s, i) => (
                  <div className="cd-service-item" key={i} style={{ borderTop: `3px solid ${course.color}` }}>
                    <div className="cd-service-icon" style={{ color: course.color }}>◈</div>
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="cd-sidebar" ref={sidebarRef}>

            {/* All Courses */}
            <div className="cd-sidebar-card">
              <h3 className="cd-sidebar-title">All Courses</h3>
              <nav className="cd-sidebar-nav">
                {sidebarCourses.map((c, i) => (
                  <Link
                    key={i}
                    to={`/courses/${c.slug}`}
                    className={`cd-nav-link ${slug === c.slug ? 'active' : ''}`}
                    style={slug === c.slug ? { background: course.color } : {}}
                  >
                    <span>{c.name}</span>
                    <span className="cd-nav-arrow">→</span>
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div className="cd-sidebar-card cd-contact-card" style={{ '--contact-color': course.color }}>
              <div className="cd-contact-icon">📞</div>
              <h3>Get In Touch For Any Inquiries</h3>
              <p>Our team is here to help you choose the right course.</p>
              <a href="tel:+917907372646" className="cd-phone-btn" style={{ background: course.color }}>
                +91 7907372646
              </a>
            </div>

            {/* Brochure */}
            {/* <div className="cd-sidebar-card cd-brochure-card">
              <div className="cd-brochure-icon">📄</div>
              <h3>Download Brochure</h3>
              <p>Get the complete course curriculum and fee structure.</p>
              <button className="cd-download-btn" style={{ background: course.color }} onClick={handleDownloadBrochure}>
                📥 Download PDF
              </button>
            </div> */}

            {/* Info Card */}
            <div className="cd-sidebar-card cd-info-card">
              <div className="cd-info-row">
                <span className="cd-info-icon">📍</span>
                <div>
                  <strong>Location</strong>
                  <p>InfoPark, Kochi, Kerala</p>
                </div>
              </div>
              <div className="cd-info-row">
                <span className="cd-info-icon">🏆</span>
                <div>
                  <strong>Certification</strong>
                  <p>Globally Recognized</p>
                </div>
              </div>
              <div className="cd-info-row">
                <span className="cd-info-icon">💼</span>
                <div>
                  <strong>Career Support</strong>
                  <p>Placement Assistance</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default CourseDetail;