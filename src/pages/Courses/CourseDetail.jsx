import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './CourseDetail.css';
import MKCL from "../../../public/assets/MKCL.png"
import AAPC from "../../../public/assets/AAPC.png"
import CISI from "../../../public/assets/CISI.png"
import CGIB from "../../../public/assets/CGBIImage.png"
import BIM from "../../../public/assets/BIMLOGO.png"
import CAFS from "../../../public/assets/CAFSLOGOS.png"

gsap.registerPlugin(ScrollTrigger);

// ─── COMPLETE COURSE DATA FROM BROCHURE ─────────────────────────────────────

const coursesData = {
  'cbse-computing': {
    title: 'CBSE Computing Skills Program',
    subtitle: 'CBSE Computing',
    category: 'Technology',
icon: <img src={MKCL} alt="MKCL" style={{ width: '600px', height: '150px', objectFit: 'contain' }} />,    color: '#2563eb',
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
    // In 'cbse-computing':
    curriculumTable: [
      {
        name: 'Computer Applications – Class IX',
        level: 'foundational',
        focus: 'IT Foundations',
        details: {
          description:
            'A beginner-level course introducing Class IX CBSE students to fundamental computing concepts, basic programming, and digital tools as per the CBSE Computer Applications syllabus (Code 165/402). Delivered via MKCL\'s ERA platform with interactive videos, simulations, and hands-on labs.',
          duration: '60 Hours',
          mode: 'Online & Offline | Lab-Based Learning',
          topics: [
            'Introduction to computers — components, hardware, software, and types',
            'Operating system basics — Windows/Linux navigation and file management',
            'Networking fundamentals — internet, browser, email, and cybersafety',
            'Word processing with MS Word — formatting, tables, mail merge',
            'Spreadsheets with MS Excel — formulas, functions, charts, data handling',
            'Presentations with MS PowerPoint — slide design and animations',
            'Cyber ethics and digital citizenship — responsible internet use',
            'Typing practice with Rapid Typing Tutor — speed and accuracy',
            'Introduction to HTML — basic web page creation',
          ],
          outcomes: [
            'Operate a computer and manage files across operating systems',
            'Create documents, spreadsheets, and presentations using MS Office tools',
            'Understand networking, internet, and email concepts',
            'Practice safe, ethical, and responsible use of digital technology',
            'Prepare for the CBSE Class IX Computer Applications exam',
          ],
        },
      },
      {
        name: 'Computer Applications – Class X CBSE',
        level: 'foundational',
        focus: 'CBSE Board Exam Prep',
        details: {
          description:
            'A comprehensive CBSE board preparation course for Class X students in Computer Applications (Code 165). Covers the complete CBSE syllabus with practical lab sessions, mock tests, and sample paper practice aligned to board exam patterns.',
          duration: '60 Hours',
          mode: 'Online & Offline | CBSE Board Aligned',
          topics: [
            'Networking and internet — LAN, WAN, protocols, internet services',
            'HTML — tags, attributes, lists, tables, forms, and hyperlinks',
            'Advanced spreadsheets — advanced Excel formulas, functions, charts',
            'Database concepts — introduction to database management and SQL basics',
            'Cyber security — threats, protection measures, and safe online behaviour',
            'IT applications in society — e-commerce, e-governance, digital India',
            'CBSE sample paper practice — board-pattern mock tests',
            'Practical examination preparation — project and viva readiness',
            'Typing and data entry skills — speed and accuracy improvement',
          ],
          outcomes: [
            'Demonstrate complete knowledge of the CBSE Class X Computer Applications syllabus',
            'Create and style web pages using HTML',
            'Work with spreadsheets and databases for data management tasks',
            'Identify and respond to cybersecurity threats',
            'Pass the CBSE Class X Computer Applications board examination with confidence',
          ],
        },
      },
      {
        name: 'Information Technology – Class X',
        level: 'foundational',
        focus: 'IT Concepts & Digital Skills',
        details: {
          description:
            'Aligned with the CBSE Information Technology subject (Code 402) for Class X, this course develops practical IT skills including communication tools, spreadsheets, digital documentation, and IT applications in everyday life.',
          duration: '60 Hours',
          mode: 'Online & Offline | CBSE IT Syllabus',
          topics: [
            'Communication skills in digital contexts — email, messaging, netiquette',
            'Self-management and employability skills — goal setting and time management',
            'IT tools for communication — word processors, email clients, messaging apps',
            'Spreadsheet applications — data entry, sorting, filtering, and charts',
            'Digital presentations — PowerPoint design principles and slide transitions',
            'Internet services — search engines, cloud storage, and online collaboration',
            'Emerging trends in IT — AI basics, IoT, digital payments, and e-governance',
            'Data security and privacy — password management and phishing awareness',
            'Practical project — digital portfolio or IT-integrated school project',
          ],
          outcomes: [
            'Use digital communication tools professionally and safely',
            'Create spreadsheets, presentations, and digital documents to professional standards',
            'Understand IT applications in daily life, business, and governance',
            'Demonstrate employability and self-management skills alongside technical knowledge',
            'Clear the CBSE Class X Information Technology theory and practical examinations',
          ],
        },
      },
      {
        name: 'Computer Applications – Class 11',
        level: 'intermediate',
        focus: 'Applied Computing & Python Intro',
        details: {
          description:
            'Covers the CBSE Class XI Computer Applications syllabus with an emphasis on applied computing, introduction to Python programming, database concepts, and web technologies. Designed to bridge the gap between Class X digital skills and Class XII advanced computing.',
          duration: '60 Hours',
          mode: 'Online & Offline | CBSE Class 11 Aligned',
          topics: [
            'Computer system overview — hardware, software, memory, and I/O devices',
            'Introduction to Python — variables, data types, operators, and expressions',
            'Python control structures — if-else, loops (for, while), and nested logic',
            'Python functions — defining, calling, parameters, and return values',
            'Strings and lists in Python — operations, slicing, and built-in methods',
            'Introduction to databases — concepts, SQL basics, SELECT queries',
            'Web technologies — HTML basics, CSS introduction, and browser concepts',
            'Networking fundamentals — types of networks, protocols, and internet basics',
            'Cyber safety and ethics — intellectual property, digital rights, and privacy',
          ],
          outcomes: [
            'Write and execute basic Python programs using variables, loops, and functions',
            'Understand database concepts and write simple SQL queries',
            'Create basic web pages using HTML and CSS',
            'Explain computer hardware, software, and networking fundamentals',
            'Prepare thoroughly for CBSE Class XI Computer Applications examinations',
          ],
        },
      },
      {
        name: 'Informatics Practices – Class 11',
        level: 'intermediate',
        focus: 'Data & Networks',
        details: {
          description:
            'Aligned with the CBSE Informatics Practices syllabus for Class XI, this course focuses on Python programming, data handling, database management using SQL, and networking concepts essential for Class XII and competitive examinations.',
          duration: '60 Hours',
          mode: 'Online & Offline | CBSE Informatics Practices',
          topics: [
            'Introduction to computer systems and digital information processing',
            'Python basics — variables, data types, input/output, and type conversion',
            'Python operators, expressions, and conditional statements',
            'Iterative structures — for loops, while loops, and nested loops in Python',
            'Strings in Python — indexing, slicing, traversal, and string functions',
            'Lists, tuples, and dictionaries — creation, operations, and methods',
            'Introduction to relational databases — concepts, tables, keys, and SQL',
            'SQL basics — DDL and DML: CREATE, INSERT, SELECT, WHERE, ORDER BY',
            'Networking — LAN, WAN, MAN, protocols (TCP/IP, HTTP), internet services',
            'Societal impacts of IT — digital divide, e-waste, and data privacy',
          ],
          outcomes: [
            'Write Python programs using data structures (strings, lists, tuples, dictionaries)',
            'Design and query relational databases using SQL',
            'Understand networking concepts and internet services',
            'Analyse societal impacts of computing and information technology',
            'Achieve strong performance in CBSE Class XI Informatics Practices examinations',
          ],
        },
      },
      {
        name: 'Computer Science – Class 12',
        level: 'advanced',
        focus: 'Programming, Algorithms & Theory',
        details: {
          description:
            'A rigorous CBSE Class XII Computer Science course (Code 083) covering advanced Python programming, data structures, object-oriented programming, database management with SQL, and networking. Includes full board exam preparation with mock tests and practical lab sessions.',
          duration: '60 Hours',
          mode: 'Online & Offline | CBSE Class 12 Board Prep',
          topics: [
            'Advanced Python — functions, recursion, scope, and modules',
            'Object-oriented programming in Python — classes, objects, inheritance, and polymorphism',
            'Python exception handling — try, except, finally, and custom exceptions',
            'File handling in Python — text files, binary files, and CSV files',
            'Data structures — stacks (using lists), queues, and their Python implementations',
            'Algorithms — linear search, binary search, bubble sort, insertion sort, selection sort',
            'Relational databases and SQL — joins, aggregate functions, GROUP BY, HAVING',
            'MySQL with Python — database connectivity using mysql.connector',
            'Computer networks — OSI model, TCP/IP, protocols, network security, firewalls',
            'Cybersecurity — threats, safeguards, and ethical hacking concepts',
            'Society, law, and ethics — IP rights, cybercrime, plagiarism, and privacy laws',
            'CBSE board mock tests and practical examination preparation',
          ],
          outcomes: [
            'Write advanced Python programs using OOP, file handling, and exception management',
            'Implement fundamental data structures and sorting/searching algorithms in Python',
            'Connect Python applications to MySQL databases and execute complex SQL queries',
            'Explain computer networking models, protocols, and security concepts',
            'Perform confidently in both the CBSE Class XII Computer Science theory and practical board examinations',
          ],
        },
      },
      {
        name: 'Informatics Practices – Class 12',
        level: 'advanced',
        focus: 'Databases, Python & Data Analysis',
        details: {
          description:
            'Covers the complete CBSE Class XII Informatics Practices syllabus with deep focus on Python for data handling, Pandas and Matplotlib for data analysis and visualization, advanced MySQL, and networking. Ideal for students targeting both board excellence and future careers in data science.',
          duration: '60 Hours',
          mode: 'Online & Offline | CBSE Class 12 Board Prep',
          topics: [
            'Python revision — functions, modules, and data structure recap',
            'Data handling with Pandas — Series, DataFrame, reading CSV files',
            'DataFrame operations — loc, iloc, filtering, sorting, groupby, and aggregation',
            'Data visualization with Matplotlib — line charts, bar charts, histograms, pie charts',
            'Advanced MySQL — joins (INNER, LEFT, RIGHT), aggregate functions, GROUP BY, HAVING',
            'MySQL connectivity with Python using mysql.connector',
            'CRUD operations through Python-MySQL integration projects',
            'Computer networks — types, topologies, protocols, and network devices',
            'Internet services and web technologies — HTTP, FTP, email, cloud computing',
            'Societal impacts and emerging technologies — AI, machine learning, IoT overview',
            'CBSE practical examination projects and board mock papers',
          ],
          outcomes: [
            'Perform data analysis and visualization using Pandas and Matplotlib in Python',
            'Design and query advanced MySQL databases with joins and aggregate functions',
            'Build Python-MySQL integrated mini-projects for the CBSE practical examination',
            'Explain networking concepts, internet services, and emerging technologies',
            'Excel in CBSE Class XII Informatics Practices theory and practical board exams',
          ],
        },
      },
    ],
  },

  'mastery-data-platform': {
    title: 'Mastery Data Platform',
    subtitle: 'Data & Excel Mastery',
    category: 'Technology',
icon: <img src={MKCL} alt="MKCL" style={{ width: '600px', height: '150px', objectFit: 'contain' }} />,    color: '#2563eb',
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
    // In 'mastery-data-platform':
    curriculumTable: [
      {
        name: 'Introduction to MS Excel',
        level: 'foundational',
        focus: 'Excel Intro',
        details: {
          description: 'A beginner-level introduction to Microsoft Excel covering the interface, basic navigation, data entry, and simple formulas. Ideal for anyone new to spreadsheets.',
          duration: '30 Hours',
          mode: 'Online & Offline | Lab-Based Learning',
          topics: [
            'Introduction to MS Excel — interface, ribbons, and workbook navigation',
            'Data entry — text, numbers, dates, and cell formatting',
            'Basic formulas — SUM, AVERAGE, MIN, MAX, COUNT',
            'Cell references — relative, absolute, and mixed',
            'Formatting cells — fonts, colors, borders, and alignment',
            'Inserting and managing rows, columns, and sheets',
            'Basic charts — bar, column, pie, and line charts',
            'Printing and page layout settings',
            'Saving, sharing, and file format basics',
          ],
          outcomes: [
            'Navigate the Excel interface and manage workbooks confidently',
            'Enter and format data correctly in spreadsheets',
            'Write basic formulas for arithmetic and statistical calculations',
            'Create simple charts to visualize data',
            'Prepare and print spreadsheets professionally',
          ],
        },
      },
      {
        name: 'Excel Essentials',
        level: 'foundational',
        focus: 'Excel Basics',
        details: {
          description: 'Builds on Excel basics with essential skills for everyday workplace data tasks including sorting, filtering, and working with tables.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Working with data — sorting, filtering, and find & replace',
            'Tables — creating, formatting, and using structured references',
            'Named ranges and their practical uses',
            'Conditional formatting — highlighting cells, data bars, color scales',
            'Essential functions — IF, COUNTA, LEN, TRIM, UPPER, LOWER',
            'Data validation — drop-down lists and input restrictions',
            'Freeze panes, split view, and worksheet navigation shortcuts',
            'Protecting worksheets and workbooks',
            'Introduction to Print Area and Header/Footer',
          ],
          outcomes: [
            'Sort and filter datasets to extract meaningful information',
            'Use Excel tables for structured data management',
            'Apply conditional formatting to highlight key data points',
            'Use essential text and logical functions in daily work',
            'Protect and share spreadsheets securely',
          ],
        },
      },
      {
        name: 'Fundamentals of Excel, Formulas, and Functions',
        level: 'foundational',
        focus: 'Excel Formulas',
        details: {
          description: 'A focused course on Excel formulas and functions — covering logical, lookup, text, date, and mathematical functions used in real workplace scenarios.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Formula fundamentals — order of operations, error types, and debugging',
            'Logical functions — IF, AND, OR, NOT, nested IF',
            'Lookup functions — VLOOKUP, HLOOKUP, INDEX, MATCH',
            'Text functions — CONCATENATE, LEFT, RIGHT, MID, FIND, SUBSTITUTE',
            'Date and time functions — TODAY, NOW, DATEDIF, EDATE, NETWORKDAYS',
            'Mathematical functions — ROUND, INT, MOD, SUMIF, COUNTIF',
            'Statistical functions — AVERAGEIF, LARGE, SMALL, RANK',
            'Array formulas introduction',
            'Formula auditing tools — trace precedents, evaluate formula',
          ],
          outcomes: [
            'Write complex formulas using logical, lookup, and text functions',
            'Perform date calculations and time-based analysis',
            'Use VLOOKUP and INDEX-MATCH for data retrieval across sheets',
            'Debug and audit formula errors confidently',
            'Apply real-world formula solutions to business problems',
          ],
        },
      },
      {
        name: 'MS Word and MS Excel Basics',
        level: 'foundational',
        focus: 'Office Basics',
        details: {
          description: 'A combined introductory course covering the essential features of MS Word for document creation and MS Excel for data management — the two most widely used office productivity tools.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'MS Word basics — creating, formatting, and saving documents',
            'Paragraph formatting — alignment, spacing, indents, and styles',
            'Tables, images, and SmartArt in Word',
            'Mail merge for bulk letter generation',
            'MS Excel basics — interface, data entry, and navigation',
            'Simple formulas — SUM, AVERAGE, IF basics',
            'Basic sorting, filtering, and data presentation',
            'Charts and graphs in Excel',
            'Printing documents and spreadsheets professionally',
          ],
          outcomes: [
            'Create and format professional documents using MS Word',
            'Use mail merge for bulk correspondence',
            'Enter and organize data in Excel spreadsheets',
            'Build simple formulas and charts in Excel',
            'Print and share Word and Excel files correctly',
          ],
        },
      },
      {
        name: 'MS Excel and MS PowerPoint Basics',
        level: 'foundational',
        focus: 'Office Tools',
        details: {
          description: 'A combined course covering MS Excel for data handling and MS PowerPoint for creating professional presentations — essential tools for workplace productivity.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'MS Excel basics — data entry, formatting, formulas, and charts',
            'Using Excel tables and sorting/filtering data',
            'MS PowerPoint interface — slides, layouts, and themes',
            'Adding text, images, shapes, and SmartArt to slides',
            'Slide transitions and animations',
            'Embedding Excel charts and data into PowerPoint',
            'Presenter view and slide show management',
            'Exporting presentations as PDF and video',
            'Design principles for effective business presentations',
          ],
          outcomes: [
            'Manage and analyze data using MS Excel basics',
            'Create visually compelling presentations in PowerPoint',
            'Link Excel data to PowerPoint slides',
            'Deliver presentations confidently using Presenter View',
            'Export and share presentations in multiple formats',
          ],
        },
      },
      {
        name: 'Data Mastery Basics',
        level: 'foundational',
        focus: 'Data Basics',
        details: {
          description: 'An introductory course establishing the foundational concepts of data — what it is, how it is organized, and how basic tools are used to manage and present data effectively.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Introduction to data — types, sources, and importance in decision-making',
            'Structured vs unstructured data — understanding the difference',
            'Introduction to spreadsheets as data tools',
            'Organizing data — tables, lists, and basic database concepts',
            'Data cleaning basics — removing duplicates, fixing errors, standardizing formats',
            'Basic data presentation — tables, simple charts, and summaries',
            'Introduction to data security and privacy principles',
            'Understanding data in business contexts',
            'Overview of tools used for data management',
          ],
          outcomes: [
            'Explain what data is and why it matters in business',
            'Organize raw data into structured formats',
            'Perform basic data cleaning and preparation tasks',
            'Present data clearly using tables and simple visualizations',
            'Understand fundamental data security and privacy concepts',
          ],
        },
      },
      {
        name: 'Data Entry Pro',
        level: 'foundational',
        focus: 'Data Entry',
        details: {
          description: 'A professional data entry course developing speed, accuracy, and best practices for entering and managing data in digital systems — essential for administrative and back-office roles.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Introduction to professional data entry — roles, tools, and standards',
            'Touch typing techniques and speed development',
            'Data entry in MS Excel — shortcuts, autofill, and tab navigation',
            'Forms and templates for structured data entry',
            'Numeric data entry — keypad techniques for speed and accuracy',
            'Data validation — ensuring accuracy through drop-down lists and rules',
            'Error detection and correction in datasets',
            'Introduction to data entry software and online platforms',
            'Quality control and accuracy verification techniques',
          ],
          outcomes: [
            'Enter data quickly and accurately using professional techniques',
            'Use MS Excel shortcuts and tools for efficient data entry',
            'Apply data validation to prevent entry errors',
            'Detect and correct errors in entered datasets',
            'Meet industry-standard data entry speed and accuracy benchmarks',
          ],
        },
      },
      {
        name: 'Efficient Techniques for Data Entry',
        level: 'foundational',
        focus: 'Efficiency',
        details: {
          description: 'Focuses on advanced techniques and shortcuts to maximize data entry speed, minimize errors, and automate repetitive entry tasks using Excel and digital tools.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Excel keyboard shortcuts for rapid data entry',
            'Flash Fill and AutoFill for pattern-based data entry',
            'Custom lists and autocomplete settings',
            'Using Forms for structured data input in Excel',
            'Batch data entry techniques and template design',
            'Copy-paste special techniques — values, formats, transpose',
            'Import data from external sources — CSV, text files, web',
            'Introduction to Power Query for automated data import',
            'Reducing errors with data validation and dropdown lists',
          ],
          outcomes: [
            'Use Excel shortcuts and automation features for faster data entry',
            'Apply Flash Fill and AutoFill for pattern-based tasks',
            'Import and clean data from external files and sources',
            'Design efficient data entry templates for teams',
            'Significantly reduce data entry time and error rates',
          ],
        },
      },
      {
        name: 'Data Entry and Data Management 2025',
        level: 'foundational',
        focus: 'Data Entry & Management',
        details: {
          description: 'An updated 2025 course combining professional data entry skills with data management principles — covering modern tools, cloud-based entry platforms, and data governance basics.',
          duration: '60 Hours',
          mode: 'Online & Offline',
          topics: [
            'Professional data entry standards and accuracy benchmarks',
            'Excel data entry techniques — shortcuts, validation, and templates',
            'Data management fundamentals — organizing, storing, and retrieving data',
            'Introduction to database concepts — tables, records, and fields',
            'Cloud-based data entry — Google Sheets and online forms',
            'Data cleaning — removing duplicates, standardizing formats, fixing inconsistencies',
            'Data governance basics — ownership, access control, and quality standards',
            'Introduction to CRM and ERP data entry workflows',
            'Data security and confidentiality in workplace environments',
          ],
          outcomes: [
            'Enter and manage data to professional standards using Excel and cloud tools',
            'Apply data management principles for organized, retrievable datasets',
            'Clean and prepare raw data for analysis',
            'Understand data governance and security requirements',
            'Operate effectively in CRM or ERP data entry environments',
          ],
        },
      },
      {
        name: 'Data Reporting with Excel',
        level: 'foundational',
        focus: 'Reporting',
        details: {
          description: 'Learn to create professional data reports using Microsoft Excel — covering PivotTables, charts, dashboards, and automated reporting techniques for business communication.',
          duration: '60 Hours',
          mode: 'Online & Offline',
          topics: [
            'Principles of effective data reporting for business audiences',
            'PivotTables — creating, summarizing, and grouping data',
            'PivotCharts — visualizing PivotTable data dynamically',
            'Slicers and timelines for interactive report filtering',
            'Building management dashboards in Excel',
            'Conditional formatting for visual reporting signals',
            'SUMIF, COUNTIF, AVERAGEIF for report calculations',
            'Linking data across multiple sheets for consolidated reports',
            'Printing and formatting reports for professional presentation',
          ],
          outcomes: [
            'Build professional reports and dashboards using Excel PivotTables',
            'Create interactive reports with slicers and timelines',
            'Design management dashboards for business decision-making',
            'Apply advanced formulas for automated reporting calculations',
            'Present data reports clearly to non-technical audiences',
          ],
        },
      },
      {
        name: 'Basics of Data Analytics and Data Visualisation',
        level: 'foundational',
        focus: 'Analytics Intro',
        details: {
          description: 'An entry-level introduction to data analytics and visualization — covering the analytics process, key concepts, and how to use Excel and basic tools to turn raw data into visual insights.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'What is data analytics? — descriptive, diagnostic, predictive, prescriptive',
            'The data analytics process — collect, clean, analyze, visualize, interpret',
            'Introduction to data visualization — why visuals communicate better than numbers',
            'Chart types and when to use them — bar, line, pie, scatter, histogram',
            'Building charts in Excel for analytical purposes',
            'Descriptive statistics — mean, median, mode, standard deviation',
            'Introduction to PivotTables for data summarization',
            'Reading and interpreting basic data dashboards',
            'Overview of analytics tools — Excel, Power BI, Tableau',
          ],
          outcomes: [
            'Explain the analytics process and types of data analysis',
            'Choose the correct chart type for different data scenarios',
            'Build and interpret basic data visualizations in Excel',
            'Calculate and interpret descriptive statistics',
            'Read and understand basic business dashboards',
          ],
        },
      },
      {
        name: 'Data Visualisation Essentials',
        level: 'intermediate',
        focus: 'Visualisation',
        details: {
          description: 'A focused course on creating effective data visualizations using Excel and introductory BI tools. Covers chart design principles, storytelling with data, and dashboard fundamentals.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Principles of effective data visualization — clarity, accuracy, and aesthetics',
            'Choosing the right chart — when to use bar, line, scatter, waterfall, etc.',
            'Advanced Excel charts — combo charts, sparklines, dynamic charts',
            'Color theory and design principles for data visualization',
            'Data storytelling — structuring a visual narrative for decision-makers',
            'Building interactive dashboards with slicers and dynamic charts',
            'Introduction to Power BI — importing data and basic visuals',
            'Introduction to Tableau basics for data visualization',
            'Dashboard design best practices — layout, hierarchy, and whitespace',
          ],
          outcomes: [
            'Apply visualization principles to create clear, accurate, and compelling charts',
            'Build dynamic dashboards using Excel slicers and linked charts',
            'Tell a data story that leads to informed business decisions',
            'Navigate Power BI or Tableau at a beginner level for visual reporting',
            'Design dashboards that communicate insights at a glance',
          ],
        },
      },
      {
        name: 'Database Essentials',
        level: 'foundational',
        focus: 'Database Basics',
        details: {
          description: 'An introductory course covering relational database concepts, basic SQL, and how databases are used in data management and business applications.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Introduction to databases — what they are and why they matter',
            'Relational database concepts — tables, rows, columns, keys',
            'Entity-Relationship (ER) diagrams — designing simple databases',
            'Database Management Systems (DBMS) overview — MySQL, MS Access',
            'SQL basics — SELECT, WHERE, ORDER BY, LIMIT',
            'Filtering data with SQL — AND, OR, BETWEEN, LIKE, IN',
            'Inserting and updating records — INSERT, UPDATE, DELETE',
            'Introduction to JOINs — connecting related tables',
            'Using MS Access or MySQL Workbench for basic database tasks',
          ],
          outcomes: [
            'Explain relational database concepts and terminology',
            'Design simple databases using ER diagrams',
            'Write basic SQL queries to retrieve and filter data',
            'Insert, update, and delete records in a database',
            'Use a DBMS tool (MS Access or MySQL) for basic data management',
          ],
        },
      },
      {
        name: 'Database Management Fundamentals',
        level: 'intermediate',
        focus: 'DB Fundamentals',
        details: {
          description: 'Develops database management skills beyond the basics — covering normalization, relational queries, views, and the principles of maintaining data integrity in a business database.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Normalization — 1NF, 2NF, 3NF and why it matters',
            'Primary keys, foreign keys, and referential integrity',
            'Advanced SQL — JOINs (INNER, LEFT, RIGHT, FULL OUTER)',
            'Aggregate functions — COUNT, SUM, AVG, GROUP BY, HAVING',
            'Subqueries and nested SELECT statements',
            'Views — creating and managing database views',
            'Database indexes — what they are and when to use them',
            'Transactions and ACID properties',
            'Backup and restore strategies for database maintenance',
          ],
          outcomes: [
            'Normalize databases to eliminate redundancy and maintain integrity',
            'Write intermediate SQL queries using JOINs and aggregate functions',
            'Create and use views for simplified data access',
            'Understand indexes, transactions, and ACID principles',
            'Implement basic backup and maintenance procedures for databases',
          ],
        },
      },
      {
        name: 'Database Management and SQL Mastery',
        level: 'intermediate',
        focus: 'SQL & Databases',
        details: {
          description: 'A comprehensive course developing strong SQL skills and database management proficiency using MySQL — covering queries, functions, joins, and database design for data-driven roles.',
          duration: '60 Hours',
          mode: 'Online & Offline',
          topics: [
            'MySQL environment setup and database creation',
            'DDL commands — CREATE, ALTER, DROP for tables and schemas',
            'DML commands — INSERT, UPDATE, DELETE with conditions',
            'Advanced SELECT queries — aliases, DISTINCT, wildcards',
            'JOINs in depth — INNER, LEFT, RIGHT, CROSS, SELF JOIN',
            'Aggregate functions — SUM, COUNT, AVG with GROUP BY and HAVING',
            'Subqueries — correlated and non-correlated subqueries',
            'String, numeric, and date functions in MySQL',
            'Database design — normalization, ER diagrams, and schema creation',
          ],
          outcomes: [
            'Design and create relational databases using MySQL',
            'Write advanced SQL queries including JOINs and subqueries',
            'Use aggregate functions for data summarization and reporting',
            'Apply normalization to build efficient database schemas',
            'Manage and maintain MySQL databases professionally',
          ],
        },
      },
      {
        name: 'Advanced Database Management and SQL Mastery',
        level: 'advanced',
        focus: 'Advanced SQL',
        details: {
          description: 'Takes SQL and database management to a professional level — covering stored procedures, triggers, indexing strategies, query optimization, and production database administration.',
          duration: '60 Hours',
          mode: 'Online & Offline',
          topics: [
            'Stored procedures — creating, calling, and parameterizing',
            'Functions — user-defined functions in MySQL',
            'Triggers — BEFORE and AFTER triggers for data automation',
            'Views — advanced use cases and updatable views',
            'Advanced indexing — B-Tree indexes, full-text search, composite indexes',
            'Query optimization — EXPLAIN plan and index tuning',
            'Transactions — COMMIT, ROLLBACK, SAVEPOINT, isolation levels',
            'User management and privileges in MySQL',
            'Database performance monitoring and optimization',
          ],
          outcomes: [
            'Write and deploy stored procedures, functions, and triggers',
            'Optimize query performance using advanced indexing and EXPLAIN plans',
            'Manage transactions and ensure data consistency',
            'Administer user roles, privileges, and database security',
            'Monitor and maintain production MySQL databases effectively',
          ],
        },
      },
      {
        name: 'Advanced Database Management and Application',
        level: 'advanced',
        focus: 'DB Applications',
        details: {
          description: 'Applies advanced database management concepts to real-world application development — covering database integration with business applications, concurrency control, and data warehousing.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Database application architecture — how apps connect to databases',
            'Connection pooling and database performance for applications',
            'Concurrency control — locking mechanisms and deadlock prevention',
            'Database recovery — log-based recovery and backup strategies',
            'Distributed databases — concepts and challenges',
            'Introduction to NoSQL — document, key-value, and columnar databases',
            'Data warehousing concepts — OLAP vs OLTP, star schema, snowflake schema',
            'ETL basics — Extract, Transform, Load for data warehousing',
            'Database security — encryption, auditing, and compliance',
          ],
          outcomes: [
            'Integrate databases with business applications effectively',
            'Manage concurrency and prevent data conflicts in production',
            'Understand distributed databases and NoSQL use cases',
            'Apply data warehousing and ETL concepts for analytical workloads',
            'Secure and audit databases for compliance requirements',
          ],
        },
      },
      {
        name: 'MYSQL Databases',
        level: 'intermediate',
        focus: 'MySQL',
        details: {
          description: 'A dedicated MySQL course covering installation, configuration, database design, SQL querying, and administration — designed for developers and data professionals.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'MySQL installation, configuration, and MySQL Workbench setup',
            'Database and table creation — data types and constraints',
            'CRUD operations — INSERT, SELECT, UPDATE, DELETE',
            'Advanced queries — JOINs, subqueries, GROUP BY, HAVING',
            'MySQL functions — string, date, numeric, and aggregate',
            'Stored procedures and functions in MySQL',
            'User accounts, privileges, and security in MySQL',
            'Backup and restore using mysqldump and MySQL Workbench',
            'Performance tuning — indexing and query optimization basics',
          ],
          outcomes: [
            'Install and configure MySQL and MySQL Workbench',
            'Design and manage relational databases in MySQL',
            'Write complex SQL queries for data retrieval and management',
            'Create stored procedures and manage user privileges',
            'Back up, restore, and optimize MySQL databases',
          ],
        },
      },
      {
        name: 'Data Analysis Techniques using Microsoft Excel',
        level: 'intermediate',
        focus: 'Excel Analysis',
        details: {
          description: 'A practical course applying Excel as a full data analysis tool — covering analytical functions, PivotTables, What-If analysis, statistical tools, and business problem-solving with data.',
          duration: '60 Hours',
          mode: 'Online & Offline',
          topics: [
            'Data preparation for analysis — cleaning, structuring, and transforming data',
            'PivotTables for multi-dimensional analysis and cross-tabulation',
            'Advanced formulas for analysis — VLOOKUP, INDEX-MATCH, XLOOKUP',
            'Statistical analysis — correlation, regression using Excel tools',
            'What-If analysis — Goal Seek, Scenario Manager, Data Tables',
            'Forecasting — trend lines, moving averages, FORECAST functions',
            'Named ranges and dynamic arrays for scalable analysis',
            'Power Query for data transformation and preparation',
            'Presenting analytical findings — dashboards and visual reports',
          ],
          outcomes: [
            'Perform complete data analysis workflows using Excel',
            'Apply PivotTables for multi-dimensional business analysis',
            'Use What-If analysis and forecasting tools for business planning',
            'Clean and transform raw data using Power Query',
            'Present analytical findings through dashboards and reports',
          ],
        },
      },
      {
        name: 'Utilizing Excel for Data Entry and Analysis',
        level: 'intermediate',
        focus: 'Excel Entry & Analysis',
        details: {
          description: 'Combines efficient data entry with analytical skills in Excel — covering structured data entry, validation, and building analysis workflows from raw data to insights.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Structured data entry using Excel tables and templates',
            'Data validation — restricting input types and creating dropdown menus',
            'Flash Fill and Power Query for data import and cleaning',
            'Using VLOOKUP and INDEX-MATCH for data enrichment',
            'PivotTables for summarizing entered data',
            'Building analytical views from raw data entries',
            'Conditional formatting for data quality monitoring',
            'Charts and dashboards built from entry-level data',
            'Automating repetitive entry and analysis tasks with macros',
          ],
          outcomes: [
            'Build efficient, validated data entry systems in Excel',
            'Clean and enrich entered data using lookup and Power Query tools',
            'Summarize and analyze entered data using PivotTables and charts',
            'Monitor data quality using conditional formatting',
            'Automate entry-to-analysis workflows using Excel macros',
          ],
        },
      },
      {
        name: 'Excel Analytics Pro',
        level: 'intermediate',
        focus: 'Analytics',
        details: {
          description: 'An advanced analytics-focused Excel course covering Power Query, Power Pivot, advanced DAX-style formulas, and business intelligence techniques within Excel.',
          duration: '60 Hours',
          mode: 'Online & Offline',
          topics: [
            'Power Query — data import, transformation, and automation',
            'Merging and appending queries for multi-source data analysis',
            'Power Pivot — data model creation and relationships',
            'DAX basics — calculated columns and measures in Power Pivot',
            'Advanced PivotTable techniques — calculated fields, slicers, timelines',
            'Dynamic arrays — FILTER, SORT, UNIQUE, XLOOKUP, SEQUENCE',
            'Statistical analytics — regression, correlation, descriptive stats',
            'KPI dashboards using Excel analytics tools',
            'Connecting Excel to external data sources',
          ],
          outcomes: [
            'Build automated data pipelines using Power Query',
            'Create data models and relationships using Power Pivot',
            'Write DAX measures for advanced business calculations',
            'Use dynamic array functions for modern Excel analytics',
            'Build professional KPI dashboards from multiple data sources',
          ],
        },
      },
      {
        name: 'Mastering Data Analysis',
        level: 'intermediate',
        focus: 'Analysis Techniques',
        details: {
          description: 'A comprehensive intermediate data analysis course covering the complete analytical workflow — from problem definition and data collection through analysis, visualization, and insight communication.',
          duration: '60 Hours',
          mode: 'Online & Offline',
          topics: [
            'The data analysis cycle — define, collect, clean, analyze, communicate',
            'Problem framing and KPI definition for business analysis',
            'Data wrangling — handling missing values, outliers, and inconsistencies',
            'Exploratory Data Analysis (EDA) techniques',
            'Descriptive analytics — summaries, distributions, and trends',
            'Comparative analysis — benchmarking and variance analysis',
            'Correlation and basic regression analysis',
            'Building analytical dashboards and visualizations',
            'Communicating analytical findings to stakeholders',
          ],
          outcomes: [
            'Apply the complete data analysis cycle to business problems',
            'Perform exploratory data analysis and descriptive statistics',
            'Identify trends, correlations, and variances in datasets',
            'Build dashboards that communicate insights clearly',
            'Present data findings persuasively to non-technical stakeholders',
          ],
        },
      },
      {
        name: 'Data Management',
        level: 'intermediate',
        focus: 'Data Management',
        details: {
          description: 'Covers the principles and practices of managing organizational data — including data architecture, quality management, storage strategies, and governance frameworks.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Data management fundamentals — scope, importance, and roles',
            'Data architecture — how data flows through organizations',
            'Data quality dimensions — accuracy, completeness, consistency, timeliness',
            'Master data management (MDM) concepts',
            'Data storage strategies — structured, semi-structured, unstructured',
            'Data lifecycle management — creation, storage, use, archival, deletion',
            'Data governance frameworks — policies, stewardship, and accountability',
            'Introduction to data catalogs and metadata management',
            'GDPR and data privacy principles for data managers',
          ],
          outcomes: [
            'Explain data management principles and organizational data flows',
            'Apply data quality frameworks to maintain clean, reliable data',
            'Implement data governance policies and stewardship practices',
            'Manage data across its lifecycle from creation to deletion',
            'Understand data privacy regulations and their implications',
          ],
        },
      },
      {
        name: 'Data Security and Ethical Considerations',
        level: 'intermediate',
        focus: 'Data Security',
        details: {
          description: 'Covers the critical aspects of data security, privacy regulations, and ethical responsibilities for data professionals working with sensitive organizational and personal data.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Principles of data security — confidentiality, integrity, availability',
            'Data classification — public, internal, confidential, and sensitive data',
            'Access control — role-based access, authentication, and authorization',
            'Encryption basics — at rest and in transit',
            'Data privacy laws — GDPR, India PDPB, and sector-specific regulations',
            'Ethical data collection and use — consent, transparency, and fairness',
            'Data breach prevention and incident response basics',
            'Anonymization and pseudonymization techniques',
            'Ethical considerations in AI and data-driven decision-making',
          ],
          outcomes: [
            'Apply data security principles to protect organizational data',
            'Implement access controls and encryption for data protection',
            'Understand GDPR and Indian data privacy regulatory requirements',
            'Practice ethical data collection, use, and sharing',
            'Respond appropriately to data breaches and security incidents',
          ],
        },
      },
      {
        name: 'Advanced Data Mastery',
        level: 'advanced',
        focus: 'Advanced Analytics',
        details: {
          description: 'Work with large datasets, apply filtering, formulas, and manage records effectively. This advanced course builds complete data mastery using Excel, Power Query, and analytical techniques for data professionals.',
          duration: '60 Hours',
          mode: 'Online & Offline | Back Office Focus',
          topics: [
            'Introduction to Data Management — understanding its importance across domains',
            'Exploring free and open-source tools for data management',
            'Data collection tools — storage, organization, analysis, and visualization',
            'Implementing best practices for efficient data management',
            'Real-world data scenarios and project-based application',
            'Understanding data visualization and its role in decision-making',
            'Advanced data visualization techniques for various data types',
            'Learning automation strategies to streamline data-related tasks',
            'Implementing automation tools to increase productivity and efficiency',
            'Applying visualization and automation strategies to real-world scenarios',
          ],
          outcomes: [
            'Understand the importance of effective data management across contexts',
            'Utilize tools for data collection, storage, organization, analysis, and visualization',
            'Implement best practices including data cleaning, security, and documentation',
            'Analyse data effectively using appropriate visualization techniques',
            'Continuously improve data management skills through exploration of new tools',
            'Implement automation strategies to streamline data-related tasks',
            'Create automated reporting systems and interactive visualizations',
            'Analyse real-world data scenarios and apply strategies to solve problems',
          ],
        },
      },
      {
        name: 'Advanced Data Analytics and Data Visualisation',
        level: 'advanced',
        focus: 'Visualization',
        details: {
          description: 'An advanced course combining sophisticated data analytics techniques with professional-grade visualization — covering Power BI, Tableau, statistical modeling, and executive dashboard design.',
          duration: '60 Hours',
          mode: 'Online & Offline',
          topics: [
            'Advanced analytical thinking — hypothesis testing, root cause analysis',
            'Power BI — data import, transformation, relationships, and DAX',
            'Building interactive Power BI reports and dashboards',
            'Tableau fundamentals — connecting data and building workbooks',
            'Advanced visualization types — waterfall, Sankey, heatmaps, geographic maps',
            'Statistical modeling basics — regression, forecasting, trend analysis',
            'Dashboard design for executives — KPIs, drill-down, and storytelling',
            'Combining Excel, Power BI, and Tableau in an analytics workflow',
            'Sharing and publishing dashboards for organizational use',
          ],
          outcomes: [
            'Build advanced analytics workflows combining multiple tools',
            'Create professional Power BI dashboards with DAX measures',
            'Visualize data in Tableau using advanced chart types',
            'Apply statistical modeling for business forecasting',
            'Design executive dashboards that drive strategic decisions',
          ],
        },
      },
      {
        name: 'Data Visualization and Automation Strategies',
        level: 'advanced',
        focus: 'Automation',
        details: {
          description: 'Combines advanced data visualization with automation strategies — covering Excel macros, Power Automate, automated reporting pipelines, and integrating visualization with automation tools.',
          duration: '60 Hours',
          mode: 'Online & Offline',
          topics: [
            'Advanced Excel charts — dynamic charts linked to data sources',
            'Excel macros and VBA for automation — recording, editing, and writing macros',
            'Automating report generation using VBA and scheduled tasks',
            'Power Query automation — refreshable data pipelines',
            'Introduction to Power Automate for workflow automation',
            'Connecting Excel and Power BI for automated reporting',
            'Building self-updating dashboards with live data connections',
            'Email automation for scheduled report distribution',
            'Best practices for maintaining automated data systems',
          ],
          outcomes: [
            'Write Excel macros and VBA scripts to automate repetitive tasks',
            'Build refreshable Power Query pipelines for automated data updates',
            'Create self-updating dashboards connected to live data sources',
            'Use Power Automate to build business workflow automation',
            'Deploy automated reporting systems that save time and reduce errors',
          ],
        },
      },
      {
        name: 'Advanced Excel 2025',
        level: 'advanced',
        focus: 'Formulas & Automation',
        details: {
          description: 'A comprehensive advanced Excel course updated for 2025 — covering the latest Excel features including dynamic arrays, XLOOKUP, Power Query, Power Pivot, and AI-assisted analysis tools.',
          duration: '60 Hours',
          mode: 'Online & Offline',
          topics: [
            'Dynamic arrays — FILTER, SORT, UNIQUE, SEQUENCE, RANDARRAY',
            'XLOOKUP and XMATCH — modern alternatives to VLOOKUP/INDEX-MATCH',
            'Lambda functions and LET for reusable custom formulas',
            'Power Query advanced — M language basics and custom transformations',
            'Power Pivot and DAX — data modeling and calculated measures',
            'Excel co-authoring and collaboration in Microsoft 365',
            'Excel AI features — data analysis suggestions and Copilot basics',
            'Advanced charting — dynamic charts, combo charts, custom visuals',
            'Macros and VBA for task automation',
          ],
          outcomes: [
            'Use the latest Excel 2025 features including dynamic arrays and XLOOKUP',
            'Build reusable custom functions using Lambda and LET',
            'Create advanced data models using Power Query and Power Pivot',
            'Leverage Excel AI features for faster analysis',
            'Automate workflows using macros and VBA scripts',
          ],
        },
      },
    ],
  },

  'digital-designing': {
    title: 'Digital Designing',
    subtitle: 'Design & Creative Arts',
    category: 'Design',
icon: <img src={MKCL} alt="MKCL" style={{ width: '600px', height: '150px', objectFit: 'contain' }} />,    color: '#2563eb',
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
    curriculumTable: [
      // ── 120-HOUR FLAGSHIP COURSES ──────────────────────────────────
      {
        name: 'Content Illustration',
        level: 'intermediate',
        focus: 'Brand Illustration',
        details: {
          description: 'Every brand needs original content and it is always high on illustration. This course trains you to create custom brand-aligned illustrations using Adobe Illustrator and related tools.',
          duration: '120 Hours',
          mode: 'Online & Offline',
          topics: [
            'Introduction to Illustration & Brand Storytelling',
            'Adobe Illustrator Interface & Core Tools',
            'Shapes, Paths, Bezier Curves & Pen Tool Mastery',
            'Color Theory & Brand Color Palettes',
            'Typography in Illustration',
            'Character & Icon Design for Brands',
            'Vector Illustration Workflow for Print & Digital',
            'Exporting Assets for Web, Social & Print',
            'Portfolio Building for Brand Illustrators',
          ],
          outcomes: [
            'Create original vector illustrations aligned to brand identity',
            'Master Adobe Illustrator tools for professional illustration',
            'Design icons, characters, and brand assets from scratch',
            'Export illustrations correctly for different media',
            'Build a professional illustration portfolio',
          ],
        },
      },
      {
        name: 'DTP (Adobe)',
        level: 'intermediate',
        focus: 'Adobe Desktop Publishing',
        details: {
          description: 'MKCL\'s DEEP DTP Adobe course will lead the learner through professional desktop publishing using Adobe InDesign, Photoshop, and Illustrator for print and digital publishing workflows.',
          duration: '120 Hours',
          mode: 'Online & Offline',
          topics: [
            'Introduction to Desktop Publishing & Print Production',
            'Adobe InDesign: Layout, Grids & Master Pages',
            'Typography: Fonts, Styles, Paragraphs & Text Flow',
            'Image Placement & Linking in InDesign',
            'Creating Brochures, Newsletters & Magazines',
            'Adobe Photoshop Integration for Image Editing',
            'Adobe Illustrator Integration for Vector Graphics',
            'Preflight, PDF Export & Print-Ready File Preparation',
            'Digital Publishing: Interactive PDFs & ePub Basics',
          ],
          outcomes: [
            'Design and produce professional print publications using Adobe InDesign',
            'Integrate Photoshop and Illustrator assets into DTP workflows',
            'Apply typography and grid systems for polished layouts',
            'Prepare print-ready files with correct bleed, marks, and color profiles',
            'Create both print and digital publishing deliverables',
          ],
        },
      },
      {
        name: 'DTP (CorelDRAW)',
        level: 'intermediate',
        focus: 'CorelDRAW Desktop Publishing',
        details: {
          description: 'The DEEP DTP (CorelDRAW) is a 120-hour course designed to provide comprehensive training in desktop publishing using CorelDRAW for vector design, layout, and print production.',
          duration: '120 Hours',
          mode: 'Online & Offline',
          topics: [
            'Introduction to CorelDRAW Interface & Workspace',
            'Vector Drawing: Shapes, Lines, Curves & Nodes',
            'Color Management & Fills in CorelDRAW',
            'Typography & Text Handling in CorelDRAW',
            'Layout Design: Brochures, Flyers & Posters',
            'Working with Bitmaps & Photo-Paint Integration',
            'CorelDRAW for Business Stationery & Brand Collateral',
            'Output & Print Preparation from CorelDRAW',
            'Creating Multi-Page Publications',
          ],
          outcomes: [
            'Create professional vector illustrations and layouts using CorelDRAW',
            'Design business cards, brochures, posters, and brand materials',
            'Handle color profiles and print preparation in CorelDRAW',
            'Use CorelDRAW and Corel Photo-Paint together for complete DTP',
            'Export and prepare files for professional printing',
          ],
        },
      },
      {
        name: 'DTP (Adobe & CorelDRAW)',
        level: 'intermediate',
        focus: 'Combined DTP',
        details: {
          description: 'The DEEP DTP (Adobe & CorelDRAW) 120-hour course is a combined desktop publishing program covering both Adobe InDesign/Illustrator and CorelDRAW for complete print and digital publishing proficiency.',
          duration: '120 Hours',
          mode: 'Online & Offline',
          topics: [
            'Comparative Overview: Adobe DTP vs CorelDRAW DTP',
            'Adobe InDesign: Layout & Typographic Design',
            'CorelDRAW: Vector Design & Layout',
            'Photoshop & Corel Photo-Paint for Image Editing',
            'Creating Brochures, Catalogues & Magazines in Both Tools',
            'Brand Identity & Stationery Design',
            'Print Workflow: Preflight, Color Profiles & Bleed',
            'Digital Output: PDFs, ePubs & Web Graphics',
            'Industry Best Practices & Workflow Management',
          ],
          outcomes: [
            'Work proficiently in both Adobe and CorelDRAW ecosystems',
            'Design professional publications using both toolsets',
            'Make informed decisions on which platform suits a given project',
            'Prepare files for both print and digital distribution',
            'Build a versatile DTP portfolio across multiple software platforms',
          ],
        },
      },
      {
        name: 'Graphic Designing',
        level: 'intermediate',
        focus: 'Visual Design',
        details: {
          description: 'Graphic Designer is the one who designs, creates, edits, and produces visual content. This comprehensive course covers graphic design fundamentals through professional-level work using Adobe tools.',
          duration: '120 Hours',
          mode: 'Online & Offline',
          topics: [
            'Design Principles: Balance, Hierarchy, Contrast, Alignment',
            'Color Theory & Psychology in Design',
            'Typography: Selection, Pairing & Layout',
            'Adobe Photoshop: Photo Editing & Compositing',
            'Adobe Illustrator: Vector Illustration & Logo Design',
            'Adobe InDesign: Layout Design for Print',
            'Social Media Graphics & Digital Ad Design',
            'Brand Identity Design: Logo, Business Cards, Stationery',
            'Packaging Design Basics',
            'Portfolio Development & Freelance Readiness',
          ],
          outcomes: [
            'Apply design principles to create professional visual content',
            'Work across Photoshop, Illustrator, and InDesign workflows',
            'Design logos, brand identities, and marketing materials',
            'Create print-ready and digital design assets',
            'Build a professional graphic design portfolio',
          ],
        },
      },
      {
        name: 'Photoshop',
        level: 'intermediate',
        focus: 'Photo Editing & Manipulation',
        details: {
          description: 'Photoshop is a photo editing and manipulating software used to enhance, retouch, and composite images. This course provides complete mastery of Adobe Photoshop from basics to advanced techniques.',
          duration: '120 Hours',
          mode: 'Online & Offline',
          topics: [
            'Photoshop Interface, Tools & Workspace Customization',
            'Selection Tools: Marquee, Lasso, Magic Wand, Quick Select',
            'Layers: Types, Blending Modes & Layer Styles',
            'Retouching: Healing, Clone Stamp, Patch & Content-Aware',
            'Color Correction & Adjustments: Curves, Levels, Hue/Sat',
            'Masking: Layer Masks, Clipping Masks & Channels',
            'Filters & Smart Filters for Creative Effects',
            'Compositing: Cutting Out Subjects & Background Replacement',
            'Typography & Text Effects in Photoshop',
            'Actions, Batch Processing & Automation',
            'Saving & Exporting for Web, Print & Social Media',
          ],
          outcomes: [
            'Edit, retouch, and enhance photos professionally',
            'Create complex photo composites and manipulations',
            'Master layers, masks, and blending modes',
            'Apply color correction and creative effects',
            'Optimize and export images for multiple output formats',
          ],
        },
      },
      {
        name: 'Video Editing',
        level: 'foundational',
        focus: 'Video Production',
        details: {
          description: 'Video editing is a process of modifying or rearranging video shots to create a new work. This comprehensive course covers the complete video editing workflow using industry-standard software.',
          duration: '120 Hours',
          mode: 'Online & Offline',
          topics: [
            'Introduction to Video Editing & Post-Production Workflow',
            'Adobe Premiere Pro Interface & Project Setup',
            'Importing, Organising & Managing Media',
            'Timeline Editing: Cuts, Trims & Transitions',
            'Audio Editing: Levels, Music & Sound Design',
            'Color Correction & Color Grading in Premiere',
            'Text & Titles: Lower Thirds & Motion Graphics',
            'Basic Visual Effects & Green Screen (Chroma Key)',
            'Export Settings for YouTube, Social Media & Broadcast',
            'DaVinci Resolve Introduction for Color Grading',
          ],
          outcomes: [
            'Edit videos professionally using Adobe Premiere Pro',
            'Assemble footage with cuts, transitions, and audio sync',
            'Perform color correction and basic color grading',
            'Add titles, graphics, and basic visual effects',
            'Export videos correctly for all major platforms and formats',
          ],
        },
      },
      {
        name: 'Web Designing',
        level: 'foundational',
        focus: 'Web Design',
        details: {
          description: 'A web designer is essentially in a supporting role. This complete course covers web design from layout principles to coding with HTML, CSS, and responsive design best practices.',
          duration: '120 Hours',
          mode: 'Online & Offline',
          topics: [
            'Introduction to Web Design & UX Principles',
            'HTML5: Structure, Semantic Tags & Forms',
            'CSS3: Styling, Box Model, Flexbox & Grid',
            'Responsive Design & Mobile-First Approach',
            'Typography & Color in Web Design',
            'Web Design Tools: Figma / Adobe XD for Wireframing',
            'Navigation, UI Patterns & Interaction Design',
            'Web Graphics: Optimizing Images & SVGs',
            'Introduction to JavaScript for Interactivity',
            'Domain, Hosting & Website Deployment',
          ],
          outcomes: [
            'Design and code responsive websites using HTML and CSS',
            'Apply UX/UI principles to web layout and navigation',
            'Create wireframes and prototypes using Figma or Adobe XD',
            'Optimize web graphics for performance',
            'Deploy a complete website to live hosting',
          ],
        },
      },

      // ── 30-HOUR FOCUSED COURSES ────────────────────────────────────
      {
        name: 'Fundamentals of Image Editing',
        level: 'foundational',
        focus: 'Editing Basics',
        details: {
          description: 'Learn essential image editing tools and techniques to enhance, crop, and retouch photos. A foundational course introducing the core concepts of digital image editing.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Introduction to Digital Images: Resolution, File Formats, Color Modes',
            'Photoshop Interface & Basic Navigation',
            'Cropping, Resizing & Canvas Adjustments',
            'Basic Retouching: Healing Brush, Spot Heal & Clone Stamp',
            'Brightness, Contrast & Basic Color Correction',
            'Selection Tools & Simple Masking',
            'Layers Introduction & Simple Compositing',
            'Saving & Exporting Images for Web and Print',
          ],
          outcomes: [
            'Understand image file formats, resolution, and color modes',
            'Perform basic retouching and color corrections',
            'Use selection and masking tools for simple edits',
            'Work with layers for basic compositing',
            'Export images correctly for different use cases',
          ],
        },
      },
      {
        name: 'Advanced Image Editing Techniques',
        level: 'foundational',
        focus: 'Advanced Editing',
        details: {
          description: 'Advance your editing skills with non-destructive workflows and professional-level retouching using Photoshop. Covers advanced techniques for creative and commercial photo editing.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Non-Destructive Editing: Smart Objects & Adjustment Layers',
            'Advanced Masking: Refine Edge, Select & Mask',
            'Frequency Separation for Skin Retouching',
            'Dodge & Burn Techniques for Contouring',
            'Advanced Color Grading using Curves & Color Balance',
            'Blending Modes in Depth for Creative Effects',
            'Content-Aware Fill & Generative Fill (AI)',
            'Creating Photo Composites & Digital Art',
          ],
          outcomes: [
            'Apply non-destructive workflows with Smart Objects and Adjustment Layers',
            'Retouch portraits using frequency separation and dodge & burn',
            'Master advanced masking for complex selections',
            'Create sophisticated photo composites',
            'Apply professional color grading and creative effects',
          ],
        },
      },
      {
        name: 'Photo Restoration Methods',
        level: 'intermediate',
        focus: 'Photo Restoration',
        details: {
          description: 'Restore old and damaged photographs using digital tools. This course covers specialist techniques for repairing torn, faded, scratched, or water-damaged photos.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Introduction to Photo Restoration & Scanning Best Practices',
            'Removing Dust, Scratches & Noise',
            'Rebuilding Missing Areas with Content-Aware & Clone Tools',
            'Repairing Tears, Folds & Water Damage',
            'Color Restoration: Fixing Fading & Discoloration',
            'Colorizing Black & White Photos',
            'Sharpening & Enhancing Old Photo Details',
            'Before/After Presentation & Client Delivery',
          ],
          outcomes: [
            'Diagnose and plan restoration of damaged photographs',
            'Remove scratches, dust, and noise professionally',
            'Rebuild missing areas and repair severe damage',
            'Restore and colorize faded or black-and-white photos',
            'Deliver restored images at print-ready quality',
          ],
        },
      },
      {
        name: 'Creative Effects and Artistic Editing',
        level: 'advanced',
        focus: 'Creative Photo Effects',
        details: {
          description: 'Apply stylized filters, textures, and digital effects to transform images into artistic works. This course explores creative and conceptual photo manipulation techniques.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Double Exposure & Blend Effects',
            'Photo Manipulation: Surreal & Fantasy Compositing',
            'Texture Overlays & Vintage Effects',
            'Dispersion & Particle Effects',
            'Glitch Art & Digital Distortion Effects',
            'Cinematic Color Grading Styles (Orange-Teal, Matte, etc.)',
            'Liquify & Warp for Creative Distortions',
            'Creating Artistic Digital Artwork from Photos',
          ],
          outcomes: [
            'Create surreal and fantasy photo composites',
            'Apply cinematic and artistic color grading styles',
            'Use dispersion, glitch, and particle effects creatively',
            'Transform ordinary photos into digital art pieces',
            'Build a creative photography and manipulation portfolio',
          ],
        },
      },
      {
        name: 'Illustration Essentials: From Concept to Creation',
        level: 'foundational',
        focus: 'Illustration Foundations',
        details: {
          description: 'Develop conceptual sketches into refined illustrations, focusing on composition, style development, and use of Adobe Illustrator for professional illustration work.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'From Sketch to Digital: Concept Development Process',
            'Illustration Styles: Flat, Line Art, Isometric, Editorial',
            'Pen Tool Mastery for Clean Vector Paths',
            'Composition Principles for Illustration',
            'Building Complex Scenes from Simple Shapes',
            'Color Schemes & Shading in Illustrator',
            'Creating Scene Illustrations for Editorial Use',
            'Preparing Illustrations for Print & Digital Use',
          ],
          outcomes: [
            'Develop illustration concepts from sketches to finished digital art',
            'Apply composition and color principles to illustrations',
            'Work in multiple illustration styles (flat, line art, editorial)',
            'Use Adobe Illustrators Pen Tool and shape tools fluently',
            'Prepare final illustrations for both print and digital platforms',
          ],
        },
      },
      {
        name: 'Guide to Mastering Adobe Illustrator',
        level: 'foundational',
        focus: 'Adobe Illustrator Mastery',
        details: {
          description: 'Unlock Illustrator\'s full potential with detailed guidance from basic tools to advanced vector techniques. A structured beginner course for anyone new to Adobe Illustrator.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Illustrator Interface, Artboards & Document Setup',
            'Drawing Tools: Pen, Pencil, Shapes & Lines',
            'Working with Paths: Anchor Points, Nodes & Boolean Operations',
            'Color: Swatches, Gradients & Patterns',
            'Typography in Illustrator: Text on Path & Area Text',
            'Symbols, Brushes & Libraries',
            'Layers & Groups for Organized Artwork',
            'Live Trace, Mesh Tool & Envelope Distort',
            'Exporting from Illustrator: SVG, PNG, PDF',
          ],
          outcomes: [
            'Navigate and set up Illustrator projects professionally',
            'Draw and edit vector paths with the Pen and shape tools',
            'Apply colors, gradients, and patterns to vector artwork',
            'Use typography, symbols, and brushes in illustration',
            'Export files correctly for all use cases',
          ],
        },
      },
      {
        name: 'Mastering Digital Illustration Tools and Techniques',
        level: 'intermediate',
        focus: 'Advanced Illustration',
        details: {
          description: 'Explore digital brushes, layers, and blending modes while mastering advanced illustration tools. This course elevates your illustration from good to professional-grade.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Advanced Brush Creation & Management in Illustrator',
            'Blending Modes for Illustration Depth & Light',
            'Gradient Mesh for Realistic Shading',
            'Pattern Design & Surface Decoration',
            'Infographic & Data Visualization Illustration',
            'Character Design: Proportions, Expressions & Poses',
            'Perspective Drawing for Isometric & Scene Illustration',
            'Preparing Illustration Files for Clients & Production',
          ],
          outcomes: [
            'Create professional illustrations with advanced brush and blending techniques',
            'Use Gradient Mesh for photorealistic shading and rendering',
            'Design repeating patterns and surface decoration',
            'Develop character designs with consistent style',
            'Produce client-ready illustration files in correct formats',
          ],
        },
      },
      {
        name: 'Character Design, Ethics, and Output',
        level: 'advanced',
        focus: 'Character Design',
        details: {
          description: 'Design original characters while considering ethical design principles, intellectual property, and final output for animation, games, and publishing.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Character Design Principles: Silhouette, Shape Language & Personality',
            'Designing Original vs Derivative Characters (IP & Ethics)',
            'Turnaround Sheets & Model Sheets for Production',
            'Expression Sheets & Emotion Design',
            'Character in Context: World-Building & Lore',
            'Colour Palettes for Character Consistency',
            'Exporting Characters for Animation, Print & Games',
            'Building a Character Design Portfolio',
          ],
          outcomes: [
            'Design original, distinctive characters with strong visual identity',
            'Understand intellectual property and ethical design considerations',
            'Create production-ready model sheets and turnarounds',
            'Develop character expressions and emotional ranges',
            'Prepare characters for animation, gaming, or print use',
          ],
        },
      },
      {
        name: 'Fundamentals of Graphic Design',
        level: 'foundational',
        focus: 'Design Principles',
        details: {
          description: 'Understand design principles, layout, color, and typography to build a strong graphic design foundation. This course covers the theory behind great visual design.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'The 7 Principles of Design: Balance, Contrast, Emphasis, Movement, Pattern, Rhythm, Unity',
            'Color Theory: Wheel, Schemes, Temperature & Psychology',
            'Typography: Typeface Classification, Hierarchy & Pairing',
            'Layout & Composition: Grid Systems, Rule of Thirds',
            'Visual Communication: Imagery, Icons & Symbols',
            'Introduction to Design Thinking & Process',
            'Reading & Critiquing Design Work',
            'Brief Analysis: Interpreting Client Design Briefs',
          ],
          outcomes: [
            'Apply the core principles of visual design to any project',
            'Use color theory and typography strategically',
            'Compose balanced and effective layouts using grids',
            'Interpret and respond to design briefs professionally',
            'Critique and evaluate design work constructively',
          ],
        },
      },
      {
        name: 'Digital Design Tools and Software',
        level: 'foundational',
        focus: 'Design Software Overview',
        details: {
          description: 'Gain hands-on experience with leading digital design tools used in the industry. This beginner course introduces students to the essential software landscape for designers.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Overview of the Design Software Ecosystem',
            'Adobe Photoshop Basics: Interface & Core Tools',
            'Adobe Illustrator Basics: Interface & Core Tools',
            'Adobe InDesign Basics: Layout Overview',
            'Canva & Figma for Quick Design Projects',
            'File Formats: JPEG, PNG, SVG, PDF, AI, PSD',
            'Color Modes: RGB vs CMYK for Screen and Print',
            'Cloud Storage & File Management for Designers',
            'Choosing the Right Tool for the Job',
          ],
          outcomes: [
            'Navigate the major Adobe design tools confidently',
            'Use Canva and Figma for rapid design tasks',
            'Understand and work with correct file formats and color modes',
            'Manage design files and assets professionally',
            'Choose the appropriate tool for different design scenarios',
          ],
        },
      },
      {
        name: 'Creating Brand Identity and Logo Design',
        level: 'intermediate',
        focus: 'Branding & Logo',
        details: {
          description: 'Learn to design impactful logos and cohesive brand elements that communicate a brand\'s personality and values across all touchpoints.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'What is Brand Identity? Brand Strategy Basics',
            'Logo Types: Wordmarks, Lettermarks, Pictorial, Abstract, Emblems',
            'Logo Design Process: Research, Sketching, Digitising',
            'Designing Logos in Adobe Illustrator',
            'Brand Color Palette & Typography Selection',
            'Creating Brand Guidelines & Style Guides',
            'Stationery Design: Business Cards, Letterheads, Envelopes',
            'Brand Mockups & Presentation for Clients',
          ],
          outcomes: [
            'Design professional logos using industry-standard processes',
            'Build complete brand identity systems with color, type & imagery',
            'Create brand guidelines for consistent application',
            'Design brand stationery and collateral materials',
            'Present brand designs professionally to clients',
          ],
        },
      },
      {
        name: 'Designing for Print and Digital Media',
        level: 'advanced',
        focus: 'Print & Digital Production',
        details: {
          description: 'Master the technical and creative differences between print and digital design. Learn correct specifications, color management, and production workflows for both media.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Print vs Digital: Key Differences in Design Approach',
            'Print Specs: Bleed, Trim, Safe Zone, Crop Marks',
            'CMYK vs RGB: Color Profiles & Conversion',
            'Resolution Requirements for Print vs Screen',
            'Designing Brochures, Flyers, Posters for Print',
            'Digital Ad Sizes: Social Media, Display & Email Banners',
            'Preparing Print-Ready PDFs with Correct Settings',
            'Digital Asset Optimization for Web & Social',
          ],
          outcomes: [
            'Design and prepare files correctly for commercial printing',
            'Create digital assets optimized for screen and social media',
            'Manage color profiles between CMYK and RGB workflows',
            'Understand resolution and file specification requirements',
            'Deliver production-ready files for both print and digital',
          ],
        },
      },
      {
        name: 'Fundamentals of Web Design',
        level: 'foundational',
        focus: 'Web Design Basics',
        details: {
          description: 'Understand web layout, user experience (UX), and visual design principles for building effective websites. A foundational course for aspiring web designers.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Introduction to Web Design: Roles & Responsibilities',
            'UX Principles: User Research, Personas & User Journeys',
            'Information Architecture & Site Mapping',
            'Wireframing & Low-Fidelity Prototyping',
            'Visual Design for Web: Grids, Whitespace & Hierarchy',
            'Color & Typography in Web Interfaces',
            'Introduction to HTML & CSS for Designers',
            'Web Design Best Practices & Accessibility Overview',
          ],
          outcomes: [
            'Apply UX research and user-centred design principles',
            'Create sitemaps, wireframes, and low-fidelity prototypes',
            'Design web layouts using grid and visual hierarchy',
            'Understand basic HTML and CSS from a designer\'s perspective',
            'Follow web accessibility guidelines in design decisions',
          ],
        },
      },
      {
        name: 'Responsive Web Design Techniques',
        level: 'foundational',
        focus: 'Responsive Design',
        details: {
          description: 'Create flexible web layouts that adapt to various screen sizes using CSS Flexbox, Grid, and media queries. A beginner-to-intermediate course in responsive web design.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Introduction to Responsive Design & Mobile-First Thinking',
            'CSS Media Queries: Breakpoints & Responsive Rules',
            'Flexbox for Responsive Layouts',
            'CSS Grid for Complex Responsive Layouts',
            'Fluid Typography & Scalable Images',
            'Responsive Navigation Patterns',
            'Testing Responsiveness Across Devices & Browsers',
            'Viewport Meta Tag & Mobile Optimization',
          ],
          outcomes: [
            'Build fully responsive web pages for mobile, tablet, and desktop',
            'Use Flexbox and CSS Grid for adaptive layouts',
            'Write effective media queries for all breakpoints',
            'Test and fix responsive design issues across devices',
            'Apply mobile-first design methodology in all projects',
          ],
        },
      },
      {
        name: 'Web Design Tools, Technologies, and Best Practices',
        level: 'intermediate',
        focus: 'Web Design Tools',
        details: {
          description: 'Get equipped with modern web design tools while ensuring your designs meet performance, accessibility, and usability standards. Covers Figma, Adobe XD, and front-end integration.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Figma: Components, Variants & Auto Layout',
            'Adobe XD: Prototyping & Animations',
            'Design Handoff to Developers: Zeplin & Figma Dev Mode',
            'Design Systems & Component Libraries',
            'Web Performance Best Practices for Designers',
            'Accessibility Standards: WCAG 2.1 Overview',
            'SEO Basics for Web Designers',
            'Cross-Browser & Cross-Device Design Considerations',
          ],
          outcomes: [
            'Build interactive prototypes using Figma and Adobe XD',
            'Create design systems and reusable component libraries',
            'Hand off designs to developers using correct specifications',
            'Apply accessibility and performance best practices',
            'Design with SEO and cross-browser compatibility in mind',
          ],
        },
      },
      {
        name: 'Designing for Web Accessibility',
        level: 'advanced',
        focus: 'Accessible Design',
        details: {
          description: 'Learn inclusive design practices to ensure websites are usable for all people, including those with disabilities. Covers WCAG standards, contrast, keyboard navigation, and screen reader compatibility.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Introduction to Web Accessibility & WCAG 2.1/2.2 Standards',
            'Accessible Color Contrast: Tools & Testing',
            'Typography Accessibility: Font Size, Line Height & Readability',
            'Keyboard Navigation & Focus States in Design',
            'ARIA Roles & Semantic HTML for Screen Readers',
            'Accessible Forms, Buttons & Interactive Elements',
            'Designing for Cognitive & Motor Disabilities',
            'Accessibility Audit Tools: Axe, Lighthouse & Wave',
          ],
          outcomes: [
            'Design interfaces that meet WCAG 2.1/2.2 accessibility standards',
            'Choose accessible color palettes and typography',
            'Design keyboard-navigable and screen-reader-friendly interfaces',
            'Conduct accessibility audits using industry tools',
            'Integrate inclusive design into standard workflows',
          ],
        },
      },
      {
        name: 'Video Editing Techniques',
        level: 'foundational',
        focus: 'Editing Fundamentals',
        details: {
          description: 'Develop editing skills using timelines, cuts, transitions, and pacing fundamentals. A foundational course for beginners entering the world of video editing.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Video Editing Terminology & Workflow Overview',
            'Import & Organise Footage in Premiere Pro',
            'Timeline Basics: Clips, Tracks & Sequences',
            'Cutting Techniques: Hard Cut, J-Cut, L-Cut & Match Cut',
            'Adding & Customizing Transitions',
            'Pacing & Rhythm in Editing',
            'Basic Audio Editing & Music Synchronisation',
            'Simple Titles & Lower Thirds',
            'Exporting Videos for YouTube & Social Media',
          ],
          outcomes: [
            'Edit videos using professional cutting techniques',
            'Assemble sequences with strong narrative pacing',
            'Add and customise transitions and titles',
            'Sync audio and music to video timelines',
            'Export final videos for major digital platforms',
          ],
        },
      },
      {
        name: 'Creative Elements in Video Editing',
        level: 'foundational',
        focus: 'Creative Video',
        details: {
          description: 'Integrate audio, effects, motion graphics, and pacing to elevate video content from raw footage to polished creative productions.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Sound Design: SFX, Ambient Audio & Foley Concepts',
            'Music Licensing & Working with Royalty-Free Music',
            'Motion Graphics: Animated Titles & Kinetic Text',
            'Overlay Effects: Lens Flares, Light Leaks & Film Grain',
            'Speed Ramping & Time Remapping for Drama',
            'Green Screen (Chroma Key) Basics',
            'Storytelling Through Editing: Scene Construction',
            'Creative Cuts for Social Media & Short-Form Content',
          ],
          outcomes: [
            'Enhance videos with professional sound design and music',
            'Create animated titles and motion graphics',
            'Apply creative visual effects and overlays',
            'Use speed ramping and chroma key techniques',
            'Edit short-form content for Instagram, TikTok & YouTube Shorts',
          ],
        },
      },
      {
        name: 'Mastering Video Editing Tools and Motion Design',
        level: 'intermediate',
        focus: 'Motion Design',
        details: {
          description: 'Dive into advanced video editing software and create dynamic motion graphics content using Premiere Pro and After Effects.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Advanced Premiere Pro: Multicam Editing & Sequences',
            'Adobe After Effects: Interface & Core Concepts',
            'Keyframe Animation in After Effects',
            'Motion Graphics Templates (MOGRTs)',
            'Track Mattes, Masks & Compositing in After Effects',
            'Shape Layers & Animation for Logo Reveals',
            'Integrating After Effects Projects with Premiere Pro',
            'Rendering & Export from After Effects',
          ],
          outcomes: [
            'Edit complex multi-camera video projects in Premiere Pro',
            'Create keyframe animations and motion graphics in After Effects',
            'Design and animate logo reveals and infographic animations',
            'Use track mattes and compositing for visual storytelling',
            'Integrate After Effects and Premiere Pro in a seamless pipeline',
          ],
        },
      },
      {
        name: 'Video Editing - Project Management and Workflow',
        level: 'advanced',
        focus: 'Production Workflow',
        details: {
          description: 'Understand the full workflow from planning to collaboration in professional video production environments, covering project management, team coordination, and delivery pipelines.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Pre-Production: Brief, Storyboarding & Shot List',
            'Project Organization: File Naming, Folder Structures & Proxies',
            'Collaborative Editing: Frame.io & Shared Project Workflows',
            'Version Control & Client Review Processes',
            'Audio Workflow: Dialogue Cleanup & ADR Concepts',
            'Color Pipeline: Edit > Grade > Deliver in DaVinci Resolve',
            'Delivery Formats: Broadcast, Cinema & Streaming Specs',
            'Archiving Completed Projects & Asset Libraries',
          ],
          outcomes: [
            'Manage end-to-end video production workflows professionally',
            'Organise projects for solo and collaborative editing teams',
            'Conduct client reviews and manage revisions efficiently',
            'Deliver projects to broadcast, streaming, and online specifications',
            'Archive and manage media assets at a professional level',
          ],
        },
      },
      {
        name: 'Essentials of Desktop Publishing: Design and Layout',
        level: 'foundational',
        focus: 'DTP Fundamentals',
        details: {
          description: 'Learn to design print and digital layouts using desktop publishing principles and tools. A foundational course covering the essential skills for DTP professionals.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Introduction to Desktop Publishing & Its Applications',
            'Page Layout Principles: Margins, Columns & Grids',
            'Typography Essentials for DTP',
            'Working with Images in Layouts: Placement & Linking',
            'Creating Single-Page Documents: Flyers, Posters & Ads',
            'Multi-Page Documents: Brochures & Newsletters',
            'Master Pages & Style Sheets',
            'Introduction to Print Production: Bleed & Crop Marks',
          ],
          outcomes: [
            'Design clean, professional single and multi-page layouts',
            'Apply grid systems and typographic principles in DTP',
            'Work with images, linked files, and master page templates',
            'Understand print production requirements',
            'Create flyers, brochures, and newsletters to professional standards',
          ],
        },
      },
      {
        name: 'CorelDRAW Essentials and Advanced Mastery',
        level: 'foundational',
        focus: 'CorelDRAW Skills',
        details: {
          description: 'Build foundational to expert skills in CorelDRAW for vector design, layout, and illustration. Covers CorelDRAW from beginner basics through to advanced professional techniques.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'CorelDRAW Workspace & Core Tools Overview',
            'Creating & Editing Vector Shapes and Paths',
            'Node Editing & Curve Manipulation',
            'Fills: Uniform, Gradient, Pattern & Texture',
            'Text Handling: Artistic & Paragraph Text',
            'Symbols, Clipart & Libraries',
            'Advanced Effects: Blend, Contour, Extrude & Drop Shadow',
            'Page Layout & Multi-Page Documents',
            'Output & Print-Ready File Preparation',
          ],
          outcomes: [
            'Create professional vector artwork using CorelDRAW',
            'Apply advanced effects like Blend, Contour, and Extrude',
            'Design multi-page publications and print layouts',
            'Use node editing for precise vector path manipulation',
            'Prepare files correctly for print production',
          ],
        },
      },
      {
        name: 'Illustration and Design Proficiency with Adobe Illustrator',
        level: 'intermediate',
        focus: 'Illustrator Pro Skills',
        details: {
          description: 'Get proficient in creating vector graphics using Illustrator with advanced drawing, composition, and production techniques for professional design work.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Advanced Pen Tool & Bezier Path Mastery',
            'Complex Shape Building with Pathfinder & Shape Builder',
            'Pattern Swatches, Symbol Sprayer & Scatter Brushes',
            'Advanced Typography: Variable Fonts & Text Effects',
            'Perspective Grid Tool for 3D-Looking Illustrations',
            'Clipping Masks & Opacity Masks for Complex Art',
            'Global Colors & Reusable Swatches',
            'Production-Ready File Export Workflows',
          ],
          outcomes: [
            'Create sophisticated vector illustrations using advanced Illustrator tools',
            'Build complex shapes using Pathfinder and Boolean operations',
            'Apply advanced typography and text effects in illustration',
            'Use Perspective Grid for isometric and 3D-style artwork',
            'Manage colors globally and export files for production',
          ],
        },
      },
      {
        name: 'Adobe InDesign Mastery: Advanced Layout Design',
        level: 'advanced',
        focus: 'InDesign Advanced',
        details: {
          description: 'Learn efficient layout design, typographic control, and professional production workflows in Adobe InDesign. This advanced course covers magazine, book, and multi-document workflows.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Advanced Master Pages & Page Numbering Systems',
            'Long-Document Workflows: Books, Chapters & Sections',
            'Advanced Typography: OpenType Features, Optical Margin Alignment',
            'Text Variables, Cross-References & Footnotes',
            'Tables: Creating & Formatting Complex Data Tables',
            'InDesign Scripts & Automation Basics',
            'Interactive Documents: Hyperlinks, Buttons & Forms',
            'Preflight, Packaging & Print-Ready PDF Export',
          ],
          outcomes: [
            'Manage complex multi-page and multi-document publications',
            'Apply advanced typography and OpenType features',
            'Create automated, style-driven long-form documents',
            'Build interactive PDFs with navigation and forms',
            'Deliver fully preflighted, press-ready InDesign files',
          ],
        },
      },
      {
        name: 'Foundations of Animation',
        level: 'intermediate',
        focus: 'Animation Principles',
        details: {
          description: 'Understand animation principles like timing, spacing, squash-and-stretch, and anticipation. This course builds the conceptual foundation for all types of digital animation.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'The 12 Principles of Animation (Disney)',
            'Timing & Spacing: How They Create Weight & Personality',
            'Squash & Stretch, Anticipation & Overshoot',
            'Walk Cycles & Basic Character Motion',
            'Introduction to Keyframing in Adobe Animate / After Effects',
            'Easing: Ease-In, Ease-Out & Custom Graph Editor',
            'Secondary Motion: Hair, Clothing & Props',
            'Simple Looping Animations for Web & Social Media',
          ],
          outcomes: [
            'Apply the 12 principles of animation to any animation project',
            'Understand timing and spacing to create natural motion',
            'Keyframe basic character and object animations',
            'Create looping animations for web and social media',
            'Build the foundation for advanced character and motion animation',
          ],
        },
      },
      {
        name: 'Concepts of 2D Animation and Visual Effects',
        level: 'advanced',
        focus: '2D Animation & VFX',
        details: {
          description: 'Learn 2D animation techniques and visual effects creation using modern digital tools. Covers frame-by-frame animation, rigging, and compositing with visual effects.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Frame-by-Frame Animation in Adobe Animate',
            'Rigging 2D Characters with Puppet Warp & Bones',
            'Lip Sync & Facial Animation Techniques',
            'Scene Composition & Camera Movement in 2D',
            'Particle Systems for 2D VFX (Fire, Smoke, Rain)',
            'Compositing 2D Animation with Live Footage in After Effects',
            'Exporting 2D Animation for Web, TV & Social Media',
            'Portfolio Project: Short Animated Clip',
          ],
          outcomes: [
            'Animate 2D characters using frame-by-frame and rigging methods',
            'Create lip sync and facial animation for characters',
            'Add particle VFX to enhance 2D animated scenes',
            'Composite 2D animations with real-world footage',
            'Produce and export a complete short animated clip',
          ],
        },
      },
      {
        name: 'Introduction to 3D Animation',
        level: 'intermediate',
        focus: '3D Animation Basics',
        details: {
          description: 'Start building 3D animated sequences with basic rigging and object animation. An introductory course for designers and animators stepping into 3D production.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Introduction to 3D Concepts: Axes, Perspective & Depth',
            'Blender / Cinema 4D Interface & Navigation',
            '3D Object Creation: Primitives, Modelling Basics',
            'Materials & Textures in 3D Software',
            'Lighting Setups: 3-Point Lighting & HDRI',
            'Basic Rigging & Bone Systems',
            'Keyframe Animation in 3D',
            'Rendering: Cycles vs EEVEE, Output Settings',
          ],
          outcomes: [
            'Navigate 3D software (Blender/C4D) confidently',
            'Create and texture basic 3D objects and scenes',
            'Set up lighting and render 3D scenes',
            'Apply basic rigging and keyframe animation to 3D objects',
            'Render and export 3D animations for further compositing',
          ],
        },
      },
      {
        name: 'VFX and Animation',
        level: 'advanced',
        focus: 'Visual Effects',
        details: {
          description: 'Combine animation and visual effects to create immersive media experiences. Covers compositing, motion tracking, particle simulation, and professional VFX pipelines.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'VFX Pipeline Overview: Pre-Production to Compositing',
            'Motion Tracking & Camera Tracking in After Effects',
            'Green Screen Compositing & Rotoscoping',
            '3D Camera & Object Integration into Live Footage',
            'Particle Systems: Fire, Smoke, Explosions',
            'Advanced Compositing: Colour Matching & Grading VFX',
            'Title Sequence Design & Broadcast Graphics',
            'Final Project: Short VFX Shot or Title Sequence',
          ],
          outcomes: [
            'Composite VFX elements into live footage professionally',
            'Perform motion tracking and camera tracking in After Effects',
            'Create realistic particle simulations for fire, smoke, and explosions',
            'Integrate 3D elements into live-action scenes',
            'Produce a complete VFX shot or broadcast title sequence',
          ],
        },
      },

      // ── 60-HOUR COURSES ─────────────────────────────────────────────
      {
        name: 'Illustration Basics 101',
        level: 'foundational',
        focus: 'Illustration Intro',
        details: {
          description: 'Explore foundational illustration skills including shapes, lines, and digital drawing techniques using Adobe Illustrator. Ideal for absolute beginners.',
          duration: '60 Hours',
          mode: 'Online & Offline',
          topics: [
            'Introduction to Illustration: Tools & Digital vs Traditional',
            'Basic Shapes, Lines & Composition',
            'Illustrator Interface for Beginners',
            'Drawing with Basic Shapes & Pen Tool Introduction',
            'Color Fills & Simple Color Theory',
            'Creating Simple Icons & Spot Illustrations',
            'Working with Type in Illustrator',
            'Simple Pattern Design',
            'Saving & Exporting Your First Illustrations',
          ],
          outcomes: [
            'Create simple vector illustrations using basic tools',
            'Understand and apply foundational illustration concepts',
            'Use Adobe Illustrator to draw shapes, paths, and icons',
            'Apply basic color theory to your illustrations',
            'Build confidence for intermediate illustration courses',
          ],
        },
      },
      {
        name: 'CorelDraw Essentials',
        level: 'foundational',
        focus: 'CorelDRAW Basics',
        details: {
          description: 'Learn CorelDraw tools for vector illustration, layout design, and basic print production. This beginner course provides a strong foundation in CorelDRAW.',
          duration: '60 Hours',
          mode: 'Online & Offline',
          topics: [
            'CorelDRAW Interface & Toolbox Overview',
            'Drawing Rectangles, Ellipses, Polygons & Freehand Shapes',
            'Selecting, Transforming & Arranging Objects',
            'Fill Options: Solid, Gradient & Bitmap Fills',
            'Outline & Line Styles',
            'Text: Artistic Text & Paragraph Text',
            'Importing & Exporting Files',
            'Creating Basic Logos & Business Cards',
            'Introduction to Print Output from CorelDRAW',
          ],
          outcomes: [
            'Navigate CorelDRAW and use core drawing tools',
            'Create basic vector graphics and simple layouts',
            'Apply fills, outlines, and text to design projects',
            'Design simple business cards and logos',
            'Import, export, and prepare files for basic print use',
          ],
        },
      },
      {
        name: 'WebCraft Fundamentals',
        level: 'foundational',
        focus: 'Web Technologies Intro',
        details: {
          description: 'Get introduced to web technologies like HTML, CSS, and basic web design concepts. This beginner course bridges the gap between graphic design and web development.',
          duration: '60 Hours',
          mode: 'Online & Offline',
          topics: [
            'How the Web Works: Browsers, Servers & URLs',
            'HTML Basics: Tags, Structure & Semantic Markup',
            'CSS Basics: Selectors, Properties & Box Model',
            'Fonts, Colors & Backgrounds in CSS',
            'Creating Simple Web Pages from Scratch',
            'Linking Pages & Adding Images',
            'Introduction to Responsive Design',
            'Using a Code Editor: VS Code Setup',
            'Publishing a Simple Web Page Online',
          ],
          outcomes: [
            'Build simple static web pages using HTML and CSS',
            'Understand how the web works from a designer\'s perspective',
            'Style text, colors, and layouts with CSS',
            'Link multiple pages and add media to websites',
            'Publish a basic website to the internet',
          ],
        },
      },
      {
        name: 'Picture Perfect Edits',
        level: 'foundational',
        focus: 'Photo Editing Basics',
        details: {
          description: 'Edit and enhance photos using tools for retouching, filters, and adjustments. A beginner-friendly course focused on achieving great results quickly in Photoshop.',
          duration: '60 Hours',
          mode: 'Online & Offline',
          topics: [
            'Photoshop Basics: Opening, Saving & Workspace',
            'Cropping, Straightening & Perspective Correction',
            'Exposure Correction: Brightness, Contrast & Exposure',
            'Color Adjustment: Vibrance, Saturation & Hue',
            'Spot Healing & Blemish Removal',
            'Background Removal with Quick Selection & Magic Wand',
            'Applying Filters & Presets for Quick Style Effects',
            'Sharpening & Noise Reduction',
            'Saving in Multiple Formats: JPEG, PNG, TIFF, PSD',
          ],
          outcomes: [
            'Correct exposure and color issues in photographs',
            'Remove blemishes and distractions from photos',
            'Apply quick filters and presets for creative looks',
            'Remove and replace photo backgrounds',
            'Export photos in the correct format for any use',
          ],
        },
      },
      {
        name: 'CineMagic: Creative Editing',
        level: 'foundational',
        focus: 'Creative Video Editing',
        details: {
          description: 'Create visually engaging video content with effects, transitions, and storytelling techniques. A beginner-to-intermediate creative video editing course.',
          duration: '60 Hours',
          mode: 'Online & Offline',
          topics: [
            'Introduction to Creative Video Editing Philosophy',
            'Editing for Emotion: Pacing, Music & Story Arc',
            'Creative Transitions: Whip Pans, Zoom Cuts & Morphs',
            'Colour Grading for Mood & Style (Cinematic Looks)',
            'Social Media Video: Reels, TikTok & YouTube Shorts Editing',
            'Text Animations & Lyric Videos',
            'Adding B-Roll Footage Effectively',
            'Creating a Short Film or Music Video as Final Project',
          ],
          outcomes: [
            'Edit videos with strong narrative and emotional pacing',
            'Apply cinematic colour grading and creative transitions',
            'Create social media-optimised video content',
            'Add motion text, lyric overlays, and B-roll footage',
            'Complete a short film or music video as a portfolio project',
          ],
        },
      },
      {
        name: 'Design Basics 101 (Graphic Design)',
        level: 'intermediate',
        focus: 'Graphic Design Foundations',
        details: {
          description: 'Learn the core principles of graphic design including color theory, typography, layout, and visual communication for both print and digital media.',
          duration: '60 Hours',
          mode: 'Online & Offline',
          topics: [
            'Introduction to Graphic Design as a Profession',
            'Design Elements: Line, Shape, Texture, Space, Form',
            'Design Principles: Balance, Emphasis, Rhythm, Unity',
            'Color Theory: Schemes, Wheel & Psychology',
            'Typography: Fonts, Hierarchy & Readability',
            'Grid Systems & Layout Design',
            'Working with Images & Icons in Layouts',
            'Adobe Photoshop & Illustrator Introduction',
            'Designing a Simple Poster & Social Media Graphic',
          ],
          outcomes: [
            'Apply core design elements and principles to real projects',
            'Choose and pair typefaces for effective communication',
            'Use color strategically in design work',
            'Design simple but effective print and digital graphics',
            'Lay the groundwork for professional graphic design studies',
          ],
        },
      },
      {
        name: 'Advanced Web Designing Concepts',
        level: 'advanced',
        focus: 'Advanced Web Design',
        details: {
          description: 'Apply advanced front-end design techniques, UI/UX concepts, and modern CSS frameworks to build professional-grade websites and web applications.',
          duration: '60 Hours',
          mode: 'Online & Offline',
          topics: [
            'Advanced CSS: Variables, Animations & Custom Properties',
            'CSS Architecture: BEM Naming & Modular Stylesheets',
            'Advanced Flexbox & Grid Patterns',
            'UI/UX Design Principles for Web Apps',
            'Advanced Figma: Prototyping, Components & Variables',
            'Dark Mode & Theme Switching',
            'Microinteractions & UI Animations',
            'Performance Optimization for Web Design',
            'Building & Documenting a Design System',
          ],
          outcomes: [
            'Design complex web UIs with advanced CSS techniques',
            'Build and document complete design systems in Figma',
            'Apply UI/UX principles to web app design',
            'Implement microinteractions and UI animations',
            'Optimize web designs for performance and accessibility',
          ],
        },
      },
      {
        name: 'Advanced Video Editing Techniques',
        level: 'advanced',
        focus: 'Professional Video Post',
        details: {
          description: 'Work with complex timelines, sound design, color grading, and professional delivery pipelines for broadcast and streaming video content.',
          duration: '60 Hours',
          mode: 'Online & Offline',
          topics: [
            'Advanced Multicam & Sequence Nesting in Premiere Pro',
            'Professional Sound Design: EQ, Compression & Mixing',
            'Color Grading with DaVinci Resolve: Nodes, Curves & Wheels',
            'HDR & LOG Footage Grading',
            'Advanced Visual Effects in After Effects',
            'Rotoscoping & Advanced Masking',
            'Motion Graphics Integration: Premiere + After Effects',
            'Broadcast Delivery: QC, LUTs & Master Files',
          ],
          outcomes: [
            'Manage complex professional video projects end to end',
            'Grade LOG and HDR footage in DaVinci Resolve',
            'Mix and master audio for professional video delivery',
            'Create advanced VFX and motion graphics for broadcast',
            'Deliver files to broadcast and streaming platform specifications',
          ],
        },
      },
      {
        name: 'Advanced Graphics Design',
        level: 'advanced',
        focus: 'Advanced Design',
        details: {
          description: 'Master design software and advanced composition techniques for creating high-impact visual communications for brand campaigns, advertising, and publishing.',
          duration: '60 Hours',
          mode: 'Online & Offline',
          topics: [
            'Advanced Photoshop: Compositing, Retouching & 3D Tools',
            'Advanced Illustrator: Complex Illustration & Packaging',
            'InDesign: Multi-Page Publications & Editorial Design',
            'Advanced Color Theory & Color Management',
            'Advanced Typography: Editorial & Expressive Type',
            'Campaign Design: Ads, Billboards & Digital Banners',
            'Packaging Design: Dielines, Mock-ups & 3D Rendering',
            'Creative Direction: Concept Development & Art Direction',
          ],
          outcomes: [
            'Create advanced photo composites and editorial designs',
            'Design packaging with correct dielines and production specs',
            'Develop advertising campaigns across multiple formats',
            'Apply advanced color management for consistent output',
            'Work as a creative director guiding visual design concepts',
          ],
        },
      },
      {
        name: 'Integrated Foundations of Animation and VFX',
        level: 'foundational',
        focus: 'Animation & VFX Intro',
        details: {
          description: 'Learn animation basics and introductory VFX using modern tools. A beginner course covering the intersection of animation principles and visual effects for digital media.',
          duration: '60 Hours',
          mode: 'Online & Offline',
          topics: [
            'Animation Principles Overview (12 Principles)',
            'Keyframing in After Effects for Beginners',
            'Motion Graphics: Text & Shape Animations',
            'Introduction to VFX Compositing Concepts',
            'Green Screen & Chroma Key Basics',
            'Particle Effects Introduction (Smoke, Sparks)',
            'Integrating Graphics into Video Footage',
            'Simple Title Sequences & Lower Thirds',
          ],
          outcomes: [
            'Apply core animation principles in digital software',
            'Create basic motion graphics using After Effects',
            'Understand VFX compositing fundamentals',
            'Use green screen and particle effects at a beginner level',
            'Design and animate simple title sequences for video',
          ],
        },
      },
      {
        name: 'Advanced Animation and VFX Techniques',
        level: 'advanced',
        focus: 'Advanced VFX',
        details: {
          description: 'Create sophisticated animations and integrate VFX for high-end productions. This advanced course covers professional After Effects, Cinema 4D integration, and visual effects compositing.',
          duration: '60 Hours',
          mode: 'Online & Offline',
          topics: [
            'Advanced After Effects: Expressions & Scripts',
            'Cinema 4D Basics for Motion Graphics (C4D Lite)',
            'Character Rigging & Advanced Puppet Animation',
            'Advanced Particle Simulations: Trapcode Particular',
            '3D Camera Work & Depth of Field in After Effects',
            'Advanced Green Screen: Rotoscoping & Matte Painting',
            'Broadcast-Standard Motion Graphics Design',
            'Client Delivery: Render Queue, AME & Review Tools',
          ],
          outcomes: [
            'Write After Effects expressions for automated animations',
            'Create 3D motion graphics using Cinema 4D and After Effects',
            'Rig and animate characters in After Effects',
            'Build advanced particle VFX using Trapcode Particular',
            'Deliver broadcast-standard motion graphics professionally',
          ],
        },
      },
      {
        name: 'Desktop Publishing Pro',
        level: 'advanced',
        focus: 'Professional DTP',
        details: {
          description: 'Design professional print layouts using advanced desktop publishing techniques for catalogues, annual reports, magazines, and complex multi-page publications.',
          duration: '60 Hours',
          mode: 'Online & Offline',
          topics: [
            'Advanced InDesign: Books, Long Documents & Indexing',
            'Complex Table Design & Data Visualisation in DTP',
            'Advanced Typography for Editorial & Publication Design',
            'Multi-Language & Bi-Directional Text Layout',
            'Print Production: Spot Colors, Varnishes & Special Finishes',
            'Variable Data Printing & Personalisation Concepts',
            'Digital Publishing: Interactive PDF & Fixed-Layout ePub',
            'Proofing, Colour Management & Pre-Press Workflow',
          ],
          outcomes: [
            'Produce complex multi-page publications using advanced InDesign',
            'Apply specialist print production techniques (spot color, varnish)',
            'Design interactive PDFs and digital ePub publications',
            'Manage multi-language and complex typographic documents',
            'Deliver projects through a professional pre-press workflow',
          ],
        },
      },

      // ── 90-HOUR COURSES ─────────────────────────────────────────────
      {
        name: 'WebCraft Pro',
        level: 'intermediate',
        focus: 'Professional Web Development',
        details: {
          description: 'Build full-featured, responsive websites using modern web technologies including HTML5, CSS3, JavaScript, and popular frameworks.',
          duration: '60 Hours',
          mode: 'Online & Offline',
          topics: [
            'Advanced HTML5 & CSS3 for Professional Sites',
            'JavaScript Fundamentals for Web Interactivity',
            'CSS Frameworks: Bootstrap & Tailwind CSS',
            'Responsive Design: Mobile-First Development',
            'Web Animations: CSS & JavaScript',
            'CMS Basics: WordPress Theme Customization',
            'Web Performance & SEO Fundamentals',
            'Deploying Websites: cPanel, FTP & Domain Management',
          ],
          outcomes: [
            'Build complete, responsive websites from scratch',
            'Use Bootstrap and Tailwind CSS for rapid development',
            'Add JavaScript interactivity and animations',
            'Customize and deploy WordPress sites',
            'Optimize sites for performance and search engines',
          ],
        },
      },
      {
        name: 'Be a PhotoFix Pro',
        level: 'intermediate',
        focus: 'Professional Photo Retouching',
        details: {
          description: 'Enhance and retouch images professionally with precision and creativity using advanced Photoshop retouching techniques for commercial and editorial photography.',
          duration: '90 Hours',
          mode: 'Online & Offline',
          topics: [
            'Professional Portrait Retouching Workflow',
            'Frequency Separation for Skin & Texture',
            'Dodge & Burn for Shape & Depth',
            'Eye, Hair & Lips Enhancement Techniques',
            'Body Reshaping with Liquify (Ethical Use)',
            'Product Photography Retouching',
            'Fashion & Beauty Retouching for Editorial',
            'Compositing for Commercial Photography',
            'Building a Retouching Portfolio',
          ],
          outcomes: [
            'Retouch portraits to a commercial and editorial standard',
            'Apply frequency separation and dodge & burn techniques',
            'Enhance product and fashion photography professionally',
            'Create complex photographic composites for commercial use',
            'Build a retouching portfolio for freelance or agency work',
          ],
        },
      },
      {
        name: 'Digital Illustration Pro',
        level: 'intermediate',
        focus: 'Professional Illustration',
        details: {
          description: 'Create detailed digital illustrations using advanced tools and design principles for commercial, editorial, and publishing applications.',
          duration: '90 Hours',
          mode: 'Online & Offline',
          topics: [
            'Advanced Adobe Illustrator: Complex Vector Artwork',
            'Digital Painting with Photoshop Brushes',
            'Concept Art Development for Commercial Projects',
            'Editorial Illustration for Magazines & Books',
            'Children\'s Book Illustration Style Development',
            'Texture & Mixed Media Illustration',
            'Illustration for Social Media & Marketing',
            'Licensing, Rights & Selling Digital Illustrations',
            'Building a Commercial Illustration Portfolio',
          ],
          outcomes: [
            'Create commercial-grade illustrations for editorial and publishing',
            'Develop a distinctive illustration style',
            'Illustrate across multiple formats (editorial, social, books)',
            'Understand licensing and commercial illustration rights',
            'Launch a professional digital illustration career',
          ],
        },
      },
      {
        name: 'Digital Design Toolbox',
        level: 'intermediate',
        focus: 'Design Tools Suite',
        details: {
          description: 'Explore essential tools and techniques used in modern digital design across graphic design, UI/UX, and digital marketing. A comprehensive intermediate course covering the full designer\'s toolkit.',
          duration: '90 Hours',
          mode: 'Online & Offline',
          topics: [
            'Adobe Photoshop: Intermediate Photo Editing & Compositing',
            'Adobe Illustrator: Vector Design & Icon Creation',
            'Figma: UI Design, Prototyping & Components',
            'Canva Pro for Marketing & Social Media Design',
            'Adobe Express for Quick Digital Content',
            'AI Design Tools: Adobe Firefly & Midjourney Basics',
            'Design for Social Media: Platform-Specific Specs',
            'Presentation Design: Keynote & Google Slides',
            'Asset Management & File Organisation for Designers',
          ],
          outcomes: [
            'Use the full digital designer\'s toolkit across multiple platforms',
            'Create UI designs and prototypes in Figma',
            'Design social media content at professional standards',
            'Leverage AI tools for design ideation and production',
            'Manage design assets and files efficiently',
          ],
        },
      },
      {
        name: 'Web Design 101',
        level: 'intermediate',
        focus: 'Web Design Comprehensive',
        details: {
          description: 'Learn the basics of web design including layout, color theory, and user experience principles through a structured 90-hour program covering design and basic development.',
          duration: '90 Hours',
          mode: 'Online & Offline',
          topics: [
            'Web Design Principles: Layout, UX & Visual Hierarchy',
            'Color Theory & Typography for Web',
            'HTML5 & CSS3: Building Web Pages',
            'Responsive Web Design with Flexbox & Grid',
            'Wireframing & Prototyping in Figma',
            'Web Imagery: Icons, Photography & Illustration',
            'Introduction to JavaScript for Designers',
            'Web Accessibility Overview',
            'Launching a Portfolio Website',
          ],
          outcomes: [
            'Design and code responsive web pages from scratch',
            'Create professional wireframes and prototypes in Figma',
            'Apply color theory and typography to web design',
            'Add basic JavaScript interactions to web pages',
            'Launch a personal design portfolio online',
          ],
        },
      },
      {
        name: 'Animation and VFX',
        level: 'foundational',
        focus: 'Animation & VFX Foundations',
        details: {
          description: 'Learn the fundamentals of animation and integrate visual effects into video productions. A foundational 120-hour course covering animation principles through to basic VFX compositing.',
          duration: '120 Hours',
          mode: 'Online & Offline',
          topics: [
            'Animation Principles: 12 Disney Principles in Practice',
            'Adobe After Effects: Interface & Core Animation',
            'Motion Graphics: Kinetic Typography & Shape Animation',
            'Compositing Basics: Layering, Masking & Blending',
            'Introduction to VFX: Green Screen & Chroma Key',
            'Particle Effects: Smoke, Fire & Sparkles',
            '2D Character Animation Introduction',
            '3D Animation Concepts with Blender Basics',
            'Rendering, Export & Delivery for Web & Broadcast',
          ],
          outcomes: [
            'Apply animation principles to create convincing digital motion',
            'Build motion graphics using After Effects',
            'Composite animations with video footage using VFX techniques',
            'Create basic 2D and 3D animations',
            'Render and export animations for web, social, and broadcast',
          ],
        },
      },
    ],
  },

  'google-certification': {
    title: 'Google Certification Program',
    subtitle: 'Google & Office Productivity',
    category: 'Technology',
icon: <img src={MKCL} alt="MKCL" style={{ width: '600px', height: '150px', objectFit: 'contain' }} />,    color: '#2563eb',
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
    curriculumTable: [
      {
        name: 'Introduction to Google Workspace',
        level: 'foundational',
        focus: 'Workspace Basics',
        details: {
          description:
            'Understand the core functionalities of Google tools for creating, editing, and collaborating on various types of documents. This KLiC course introduces learners to the complete Google Workspace ecosystem used in modern workplaces.',
          duration: '60 Hours',
          mode: 'Online & Offline | MKCL KLiC Platform',
          topics: [
            'Ability to effectively utilize Google Drive for creating, editing, and sharing various types of documents',
            'Proficiency in harnessing Google applications and collaborating on documents using Google Drive',
            'Capability to create professional documents such as resumes, work manuals, and brochures using Google Docs',
            'Competency in using Google Sheets for data organization, analysis, and visualization',
            'Proficiency in creating and managing various classroom-useful activities, resources, and materials using Google Sheets',
            'Ability to create dynamic and visually appealing presentations using Google Slides',
            'Creating effective email communications, professional formulations, including viewing, formatting, and compositing through Gmail',
            'Developing plans and managing team communication and analysis using Google Docs',
            'Mastery in utilizing the full range of Google Workspace tools to enhance productivity and deliver value',
            'Capacity to apply Google Workspace skills to business processes and professional contexts for improved efficiency and effectiveness',
          ],
          outcomes: [
            'Navigate and use Google Drive, Docs, Sheets, Slides, and Gmail confidently',
            'Create and collaborate on professional documents in Google Workspace',
            'Organize and analyze data using Google Sheets',
            'Deliver professional presentations using Google Slides',
            'Apply Google Workspace for workplace productivity and communication',
          ],
        },
      },
      {
        name: 'Google Skills 101',
        level: 'foundational',
        focus: 'Google Basics',
        details: {
          description:
            'A beginner-level introduction to Google tools and services — covering Gmail, Google Search, Google Drive, and basic productivity features for everyday digital tasks.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Introduction to Google account setup and management',
            'Gmail — composing, reading, organizing, and managing email',
            'Google Search — advanced search techniques and filters',
            'Google Drive — uploading, organizing, and sharing files',
            'Google Docs — basic document creation and formatting',
            'Google Sheets — basic spreadsheet data entry and formulas',
            'Google Slides — creating simple presentations',
            'Google Calendar — scheduling events and reminders',
            'Google Meet — setting up and joining video meetings',
            'Google Forms — creating simple surveys and forms',
          ],
          outcomes: [
            'Set up and manage a Google account for personal and professional use',
            'Use Gmail professionally for workplace email communication',
            'Organize files and documents using Google Drive',
            'Create basic documents, spreadsheets, and presentations in Google Workspace',
            'Schedule meetings and collaborate using Google Calendar and Meet',
          ],
        },
      },
      {
        name: 'Introduction to MS Office Tools',
        level: 'foundational',
        focus: 'MS Office',
        details: {
          description:
            'An introductory course covering the core Microsoft Office applications — Word, Excel, and PowerPoint — for essential workplace productivity tasks.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'MS Office suite overview — Word, Excel, PowerPoint, and Outlook',
            'MS Word — creating, formatting, and editing documents',
            'MS Word — tables, images, headers, footers, and page layout',
            'MS Excel — spreadsheet basics, data entry, and simple formulas',
            'MS Excel — sorting, filtering, and basic chart creation',
            'MS PowerPoint — slide creation, themes, and basic animations',
            'MS PowerPoint — inserting media, SmartArt, and transitions',
            'Saving, sharing, and converting Office files',
            'Introduction to Microsoft 365 cloud features',
          ],
          outcomes: [
            'Use MS Word to create and format professional documents',
            'Enter and organize data using MS Excel basics',
            'Design and present simple presentations using PowerPoint',
            'Navigate the MS Office suite confidently for workplace tasks',
            'Save and share Office files in various formats',
          ],
        },
      },
      {
        name: 'Introduction to Windows Basics',
        level: 'foundational',
        focus: 'Windows OS',
        details: {
          description:
            'A foundational course covering Windows operating system basics — essential for anyone new to computers or transitioning from other platforms.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Introduction to Windows — desktop, taskbar, Start menu navigation',
            'File management — File Explorer, folders, files, and drives',
            'Creating, moving, copying, renaming, and deleting files and folders',
            'Recycle Bin management and file recovery',
            'Windows Settings — display, sound, network, and system preferences',
            'Installing and uninstalling applications',
            'Windows Defender and basic security settings',
            'Keyboard shortcuts for productivity',
            'Introduction to internet browsers on Windows',
            'Connecting to Wi-Fi and managing network settings',
          ],
          outcomes: [
            'Navigate the Windows desktop and manage files and folders',
            'Customize Windows settings for personal productivity',
            'Install, manage, and remove software on Windows',
            'Apply basic Windows security settings',
            'Use keyboard shortcuts to work efficiently in Windows',
          ],
        },
      },
      {
        name: 'Introduction to MS Word',
        level: 'foundational',
        focus: 'MS Word',
        details: {
          description:
            'A dedicated beginner course on Microsoft Word — covering document creation, formatting, layout, and professional document design for workplace use.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'MS Word interface — ribbon, toolbars, and document navigation',
            'Creating, saving, and opening documents',
            'Text formatting — fonts, sizes, bold, italic, underline, color',
            'Paragraph formatting — alignment, spacing, indentation, bullets, numbering',
            'Page layout — margins, orientation, paper size, and columns',
            'Inserting tables — creating, formatting, and editing tables',
            'Inserting images, shapes, and SmartArt',
            'Headers, footers, and page numbers',
            'Spelling and grammar check, autocorrect, and thesaurus',
            'Printing and exporting documents as PDF',
          ],
          outcomes: [
            'Create and format professional documents using MS Word',
            'Apply text and paragraph formatting for clean, readable documents',
            'Insert and manage tables, images, and graphics in documents',
            'Set up page layout for print and digital documents',
            'Export and print documents professionally',
          ],
        },
      },
      {
        name: 'Introduction to MS PowerPoint',
        level: 'foundational',
        focus: 'MS PowerPoint',
        details: {
          description:
            'A beginner course on Microsoft PowerPoint covering slide creation, design principles, animations, and presenting information visually for professional and academic purposes.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'PowerPoint interface — slides panel, ribbon, and view modes',
            'Creating a new presentation and selecting themes',
            'Adding and formatting text in title and content placeholders',
            'Inserting images, shapes, icons, and SmartArt',
            'Slide layouts — choosing and customizing layouts',
            'Slide transitions — types, speeds, and application',
            'Animations — entrance, emphasis, exit, and motion paths',
            'Inserting charts and tables linked to data',
            'Slide master for consistent formatting across presentations',
            'Presenter view and delivering slide shows professionally',
          ],
          outcomes: [
            'Design visually compelling presentations using PowerPoint',
            'Apply themes, layouts, and animations effectively',
            'Insert and format media, charts, and SmartArt in slides',
            'Deliver presentations confidently using Presenter View',
            'Export presentations in PDF, video, and other formats',
          ],
        },
      },
      {
        name: 'MS Windows and MS Word Basics',
        level: 'foundational',
        focus: 'Windows & Word',
        details: {
          description:
            'A combined course covering the essentials of Windows operating system navigation and Microsoft Word document creation — ideal for beginners entering office environments.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Windows basics — desktop, File Explorer, and system settings',
            'File and folder management in Windows',
            'Installing applications and managing software',
            'MS Word interface and document navigation',
            'Creating and formatting professional documents',
            'Working with tables, images, and page layouts in Word',
            'Headers, footers, page numbers, and print settings',
            'Spell check, grammar tools, and document review features',
            'Saving documents in different formats and sharing via email',
          ],
          outcomes: [
            'Navigate Windows and manage files and folders confidently',
            'Create and format professional documents in MS Word',
            'Use Word features for tables, images, and page design',
            'Apply Windows and Word skills for everyday office tasks',
            'Save and share documents across different formats',
          ],
        },
      },
      {
        name: 'MS Windows and MS PowerPoint Basics',
        level: 'foundational',
        focus: 'Windows & PPT',
        details: {
          description:
            'A combined introductory course covering Windows OS navigation and PowerPoint presentation creation — essential skills for students and office professionals.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Windows navigation — desktop, taskbar, Start menu, and settings',
            'File management — creating, organizing, and managing files and folders',
            'Connecting to internet and using a browser in Windows',
            'MS PowerPoint interface overview',
            'Creating slides with text, images, and shapes',
            'Applying themes and slide layouts',
            'Adding transitions and basic animations',
            'Inserting charts, tables, and media',
            'Delivering presentations in slideshow mode',
            'Saving and sharing PowerPoint files',
          ],
          outcomes: [
            'Navigate Windows OS for everyday computing tasks',
            'Create and design professional PowerPoint presentations',
            'Apply animations, transitions, and media in presentations',
            'Deliver slide shows confidently using PowerPoint tools',
            'Manage and share presentation files effectively',
          ],
        },
      },
      {
        name: 'MS Word and MS PowerPoint Basics',
        level: 'foundational',
        focus: 'Word & PPT',
        details: {
          description:
            'A combined course covering MS Word for document creation and MS PowerPoint for presentation design — the two most essential communication tools in any office environment.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'MS Word basics — creating, formatting, and editing documents',
            'Working with tables, images, and page layouts in Word',
            'Mail merge for bulk document generation',
            'MS PowerPoint basics — creating and designing slides',
            'Applying themes, layouts, transitions, and animations',
            'Inserting charts, SmartArt, and media in slides',
            'Slide master for consistent presentation design',
            'Delivering and exporting presentations',
            'Saving and sharing Word and PowerPoint files',
          ],
          outcomes: [
            'Create professional documents using MS Word',
            'Design impactful presentations using PowerPoint',
            'Apply consistent formatting across documents and slides',
            'Use mail merge in Word for bulk correspondence',
            'Export and share Word and PowerPoint files professionally',
          ],
        },
      },
      {
        name: 'Office Assistance',
        level: 'foundational',
        focus: 'Office Support',
        details: {
          description:
            'A practical course developing the essential digital productivity skills required for office assistant, administrative, and back-office roles — covering document management, communication tools, and data entry.',
          duration: '60 Hours',
          mode: 'Online & Offline',
          topics: [
            'Introduction to office assistant roles and responsibilities',
            'Document creation and formatting using MS Word',
            'Spreadsheet management using MS Excel — data entry and basic reporting',
            'Email communication using Outlook and Gmail professionally',
            'Calendar management and scheduling using digital tools',
            'File management — organizing, naming, and archiving documents',
            'Basic data entry and record-keeping in spreadsheets',
            'Creating simple presentations for meetings using PowerPoint',
            'Printing, scanning, and managing office documents',
            'Professional communication etiquette — written and digital',
          ],
          outcomes: [
            'Perform essential office support tasks using digital tools',
            'Create, format, and manage documents and spreadsheets',
            'Communicate professionally via email and digital platforms',
            'Organize files, schedules, and records efficiently',
            'Apply workplace digital productivity skills for administrative roles',
          ],
        },
      },
      {
        name: 'Google Workspace Expert',
        level: 'intermediate',
        focus: 'Google Tools',
        details: {
          description:
            'An intermediate course developing expert-level proficiency in all Google Workspace applications — covering advanced features of Docs, Sheets, Slides, Gmail, Drive, and collaboration tools for professional use.',
          duration: '60 Hours',
          mode: 'Online & Offline',
          topics: [
            'Advanced Google Docs — styles, templates, table of contents, citations',
            'Collaborative writing — comments, suggestions, version history',
            'Advanced Google Sheets — complex formulas, pivot tables, data validation',
            'Google Sheets automation — macros and basic Apps Script',
            'Google Slides — advanced design, master slides, and linking data',
            'Google Drive — shared drives, permissions, and organizational structure',
            'Gmail — labels, filters, rules, templates, and productivity features',
            'Google Meet — advanced meeting management and host controls',
            'Google Forms — advanced form design, logic branching, and response analysis',
            'Google Calendar — team calendars, resource booking, and scheduling',
          ],
          outcomes: [
            'Use advanced features of all core Google Workspace apps',
            'Collaborate effectively using Google Drive shared workspaces',
            'Automate tasks in Google Sheets using macros',
            'Manage team communication and scheduling through Google tools',
            'Demonstrate Google Workspace expertise for professional certification',
          ],
        },
      },
      {
        name: 'Google Pro Techniques',
        level: 'intermediate',
        focus: 'Pro Google Skills',
        details: {
          description:
            'Advanced Google productivity techniques — covering power user features, integration between apps, workflow automation, and professional use of Google Workspace for teams and organizations.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Google Workspace integration — linking Docs, Sheets, Slides, and Forms',
            'Google Sheets advanced — VLOOKUP, INDEX-MATCH, QUERY function',
            'Google Apps Script basics — automating repetitive tasks',
            'Google Workspace Admin basics — managing users and permissions',
            'Google Sites — creating internal websites and portals',
            'Google Classroom — setting up and managing digital classrooms',
            'Google Keep and Tasks for personal productivity management',
            'Google Workspace Marketplace — finding and installing add-ons',
            'Data import/export between Google and Microsoft tools',
            'Google Workspace security best practices',
          ],
          outcomes: [
            'Use power user features across all Google Workspace apps',
            'Integrate multiple Google apps for seamless workflows',
            'Automate tasks using Google Apps Script basics',
            'Manage Google Workspace for small teams',
            'Apply professional productivity techniques using Google tools',
          ],
        },
      },
      {
        name: 'Advanced Google Workspace Skills',
        level: 'advanced',
        focus: 'Advanced Google',
        details: {
          description:
            'An advanced course for professionals seeking mastery of Google Workspace — covering administration, automation, business-level collaboration, data analysis, and building custom workflows.',
          duration: '60 Hours',
          mode: 'Online & Offline',
          topics: [
            'Google Workspace Admin console — user management, policies, and security',
            'Advanced Google Sheets — complex formulas, QUERY, ARRAYFORMULA, dashboards',
            'Google Sheets + Looker Studio (Data Studio) for business reporting',
            'Google Apps Script — building automation workflows and custom functions',
            'Google Forms + Sheets integration for data collection pipelines',
            'Advanced Gmail — delegation, multi-account management, and compliance',
            'Google Vault — archiving, eDiscovery, and compliance management',
            'Google Chat and Spaces for team collaboration and project management',
            'Building Google Sites for intranet and project portals',
            'Google Workspace security — 2FA, data loss prevention, and audit reports',
          ],
          outcomes: [
            'Administer and configure Google Workspace for organizations',
            'Build advanced data dashboards using Google Sheets and Looker Studio',
            'Automate business workflows using Google Apps Script',
            'Manage compliance and security using Google Vault and admin tools',
            'Lead Google Workspace adoption and training for teams',
          ],
        },
      },
      {
        name: 'Advanced Techniques in Google Workspace',
        level: 'advanced',
        focus: 'Advanced Workspace',
        details: {
          description:
            'Specialized advanced techniques for Google Workspace power users — covering automation, API integration, custom tool development, and enterprise-level workspace management.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Google Apps Script advanced — triggers, APIs, and custom menus',
            'Connecting Google Workspace to external services via APIs',
            'Building Google Sheets dashboards with real-time data',
            'Advanced Google Forms — conditional logic and connected workflows',
            'Google Workspace + AI tools — Gemini integration and AI features',
            'Custom Google Slides templates for organizational branding',
            'Google Workspace reporting and usage analytics',
            'Managing large-scale Google Drive organizational structures',
            'Google Workspace migration — onboarding and data migration strategies',
            'Best practices for enterprise Google Workspace deployment',
          ],
          outcomes: [
            'Build custom automation tools using Google Apps Script',
            'Connect Google Workspace to external APIs and services',
            'Create real-time data dashboards and reporting systems',
            'Apply AI-assisted features in Google Workspace',
            'Manage enterprise-level Google Workspace deployments',
          ],
        },
      },
      {
        name: 'Advanced DBMS Concepts',
        level: 'advanced',
        focus: 'Database Management',
        details: {
          description:
            'An advanced database management course covering transactions, indexing, normalization, query optimization, and production-level database administration — relevant for Google Workspace data integration and reporting contexts.',
          duration: '60 Hours',
          mode: 'Online & Offline',
          topics: [
            'Advanced normalization — 3NF, BCNF, denormalization strategies',
            'Advanced indexing — B-Tree, hash, composite, and full-text indexes',
            'Query optimization and execution plan analysis',
            'Concurrency control — locking, deadlocks, and isolation levels',
            'Database recovery — log-based recovery and backup strategies',
            'Distributed databases and CAP theorem',
            'NoSQL databases — MongoDB, document stores, and key-value stores',
            'Data warehousing — OLAP, star schema, and snowflake schema',
            'Database security — encryption, auditing, and access control',
            'Connecting databases to Google Sheets and Workspace tools',
          ],
          outcomes: [
            'Design and optimize advanced relational database schemas',
            'Implement production-level database security and compliance',
            'Manage database performance using indexing and query optimization',
            'Understand distributed databases and NoSQL concepts',
            'Integrate database data with Google Workspace reporting tools',
          ],
        },
      },
      {
        name: 'Mastering Social Media Platforms and Tools',
        level: 'intermediate',
        focus: 'Social Media',
        details: {
          description:
            'A comprehensive social media course covering platform strategies, content creation, analytics, and digital marketing techniques for personal branding and business growth.',
          duration: '60 Hours',
          mode: 'Online & Offline',
          topics: [
            'Introduction to social media marketing and its business impact',
            'Platform deep-dive — Facebook, Instagram, LinkedIn, X (Twitter), YouTube',
            'Content strategy — planning, calendaring, and audience targeting',
            'Creating engaging content — posts, reels, stories, and videos',
            'Graphic design for social media using Canva and free tools',
            'Social media analytics — understanding reach, engagement, and insights',
            'Hashtag strategy and search engine optimization for social',
            'Paid social advertising — boosted posts, Meta Ads, LinkedIn Ads basics',
            'Community management — responding to comments and building followers',
            'Building a personal brand or business presence on social media',
          ],
          outcomes: [
            'Develop and execute a social media content strategy',
            'Create engaging content for multiple social media platforms',
            'Analyze social media performance using platform analytics',
            'Run basic paid advertising campaigns on social media',
            'Build and manage a professional or business social media presence',
          ],
        },
      },
    ],
  },

  'financial-accounting': {
    title: 'Financial Accounting',
    subtitle: 'Accounting & Finance',
    category: 'Finance',
icon: <img src={MKCL} alt="MKCL" style={{ width: '600px', height: '150px', objectFit: 'contain' }} />,    color: '#2563eb',
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
    curriculumTable: [
      {
        name: 'Tally Prime with GST 2025',
        level: 'intermediate',
        focus: 'Tally Prime & GST Compliance',
        details: {
          description:
            'A comprehensive course covering Tally Prime with complete GST compliance for modern business accounting. Covers company setup, voucher entry, financial reports, and full GST configuration including GSTR-1, GSTR-3B filing, and E-Way Bill generation.',
          duration: '90 Hours',
          mode: 'Online & Offline | Center-Based Learning',
          topics: [
            'Introduction to Tally Prime — company creation and configuration',
            'Ledger creation, groups, and chart of accounts',
            'Purchase and sales voucher entry and management',
            'Financial reports: Balance Sheet, P&L, Trial Balance',
            'GST concepts and structure — CGST, SGST, IGST',
            'GST registration and configuration in Tally Prime',
            'Intrastate and interstate GST transactions',
            'GST E-Way Bill generation from Tally',
            'GST E-Invoice from Tally',
            'GSTR-1 and GSTR-3B return filing',
            'ITC reconciliation — GSTR-2A and GSTR-2B',
            'GST compliance reports and error correction',
          ],
          outcomes: [
            'Set up and operate Tally Prime for business accounting',
            'Record purchase, sales, and payment transactions accurately',
            'Configure and apply GST in Tally for all transaction types',
            'Generate E-Way Bills and E-Invoices for compliance',
            'Prepare and file GSTR-1 and GSTR-3B returns',
            'Perform ITC reconciliation and manage GST compliance',
          ],
        },
      },

      {
        name: 'Banking Financial Services Insurance (BFSI) 2025',
        level: 'intermediate',
        focus: 'Banking, Finance & Insurance Fundamentals',
        details: {
          description:
            'An industry-focused program covering the fundamentals of Banking, Financial Services, and Insurance (BFSI) in the Indian context. Designed for students and professionals seeking a career in the banking and finance sector.',
          duration: '90 Hours',
          mode: 'Online & Offline',
          topics: [
            'Overview of Indian banking system — RBI, commercial banks, co-operative banks',
            'Banking products: savings, current, FD, RD, loan accounts',
            'Retail banking operations and customer service',
            'Credit products: home loans, personal loans, business loans',
            'Insurance fundamentals — life, health, general insurance',
            'Mutual funds and investment products',
            'Financial planning concepts for retail customers',
            'KYC, AML, and regulatory compliance in BFSI',
            'Digital banking — internet banking, mobile banking, UPI',
            'BFSI career paths and professional standards',
          ],
          outcomes: [
            'Understand the structure and operations of the Indian banking system',
            'Describe various banking and insurance products and services',
            'Explain KYC, AML, and BFSI compliance requirements',
            'Navigate digital banking platforms and payment systems',
            'Prepare for entry-level roles in banks, NBFCs, and insurance firms',
          ],
        },
      },

      {
        name: 'Advanced Tally Pro 2025',
        level: 'advanced',
        focus: 'Advanced Tally Features & Compliance',
        details: {
          description:
            'An advanced Tally Prime course covering professional-level features including cost centres, payroll, advanced GST transactions, TDS compliance, data synchronization, and financial analytics for business decision-making.',
          duration: '90 Hours',
          mode: 'Online & Offline | Center-Based Learning',
          topics: [
            'Cost centres and cost categories — setup and reporting',
            'Cost centre classes and reversing journals',
            'Banking utilities, bank reconciliation, and e-payments',
            'Interest calculations and interest transactions in Tally',
            'Data synchronization for multi-branch operations',
            'Payroll setup, salary structures, and payroll transactions',
            'Statutory deductions: PF, ESI, and Income Tax',
            'TDS setup, transactions, and compliance in Tally',
            'Advanced GST transactions: RCM, zero-rated supply, imports',
            'Financial analytics and MIS reporting in Tally Prime',
          ],
          outcomes: [
            'Use cost centres and categories for department-level expense analysis',
            'Perform bank reconciliation and manage banking transactions',
            'Set up and process payroll with statutory compliance',
            'Handle TDS deductions, payments, and returns in Tally',
            'Manage advanced GST scenarios including RCM and exports',
            'Generate MIS reports for business financial decision-making',
          ],
        },
      },

      {
        name: 'Tally Master Essentials',
        level: 'foundational',
        focus: 'Tally Prime Basics',
        details: {
          description:
            'A foundational Tally Prime course covering company creation, basic ledger management, voucher entry, and essential financial reporting. Ideal for beginners entering the accounting profession.',
          duration: '60 Hours',
          mode: 'Online & Offline',
          topics: [
            'Introduction to accounting concepts and principles',
            'Tally Prime interface and navigation',
            'Company creation and configuration',
            'Ledger creation, groups, and account management',
            'Cash and bank voucher entry',
            'Purchase and sales entry basics',
            'Debit notes and credit notes',
            'Day book, cash book, and ledger reports',
            'Basic Balance Sheet and Profit & Loss statement',
            'Data backup and restore in Tally Prime',
          ],
          outcomes: [
            'Navigate Tally Prime and set up a company file',
            'Create and manage ledgers and account groups',
            'Record day-to-day business transactions',
            'Generate basic financial reports in Tally',
            'Prepare for intermediate Tally and GST courses',
          ],
        },
      },

      {
        name: 'Mastering Advanced Accounting',
        level: 'advanced',
        focus: 'Advanced Tally Prime: Payroll, GST & TDS',
        details: {
          description:
            'This advanced 90-hour course on Tally Prime 3.0 tackles complex accounting topics including cost centres, banking utilities, payroll management, statutory compliance (PF, ESI, Income Tax), TDS transactions, and complete GST compliance — including E-Way Bills, E-Invoices, GSTR filing, and ITC reconciliation. Government Certified Training Program. Part of the 3-program Diploma track.',
          duration: '90 Hours | Advanced Level',
          mode: 'Center-Based Learning | English & Hindi | Nationwide',
          topics: [
            // Basic Tally Foundation
            'Basic Tally Prime — topics covered and introduced (Unit 01)',
            // Cost Centres
            'Cost Centre & Cost Categories I — setup and activation (Unit 02)',
            'Cost Centre & Cost Categories II — advanced allocation (Unit 03)',
            'Cost Centre Class & Reversing Journal — class-based allocation (Unit 04)',
            // Banking
            'Banking Utilities — cheque printing, payment modes (Unit 05)',
            'Bank Reconciliation & E-Payment — reconciling bank statements (Unit 06)',
            // Interest
            'Interest Feature in Tally — enabling and configuring (Unit 07)',
            'Interest Calculation Transactions — practical entries (Unit 08)',
            'Interest Calculation — Case Study (Unit 09)',
            // SME & Sync
            'Tally SME Feature — small business accounting tools (Unit 10)',
            'Introduction to Data Synchronization — multi-branch setup (Unit 11)',
            'IP Based & On Demand Synchronization (Unit 12)',
            'IP Case Study — Cost Centre with Interest Feature (Unit 13)',
            // Payroll
            'Payroll Setup in Tally — salary heads, employee masters (Unit 14)',
            'Payroll Transactions in Tally — salary processing (Unit 15)',
            'Payroll Statutory Feature — PF, ESI configuration (Unit 16)',
            'Advance Payroll Transaction — overtime, loans, advances (Unit 17)',
            'Payroll Income Tax Setup — Form 16 and IT computation (Unit 18)',
            'Exemptions & Deductions under Chapter VIA (Unit 19)',
            'Payroll Statutory Transaction & Report — Form 24Q, PF ECR (Unit 20)',
            'Other Payroll Transactions (Unit 21)',
            'Payroll Statutory Report — generation and filing (Unit 22)',
            'Advance Payroll — Case Study (Unit 23)',
            'Case Study — Salary Tax Computation (Unit 24)',
            // TDS
            'TDS Compliance in Tally — Section 194C, 194J, 194I setup (Unit 25)',
            'Advance Payroll Transaction (Unit 26)',
            'Advance TDS Transactions (Unit 27)',
            'Other TDS Transactions — challans and returns (Unit 28)',
            // GST
            'GST Compliance in India — GST framework and concepts (Unit 29)',
            'Other Payroll Transaction (Unit 30)',
            'GST Registration — types, process, and configuration in Tally (Unit 31)',
            'Intrastate & Interstate GST Transactions — CGST, SGST, IGST (Unit 32)',
            'GST E-Way Bill from Tally — generation and management (Unit 33)',
            'GST E-Invoice from Tally — IRN generation and compliance (Unit 34)',
            'GST Zero Rated Supply — exports and SEZ transactions (Unit 35)',
            'Reverse Charge Mechanism (RCM) — inward supplies (Unit 36)',
            'GSTR-1 filing, GSTR-3B preparation, and ITC reconciliation (GSTR-2A & GSTR-2B)',
          ],
          outcomes: [
            'Interpret financial reports and manage all accounting vouchers in Tally Prime 3.0',
            'Use cost centres and cost centre classes for expense allocation and branch-level analysis',
            'Perform banking transactions, bank reconciliation, and interest calculations',
            'Implement data synchronization for multi-branch and multi-location operations',
            'Set up and manage payroll — salary structures, statutory deductions (PF, ESI, Income Tax)',
            'Handle TDS transactions, payment challans, returns, and full TDS compliance',
            'Understand GST structure, configure GST in Tally, and process intrastate/interstate transactions',
            'Generate E-Way Bills and E-Invoices for GST compliance',
            'Manage RCM, zero-rated supply, and import transactions under GST',
            'Prepare GSTR-1, GSTR-3B, and perform ITC reconciliation (GSTR-2A & GSTR-2B)',
          ],
        },
      },

      {
        name: 'Financial Analytics with Tally Prime',
        level: 'advanced',
        focus: 'Financial Analytics & MIS Reporting',
        details: {
          description:
            'An advanced course combining Tally Prime reporting capabilities with financial analysis skills. Focuses on generating MIS reports, analyzing business performance, cash flow management, and using Tally data for strategic financial decision-making.',
          duration: '60 Hours',
          mode: 'Online & Offline',
          topics: [
            'Financial statement analysis using Tally Prime reports',
            'Balance sheet and P&L interpretation for management',
            'Cash flow and fund flow statement preparation',
            'Ratio analysis: liquidity, profitability, solvency ratios',
            'Budget creation and variance analysis in Tally',
            'MIS reports: sales, purchase, expense, and aging reports',
            'Inventory analysis and stock valuation reports',
            'Cost centre-wise profitability analysis',
            'Scenario analysis and forecasting using Tally data',
            'Data export to Excel for advanced financial analysis',
          ],
          outcomes: [
            'Generate and interpret comprehensive financial reports in Tally',
            'Analyse business performance using ratio and trend analysis',
            'Prepare cash flow and fund flow statements',
            'Create budgets and monitor variances in Tally',
            'Build MIS reports for management decision-making',
            'Export and analyse Tally data using Excel dashboards',
          ],
        },
      },

      {
        name: 'Advanced Accounting Pro',
        level: 'advanced',
        focus: 'Professional Accounting Practice',
        details: {
          description:
            'A professional-level accounting course covering advanced accounting concepts, finalization of accounts, audit preparation, and financial compliance for business and corporate accounting roles.',
          duration: '90 Hours',
          mode: 'Online & Offline',
          topics: [
            'Advanced journal entries: depreciation, provisions, adjustments',
            'Finalization of accounts — trial balance to final accounts',
            'Rectification of errors and suspense account',
            'Depreciation methods: SLM, WDV, and Companies Act provisions',
            'Provisions and reserves — types and accounting treatment',
            'Bank reconciliation — complex scenarios and adjustments',
            'Bills receivable and bills payable accounting',
            'Hire purchase and lease accounting',
            'Preparation of cash flow statement (Indirect Method)',
            'Audit trail and internal control in accounting systems',
          ],
          outcomes: [
            'Pass advanced journal entries for complex accounting scenarios',
            'Finalize accounts from trial balance to Balance Sheet and P&L',
            'Apply correct depreciation and provision calculations',
            'Prepare bank reconciliation statements for complex cases',
            'Prepare cash flow statements using the indirect method',
            'Apply internal control principles for audit-ready accounts',
          ],
        },
      },

      {
        name: 'Accounting Basics with Inventory Management in Tally',
        level: 'foundational',
        focus: 'Accounting & Inventory Basics',
        details: {
          description:
            'A beginner-friendly course covering the fundamentals of accounting alongside inventory management in Tally Prime. Ideal for students and small business owners starting their accounting journey.',
          duration: '60 Hours',
          mode: 'Online & Offline',
          topics: [
            'Basic accounting concepts: assets, liabilities, income, expenses',
            'Golden rules of accounting: real, personal, nominal',
            'Journal entries, ledger posting, and trial balance',
            'Introduction to Tally Prime for accounting',
            'Stock groups, stock categories, and stock item creation',
            'Godown and location management in Tally',
            'Purchase orders and sales orders with inventory tracking',
            'Stock summary, movement, and ageing reports',
            'Inventory valuation methods: FIFO, LIFO, weighted average',
            'Physical stock entry and stock adjustment vouchers',
          ],
          outcomes: [
            'Apply basic accounting principles and golden rules',
            'Record journal entries and maintain ledger accounts',
            'Set up and manage inventory in Tally Prime',
            'Process purchase and sales orders with stock tracking',
            'Generate inventory reports and value stock accurately',
          ],
        },
      },

      {
        name: 'Advanced Accounting Insights',
        level: 'advanced',
        focus: 'Advanced Financial Reporting & Compliance',
        details: {
          description:
            'An advanced accounting program providing deep insights into financial reporting, compliance, and analysis aligned with Indian accounting standards and regulatory requirements.',
          duration: '60 Hours',
          mode: 'Online & Offline',
          topics: [
            'Indian Accounting Standards (Ind AS) — overview and applicability',
            'Revenue recognition under Ind AS 115',
            'Lease accounting — Ind AS 116',
            'Financial instruments — Ind AS 109',
            'Consolidation of financial statements',
            'Segment reporting and related party disclosures',
            'Tax accounting: deferred tax assets and liabilities',
            'Accounting for amalgamations and mergers',
            'Ethics in accounting and professional conduct',
            'Presentation of financial statements under Ind AS 1',
          ],
          outcomes: [
            'Apply Indian Accounting Standards (Ind AS) to financial reporting',
            'Account for revenue, leases, and financial instruments under Ind AS',
            'Prepare consolidated financial statements',
            'Handle deferred tax accounting and tax reconciliation',
            'Maintain ethical standards in professional accounting practice',
          ],
        },
      },

      {
        name: 'Banking Financial Services Insurance (BFSI)',
        level: 'intermediate',
        focus: 'BFSI Fundamentals',
        details: {
          description:
            'A comprehensive introduction to the Banking, Financial Services, and Insurance sector — covering products, regulations, operations, and career pathways for students and professionals entering the BFSI industry.',
          duration: '60 Hours',
          mode: 'Online & Offline',
          topics: [
            'Overview of the financial services industry in India',
            'Banking types: commercial, cooperative, and development banks',
            'RBI — role, functions, and monetary policy',
            'Retail banking: accounts, deposits, and loan products',
            'Corporate banking: working capital, trade finance, project loans',
            'Non-Banking Financial Companies (NBFCs) and their role',
            'Insurance sector: life insurance, health insurance, general insurance',
            'Securities and capital markets: equity, debt, mutual funds',
            'Financial inclusion initiatives in India',
            'Digital financial services and fintech landscape',
          ],
          outcomes: [
            'Describe the structure and key players of the Indian BFSI sector',
            'Explain retail and corporate banking products and services',
            'Understand insurance products and their regulatory framework',
            'Navigate capital markets and mutual fund concepts',
            'Prepare for entry-level roles across banking, insurance, and finance',
          ],
        },
      },

      {
        name: 'Maintenance of Information in Books of Accounts',
        level: 'foundational',
        focus: 'Bookkeeping Fundamentals',
        details: {
          description:
            'A foundational bookkeeping course covering the systematic recording and maintenance of financial information in books of accounts as required by Indian commercial and legal standards.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Importance of maintaining books of accounts in business',
            'Books of original entry: cash book, purchase book, sales book',
            'Journal entries and posting to ledger accounts',
            'Trial balance preparation and purpose',
            'Types of subsidiary books and their use',
            'Petty cash book and imprest system',
            'Bank passbook and cash book reconciliation',
            'Statutory requirements for maintaining books of accounts (Indian Companies Act)',
            'Document retention and record-keeping best practices',
          ],
          outcomes: [
            'Maintain books of original entry accurately and systematically',
            'Post journal entries to ledgers and prepare trial balance',
            'Manage petty cash and reconcile bank statements',
            'Understand legal requirements for maintaining books of accounts',
            'Apply proper document retention practices for audit readiness',
          ],
        },
      },

      {
        name: 'Analysis of Accounting Information',
        level: 'intermediate',
        focus: 'Financial Statement Analysis',
        details: {
          description:
            'An intermediate course developing skills to read, interpret, and analyse financial statements and accounting data for business decision-making. Covers ratio analysis, trend analysis, and comparative financial statements.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Purpose and users of financial statement analysis',
            'Common-size statements: vertical and horizontal analysis',
            'Trend analysis and comparative financial statements',
            'Liquidity ratios: current ratio, quick ratio, cash ratio',
            'Profitability ratios: gross profit, net profit, ROCE, ROE',
            'Solvency ratios: debt-equity ratio, interest coverage',
            'Efficiency ratios: inventory turnover, receivables turnover',
            'DuPont analysis for performance decomposition',
            'Limitations of ratio analysis',
            'Cash flow analysis for business assessment',
          ],
          outcomes: [
            'Read and interpret financial statements with confidence',
            'Calculate and analyse key financial ratios',
            'Perform horizontal and vertical analysis of financial data',
            'Use DuPont analysis to evaluate business performance',
            'Identify financial strengths, weaknesses, and warning signs',
          ],
        },
      },

      {
        name: 'Tally Software',
        level: 'foundational',
        focus: 'Tally Introduction',
        details: {
          description:
            'A beginner-level introduction to Tally accounting software — covering navigation, basic setup, and fundamental transaction entry. The ideal starting point for anyone new to computerised accounting.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'History and features of Tally software',
            'Installation and licensing of Tally Prime',
            'Tally Prime gateway, menus, and keyboard shortcuts',
            'Company creation: financial year, currency, and settings',
            'Creating groups and ledgers',
            'Recording basic transactions: receipt, payment, contra',
            'Printing vouchers and invoices',
            'Viewing day book and account ledger reports',
            'Data backup, restore, and company splitting basics',
          ],
          outcomes: [
            'Install and set up Tally Prime for a new company',
            'Navigate the Tally gateway and use keyboard shortcuts efficiently',
            'Create ledgers, groups, and record basic transactions',
            'Generate day book and account summary reports',
            'Perform data backup and basic data management',
          ],
        },
      },

      {
        name: 'Tally Prime',
        level: 'intermediate',
        focus: 'Tally Prime Operations',
        details: {
          description:
            'A comprehensive intermediate-level Tally Prime course covering purchase and sales management, inventory tracking, credit control, and financial reporting for business accounting.',
          duration: '60 Hours',
          mode: 'Online & Offline',
          topics: [
            'Tally Prime 3.0 — new features and interface updates',
            'Multi-currency and foreign exchange transactions',
            'Purchase management: orders, bills, and supplier payments',
            'Sales management: quotations, orders, invoicing, and receipts',
            'Credit limit management and outstanding tracking',
            'Inventory: stock items, units of measure, and godowns',
            'Bill-wise accounting and party ledger reconciliation',
            'Manufacturing journal and bill of materials (BOM)',
            'Job work and job costing in Tally',
            'Comprehensive financial reports and audit tools',
          ],
          outcomes: [
            'Manage complete purchase-to-pay and order-to-cash cycles in Tally',
            'Handle multi-currency transactions and foreign exchange',
            'Track inventory across multiple godowns',
            'Monitor credit limits and manage outstanding receivables',
            'Generate comprehensive business and financial reports in Tally Prime',
          ],
        },
      },

      {
        name: 'Banking Essentials',
        level: 'foundational',
        focus: 'Banking Basics',
        details: {
          description:
            'A foundational course introducing the structure, products, and operations of the banking system in India. Suitable for students, commerce learners, and anyone seeking to understand how banks work.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Introduction to banking — history and evolution in India',
            'Types of banks: public sector, private sector, foreign banks',
            'RBI and its role as the central bank of India',
            'Deposit products: savings account, current account, FD, RD',
            'Loan products: home loan, personal loan, education loan, car loan',
            'Negotiable instruments: cheque, demand draft, promissory note',
            'Online banking: NEFT, RTGS, IMPS, and UPI',
            'ATM, debit card, and credit card operations',
            'KYC norms and anti-money laundering (AML) basics',
            'Banking regulations and consumer protection',
          ],
          outcomes: [
            'Understand the structure and functions of the Indian banking system',
            'Describe common banking products for individuals and businesses',
            'Use banking services including NEFT, RTGS, IMPS, and UPI',
            'Explain KYC requirements and basic banking compliance',
            'Prepare for further study in BFSI or banking-related careers',
          ],
        },
      },

      {
        name: 'Accounting as Information System',
        level: 'foundational',
        focus: 'Accounting Theory & Systems',
        details: {
          description:
            'A conceptual course exploring accounting as an information system — covering how financial data is captured, processed, and communicated to stakeholders for decision-making. Covers accounting theory, standards, and information systems.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Accounting as an information system — concept and scope',
            'Users of accounting information — internal and external',
            'Generally Accepted Accounting Principles (GAAP)',
            'Accounting standards in India — ICAI and MCA overview',
            'Accounting cycle: identification, recording, classification, summarisation',
            'Accounting software and ERP systems overview',
            'Internal controls and the role of accounting in governance',
            'Management accounting vs financial accounting',
            'Introduction to cost accounting concepts',
            'Ethical responsibilities of an accountant',
          ],
          outcomes: [
            'Explain the role of accounting as an information system for stakeholders',
            'Apply GAAP and understand Indian accounting standards',
            'Describe the complete accounting cycle from transaction to reporting',
            'Distinguish between financial, management, and cost accounting',
            'Understand the ethical responsibilities of accounting professionals',
          ],
        },
      },

      {
        name: 'Finance Foundations: Indian Banking and Taxes',
        level: 'foundational',
        focus: 'Indian Banking & Tax System',
        details: {
          description:
            'A foundational course covering the essentials of the Indian banking system and taxation framework — including direct taxes (Income Tax), indirect taxes (GST), and TDS compliance for individuals and businesses.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Overview of Indian financial system: banking, capital markets, insurance',
            'Reserve Bank of India — structure, functions, and monetary policy',
            'Commercial banking operations and products',
            'Introduction to Indian taxation — direct and indirect taxes',
            'Income Tax: heads of income, exemptions, and deductions',
            'Tax slabs for individuals — old regime vs new regime',
            'TDS: concept, applicability, and common TDS sections',
            'GST overview: concept, rates, and applicability',
            'GSTIN registration and basic GST compliance',
            'Filing Income Tax Returns (ITR) — an introduction',
          ],
          outcomes: [
            'Understand the structure and functioning of the Indian banking system',
            'Explain the Indian taxation framework — Income Tax and GST',
            'Calculate basic income tax liability under old and new regimes',
            'Understand TDS obligations for individuals and businesses',
            'Describe GST registration, rates, and basic compliance requirements',
          ],
        },
      },
    ],
  },

  'it-hardware-networking': {
    title: 'IT Hardware & Networking',
    subtitle: 'Hardware & Cyber Security',
    category: 'Technology',
icon: <img src={MKCL} alt="MKCL" style={{ width: '600px', height: '150px', objectFit: 'contain' }} />,    color: '#2563eb',
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
    // In 'it-hardware-networking':
    curriculumTable: [
      {
        name: 'Cyber Security',
        level: 'foundational',
        focus: 'Cybersecurity Fundamentals',
        details: {
          description:
            'In a digital world, we are more vulnerable to malicious attacks. This course introduces the core concepts of cybersecurity, threat landscapes, and the tools used to defend systems and networks from real-world attacks.',
          duration: '60 Hours',
          mode: 'Online & Offline',
          topics: [
            'Introduction to Cybersecurity & Threat Landscape',
            'Types of Cyber Attacks: Malware, Phishing, Ransomware, DoS/DDoS',
            'CIA Triad: Confidentiality, Integrity, Availability',
            'Network Security Basics: Firewalls, IDS/IPS',
            'Password Security, Hashing & Encryption Basics',
            'Operating System Security Fundamentals',
            'Social Engineering & Human-Centric Threats',
            'Introduction to Ethical Hacking & Penetration Testing Concepts',
            'Security Policies, Compliance & Frameworks (ISO 27001, NIST)',
            'Incident Response & Basic Forensics',
          ],
          outcomes: [
            'Understand the cybersecurity threat landscape and attack types',
            'Apply CIA triad principles to evaluate system security',
            'Identify and respond to common cyber threats',
            'Configure basic firewall and network security settings',
            'Understand security compliance frameworks and policies',
          ],
        },
      },
      {
        name: 'Desktop Support',
        level: 'intermediate',
        focus: 'Desktop Support Technician',
        details: {
          description:
            'Desktop Support Technician is the one who configures, maintains, and troubleshoots desktop computers, laptops, and peripherals in a corporate or institutional environment. This course prepares you for a hands-on IT support role.',
          duration: '120 Hours',
          mode: 'Online & Offline',
          topics: [
            'Introduction to Desktop Support & Help Desk Operations',
            'Installing and Configuring Windows OS (10/11)',
            'Driver Installation, Updates & System Optimization',
            'Troubleshooting Hardware Issues: CPU, RAM, Storage, Display',
            'Peripheral Setup: Printers, Scanners, Projectors, USB Devices',
            'Software Installation, Licensing & Patch Management',
            'Antivirus, Malware Removal & System Security',
            'Remote Desktop Support & Remote Assistance Tools',
            'User Account Management in Windows & Active Directory Basics',
            'Backup & Recovery Procedures',
            'BIOS/UEFI Configuration & Boot Troubleshooting',
            'Ticketing Systems & IT Documentation',
          ],
          outcomes: [
            'Install, configure, and maintain Windows desktop systems',
            'Troubleshoot hardware, software, and peripheral issues',
            'Manage user accounts and apply basic Active Directory concepts',
            'Provide remote and on-site desktop support professionally',
            'Document incidents and use help desk ticketing systems',
          ],
        },
      },
      {
        name: 'Hardware Support',
        level: 'intermediate',
        focus: 'Hardware Technician',
        details: {
          description:
            'As a hardware support technician, it is essential to have a good understanding of computer components and how to service them. This course covers hands-on hardware assembly, diagnosis, and repair.',
          duration: '120 Hours',
          mode: 'Online & Offline',
          topics: [
            'Computer Architecture: Motherboard, CPU, RAM, PSU, Storage',
            'Identifying & Selecting Compatible Hardware Components',
            'Assembling a Desktop Computer from Scratch',
            'Installing and Configuring RAM, HDD, SSD, GPU, and Optical Drives',
            'BIOS/UEFI Setup, POST Diagnostics & Boot Configuration',
            'Laptop Hardware Servicing: Disassembly, Screen & Battery Replacement',
            'Peripheral Hardware: Printers, Scanners, UPS, Networking Hardware',
            'ESD Safety, Thermal Management & Cable Management',
            'Diagnosing and Replacing Faulty Components',
            'Hardware Diagnostic Tools & Software',
            'Preventive Maintenance Procedures',
          ],
          outcomes: [
            'Assemble and disassemble desktop and laptop hardware confidently',
            'Identify, test, and replace faulty hardware components',
            'Configure BIOS/UEFI and resolve POST/boot issues',
            'Service printers, scanners, and other peripherals',
            'Apply ESD safety and preventive maintenance best practices',
          ],
        },
      },
      {
        name: 'Network Support',
        level: 'intermediate',
        focus: 'IT Network Technician',
        details: {
          description:
            'IT Network Support Technician is the one who installs, configures, and maintains network infrastructure for organizations. This course provides hands-on training in network setup, troubleshooting, and administration.',
          duration: '120 Hours',
          mode: 'Online & Offline',
          topics: [
            'Introduction to Networking: OSI & TCP/IP Models',
            'IP Addressing: IPv4, IPv6, Subnetting & CIDR',
            'Network Devices: Routers, Switches, Hubs, Modems, Access Points',
            'LAN, WAN, MAN & Wireless Network Setup',
            'Cable Types: Cat5e/Cat6 Crimping, Fiber Optics Overview',
            'Router & Switch Configuration (Cisco IOS Basics)',
            'DHCP, DNS, NAT & Basic Routing Protocols (RIP, OSPF Overview)',
            'Wi-Fi Configuration, Security (WPA2/WPA3) & Troubleshooting',
            'Network Monitoring Tools: Ping, Traceroute, Wireshark Basics',
            'VPN Concepts & Remote Access Setup',
            'Network Troubleshooting Methodology',
            'Firewall Configuration & Port Management',
          ],
          outcomes: [
            'Design and set up small-to-medium LAN and WAN networks',
            'Configure routers, switches, and wireless access points',
            'Perform IP subnetting and address planning',
            'Diagnose and resolve common network connectivity issues',
            'Monitor network traffic and apply basic security configurations',
          ],
        },
      },
      {
        name: 'Security Support',
        level: 'foundational',
        focus: 'IT Security Support',
        details: {
          description:
            'Almost everyone around us types at the keyboard of computers or smartphones. This course focuses on the practical security skills needed to protect IT systems, user data, and organizational assets from threats and vulnerabilities.',
          duration: '120 Hours',
          mode: 'Online & Offline',
          topics: [
            'Introduction to Information Security & Risk Management',
            'Authentication Methods: Passwords, MFA, Biometrics, Smart Cards',
            'Access Control Models: DAC, MAC, RBAC',
            'Endpoint Security: Antivirus, EDR, Host-Based Firewalls',
            'Email Security: Anti-Spam, Phishing Detection & SPF/DKIM',
            'Web Security: HTTPS, SSL/TLS Certificates, Proxy Servers',
            'Vulnerability Assessment & Patch Management',
            'Security Incident Handling & Escalation Procedures',
            'Data Protection: Encryption at Rest & in Transit',
            'Security Awareness Training Concepts',
            'Introduction to SIEM Tools & Log Analysis',
            'Compliance Basics: GDPR, ISO 27001, Cyber Essentials',
          ],
          outcomes: [
            'Implement endpoint, email, and web security measures',
            'Configure multi-factor authentication and access controls',
            'Identify vulnerabilities and manage patch updates',
            'Handle security incidents using standard response procedures',
            'Understand compliance requirements and data protection principles',
          ],
        },
      },
      {
        name: 'Understanding IT Hardware and Networking',
        level: 'foundational',
        focus: 'IT Hardware & Network Basics',
        details: {
          description:
            'Learn about essential computer hardware parts, system assembly, and the fundamentals of networking. This beginner-level course is the ideal starting point for anyone entering the IT field.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Overview of Computer Hardware: Internal & External Components',
            'CPU, RAM, Motherboard, Storage, Power Supply — Functions & Types',
            'Input & Output Devices Overview',
            'Introduction to Operating Systems: Windows, Linux, macOS',
            'Introduction to Networking: What is a Network?',
            'Types of Networks: LAN, WAN, PAN, MAN',
            'Network Topologies: Bus, Star, Ring, Mesh',
            'Networking Hardware: Switches, Routers, Access Points',
            'IP Addresses, MAC Addresses & Basic Protocols',
            'Internet, Intranet & Extranet Concepts',
          ],
          outcomes: [
            'Identify and describe core hardware components and their roles',
            'Understand how operating systems interact with hardware',
            'Explain basic networking concepts and terminology',
            'Distinguish between different network types and topologies',
            'Prepare for intermediate hardware and networking courses',
          ],
        },
      },
      {
        name: 'Mastering Installations and Configurations',
        level: 'advanced',
        focus: 'Advanced Hardware Setup',
        details: {
          description:
            'Install, configure, and troubleshoot hardware and software in professional IT environments. This advanced course covers enterprise-level deployment, system imaging, and configuration management.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Advanced BIOS/UEFI Configuration & Secure Boot',
            'OS Deployment: Imaging, Cloning & Automated Installation (Sysprep, WDS)',
            'RAID Configuration: RAID 0, 1, 5, 10 Setup & Management',
            'Virtualization: Installing VMware/Hyper-V & Creating VMs',
            'Multi-Monitor Setup, GPU Configuration & Display Troubleshooting',
            'Enterprise Printer & Peripheral Network Configuration',
            'Group Policy & Registry Settings in Windows',
            'Software Deployment & Remote Management Tools (SCCM/Intune Overview)',
            'System Performance Tuning & Resource Monitoring',
            'Documentation: IT Asset Management & Change Records',
          ],
          outcomes: [
            'Deploy and configure operating systems at enterprise scale',
            'Set up RAID arrays and manage storage configurations',
            'Create and manage virtual machines using hypervisors',
            'Apply Group Policy and registry settings for system control',
            'Document IT assets and manage configurations professionally',
          ],
        },
      },
      {
        name: 'Understanding Computer Networks',
        level: 'foundational',
        focus: 'Networking Fundamentals',
        details: {
          description:
            'Learn the basics of networking, including protocols, topologies, and how data travels across networks. This course builds the conceptual foundation required for all networking roles.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'What is a Computer Network & Why Networking Matters',
            'OSI Model: 7 Layers Explained with Real Examples',
            'TCP/IP Model & Protocol Suite',
            'IP Addressing: IPv4 Classes, Subnetting, IPv6 Overview',
            'Common Protocols: HTTP, HTTPS, FTP, SMTP, DNS, DHCP, ARP',
            'Network Devices & Their Roles: Hub, Switch, Router, Gateway',
            'Wired vs Wireless Networking Technologies',
            'Introduction to Packet Switching & Data Encapsulation',
            'Network Troubleshooting Commands: ping, ipconfig, netstat, nslookup',
            'Introduction to Cloud Networking Concepts',
          ],
          outcomes: [
            'Explain the OSI and TCP/IP models and their practical relevance',
            'Understand how IP addressing and subnetting work',
            'Identify protocols and their roles in data communication',
            'Use basic CLI tools to diagnose network issues',
            'Build a conceptual foundation for advanced networking courses',
          ],
        },
      },
      {
        name: 'Mastering Computer Network Administration',
        level: 'advanced',
        focus: 'Network Administration',
        details: {
          description:
            'Manage network configurations and resolve connectivity and performance issues at an advanced level. This course prepares you for network administrator and engineer roles in corporate environments.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Advanced Subnetting, VLSM & Supernetting',
            'VLAN Configuration & Inter-VLAN Routing',
            'Advanced Routing Protocols: OSPF, EIGRP, BGP Concepts',
            'Spanning Tree Protocol (STP) & Redundancy Management',
            'Network Address Translation (NAT): Static, Dynamic & PAT',
            'QoS (Quality of Service) Configuration',
            'Network Security: ACLs, Zone-Based Firewall, IPSec VPN',
            'Network Performance Monitoring: SNMP, NetFlow, Syslog',
            'High Availability: Link Aggregation (LACP), HSRP/VRRP',
            'Wireless Enterprise Deployment & Controller Management',
          ],
          outcomes: [
            'Configure VLANs, routing protocols, and redundancy mechanisms',
            'Implement network security using ACLs and VPN technologies',
            'Monitor and optimize network performance using industry tools',
            'Manage enterprise wireless networks and controllers',
            'Troubleshoot complex multi-layer network environments',
          ],
        },
      },
    ],

  },

  'management-level': {
    title: 'Management Level',
    subtitle: 'Business & Marketing Management',
    category: 'Management',
icon: <img src={MKCL} alt="MKCL" style={{ width: '600px', height: '150px', objectFit: 'contain' }} />,    color: '#2563eb',
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
    curriculumTable: [
      {
        name: 'Management Basics with Soft Skills',
        level: 'foundational',
        focus: 'Management Intro',
        details: {
          description: 'An introductory course covering the fundamentals of management combined with essential soft skills for workplace readiness. Delivered via MKCL KLiC platform with work-centric learning methodology.',
          duration: '30 Hours',
          mode: 'Online & Offline | Learn Online or ALC',
          topics: [
            'Definition and concept of management',
            'Functions of management: planning, organizing, leading, controlling',
            'Qualities and 6Ms of management',
            'Essential managerial skills for workplace success',
            'Communication skills: verbal, non-verbal, and written',
            'Time management and personal effectiveness',
            'Teamwork, collaboration, and interpersonal skills',
            'Problem solving and decision-making basics',
            'Professional ethics and workplace conduct',
          ],
          outcomes: [
            'Explain the concept and functions of management',
            'Apply essential managerial and soft skills in professional contexts',
            'Communicate effectively in workplace environments',
            'Demonstrate professional ethics and personal effectiveness',
            'Prepare for intermediate management and marketing courses',
          ],
        },
      },
      {
        name: 'Basics of Management and Behavioral Science',
        level: 'foundational',
        focus: 'Behavioral Science',
        details: {
          description: 'Covers foundational management principles alongside behavioral science concepts — understanding human behavior in organizational settings to improve management effectiveness.',
          duration: '30 Hours',
          mode: 'Online & Offline | KLiC Platform',
          topics: [
            'Introduction to management: concepts, evolution, and importance',
            'Classical and modern management theories',
            'Introduction to behavioral science in management',
            'Individual behavior: perception, motivation, and attitudes',
            'Group dynamics and team behavior',
            'Organizational culture and its influence on behavior',
            'Leadership styles and their behavioral impact',
            'Conflict and stress management in organizations',
            'Change management and organizational adaptation',
          ],
          outcomes: [
            'Understand the evolution of management thought and theory',
            'Apply behavioral science concepts to organizational scenarios',
            'Analyse individual and group behavior in workplace settings',
            'Identify leadership styles and their effects on team performance',
            'Manage conflict and organizational change effectively',
          ],
        },
      },
      {
        name: 'Business Mathematics and Statistics',
        level: 'foundational',
        focus: 'Business Maths',
        details: {
          description: 'A foundational course covering mathematical and statistical concepts applied to business decision-making — including percentages, ratios, averages, probability, and data interpretation.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Arithmetic: percentages, ratios, proportions, and averages',
            'Profit, loss, discount, and interest calculations',
            'Introduction to algebra for business problem-solving',
            'Descriptive statistics: mean, median, mode, standard deviation',
            'Data collection, tabulation, and frequency distributions',
            'Graphical representation of data: bar charts, pie charts, histograms',
            'Probability basics and its business applications',
            'Index numbers and their use in business analysis',
            'Time series analysis and trend identification',
          ],
          outcomes: [
            'Perform business arithmetic calculations accurately',
            'Apply descriptive statistics to analyze business data',
            'Interpret graphical data representations for decision-making',
            'Use probability concepts in basic business forecasting',
            'Read and interpret index numbers and business trends',
          ],
        },
      },
      {
        name: 'Services in Modern Economy',
        level: 'foundational',
        focus: 'Modern Economy',
        details: {
          description: 'An introductory course exploring the role of the service sector in the modern economy — covering the characteristics of services, their classification, and their growing importance in India and globally.',
          duration: '30 Hours',
          mode: 'Online & Offline | KLiC Platform',
          topics: [
            'Definition and characteristics of services',
            'Difference between goods and services: the 4 Is (Intangibility, Inseparability, Inconsistency, Inventory)',
            'Classification of services: consumer, business, public, and professional',
            'Growth of the service sector in India and global economies',
            'Service sector contribution to GDP and employment',
            'Emerging service industries: IT, healthcare, hospitality, logistics',
            'Challenges faced by service organizations',
            'Service economy and digital transformation',
            'Customer expectations in service-based industries',
          ],
          outcomes: [
            'Define services and explain their unique characteristics',
            'Classify different types of services and their economic roles',
            'Describe the growth and importance of the service sector in India',
            'Identify challenges unique to service organizations',
            'Understand how digital transformation is shaping the service economy',
          ],
        },
      },
      {
        name: 'Marketing',
        level: 'foundational',
        focus: 'Marketing Basics',
        details: {
          description: 'A foundational course covering the core principles of marketing — including the marketing mix, consumer behavior, market segmentation, and the role of marketing in business strategy.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Introduction to marketing: definition, scope, and importance',
            'Evolution of marketing: production, sales, marketing, and societal concepts',
            'Marketing mix: Product, Price, Place, Promotion (4Ps)',
            'Consumer behavior: buying process and influencing factors',
            'Market segmentation, targeting, and positioning (STP)',
            'Product lifecycle management',
            'Pricing strategies and pricing decisions',
            'Distribution channels and supply chain basics',
            'Integrated marketing communications (IMC)',
          ],
          outcomes: [
            'Explain the concept and importance of marketing in business',
            'Apply the 4Ps of the marketing mix to real business scenarios',
            'Understand consumer behavior and buying decision processes',
            'Perform basic market segmentation and targeting analysis',
            'Describe integrated marketing communication strategies',
          ],
        },
      },
      {
        name: 'Marketing 101: Strategy & Process',
        level: 'foundational',
        focus: 'Marketing Strategy',
        details: {
          description: 'A structured introduction to marketing strategy and the marketing planning process — covering environmental analysis, strategic planning tools, and execution frameworks.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Marketing strategy: concept and importance',
            'Marketing environment: micro and macro factors (PESTLE)',
            'SWOT analysis for marketing planning',
            'BCG matrix and product portfolio management',
            'Competitive analysis and market positioning',
            'Marketing planning process: objectives, strategy, tactics, control',
            'Customer value proposition and brand differentiation',
            'Go-to-market strategy for new products',
            'Marketing metrics and performance measurement',
          ],
          outcomes: [
            'Develop a basic marketing strategy using SWOT and PESTLE analysis',
            'Apply BCG matrix for product portfolio decisions',
            'Define a customer value proposition and competitive positioning',
            'Create a structured marketing plan with measurable objectives',
            'Evaluate marketing performance using key metrics',
          ],
        },
      },
      {
        name: 'Basics of Social Media Marketing',
        level: 'foundational',
        focus: 'Social Media Basics',
        details: {
          description: 'An entry-level introduction to social media marketing — covering platform overview, content basics, and how businesses use social media to reach and engage customers.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Introduction to social media and its role in marketing',
            'Overview of platforms: Facebook, Instagram, LinkedIn, X (Twitter), YouTube',
            'Setting up and optimizing business profiles on social platforms',
            'Content types: posts, stories, reels, and videos',
            'Creating engaging content for social media audiences',
            'Basics of hashtags, SEO for social media, and discoverability',
            'Social media content calendar planning',
            'Introduction to social media analytics and insights',
            'Social media etiquette and brand voice guidelines',
          ],
          outcomes: [
            'Set up and manage professional business profiles on key platforms',
            'Create and schedule basic social media content',
            'Apply hashtag strategy and content planning principles',
            'Read basic social media analytics and insights',
            'Maintain a consistent brand voice across social platforms',
          ],
        },
      },
      {
        name: 'Foundations of Digital and Social Media Marketing',
        level: 'foundational',
        focus: 'Digital Foundations',
        details: {
          description: 'A comprehensive foundational course covering digital marketing principles alongside social media strategy — preparing students for careers in digital marketing and online brand management.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Introduction to digital marketing: channels and ecosystem',
            'Website basics: understanding domains, hosting, and landing pages',
            'Search Engine Optimization (SEO): on-page and off-page basics',
            'Search Engine Marketing (SEM) and Google Ads introduction',
            'Email marketing: campaigns, lists, and automation basics',
            'Social media marketing: strategy and platform selection',
            'Content marketing: blogging, videos, and infographics',
            'Digital advertising: display ads, retargeting, and social ads',
            'Digital analytics: Google Analytics basics and KPIs',
          ],
          outcomes: [
            'Understand the digital marketing landscape and key channels',
            'Apply basic SEO and SEM concepts to improve online visibility',
            'Create and manage social media marketing campaigns',
            'Plan and execute basic email marketing campaigns',
            'Track digital marketing performance using analytics tools',
          ],
        },
      },
      {
        name: 'Social Media Marketing 2025',
        level: 'intermediate',
        focus: 'Digital Marketing',
        details: {
          description: 'An updated 2025 course covering advanced social media marketing strategies, content creation, paid advertising, influencer marketing, and analytics for business growth.',
          duration: '60 Hours',
          mode: 'Online & Offline',
          topics: [
            'Social media strategy development for businesses',
            'Advanced content creation: reels, shorts, carousels, and stories',
            'Platform algorithms: understanding reach and engagement mechanics',
            'Meta Ads (Facebook & Instagram): campaign setup and optimization',
            'LinkedIn marketing for B2B and professional branding',
            'Influencer marketing: selection, outreach, and ROI measurement',
            'Social media community management and crisis response',
            'Social commerce: selling products through social platforms',
            'AI tools for social media content creation and scheduling',
            'Analytics and reporting: Meta Business Suite, LinkedIn Analytics',
          ],
          outcomes: [
            'Develop and execute comprehensive social media marketing strategies',
            'Create high-performing content for all major social platforms',
            'Run and optimize paid social media advertising campaigns',
            'Measure and report on social media ROI using analytics tools',
            'Use AI-powered tools for efficient content creation and scheduling',
          ],
        },
      },
      {
        name: 'Management',
        level: 'foundational',
        focus: 'Management Principles',
        details: {
          description: 'A comprehensive foundational management course covering classical and modern management principles, organizational structures, planning, and control systems for business environments.',
          duration: '30 Hours',
          mode: 'Online & Offline | KLiC Platform',
          topics: [
            'Management and its evolution: classical, behavioral, and modern schools',
            'Management and environment: internal and external factors',
            'Social responsibility of managers: ethics in management',
            'International management and MNCs',
            'Country alliances, economic blocs, and competitive advantage',
            'Types of departmentation and matrix organization',
            'Levels of management and organizational hierarchies',
            'Organization structure and span of management',
            'Authority, power, empowerment, and decentralization',
            'Strategic planning process: SWOT, TOWS, Blue Ocean strategy',
            'Objectives, MBO (Management by Objectives), and steps in planning',
            'Rational decision-making, creativity, and innovation',
          ],
          outcomes: [
            'Explain the evolution of management thought and practice',
            'Analyse organizational structures and departmentation models',
            'Apply strategic planning tools including SWOT and MBO',
            'Understand international management and global business dynamics',
            'Make rational management decisions using structured frameworks',
          ],
        },
      },
      {
        name: 'Mastering Management: Objectives & Processes',
        level: 'advanced',
        focus: 'Management Mastery',
        details: {
          description: 'An advanced management course focusing on managerial objectives, organizational processes, and strategic execution — developing senior-level management competencies.',
          duration: '30 Hours',
          mode: 'Online & Offline | KLiC Platform — Track: Service Management',
          topics: [
            'Concept of management and qualities of effective managers',
            'Technological inventions and innovative management environments',
            'Social responsibility of managers and ethics in management',
            'International management and global competitive strategies',
            'Country alliances, economic blocs, and competitive advantage frameworks',
            'Types of departmentation and functional authority',
            'Effective organizing, organizational culture, and change',
            'Strategic planning: TOWS, Blue Ocean, and Business Portfolio Matrix',
            'Objectives and Management by Objectives (MBO)',
            'Rational decision-making models and alternatives',
            'Creativity, innovation, and entrepreneurial management',
            'Scope and evolution of management in modern economies',
          ],
          outcomes: [
            'Interpret the idea of management and attributes of effective managers',
            'Paraphrase key managerial competencies and strategies for fostering them',
            'Compare corporate settings pertaining to technology, invention, and innovation',
            'Discover the ethical obligations of managers and their social role',
            'Examine international management and global competitive dynamics',
          ],
        },
      },
      {
        name: 'Mastering Management & Research Processes',
        level: 'advanced',
        focus: 'Research & Strategy',
        details: {
          description: 'Combines advanced management strategy with research methodology — covering business research methods, data collection, analysis, and report writing for evidence-based management decisions.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Introduction to business research: purpose, types, and scope',
            'Research design: exploratory, descriptive, and causal research',
            'Primary data collection: surveys, interviews, focus groups, observation',
            'Secondary data sources: databases, reports, and literature review',
            'Sampling techniques and sample size determination',
            'Quantitative analysis: statistical tools for business research',
            'Qualitative analysis: thematic analysis and content analysis',
            'Research ethics and data integrity',
            'Research report writing and presentation for management audiences',
          ],
          outcomes: [
            'Design and conduct business research studies effectively',
            'Select appropriate data collection methods for management problems',
            'Analyse research data using quantitative and qualitative techniques',
            'Write professional research reports for management decision-making',
            'Apply evidence-based management principles to organizational challenges',
          ],
        },
      },
      {
        name: 'Retail Management',
        level: 'intermediate',
        focus: 'Retail',
        details: {
          description: 'A comprehensive course covering the principles and practices of retail management — from store operations and merchandise management to customer experience and retail analytics.',
          duration: '60 Hours',
          mode: 'Online & Offline',
          topics: [
            'Introduction to retailing: types, formats, and evolution',
            'Retail strategy: location, store format, and target market selection',
            'Merchandise management: buying, assortment planning, and inventory',
            'Visual merchandising and store layout design',
            'Retail pricing strategies: EDLP, Hi-Lo, and value pricing',
            'Retail promotions: advertising, sales promotions, and loyalty programs',
            'Customer service excellence in retail environments',
            'Supply chain management for retail operations',
            'Omnichannel retailing: integrating online and offline channels',
            'Retail analytics: sales tracking, footfall analysis, and KPIs',
          ],
          outcomes: [
            'Develop a retail strategy covering location, format, and target market',
            'Manage merchandise assortment, buying, and inventory effectively',
            'Design store layouts and visual merchandising for maximum impact',
            'Implement retail pricing and promotional strategies',
            'Operate omnichannel retail and analyze performance using KPIs',
          ],
        },
      },
      {
        name: 'Retail Insights & Sales Mastery',
        level: 'intermediate',
        focus: 'Sales & Retail',
        details: {
          description: 'Develops practical sales skills and retail insights — covering consultative selling, customer psychology, sales techniques, and performance management for retail professionals.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Introduction to professional selling in retail environments',
            'Customer psychology: buying motivations and decision triggers',
            'Consultative selling: needs identification and solution presentation',
            'Sales conversation techniques: opening, probing, presenting, closing',
            'Handling customer objections and concerns effectively',
            'Upselling, cross-selling, and add-on selling strategies',
            'Building customer relationships and loyalty',
            'Sales target setting and performance tracking',
            'Retail KPIs: conversion rate, average transaction value, and footfall',
            'Digital tools for retail sales management',
          ],
          outcomes: [
            'Apply consultative selling techniques in retail customer interactions',
            'Identify customer needs and present appropriate product solutions',
            'Handle objections and close sales professionally',
            'Use upselling and cross-selling to increase transaction value',
            'Track and improve personal sales performance against KPIs',
          ],
        },
      },
      {
        name: 'Retail Business Dynamics',
        level: 'intermediate',
        focus: 'Retail Dynamics',
        details: {
          description: 'Explores the dynamic forces shaping the retail industry — covering competitive dynamics, consumer trends, technology disruption, and strategic retail planning for evolving markets.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Retail environment analysis: competitive and macro forces',
            'Consumer behavior trends shaping modern retail',
            'Technology disruption in retail: AI, AR, and automation',
            'E-commerce and D2C (Direct-to-Consumer) retail models',
            'Sustainability and ethical retailing',
            'Franchising and retail expansion strategies',
            'Private label and brand development in retail',
            'Retail real estate and location strategy dynamics',
            'Future of retail: trends shaping the next decade',
          ],
          outcomes: [
            'Analyse competitive and environmental forces in the retail sector',
            'Understand consumer behavior trends and their retail implications',
            'Evaluate technology disruption and digital transformation in retail',
            'Develop retail expansion and franchising strategies',
            'Anticipate future retail trends for strategic planning',
          ],
        },
      },
      {
        name: 'Service Marketing Strategies',
        level: 'intermediate',
        focus: 'Service Marketing',
        details: {
          description: 'Covers marketing strategies specifically designed for service businesses — addressing the unique challenges of marketing intangible offerings and managing the service delivery experience.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Introduction to service marketing and the services marketing triangle',
            'The extended marketing mix for services: 7Ps',
            'Service differentiation and positioning strategies',
            'Managing the service encounter and service delivery system',
            'Pricing strategies for services: value-based and yield management',
            'Service distribution: channels and intermediaries',
            'Services communication and evidence management',
            'Managing demand and capacity in service operations',
            'Building service brands and brand equity',
          ],
          outcomes: [
            'Apply the 7Ps marketing mix framework to service businesses',
            'Develop differentiation and positioning strategies for services',
            'Design effective service delivery systems and customer touchpoints',
            'Manage pricing, demand, and capacity for service profitability',
            'Build strong service brands through evidence and experience management',
          ],
        },
      },
      {
        name: 'Service Marketing Strategies for Success',
        level: 'intermediate',
        focus: 'Service Success',
        details: {
          description: 'An applied course focusing on practical service marketing strategies that drive business success — covering customer acquisition, retention, and service innovation.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Customer acquisition strategies for service businesses',
            'Customer retention and loyalty program design',
            'Service innovation: developing new service offerings',
            'Digital marketing for service businesses',
            'Word-of-mouth and referral marketing in services',
            'Customer feedback systems and service improvement loops',
            'Service recovery strategies for handling complaints',
            'Measuring service marketing effectiveness and ROI',
            'Case studies: successful service marketing campaigns',
          ],
          outcomes: [
            'Design customer acquisition and retention strategies for services',
            'Develop service innovation frameworks for competitive advantage',
            'Implement digital and referral marketing for service businesses',
            'Build feedback loops and service recovery systems',
            'Measure and optimize service marketing performance and ROI',
          ],
        },
      },
      {
        name: 'Customer Centric Marketing',
        level: 'intermediate',
        focus: 'Customer Strategy',
        details: {
          description: 'Develops a deep understanding of customer-centric marketing — placing the customer at the center of all marketing decisions through CRM, customer journey mapping, and personalization strategies.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Customer-centric marketing: philosophy and principles',
            'Customer journey mapping and touchpoint analysis',
            'Customer segmentation and persona development',
            'Voice of the Customer (VoC) research methods',
            'Customer Relationship Management (CRM) systems and strategies',
            'Personalization and one-to-one marketing approaches',
            'Customer lifetime value (CLV) and its strategic importance',
            'Net Promoter Score (NPS) and customer satisfaction metrics',
            'Building customer communities and brand advocacy',
          ],
          outcomes: [
            'Map customer journeys and identify key touchpoints for improvement',
            'Develop customer personas through VoC research',
            'Implement CRM strategies for customer retention and growth',
            'Calculate and maximize customer lifetime value',
            'Measure customer satisfaction using NPS and other metrics',
          ],
        },
      },
      {
        name: 'Customer-Centric Service Strategies',
        level: 'intermediate',
        focus: 'Customer Focus',
        details: {
          description: 'Focuses on designing and delivering service strategies that place the customer at the core — covering service design, empathy mapping, and customer experience transformation.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Customer-centric service design principles',
            'Empathy mapping and understanding customer needs',
            'Service blueprinting for customer experience design',
            'Moments of truth and peak-end rule in service experiences',
            'Omnichannel customer experience strategy',
            'Employee empowerment for customer-centric service delivery',
            'Technology-enabled personalization in customer service',
            'Measuring customer experience: CSAT, CES, and NPS',
            'Building a customer-first organizational culture',
          ],
          outcomes: [
            'Design customer-centric service experiences using blueprinting',
            'Apply empathy mapping to understand and address customer needs',
            'Develop omnichannel strategies for consistent customer experience',
            'Empower employees to deliver exceptional customer service',
            'Measure and continuously improve customer experience outcomes',
          ],
        },
      },
      {
        name: 'Service Expectation Management',
        level: 'intermediate',
        focus: 'Expectations',
        details: {
          description: 'Covers the management of customer expectations in service businesses — understanding the gap model, setting appropriate expectations, and consistently meeting or exceeding them.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Nature and types of customer expectations',
            'Factors that influence customer expectations',
            'The GAP model of service quality (Parasuraman, Zeithaml, Berry)',
            'Identifying and closing service quality gaps',
            'Managing customer expectations through communication',
            'Promise management: setting realistic service promises',
            'Exceeding expectations: the delight strategy',
            'Handling expectation mismatches and service failures',
            'Role of service guarantees in expectation management',
          ],
          outcomes: [
            'Identify and explain different types of customer service expectations',
            'Apply the GAP model to diagnose service quality problems',
            'Manage customer expectations through clear communication strategies',
            'Design service guarantees for expectation management',
            'Develop strategies to consistently meet and exceed customer expectations',
          ],
        },
      },
      {
        name: 'Managing Service Operations',
        level: 'intermediate',
        focus: 'Operations',
        details: {
          description: 'Covers the operational management of service businesses — including capacity planning, queuing, service process design, and performance management for efficient service delivery.',
          duration: '60 Hours',
          mode: 'Online & Offline',
          topics: [
            'Introduction to service operations management',
            'Service process design and service blueprinting',
            'Capacity management: demand forecasting and capacity planning',
            'Queuing theory and waiting line management',
            'Service facility layout and design',
            'Managing service quality through operational systems',
            'Lean principles applied to service operations',
            'Technology in service operations: automation and AI',
            'Service performance measurement: KPIs and dashboards',
            'Supply chain management for service businesses',
          ],
          outcomes: [
            'Design efficient service processes using blueprinting and lean principles',
            'Plan and manage capacity to meet service demand effectively',
            'Apply queuing theory to reduce customer waiting times',
            'Measure service operations performance using KPIs and dashboards',
            'Use technology and automation to improve service delivery efficiency',
          ],
        },
      },
      {
        name: 'Service Quality',
        level: 'intermediate',
        focus: 'Quality Management',
        details: {
          description: 'A focused course on service quality management — covering quality frameworks, SERVQUAL, total quality management (TQM), and continuous improvement methodologies for service businesses.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Concept and dimensions of service quality',
            'SERVQUAL model: five dimensions (Reliability, Assurance, Tangibles, Empathy, Responsiveness)',
            'Measuring service quality: surveys, mystery shopping, and audits',
            'Total Quality Management (TQM) in service organizations',
            'ISO 9001 quality management system overview',
            'Six Sigma concepts applied to service quality',
            'Continuous improvement: Kaizen and PDCA cycle in services',
            'Complaint management and service recovery systems',
            'Creating a quality culture in service organizations',
          ],
          outcomes: [
            'Apply SERVQUAL to assess and improve service quality',
            'Design service quality measurement systems for organizations',
            'Implement TQM and continuous improvement in service settings',
            'Manage customer complaints and service recovery effectively',
            'Build a quality-focused culture within service organizations',
          ],
        },
      },
      {
        name: 'Service Quality Optimization Essentials',
        level: 'advanced',
        focus: 'Quality Optimization',
        details: {
          description: 'An advanced course on optimizing service quality — covering statistical quality control, advanced measurement models, quality cost analysis, and building world-class service quality systems.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Advanced service quality measurement frameworks',
            'Statistical process control (SPC) in service environments',
            'Quality cost analysis: prevention, appraisal, and failure costs',
            'Benchmarking for service quality improvement',
            'Voice of the Customer (VoC) advanced analysis techniques',
            'Lean Six Sigma DMAIC methodology for service quality',
            'Digital service quality management and AI-driven insights',
            'Service quality governance and accountability frameworks',
            'World-class service quality case studies and best practices',
          ],
          outcomes: [
            'Apply statistical process control to service quality management',
            'Conduct quality cost analysis and identify improvement opportunities',
            'Use Lean Six Sigma DMAIC to optimize service processes',
            'Benchmark service quality against industry best practices',
            'Build advanced service quality governance systems',
          ],
        },
      },
      {
        name: 'Enhancing Service Through People and Technology',
        level: 'advanced',
        focus: 'Tech & People',
        details: {
          description: 'Examines how people and technology work together to deliver superior service experiences — covering HR practices for service excellence, technology enablement, and digital transformation in services.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'The role of people in service delivery: the service-profit chain',
            'Recruiting, training, and retaining service-oriented employees',
            'Employee empowerment and internal marketing',
            'Technology in service delivery: AI, chatbots, and automation',
            'Self-service technology: kiosks, apps, and online portals',
            'CRM technology for enhanced customer relationships',
            'Digital transformation in service organizations',
            'Balancing high-tech and high-touch service experiences',
            'Measuring the impact of technology on service quality',
          ],
          outcomes: [
            'Apply the service-profit chain framework to improve service outcomes',
            'Design HR practices that support service excellence',
            'Implement technology solutions to enhance service delivery',
            'Balance automation with human interaction for optimal experiences',
            'Measure the impact of people and technology investments on service quality',
          ],
        },
      },
      {
        name: 'Service Entrepreneurship',
        level: 'advanced',
        focus: 'Entrepreneurship',
        details: {
          description: 'Develops entrepreneurial skills specifically for service businesses — covering ideation, business model design, funding, scaling, and managing the unique challenges of service ventures.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Introduction to service entrepreneurship: opportunities and challenges',
            'Identifying service business opportunities through market research',
            'Business model design for service ventures (Business Model Canvas)',
            'Value proposition design for service startups',
            'Funding service businesses: bootstrapping, angel investment, and VC',
            'Legal and regulatory considerations for service businesses',
            'Building and managing a service team for startup environments',
            'Scaling service operations: franchising, licensing, and expansion',
            'Digital platforms and app-based service business models',
          ],
          outcomes: [
            'Identify and evaluate service business opportunities',
            'Design a business model and value proposition for a service venture',
            'Understand funding options for service startups',
            'Plan the scaling and expansion of a service business',
            'Launch and manage a service entrepreneurship venture',
          ],
        },
      },
      {
        name: 'Global Services Management',
        level: 'advanced',
        focus: 'Global Operations',
        details: {
          description: 'An advanced course examining the management of service operations across global markets — covering cross-cultural service delivery, global expansion strategies, and managing multinational service firms.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Globalization and the international expansion of service firms',
            'Cross-cultural dimensions of service delivery (Hofstede model)',
            'Modes of international entry for service businesses',
            'Managing quality and consistency across global service operations',
            'Global service supply chains and vendor management',
            'Offshoring and outsourcing of service processes (BPO/KPO)',
            'Digital globalization: cross-border digital service businesses',
            'International trade in services: GATS and regulatory frameworks',
            'Managing culturally diverse service teams globally',
          ],
          outcomes: [
            'Develop international market entry strategies for service businesses',
            'Manage cross-cultural service delivery challenges effectively',
            'Ensure service quality and consistency across global operations',
            'Understand GATS and international regulatory frameworks for services',
            'Lead and manage diverse global service teams',
          ],
        },
      },
    ],
  },

  'software-development': {
    title: 'Software Development',
    subtitle: 'Programming & Web Development',
    category: 'Technology',
icon: <img src={MKCL} alt="MKCL" style={{ width: '600px', height: '150px', objectFit: 'contain' }} />,    color: '#2563eb',
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
    curriculumTable: [
      {
        name: 'Python Programming (Complete)',
        level: 'intermediate',
        focus: 'Python',
        details: {
          description: 'A comprehensive Python programming course covering core concepts to advanced topics including OOP, file handling, and database integration.',
          duration: '120 Hours',
          mode: 'Online & Offline',
          topics: [
            'Introduction to Python & Environment Setup',
            'Variables, Data Types & Operators',
            'Control Flow: Conditions & Loops',
            'Functions, Modules & Packages',
            'Object-Oriented Programming (OOP)',
            'File Handling & Exception Management',
            'Python with MySQL Database',
            'Libraries: NumPy, Pandas Basics',
          ],
          outcomes: [
            'Write clean, efficient Python programs',
            'Apply OOP principles in real projects',
            'Handle files and exceptions professionally',
            'Connect Python applications to databases',
            'Build foundational skills for AI/ML paths',
          ],
        },
      },
      {
        name: 'Java Programming (Complete)',
        level: 'intermediate',
        focus: 'Java',
        details: {
          description: 'Java is one of the most popular and trusted programming languages used by top companies worldwide. Learn Java step-by-step from fundamentals to advanced concepts through practical coding sessions.',
          duration: '120 Hours',
          mode: 'Online & Offline',
          topics: [
            'Introduction to Java & Environment Setup (NetBeans)',
            'Data Types, Variables, Literals and Coding',
            'Reading Values of Various Data Types',
            'Operations & Control Structures (If, Switch Case)',
            'Iteration (Looping) — for, while, do-while',
            'Break, Continue & Nested Loops',
            'Methods (Functions), Array Passing & Recursion',
            'Classes, Objects, References & Garbage Collection',
            'Method Overloading, Constructors & This Keyword',
            'Getters, Setters, Static Members & Packages',
            'Abstract Classes, Interfaces & Inheritance',
            'Final Keyword, Abstract Methods & Polymorphism',
            'Exception Handling',
            'Java Collection Frameworks (JCF)',
          ],
          outcomes: [
            'Understand Java fundamentals and build strong coding logic',
            'Apply OOP concepts: classes, objects, inheritance, polymorphism',
            'Write programs using loops, arrays, and recursion',
            'Handle exceptions and errors professionally',
            'Work with Java Collection Frameworks in real projects',
            'Build simple Java applications confidently',
          ],
        },
      },
      {
        name: 'Mobile App Development',
        level: 'foundational',
        focus: 'Android / Mobile',
        details: {
          description: 'Have you ever thought of creating your own mobile app? This course takes you from zero to building real Android applications using Android Studio and Java/Kotlin fundamentals.',
          duration: '120 Hours',
          mode: 'Online & Offline',
          topics: [
            'Introduction to Mobile Development & Android Studio Setup',
            'Android UI Design — Layouts, Views & Widgets',
            'Activities, Intents & Navigation',
            'Data Storage: SharedPreferences & SQLite',
            'RecyclerView & Adapters',
            'Networking & REST APIs',
            'Firebase Integration (Auth & Realtime Database)',
            'Publishing Apps to Google Play Store',
          ],
          outcomes: [
            'Design and build complete Android mobile applications',
            'Implement navigation, data storage, and networking',
            'Integrate Firebase for authentication and cloud data',
            'Deploy and publish apps to the Google Play Store',
            'Understand the full mobile app development lifecycle',
          ],
        },
      },
      {
        name: 'Advanced Java Programming and Web Development using Java',
        level: 'advanced',
        focus: 'Java Web Dev',
        details: {
          description: 'Code Beyond the Basics: Advanced Java for Aspiring Experts! This course covers multithreading, JDBC, Servlets, JSP, and enterprise-level Java web development.',
          duration: '120 Hours',
          mode: 'Online & Offline',
          topics: [
            'Multithreading & Concurrency in Java',
            'Java Collections Framework (Advanced)',
            'JDBC — Database Connectivity',
            'Servlets & HTTP Request/Response Lifecycle',
            'JSP (JavaServer Pages) & JSTL',
            'MVC Architecture Pattern',
            'Hibernate ORM Framework Basics',
            'RESTful Web Services with Java',
            'Spring Framework Introduction',
            'Deployment on Tomcat Server',
          ],
          outcomes: [
            'Build robust multi-threaded Java applications',
            'Connect Java applications to relational databases using JDBC',
            'Develop dynamic web applications using Servlets and JSP',
            'Apply MVC architecture to enterprise-level projects',
            'Deploy Java web apps on Tomcat server',
          ],
        },
      },
      {
        name: 'Fundamentals of PHP',
        level: 'intermediate',
        focus: 'Backend PHP',
        details: {
          description: 'This course provides an in-depth exploration of PHP, a widely-used server-side scripting language, covering everything from syntax basics to building dynamic web applications.',
          duration: '120 Hours',
          mode: 'Online & Offline',
          topics: [
            'PHP Syntax, Variables & Data Types',
            'Control Structures: Loops & Conditionals',
            'Functions, Arrays & Strings',
            'Form Handling & Validation',
            'File Handling & Sessions in PHP',
            'Connecting PHP with MySQL',
            'CRUD Operations (Create, Read, Update, Delete)',
            'Introduction to Object-Oriented PHP',
            'Error Handling & Debugging',
          ],
          outcomes: [
            'Write PHP scripts for server-side web development',
            'Handle forms, sessions, and file uploads',
            'Build dynamic web pages connected to MySQL databases',
            'Perform CRUD operations using PHP and MySQL',
            'Apply OOP principles in PHP development',
          ],
        },
      },
      {
        name: 'Python Fundamentals and Programming Basics',
        level: 'foundational',
        focus: 'Python Basics',
        details: {
          description: 'Get started with Python programming including syntax, variables, and problem-solving. This course provides not only an introduction to Python but a solid foundation to build on.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Introduction to Programming & Python Setup',
            'Variables, Data Types & Type Casting',
            'Operators & Expressions',
            'Conditional Statements (if, elif, else)',
            'Loops (for, while) & Iteration',
            'Functions & Scope',
            'Lists, Tuples, Dictionaries & Sets',
            'Basic String Manipulation',
            'Introduction to Modules',
          ],
          outcomes: [
            'Write and run basic Python programs confidently',
            'Use variables, control flow, and functions effectively',
            'Work with Python data structures like lists and dictionaries',
            'Understand programming logic and problem-solving with Python',
            'Prepare for advanced Python or AI/ML courses',
          ],
        },
      },
      {
        name: 'Intelligence with Python',
        level: 'advanced',
        focus: 'AI with Python',
        details: {
          description: 'Welcome to the DEEP Certificate in Advanced Python Programming! This course covers AI/ML foundations, NumPy, Pandas, data visualization, and building intelligent systems with Python.',
          duration: '120 Hours',
          mode: 'Online & Offline',
          topics: [
            'Advanced Python Concepts (Decorators, Generators, Comprehensions)',
            'NumPy for Numerical Computing',
            'Pandas for Data Manipulation & Analysis',
            'Matplotlib & Seaborn — Data Visualization',
            'Introduction to Machine Learning with Scikit-Learn',
            'Supervised & Unsupervised Learning Basics',
            'Model Evaluation & Optimization',
            'Natural Language Processing (NLP) Basics',
            'Python GUI with Tkinter',
            'Flask API Development',
          ],
          outcomes: [
            'Write advanced Python code using modern best practices',
            'Perform data analysis and visualization with NumPy and Pandas',
            'Build and evaluate basic ML models using Scikit-Learn',
            'Develop REST APIs using Flask',
            'Apply Python skills to real-world AI and data science projects',
          ],
        },
      },
      {
        name: 'Python GUI Development and MySQL',
        level: 'foundational',
        focus: 'Python GUI & DB',
        details: {
          description: 'Build interactive GUI applications and connect them with MySQL databases. This course covers Tkinter for GUI design and MySQL integration for data-driven Python apps.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Introduction to Tkinter & GUI Components',
            'Widgets: Labels, Buttons, Entry, Listbox, Combobox',
            'Layout Managers: Pack, Grid, Place',
            'Events & Event Binding',
            'MySQL Connector Setup in Python',
            'CRUD Operations through GUI',
            'Form Validation & Error Handling in GUI',
            'Building a Complete Mini Project (e.g., Student Management System)',
          ],
          outcomes: [
            'Design desktop GUI applications using Tkinter',
            'Connect Python GUI applications to MySQL databases',
            'Perform CRUD operations through a graphical interface',
            'Handle events and user input in GUI applications',
            'Build a functional mini-project combining GUI and database',
          ],
        },
      },
      {
        name: 'Foundations of Data Science and Artificial Intelligence',
        level: 'intermediate',
        focus: 'Data Science & AI',
        details: {
          description: 'Learn key concepts in data science and AI using Python for real-world problem solving. Covers statistical analysis, visualization, and introduction to machine learning.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Introduction to Data Science & AI',
            'Python for Data Science: NumPy & Pandas',
            'Exploratory Data Analysis (EDA)',
            'Data Visualization with Matplotlib & Seaborn',
            'Statistics for Data Science',
            'Introduction to Machine Learning',
            'Supervised Learning: Regression & Classification',
            'Model Evaluation Metrics',
            'Introduction to Neural Networks',
          ],
          outcomes: [
            'Perform data cleaning, exploration, and visualization',
            'Apply statistical concepts to real-world data problems',
            'Build and evaluate basic supervised ML models',
            'Understand the AI/ML development pipeline',
            'Prepare for advanced AI and deep learning courses',
          ],
        },
      },
      {
        name: 'Building Dynamic Applications with Flask and Django',
        level: 'advanced',
        focus: 'Python Web Frameworks',
        details: {
          description: 'Create scalable web applications using Python-based Flask and Django frameworks. Learn to build REST APIs, handle authentication, and deploy production-ready applications.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Introduction to Web Frameworks: Flask vs Django',
            'Flask Routing, Templates (Jinja2) & Static Files',
            'Flask Forms, Validation & CRUD with SQLAlchemy',
            'Flask REST API Development',
            'Django Project Structure & MVT Architecture',
            'Django Models, Views & Templates',
            'Django ORM & Admin Panel',
            'User Authentication & Authorization',
            'Deployment: Heroku / PythonAnywhere',
          ],
          outcomes: [
            'Build full-stack web applications with Flask and Django',
            'Design and consume RESTful APIs',
            'Manage databases using Flask-SQLAlchemy and Django ORM',
            'Implement user authentication and role-based access',
            'Deploy Python web applications to cloud platforms',
          ],
        },
      },
      {
        name: 'Introduction to Java Programming Fundamentals',
        level: 'foundational',
        focus: 'Java Intro',
        details: {
          description: 'Learn Java syntax, data types, and core programming concepts through hands-on coding exercises. The perfect starting point for anyone new to Java programming.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'History & Features of Java',
            'JDK Setup & First Java Program',
            'Data Types, Variables & Literals',
            'Operators: Arithmetic, Relational, Logical',
            'Control Flow: if-else, switch-case',
            'Loops: for, while, do-while',
            'Arrays & Strings Basics',
            'Introduction to Methods',
            'Basic Input/Output using Scanner',
          ],
          outcomes: [
            'Set up and run Java programs using JDK and IDE',
            'Use variables, data types, and operators correctly',
            'Write programs with control flow and loops',
            'Work with arrays and basic string manipulation',
            'Build a foundation for OOP and advanced Java courses',
          ],
        },
      },
      {
        name: 'Object-Oriented Data Structures in C++',
        level: 'intermediate',
        focus: 'OOP & DSA in C++',
        details: {
          description: 'Master OOP principles like inheritance and polymorphism, then apply them to implement modular and reusable data structures in C++.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Review of C++ OOP: Classes, Objects, Constructors',
            'Inheritance & Polymorphism in C++',
            'Templates & Generic Programming',
            'Linked Lists using OOP',
            'Stacks & Queues — OOP Implementation',
            'Trees: Binary Tree & BST with OOP',
            'Sorting & Searching Algorithms',
            'Introduction to STL (Standard Template Library)',
          ],
          outcomes: [
            'Apply OOP concepts to design reusable data structures',
            'Implement linked lists, stacks, queues, and trees in C++',
            'Use templates for generic programming',
            'Leverage STL containers and algorithms effectively',
            'Solve complex problems using efficient C++ code',
          ],
        },
      },
      {
        name: 'Advanced Java Programming',
        level: 'intermediate',
        focus: 'Advanced Java',
        details: {
          description: 'Explore multithreading, collections, and exception handling in Java. This intermediate course equips you with the skills needed for enterprise application development.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Multithreading & Thread Lifecycle',
            'Synchronization & Concurrent Collections',
            'Java Generics',
            'Java Collections: List, Set, Map, Queue',
            'Lambda Expressions & Functional Interfaces',
            'Stream API & Optional Class',
            'Exception Handling (Checked & Unchecked)',
            'Java I/O Streams & NIO',
            'Annotations & Reflection API',
          ],
          outcomes: [
            'Write efficient multi-threaded Java applications',
            'Use Java Collections Framework for data management',
            'Apply lambda expressions and Stream API for functional programming',
            'Handle exceptions professionally',
            'Use advanced Java features for enterprise development',
          ],
        },
      },
      {
        name: 'Web Development using Java Technologies',
        level: 'advanced',
        focus: 'Java Web',
        details: {
          description: 'Build dynamic and secure web applications using Java-based technologies including Servlets, JSP, and Spring MVC framework.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'HTTP Protocol & Web Architecture',
            'Servlets: Lifecycle, Request & Response',
            'Session Management & Cookies',
            'JavaServer Pages (JSP) & JSTL',
            'MVC Pattern with Java',
            'JDBC & Database Connectivity',
            'Introduction to Spring MVC',
            'RESTful Services with Java',
            'Deployment on Apache Tomcat',
          ],
          outcomes: [
            'Build server-side web applications using Servlets and JSP',
            'Implement MVC architecture in Java web projects',
            'Connect web applications to relational databases via JDBC',
            'Create RESTful APIs using Java',
            'Deploy Java web applications on Tomcat',
          ],
        },
      },
      {
        name: 'Fundamental Principles of Android Development',
        level: 'intermediate',
        focus: 'Android Fundamentals',
        details: {
          description: 'Understand Android architecture and begin building apps using Android Studio. This course covers the core components of Android development and UI design principles.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Android Architecture & Android Studio Setup',
            'Activities, Fragments & Lifecycle',
            'Layouts: LinearLayout, RelativeLayout, ConstraintLayout',
            'UI Components: TextView, Button, EditText, ImageView',
            'Intents (Explicit & Implicit)',
            'RecyclerView & Adapters',
            'Data Storage: SharedPreferences & Internal Storage',
            'Permissions & Manifest File',
            'Basic API Calls using Retrofit',
          ],
          outcomes: [
            'Understand the Android app lifecycle and project structure',
            'Design responsive Android UIs using layouts and components',
            'Navigate between screens using Intents',
            'Store and retrieve data using SharedPreferences',
            'Make basic API calls and display data dynamically',
          ],
        },
      },
      {
        name: 'Custom Android App Creation and Design',
        level: 'advanced',
        focus: 'Advanced Android',
        details: {
          description: 'Design and develop customized Android apps with intuitive UI and advanced features including Firebase, custom animations, and app publishing.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Custom Views & Canvas Drawing',
            'Material Design Components & Theming',
            'Animations: Property Animator & Transition API',
            'Firebase: Authentication, Firestore & Cloud Storage',
            'MVVM Architecture with ViewModel & LiveData',
            'Room Database (SQLite ORM)',
            'Push Notifications with FCM',
            'Performance Optimization & ProGuard',
            'Publishing to Google Play Store',
          ],
          outcomes: [
            'Build polished, production-ready Android applications',
            'Implement Firebase for authentication and cloud storage',
            'Apply MVVM architecture for scalable app design',
            'Add animations and custom UI components',
            'Publish apps to the Google Play Store professionally',
          ],
        },
      },
      {
        name: 'Foundations of Data Structures with C and C++',
        level: 'foundational',
        focus: 'DSA Foundations',
        details: {
          description: 'Learn essential data structures like arrays, stacks, queues, and linked lists using C and C++ with a focus on foundational problem-solving skills.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Introduction to Data Structures & Algorithms',
            'Arrays: 1D & 2D',
            'Strings in C/C++',
            'Pointers & Memory Management',
            'Structures & Unions',
            'Linked Lists: Singly, Doubly & Circular',
            'Stacks: Array & Linked List Implementation',
            'Queues: Simple, Circular & Priority Queue',
            'Recursion Basics',
          ],
          outcomes: [
            'Understand and implement fundamental data structures',
            'Use pointers and memory management in C/C++',
            'Solve problems using arrays, linked lists, stacks, and queues',
            'Apply recursion to algorithmic problem-solving',
            'Build a strong foundation for advanced DSA courses',
          ],
        },
      },
      {
        name: 'Advanced Data Structures with C and C++',
        level: 'advanced',
        focus: 'Advanced DSA',
        details: {
          description: 'Dive into trees, graphs, hashing, and advanced algorithms for competitive and professional software development using C and C++.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Trees: Binary Tree, BST, AVL Tree',
            'Heaps & Priority Queues',
            'Hashing & Hash Tables',
            'Graphs: Representation (Adjacency Matrix & List)',
            'Graph Traversals: BFS & DFS',
            'Shortest Path Algorithms: Dijkstra & Bellman-Ford',
            'Dynamic Programming Concepts',
            'Greedy Algorithms',
            'Sorting Algorithms: Merge, Quick, Heap Sort',
          ],
          outcomes: [
            'Implement and use trees, heaps, and hash tables efficiently',
            'Traverse and process graphs using BFS and DFS',
            'Apply shortest path and dynamic programming algorithms',
            'Analyze algorithm complexity (Big O notation)',
            'Solve competitive programming and interview problems',
          ],
        },
      },
      {
        name: 'Applications of Data Structures in C and C++',
        level: 'advanced',
        focus: 'DSA Applications',
        details: {
          description: 'Explore real-world applications of data structures in areas like databases, operating systems, networking, and software engineering using C and C++.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Expression Evaluation using Stacks',
            'Graph Applications: Spanning Trees (Prim & Kruskal)',
            'Searching Techniques: Linear, Binary, Interpolation',
            'Trie Data Structure for String Operations',
            'File Management using DSA',
            'Segment Trees & Fenwick Trees',
            'Memory Management: Free Lists & Garbage Collection',
            'Real-World Case Studies (OS Scheduling, Network Routing)',
          ],
          outcomes: [
            'Apply data structures to real-world software engineering problems',
            'Use tries and segment trees for efficient data querying',
            'Implement graph algorithms for networking applications',
            'Understand how OS and databases use data structures internally',
            'Tackle complex algorithmic challenges with confidence',
          ],
        },
      },
      {
        name: 'Basics of C Sharp (C#)',
        level: 'foundational',
        focus: 'C# Basics',
        details: {
          description: 'Learn C# syntax, data types, and object-oriented programming concepts with .NET. This foundational course prepares you for building Windows and web applications using C#.',
          duration: '60 Hours',
          mode: 'Online & Offline',
          topics: [
            'Introduction to C# and .NET Framework',
            'Variables, Data Types & Type Casting',
            'Operators & Control Statements',
            'Loops & Iteration in C#',
            'Methods & Parameters',
            'Arrays & Collections Basics',
            'Object-Oriented Programming: Classes & Objects',
            'Constructors, Properties & Access Modifiers',
            'Interfaces & Inheritance Basics',
            'Exception Handling in C#',
          ],
          outcomes: [
            'Write and run C# programs using Visual Studio',
            'Apply OOP principles: classes, objects, and inheritance',
            'Use control flow, loops, and methods effectively',
            'Handle exceptions and errors in C# programs',
            'Prepare for advanced C# and .NET development',
          ],
        },
      },
      {
        name: 'Mastery of Methods, Arrays, and Strings in C#',
        level: 'intermediate',
        focus: 'C# Methods & Arrays',
        details: {
          description: 'Learn how to manipulate arrays, strings, and methods effectively in C# to build robust applications. This course deepens your C# skills with practical coding exercises.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Advanced Methods: Overloading, Optional & Named Parameters',
            'Ref, Out & Params Keywords',
            '1D & 2D Arrays in C#',
            'Array Sorting & Searching',
            'String Methods & StringBuilder',
            'Regular Expressions in C#',
            'LINQ Basics (Language Integrated Query)',
            'Delegates & Anonymous Methods',
            'Lambda Expressions in C#',
          ],
          outcomes: [
            'Work with arrays, strings, and methods at an advanced level',
            'Use LINQ for powerful data querying in C#',
            'Apply delegates and lambda expressions in C# programs',
            'Manipulate strings and patterns using Regex',
            'Write cleaner, more expressive C# code',
          ],
        },
      },
      {
        name: 'Exploration of Collections and Data in C#',
        level: 'intermediate',
        focus: 'C# Collections',
        details: {
          description: 'Work with lists, dictionaries, and other collections for organizing and managing data efficiently in C# .NET applications.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'List<T>, Dictionary<K,V>, HashSet<T>',
            'Stack<T> & Queue<T> Collections',
            'SortedList, SortedDictionary & LinkedList',
            'IEnumerable & IEnumerator',
            'LINQ with Collections',
            'Generics in Depth',
            'Serialization: JSON & XML',
            'File I/O with Collections',
            'Memory Management & Garbage Collection in .NET',
          ],
          outcomes: [
            'Use generics and collection classes for flexible data management',
            'Query and manipulate data collections using LINQ',
            'Serialize and deserialize data in JSON and XML',
            'Apply efficient data storage patterns in C# applications',
            'Manage memory effectively using .NET best practices',
          ],
        },
      },
      {
        name: 'Advanced C Sharp (C#)',
        level: 'advanced',
        focus: 'Advanced C#',
        details: {
          description: 'Master delegates, events, LINQ, and asynchronous programming patterns to build enterprise-grade .NET applications.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Delegates, Events & Event Handlers',
            'Async & Await: Asynchronous Programming',
            'Task Parallel Library (TPL)',
            'Advanced LINQ: GroupBy, Join, SelectMany',
            'Reflection & Attributes',
            'Dependency Injection Principles',
            'Design Patterns: Singleton, Factory, Observer',
            'Entity Framework Basics (ORM)',
            'Building REST APIs with ASP.NET Core',
          ],
          outcomes: [
            'Write asynchronous C# applications using async/await',
            'Implement event-driven programming with delegates and events',
            'Apply SOLID principles and design patterns',
            'Use Entity Framework for database access',
            'Build REST APIs using ASP.NET Core',
          ],
        },
      },
      {
        name: 'Foundations of HTML & Web Development',
        level: 'foundational',
        focus: 'HTML Foundations',
        details: {
          description: 'Build web pages using HTML5 with proper structure, formatting, and accessibility best practices. This course provides the essential foundation for all web development paths.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Introduction to the Web & How Browsers Work',
            'HTML5 Document Structure & Semantic Tags',
            'Text Formatting: Headings, Paragraphs, Lists',
            'Links, Images & Multimedia Embedding',
            'HTML Tables & Forms',
            'Input Types & Form Validation (HTML5)',
            'HTML5 New Elements: Article, Section, Nav, Header',
            'Accessibility Best Practices (ARIA)',
            'Introduction to Domain & Hosting Concepts',
          ],
          outcomes: [
            'Create well-structured, semantic HTML5 web pages',
            'Build forms with various input types and validation',
            'Embed images, audio, and video in web pages',
            'Follow accessibility standards in web development',
            'Prepare for CSS and JavaScript courses',
          ],
        },
      },
      {
        name: 'Introduction to CSS & Web Styling Techniques',
        level: 'foundational',
        focus: 'CSS Basics',
        details: {
          description: 'Style web content using CSS for layouts, colors, fonts, and basic animations. This course transforms plain HTML into visually appealing web pages.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'CSS Syntax: Selectors, Properties & Values',
            'Colors, Backgrounds & Borders',
            'Typography: Fonts, Text Styling & Google Fonts',
            'Box Model: Margin, Padding, Border & Content',
            'Display & Positioning: Static, Relative, Absolute, Fixed',
            'Flexbox Layout Basics',
            'CSS Grid Basics',
            'Transitions & Basic Animations',
            'Responsive Design with Media Queries (Intro)',
          ],
          outcomes: [
            'Style HTML pages with colors, fonts, and backgrounds',
            'Apply box model and positioning correctly',
            'Use Flexbox for flexible layouts',
            'Add CSS transitions and simple animations',
            'Create basic responsive designs using media queries',
          ],
        },
      },
      {
        name: 'Advanced HTML and CSS',
        level: 'intermediate',
        focus: 'Advanced Frontend',
        details: {
          description: 'Learn flexbox, grid, animations, and advanced selectors for professional front-end web development. Build modern, responsive web pages with confidence.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Advanced CSS Selectors & Pseudo-classes',
            'Advanced Flexbox Patterns',
            'CSS Grid: Complex Layouts & Grid Areas',
            'CSS Variables (Custom Properties)',
            'Advanced Animations & Keyframes',
            'CSS Transforms: 2D & 3D Effects',
            'Responsive Web Design: Mobile-First Approach',
            'CSS Preprocessors: Introduction to SASS/SCSS',
            'HTML5 APIs: Canvas, Geolocation, Local Storage',
          ],
          outcomes: [
            'Build complex, responsive layouts using Flexbox and CSS Grid',
            'Create advanced CSS animations and transitions',
            'Implement mobile-first responsive design strategies',
            'Use SASS/SCSS for efficient CSS development',
            'Leverage HTML5 APIs for interactive web experiences',
          ],
        },
      },
      {
        name: 'Advanced CSS & Front-End Design',
        level: 'advanced',
        focus: 'Advanced CSS',
        details: {
          description: 'Build responsive, interactive front-end designs using advanced CSS techniques, JavaScript integration, and modern design systems.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'CSS Architecture: BEM, OOCSS, SMACSS',
            'Advanced SASS: Mixins, Functions, Maps',
            'CSS-in-JS Overview',
            'Bootstrap 5 Framework',
            'Tailwind CSS Utility-First Design',
            'CSS Scroll Animations & Parallax',
            'Dark Mode Implementation',
            'Web Performance: Critical CSS & Lazy Loading',
            'Cross-browser Compatibility & Debugging',
          ],
          outcomes: [
            'Apply CSS architecture patterns for maintainable stylesheets',
            'Use Bootstrap and Tailwind CSS for rapid UI development',
            'Build performant, accessible, and responsive UIs',
            'Implement advanced animations and scroll effects',
            'Debug cross-browser CSS issues effectively',
          ],
        },
      },
      {
        name: 'Advanced JavaScript & Web Application Development',
        level: 'advanced',
        focus: 'JavaScript & Web Apps',
        details: {
          description: 'Create dynamic, interactive web applications using JavaScript, AJAX, and modern ES6+ features. This course bridges the gap between front-end design and full-stack web development.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'JavaScript ES6+: let/const, Arrow Functions, Destructuring',
            'DOM Manipulation & Events',
            'Asynchronous JS: Callbacks, Promises, Async/Await',
            'Fetch API & AJAX Requests',
            'JavaScript Modules (ES Modules)',
            'Local Storage & Session Storage',
            'Introduction to React.js',
            'JSON & REST API Integration',
            'Error Handling & Debugging in JS',
          ],
          outcomes: [
            'Write modern JavaScript using ES6+ features',
            'Manipulate the DOM and handle user events dynamically',
            'Fetch and display data from APIs asynchronously',
            'Build single-page application basics with React',
            'Debug JavaScript applications effectively',
          ],
        },
      },
      {
        name: 'Database Management and SQL Mastery',
        level: 'foundational',
        focus: 'SQL & Databases',
        details: {
          description: 'Understand relational databases and master SQL for data querying, manipulation, and management. Covers MySQL fundamentals with practical exercises.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Introduction to Databases & RDBMS',
            'SQL Basics: SELECT, INSERT, UPDATE, DELETE',
            'Filtering with WHERE, ORDER BY, GROUP BY',
            'Joins: INNER, LEFT, RIGHT, FULL',
            'Subqueries & Nested Queries',
            'Database Design & Entity-Relationship (ER) Diagrams',
            'Normalization: 1NF, 2NF, 3NF',
            'Indexes & Query Optimization Basics',
            'MySQL Workbench: GUI Database Management',
          ],
          outcomes: [
            'Write and execute SQL queries for data retrieval and manipulation',
            'Design normalized relational databases',
            'Use JOINs and subqueries for complex data operations',
            'Optimize queries using indexes',
            'Manage MySQL databases using MySQL Workbench',
          ],
        },
      },
      {
        name: 'Advanced Database Management and SQL Mastery',
        level: 'intermediate',
        focus: 'Advanced SQL',
        details: {
          description: 'Work with stored procedures, triggers, indexing, and query optimization for professional-level database management.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Stored Procedures & Functions in MySQL',
            'Triggers: BEFORE & AFTER Triggers',
            'Views: Creating & Managing Database Views',
            'Advanced Indexing Strategies',
            'Query Optimization & EXPLAIN Plan',
            'Transactions & ACID Properties',
            'User Management & Privileges in MySQL',
            'Backup & Recovery Strategies',
            'Introduction to NoSQL Concepts',
          ],
          outcomes: [
            'Create and use stored procedures, triggers, and views',
            'Optimize query performance using advanced indexing',
            'Manage database transactions and ensure data integrity',
            'Handle user roles, privileges, and database security',
            'Perform database backup and recovery operations',
          ],
        },
      },
      {
        name: 'Advanced Database Management and Application',
        level: 'intermediate',
        focus: 'DB Applications',
        details: {
          description: 'Learn to handle transactions, concurrency control, and recovery in production database environments. Apply advanced concepts to real-world application databases.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Transaction Management & Locking',
            'Concurrency Control: Pessimistic & Optimistic',
            'Database Recovery Techniques',
            'Distributed Databases Introduction',
            'Database Application Development with PHP/Python',
            'Connection Pooling & Performance Tuning',
            'MongoDB Basics (NoSQL)',
            'Data Warehousing Concepts',
            'Database Security & Encryption',
          ],
          outcomes: [
            'Manage database transactions and concurrency in production',
            'Implement database recovery and backup strategies',
            'Connect application code (PHP/Python) to databases efficiently',
            'Understand NoSQL databases and when to use them',
            'Apply database security practices for production systems',
          ],
        },
      },
      {
        name: 'Fundamentals of PHP',
        level: 'foundational',
        focus: 'PHP Scripting',
        details: {
          description: 'Get started with PHP scripting for backend development, form handling, and database integration. This foundational course covers everything needed to start building server-side web applications.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Introduction to PHP & Server-Side Development',
            'PHP Syntax, Variables & Data Types',
            'Control Structures & Loops',
            'Functions & Arrays in PHP',
            'Form Handling & PHP Superglobals',
            'Sessions & Cookies',
            'File Handling in PHP',
            'PHP with MySQL (MySQLi)',
            'Basic OOP in PHP',
          ],
          outcomes: [
            'Write PHP scripts for server-side web development',
            'Handle HTML forms and user input securely',
            'Manage sessions and cookies for state management',
            'Connect PHP to MySQL for data storage and retrieval',
            'Apply OOP principles in PHP programming',
          ],
        },
      },
      {
        name: 'Foundations of MySQL and PHP',
        level: 'intermediate',
        focus: 'MySQL & PHP Integration',
        details: {
          description: 'Connect PHP with MySQL to build basic data-driven web applications. Learn to create dynamic websites that store and retrieve data from MySQL databases.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'MySQL Database Design & Setup',
            'PHP MySQLi vs PDO: Comparison & Usage',
            'CRUD Operations: Create, Read, Update, Delete',
            'Prepared Statements & Parameterized Queries',
            'SQL Injection Prevention',
            'Dynamic Page Generation with PHP & MySQL',
            'Pagination & Search Functionality',
            'User Authentication: Login & Registration System',
            'Mini Project: Dynamic Blog or Student Management',
          ],
          outcomes: [
            'Build data-driven web applications with PHP and MySQL',
            'Use PDO prepared statements for secure database operations',
            'Implement user login and registration with session management',
            'Prevent SQL injection and other security vulnerabilities',
            'Create a complete dynamic web application as a portfolio project',
          ],
        },
      },
      {
        name: 'Mastering HTML, CSS, and PHP for Dynamic Websites',
        level: 'intermediate',
        focus: 'Full Frontend + PHP',
        details: {
          description: 'Integrate frontend and backend technologies to create responsive, dynamic web applications. Combines HTML, CSS layout with PHP backend logic.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'HTML5 & CSS3 Review for Dynamic Sites',
            'Responsive Design with CSS Grid & Flexbox',
            'PHP Template Systems',
            'Dynamic Navigation & Content Loading',
            'PHP Contact Forms with Email Integration',
            'Image Upload & Management with PHP',
            'CMS Concepts: Building a Mini CMS',
            'API Integration: Consuming External APIs with PHP',
            'Deployment: Uploading a Live Website',
          ],
          outcomes: [
            'Build fully integrated dynamic websites with HTML, CSS, and PHP',
            'Implement responsive designs connected to PHP backends',
            'Handle file uploads and email integration in PHP',
            'Consume external APIs and display data dynamically',
            'Deploy a complete website to a live hosting environment',
          ],
        },
      },
      {
        name: 'Web Development with Advanced PHP Concepts',
        level: 'advanced',
        focus: 'Advanced PHP',
        details: {
          description: 'Learn object-oriented PHP, MVC frameworks, and security for professional-grade backend web development.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Advanced OOP in PHP: Interfaces, Traits, Abstract Classes',
            'MVC Architecture in PHP',
            'PHP Namespaces & Autoloading (Composer)',
            'Laravel Framework Basics',
            'Routing, Controllers & Blade Templates in Laravel',
            'Eloquent ORM & Database Migrations',
            'RESTful API Development with Laravel',
            'JWT Authentication & Middleware',
            'PHP Security: XSS, CSRF, Input Sanitization',
          ],
          outcomes: [
            'Apply advanced OOP principles in professional PHP development',
            'Build applications using MVC architecture and Laravel',
            'Develop secure RESTful APIs with JWT authentication',
            'Use Composer and Eloquent ORM for modern PHP projects',
            'Secure PHP applications against common web vulnerabilities',
          ],
        },
      },
      {
        name: 'Basics of PHP',
        level: 'foundational',
        focus: 'PHP Entry Level',
        details: {
          description: 'Start with PHP scripting, form handling, and simple backend web development. Ideal for absolute beginners stepping into server-side programming.',
          duration: '60 Hours',
          mode: 'Online & Offline',
          topics: [
            'What is PHP & Server-Side Scripting',
            'PHP Installation: XAMPP/WAMP Setup',
            'PHP Syntax & First Script',
            'Variables, Constants & Data Types',
            'Conditional Statements & Loops',
            'Functions & Scope in PHP',
            'String Functions & Array Functions',
            'HTML Forms & PHP Form Processing',
            'Introduction to PHP & MySQL',
          ],
          outcomes: [
            'Install and set up a local PHP development environment',
            'Write basic PHP scripts and process HTML forms',
            'Use built-in PHP functions for strings and arrays',
            'Understand server-side scripting concepts',
            'Connect a PHP page to a MySQL database for basic operations',
          ],
        },
      },
      {
        name: 'Basics of C Sharp (C#)',
        level: 'foundational',
        focus: 'C# Fundamentals',
        details: {
          description: 'Learn C# syntax, data types, and object-oriented programming basics for .NET development. This course builds the foundation for Windows and web application development with C#.',
          duration: '60 Hours',
          mode: 'Online & Offline',
          topics: [
            'Introduction to C# and Visual Studio',
            'Data Types, Variables & Constants',
            'Operators & Expressions',
            'Control Flow: if, else, switch',
            'Loops: for, foreach, while, do-while',
            'Arrays & Strings in C#',
            'Methods: Declaration, Parameters & Return Types',
            'OOP Basics: Classes, Objects & Constructors',
            'Encapsulation & Access Modifiers',
          ],
          outcomes: [
            'Write and execute C# programs in Visual Studio',
            'Apply control flow and loops to solve programming problems',
            'Work with arrays and strings in C#',
            'Create classes and objects using OOP principles',
            'Build a foundation for .NET application development',
          ],
        },
      },
      {
        name: 'Basics of Data Structures using C and C++',
        level: 'foundational',
        focus: 'C/C++ DSA Basics',
        details: {
          description: 'Understand arrays, stacks, queues, and linked lists using C/C++ basics. This course provides the theoretical and practical foundation for data structures.',
          duration: '60 Hours',
          mode: 'Online & Offline',
          topics: [
            'Introduction to C/C++ Programming Review',
            'Pointers & Dynamic Memory Allocation',
            'Arrays: Operations & Applications',
            'Strings in C/C++',
            'Structures & Self-Referential Structures',
            'Linked Lists: Singly & Doubly',
            'Stacks: Push, Pop & Applications',
            'Queues: Enqueue, Dequeue & Circular Queue',
            'Introduction to Recursion',
          ],
          outcomes: [
            'Use pointers and dynamic memory effectively in C/C++',
            'Implement linked lists, stacks, and queues from scratch',
            'Solve problems using fundamental data structures',
            'Apply recursion to basic algorithmic challenges',
            'Prepare for advanced data structures and algorithms courses',
          ],
        },
      },
      {
        name: 'Advanced Data Structures using C++',
        level: 'advanced',
        focus: 'Advanced C++ DSA',
        details: {
          description: 'Implement trees, graphs, hashing, and efficient algorithms in C++. This course prepares you for competitive programming and technical interviews.',
          duration: '60 Hours',
          mode: 'Online & Offline',
          topics: [
            'Binary Trees, BST & AVL Trees',
            'Heaps & Priority Queues in C++',
            'Hashing: Hash Functions & Collision Resolution',
            'Graph Representation: Adjacency Matrix & List',
            'BFS, DFS & Their Applications',
            'Minimum Spanning Tree: Kruskal & Prim',
            'Dynamic Programming: Memoization & Tabulation',
            'Sorting Algorithms Analysis',
            'STL: map, set, unordered_map, priority_queue',
          ],
          outcomes: [
            'Implement and use trees, heaps, and hash tables in C++',
            'Traverse and process graphs using BFS and DFS',
            'Solve dynamic programming problems effectively',
            'Use STL containers for efficient data management',
            'Crack technical interviews and competitive programming challenges',
          ],
        },
      },
      {
        name: 'Basics of DBMS',
        level: 'foundational',
        focus: 'Database Fundamentals',
        details: {
          description: 'Learn database fundamentals, relational models, and basic SQL for data management. This course provides a solid understanding of how modern databases work.',
          duration: '60 Hours',
          mode: 'Online & Offline',
          topics: [
            'Introduction to Database Systems & DBMS',
            'File System vs Database System',
            'Data Models: Hierarchical, Network & Relational',
            'Entity-Relationship (ER) Model',
            'Relational Model: Tables, Keys & Constraints',
            'SQL Basics: DDL, DML, DCL Commands',
            'Normalization: 1NF, 2NF, 3NF, BCNF',
            'Transaction Management & ACID Properties',
            'Introduction to MySQL Workbench',
          ],
          outcomes: [
            'Understand the fundamentals of database management systems',
            'Create ER diagrams for database design',
            'Write basic SQL queries for DDL and DML operations',
            'Apply normalization to design efficient relational databases',
            'Manage transactions and understand ACID properties',
          ],
        },
      },
      {
        name: 'Advanced DBMS Concepts',
        level: 'advanced',
        focus: 'Advanced Database',
        details: {
          description: 'Study transactions, indexing, normalization, and database optimization techniques used in production-level database systems.',
          duration: '60 Hours',
          mode: 'Online & Offline',
          topics: [
            'Advanced Normalization & Denormalization',
            'Indexing: B-Trees, Hash Indexes, Full-Text',
            'Query Optimization & Execution Plans',
            'Concurrency Control & Locking Mechanisms',
            'Database Recovery: Log-Based & Shadow Paging',
            'Distributed Databases & CAP Theorem',
            'NoSQL Databases: MongoDB Basics',
            'Data Warehousing & OLAP',
            'Database Security & Authorization',
          ],
          outcomes: [
            'Design highly optimized and normalized database schemas',
            'Implement advanced indexing for query performance',
            'Manage concurrency and recovery in production databases',
            'Understand distributed databases and NoSQL concepts',
            'Apply data warehousing concepts for analytics workloads',
          ],
        },
      },
      {
        name: 'Advanced Concepts of C#',
        level: 'advanced',
        focus: 'C# Advanced .NET',
        details: {
          description: 'Work with collections, LINQ, delegates, and asynchronous patterns to build enterprise-level .NET applications.',
          duration: '60 Hours',
          mode: 'Online & Offline',
          topics: [
            'Advanced LINQ: GroupBy, Join, Aggregate',
            'Delegates, Events & Multicast Delegates',
            'Async/Await & Task Parallel Library',
            'Generics & Constraints',
            'Reflection & Dynamic Programming',
            'Dependency Injection & IoC Containers',
            'Entity Framework Core',
            'ASP.NET Core MVC Basics',
            'Unit Testing with xUnit',
          ],
          outcomes: [
            'Build enterprise .NET applications with advanced C# features',
            'Use LINQ for complex data queries and transformations',
            'Implement asynchronous patterns for high-performance apps',
            'Apply dependency injection for testable code',
            'Work with Entity Framework Core for database access',
          ],
        },
      },
      {
        name: 'Advanced HTML and CSS',
        level: 'advanced',
        focus: 'Advanced Web Design',
        details: {
          description: 'Build responsive, interactive front-end designs using advanced CSS and HTML5 techniques for production-ready websites.',
          duration: '60 Hours',
          mode: 'Online & Offline',
          topics: [
            'HTML5 Semantic Elements & Accessibility (ARIA)',
            'Advanced CSS Grid & Flexbox Patterns',
            'CSS Custom Properties & Design Tokens',
            'Advanced Animations & Keyframes',
            'SASS/SCSS: Variables, Mixins & Functions',
            'Bootstrap 5 & Tailwind CSS',
            'Responsive Design: Mobile-First Strategy',
            'Web Performance Optimization',
            'Cross-Browser Testing & Debugging',
          ],
          outcomes: [
            'Build accessible, semantic HTML5 pages',
            'Create complex responsive layouts with Grid and Flexbox',
            'Use SASS and utility-first CSS frameworks efficiently',
            'Optimize web pages for performance and SEO',
            'Ensure cross-browser compatibility in production sites',
          ],
        },
      },
      {
        name: 'Java Programming Essentials',
        level: 'foundational',
        focus: 'Java Essentials',
        details: {
          description: 'Learn core Java concepts including syntax, loops, and basic object-oriented programming to build a strong Java foundation.',
          duration: '60 Hours',
          mode: 'Online & Offline',
          topics: [
            'Java Setup & First Program',
            'Data Types, Variables & Operators',
            'Control Flow: if-else, switch',
            'Loops: for, while, do-while, for-each',
            'Methods & Parameters',
            'Arrays: 1D & 2D',
            'String Handling in Java',
            'OOP Basics: Classes & Objects',
            'Constructors & Access Modifiers',
          ],
          outcomes: [
            'Write and run fundamental Java programs',
            'Use control flow, loops, and methods effectively',
            'Manage arrays and strings in Java',
            'Create classes and objects using OOP principles',
            'Prepare for intermediate and advanced Java programming',
          ],
        },
      },
      {
        name: 'Python and MYSQL Fundamentals',
        level: 'foundational',
        focus: 'Python & MySQL',
        details: {
          description: 'Understand Python scripting and use MySQL for database operations. This course covers database connectivity and CRUD operations using Python.',
          duration: '60 Hours',
          mode: 'Online & Offline',
          topics: [
            'Python Basics Review: Variables, Loops, Functions',
            'Introduction to MySQL & SQL Queries',
            'MySQL Connector for Python (mysql-connector-python)',
            'Connecting Python to MySQL Database',
            'CRUD Operations: Insert, Select, Update, Delete',
            'Parameterized Queries & SQL Injection Prevention',
            'Fetching Results: fetchone(), fetchall()',
            'Error Handling in Database Operations',
            'Mini Project: Python CRUD Application',
          ],
          outcomes: [
            'Connect Python applications to MySQL databases',
            'Perform CRUD operations programmatically using Python',
            'Use parameterized queries to prevent SQL injection',
            'Handle database errors and exceptions gracefully',
            'Build a mini Python application with database integration',
          ],
        },
      },
      {
        name: 'C and C++ Programming',
        level: 'foundational',
        focus: 'C/C++ Basics',
        details: {
          description: 'Learn C and C++ fundamentals including syntax, pointers, and object-oriented programming concepts for systems and application development.',
          duration: '60 Hours',
          mode: 'Online & Offline',
          topics: [
            'Introduction to C Programming & Setup',
            'Variables, Data Types & Operators in C',
            'Control Flow & Loops in C',
            'Functions, Recursion & Scope',
            'Arrays, Strings & Pointers',
            'Structures & Unions',
            'Dynamic Memory Allocation (malloc, calloc, free)',
            'Introduction to C++: Classes & Objects',
            'OOP in C++: Inheritance, Polymorphism',
            'File Handling in C/C++',
          ],
          outcomes: [
            'Write C programs using variables, control flow, and functions',
            'Use pointers and dynamic memory allocation in C',
            'Apply OOP concepts in C++ programming',
            'Work with file I/O in C and C++',
            'Build a strong foundation for systems programming and DSA',
          ],
        },
      },
      {
        name: 'C & C++ Programming and Java Programming Essentials',
        level: 'foundational',
        focus: 'C/C++ & Java',
        details: {
          description: 'A combined foundational course covering C, C++, and Java programming essentials — ideal for students who want to learn multiple programming languages simultaneously.',
          duration: '60 Hours',
          mode: 'Online & Offline',
          topics: [
            'C Programming: Variables, Control Flow, Functions',
            'C Pointers & Memory Management',
            'C++ OOP: Classes, Objects, Inheritance',
            'Standard Template Library (STL) Intro',
            'Java Syntax & Data Types',
            'Java OOP: Classes, Interfaces & Inheritance',
            'Java Arrays & String Handling',
            'Exception Handling in Java',
            'Comparison of C, C++, and Java',
          ],
          outcomes: [
            'Write programs in C, C++, and Java',
            'Compare language features and use cases for each language',
            'Apply OOP principles across all three languages',
            'Handle memory manually in C/C++ and automatically in Java',
            'Choose the right language for different programming scenarios',
          ],
        },
      },
      {
        name: 'Practical Implementation in Java',
        level: 'advanced',
        focus: 'Java Practice',
        details: {
          description: 'Apply Java skills to real-world projects including GUI development, file I/O, network programming, and database-driven applications.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Java Swing: GUI Application Development',
            'Java File I/O & Serialization',
            'Network Programming: Sockets & HTTP',
            'JDBC: Database Connectivity & ORM',
            'Design Patterns in Java: Singleton, Factory, Strategy',
            'Java Testing with JUnit',
            'Building a Complete Desktop Application',
            'JavaFX Introduction',
            'Code Review & Refactoring Best Practices',
          ],
          outcomes: [
            'Build Java GUI applications using Swing or JavaFX',
            'Implement networking and file I/O in Java programs',
            'Connect Java applications to databases using JDBC',
            'Apply design patterns to build scalable Java software',
            'Write unit tests and perform code reviews in Java',
          ],
        },
      },
    ],
  },

  'soft-skills': {
    title: 'Soft Skills',
    subtitle: 'Communication & Personal Development',
    category: 'Skills',
icon: <img src={MKCL} alt="MKCL" style={{ width: '600px', height: '150px', objectFit: 'contain' }} />,    color: '#2563eb',
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
    // In 'soft-skills':
    curriculumTable: [
      {
        name: 'Soft Skills',
        level: 'foundational',
        focus: 'Self-Management, Emotional Intelligence & Personal Effectiveness',
        details: {
          description:
            'This module builds the core soft skills that determine 85% of career success. Going beyond technical knowledge, it develops self-awareness, emotional intelligence, interpersonal relationships, and personal effectiveness through work-centric, real-life exercises. The curriculum is framed to globally recognized standards and is government certified. Duration: 120 Hours | Assessment: 100 Marks (Final Exam: 30, CCE: 70).',
          duration: '120 Hours (Part of 3-Program Diploma Track)',
          mode: 'Online & Offline | Work-Centric Learning Methodology',
          topics: [
            'Psychology of Success — mindset, habits, and the success formula',
            'Self-Awareness and Self-Acceptance — understanding your strengths and values',
            'Self-Management — discipline, responsibility, and personal accountability',
            'Interpersonal Relationships — building trust and healthy professional relationships',
            'Collaboration and Cooperation — working effectively in teams',
            'Time Management — prioritization, planning, and beating procrastination',
            'SMART Goal Setting — specific, measurable, achievable, relevant, time-bound goals',
            'Decision Making — frameworks for making sound personal and professional decisions',
            'Problem Solving and Conflict Management — resolving workplace and personal conflicts',
            'Emotional Intelligence — recognizing and managing emotions in self and others',
            'Positive Health — mental and physical well-being for sustained performance',
            'Ethics and Values — professional integrity and moral decision-making',
            'Being Sensitive Towards Others, Society, and Nature — empathy and social responsibility',
          ],
          outcomes: [
            'Develop a success mindset and strong personal accountability',
            'Build and maintain healthy interpersonal and professional relationships',
            'Manage time, set SMART goals, and make effective decisions',
            'Apply emotional intelligence in workplace and personal interactions',
            'Resolve conflicts constructively and collaborate effectively in teams',
            'Demonstrate professional ethics, empathy, and social responsibility',
            'Achieve job-readiness through holistic personal development',
          ],
        },
      },

      {
        name: 'Communication Skills',
        level: 'intermediate',
        focus: 'Verbal, Non-Verbal, Written & Digital Communication',
        details: {
          description:
            'Effective communication is the cornerstone of professional success. This module covers the complete communication skill set — from active listening and non-verbal cues to public speaking, email writing, and digital communication. The work-centric approach ensures learners practice communication in realistic professional scenarios, building both confidence and competence.',
          duration: '120 Hours (Part of 3-Program Diploma Track)',
          mode: 'Online & Offline | Role-Plays, Group Discussions & Presentations',
          topics: [
            'Effective Communication — principles, barriers, and clarity in expression',
            'Listening Skills — active listening, empathetic listening, and listening to understand',
            'Non-Verbal Communication — body language, gestures, facial expressions, and eye contact',
            'Interpersonal Communication — one-on-one communication in professional contexts',
            'Communication within a Group — meetings, discussions, and group dynamics',
            'Social Skills and Diversity — communicating across cultures and diverse teams',
            'Presentations — planning, designing, and delivering impactful presentations',
            'Written Communication — professional writing for business contexts',
            'Email Communication — structure, tone, and etiquette in professional emails',
            'Technology-Mediated Communication — video calls, messaging, virtual collaboration',
            'Visual Communication — using charts, infographics, and visuals to communicate ideas',
            'Mass Communication — understanding media, public messaging, and digital platforms',
            'Public Speaking — overcoming fear, structuring speeches, and engaging audiences',
          ],
          outcomes: [
            'Communicate clearly and confidently in verbal and written forms',
            'Apply active listening skills to improve understanding and relationships',
            'Use non-verbal communication effectively to reinforce messages',
            'Write professional emails, reports, and business documents',
            'Deliver structured, engaging presentations to diverse audiences',
            'Communicate effectively across cultures, teams, and digital platforms',
            'Speak confidently in public, group discussions, and meetings',
          ],
        },
      },

      {
        name: 'Personal Effectiveness Skills',
        level: 'intermediate',
        focus: 'Critical Thinking, Confidence, Grooming & Career Readiness',
        details: {
          description:
            'This module develops the personal effectiveness and career-readiness skills that set professionals apart. Covering critical thinking, creativity, confidence, grooming, resume writing, and interview preparation, it prepares learners to present themselves powerfully in competitive job markets and professional environments. The module is part of the government-certified 3-program diploma track.',
          duration: '120 Hours (Part of 3-Program Diploma Track)',
          mode: 'Online & Offline | Mock Interviews, Group Activities & Case Studies',
          topics: [
            'Critical Thinking — analysing information, evaluating arguments, and sound reasoning',
            'Scientific Attitude — curiosity, evidence-based thinking, and rational inquiry',
            'Being Flexible — adaptability, open-mindedness, and thriving in change',
            'Being Confident — building self-belief and projecting confidence professionally',
            'Being Effective — personal productivity, efficiency, and goal achievement',
            'Being Creative and Innovative — design thinking, brainstorming, and idea generation',
            'Art Appreciation — developing aesthetic sense and creative perspective',
            'Grooming — professional appearance, personal hygiene, and workplace etiquette',
            'Resume Writing — crafting an impactful CV and cover letter for job applications',
            'Interview Preparation and Appearing for an Interview — common questions, mock interviews, and body language',
            'Negotiation Skills — win-win negotiation strategies for professional and personal situations',
            'Service Orientation — customer-first mindset and professional service attitude',
            'Quality Orientation and Customer Delight — standards of excellence and exceeding expectations',
          ],
          outcomes: [
            'Apply critical thinking and scientific reasoning to professional challenges',
            'Build confidence, adaptability, and a creative mindset for the workplace',
            'Present a polished professional image through grooming and etiquette',
            'Write a compelling resume and cover letter for job applications',
            'Prepare for and succeed in job interviews and competitive exam interviews',
            'Negotiate effectively and adopt a service and quality orientation',
            'Complete the 3-program track to receive an official Government Diploma Certificate',
          ],
        },
      },
    ],
  },

  'ai-other-programs': {
    title: 'AI and Other Programs',
    subtitle: 'Artificial Intelligence & Emerging Tech',
    category: 'Technology',
icon: <img src={MKCL} alt="MKCL" style={{ width: '600px', height: '150px', objectFit: 'contain' }} />,    color: '#2563eb',
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
    curriculumTable: [
      {
        name: 'AI-ML Basics 2025',
        level: 'foundational',
        focus: 'Artificial Intelligence',
        details: {
          description: 'A thorough exploration of AI and ML concepts covering historical context, intelligence concepts, and functioning of AI models. Designed for individuals of all levels.',
          duration: '60 Hours',
          mode: 'Online & Offline | Learn at ALC or Learn Online',
          topics: [
            'Introduction to Artificial Intelligence and Machine Learning',
            'Historical context and evolution of AI',
            'Fundamentals of AI — intelligence concepts and types',
            'AI and the Society — ethical and social implications',
            'Fields of AI — computer vision, NLP, robotics',
            'AI tools for students and everyday use',
            'Foundations of Machine Learning — supervised, unsupervised learning',
            'What is Data and Data Science?',
            'AI ML Case Studies — Google, YouTube, Uber, Amazon, Apple, Netflix',
            'Government Initiatives and Programs in AI and ML',
            'New Age AI Careers and opportunities',
          ],
          outcomes: [
            'Understand AI and ML foundational concepts and history',
            'Identify real-world applications of AI in major companies',
            'Explain machine learning types and data science basics',
            'Analyse AI tools and their integration into daily work',
            'Explore AI career prospects and government initiatives',
          ],
        },
      },
      {
        name: 'Machine Learning (ML)',
        level: 'intermediate',
        focus: 'ML Algorithms',
        details: {
          description: 'A comprehensive machine learning course covering supervised, unsupervised, and reinforcement learning algorithms with hands-on Python implementation.',
          duration: '60 Hours',
          mode: 'Online & Offline',
          topics: [
            'Introduction to Machine Learning and its types',
            'Supervised Learning: regression and classification algorithms',
            'Linear Regression, Logistic Regression, Decision Trees',
            'Support Vector Machines (SVM) and K-Nearest Neighbors',
            'Unsupervised Learning: clustering and dimensionality reduction',
            'K-Means Clustering and Principal Component Analysis (PCA)',
            'Model evaluation: accuracy, precision, recall, F1-score',
            'Overfitting, underfitting and cross-validation',
            'Feature engineering and data preprocessing',
            'Introduction to Reinforcement Learning concepts',
          ],
          outcomes: [
            'Implement supervised and unsupervised ML algorithms in Python',
            'Evaluate and optimize machine learning models',
            'Perform data preprocessing and feature engineering',
            'Apply ML algorithms to real-world datasets',
            'Understand reinforcement learning fundamentals',
          ],
        },
      },
      {
        name: 'First Lessons in AI (FlAi)',
        level: 'foundational',
        focus: 'AI Introduction',
        details: {
          description: 'An accessible entry-level introduction to Artificial Intelligence for beginners with no prior technical background. Covers AI concepts, tools, and everyday applications.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'What is Artificial Intelligence? — definition and scope',
            'History and evolution of AI',
            'Types of AI: Narrow AI, General AI, Super AI',
            'How machines learn — basic ML concepts',
            'AI in everyday life — smartphones, search engines, recommendations',
            'Introduction to AI tools: ChatGPT, Google Bard, Copilot',
            'AI in healthcare, education, finance, and retail',
            'Ethics and responsible AI use',
            'Career opportunities in AI and related fields',
          ],
          outcomes: [
            'Explain what AI is and its different types',
            'Identify AI applications in everyday life and industries',
            'Use basic AI tools for productivity and learning',
            'Understand ethical considerations in AI',
            'Prepare for intermediate AI and ML courses',
          ],
        },
      },
      {
        name: 'DEEP AI',
        level: 'advanced',
        focus: 'Deep Learning',
        details: {
          description: 'An advanced deep learning course covering neural networks, CNNs, RNNs, and transformer architectures using Python, TensorFlow, and Keras for real-world AI applications.',
          duration: '90 Hours',
          mode: 'Online & Offline',
          topics: [
            'Introduction to Deep Learning and Neural Networks',
            'Perceptrons, activation functions and backpropagation',
            'Convolutional Neural Networks (CNNs) for image recognition',
            'Recurrent Neural Networks (RNNs) and LSTMs for sequential data',
            'Transfer Learning and pre-trained models',
            'Natural Language Processing (NLP) with deep learning',
            'Transformer architecture and attention mechanism',
            'Generative AI: GANs and Variational Autoencoders',
            'Model deployment and real-world AI project building',
          ],
          outcomes: [
            'Build and train deep neural networks using TensorFlow and Keras',
            'Implement CNNs for computer vision tasks',
            'Apply RNNs and LSTMs for text and time-series data',
            'Use transfer learning to accelerate model development',
            'Deploy AI models for real-world production use',
          ],
        },
      },
      {
        name: 'Intelligence with Python',
        level: 'advanced',
        focus: 'AI with Python',
        details: {
          description: 'Advanced Python programming for AI — covering NumPy, Pandas, Matplotlib, Scikit-Learn, Flask API development, and building intelligent systems with Python.',
          duration: '120 Hours',
          mode: 'Online & Offline',
          topics: [
            'Advanced Python: decorators, generators, comprehensions',
            'NumPy for numerical computing',
            'Pandas for data manipulation and analysis',
            'Matplotlib and Seaborn for data visualization',
            'Introduction to Machine Learning with Scikit-Learn',
            'Supervised and unsupervised learning basics',
            'Model evaluation and optimization',
            'Natural Language Processing (NLP) basics',
            'Python GUI with Tkinter',
            'Flask API development',
          ],
          outcomes: [
            'Write advanced Python code using modern best practices',
            'Perform data analysis and visualization with NumPy and Pandas',
            'Build and evaluate basic ML models using Scikit-Learn',
            'Develop REST APIs using Flask',
            'Apply Python skills to real-world AI and data science projects',
          ],
        },
      },
      {
        name: 'Science and AI-ML Unleashed',
        level: 'advanced',
        focus: 'Applied AI',
        details: {
          description: 'An advanced applied AI course combining scientific computing with ML — covering data science workflows, AI research methods, and real-world project implementation.',
          duration: '90 Hours',
          mode: 'Online & Offline',
          topics: [
            'Scientific computing with Python: SciPy and NumPy',
            'Advanced data analysis and statistical modeling',
            'Machine learning pipeline design and automation',
            'Computer vision applications with OpenCV',
            'NLP applications: sentiment analysis, text classification',
            'AI project lifecycle: from problem definition to deployment',
            'Model explainability and interpretability (XAI)',
            'AI in science: bioinformatics, climate, physics applications',
            'Deploying ML models as APIs and web services',
          ],
          outcomes: [
            'Apply scientific computing tools to AI and ML workflows',
            'Build end-to-end machine learning pipelines',
            'Implement computer vision and NLP applications',
            'Explain and interpret AI model decisions',
            'Deploy AI solutions for real-world scientific and business problems',
          ],
        },
      },
      {
        name: 'Mobile App Development',
        level: 'intermediate',
        focus: 'App Development',
        details: {
          description: 'A comprehensive Android mobile app development course using Android Studio and Java/Kotlin — from UI design to Firebase integration and Google Play deployment.',
          duration: '120 Hours',
          mode: 'Online & Offline',
          topics: [
            'Introduction to mobile development and Android Studio setup',
            'Android UI design — layouts, views, and widgets',
            'Activities, intents, and navigation',
            'Data storage: SharedPreferences and SQLite',
            'RecyclerView and adapters',
            'Networking and REST APIs',
            'Firebase integration (Auth and Realtime Database)',
            'Publishing apps to Google Play Store',
          ],
          outcomes: [
            'Design and build complete Android mobile applications',
            'Implement navigation, data storage, and networking',
            'Integrate Firebase for authentication and cloud data',
            'Deploy and publish apps to the Google Play Store',
            'Understand the full mobile app development lifecycle',
          ],
        },
      },
      {
        name: 'Android Studio',
        level: 'intermediate',
        focus: 'Android Dev',
        details: {
          description: 'A focused Android Studio course covering the IDE, project structure, UI components, debugging, and building production-ready Android applications.',
          duration: '60 Hours',
          mode: 'Online & Offline',
          topics: [
            'Android Studio IDE setup and project structure',
            'Layouts: ConstraintLayout, LinearLayout, RelativeLayout',
            'UI components: TextView, Button, EditText, ImageView, RecyclerView',
            'Activities and Fragment lifecycle management',
            'Intents: explicit and implicit navigation',
            'Working with the Android Manifest',
            'Debugging with Logcat and Android Profiler',
            'Building and signing APK for release',
            'Emulator configuration and device testing',
          ],
          outcomes: [
            'Set up and navigate Android Studio confidently',
            'Build UI layouts using ConstraintLayout and other managers',
            'Manage activity and fragment lifecycle events',
            'Debug Android applications using Logcat',
            'Build, sign, and prepare APKs for deployment',
          ],
        },
      },
      {
        name: 'With Flask and Django',
        level: 'intermediate',
        focus: 'Web Frameworks',
        details: {
          description: 'Build scalable web applications using Python-based Flask and Django frameworks — covering REST APIs, authentication, ORM, and cloud deployment.',
          duration: '60 Hours',
          mode: 'Online & Offline',
          topics: [
            'Introduction to web frameworks: Flask vs Django',
            'Flask routing, templates (Jinja2), and static files',
            'Flask forms, validation, and CRUD with SQLAlchemy',
            'Flask REST API development',
            'Django project structure and MVT architecture',
            'Django models, views, and templates',
            'Django ORM and admin panel',
            'User authentication and authorization',
            'Deployment on Heroku / PythonAnywhere',
          ],
          outcomes: [
            'Build full-stack web applications with Flask and Django',
            'Design and consume RESTful APIs',
            'Manage databases using Flask-SQLAlchemy and Django ORM',
            'Implement user authentication and role-based access',
            'Deploy Python web applications to cloud platforms',
          ],
        },
      },
      {
        name: 'AutoCAD Basics',
        level: 'foundational',
        focus: 'CAD Design',
        details: {
          description: 'An introductory course in AutoCAD covering 2D drafting, drawing tools, dimensions, and basic 3D modeling for engineering and design professionals.',
          duration: '60 Hours',
          mode: 'Online & Offline',
          topics: [
            'AutoCAD interface, workspace, and navigation',
            '2D drawing tools: lines, circles, arcs, polylines',
            'Editing tools: trim, extend, offset, mirror, array',
            'Layers, linetypes, and object properties',
            'Dimensioning and annotation in AutoCAD',
            'Blocks, symbols, and reusable components',
            'Hatching and gradient fills',
            'Plotting and printing layouts',
            'Introduction to 3D modeling in AutoCAD',
          ],
          outcomes: [
            'Navigate AutoCAD and use core 2D drawing tools',
            'Create and edit engineering drawings with precision',
            'Apply layers, dimensions, and annotations correctly',
            'Use blocks and reusable symbols efficiently',
            'Prepare drawings for printing and professional output',
          ],
        },
      },
      {
        name: 'Advanced Techniques in 3D Modeling',
        level: 'advanced',
        focus: '3D & CGI',
        details: {
          description: 'An advanced 3D modeling course covering complex modeling techniques, texturing, lighting, and rendering using Blender or 3ds Max for design and CGI production.',
          duration: '60 Hours',
          mode: 'Online & Offline',
          topics: [
            'Advanced mesh modeling: subdivision, retopology, sculpting',
            'Hard surface vs organic modeling techniques',
            'UV unwrapping and advanced texture mapping',
            'PBR (Physically Based Rendering) materials and shaders',
            'Advanced lighting setups: HDRI, studio, and outdoor',
            'Rendering engines: Cycles, EEVEE, or Arnold',
            'Rigging and basic character animation',
            'Particle systems and simulations',
            'Compositing and post-processing 3D renders',
          ],
          outcomes: [
            'Create complex 3D models using advanced mesh techniques',
            'Apply realistic PBR materials and textures',
            'Set up professional lighting and rendering pipelines',
            'Rig and animate 3D objects and characters',
            'Produce high-quality 3D renders for design and CGI',
          ],
        },
      },
      {
        name: '3D Basics Express',
        level: 'foundational',
        focus: '3D Basics',
        details: {
          description: 'A quick-start 3D modeling course for absolute beginners — covering the fundamentals of 3D space, basic modeling, and rendering using Blender.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Introduction to 3D space: axes, perspective, and depth',
            'Blender interface and navigation basics',
            '3D object creation: primitives and basic mesh editing',
            'Materials and basic textures',
            'Simple lighting setups',
            'Camera placement and composition',
            'Basic rendering with EEVEE',
            'Exporting 3D renders and models',
          ],
          outcomes: [
            'Navigate Blender and understand 3D workspace concepts',
            'Create and edit basic 3D objects',
            'Apply simple materials, lighting, and cameras',
            'Render and export basic 3D scenes',
            'Build confidence for advanced 3D modeling courses',
          ],
        },
      },
      {
        name: 'Generated Imagery (CGI)',
        level: 'advanced',
        focus: 'CGI',
        details: {
          description: 'An advanced CGI course covering photorealistic rendering, VFX integration, motion graphics, and producing high-quality computer-generated imagery for film and media.',
          duration: '60 Hours',
          mode: 'Online & Offline',
          topics: [
            'CGI pipeline overview: modeling, rigging, animation, rendering',
            'Photorealistic rendering techniques and settings',
            'Advanced lighting: global illumination, caustics, volumetrics',
            'Motion graphics and animated CGI elements',
            'Compositing CGI with live footage in After Effects',
            'Green screen and CGI integration workflows',
            'Particle and simulation effects: fire, smoke, fluids',
            'Color grading CGI renders for film output',
            'Delivering CGI for broadcast and streaming formats',
          ],
          outcomes: [
            'Produce photorealistic CGI renders for media and film',
            'Integrate CGI elements seamlessly with live-action footage',
            'Create particle and simulation effects for VFX production',
            'Apply advanced lighting and rendering techniques',
            'Deliver CGI assets to broadcast and streaming specifications',
          ],
        },
      },
      {
        name: 'Desktop Publishing Pro',
        level: 'intermediate',
        focus: 'Desktop Publishing',
        details: {
          description: 'Design professional print layouts using advanced desktop publishing techniques for catalogues, annual reports, magazines, and complex multi-page publications.',
          duration: '60 Hours',
          mode: 'Online & Offline',
          topics: [
            'Advanced InDesign: books, long documents, and indexing',
            'Complex table design and data visualization in DTP',
            'Advanced typography for editorial and publication design',
            'Multi-language and bi-directional text layout',
            'Print production: spot colors, varnishes, and special finishes',
            'Variable data printing and personalization concepts',
            'Digital publishing: interactive PDF and fixed-layout ePub',
            'Proofing, color management, and pre-press workflow',
          ],
          outcomes: [
            'Produce complex multi-page publications using advanced InDesign',
            'Apply specialist print production techniques',
            'Design interactive PDFs and digital ePub publications',
            'Manage multi-language and complex typographic documents',
            'Deliver projects through a professional pre-press workflow',
          ],
        },
      },
      {
        name: 'Basics of Digital Freelancing',
        level: 'foundational',
        focus: 'Freelancing',
        details: {
          description: 'A practical introduction to digital freelancing — covering how to find clients, price services, build an online presence, and manage freelance projects professionally.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Introduction to digital freelancing and the gig economy',
            'Identifying your freelance skills and niche',
            'Setting up profiles on Upwork, Fiverr, and Freelancer',
            'Pricing strategies: hourly vs project-based',
            'Writing winning proposals and cover letters',
            'Building a portfolio and personal brand online',
            'Client communication and project management',
            'Invoicing, payments, and financial management',
            'Avoiding common freelancing mistakes and scams',
          ],
          outcomes: [
            'Set up professional freelancing profiles on major platforms',
            'Price services competitively and write winning proposals',
            'Build a portfolio and attract clients online',
            'Manage freelance projects and client relationships professionally',
            'Handle invoicing and payment securely',
          ],
        },
      },
      {
        name: 'Indian Market Investment Essentials',
        level: 'intermediate',
        focus: 'Investment',
        details: {
          description: 'A practical course covering the essentials of investing in Indian financial markets — including equities, mutual funds, bonds, and derivatives for individual investors.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Overview of Indian financial markets: BSE, NSE, SEBI',
            'Equity investing: shares, IPOs, and stock analysis basics',
            'Fundamental analysis: reading financial statements',
            'Technical analysis: charts, trends, and indicators',
            'Mutual funds: types, NAV, SIP, and selection criteria',
            'Fixed income: bonds, debentures, and government securities',
            'Derivatives basics: futures and options concepts',
            'Portfolio construction and diversification',
            'Tax implications of investments in India',
          ],
          outcomes: [
            'Understand the structure of Indian financial markets',
            'Analyse stocks using fundamental and technical methods',
            'Select and invest in mutual funds using SIP strategy',
            'Build a diversified investment portfolio',
            'Understand tax implications of various investment instruments',
          ],
        },
      },
      {
        name: 'Mastering Research Processes',
        level: 'intermediate',
        focus: 'Research',
        details: {
          description: 'A comprehensive research methodology course covering qualitative and quantitative research methods, data collection, analysis, and academic and business report writing.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Introduction to research: purpose, types, and scope',
            'Research design: exploratory, descriptive, and causal',
            'Primary data collection: surveys, interviews, focus groups',
            'Secondary data sources: databases and literature review',
            'Sampling techniques and sample size determination',
            'Quantitative analysis: statistical tools for research',
            'Qualitative analysis: thematic and content analysis',
            'Research ethics and data integrity',
            'Research report writing and presentation',
          ],
          outcomes: [
            'Design and conduct research studies effectively',
            'Select appropriate data collection methods',
            'Analyse research data using quantitative and qualitative techniques',
            'Write professional research reports',
            'Apply evidence-based decision-making principles',
          ],
        },
      },
      {
        name: 'Integrated Branding and Pricing Strategies',
        level: 'intermediate',
        focus: 'Branding',
        details: {
          description: 'Covers integrated brand management and pricing strategy — equipping students with the skills to build powerful brands and implement competitive pricing for business growth.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Brand identity: logo, colors, typography, and voice',
            'Brand positioning and differentiation strategies',
            'Building brand equity and brand loyalty',
            'Integrated marketing communications for branding',
            'Pricing strategy fundamentals: cost-plus, value-based, competitive',
            'Dynamic pricing and price discrimination',
            'Psychological pricing techniques',
            'Brand and pricing strategy for digital markets',
            'Measuring brand performance and pricing effectiveness',
          ],
          outcomes: [
            'Build a cohesive brand identity and positioning strategy',
            'Develop integrated marketing communications for brand growth',
            'Implement competitive and value-based pricing strategies',
            'Apply psychological pricing techniques effectively',
            'Measure and optimize brand and pricing performance',
          ],
        },
      },
      {
        name: 'Entrepreneurship Journey: From Idea to Impact',
        level: 'intermediate',
        focus: 'Entrepreneurship',
        details: {
          description: 'A practical entrepreneurship course guiding aspiring founders from idea generation through business model design, funding, and building a scalable startup.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Entrepreneurial mindset: creativity, risk, and resilience',
            'Identifying and validating business ideas',
            'Business model design using the Business Model Canvas',
            'Value proposition and customer discovery',
            'Lean startup methodology and MVP development',
            'Funding options: bootstrapping, angel investment, VC, grants',
            'Legal structures and company registration in India',
            'Building and managing a founding team',
            'Pitching to investors: elevator pitch and deck design',
          ],
          outcomes: [
            'Apply entrepreneurial thinking to identify viable business opportunities',
            'Design a business model and validate a value proposition',
            'Develop an MVP using lean startup methodology',
            'Understand funding options and the investor landscape',
            'Pitch a startup idea confidently to investors and stakeholders',
          ],
        },
      },
      {
        name: 'IT (DEEP IT)',
        level: 'advanced',
        focus: 'Advanced IT',
        details: {
          description: 'A comprehensive advanced IT course covering computer systems, networking, security, cloud computing, and enterprise IT operations for IT professionals.',
          duration: '90 Hours',
          mode: 'Online & Offline',
          topics: [
            'Advanced computer architecture and operating systems',
            'Enterprise networking: VLANs, routing, and WAN technologies',
            'Cloud computing: AWS, Azure, and GCP fundamentals',
            'Virtualization and containerization (Docker, Kubernetes basics)',
            'Cybersecurity: threat landscape and defense strategies',
            'IT service management (ITSM) and ITIL framework',
            'Database administration and optimization',
            'IT project management and governance',
            'Disaster recovery and business continuity planning',
          ],
          outcomes: [
            'Manage enterprise IT infrastructure and network operations',
            'Deploy and manage cloud computing services',
            'Apply cybersecurity best practices for enterprise environments',
            'Implement IT service management using ITIL principles',
            'Plan and execute disaster recovery strategies',
          ],
        },
      },
      {
        name: 'Basics of DBMS',
        level: 'foundational',
        focus: 'DBMS Basics',
        details: {
          description: 'An introductory database management course covering relational database concepts, ER modeling, normalization, and basic SQL for data management.',
          duration: '60 Hours',
          mode: 'Online & Offline',
          topics: [
            'Introduction to database systems and DBMS',
            'File system vs database system',
            'Entity-Relationship (ER) model and ER diagrams',
            'Relational model: tables, keys, and constraints',
            'SQL basics: DDL, DML, and DCL commands',
            'Normalization: 1NF, 2NF, 3NF, BCNF',
            'Transaction management and ACID properties',
            'Introduction to MySQL Workbench',
            'Basic query writing and data retrieval',
          ],
          outcomes: [
            'Understand database management system fundamentals',
            'Create ER diagrams for database design',
            'Write basic SQL queries for DDL and DML operations',
            'Apply normalization to design efficient databases',
            'Manage transactions and understand ACID properties',
          ],
        },
      },
      {
        name: 'Basic IT Skills',
        level: 'foundational',
        focus: 'IT Basics',
        details: {
          description: 'A foundational IT skills course covering computer basics, internet usage, MS Office essentials, and digital communication for beginners entering the digital world.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Introduction to computers: hardware and software',
            'Windows operating system: navigation and file management',
            'Internet basics: browsing, search, and email',
            'MS Word: document creation and formatting',
            'MS Excel: spreadsheet basics and simple formulas',
            'MS PowerPoint: creating basic presentations',
            'Digital communication: email etiquette and online tools',
            'Introduction to cloud storage: Google Drive and OneDrive',
            'Basic cybersecurity: passwords and safe online practices',
          ],
          outcomes: [
            'Navigate Windows and manage files confidently',
            'Use internet services and email professionally',
            'Create basic documents, spreadsheets, and presentations',
            'Use cloud storage for file management',
            'Apply safe online practices and password security',
          ],
        },
      },
      {
        name: 'WebCraft Fundamentals',
        level: 'foundational',
        focus: 'Web Basics',
        details: {
          description: 'An introduction to web technologies covering HTML, CSS, and basic web design — bridging the gap between graphic design and web development for beginners.',
          duration: '60 Hours',
          mode: 'Online & Offline',
          topics: [
            'How the web works: browsers, servers, and URLs',
            'HTML basics: tags, structure, and semantic markup',
            'CSS basics: selectors, properties, and box model',
            'Fonts, colors, and backgrounds in CSS',
            'Creating simple web pages from scratch',
            'Linking pages and adding images',
            'Introduction to responsive design',
            'Using a code editor: VS Code setup',
            'Publishing a simple web page online',
          ],
          outcomes: [
            'Build simple static web pages using HTML and CSS',
            'Style text, colors, and layouts with CSS',
            'Link multiple pages and add media to websites',
            'Understand how the web works from a designer perspective',
            'Publish a basic website to the internet',
          ],
        },
      },
      {
        name: 'Advanced Bizops Insights',
        level: 'advanced',
        focus: 'Business Ops',
        details: {
          description: 'An advanced business operations course covering process optimization, data-driven decision making, operational analytics, and strategic business improvement.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Business operations framework and process design',
            'Process mapping and workflow optimization',
            'Key Performance Indicators (KPIs) and business metrics',
            'Operational analytics: using data for business decisions',
            'Supply chain and logistics optimization concepts',
            'Business process automation tools',
            'Quality management: Lean and Six Sigma basics',
            'Change management for operational improvement',
            'Business continuity and risk management',
          ],
          outcomes: [
            'Map and optimize business processes for efficiency',
            'Define and track KPIs for operational performance',
            'Apply data analytics to business operations decisions',
            'Implement Lean and quality improvement principles',
            'Manage business change and operational risk effectively',
          ],
        },
      },
      {
        name: 'Exploring Advanced Tools and Techniques',
        level: 'advanced',
        focus: 'Advanced Tools',
        details: {
          description: 'A survey course exploring advanced digital tools across AI, automation, design, and productivity — for professionals seeking to expand their technical toolkit.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'AI productivity tools: ChatGPT, Copilot, and Gemini',
            'Automation tools: Zapier, Make (Integromat), and Power Automate',
            'Advanced design tools: Figma, Adobe Firefly, and Midjourney',
            'Data tools: Power BI and Google Looker Studio',
            'Collaboration tools: Notion, Slack, and Microsoft Teams',
            'No-code and low-code development platforms',
            'Cloud tools: Google Workspace and Microsoft 365 advanced features',
            'Project management tools: Asana, Trello, and Monday.com',
            'Productivity workflows combining multiple tools',
          ],
          outcomes: [
            'Use AI and automation tools for professional productivity',
            'Apply advanced design and data visualization tools',
            'Build automated workflows connecting multiple platforms',
            'Leverage no-code tools for rapid solution development',
            'Integrate tools into efficient professional workflows',
          ],
        },
      },
      {
        name: 'Photo Restoration Methods',
        level: 'intermediate',
        focus: 'Photo Restoration',
        details: {
          description: 'Restore old and damaged photographs using digital tools. Covers specialist techniques for repairing torn, faded, scratched, or water-damaged photos using Photoshop.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Introduction to photo restoration and scanning best practices',
            'Removing dust, scratches, and noise',
            'Rebuilding missing areas with Content-Aware and Clone tools',
            'Repairing tears, folds, and water damage',
            'Color restoration: fixing fading and discoloration',
            'Colorizing black-and-white photos',
            'Sharpening and enhancing old photo details',
            'Before/after presentation and client delivery',
          ],
          outcomes: [
            'Diagnose and plan restoration of damaged photographs',
            'Remove scratches, dust, and noise professionally',
            'Rebuild missing areas and repair severe damage',
            'Restore and colorize faded or black-and-white photos',
            'Deliver restored images at print-ready quality',
          ],
        },
      },
      {
        name: 'TDS Compliance',
        level: 'intermediate',
        focus: 'Tax Compliance',
        details: {
          description: 'A focused course on TDS (Tax Deducted at Source) compliance in India — covering TDS provisions, deduction rates, payment, return filing, and form generation.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Introduction to TDS: concept, applicability, and importance',
            'TDS under Income Tax Act: key sections (194C, 194J, 194I, 194H)',
            'TDS rates and thresholds for different payment types',
            'TAN registration and TDS deduction process',
            'TDS payment: challan 281 and due dates',
            'TDS return filing: Form 24Q, 26Q, and 27Q',
            'TDS certificates: Form 16 and Form 16A generation',
            'TDS reconciliation: Form 26AS and TRACES portal',
            'Consequences of non-compliance and penalties',
          ],
          outcomes: [
            'Understand TDS provisions and applicable sections',
            'Calculate and deduct TDS correctly for different payment types',
            'File TDS returns using Form 24Q, 26Q, and 27Q',
            'Generate TDS certificates (Form 16 and 16A)',
            'Reconcile TDS using Form 26AS and TRACES portal',
          ],
        },
      },
      {
        name: 'Understanding the Marketplace',
        level: 'foundational',
        focus: 'Market Basics',
        details: {
          description: 'An introductory course covering how markets work — including supply and demand, market structures, pricing mechanisms, and the role of digital marketplaces in the modern economy.',
          duration: '30 Hours',
          mode: 'Online & Offline',
          topics: [
            'Introduction to markets: types and functions',
            'Supply and demand: concepts and price determination',
            'Market structures: perfect competition, monopoly, oligopoly',
            'Price elasticity and its business implications',
            'Consumer behavior and buying decision process',
            'Digital marketplaces: e-commerce, platforms, and gig economy',
            'Market research: understanding customers and competitors',
            'Marketing mix in marketplace context',
            'Trends shaping modern marketplaces: AI, sustainability, globalization',
          ],
          outcomes: [
            'Explain how markets function and prices are determined',
            'Identify different market structures and their characteristics',
            'Understand consumer behavior and its marketing implications',
            'Navigate digital marketplace platforms and e-commerce models',
            'Apply market research to identify business opportunities',
          ],
        },
      },
    ],
  },

  'medical-coding': {
    title: 'Medical Coding',
    subtitle: 'Medical Coding & Billing',
    category: 'Healthcare',
icon: <img src={AAPC} alt="MKCL" style={{ width: '600px', height: '150px', objectFit: 'contain' }} />,    color: '#2563eb',
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
    // In 'medical-coding':
    curriculumTable: [
      {
        name: 'Introduction to Medical Coding',
        level: 'foundational',
        focus: 'Coding Fundamentals',
        details: {
          description:
            'Medical Coding is a vital process in the healthcare industry that converts medical diagnoses, treatments, and procedures into standardized codes used for medical documentation and insurance billing. A medical coder works like a "half doctor and half techie," combining knowledge of medical terminology with technical coding systems to accurately interpret patient records. This module lays the complete foundation for the profession.',
          duration: '3–4 Months Total | Daily 2-Hour Classes',
          mode: 'Online & Offline',
          topics: [
            'What is Medical Coding? Role and responsibilities of a medical coder',
            'Overview of the healthcare documentation and billing workflow',
            'Medical terminology: prefixes, suffixes, root words, and abbreviations',
            'Types of medical records: inpatient, outpatient, and physician records',
            'Introduction to coding systems: ICD, CPT, and HCPCS',
            'Healthcare insurance and reimbursement concepts',
            'HIPAA compliance and patient data confidentiality',
            'Introduction to the CPC (Certified Professional Coder) exam structure',
            'Overview of coding guidelines and compliance requirements',
          ],
          outcomes: [
            'Understand the role of a medical coder in the healthcare system',
            'Interpret medical terminology and documentation accurately',
            'Navigate different types of medical records',
            'Explain the healthcare billing and reimbursement process',
            'Understand HIPAA regulations and compliance requirements',
            'Prepare for deeper study of ICD, CPT, and HCPCS coding systems',
          ],
        },
      },

      {
        name: 'Human Anatomy & Physiology',
        level: 'foundational',
        focus: 'Medical Knowledge Foundation',
        details: {
          description:
            'A solid understanding of human anatomy and physiology is essential for accurate medical coding. This module builds the medical knowledge base required to correctly interpret diagnoses, procedures, and clinical documentation across all body systems.',
          duration: 'Covered within the 3–4 Month Program',
          mode: 'Online & Offline',
          topics: [
            'Organization of the human body: cells, tissues, organs, and systems',
            'Musculoskeletal system: bones, joints, and muscles',
            'Cardiovascular system: heart, blood vessels, and circulation',
            'Respiratory system: lungs, airways, and breathing mechanics',
            'Digestive system: organs, processes, and common conditions',
            'Nervous system: brain, spinal cord, peripheral nerves',
            'Endocrine system: glands, hormones, and metabolic functions',
            'Urinary and reproductive systems',
            'Integumentary system: skin, hair, and nails',
            'Common diseases, disorders, and medical conditions by system',
            'Medical terminology applied to anatomy and pathology',
          ],
          outcomes: [
            'Identify and describe the major body systems and their functions',
            'Understand common medical conditions and their anatomical basis',
            'Apply anatomical knowledge to accurately interpret clinical documentation',
            'Use correct medical terminology when coding diagnoses and procedures',
            'Build the medical knowledge foundation required for ICD and CPT coding',
          ],
        },
      },

      {
        name: 'ICD Coding (International Classification of Diseases)',
        level: 'intermediate',
        focus: 'Diagnosis Coding — ICD-10-CM',
        details: {
          description:
            'The International Classification of Diseases (ICD) coding system is used worldwide to classify and code diagnoses, symptoms, and medical conditions. This module provides comprehensive training in ICD-10-CM, the current standard used in India and globally for medical documentation, insurance claims, and healthcare statistics.',
          duration: 'Covered within the 3–4 Month Program',
          mode: 'Online & Offline',
          topics: [
            'Introduction to ICD-10-CM: structure, format, and conventions',
            'ICD-10-CM code structure: alpha-numeric system and chapter organization',
            'Official ICD-10-CM guidelines for outpatient and inpatient coding',
            'Tabular List and Alphabetic Index: how to use both correctly',
            'Coding acute vs. chronic conditions',
            'Coding signs, symptoms, and uncertain diagnoses',
            'Combination codes and multiple coding rules',
            'Coding sequelae (late effects) and external cause codes',
            'Chapter-by-chapter coding practice: infectious diseases, neoplasms, cardiovascular, respiratory, musculoskeletal, and more',
            'Z codes: factors influencing health status',
            'ICD-10-PCS overview for inpatient procedure coding',
            'Common coding errors and compliance guidelines',
          ],
          outcomes: [
            'Navigate the ICD-10-CM Tabular List and Alphabetic Index accurately',
            'Apply official ICD-10-CM coding guidelines for outpatient and inpatient settings',
            'Code diagnoses across all major body system chapters',
            'Use combination codes, multiple coding, and sequencing rules correctly',
            'Avoid common ICD coding errors that affect reimbursement',
            'Build proficiency required for the CPC examination in diagnosis coding',
          ],
        },
      },

      {
        name: 'CPT Coding (Current Procedural Terminology)',
        level: 'intermediate',
        focus: 'Procedure Coding — CPT',
        details: {
          description:
            'Current Procedural Terminology (CPT) coding is used to document and bill for medical procedures and services performed by healthcare providers. Developed and maintained by the AMA, CPT codes are essential for insurance claims and reimbursements. This module covers all six sections of CPT with a focus on practical application and CPC exam preparation.',
          duration: 'Covered within the 3–4 Month Program',
          mode: 'Online & Offline',
          topics: [
            'Introduction to CPT: structure, format, and code categories (I, II, III)',
            'CPT manual navigation: index, tabular section, and guidelines',
            'Evaluation and Management (E/M) coding: office, hospital, and other visits',
            'E/M level selection: history, examination, and medical decision-making',
            'Anesthesia coding: time-based billing and qualifying circumstances',
            'Surgery section: coding guidelines, global surgical package, and modifiers',
            'Surgical coding by body system: integumentary, musculoskeletal, cardiovascular, respiratory, digestive, urinary, and more',
            'Radiology coding: diagnostic imaging, radiation oncology, and nuclear medicine',
            'Pathology and laboratory coding',
            'Medicine section: immunizations, injections, psychiatry, ophthalmology',
            'CPT modifiers: purpose, application, and common modifiers',
            'Unbundling rules and correct coding initiative (CCI edits)',
          ],
          outcomes: [
            'Navigate the CPT manual and apply coding guidelines for all six sections',
            'Accurately assign E/M codes based on clinical documentation',
            'Code surgical procedures across all major body systems',
            'Apply CPT modifiers correctly to ensure accurate reimbursement',
            'Understand global surgical package rules and coding compliance',
            'Develop the CPT coding proficiency required for the CPC examination',
          ],
        },
      },

      {
        name: 'HCPCS Coding (Healthcare Common Procedure Coding System)',
        level: 'intermediate',
        focus: 'HCPCS Level II Coding',
        details: {
          description:
            'HCPCS (Healthcare Common Procedure Coding System) Level II codes supplement CPT codes and are used to report non-physician services, durable medical equipment (DME), drugs, ambulance services, and other items not covered by CPT. This module covers the complete HCPCS Level II coding system required for professional medical coding practice and the CPC exam.',
          duration: 'Covered within the 3–4 Month Program',
          mode: 'Online & Offline',
          topics: [
            'Introduction to HCPCS: Level I (CPT) vs Level II overview',
            'HCPCS Level II code structure: alpha-numeric format (A–V codes)',
            'Transportation and ambulance services (A codes)',
            'Medical and surgical supplies (A & B codes)',
            'Durable Medical Equipment (DME) coding (E codes)',
            'Procedures and professional services (G codes)',
            'Drugs administered other than oral method (J codes)',
            'Orthotic and prosthetic procedures (L codes)',
            'Temporary codes: K, Q, and S codes',
            'HCPCS modifiers and their application',
            'Medicare and Medicaid billing using HCPCS codes',
            'Integration of HCPCS with ICD and CPT in claim submission',
          ],
          outcomes: [
            'Understand the purpose and structure of HCPCS Level II codes',
            'Assign correct HCPCS codes for DME, drugs, and supplies',
            'Apply HCPCS modifiers accurately in billing scenarios',
            'Navigate the HCPCS code manual and identify correct code ranges',
            'Combine ICD, CPT, and HCPCS codes for complete and compliant claim submission',
            'Meet HCPCS coding requirements assessed in the CPC examination',
          ],
        },
      },

      {
        name: 'CPC Exam Preparation & Mock Tests',
        level: 'advanced',
        focus: 'AAPC CPC Certification',
        details: {
          description:
            'This module provides dedicated coaching and structured exam preparation to help students successfully pass the AAPC Certified Professional Coder (CPC) examination. It includes 6 full-length mock tests, timed practice sessions, and targeted review of all exam domains. The CPC credential is the gold standard in medical coding and opens doors to careers in hospitals, insurance companies, and healthcare BPOs globally.',
          duration: 'Included within the 3–4 Month Program | 6 Mock Tests',
          mode: 'Online & Offline | In Association with IREZ Academy',
          topics: [
            'CPC exam structure: 150 questions, 5 hours 40 minutes, passing score 70%',
            'AAPC membership registration and exam scheduling guidance',
            'Timed practice sessions using real exam-style scenarios',
            'ICD-10-CM rapid coding drills and accuracy improvement',
            'CPT coding speed exercises across all six sections',
            'HCPCS Level II coding review and integration practice',
            'E/M coding mastery: level selection and documentation review',
            'Modifier application under exam conditions',
            '6 full-length mock tests with performance review and scoring',
            'Common exam pitfalls and time management strategies',
            'Post-exam: AAPC affiliation certificate and career guidance',
            'Career pathways: hospitals, insurance, BPO, remote coding roles',
          ],
          outcomes: [
            'Achieve the AAPC CPC (Certified Professional Coder) certification',
            'Code accurately and efficiently under timed exam conditions',
            'Apply ICD, CPT, and HCPCS knowledge across all CPC exam domains',
            'Develop time management strategies for the 150-question exam',
            'Receive an AAPC Affiliation Certificate upon completion',
            'Launch a career in medical coding in hospitals, insurance firms, or healthcare BPOs in India and internationally',
          ],
        },
      },
    ],
    partnerBadge: 'In Association With IREZ Academy',
    partnerLogo: 'AAPC',
  },

  'cisi-programs': {
    title: 'CISI Programs',
    subtitle: 'Finance & Investment Certification',
    category: 'Finance',
icon: <img src={CISI} alt="MKCL" style={{ width: '600px', height: '150px', objectFit: 'contain' }} />,    color: '#2563eb',
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
    // In 'cisi-programs':
    curriculumTable: [
      {
        name: 'International Certificate in Wealth and Investment Management (ICWIM) India',
        level: 'intermediate',
        focus: 'Wealth Management',
        details: {
          description:
            'ICWIM India has been developed for wealth managers and investment advisors in India to demonstrate understanding of the knowledge required by the National Institute of Securities Markets (NISM) to qualify as a Level 1 Investment Advisor in India. The qualification consists of two exams that together cover Indian financial services and global wealth management.',
          duration: '2 Exams (1 hr + 2 hr) | ~80 hours study',
          mode: 'Computer Based Testing (CBT) — Mumbai, Hyderabad, Chennai & globally',
          topics: [
            // Unit 1: Wealth and Investment Management (India)
            'Overview of Indian financial services from a macroeconomic perspective',
            'Indian savings and investment products',
            'Financial planning calculations and tools',
            'Regulation of markets in India (NISM framework)',
            'Pensions, financial protection, taxation and estate planning in India',
            // Unit 2: International Certificate in Wealth and Investment Management
            'Essentials of financial planning from a global perspective',
            'Private client asset management and fund management',
            'Advisory functions and investment analysis',
            'Range of assets and investment products in the market',
            'Investment, retirement and protection planning needs of clients',
          ],
          outcomes: [
            'Qualify as a Level 1 Investment Advisor under NISM (India)',
            'Demonstrate knowledge of Indian financial services and regulation',
            'Provide financial advice and wealth management to clients in India',
            'Understand global wealth and investment management concepts',
            'Achieve Associate membership (ACSI) of the CISI on completion',
            'Progress to higher-level CISI qualifications (ICAWM and beyond)',
          ],
        },
      },

      {
        name: 'Technology in Investment Management',
        level: 'advanced',
        focus: 'Fintech & IT in Finance',
        details: {
          description:
            'Technology in Investment Management is the first qualification developed specifically for IT staff working in the securities and investment sector. It provides a comprehensive overview of the role of IT in front office and operations departments, covering best practice techniques and the challenges of managing IT systems in financial services. Regulated by Ofqual as a CISI Level 3 Award (equating to EQF Level 4).',
          duration: '1 Exam (1 hr, 50 MCQs) | ~80 hours study',
          mode: 'Online via Remote Invigilation or CISI Global CBT Centres',
          topics: [
            'Technology in Investment Management — overview and context',
            'The Regulatory Framework for technology in financial services',
            'Technology and the functional flow of financial instruments',
            'The role of technology in the Front Office',
            'The role of technology in the Pre-Settlement Phase',
            'The role of technology in the Settlement and Post-Settlement Phases',
            'The impact of technology on financial control',
            'Technology management — governance and risk',
            'Managing business change in financial services',
            'Technology services procurement and vendor management',
          ],
          outcomes: [
            'Understand the IT needs specific to the financial services arena',
            'Explain the role of technology across front office and operations',
            'Navigate settlement, pre-settlement, and post-settlement technology',
            'Apply best practice techniques for managing IT systems in finance',
            'Bridge communication between IT and other financial services departments',
            'Progress to Affiliate CISI membership on completion',
            'Can be taken as part of the Investment Operations Certificate (IOC)',
          ],
        },
      },

      {
        name: 'Financial Risk Program',
        level: 'advanced',
        focus: 'Risk Management',
        details: {
          description:
            'A CISI-aligned program covering the principles and practices of financial risk management in securities and investment firms. Equips professionals with the knowledge to identify, assess, and manage risk across financial markets, regulatory frameworks, and operational environments.',
          duration: 'Exam-based | Study time varies by unit',
          mode: 'Online via Remote Invigilation or CISI Global CBT Centres',
          topics: [
            'Principles of financial risk management',
            'Market risk: interest rate, equity, foreign exchange, and commodity risk',
            'Credit risk: counterparty risk and credit derivatives',
            'Operational risk: identification, measurement, and mitigation',
            'Liquidity risk and funding risk management',
            'Regulatory capital frameworks (Basel III/IV concepts)',
            'Risk governance, policies, and reporting structures',
            'Stress testing, scenario analysis, and model risk',
            'Risk management in derivatives markets',
          ],
          outcomes: [
            'Identify and assess financial risk across market, credit, and operational dimensions',
            'Apply regulatory capital and risk management frameworks',
            'Manage liquidity and funding risk in financial institutions',
            'Design and implement risk governance structures',
            'Use stress testing and scenario analysis for risk decision-making',
            'Demonstrate competence required for risk roles in regulated firms',
          ],
        },
      },

      {
        name: 'Financial Compliance Program',
        level: 'advanced',
        focus: 'Compliance & Governance',
        details: {
          description:
            'A CISI-aligned compliance program developing essential knowledge of regulatory frameworks, compliance obligations, and governance standards for professionals in financial services. Covers UK and international regulatory environments with a focus on FCA requirements and conduct standards.',
          duration: 'Exam-based | Study time varies by unit',
          mode: 'Online via Remote Invigilation or CISI Global CBT Centres',
          topics: [
            'The UK regulatory environment — FCA and PRA overview',
            'FCA Conduct of Business Sourcebook (COBS)',
            'Market conduct: market abuse, insider dealing, and financial crime',
            'Anti-Money Laundering (AML) and Counter-Terrorist Financing (CTF)',
            'Corporate governance and business ethics in financial services',
            'GDPR and data protection compliance in finance',
            'MiFID II and best execution requirements',
            'Compliance monitoring and reporting obligations',
            'Senior Managers and Certification Regime (SM&CR)',
          ],
          outcomes: [
            'Navigate the FCA regulatory framework and conduct rules',
            'Identify and manage financial crime, market abuse, and AML risks',
            'Apply corporate governance and ethical standards in practice',
            'Understand SM&CR obligations for senior managers and certified staff',
            'Meet compliance monitoring and reporting requirements',
            'Demonstrate regulatory competence required by UK and international regulators',
          ],
        },
      },

      {
        name: 'Corporate Finance',
        level: 'advanced',
        focus: 'Capital Markets & Corporate Advisory',
        details: {
          description:
            'The CISI Certificate in Corporate Finance develops the essential foundation knowledge required to work in the corporate finance industry. Recognised by the FCA as an Appropriate Examination, the syllabus explores corporate finance legislation, regulation, and techniques. Regulated by Ofqual as a Level 3 qualification (EQF Level 4). Total Qualification Time: 162 hours. Successful candidates can progress to the Diploma in Corporate Finance.',
          duration: '2 Units | 1 hr exam each (50 MCQs per unit) | ~80 hrs study per unit',
          mode: 'Online via Remote Invigilation or CISI Global CBT Centres',
          topics: [
            // Unit 1: Regulation
            'The Regulatory Environment in the UK',
            'FCA Conduct of Business Sourcebook',
            'Corporate Governance and Business Ethics',
            'Takeovers and Mergers',
            'Prospectuses and disclosure requirements',
            'Equity Capital Markets',
            // Unit 2: Technical Foundations
            'Quantitative Methods for Corporate Finance',
            'Financial Statements Analysis',
            'Capital Structure — debt, equity, and hybrid instruments',
            'Introduction to Business Valuations',
            'Corporate Transactions — M&A, IPOs, rights issues',
            'Corporate Finance Documentation',
          ],
          outcomes: [
            'Develop thorough understanding of corporate finance recognised by the FCA',
            'Navigate UK corporate finance regulation and FCA conduct rules',
            'Analyse financial statements and apply valuation methodologies',
            'Understand capital structures and corporate transaction mechanics',
            'Work competently on M&A, IPOs, and equity capital markets transactions',
            'Achieve ACSI designatory letters and CISI Associate membership',
            'Progress to the higher-level CISI Diploma in Corporate Finance',
          ],
        },
      },
    ],
    partnerBadge: 'In Association With CISI',
    partnerLogo: 'CISI',
  },

  'cgib-programs': {
    title: 'CGIB Programs',
    subtitle: 'Chartered Global Investment Banker',
    category: 'Finance',
icon: <img src={CGIB} alt="MKCL" style={{ width: '600px', height: '150px', objectFit: 'contain' }} />,    color: '#2563eb',
    color: '#1e6fa8',
    accentColor: '#4db8ff',
    description:
      "TechAngle offers the CGIB™ (Chartered Global Investment Banker) program — India's first dedicated chartered-level qualification in global investment banking, offered in association with Investment Banking Foundation and Vantage Knowledge Academy. This program equips finance professionals with advanced, practical skills for roles in mergers & acquisitions (M&A), capital markets, private equity, and corporate advisory, bridging academic knowledge with real-world application.",
    subCourses: [
      'CGIB Level I — Foundational (Financial Markets & IB Ecosystem)',
      'CGIB Level II — Applied (M&A Modelling, Debt/Equity Financing, ESG)',
      'CGIB Level III — Strategic (Global Deals, Private Equity, Advisory)',
    ],
    benefits: [
      "India's first chartered investment banking qualification — globally recognized",
      'Exam exemptions for CA, CFA, CS, and CMA qualification holders',
      'Board of advisors from BSE, IIM Ahmedabad, and top investment banks',
      'Placements in Goldman Sachs, JPMorgan, HSBC, Deutsche Bank & more',
      '85% pass rate with 12k+ students placed through Vantage Knowledge Academy',
    ],
    whyChoose: [
      'Only official training provider by the Investment Banking Foundation',
      'Three progressive levels covering foundational to strategic investment banking',
      'Real-world case studies from actual M&A transactions',
      'Access to global Investment Banking Foundation membership on completion',
      'Minimum 12-month work experience pathway leading to full Chartered status',
    ],
    faqs: [
      {
        question: 'What is CGIB and who offers it?',
        answer:
          'CGIB™ stands for Chartered Global Investment Banker. It is offered by the Investment Banking Foundation (a non-profit) in partnership with Vantage Knowledge Academy — India\'s leading financial education provider listed on BSE since 1995.',
      },
      {
        question: 'Can CA / CFA holders get exemptions?',
        answer:
          'Yes! Holders of CA (ICAI), CFA Institute, CMA, and ICSI qualifications are eligible to enter directly at CGIB Level II, skipping the Foundational level entirely.',
      },
      {
        question: 'What is the career scope after CGIB?',
        answer:
          'Graduates pursue roles as Merchant Bankers, IPO Consultants, M&A Specialists, Valuer Specialists, Credit Analysts, Risk Analysts, Insolvency Consultants, and Investment Consultants at leading global financial institutions.',
      },
    ],
    services: [
      'CGIB Exam Preparation (All 3 Levels)',
      'M&A & Capital Markets Training',
      'Private Equity & Corporate Advisory',
      'Investment Banking Foundation Membership Support',
      'Globally Recognized Chartered Certification',
    ],
    // In 'cgib-programs':
curriculumTable: [
  {
    name: 'CGIB Level I — Foundational',
    level: 'foundational',
    focus: 'Financial Markets & IB Ecosystem',
    details: {
      description:
        'The foundational level introduces students and professionals to the core concepts of investment banking, financial markets, and the global IB ecosystem. This level is designed for anyone entering the field — from undergraduates to career-changers — and establishes the knowledge base required for applied and strategic IB work. Exams are conducted twice a year (June & December). CA, CS, CMA, and CFA holders may receive exemptions from this level.',
      duration: '60 Hours',
      mode: 'Online via VantagePro Platform | Live Sessions & Self-Paced Learning',
      topics: [
        'Introduction to Investment Banking — roles, functions, and the IB ecosystem',
        'Financial markets overview — equity markets, debt markets, and derivatives',
        'Capital market instruments — shares, bonds, debentures, and hybrid securities',
        'Introduction to financial statements — balance sheet, P&L, and cash flow',
        'Time value of money and fundamental financial mathematics',
        'Valuation fundamentals — intrinsic vs relative valuation concepts',
        'Introduction to M&A — deal types, rationale, and the transaction lifecycle',
        'IPO process — regulatory requirements, book-building, and listing',
        'Regulatory framework — SEBI, RBI, and Indian financial market regulations',
        'Ethics in investment banking — professional conduct and ethical decision-making',
        'Risk management basics — types of financial risk and mitigation',
        'Overview of private equity and venture capital',
      ],
      outcomes: [
        'Understand the structure and function of investment banks and capital markets',
        'Read and interpret financial statements for basic investment analysis',
        'Apply time value of money concepts to financial problem-solving',
        'Explain key valuation methodologies used in IB practice',
        'Describe the M&A and IPO process from a regulatory and market perspective',
        'Demonstrate ethical awareness in financial services contexts',
        'Qualify for exemption waivers if holding CA, CS, CMA, or CFA credentials',
      ],
    },
  },

  {
    name: 'CGIB Level II — Applied',
    level: 'intermediate',
    focus: 'M&A Modelling, Debt/Equity Financing & ESG',
    details: {
      description:
        'The applied level bridges theory with real-world practice. Students work through actual deal structures, financial models, and capital market transactions using Excel-based tools and case studies drawn from real M&A and capital markets transactions. This is the entry point for CA, CS, CMA, and CFA holders who receive Level I exemptions.',
      duration: '60 Hours',
      mode: 'Online via VantagePro Platform | Case Study-Based Learning',
      topics: [
        'Advanced financial modeling — building three-statement models in Excel',
        'DCF (Discounted Cash Flow) valuation — WACC, terminal value, and sensitivity analysis',
        'Comparable company analysis (Comps) — trading multiples and peer benchmarking',
        'Precedent transaction analysis — deal multiples and transaction screening',
        'Mergers & acquisitions modeling — merger consequences, accretion/dilution analysis',
        'Leveraged buyout (LBO) modeling — debt structuring, returns analysis, and exit scenarios',
        'Debt capital markets — bond issuance, credit ratings, and debt structuring',
        'Equity capital markets — rights issues, FPOs, QIPs, and block trades',
        'Deal structuring and documentation — term sheets, NDAs, and LOIs',
        'Due diligence process — financial, legal, commercial, and tax due diligence',
        'ESG in investment banking — sustainability-linked instruments and ESG deal frameworks',
        'Insolvency and restructuring — IBC framework, CIRP process, and resolution strategies',
      ],
      outcomes: [
        'Build and audit three-statement financial models from scratch in Excel',
        'Perform DCF, comparable company, and precedent transaction valuations independently',
        'Structure and analyze M&A deals including accretion/dilution and LBO returns',
        'Navigate debt and equity capital markets transactions and documentation',
        'Apply ESG frameworks to investment banking mandates',
        'Understand the IBC insolvency and restructuring process in India',
        'Demonstrate applied IB skills through real-world case study presentations',
      ],
    },
  },

  {
    name: 'CGIB Level III — Strategic',
    level: 'advanced',
    focus: 'Global Deals, Private Equity & Advisory',
    details: {
      description:
        'The strategic level develops senior-level investment banking competencies — preparing candidates for leadership roles in M&A advisory, private equity, and corporate strategy. Combined with the mandatory 12-month work experience requirement, successful completion of all three levels leads to the full CGIB™ Chartered designation and membership of the global Investment Banking Foundation.',
      duration: '60 Hours',
      mode: 'Online via VantagePro Platform | Strategic Case Studies & Leadership Modules',
      topics: [
        'Strategic M&A advisory — cross-border deals, hostile takeovers, and defense strategies',
        'Advanced private equity — fund structures, portfolio management, and exit strategies',
        'Venture capital — term sheet negotiation, cap table management, and valuation rounds',
        'Corporate restructuring — spin-offs, carve-outs, divestitures, and distressed M&A',
        'Real Estate Investment Trusts (REITs) and Infrastructure Investment Trusts (InvITs)',
        'Global capital markets — international debt/equity issuances and cross-border regulations',
        'Merchant banking in India — SEBI Merchant Banker regulations and advisory obligations',
        'Advanced valuation — sum-of-the-parts (SOTP), EV bridge, and NAV-based valuation',
        'Investment banking leadership — deal origination, client management, and pitch strategies',
        'Fintech and digital disruption in investment banking — AI, blockchain, and digital assets',
        'Global regulatory frameworks — FCA, SEC, MiFID II, and comparative regulatory analysis',
        'Professional practice — CGIB charter requirements, IBF membership, and CPD obligations',
      ],
      outcomes: [
        'Lead and structure complex cross-border M&A and corporate advisory mandates',
        'Manage private equity and venture capital transactions end-to-end',
        'Apply advanced valuation techniques to real and distressed assets',
        'Navigate global regulatory requirements for international deal execution',
        'Originate and manage client relationships at a senior investment banking level',
        'Integrate fintech, digital assets, and ESG considerations into IB strategy',
        'Achieve the CGIB™ Chartered designation and Investment Banking Foundation membership',
        'Pursue senior roles: Merchant Banker, M&A Specialist, PE Professional, IPO Consultant, or Valuer Specialist',
      ],
    },
  },
],    advisors: [
      {
        name: "Deena Mehta",
        title: "CA, MBA",
        desc: "Asit C Mehta Advisory P Ltd, Ex-President (BSE)",
        image: "/assets/Deena.webp"   // Put your images in public/assets/advisors/
      },
      {
        name: "Ragini Chokshi",
        title: "CS - Chairperson of ICSI - WIRC",
        desc: "Ragini Chokshi & CO",
        image: "/assets/Ragini.jpg"
      },
      {
        name: "Deepali Jain",
        title: "IAS - Gold Medalist",
        desc: "Director - Brain Power House",
        image: "/assets/Deepali.jpg"
      },
      {
        name: "Sunder Rangan",
        title: "CS, LLB, CAIIB",
        desc: "Head of Merchant Banking - Arihant Capital Markets Ltd.",
        image: "/assets/Sundar.jpg"
      },
      {
        name: "B Madhav Prasad",
        title: "CA - Rank Holder, Veteran Investment Banker",
        desc: "Ex - Vice Chairman Keynote Corporate Services Ltd",
        image: "/assets/Madhav.jpg"
      },
      {
        name: "V Aditya Srinivasan",
        title: "PhD - Economics, MDP IIM Ahmedabad",
        desc: "Chief Economist - BSE Brokers Forum",
        image: "/assets/Adhi.jpg"
      },
      {
        name: "Martin John Golla",
        title: "CS, LLB, MBA, Insolvency Professional",
        desc: "G Martin & Associates",
        image: "/assets/Golla.jpg"
      },
      {
        name: "Ashok Bakliwal",
        title: "CA, Member of no. of SEBI Committee",
        desc: "A P Bakliwal & Co.",
        image: "/assets/ashok.webp"
      }
    ],

    partnerBadge: 'In Association With CGIB — Investment Banking Foundation',
    partnerLogo: 'CGIB™',
  },
'bim-programs': {
  title: 'BIM & Architecture Software Programs',
  subtitle: 'BIM & Architecture',
  category: 'Technology',
icon: <img src={BIM} alt="MKCL" style={{ width: '600px', height: '150px', objectFit: 'contain' }} />,    color: '#2563eb',
  color: '#d4af37',
  accentColor: '#f5d060',
  description:
    'TechAngle offers BIM & Architecture Software Programs in association with Learn At One — an Autodesk Licensed training provider. Building Information Modelling (BIM) is the future of construction and architecture. It is not just software — it is a smarter way to design, build, and manage buildings. Architects, structural engineers, and contractors all work on ONE shared model, saving time, money, and rework. Companies using BIM report 40% faster project delivery and 25% cost savings. Our job-oriented programs come with a genuine Autodesk licence included FREE, industry-recognised certification, mock interviews by HR professionals, portfolio review, and LinkedIn profile makeover — a complete career transformation package for architecture and civil graduates.',
  subCourses: [
    'BIM Complete Program — 6 Months',
    'Revit Advanced Program — 2 Months',
    'Architecture Software Suite — 2 Months',
    'Civil Software Program — 2 Months',
    'Revit Architecture',
    'Revit Structure & MEP',
    'Navisworks',
    'AutoCAD 2D/3D',
    'SketchUp Pro',
    'Lumion / Twinmotion',
    'AutoCAD Civil 3D',
    'STAAD.Pro',
    'Primavera P6',
    'MS Project',
    'BIM Execution Plan',
    'Parametric Families',
    'Collaboration Workflows',
  ],
  benefits: [
    'Genuine Autodesk Licence included FREE — Revit, AutoCAD, Navisworks (saves ₹50,000+)',
    'Industry-recognised certificate from Learn At One accepted by architecture and engineering firms',
    'Mock interviews conducted by HR professionals to prepare you for real job interviews',
    'BIM portfolio built, reviewed, and refined with real project files',
    'LinkedIn profile professionally optimised with the right keywords for recruiter visibility',
    'Small batch of 60 students — guaranteed personal attention from every trainer',
    'Alumni working in top firms across India, Dubai, and Singapore',
    '₹10,000 Early Bird Discount for limited seats per batch',
  ],
  whyChoose: [
    'Autodesk Licensed training provider — industry-standard tools from Day 1',
    'All 8 faculty members are currently working professionals, not just academics',
    'Real-world BIM projects from Week 1 — hands-on, not theory-heavy',
    'Dedicated daily doubt-clearing sessions — no question goes unanswered',
    'Weekly progress reviews with assignment submissions and mentor feedback',
    'Complete career transformation: Autodesk licence + certificate + interviews + portfolio + LinkedIn',
    'Batch size capped at 60 students for truly personalized mentoring and attention',
    'Alumni placed in Bengaluru, Hyderabad, Dubai, and Singapore',
  ],
  faqs: [
    {
      question: 'What is BIM and why is it important for architecture graduates?',
      answer:
        'BIM (Building Information Modelling) is a smarter way to design, build, and manage buildings using a shared 3D model. Companies using BIM report 40% faster project delivery and 25% cost savings — which is why recruiters specifically look for BIM-skilled professionals. Without BIM skills, most architecture and civil graduates struggle to get callbacks from top firms.',
    },
    {
      question: 'Is the Autodesk licence genuine and included in the fee?',
      answer:
        'Yes! Every student receives a genuine, licensed copy of Autodesk software — including Revit, AutoCAD, and Navisworks — at no additional cost. This alone saves ₹50,000+ compared to purchasing it separately, and ensures you work with industry-standard, non-pirated tools from Day 1.',
    },
    {
      question: 'Can I take the course while still in college?',
      answer:
        'Absolutely. BIM classes run 2–3 days per week online, designed to fit perfectly around your college schedule. No travel needed. You can attend live classes from anywhere and still complete real projects alongside your college coursework.',
    },
    {
      question: 'What is the Early Bird Offer?',
      answer:
        'Students who register before the batch fills get ₹10,000 OFF the course fee. Each batch is limited to 60 students for personal attention, so seats fill quickly. EMI options are also available to make enrollment easier.',
    },
    {
      question: 'What career outcomes can I expect after completing the BIM program?',
      answer:
        'Our alumni are currently working as BIM Coordinators, BIM Modelers, Revit Technicians, CAD Designers, and Site Engineers at top firms in India, Dubai, and Singapore. The BIM Complete Program graduate from Dharwad was hired at ₹7.2 LPA. Civil graduates have been placed at ₹5.5 LPA. Architecture graduates have gone on to freelancing in Dubai earning AED 4,500/month.',
    },
  ],
  services: [
    'Autodesk Licensed BIM Training (Revit, AutoCAD, Navisworks)',
    'Architecture Software Suite (SketchUp, Lumion, Twinmotion)',
    'Civil Software Training (STAAD.Pro, Primavera, Civil 3D)',
    'Portfolio Building & Review',
    'Mock Interviews by HR Professionals',
    'LinkedIn Profile Optimisation',
    'Placement Support & Career Guidance',
    'Industry-Recognised Certificate',
  ],
  curriculumTable: [
    {
      name: 'BIM Complete Program',
      level: 'intermediate',
      focus: 'Full BIM Workflow',
      details: {
        description:
          'The flagship 6-month BIM Complete Program is the most comprehensive BIM training available — covering Revit Architecture, Revit Structure & MEP, Navisworks, and AutoCAD in one integrated curriculum. Designed for B.Arch and B.E. Civil graduates, the program runs 2–3 days per week online with a genuine Autodesk licence included. Batch size is capped at 60 students for personal attention. Includes a full capstone BIM project from concept to coordination.',
        duration: '6 Months | 2–3 Days/Week',
        mode: '100% Online | Live Classes | 60 Students per Batch',
        topics: [
          'Introduction to BIM — concept, dimensions (3D, 4D, 5D, 6D, 7D), and industry workflow',
          'Revit Architecture — interface, families, walls, floors, roofs, and documentation',
          'Revit Architecture — advanced parametric families and component creation',
          'Revit Structure — structural elements, grids, levels, and framing',
          'Revit MEP — mechanical, electrical, and plumbing coordination',
          'BIM Execution Plan (BEP) — creating and managing project BIM standards',
          'AutoCAD 2D — drafting, annotation, and coordination drawings',
          'Navisworks — model coordination, clash detection, and 4D scheduling',
          'Collaboration workflows — shared models, worksets, and linked files',
          'BIM standards — ISO 19650, LOD (Level of Development) framework',
          'Capstone Project — full BIM model from architectural concept to MEP coordination',
          'Portfolio development — presenting BIM projects for job applications',
        ],
        outcomes: [
          'Build complete BIM models covering architecture, structure, and MEP in Revit',
          'Perform clash detection and model coordination using Navisworks',
          'Create a BIM Execution Plan and manage project BIM standards',
          'Produce construction documentation and coordination drawings',
          'Complete a capstone BIM project portfolio ready for employer review',
          'Walk into interviews with a genuine Autodesk licence and polished BIM portfolio',
        ],
      },
    },
    {
      name: 'Revit Advanced Program',
      level: 'advanced',
      focus: 'Parametric Families & BIM Management',
      details: {
        description:
          'A focused 2-month advanced Revit course for graduates who already have basic Revit knowledge or have completed the BIM Complete Program. Covers parametric family creation, BIM Execution Plans, advanced documentation, and collaboration workflows used in professional BIM projects.',
        duration: '2 Months',
        mode: '100% Online | Live Classes',
        topics: [
          'Parametric family creation — custom in-place and loadable families',
          'Shared parameters and family type catalogues',
          'BIM Execution Plan (BEP) — authoring, coordination, and documentation plans',
          'Advanced Revit documentation — sheets, schedules, and views',
          'Collaboration workflows — worksets, central files, and linked model management',
          'Revit API basics — introduction to automation and Dynamo scripting',
          'Advanced rendering and visualization in Revit',
          'IFC export and open BIM standards',
        ],
        outcomes: [
          'Create custom parametric Revit families for any architectural element',
          'Author and manage a professional BIM Execution Plan',
          'Manage collaborative Revit workflows using worksets and central files',
          'Produce advanced construction documentation sets in Revit',
          'Apply open BIM standards and IFC for multi-software project environments',
        ],
      },
    },
    {
      name: 'Architecture Software Suite',
      level: 'foundational',
      focus: 'Architecture Design Tools',
      details: {
        description:
          'A 2-month per-software program covering the most in-demand architecture design tools — AutoCAD 2D/3D, SketchUp Pro, Revit Basics, and Lumion/Twinmotion for rendering and visualization. Ideal for B.Arch students and graduates who want to rapidly build software proficiency for studio and firm work.',
        duration: '2 Months per Software | ₹15,000 – ₹25,000 per software',
        mode: '100% Online | Live Classes',
        topics: [
          'AutoCAD 2D — 2D drafting, annotation, dimensioning, and printing layouts',
          'AutoCAD 3D — solid modeling, surface modeling, and 3D documentation',
          'SketchUp Pro — 3D conceptual modeling, materials, and scenes',
          'SketchUp Pro — LayOut for professional architectural presentations',
          'Revit Basics — introduction to BIM, walls, floors, roofs, and documentation',
          'Lumion — importing models, applying materials, lighting, and environment setup',
          'Lumion — photo-realistic rendering, animation walkthroughs, and panoramas',
          'Twinmotion — real-time visualization and VR-ready architectural renders',
        ],
        outcomes: [
          'Draft professional architectural drawings using AutoCAD 2D',
          'Create 3D conceptual designs using SketchUp Pro and LayOut',
          'Build basic BIM models in Revit for architectural design',
          'Produce photo-realistic renders and walkthroughs using Lumion or Twinmotion',
          'Add multiple industry-standard architecture software skills to your resume',
        ],
      },
    },
    {
      name: 'Civil Software Program',
      level: 'intermediate',
      focus: 'Civil Engineering Software',
      details: {
        description:
          'A 2-month program for B.E. Civil graduates covering the most sought-after civil engineering software tools — AutoCAD Civil 3D for site design, STAAD.Pro for structural analysis, Primavera P6 for project scheduling, and MS Project for construction management.',
        duration: '2 Months | ₹20,000',
        mode: '100% Online | Live Classes',
        topics: [
          'AutoCAD Civil 3D — surfaces, alignments, profiles, corridors, and grading',
          'AutoCAD Civil 3D — storm drain networks, pipe design, and quantity takeoffs',
          'STAAD.Pro — structural analysis, beam/column design, and load combinations',
          'STAAD.Pro — foundation design and structural report generation',
          'Primavera P6 — project scheduling, WBS, activity sequencing, and resource loading',
          'Primavera P6 — baseline management, progress tracking, and S-curve reports',
          'MS Project — Gantt charts, resource management, and project reporting',
          'Integration of software across a complete civil project workflow',
        ],
        outcomes: [
          'Design road alignments, profiles, and corridors using AutoCAD Civil 3D',
          'Perform structural analysis and design using STAAD.Pro',
          'Create and manage construction project schedules in Primavera P6',
          'Track project progress and manage resources using MS Project',
          'Build a civil engineering software portfolio for infrastructure firm applications',
        ],
      },
    },
    {
      name: 'BIM — What It Is & Why It Matters',
      level: 'foundational',
      focus: 'BIM Fundamentals',
      details: {
        description:
          'An introductory module covering the full scope and significance of Building Information Modelling. Explains BIM dimensions, industry adoption, and how BIM changes the way architecture, engineering, and construction (AEC) teams work together across a project lifecycle.',
        duration: 'Included in BIM Complete Program',
        mode: 'Online | Live Session',
        topics: [
          '3D BIM — smart 3D building model replacing traditional 2D drawings',
          '4D BIM — time and schedule control linked to the model',
          '5D BIM — cost and quantity tracking integrated into the model',
          '6D BIM — sustainability analysis and energy performance',
          '7D BIM — facility management and asset lifecycle management',
          'ISO 19650 — international BIM standards and information management',
          'BIM adoption in India — government mandates and industry trends',
          'BIM roles — BIM Coordinator, BIM Manager, BIM Modeler, VDC Engineer',
          'BIM vs CAD — why companies are switching and what it means for hiring',
        ],
        outcomes: [
          'Explain what BIM is and how its 7 dimensions are used in real projects',
          'Understand how BIM changes collaboration across architecture, engineering, and construction',
          'Identify BIM career roles and their responsibilities in professional firms',
          'Understand ISO 19650 and Indian BIM adoption trends',
          'Articulate why BIM skills are essential for employability in the AEC sector',
        ],
      },
    },
  ],
  partnerBadge: 'BIM & Architecture Software — Learn At One',
  partnerLogo: 'Learn At One × Autodesk',
},
'cafs-programs': {
  title: 'CAFS — Certified Anti-Financial Crime Specialist',
  subtitle: 'Anti-Financial Crime & AML Compliance',
  category: 'Finance',
icon: <img src={CAFS} alt="MKCL" style={{ width: '200px', height: '150px', objectFit: 'contain' }} />,    color: '#2563eb',
  color: '#1a3a6b',
  accentColor: '#4a90d9',
  description:
    'TechAngle offers the CAFS™ (Certified Anti-Financial Crime Specialist) program in association with ReTRRAC® — a UK-based consulting and learning company with over 8 years of experience in Anti-Financial Crime (AFC), Anti-Money Laundering (AML) Compliance, and Risk Management. CAFS™ is a CPD-accredited, globally recognised certification covering Money Laundering, Terrorist Financing, Sanctions, AML Compliance, Regulatory Supervision, and Practical Investigations. Financial crime compliance is one of the fastest-growing job markets globally — and CAFS™ gives you the competitive edge to break in, stand out, and advance rapidly across banking, fintech, consulting, and regulatory bodies worldwide.',
  subCourses: [
    'Module 1: Banking & Financial Services Industry and the Impact of Financial Crime',
    'Module 2: Money Laundering, Terrorist Financing, Sanctions & Proliferation Financing',
    'Module 3: FATF, US, UN, UK, EU Directives & Regional AML Regulations',
    'Module 4: Due Diligence — Risk Review & Classification, UBO & PEP',
    'Module 5: Name Screening',
    'Module 6: Practice on Different Company Types',
    'Final Assessment & CAFS™ Certification',
    'Real-World Financial Crime Case Study Project',
    'KYC/AML Review Process — Multi-Jurisdictional Coverage (EU, UK, MENA, AMER, APAC)',
    'Interview Coaching & Mock Interviews',
    'Resume Preparation to Industry Standards',
    'Access to ReTRRAC™ Job Opportunities Platform',
  ],
  benefits: [
    'CPD-accredited CAFS™ certification recognised globally across banking, fintech, and regulatory sectors',
    'Comprehensive curriculum covering AML, KYC, CTF, Sanctions, PEPs, UBO, and global regulations',
    'Extensive interview coaching with question banks, mock interviews, live cases, and group sessions',
    'Resume preparation based on industry standards to position you as a competitive candidate',
    'Access to ReTRRAC™ social media platforms where latest job opportunities are posted',
    'Personalised support to review job specifications and prepare for interviews',
    'Real-world financial crime case study project for hands-on practical experience',
    'Training by industry experts with 30+ years experience from investment banks and Fortune 500 companies',
  ],
  whyChoose: [
    'ReTRRAC® — UK-based with 8+ years of experience in AML compliance and financial crime consulting',
    'CAFS™ is CPD Certified by The CPD Certification Service — globally recognised standard',
    'Google Reviews: 4.9/5 — proven track record of career transformation',
    'Training covers multi-jurisdictional clients from EU, UK, MENA, AMER, and APAC regions',
    'Faculty with 30+ years experience from investment banks, consulting firms, and Fortune 500 companies',
    'FSB Member and Investors in People accredited — trusted, regulated training provider',
    'Programme designed for students, early-career professionals, and mid-career professionals equally',
    'Fast career progression — certified professionals move quickly into senior compliance and risk roles',
  ],
  faqs: [
    {
      question: 'What is CAFS™ and who offers it?',
      answer:
        'CAFS™ stands for Certified Anti-Financial Crime Specialist. It is offered by ReTRRAC® (Regulatory Transformation and Risk Review Consulting) — a UK-based consulting and learning company headquartered at 60 Cannon Street, London. CAFS™ is CPD-accredited and globally recognised, covering AML, KYC, CTF, Sanctions, and global regulatory frameworks.',
    },
    {
      question: 'Who should take the CAFS™ program?',
      answer:
        'CAFS™ is designed for three groups: (1) University students and recent graduates in Finance, Accounting, Banking, Business Administration, Cybersecurity, or IT. (2) Early-career professionals looking to specialise in Banking, Risk & Compliance, Audit, Consulting, or Legal & Regulatory Bodies. (3) Mid-career professionals seeking growth in Financial Crime Investigation, Compliance & Regulatory Supervision, Forensic Accounting, or Law Enforcement.',
    },
    {
      question: 'What is the duration of the CAFS™ program?',
      answer:
        'The CAFS™ program runs for 6 weeks, covering 6 comprehensive modules plus a real-world financial crime case study project and final assessment. Interview coaching and resume preparation support are included throughout.',
    },
    {
      question: 'What career opportunities does CAFS™ open?',
      answer:
        'CAFS™ certified professionals are hired across banking and financial institutions, fintech and payment services, Big 4 consulting firms (Deloitte, PwC, EY, KPMG), regulatory and government bodies (FCA, FATF, UN, EU, HM Treasury), law enforcement and intelligence agencies, and insurance and wealth management firms. Roles include AML Compliance Officer, KYC & Due Diligence Analyst, Fraud Investigator, Sanctions Specialist, Regulatory Compliance Officer, and Financial Crime Consultant.',
    },
    {
      question: 'What regions does the training cover?',
      answer:
        'CAFS™ provides comprehensive training in the KYC/AML review process including fundamentals of banking departments and their multi-jurisdictional clients from EU, UK, MENA (Middle East & North Africa), AMER (Americas), and APAC (Asia-Pacific) — making it genuinely globally applicable.',
    },
  ],
  services: [
    'CAFS™ Certification Training (CPD Accredited)',
    'KYC/AML Review Process Training',
    'Interview Coaching & Mock Interviews',
    'Resume Preparation to Industry Standards',
    'Real-World Financial Crime Case Study',
    'Access to ReTRRAC™ Job Opportunities Network',
    'Placement Guidance & Career Support',
    'Multi-Jurisdictional Compliance Training',
  ],
  curriculumTable: [
    {
      name: 'Module 1: Banking & Financial Services Industry and Financial Crime',
      level: 'foundational',
      focus: 'Industry Overview & Crime Impact',
      details: {
        description:
          'An overview of the banking and financial services sector and the pervasive impact of financial crime across its institutions. This module establishes the foundational understanding of why anti-financial crime compliance is critical in modern banking, insurance, fintech, and investment sectors.',
        duration: 'Week 1 | Part of 6-Week CAFS™ Programme',
        mode: 'Online | Live Sessions & Self-Paced Learning | ReTRRAC® Academy',
        topics: [
          'Overview of the banking and financial services sector — structure and key players',
          'Types of financial institutions: retail banks, investment banks, NBFCs, fintech, insurance',
          'Understanding financial crime risks in banking, insurance, fintech, and investment sectors',
          'The economic and reputational impact of financial crime on institutions and society',
          'Regulatory landscape overview — FCA, PRA, HMRC, FATF, FinCEN',
          'Case studies on real-world financial crime incidents and their institutional impact',
          'The role of AML, KYC, and compliance functions within financial institutions',
          'Introduction to the compliance lifecycle: onboarding, monitoring, review, and reporting',
        ],
        outcomes: [
          'Understand the structure and key players of the banking and financial services sector',
          'Identify financial crime risks specific to different types of financial institutions',
          'Explain the economic and reputational consequences of financial crime',
          'Navigate the regulatory landscape and understand the roles of key regulators',
          'Appreciate the importance of AML and KYC compliance within institutional operations',
        ],
      },
    },
    {
      name: 'Module 2: Money Laundering, Terrorist Financing, Sanctions & Proliferation Financing',
      level: 'foundational',
      focus: 'Core Financial Crime Concepts',
      details: {
        description:
          'A comprehensive deep-dive into the core concepts of financial crime — covering how money laundering works, how terrorist financing operates differently, the framework of international sanctions, and the growing threat of proliferation financing. This module builds the conceptual backbone required for all compliance practice.',
        duration: 'Week 1–2 | Part of 6-Week CAFS™ Programme',
        mode: 'Online | Live Sessions & Case Studies',
        topics: [
          'How money laundering works — the three stages: placement, layering, and integration',
          'Money laundering methods and typologies — smurfing, trade-based ML, shell companies, cryptocurrency',
          'Understanding terrorist financing — how it differs from money laundering',
          'Sources of terrorist financing funds and common financing methods',
          'Overview of international sanctions — OFAC (US), UN, EU, and UK sanctions regimes',
          'How sanctions work — asset freezes, travel bans, trade restrictions',
          'Proliferation financing — threats, risks, and regulatory response (FATF Recommendation 7)',
          'The relationship between sanctions and proliferation financing',
          'Real-world case studies on money laundering and terrorist financing typologies',
        ],
        outcomes: [
          'Explain the three stages of money laundering and identify common methods and typologies',
          'Distinguish between money laundering and terrorist financing and their different risk profiles',
          'Navigate major international sanctions regimes (OFAC, UN, EU, UK)',
          'Understand proliferation financing and its regulatory implications',
          'Apply typology knowledge to identify suspicious activities in financial transactions',
        ],
      },
    },
    {
      name: 'Module 3: FATF, US, UN, UK, EU Directives & Regional AML Regulations',
      level: 'intermediate',
      focus: 'Global Regulatory Frameworks',
      details: {
        description:
          'A thorough examination of the global AML regulatory framework — from FATF recommendations to jurisdiction-specific legislation across the US, UN, UK, and EU. This module develops the multi-jurisdictional regulatory knowledge essential for compliance roles in global financial institutions.',
        duration: 'Week 2–3 | Part of 6-Week CAFS™ Programme',
        mode: 'Online | Live Sessions & Regulatory Analysis',
        topics: [
          'Financial Action Task Force (FATF) — mandate, membership, and the 40 Recommendations',
          'FATF Mutual Evaluations and the grey/black list process',
          'US AML regulations — Bank Secrecy Act (BSA), USA PATRIOT Act, FinCEN, OFAC',
          'UN AML framework — Security Council Resolutions and UN Sanctions Committees',
          'UK AML regulations — Proceeds of Crime Act (POCA), MLR 2017, FCA, PRA, HMRC supervision',
          'EU AML Directives — 4AMLD, 5AMLD, 6AMLD, and the new EU AML Authority (AMLA)',
          'Regional AML regulations — MENA (MENAFATF), APAC (APG), AMER (GAFILAT)',
          'Compliance frameworks and enforcement actions across jurisdictions',
          'How global regulations interact in multi-jurisdictional financial crime cases',
        ],
        outcomes: [
          'Navigate the FATF framework and understand its 40 Recommendations',
          'Explain US, UN, UK, and EU AML regulatory requirements and their key differences',
          'Understand multi-jurisdictional compliance obligations for global financial institutions',
          'Identify enforcement actions and consequences of regulatory non-compliance',
          'Apply regional regulatory knowledge to MENA, APAC, and AMER compliance scenarios',
        ],
      },
    },
    {
      name: 'Module 4: Due Diligence — Risk Review & Classification, UBO & PEP',
      level: 'intermediate',
      focus: 'KYC, CDD, EDD, UBO & PEP',
      details: {
        description:
          'The most operationally intensive module of the CAFS™ programme — covering Customer Due Diligence (CDD), Enhanced Due Diligence (EDD), risk classification, Ultimate Beneficial Ownership (UBO) identification, and the management of Politically Exposed Persons (PEPs). This is where compliance theory meets day-to-day practice.',
        duration: 'Week 3–4 | Part of 6-Week CAFS™ Programme',
        mode: 'Online | Live Sessions, Practical Exercises & Case Studies',
        topics: [
          'Customer Due Diligence (CDD) — principles, process, and documentation requirements',
          'Enhanced Due Diligence (EDD) — triggers, process, and additional information requirements',
          'Simplified Due Diligence (SDD) — when it applies and its limitations',
          'Risk classification — defining low, medium, and high-risk customers',
          'Customer Risk Assessment (CRA) — methodology, risk factors, and scoring',
          'Ultimate Beneficial Ownership (UBO) — definition, identification, verification, and challenges',
          'Complex ownership structures — shells, nominees, trusts, and layered corporate structures',
          'Politically Exposed Persons (PEPs) — categories (domestic, foreign, international organisation)',
          'Relatives and Close Associates (RCAs) of PEPs — identification and enhanced monitoring',
          'Source of Funds (SoF) and Source of Wealth (SoW) — collection and plausibility assessment',
          'Ongoing monitoring requirements — trigger events and periodic review cycles',
          'Practical case studies: onboarding high-risk clients, identifying UBOs in complex structures',
        ],
        outcomes: [
          'Conduct CDD and EDD for a range of customer types and risk profiles',
          'Apply risk classification methodologies to accurately rate customer risk',
          'Identify Ultimate Beneficial Owners across simple and complex corporate structures',
          'Manage PEPs and RCAs in accordance with regulatory requirements',
          'Assess Source of Funds and Source of Wealth for plausibility and red flags',
          'Design and manage ongoing monitoring programmes for high-risk customers',
        ],
      },
    },
    {
      name: 'Module 5: Name Screening',
      level: 'intermediate',
      focus: 'Sanctions, PEP & Adverse Media Screening',
      details: {
        description:
          'A focused practical module on name screening — covering the technical and judgement-based skills required to screen customers against watchlists, sanctions lists, PEP databases, and adverse media sources. Develops the discounting methodology critical to reducing false positives while ensuring no true matches are missed.',
        duration: 'Week 4 | Part of 6-Week CAFS™ Programme',
        mode: 'Online | Hands-On Screening Practice',
        topics: [
          'Introduction to name screening — purpose, regulatory requirement, and process overview',
          'Types of screening: sanctions screening, PEP screening, adverse media screening',
          'Major watchlists and sanctions lists — OFAC SDN, UN Consolidated List, EU & UK lists, Interpol',
          'How name screening technology works — fuzzy matching, transliteration, and scoring',
          'Understanding false positives and false negatives in screening results',
          'Discounting methodology — how to assess, document, and close out alerts appropriately',
          'Adverse media screening — sources, methodology, and relevance assessment',
          'Continuous monitoring vs. point-in-time screening',
          'Hands-on practice with the screening process using real-world alert scenarios',
          'Escalation procedures — when to escalate alerts and how to document decisions',
        ],
        outcomes: [
          'Understand the purpose and regulatory basis for name screening in AML compliance',
          'Navigate major sanctions lists and watchlists used in global financial institutions',
          'Apply discounting methodology to resolve alerts efficiently and compliantly',
          'Conduct adverse media screening and assess relevance to customer risk',
          'Make defensible, well-documented screening decisions under institutional and regulatory scrutiny',
        ],
      },
    },
    {
      name: 'Module 6: Practice on Different Company Types',
      level: 'advanced',
      focus: 'AML/KYC for Corporate & Complex Entities',
      details: {
        description:
          'The most practically complex module — applying CDD, EDD, UBO identification, and risk assessment to a wide range of legal entity types. Each entity type presents unique ownership structures, documentation requirements, and inherent risks. This module builds the competence to handle any client type encountered in professional compliance roles.',
        duration: 'Week 5 | Part of 6-Week CAFS™ Programme',
        mode: 'Online | Live Case Studies & Practical Entity Reviews',
        topics: [
          'Private companies — ownership structure, UBO identification, documentation, and risk assessment',
          'Listed companies — exchange-listed entities, regulatory filings, and reduced CDD approach',
          'Regulated financial institutions — correspondent banking, financial institution due diligence',
          'Government companies and state-owned enterprises — sovereign risk and PEP considerations',
          'Trusts — trustee, settlor, beneficiary identification and the complexities of trust structures',
          'Charities and foundations — abuse risks, beneficial ownership challenges, and oversight bodies',
          'Funds and Special Purpose Vehicles (SPVs) — fund structure, manager due diligence',
          'Cryptocurrency and Virtual Asset Service Providers (VASPs) — FATF Travel Rule, VASP registration',
          'Shell companies and nominee structures — red flag identification and enhanced scrutiny',
          'Case studies: conducting CDD on a trust, a VASP, a charity, and a complex SPV structure',
        ],
        outcomes: [
          'Conduct CDD and EDD for private companies, listed entities, trusts, charities, and funds',
          'Identify UBOs across complex and layered corporate and trust structures',
          'Apply appropriate due diligence to regulated financial institutions and government entities',
          'Understand the unique compliance risks presented by VASPs and cryptocurrency businesses',
          'Handle shell company and nominee structure scenarios with appropriate enhanced scrutiny',
          'Produce compliant, well-documented entity reviews across all major legal entity types',
        ],
      },
    },
    {
      name: 'Final Assessment & Real-World Financial Crime Case Study',
      level: 'advanced',
      focus: 'Assessment, Certification & Project',
      details: {
        description:
          'The final stage of the CAFS™ programme — combining a formal assessment to evaluate knowledge and application of financial crime prevention strategies with a practical real-world financial crime case study project. Successful completion results in the award of the Certified Anti-Financial Crime Specialist (CAFS™) certification.',
        duration: 'Week 6 | Part of 6-Week CAFS™ Programme',
        mode: 'Online | Individual Assessment & Project Submission',
        topics: [
          'Final assessment — evaluating knowledge across all 6 CAFS™ modules',
          'Application questions — testing practical compliance judgement and decision-making',
          'Real-world financial crime case study project covering AML/KYC concepts from the full programme',
          'Case study elements: entity risk assessment, screening alert review, EDD documentation',
          'Red flag identification and suspicious activity reporting (SAR) writing practice',
          'CAFS™ certification award upon successful completion',
          'CAFS™ certification validation and CPD accreditation confirmation',
          'Career guidance: navigating the compliance job market with CAFS™ credentials',
        ],
        outcomes: [
          'Demonstrate comprehensive knowledge of anti-financial crime compliance across all programme modules',
          'Apply practical AML/KYC skills to a realistic financial crime case study scenario',
          'Produce a professional SAR and entity risk assessment as part of the case study project',
          'Achieve the Certified Anti-Financial Crime Specialist (CAFS™) designation',
          'Receive CPD-accredited certification recognised by employers globally',
          'Access the ReTRRAC® network for job opportunities and ongoing professional development',
        ],
      },
    },
    {
      name: 'Interview Coaching & Career Support',
      level: 'foundational',
      focus: 'Interview Preparation & Job Readiness',
      details: {
        description:
          'A dedicated career support component integrated throughout the CAFS™ programme — covering interview preparation, resume building, and job market navigation. Designed to convert CAFS™ knowledge into employment in compliance and financial crime roles.',
        duration: 'Throughout the 6-Week Programme',
        mode: 'Online | Group Sessions, Mock Interviews & 1-on-1 Support',
        topics: [
          'Question banks covering common AML, KYC, CDD, sanctions, and financial crime interview questions',
          'Mock interviews — live practice with feedback from experienced compliance professionals',
          'Group practice sessions — peer learning and collaborative interview preparation',
          'Resume preparation — industry-standard CV writing for compliance and financial crime roles',
          'How to present CAFS™ certification on a CV and LinkedIn profile',
          'Personalised support to review specific job descriptions and tailor applications',
          'Understanding what compliance employers look for in entry-level and experienced candidates',
          'Access to ReTRRAC™ job opportunities platform and social media network',
          'Career pathways overview — AML, KYC, sanctions, fraud, forensic accounting, consulting',
        ],
        outcomes: [
          'Confidently answer AML and KYC interview questions using programme knowledge',
          'Present a professionally written, industry-standard resume for compliance roles',
          'Navigate the compliance job market with clarity and confidence',
          'Access live job opportunities through the ReTRRAC™ network',
          'Understand career progression pathways from entry-level to senior compliance roles',
        ],
      },
    },
  ],
  partnerBadge: 'In Association With ReTRRAC® — UK Anti-Financial Crime Specialists',
  partnerLogo: 'ReTRRAC® × CAFS™',
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
  { name: 'CGIB Programs', slug: 'cgib-programs' },
  { name: 'BIM Programs', slug: 'bim-programs' },
{ name: 'CAFS Programs', slug: 'cafs-programs' },];

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

// ─── BOARD OF ADVISORS COMPONENT ───────────────────────────────────────────
const BoardOfAdvisors = ({ color, advisors }) => {
  if (!advisors || advisors.length === 0) {
    return null;
  }

  return (
    <div className="cgib-sec">
      <h2 className="cgib-sec-title">
        <span className="cd-title-dot" style={{ background: color }} />
        Board of Advisors
      </h2>

      <div className="cgib-advisors-grid">
        {advisors.map((advisor, index) => (
          <div className="cgib-advisor-card" key={index}>
            <div className="cgib-advisor-img-container">
              <img
                src={advisor.image}
                alt={advisor.name}
                className="cgib-advisor-img"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.querySelector('.cgib-advisor-fallback').style.display = 'flex';
                }}
              />
              <div className="cgib-advisor-fallback">
                {advisor.name.split(' ').map(n => n[0]).join('')}
              </div>
            </div>

            <div className="cgib-advisor-info">
              <h3>{advisor.name}</h3>
              <p className="cgib-advisor-title">{advisor.title}</p>
              <p className="cgib-advisor-desc">{advisor.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
// ─── CGIB EXTRA SECTIONS COMPONENT ──────────────────────────────────────────
// Place this BEFORE the CourseDetail function definition
// Also add the CSS from cgib-extra.css to the bottom of CourseDetail.css

const CGIBExtraSections = ({ color, advisors }) => {
  return (
    <div className="cgib-extra">

      {/* 1 — Who Are Investment Bankers */}
      <div className="cgib-sec">
        <h2 className="cgib-sec-title">
          <span className="cd-title-dot" style={{ background: color }} />
          Who Are Investment Bankers
        </h2>
        <div className="cgib-notes-grid">
          <div className="cgib-note">
            <div className="cgib-note-logo">Investopedia</div>
            <p>Investment bankers are key players in corporate finance, raising capital and driving billion-dollar deals. Their work shapes global markets, making it one of the most prestigious and high-impact careers in finance.</p>
          </div>
          <div className="cgib-note">
            <div className="cgib-note-logo">DBS Bank</div>
            <p>Investment bankers fuel business growth through capital raising, trading, and M&A advisory. The career offers global exposure, high earnings, and the chance to work on transformative deals that move economies.</p>
          </div>
          <div className="cgib-note">
            <div className="cgib-note-logo">McKinsey & Co.</div>
            <p>Consultancy assists major investment banks and capital markets institutions with strategy, transformation, and operations, emphasizing the broad functional demands within investment banking.</p>
          </div>
        </div>
        <div className="cgib-highlight-box">
          <strong>CGIB™ (Chartered Global Investment Banker)</strong> — India's first dedicated chartered-level qualification in global investment banking, offered by the Investment Banking Foundation and Vantage Knowledge Academy. It bridges academic knowledge with real-world application, emphasizing ethical practices and global market dynamics.
        </div>
      </div>

      {/* 2 — Why Investment Bankers (Market Stats) */}
      <div className="cgib-sec">
        <h2 className="cgib-sec-title">
          <span className="cd-title-dot" style={{ background: color }} />
          Why Investment Banking — Market Opportunity
        </h2>
        <div className="cgib-market-strip">
          <div className="cgib-market-card">
            <span className="cgib-market-num">USD 7.8B</span>
            <span className="cgib-market-label">India's financial sector value (2022)</span>
          </div>
          <div className="cgib-market-card">
            <span className="cgib-market-num">USD 12.4B</span>
            <span className="cgib-market-label">Projected value by 2027 (9.2% CAGR)</span>
          </div>
          <div className="cgib-market-card">
            <span className="cgib-market-num">USD 142B</span>
            <span className="cgib-market-label">Global industry expansion in 2024</span>
          </div>
        </div>
      </div>

      {/* 3 — CGIB vs Other Qualifications */}
      <div className="cgib-sec">
        <h2 className="cgib-sec-title">
          <span className="cd-title-dot" style={{ background: color }} />
          CGIB vs Other Professional Qualifications
        </h2>
        <div className="cgib-others-grid">
          <div className="cgib-other-card">
            <div className="cgib-other-name">CA — Chartered Accountant</div>
            <div className="cgib-other-by">Offered by: ICAI, India</div>
            <div className="cgib-other-desc">Trains professionals in accounting, auditing, taxation, corporate laws, and financial management. CAs ensure compliance, handle audits, and advise on strategic financial decisions.</div>
          </div>
          <div className="cgib-other-card">
            <div className="cgib-other-name">CMA — Certified Management Accountant</div>
            <div className="cgib-other-by">Offered by: IMA, USA</div>
            <div className="cgib-other-desc">Focuses on management accounting, cost control, budgeting, performance management, and strategic financial planning. CMAs work in management roles helping companies improve performance.</div>
          </div>
          <div className="cgib-other-card">
            <div className="cgib-other-name">CFA — Chartered Financial Analyst</div>
            <div className="cgib-other-by">Offered by: CFA Institute, USA</div>
            <div className="cgib-other-desc">Globally recognized program. CFA holders typically work as investment and financial analysts, equity research, asset management, portfolio management, and ethics professionals.</div>
          </div>
          <div className="cgib-other-card">
            <div className="cgib-other-name">ACCA — Chartered Certified Accountants</div>
            <div className="cgib-other-by">Offered by: ACCA, UK</div>
            <div className="cgib-other-desc">International qualification covering financial reporting, audit, taxation, and management accounting. ACCA members are recognized globally and often work in multinational firms.</div>
          </div>
        </div>
        <div className="cgib-highlight-box">
          <strong>CGIB is offered by Investment Bankers Foundation</strong> — a non-profit organisation. CGIB is the <strong>only chartered qualification to become an Investment Banker</strong>, specializing in Financial Markets, Mergers and Acquisitions, Takeovers, Valuations, Regulatory Frameworks, REITs, Insolvency and other topics.
        </div>
      </div>

      {/* 4 — Who Can Join */}
      <div className="cgib-sec">
        <h2 className="cgib-sec-title">
          <span className="cd-title-dot" style={{ background: color }} />
          Who Can Join This Program
        </h2>
        <div className="cgib-who-grid">
          <div className="cgib-who-card">
            <span className="cgib-who-icon">🎓</span>
            <div className="cgib-who-title">University Students</div>
            <div className="cgib-who-desc">Students looking for a global career in Investment Banking, Finance, Banking, Insolvency and related fields.</div>
          </div>
          <div className="cgib-who-card">
            <span className="cgib-who-icon">💼</span>
            <div className="cgib-who-title">Working Executives</div>
            <div className="cgib-who-desc">Executives looking for a career shift and wanting to establish or enhance their credentials in investment banking.</div>
          </div>
          <div className="cgib-who-card">
            <span className="cgib-who-icon">🚀</span>
            <div className="cgib-who-title">Entrepreneurs</div>
            <div className="cgib-who-desc">Individuals who want to change their professional focus and tap into financial markets and investment opportunities.</div>
          </div>
        </div>
      </div>

      {/* 5 — Exemptions */}
      <div className="cgib-sec">
        <h2 className="cgib-sec-title">
          <span className="cd-title-dot" style={{ background: color }} />
          Exemptions for Professional Qualification Holders
        </h2>
        <p className="cgib-exempt-intro">Holders of the following professional qualifications get direct exemption for <strong style={{ color: '#4db8ff' }}>CGIB Level I</strong> and can enter the program directly at Level II:</p>
        <div className="cgib-exempt-grid">
          <div className="cgib-exempt-card">
            <span className="cgib-exempt-abbr">CA</span>
            <span className="cgib-exempt-full">Chartered Accountant — ICAI, India</span>
          </div>
          <div className="cgib-exempt-card">
            <span className="cgib-exempt-abbr">CFA</span>
            <span className="cgib-exempt-full">Chartered Financial Analyst — CFA Institute, USA</span>
          </div>
          <div className="cgib-exempt-card">
            <span className="cgib-exempt-abbr">CMA</span>
            <span className="cgib-exempt-full">Certified Management Accountant — IMA, USA</span>
          </div>
          <div className="cgib-exempt-card">
            <span className="cgib-exempt-abbr">CS</span>
            <span className="cgib-exempt-full">Company Secretary — ICSI, India</span>
          </div>
        </div>
      </div>

      {/* 6 — Qualification Process */}
      <div className="cgib-sec">
        <h2 className="cgib-sec-title">
          <span className="cd-title-dot" style={{ background: color }} />
          The Qualification Process
        </h2>
        <div className="cgib-process-grid">
          <div className="cgib-process-card">
            <span className="cgib-process-num">01</span>
            <span className="cgib-process-label">Enrollment</span>
            <div className="cgib-process-desc">University Students of Second Year and above can enroll for the Program.</div>
          </div>
          <div className="cgib-process-card">
            <span className="cgib-process-num">02</span>
            <span className="cgib-process-label">Training</span>
            <div className="cgib-process-desc">Vantage Knowledge Academy is the only official training provider by the Investment Banking Foundation.</div>
          </div>
          <div className="cgib-process-card">
            <span className="cgib-process-num">03</span>
            <span className="cgib-process-label">Examination</span>
            <div className="cgib-process-desc">Total three levels of examination conducted after every 6 months.</div>
          </div>
          <div className="cgib-process-card">
            <span className="cgib-process-num">04</span>
            <span className="cgib-process-label">Work Experience</span>
            <div className="cgib-process-desc">A minimum of 12 months of work experience is required by all candidates.</div>
          </div>
          <div className="cgib-process-card">
            <span className="cgib-process-num">05</span>
            <span className="cgib-process-label">Chartered</span>
            <div className="cgib-process-desc">On clearing all three levels and completing work experience, a Chartered Certificate is awarded.</div>
          </div>
          <div className="cgib-process-card">
            <span className="cgib-process-num">06</span>
            <span className="cgib-process-label">Membership</span>
            <div className="cgib-process-desc">All chartered holders become members of the global Investment Banking Foundation.</div>
          </div>
        </div>
      </div>

      {/* 7 — Career Outcomes */}
      <div className="cgib-sec">
        <h2 className="cgib-sec-title">
          <span className="cd-title-dot" style={{ background: color }} />
          Career Outcomes
        </h2>
        <div className="cgib-careers-wrap">
          {[
            'Merchant Banker', 'IPO Consultant', 'Underwriter', 'Valuer Specialist',
            'M&A Specialist', 'Credit Analyst', 'Financial Analyst', 'Risk Analyst',
            'Insolvency Consultant', 'Investment Consultant'
          ].map((c, i) => (
            <span className="cgib-career-pill-lg" key={i}>{c}</span>
          ))}
        </div>
      </div>

      {/* 8 — Why Become a Charteredholder */}
      <div className="cgib-sec">
        <h2 className="cgib-sec-title">
          <span className="cd-title-dot" style={{ background: color }} />
          Why Become a CGIB Charteredholder?
        </h2>
        <div className="cgib-why-grid">
          {[
            { icon: '🏆', title: 'Mark of Distinction', desc: 'Stand out with qualifications covering a complete range of topics in Investment Banking and the skills needed to excel globally.' },
            { icon: '📖', title: 'Exam Exemptions', desc: 'Use your CA, CS, CMA or CFA status to enter and complete the CGIB Program directly at Level II.' },
            { icon: '🎓', title: 'Continuing Education', desc: 'Demonstrate your commitment to globally relevant performance and skills in the investment banking domain.' },
            { icon: '🌐', title: 'Global Gateway', desc: 'Gain recognition from global investment bankers who value CGIB and its internationally recognized credentials.' },
            { icon: '💡', title: 'Deep Insights', desc: 'Add a deeper level of understanding to performance and results in financial markets and corporate advisory.' },
            { icon: '🤝', title: 'Build Client Trust', desc: 'Build client trust from all segments of the industry by understanding and explaining financial results and strategies.' },
          ].map((item, i) => (
            <div className="cgib-why-card" key={i}>
              <div className="cgib-why-icon">{item.icon}</div>
              <div className="cgib-why-content">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 9 — Vantage Knowledge Academy */}
      <div className="cgib-sec">
        <h2 className="cgib-sec-title">
          <span className="cd-title-dot" style={{ background: color }} />
          Vantage Knowledge Academy — Trusted Training Partner
        </h2>
        {/* <div className="cgib-vantage-stats">
          {[
            { num: '12k+', label: 'Students Placed' },
            { num: '65+', label: 'Faculty Members' },
            { num: '85%', label: 'Pass Rate' },
            { num: '5.0', label: 'Google Reviews' },
            { num: '16+', label: 'Programs Offered' },
          ].map((s, i) => (
            <div className="cgib-vstat" key={i}>
              <span className="cgib-vstat-num">{s.num}</span>
              <span className="cgib-vstat-label">{s.label}</span>
            </div>
          ))}
        </div> */}
        <div className="cgib-awards-grid">
          {[
            { icon: '📈', text: 'Proudly listed Company on BSE since 1995' },
            { icon: '🏅', text: 'Approved Prep Provider Partner of the CMT Association (USA)' },
            { icon: '🎓', text: 'Approved Career Guidance & Counsellor' },
            { icon: '⭐', text: 'First Recognised Education Provider for CWM — Chartered Wealth Manager' },
          ].map((a, i) => (
            <div className="cgib-award-card" key={i}>
              <span className="cgib-award-icon">{a.icon}</span>
              <div className="cgib-award-text">{a.text}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 11 — Board of Advisors */}
      <BoardOfAdvisors color={color} advisors={advisors} />

      {/* 10 — Placements */}
      <div className="cgib-sec">
        <h2 className="cgib-sec-title">
          <span className="cd-title-dot" style={{ background: color }} />
          Placements in Leading Companies
        </h2>
        <div className="cgib-placements-logo-grid">
          {[
            { name: 'Goldman Sachs', domain: 'goldmansachs.com', logoPath: '/assets/Goldman.png' },
            { name: 'Morgan Stanley', domain: 'morganstanley.com', logoPath: '/assets/morgan.jpg' },
            { name: 'Citi', domain: 'citi.com', logoPath: '/assets/CITI.png' },
            { name: 'HSBC', domain: 'hsbc.com', logoPath: '/assets/HSBC.jpg' },
            { name: 'JPMorgan Chase', domain: 'jpmorganchase.com', logoPath: '/assets/JPMorgan.png' },
            { name: 'Deutsche Bank', domain: 'db.com', logoPath: '/assets/Deutsche.jpg' },
            { name: 'Edelweiss', domain: 'edelweissfin.com', logoPath: '/assets/Edelweiss.png' },
            { name: 'UBS', domain: 'ubs.com', logoPath: '/assets/UBS.png' },
            { name: 'Credit Suisse', domain: 'credit-suisse.com', logoPath: '/assets/Credits.png' },
            { name: 'Barclays', domain: 'barclays.com', logoPath: '/assets/Barclays.png' },
            { name: 'Nomura', domain: 'nomura.com', logoPath: '/assets/Nomura.png' },
            { name: 'BNP Paribas', domain: 'bnpparibas.com', logoPath: '/assets/BNP.png' },
            { name: 'Axis Bank', domain: 'axisbank.com', logoPath: '/assets/Axis.png' },
            { name: 'ICICI Bank', domain: 'icicibank.com', logoPath: '/assets/ICICI.png' },
            { name: 'Arihant Capital', domain: 'arihantcapital.com', logoPath: '/assets/Arihant.jpeg' },
            { name: 'Bank of Maharashtra', domain: 'bankofmaharashtra.in', logoPath: '/assets/Maharashtra.png' },
            { name: 'Canara Bank', domain: 'canarabank.com', logoPath: '/assets/Canara.png' },
            { name: 'BOBCAPS', domain: 'bobcaps.in', logoPath: '/assets/Bob.png' },
            { name: 'IFCI Limited', domain: 'ifciltd.com', logoPath: '/assets/IFCI.png' },
            { name: 'JM Financial', domain: 'jmfl.com', logoPath: '/assets/JM.png' },
          ].map((bank, i) => (
            <div className="cgib-logo-card" key={i}>
              <img
                src={bank.logoPath}
                alt={bank.name}
                className="cgib-logo-img"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span className="cgib-logo-fallback">{bank.name}</span>
            </div>
          ))}
        </div>
        <p className="cgib-placements-more">& more....</p>
      </div>
    </div>
  );
};

// ─── CURRICULUM ROW WITH EXPANDABLE DETAILS ──────────────────────────────────

const CurriculumRow = ({ row, index, color }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <tr
        className={`cd-curriculum-row ${expanded ? 'cd-row-expanded' : ''}`}
        onClick={() => setExpanded(!expanded)}
        style={{ cursor: 'pointer' }}
      >
        <td className="cd-col-no">{index + 1}</td>
        <td className="cd-col-name">{row.name}</td>
        <td>
          <span className={`cd-level-pill ${row.level}`}>
            {row.level.charAt(0).toUpperCase() + row.level.slice(1)}
          </span>
        </td>
        <td>{row.focus}</td>
        <td className="cd-col-expand">
          <span
            className="cd-expand-icon"
            style={{ color: expanded ? color : '#9ca3af' }}
          >
            {expanded ? '▲' : '▼'}
          </span>
        </td>
      </tr>
      {expanded && row.details && (
        <tr className="cd-detail-row">
          <td colSpan={5} className="cd-detail-cell">
            <div className="cd-detail-content">
              {row.details.description && (
                <p className="cd-detail-desc">{row.details.description}</p>
              )}
              <div className="cd-detail-grid">
                {row.details.topics && (
                  <div className="cd-detail-section">
                    <h4 className="cd-detail-heading" style={{ color }}>
                      📚 Topics Covered
                    </h4>
                    <ul className="cd-detail-list">
                      {row.details.topics.map((t, i) => (
                        <li key={i}>
                          <span className="cd-detail-dot" style={{ background: color }} />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {row.details.outcomes && (
                  <div className="cd-detail-section">
                    <h4 className="cd-detail-heading" style={{ color }}>
                      🎯 Learning Outcomes
                    </h4>
                    <ul className="cd-detail-list">
                      {row.details.outcomes.map((o, i) => (
                        <li key={i}>
                          <span className="cd-detail-dot" style={{ background: color }} />
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              {row.details.duration && (
                <div className="cd-detail-meta">
                  <span>⏱ Duration: <strong>{row.details.duration}</strong></span>
                  {row.details.mode && (
                    <span>🖥 Mode: <strong>{row.details.mode}</strong></span>
                  )}
                </div>
              )}
            </div>
          </td>
        </tr>
      )}
    </>
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
            {/* <div className="cd-card" ref={subCoursesRef}>
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
            </div> */}
            {/* Curriculum Table */}
            {/* Curriculum Table */}
            {course.curriculumTable && (
              <div className="cd-card">
                <h2 className="cd-section-title">
                  <span className="cd-title-dot" style={{ background: course.color }} />
                  Program Curriculum
                </h2>
                <div className="cd-table-wrap">
                  <table className="cd-curriculum-table">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Course / Module Name</th>
                        <th>Level</th>
                        <th>Focus Area</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {course.curriculumTable.map((row, i) => (
                        <CurriculumRow key={i} row={row} index={i} color={course.color} />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            {/* CGIB Extra Sections */}
            {slug === 'cgib-programs' && (
              <CGIBExtraSections color={course.color} advisors={course.advisors} />
            )}

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