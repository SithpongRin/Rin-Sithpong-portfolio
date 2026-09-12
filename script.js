/**
 * RIN SITHPONG — PORTFOLIO APPLICATION JAVASCRIPT
 * Pure Vanilla ES6+ without external libraries or frameworks.
 * Features:
 *  - Light / Dark Theme Controller (with LocalStorage & System Detection)
 *  - English ⇄ Khmer Bilingual i18n Switcher (with LocalStorage persistence)
 *  - Sticky Navbar & Reading Progress Indicator
 *  - Mobile Drawer Navigation with auto-close
 *  - IntersectionObserver ScrollSpy (Active Navigation Link)
 *  - IntersectionObserver Scroll Reveal Animations
 *  - Interactive Client-side Form Validation & Submission Feedback
 *  - Floating Back-to-Top Button
 *  - Strict Zero-Emoji Rule across all text and UI
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. BILINGUAL TRANSLATIONS DICTIONARY (EN / KM)
     ========================================================================== */
  const translations = {
    en: {
      skip_to_content: "Skip to main content",
      logo_subtitle: "Math & Physics Educator",
      
      // Nav links
      nav_about: "About",
      nav_skills: "Skills",
      nav_experience: "Experience",
      nav_education: "Education",
      nav_projects: "Projects",
      nav_mentors: "Mentors",
      nav_contact: "Contact",

      // Hero
      hero_badge: "Appointed State Teacher • Regional Teacher Training Center (RTTC), Kandal",
      hero_greeting: "Hello, I am",
      hero_name: "RIN SITHPONG",
      hero_role: "Lower Secondary Teacher (Math & Physics)",
      hero_intro: "Certified state teacher in Mathematics and Physics from Regional Teacher Training Center (RTTC), Kandal, continuing mathematics at CUS, and creator of <a href='https://kruhub-47766.firebaseapp.com/' target='_blank' rel='noopener noreferrer' class='inline-link'>KruHub</a>. Passionate about using AI and digital tools to help secondary students learn STEM with confidence, curiosity, and joy.",
      tag_kruhub: "Creator of KruHub (Firebase App)",
      tag_math_physics: "Math & Physics Specialist",
      tag_digital_pedagogy: "Digital STEM Pedagogy",
      tag_trilingual: "Khmer • English • French",
      hero_btn_projects: "Explore Projects",
      hero_btn_contact: "Get In Touch",
      hero_download_cv: "Resume",
      badge_appointed: "State Appointed",
      badge_appointed_sub: "Damnak Pring School",
      badge_rttc: "RTTC Kandal",
      badge_rttc_sub: "Certified Teacher",

      // About
      about_subtitle: "Background & Passion",
      about_title: "About Me",
      about_lead: "Transforming STEM Education Through Conceptual Clarity & Digital Innovation.",
      about_p1: "I am Sithpong, a certified Lower Secondary Teacher in Mathematics and Physics, trained at Regional Teacher Training Center (RTTC), Kandal and officially appointed as a state educator to Damnak Pring Lower Secondary School in Ponhea Lueu, Kandal Province. Beyond classroom teaching, I created the <a href='https://kruhub-47766.firebaseapp.com/' target='_blank' rel='noopener noreferrer' class='inline-link'>KruHub</a> web app by leveraging AI tools to help educators manage rosters, attendance, and scores efficiently.",
      about_p2: "In my teaching practice, I prioritize genuine student understanding above all else, encouraging active questions, reasoning, and practical problem-solving. By combining higher mathematics from CUS, foundational computing from CADT (Linear Algebra, Probability & Statistics, Discrete Mathematics, IT Essentials, and C Programming), and modern AI capabilities, I created the KruHub web app and regularly leverage digital tools to make secondary STEM lessons interactive, practical, and enjoyable for students.",
      about_p3: "With a multilingual foundation in Khmer, English (B2 level), and a French Bilingual Baccalaureate, I strive to inspire secondary students to develop critical thinking, problem-solving skills, and a genuine curiosity for scientific discovery.",
      about_btn_cv: "Download Official Resume",
      about_btn_exp: "View Experience",

      // Info Card
      info_title: "Personal Information",
      info_name_lbl: "Full Name:",
      info_name_val: "Mr. RIN SITHPONG (រិន សិទ្ធិពង្ស)",
      info_role_lbl: "Current Role:",
      info_role_val: "Lower Secondary Teacher (Math & Physics)",
      info_school_lbl: "Appointment:",
      info_school_val: "Damnak Pring Lower Secondary School",
      info_location_lbl: "Location:",
      info_location_val: "Prek Ruessei, Ta Khmau, Kandal, Cambodia",
      info_degree_lbl: "Academic Focus:",
      info_degree_val: "B.Math (CUS) • RTTC Kandal • Foundation Year (CADT Y1) • Bac II (Grade B)",
      info_languages_lbl: "Languages:",
      info_languages_val: "Khmer (Native) • English (B2) • French (Bilingual Bac)",
      info_interests_lbl: "Interests:",
      info_interests_val: "KruHub Web App, AI (Antigravity, Codex), STEM Education, GeoGebra",
      cred_title: "National Teaching License",
      cred_desc: "Certified by the Ministry of Education, Youth and Sport (MoEYS) via Regional Teacher Training Center (RTTC), Kandal.",

      // Skills
      skills_subtitle: "Core Competencies",
      skills_title: "Skills & Expertise",
      cat_pedagogy_title: "Teaching & Pedagogy",
      cat_pedagogy_desc: "Student-centered methodologies, interactive instruction, and national curriculum mastery for Grades 7–9.",
      sk_math: "Secondary Mathematics",
      sk_phys: "Secondary Physics",
      sk_lesson: "Structured Lesson Planning",
      sk_assess: "Formative & Summative Assessment",
      sk_mgmt: "Classroom Management",
      sk_exam: "National Exam Preparation",

      cat_edtech_title: "EdTech & Virtual Classrooms",
      cat_edtech_desc: "Leveraging digital tools to create dynamic, interactive, and accessible learning experiences for remote and hybrid settings.",
      sk_virtual: "Zoom & Google Meet Classrooms",
      sk_telegram: "Telegram Learning Communities",
      sk_geogebra: "Interactive STEM Simulations",
      sk_worksheets: "Digital Educational Worksheets",
      sk_slides: "Multimedia Slide Presentations",
      sk_online_eval: "Digital Quizzes & Feedback",

      cat_tech_title: "Computational Foundation & Applied AI",
      cat_tech_desc: "Solid foundation in mathematics and computing from CADT, combined with practical use of AI tools (such as Antigravity and Codex) to build KruHub and streamline everyday teaching.",
      sk_msoffice: "Microsoft Office Suite (Word, Excel, PPT)",
      sk_grades: "Student Grade Tracking & Analytics",
      sk_algo: "Linear Algebra & Applied Statistics",
      sk_python: "C Programming (Fundamental Algorithms)",
      sk_data: "AI Tools (Antigravity, Codex & Teaching Aids)",

      cat_leadership_title: "Communication & Languages",
      cat_leadership_desc: "Strong interpersonal skills, professional teaching ethics, and dedicated academic mentoring for secondary students.",
      sk_km: "Khmer (Native)",
      sk_en: "English (B2 Level)",
      sk_fr: "French (Bilingual Baccalaureate)",
      sk_mentor: "Student Academic Mentoring",
      sk_collab: "Team Collaboration & Professional Ethics",
      sk_time: "Instructional Time Management",

      // Experience
      exp_subtitle: "Career Milestones",
      exp_title: "Teaching Experience",
      exp1_duration: "Dec 2025 – Mar 2026",
      exp1_location: "Ta Khmau, Kandal",
      exp1_role: "Teaching Intern — Mathematics & Physics",
      exp1_org: "Hun Sen Serypheap High School",
      exp1_desc: "Conducted comprehensive Mathematics and Physics instruction for secondary students in accordance with the national curriculum. Designed structured lesson plans, interactive worksheets, and guided exercises. Fostered collaborative group work and systematically evaluated student academic progress.",

      exp2_duration: "Nov 2024 – Aug 2025",
      exp2_location: "Ta Khmau, Kandal",
      exp2_role: "Teaching Intern — Secondary Education",
      exp2_org: "Hun Sen TaKhmau High School",
      exp2_desc: "Assisted senior educator mentors in delivering secondary Mathematics and Physics classes across two pedagogical terms. Applied student-centered methodologies, managed classroom dynamics, performed homework assessments, and provided individualized academic support to students requiring reinforcement.",

      exp3_duration: "2023 – 2025",
      exp3_location: "Remote / Online",
      exp3_role: "Online Mathematics Educator (Part-Time)",
      exp3_org: "Independent Educational Practice",
      exp3_desc: "Delivered interactive online Mathematics tutoring sessions via Zoom, Google Meet, and Telegram. Developed digital instructional slides, problem-solving rubrics, and practice exam simulations to help secondary students build strong mathematical skills.",

      // Education
      edu_subtitle: "Academic Foundation",
      edu_title: "Education & Credentials",
      edu1_year: "Nov 2023 – Present",
      edu1_degree: "Bachelor of Mathematics",
      edu1_school: "Cambodia University of Specialties (CUS)",
      edu1_location: "Phnom Penh, Cambodia",
      edu1_desc: "Pursuing advanced mathematical analysis, pure mathematics, algebra, calculus, geometry, and applied mathematical modeling to deepen pedagogical mastery.",

      edu2_year: "Nov 2024 – Jun 2026",
      edu2_degree: "Specialized Teaching Certificate (Lower Secondary Math & Physics)",
      edu2_school: "Regional Teacher Training Center (RTTC), Kandal",
      edu2_location: "Kandal Province, Cambodia",
      edu2_desc: "National professional pedagogical training covering STEM education, classroom leadership, and lesson delivery from Regional Teacher Training Center (RTTC), Kandal. Appointed as an official state teacher to Damnak Pring Lower Secondary School.",

      edu3_year: "Nov 2023 – Aug 2024",
      edu3_degree: "Foundation Studies in Digital Technology (Year 1 Completed)",
      edu3_school: "Cambodia Academy of Digital Technology (CADT)",
      edu3_location: "Phnom Penh, Cambodia",
      edu3_desc: "Completed foundation year coursework focusing on Linear Algebra, Probability & Statistics, Discrete Mathematics, IT Essentials, and C Programming.",

      edu4_year: "Nov 2020 – Oct 2023",
      edu4_degree: "High School Diploma (Bac II Grade B) & French Baccalaureate",
      edu4_school: "Hun Sen Serypheap High School",
      edu4_location: "Ta Khmau, Kandal, Cambodia",
      edu4_desc: "National Baccalaureate Examination Grade B. Awarded Diplôme du Baccalauréat – Mention Francophone (Grade E) following 6 consecutive years of French bilingual stream education (Grades 7–12).",

      // Projects
      proj_subtitle: "Innovation & Resources",
      proj_title: "Featured Projects",
      proj_kruhub_badge: "Flagship Web App",
      proj_kruhub_title: "KruHub — Classroom Management Platform for Teachers",
      proj_kruhub_desc: "A classroom management web application created with the assistance of AI tools to solve everyday teaching needs—streamlining student attendance, roster tracking, grade calculations, and classroom utilities for educators.",
      proj_kruhub_btn: "Open KruHub Live",
      proj1_badge: "Interactive STEM",
      proj1_title: "Interactive STEM & Physics Simulation Lab",
      proj1_desc: "Curated interactive simulation modules designed for secondary school physics (classical mechanics, optics, wave behavior) and geometry proofs, allowing students to visualize theoretical principles dynamically.",
      proj2_badge: "Teaching Resources",
      proj2_title: "Secondary Math Problem Sets & Exam Collections",
      proj2_desc: "A structured compilation of standardized exam questions, chapter-by-chapter exercises, and detailed step-by-step solution rubrics tailored to Grade 7-9 students.",
      proj3_badge: "Virtual Community",
      proj3_title: "Virtual Classroom & Telegram Learning Community",
      proj3_desc: "An active online learning community providing homework troubleshooting, daily math drills, conceptual video clips, and peer discussions for secondary students.",
      proj4_badge: "Productivity & Data",
      proj4_title: "Student Grade Tracking & Academic Analytics Tool",
      proj4_desc: "An automated grade calculation and student progress tracking workbook utilizing advanced formulas and visualization to analyze class performance trends and identify students needing early intervention.",
      proj_btn_demo: "Live Showcase",
      proj_btn_view: "View Material",
      proj_btn_telegram: "Join Community",
      proj_btn_inquire: "Inquire",

      // Mentors
      mentors_subtitle: "Professional Endorsement",
      mentors_title: "Academic Mentors & Referees",
      mentor1_title: "Lower Secondary Mathematics Teacher & Mentor",
      mentor1_org: "Hun Sen Serypheap High School",
      mentor2_title: "Lower Secondary Physics Teacher & Mentor",
      mentor2_org: "Hun Sen TaKhmau High School",

      // Contact
      contact_subtitle: "Get In Touch",
      contact_title: "Contact Rin Sithpong",
      contact_heading: "Let's Connect & Collaborate",
      contact_intro: "Whether you are looking for an energetic STEM educator, curriculum collaboration, educational technology workshops, or tutoring support, feel free to reach out directly.",
      contact_email_lbl: "Email",
      contact_tg_lbl: "Telegram & Phone",
      contact_loc_lbl: "Location",
      contact_loc_val: "Prek Ruessei, Ta Khmau, Kandal Province, Cambodia",
      
      // Form
      form_title: "Send a Direct Message",
      form_desc: "Please fill out this form and I will respond to your inquiry promptly.",
      form_name_lbl: "Your Name",
      form_email_lbl: "Email Address",
      form_subject_lbl: "Subject",
      form_message_lbl: "Message",
      form_submit_btn: "Send Message",
      form_success: "Thank you for reaching out! Your message has been prepared successfully. I will get back to you shortly.",
      form_sending: "Processing message...",

      // Footer
      footer_bio: "Certified Lower Secondary Teacher in Mathematics & Physics. Dedicated to modern pedagogy, student academic success, and technology-enhanced STEM instruction.",
      footer_links_title: "Quick Navigation",
      footer_connect_title: "Direct Inquiries",
      footer_rights: "All rights reserved.",
      footer_built: "Built with semantic HTML5, modern CSS, & vanilla JavaScript."
    },

    km: {
      skip_to_content: "រំលងទៅមាតិកាចម្បង",
      logo_subtitle: "គ្រូបង្រៀនគណិតវិទ្យា និងរូបវិទ្យា",
      
      // Nav links
      nav_about: "អំពីខ្ញុំ",
      nav_skills: "ជំនាញ",
      nav_experience: "បទពិសោធន៍",
      nav_education: "ការអប់រំ",
      nav_projects: "ស្នាដៃ",
      nav_mentors: "គ្រូណែនាំ",
      nav_contact: "ទំនាក់ទំនង",

      // Hero
      hero_badge: "គ្រូបង្រៀនក្របខ័ណ្ឌរដ្ឋ • មជ្ឈមណ្ឌលគរុកោសល្យភូមិភាគខេត្តកណ្តាល",
      hero_greeting: "សួស្តី! ខ្ញុំបាទឈ្មោះ",
      hero_name: "រិន សិទ្ធិពង្ស",
      hero_role: "គ្រូបង្រៀនកម្រិតអនុវិទ្យាល័យ ឯកទេសគណិតវិទ្យា និងរូបវិទ្យា",
      hero_intro: "ខ្ញុំជាគ្រូបង្រៀនក្របខ័ណ្ឌរដ្ឋឯកទេស គណិតវិទ្យា និងរូបវិទ្យា បញ្ចប់ការបណ្តុះបណ្តាលពីមជ្ឈមណ្ឌលគរុកោសល្យភូមិភាគខេត្តកណ្តាល និងកំពុងបន្តរៀនបរិញ្ញាបត្រគណិតវិទ្យានៅ CUS។ ខ្ញុំជាអ្នកបង្កើតគេហទំព័រ <a href='https://kruhub-47766.firebaseapp.com/' target='_blank' rel='noopener noreferrer' class='inline-link'>KruHub</a> ដោយប្រើប្រាស់ AI ជួយសម្រួលដល់ការងារបង្រៀន ដើម្បីឱ្យការរៀនគណិត និងរូបវិទ្យាកាន់តែងាយយល់ និងសប្បាយរៀន។",
      tag_kruhub: "អ្នកបង្កើតគេហទំព័រ KruHub (Firebase App)",
      tag_math_physics: "ឯកទេសគណិត និងរូបវិទ្យា",
      tag_digital_pedagogy: "គរុកោសល្យ និងបច្ចេកវិទ្យាអប់រំ",
      tag_trilingual: "ភាសាខ្មែរ • អង់គ្លេស • បារាំង",
      hero_btn_projects: "មើលស្នាដៃ",
      hero_btn_contact: "ទាក់ទងមកខ្ញុំ",
      hero_download_cv: "ប្រវត្តិរូបសង្ខេប",
      badge_appointed: "គ្រូក្របខ័ណ្ឌរដ្ឋ",
      badge_appointed_sub: "អនុវិទ្យាល័យដំណាក់ព្រីង",
      badge_rttc: "គរុកោសល្យភូមិភាគ",
      badge_rttc_sub: "ខេត្តកណ្តាល",

      // About
      about_subtitle: "ប្រវត្តិ និងការងារ",
      about_title: "អំពីខ្ញុំ",
      about_lead: "បង្រៀនដោយយកចិត្តទុកដាក់លើការយល់ដឹងរបស់សិស្ស និងប្រើប្រាស់បច្ចេកវិទ្យាដើម្បីឱ្យមេរៀនងាយស្រួលយល់។",
      about_p1: "ខ្ញុំឈ្មោះ រិន សិទ្ធិពង្ស ជាគ្រូបង្រៀនអនុវិទ្យាល័យ ឯកទេសគណិតវិទ្យា និងរូបវិទ្យា បញ្ចប់ការបណ្តុះបណ្តាលពីមជ្ឈមណ្ឌលគរុកោសល្យភូមិភាគខេត្តកណ្តាល ហើយបច្ចុប្បន្នជាគ្រូក្របខ័ណ្ឌរដ្ឋនៅអនុវិទ្យាល័យដំណាក់ព្រីង ស្រុកពញាឮ ខេត្តកណ្តាល។ ក្រៅពីការបង្រៀន ខ្ញុំបានប្រើ AI បង្កើតគេហទំព័រ <a href='https://kruhub-47766.firebaseapp.com/' target='_blank' rel='noopener noreferrer' class='inline-link'>KruHub</a> សម្រាប់ជួយសម្រួលដល់លោកគ្រូអ្នកគ្រូក្នុងការកត់វត្តមាន គ្រប់គ្រងពិន្ទុ និងការងារក្នុងថ្នាក់រៀនឱ្យកាន់តែលឿន។",
      about_p2: "ក្នុងការបង្រៀន ខ្ញុំតែងតែយកចិត្តទុកដាក់លើសិស្សជាចម្បង ដោយលើកទឹកចិត្តឱ្យពួកគាត់ហ៊ានសួរ ហ៊ានបញ្ចេញមតិ និងអនុវត្តផ្ទាល់។ តាមរយៈចំណេះដឹងគណិតវិទ្យានៅ CUS និងមុខវិជ្ជាដែលធ្លាប់រៀននៅ CADT (Linear Algebra, ស្ថិតិ, Discrete Math, កូដ C) រួមជាមួយការចេះប្រើប្រាស់ AI ខ្ញុំបានយកបច្ចេកវិទ្យាមកជួយបង្កើតសន្លឹកកិច្ចការ និងគំរូពិសោធន៍ ដើម្បីឱ្យសិស្សមើលឃើញរូបភាពច្បាស់ និងយល់ពីប្រភពនៃរូបមន្តនីមួយៗ។",
      about_p3: "ខ្ញុំអាចប្រើប្រាស់ភាសាខ្មែរ ភាសាអង់គ្លេស (កម្រិត B2) និងភាសាបារាំង (ដោយសារធ្លាប់រៀនថ្នាក់ពីរភាសាតាំងពីថ្នាក់ទី៧ រហូតដល់ចប់បាក់ឌុប)។ គោលបំណងរបស់ខ្ញុំ គឺចង់ឱ្យសិស្សស្រឡាញ់ការរៀនសូត្រ ហ៊ានគិត ហ៊ានដោះស្រាយលំហាត់ និងមានមូលដ្ឋានគ្រឹះរឹងមាំសម្រាប់ថ្ងៃអនាគត។",
      about_btn_cv: "ទាញយកប្រវត្តិរូបសង្ខេប",
      about_btn_exp: "មើលបទពិសោធន៍",

      // Info Card
      info_title: "ព័ត៌មានផ្ទាល់ខ្លួន",
      info_name_lbl: "ឈ្មោះពេញ:",
      info_name_val: "លោក រិន សិទ្ធិពង្ស (RIN SITHPONG)",
      info_role_lbl: "តួនាទីបច្ចុប្បន្ន:",
      info_role_val: "គ្រូបង្រៀនអនុវិទ្យាល័យ (គណិតវិទ្យា និងរូបវិទ្យា)",
      info_school_lbl: "សាលាតែងតាំង:",
      info_school_val: "អនុវិទ្យាល័យដំណាក់ព្រីង ខេត្តកណ្តាល",
      info_location_lbl: "ទីលំនៅ:",
      info_location_val: "សង្កាត់ព្រែកឫស្សី ក្រុងតាខ្មៅ ខេត្តកណ្តាល",
      info_degree_lbl: "កម្រិតវប្បធម៌:",
      info_degree_val: "បរិញ្ញាបត្រគណិត (CUS) • គរុកោសល្យភូមិភាគ • ឆ្នាំមូលដ្ឋាន (CADT Y1) • បាក់ឌុប (និទ្ទេស B)",
      info_languages_lbl: "ភាសា:",
      info_languages_val: "ខ្មែរ (កំណើត) • អង់គ្លេស (B2) • បារាំង (ថ្នាក់ពីរភាសា)",
      info_interests_lbl: "ចំណាប់អារម្មណ៍:",
      info_interests_val: "គេហទំព័រ KruHub, ការប្រើ AI (Antigravity, Codex), ការអប់រំ STEM, កម្មវិធី GeoGebra",
      cred_title: "គរុកោសល្យ និងក្របខ័ណ្ឌរដ្ឋ",
      cred_desc: "ទទួលស្គាល់ដោយក្រសួងអប់រំ យុវជន និងកីឡា តាមរយៈមជ្ឈមណ្ឌលគរុកោសល្យភូមិភាគខេត្តកណ្តាល។",

      // Skills
      skills_subtitle: "ជំនាញ និងសមត្ថភាព",
      skills_title: "ជំនាញ និងឯកទេស",
      cat_pedagogy_title: "គរុកោសល្យ និងវិធីសាស្ត្របង្រៀន",
      cat_pedagogy_desc: "វិធីសាស្ត្របង្រៀនបែបសិស្សមជ្ឈមណ្ឌល រៀបចំកិច្ចតែងការច្បាស់លាស់ និងពន្យល់ស្របតាមកម្មវិធីសិក្សាជាតិថ្នាក់ទី ៧ ដល់ ទី ៩។",
      sk_math: "គណិតវិទ្យាអនុវិទ្យាល័យ",
      sk_phys: "រូបវិទ្យាអនុវិទ្យាល័យ",
      sk_lesson: "ការរៀបចំកិច្ចតែងការបង្រៀន",
      sk_assess: "ការវាយតម្លៃលទ្ធផលសិក្សារបស់សិស្ស",
      sk_mgmt: "ការគ្រប់គ្រងវិន័យ និងបរិយាកាសថ្នាក់រៀន",
      sk_exam: "ការបំប៉នសិស្សត្រៀមប្រឡង",

      cat_edtech_title: "បច្ចេកវិទ្យាអប់រំ & ការបង្រៀនឌីជីថល",
      cat_edtech_desc: "ប្រើប្រាស់កម្មវិធី និងឧបករណ៍ឌីជីថលដើម្បីជួយឱ្យសិស្សមើលឃើញរូបភាពជាក់ស្តែង ទាំងការរៀនក្នុងថ្នាក់ និងតាមអនឡាញ។",
      sk_virtual: "ការបង្រៀនតាម Zoom & Google Meet",
      sk_telegram: "ការបង្កើតក្រុមសិក្សាតាម Telegram",
      sk_geogebra: "គំរូរូបភាព និងពិសោធន៍ (GeoGebra)",
      sk_worksheets: "ការរៀបចំសន្លឹកកិច្ចការឌីជីថល",
      sk_slides: "ស្លាយបង្រៀនពហុព័ត៌មាន (Slides)",
      sk_online_eval: "ការធ្វើតេស្ត និងវាយតម្លៃតាមអនឡាញ",

      cat_tech_title: "មូលដ្ឋានគ្រឹះកុំព្យូទ័រ និងការប្រើប្រាស់ AI",
      cat_tech_desc: "មានមូលដ្ឋានគ្រឹះគណិតវិទ្យា និងកុំព្យូទ័រពីរៀននៅ CADT ព្រមទាំងចេះប្រើប្រាស់ AI (ដូចជា Antigravity និង Codex) មកជួយសម្រួលដល់ការងារបង្រៀន និងបង្កើតគេហទំព័រ KruHub។",
      sk_msoffice: "Microsoft Office (Word, Excel, PPT)",
      sk_grades: "ការគ្រប់គ្រង និងគណនាពិន្ទុសិស្ស",
      sk_algo: "ពីជគណិតលីនេអ៊ែរ និងស្ថិតិ",
      sk_python: "ការសរសេរកូដភាសា C",
      sk_data: "ការប្រើប្រាស់ AI (Antigravity, Codex ជំនួយការបង្រៀន)",

      cat_leadership_title: "ទំនាក់ទំនង និងភាសា",
      cat_leadership_desc: "មានទំនាក់ទំនងល្អ រួសរាយរាក់ទាក់ គោរពក្រមសីលធម៌គ្រូបង្រៀន និងយកចិត្តទុកដាក់ជួយណែនាំដល់សិស្សានុសិស្ស។",
      sk_km: "ភាសាខ្មែរ (ភាសាកំណើត)",
      sk_en: "ភាសាអង់គ្លេស (កម្រិត B2)",
      sk_fr: "ភាសាបារាំង (ថ្នាក់ពីរភាសា បាក់ឌុបបារាំង)",
      sk_mentor: "ការប្រឹក្សា និងបំប៉នសិស្ស",
      sk_collab: "ការសហការការងារជាក្រុម",
      sk_time: "ការគ្រប់គ្រងពេលវេលាបង្រៀន",

      // Experience
      exp_subtitle: "ប្រវត្តិការងារ",
      exp_title: "បទពិសោធន៍បង្រៀន",
      exp1_duration: "ធ្នូ ២០២៥ – មីនា ២០២៦",
      exp1_location: "ក្រុងតាខ្មៅ ខេត្តកណ្តាល",
      exp1_role: "គរុសិស្សកម្មសិក្សា — គណិតវិទ្យា & រូបវិទ្យា",
      exp1_org: "វិទ្យាល័យ ហ៊ុន សែន សេរីភាព",
      exp1_desc: "ចុះអនុវត្តការបង្រៀនមុខវិជ្ជាគណិតវិទ្យា និងរូបវិទ្យាដល់សិស្សកម្រិតអនុវិទ្យាល័យ តាមកម្មវិធីសិក្សាជាតិរបស់ក្រសួងអប់រំ។ បានរៀបចំកិច្ចតែងការបង្រៀន សន្លឹកកិច្ចការ លំហាត់អនុវត្ត ព្រមទាំងដឹកនាំសកម្មភាពក្រុម និងតាមដានការវិវត្តរបស់សិស្សជាប្រចាំ។",

      exp2_duration: "វិច្ឆិកា ២០២៤ – សីហា ២០២៥",
      exp2_location: "ក្រុងតាខ្មៅ ខេត្តកណ្តាល",
      exp2_role: "គរុសិស្សកម្មសិក្សា — កម្រិតអនុវិទ្យាល័យ",
      exp2_org: "វិទ្យាល័យ ហ៊ុន សែន តាខ្មៅ",
      exp2_desc: "បានចូលរួមសង្កេតការណ៍ និងបង្រៀនជាក់ស្តែងជាមួយលោកគ្រូអ្នកគ្រូណែនាំ លើមុខវិជ្ជាគណិតវិទ្យា និងរូបវិទ្យា។ បានរៀនសូត្រពីការគ្រប់គ្រងវិន័យក្នុងថ្នាក់ ការកែកិច្ចការសិស្ស និងការជួយបំប៉នបន្ថែមដល់ប្អូនៗសិស្សានុសិស្សដែលរៀនយឺត។",

      exp3_duration: "២០២៣ – ២០២៥",
      exp3_location: "អនឡាញ / ពីចម្ងាយ",
      exp3_role: "គ្រូបង្រៀនគណិតវិទ្យាអនឡាញ (ក្រៅម៉ោង)",
      exp3_org: "ការបង្រៀនឯករាជ្យ",
      exp3_desc: "បង្រៀនបំប៉នសិស្សតាមអនឡាញ (Zoom, Google Meet, Telegram) លើមុខវិជ្ជាគណិតវិទ្យា។ បានចងក្រងវិញ្ញាសា លំហាត់គន្លឹះ និងស្លាយពន្យល់មេរៀន ដើម្បីជួយសិស្សពង្រឹងសមត្ថភាព និងត្រៀមប្រឡងបញ្ចប់ឆ្នាំ។",

      // Education
      edu_subtitle: "ប្រវត្តិការសិក្សា",
      edu_title: "ការអប់រំ និងសញ្ញាបត្រ",
      edu1_year: "វិច្ឆិកា ២០២៣ ដល់ បច្ចុប្បន្ន",
      edu1_degree: "បរិញ្ញាបត្រគណិតវិទ្យា",
      edu1_school: "សាកលវិទ្យាល័យឯកទេសនៃកម្ពុជា (CUS)",
      edu1_location: "រាជធានីភ្នំពេញ កម្ពុជា",
      edu1_desc: "កំពុងបន្តការសិក្សាថ្នាក់បរិញ្ញាបត្រគណិតវិទ្យា ដើម្បីពង្រឹងចំណេះដឹងទ្រឹស្តី វិធីសាស្ត្រគណនា និងយកមកអភិវឌ្ឍវិធីបង្រៀនសិស្សឱ្យកាន់តែច្បាស់លាស់។",

      edu2_year: "វិច្ឆិកា ២០២៤ – មិថុនា ២០២៦",
      edu2_degree: "គរុកោសល្យឯកទេស (គ្រូបង្រៀនកម្រិតអនុវិទ្យាល័យ គណិត & រូប)",
      edu2_school: "មជ្ឈមណ្ឌលគរុកោសល្យភូមិភាគខេត្តកណ្តាល",
      edu2_location: "ខេត្តកណ្តាល កម្ពុជា",
      edu2_desc: "បានបញ្ចប់ការបណ្តុះបណ្តាលគរុកោសល្យកម្រិតមូលដ្ឋាន (១២+២) ឯកទេស គណិត-រូបវិទ្យា នៅមជ្ឈមណ្ឌលគរុកោសល្យភូមិភាគខេត្តកណ្តាល និងទទួលបានការតែងតាំងជាគ្រូបង្រៀនក្របខ័ណ្ឌរដ្ឋនៅអនុវិទ្យាល័យដំណាក់ព្រីង ស្រុកពញាឮ។",

      edu3_year: "វិច្ឆិកា ២០២៣ – សីហា ២០២៤",
      edu3_degree: "ការសិក្សាថ្នាក់ឆ្នាំមូលដ្ឋាន (បញ្ចប់ឆ្នាំទី១)",
      edu3_school: "បណ្ឌិត្យសភាបច្ចេកវិទ្យាឌីជីថលកម្ពុជា (CADT)",
      edu3_location: "រាជធានីភ្នំពេញ កម្ពុជា",
      edu3_desc: "បានបញ្ចប់ការសិក្សាថ្នាក់ឆ្នាំមូលដ្ឋាន ដោយបានរៀនមុខវិជ្ជាគ្រឹះសំខាន់ៗរួមមាន៖ Linear Algebra, Probability & Statistics, Discrete Mathematics, IT Essentials និងការសរសេរកូដភាសា C (C Programming)។",

      edu4_year: "វិច្ឆិកា ២០២០ – តុលា ២០២៣",
      edu4_degree: "សញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ (បាក់ឌុប និទ្ទេស B) & បាក់ឌុបបារាំង",
      edu4_school: "វិទ្យាល័យ ហ៊ុន សែន សេរីភាព",
      edu4_location: "ក្រុងតាខ្មៅ ខេត្តកណ្តាល",
      edu4_desc: "ប្រឡងជាប់បាក់ឌុបសម័យប្រឡង ២០២៣ ទទួលបាននិទ្ទេស B និងសញ្ញាបត្របាក់ឌុបភាសាបារាំង (Diplôme du Baccalauréat - Mention Francophone) បន្ទាប់ពីរៀនចប់ថ្នាក់ពីរភាសាខ្មែរ-បារាំង រយៈពេល ៦ឆ្នាំពេញ (ថ្នាក់ទី៧ ដល់ ទី១២)។",

      // Projects
      proj_subtitle: "ស្នាដៃ និងធនធាន",
      proj_title: "ស្នាដៃ និងគម្រោងសំខាន់ៗ",
      proj_kruhub_badge: "ស្នាដៃបង្កើតផ្ទាល់ • Web App",
      proj_kruhub_title: "KruHub — ប្រព័ន្ធគ្រប់គ្រងថ្នាក់រៀនសម្រាប់គ្រូបង្រៀន (បង្កើតដោយ រិន សិទ្ធិពង្ស)",
      proj_kruhub_desc: "គេហទំព័រគ្រប់គ្រងថ្នាក់រៀនដែលខ្ញុំបង្កើតឡើងដោយប្រើប្រាស់បច្ចេកវិទ្យា AI មកជួយសម្រួលដល់កិច្ចការបង្រៀនប្រចាំថ្ងៃរបស់លោកគ្រូអ្នកគ្រូ ដូចជាការស្រង់វត្តមានសិស្ស គ្រប់គ្រងបញ្ជីឈ្មោះ បញ្ចូលពិន្ទុ និងឧបករណ៍ជំនួយក្នុងថ្នាក់រៀនឱ្យកាន់តែរហ័ស និងមានភាពងាយស្រួល។",
      proj_kruhub_btn: "ចូលមើលគេហទំព័រ KruHub",
      proj1_badge: "STEM អន្តរកម្ម",
      proj1_title: "បន្ទប់ពិសោធន៍គំរូរូបវិទ្យា & STEM អន្តរកម្ម",
      proj1_desc: "ការប្រើប្រាស់គំរូពិសោធន៍បែបឌីជីថលលើមុខវិជ្ជារូបវិទ្យា (ចលនាមេកានិច ពន្លឺ រលក) និងធរណីមាត្រ ដើម្បីឱ្យសិស្សមើលឃើញបាតុភូតជាក់ស្តែង និងយល់ច្បាស់ពីទ្រឹស្តីវិទ្យាសាស្ត្រ។",
      proj2_badge: "ឯកសារបង្រៀន",
      proj2_title: "កម្រងលំហាត់ និងវិញ្ញាសាគណិតវិទ្យាអនុវិទ្យាល័យ",
      proj2_desc: "ការចងក្រងកម្រងលំហាត់ និងវិញ្ញាសាគណិតវិទ្យា ព្រមទាំងដំណោះស្រាយលម្អិត ស្របតាមកម្មវិធីសិក្សាជាតិថ្នាក់ទី ៧ ដល់ ទី ៩ សម្រាប់ជួយសិស្សពង្រឹងសមត្ថភាព និងត្រៀមប្រឡង។",
      proj3_badge: "សហគមន៍អនឡាញ",
      proj3_title: "ថ្នាក់រៀននិម្មិត និងសហគមន៍សិក្សាលើ Telegram",
      proj3_desc: "ក្រុមសិក្សាតាម Telegram សម្រាប់ចែករំលែកគន្លឹះដោះស្រាយលំហាត់ ឆ្លើយសំណួរចម្ងល់មេរៀន និងផ្តល់កន្លែងឱ្យសិស្សានុសិស្សជជែកពិភាក្សាលើមេរៀនគណិត និងរូបវិទ្យា។",
      proj4_badge: "កម្មវិធីគណនាពិន្ទុ",
      proj4_title: "ប្រព័ន្ធកត់ត្រា និងវិភាគពិន្ទុការសិក្សារបស់សិស្ស",
      proj4_desc: "តារាងគណនាពិន្ទុ និងតាមដានលទ្ធផលសិក្សារបស់សិស្សដោយស្វ័យប្រវត្តិ ជួយឱ្យគ្រូអាចដឹងបានភ្លាមៗពីកម្រិតសិក្សារបស់សិស្សម្នាក់ៗ និងងាយស្រួលជួយបំប៉នបន្ថែមទាន់ពេលវេលា។",
      proj_btn_demo: "មើលការបង្ហាញ",
      proj_btn_view: "មើលឯកសារ",
      proj_btn_telegram: "ចូលរួមសហគមន៍",
      proj_btn_inquire: "សាកសួរ",

      // Mentors
      mentors_subtitle: "បុគ្គលយោង",
      mentors_title: "លោកគ្រូអ្នកគ្រូណែនាំ និងបុគ្គលយោង",
      mentor1_title: "គ្រូបង្រៀនគណិតវិទ្យាអនុវិទ្យាល័យ និងជាគ្រូណែនាំ",
      mentor1_org: "វិទ្យាល័យ ហ៊ុន សែន សេរីភាព",
      mentor2_title: "គ្រូបង្រៀនរូបវិទ្យាអនុវិទ្យាល័យ និងជាគ្រូណែនាំ",
      mentor2_org: "វិទ្យាល័យ ហ៊ុន សែន តាខ្មៅ",

      // Contact
      contact_subtitle: "ទាក់ទងមកខ្ញុំ",
      contact_title: "ទំនាក់ទំនង រិន សិទ្ធិពង្ស",
      contact_heading: "រីករាយក្នុងការទំនាក់ទំនង និងពិភាក្សាការងារ",
      contact_intro: "ប្រសិនបើលោកអ្នកចង់ពិភាក្សាការងារលើការបង្រៀន ការរៀបចំឯកសារ ឬកិច្ចសហការផ្សេងៗ សូមទាក់ទងមកខ្ញុំបាទតាមព័ត៌មានខាងក្រោម។",
      contact_email_lbl: "អ៊ីមែល",
      contact_tg_lbl: "តេឡេក្រាម & ទូរស័ព្ទ",
      contact_loc_lbl: "ទីលំនៅ",
      contact_loc_val: "សង្កាត់ព្រែកឫស្សី ក្រុងតាខ្មៅ ខេត្តកណ្តាល",
      
      // Form
      form_title: "ផ្ញើសារមកខ្ញុំដោយផ្ទាល់",
      form_desc: "សូមបំពេញព័ត៌មានខាងក្រោម ខ្ញុំបាទនឹងឆ្លើយតបសាររបស់លោកអ្នកឱ្យបានឆាប់បំផុត។",
      form_name_lbl: "ឈ្មោះរបស់អ្នក",
      form_email_lbl: "អាសយដ្ឋានអ៊ីមែល",
      form_subject_lbl: "ប្រធានបទ",
      form_message_lbl: "ខ្លឹមសារសារ",
      form_submit_btn: "ផ្ញើសារ",
      form_success: "សូមអរគុណសម្រាប់ការទាក់ទង! សាររបស់លោកអ្នកត្រូវបានរៀបចំរួចរាល់។ ខ្ញុំបាទនឹងឆ្លើយតបវិញក្នុងពេលឆាប់ៗ។",
      form_sending: "កំពុងដំណើរការ...",

      // Footer
      footer_bio: "គ្រូបង្រៀនអនុវិទ្យាល័យ ឯកទេសគណិតវិទ្យា និងរូបវិទ្យា។ ស្រឡាញ់ការបង្រៀន និងចូលចិត្តប្រើបច្ចេកវិទ្យាដើម្បីជួយឱ្យសិស្សរៀនកាន់តែពូកែ។",
      footer_links_title: "តំណភ្ជាប់រហ័ស",
      footer_connect_title: "ទំនាក់ទំនងផ្ទាល់",
      footer_rights: "រក្សាសិទ្ធិគ្រប់យ៉ាង។",
      footer_built: ""
    }
  };

  /* ==========================================================================
     2. APPLICATION STATE & STORAGE HELPERS
     ========================================================================== */
  const state = {
    theme: 'light',
    lang: 'en'
  };

  function getSavedPreference(key, fallback) {
    try {
      return localStorage.getItem(key) || fallback;
    } catch (e) {
      return fallback;
    }
  }

  function savePreference(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      // Storage unavailable or disabled
    }
  }

  /* ==========================================================================
     3. THEME CONTROLLER (LIGHT / DARK)
     ========================================================================== */
  function initTheme() {
    const savedTheme = getSavedPreference('portfolio_theme', null);
    
    if (savedTheme === 'dark' || savedTheme === 'light') {
      state.theme = savedTheme;
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      state.theme = 'dark';
    } else {
      state.theme = 'light';
    }

    applyTheme(state.theme);

    const themeToggleBtn = document.getElementById('themeToggleBtn');
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        state.theme = state.theme === 'dark' ? 'light' : 'dark';
        applyTheme(state.theme);
        savePreference('portfolio_theme', state.theme);
      });
    }

    // Listen to system theme change if no explicit override is stored
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!getSavedPreference('portfolio_theme', null)) {
          state.theme = e.matches ? 'dark' : 'light';
          applyTheme(state.theme);
        }
      });
    }
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const themeBtn = document.getElementById('themeToggleBtn');
    if (themeBtn) {
      const isDark = theme === 'dark';
      themeBtn.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
      themeBtn.setAttribute('title', isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme');
    }
  }

  /* ==========================================================================
     4. BILINGUAL LANGUAGE CONTROLLER (EN / KM)
     ========================================================================== */
  function initLanguage() {
    const savedLang = getSavedPreference('portfolio_lang', 'en');
    state.lang = (savedLang === 'km' || savedLang === 'en') ? savedLang : 'en';
    
    applyLanguage(state.lang);

    const langToggleBtn = document.getElementById('langToggleBtn');
    if (langToggleBtn) {
      langToggleBtn.addEventListener('click', () => {
        state.lang = state.lang === 'en' ? 'km' : 'en';
        applyLanguage(state.lang);
        savePreference('portfolio_lang', state.lang);
      });
    }
  }

  function applyLanguage(lang) {
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('data-lang', lang);

    const dictionary = translations[lang] || translations.en;

    // Translate elements with data-i18n
    const translatables = document.querySelectorAll('[data-i18n]');
    translatables.forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dictionary[key]) {
        if (dictionary[key].includes('<a ') || dictionary[key].includes('<span ') || el.hasAttribute('data-i18n-html')) {
          el.innerHTML = dictionary[key];
        } else {
          el.textContent = dictionary[key];
        }
      }
    });

    // Update label on switcher button
    const langLabel = document.getElementById('langLabel');
    if (langLabel) {
      langLabel.textContent = lang === 'en' ? 'EN / ខ្មែរ' : 'ខ្មែរ / EN';
    }

    // Update input placeholders according to language
    updateFormPlaceholders(lang);
  }

  function updateFormPlaceholders(lang) {
    const nameInput = document.getElementById('senderName');
    const emailInput = document.getElementById('senderEmail');
    const subjectInput = document.getElementById('msgSubject');
    const messageInput = document.getElementById('senderMessage');

    if (lang === 'km') {
      if (nameInput) nameInput.placeholder = 'ឧ. រិន សិទ្ធិពង្ស';
      if (emailInput) emailInput.placeholder = 'ឧ. name@example.com';
      if (subjectInput) subjectInput.placeholder = 'ឧ. កិច្ចសហការបង្រៀន ឬការបំប៉នសិស្ស';
      if (messageInput) messageInput.placeholder = 'តើខ្ញុំបាទអាចជួយអ្វីខ្លះទាក់ទងនឹងគណិតវិទ្យា រូបវិទ្យា ឬគម្រោងអប់រំ?';
    } else {
      if (nameInput) nameInput.placeholder = 'e.g. John Doe';
      if (emailInput) emailInput.placeholder = 'e.g. name@example.com';
      if (subjectInput) subjectInput.placeholder = 'e.g. Teaching Collaboration / Tutoring Inquiry';
      if (messageInput) messageInput.placeholder = 'How can I assist you with math, physics, or educational initiatives?';
    }
  }

  /* ==========================================================================
     5. STICKY NAVBAR & READING PROGRESS
     ========================================================================== */
  function initStickyNavbar() {
    const siteHeader = document.getElementById('siteHeader');
    const progressBar = document.getElementById('scrollProgress');

    function onScroll() {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      
      // Header shadow/background toggle
      if (siteHeader) {
        if (scrollY > 20) {
          siteHeader.classList.add('scrolled');
        } else {
          siteHeader.classList.remove('scrolled');
        }
      }

      // Reading progress
      if (progressBar) {
        const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        if (totalHeight > 0) {
          const progress = (scrollY / totalHeight) * 100;
          progressBar.style.width = Math.min(100, Math.max(0, progress)) + '%';
        }
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ==========================================================================
     6. MOBILE MENU DRAWER
     ========================================================================== */
  function initMobileMenu() {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const drawer = document.getElementById('mobileDrawer');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    if (!menuBtn || !drawer) return;

    function openMenu() {
      drawer.classList.add('open');
      menuBtn.setAttribute('aria-expanded', 'true');
      drawer.setAttribute('aria-hidden', 'false');
    }

    function closeMenu() {
      drawer.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
      drawer.setAttribute('aria-hidden', 'true');
    }

    menuBtn.addEventListener('click', () => {
      const isOpen = drawer.classList.contains('open');
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close on link click
    mobileLinks.forEach((link) => {
      link.addEventListener('click', () => {
        closeMenu();
      });
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (drawer.classList.contains('open') && !drawer.contains(e.target) && !menuBtn.contains(e.target)) {
        closeMenu();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('open')) {
        closeMenu();
        menuBtn.focus();
      }
    });
  }

  /* ==========================================================================
     7. ACTIVE NAVIGATION SCROLLSPY (INTERSECTION OBSERVER)
     ========================================================================== */
  function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

    if (!('IntersectionObserver' in window)) return;

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            const href = link.getAttribute('href');
            if (href === '#' + id) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));
  }

  /* ==========================================================================
     8. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
     ========================================================================== */
  function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');

    if (!('IntersectionObserver' in window)) {
      revealElements.forEach((el) => el.classList.add('active'));
      return;
    }

    const revealObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
    });

    revealElements.forEach((el) => revealObserver.observe(el));
  }

  /* ==========================================================================
     9. BACK TO TOP BUTTON
     ========================================================================== */
  function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (!backToTopBtn) return;

    window.addEventListener('scroll', () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollY > 350) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* ==========================================================================
     10. CONTACT FORM VALIDATION & INTERACTIVE SUBMISSION
     ========================================================================== */
  function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    const nameInput = document.getElementById('senderName');
    const emailInput = document.getElementById('senderEmail');
    const subjectInput = document.getElementById('msgSubject');
    const messageInput = document.getElementById('senderMessage');
    const submitBtn = document.getElementById('submitBtn');
    const formStatus = document.getElementById('formStatus');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const subjectError = document.getElementById('subjectError');
    const messageError = document.getElementById('messageError');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function clearErrors() {
      [nameInput, emailInput, subjectInput, messageInput].forEach((input) => {
        if (input) input.classList.remove('is-invalid');
      });
      [nameError, emailError, subjectError, messageError].forEach((err) => {
        if (err) err.textContent = '';
      });
      if (formStatus) {
        formStatus.className = 'form-status-box';
        formStatus.textContent = '';
      }
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      clearErrors();

      let isValid = true;
      const currentDict = translations[state.lang] || translations.en;

      // Validate Name
      if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
        nameInput.classList.add('is-invalid');
        nameError.textContent = state.lang === 'km' 
          ? 'សូមបញ្ចូលឈ្មោះរបស់អ្នក (យ៉ាងតិច ២ តួអក្សរ)' 
          : 'Please enter your name (at least 2 characters).';
        isValid = false;
      }

      // Validate Email
      if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
        emailInput.classList.add('is-invalid');
        emailError.textContent = state.lang === 'km'
          ? 'សូមបញ្ចូលអាសយដ្ឋានអ៊ីមែលត្រឹមត្រូវ'
          : 'Please enter a valid email address.';
        isValid = false;
      }

      // Validate Subject
      if (!subjectInput.value.trim() || subjectInput.value.trim().length < 3) {
        subjectInput.classList.add('is-invalid');
        subjectError.textContent = state.lang === 'km'
          ? 'សូមបញ្ចូលប្រធានបទសារ (យ៉ាងតិច ៣ តួអក្សរ)'
          : 'Please enter a subject (at least 3 characters).';
        isValid = false;
      }

      // Validate Message
      if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
        messageInput.classList.add('is-invalid');
        messageError.textContent = state.lang === 'km'
          ? 'សូមបញ្ចូលខ្លឹមសារសារ (យ៉ាងតិច ១០ តួអក្សរ)'
          : 'Please enter a message (at least 10 characters).';
        isValid = false;
      }

      if (!isValid) return;

      // Show processing state
      const originalBtnText = submitBtn.querySelector('.btn-text').textContent;
      submitBtn.disabled = true;
      submitBtn.querySelector('.btn-text').textContent = currentDict.form_sending;

      // Simulate sending and trigger mailto fallback option
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.querySelector('.btn-text').textContent = originalBtnText;

        formStatus.className = 'form-status-box success';
        formStatus.textContent = currentDict.form_success;

        // Compose mailto link so user can send real email client directly if desired
        const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${subjectInput.value.trim()}`);
        const mailtoBody = encodeURIComponent(
          `From: ${nameInput.value.trim()} (${emailInput.value.trim()})\n\n${messageInput.value.trim()}`
        );
        const mailtoUrl = `mailto:sithpongrin4@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
        
        // Reset inputs
        form.reset();

        // Optional prompt to open user's mail client
        window.location.href = mailtoUrl;
      }, 700);
    });
  }

  /* ==========================================================================
     11. FOOTER CURRENT YEAR & INITIALIZATION
     ========================================================================== */
  function initYear() {
    const yearEl = document.getElementById('currentYear');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  }

  // Document Ready Initialization
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLanguage();
    initStickyNavbar();
    initMobileMenu();
    initScrollSpy();
    initScrollReveal();
    initBackToTop();
    initContactForm();
    initYear();
  });
})();
