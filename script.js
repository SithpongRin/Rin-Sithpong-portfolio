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
      hero_badge: "Appointed State Teacher • RTTC Kandal Graduate",
      hero_greeting: "Hello, I am",
      hero_name: "RIN SITHPONG",
      hero_role: "Lower Secondary School Teacher specialized in Math & Physics",
      hero_intro: "A certified educator equipped with a solid pedagogical foundation from RTTC Kandal, currently pursuing advanced mathematics at CUS. Passionate about student-centered instruction, digital classroom innovation, and making complex STEM concepts intuitive and engaging.",
      tag_math_physics: "Math & Physics Specialist",
      tag_digital_pedagogy: "Digital STEM Pedagogy",
      tag_trilingual: "Khmer • English • French",
      hero_btn_projects: "Explore Projects",
      hero_btn_contact: "Get In Touch",
      hero_download_cv: "Resume",
      badge_appointed: "State Appointed",
      badge_appointed_sub: "Damnak Pring LSS",
      badge_rttc: "RTTC Kandal",
      badge_rttc_sub: "Pedagogy Certified",

      // About
      about_subtitle: "Background & Passion",
      about_title: "About Me",
      about_lead: "Transforming STEM Education Through Conceptual Clarity & Digital Innovation.",
      about_p1: "I am Sithpong, a certified Lower Secondary Teacher in Mathematics and Physics, trained at the Regional Teacher Training Center (RTTC) Kandal and officially appointed as a state educator to Damnak Pring Lower Secondary School in Ponhea Lueu, Kandal Province.",
      about_p2: "My teaching philosophy centers on active engagement and student-focused pedagogy. Drawing from my academic studies in pure mathematics at Cambodia University of Specialties (CUS) and foundational computer algorithms from the Cambodia Academy of Digital Technology (CADT), I combine rigorous mathematical theory with digital classroom tools, interactive worksheets, and scientific simulations to make abstract formulas intuitive.",
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
      info_degree_val: "B.Math (CUS) • RTTC Pedagogy • Data Science (CADT Y1)",
      info_languages_lbl: "Languages:",
      info_languages_val: "Khmer (Native) • English (B2) • French (Bilingual Bac)",
      info_interests_lbl: "Interests:",
      info_interests_val: "STEM Education, GeoGebra, Algorithms, Physics Sim",
      cred_title: "National Teaching License",
      cred_desc: "Certified by the Ministry of Education, Youth and Sport (MoEYS) via RTTC Kandal.",

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

      cat_tech_title: "Digital & Computational Skills",
      cat_tech_desc: "Analytical computing foundations from CADT Data Science combined with advanced administrative productivity tools.",
      sk_msoffice: "Microsoft Office Suite (Word, Excel, PPT)",
      sk_grades: "Student Grade Tracking & Analytics",
      sk_algo: "Algorithms & Computational Logic",
      sk_python: "Programming Fundamentals (Python / C)",
      sk_data: "Data Analysis Foundations",
      sk_web_basics: "Modern Web Basics (HTML/CSS)",

      cat_leadership_title: "Communication & Languages",
      cat_leadership_desc: "Strong interpersonal communication, bilingual classroom instruction, and student mentorship.",
      sk_km: "Khmer: Native Proficiency",
      sk_en: "English: Upper-Intermediate (B2)",
      sk_fr: "French: Bilingual Stream (Bac Francophone)",
      sk_mentor: "Individual Student Academic Mentoring",
      sk_collab: "Collaborative Teamwork & Ethics",
      sk_time: "Structured Time & Curriculum Management",

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
      exp3_role: "Online Educator (Part-Time)",
      exp3_org: "Independent Educational Practice",
      exp3_desc: "Delivered interactive online Mathematics and Physics tutoring sessions via Zoom, Google Meet, and Telegram. Developed digital instructional slides, problem-solving rubrics, and practice exam simulations for students preparing for crucial secondary and national examinations.",

      // Education
      edu_subtitle: "Academic Foundation",
      edu_title: "Education & Credentials",
      edu1_year: "Oct 2023 – Present",
      edu1_degree: "Bachelor of Mathematics",
      edu1_school: "Cambodia University of Specialties (CUS)",
      edu1_location: "Phnom Penh, Cambodia",
      edu1_desc: "Pursuing advanced mathematical analysis, pure mathematics, algebra, calculus, geometry, and applied mathematical modeling to deepen pedagogical mastery.",

      edu2_year: "Nov 2024 – Jun 2026",
      edu2_degree: "Specialized Teaching Certificate (Lower Secondary Math & Physics)",
      edu2_school: "Hun Sen Regional Teacher Training Center (RTTC), Kandal",
      edu2_location: "Kandal Province, Cambodia",
      edu2_desc: "National professional pedagogical training covering STEM education, classroom leadership, and lesson delivery. Appointed as an official state teacher to Damnak Pring Lower Secondary School.",

      edu3_year: "Nov 2023 – Aug 2024",
      edu3_degree: "Bachelor of Data Science (Year 1 Completed)",
      edu3_school: "Cambodia Academy of Digital Technology (CADT)",
      edu3_location: "Phnom Penh, Cambodia",
      edu3_desc: "Completed foundational computer algorithms, digital literacy, programming logic, and quantitative data structures.",

      edu4_year: "Nov 2020 – Oct 2023",
      edu4_degree: "High School Diploma (Bac II Grade B) & French Baccalaureate",
      edu4_school: "Hun Sen Serypheap High School",
      edu4_location: "Ta Khmau, Kandal, Cambodia",
      edu4_desc: "National Baccalaureate Examination Grade B. Awarded Diplôme du Baccalauréat – Mention Francophone (Grade E) following 6 consecutive years of French bilingual stream education (Grades 7–12).",

      // Projects
      proj_subtitle: "Innovation & Resources",
      proj_title: "Featured Projects",
      proj1_badge: "Interactive STEM",
      proj1_title: "Interactive STEM & Physics Simulation Lab",
      proj1_desc: "Curated interactive simulation modules designed for secondary school physics (classical mechanics, optics, wave behavior) and geometry proofs, allowing students to visualize theoretical principles dynamically.",
      proj2_badge: "Curriculum Resource",
      proj2_title: "Secondary Mathematics Exam Bank & Worksheets",
      proj2_desc: "A structured repository of categorized test problems, tiered exercises, and solution rubrics aligned with Cambodia's national curriculum for Grades 7, 8, and 9.",
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
      hero_badge: "គ្រូបង្រៀនក្របខ័ណ្ឌរដ្ឋ • បញ្ចប់ការសិក្សាពី គ.ស.ភ.ភ កណ្តាល",
      hero_greeting: "សួស្តី! ខ្ញុំបាទឈ្មោះ",
      hero_name: "រិន សិទ្ធិពង្ស",
      hero_role: "គ្រូបង្រៀនកម្រិតអនុវិទ្យាល័យ ឯកទេសគណិតវិទ្យា និងរូបវិទ្យា",
      hero_intro: "ជាគរុសិស្សដែលបានបញ្ចប់ការបណ្តុះបណ្តាលគរុកោសល្យពី គ.ស.ភ.ភ កណ្តាល និងត្រូវបានតែងតាំងជាគ្រូបង្រៀនពេញសិទ្ធិរបស់រដ្ឋ។ បច្ចុប្បន្នកំពុងបន្តការសិក្សាថ្នាក់បរិញ្ញាបត្រគណិតវិទ្យា (CUS) និងមានមូលដ្ឋានគ្រឹះក្បួនដោះស្រាយពី CADT។ ខ្ញុំប្តេជ្ញាលើកកម្ពស់ការអប់រំបែប STEM តាមរយៈវិធីសាស្ត្របង្រៀនទាន់សម័យ និងការប្រើប្រាស់បច្ចេកវិទ្យាឌីជីថល។",
      tag_math_physics: "ឯកទេសគណិត និងរូបវិទ្យា",
      tag_digital_pedagogy: "គរុកោសល្យ STEM ឌីជីថល",
      tag_trilingual: "ភាសាខ្មែរ • អង់គ្លេស • បារាំង",
      hero_btn_projects: "មើលស្នាដៃ",
      hero_btn_contact: "ទាក់ទងមកខ្ញុំ",
      hero_download_cv: "ប្រវត្តិរូបសង្ខេប",
      badge_appointed: "គ្រូក្របខ័ណ្ឌរដ្ឋ",
      badge_appointed_sub: "អនុវិទ្យាល័យដំណាក់ព្រីង",
      badge_rttc: "គ.ស.ភ.ភ កណ្តាល",
      badge_rttc_sub: "គរុកោសល្យឯកទេស",

      // About
      about_subtitle: "ប្រវត្តិ និងគោលបំណង",
      about_title: "អំពីខ្ញុំ",
      about_lead: "លើកកម្ពស់គុណភាពអប់រំ STEM តាមរយៈការពន្យល់យ៉ាងច្បាស់លាស់ និងការអនុវត្តបច្ចេកវិទ្យាឌីជីថល។",
      about_p1: "ខ្ញុំបាទឈ្មោះ សិទ្ធិពង្ស ជាគ្រូបង្រៀនកម្រិតអនុវិទ្យាល័យ ឯកទេសគណិតវិទ្យា និងរូបវិទ្យា ដែលបានបញ្ចប់ការបណ្តុះបណ្តាលពីមជ្ឈមណ្ឌលគរុកោសល្យភូមិភាគ (គ.ស.ភ.ភ) ហ៊ុន សែន ខេត្តកណ្តាល ហើយត្រូវបានតែងតាំងជាគ្រូបង្រៀនក្របខ័ណ្ឌរដ្ឋនៅអនុវិទ្យាល័យដំណាក់ព្រីង ស្រុកពញាឮ ខេត្តកណ្តាល។",
      about_p2: "ទស្សនវិជ្ជានៃការបង្រៀនរបស់ខ្ញុំផ្តោតសំខាន់លើសិស្សមជ្ឈមណ្ឌល និងការលើកទឹកចិត្តឱ្យសិស្សចូលរួមយ៉ាងសកម្ម។ ដោយមានការសិក្សាថ្នាក់បរិញ្ញាបត្រគណិតវិទ្យានៅសាកលវិទ្យាល័យឯកទេសនៃកម្ពុជា (CUS) រួមជាមួយមូលដ្ឋានគ្រឹះផ្នែកវិទ្យាសាស្ត្រទិន្នន័យពី CADT ខ្ញុំតែងតែរួមបញ្ចូលទ្រឹស្តីគណិតវិទ្យាជាមួយឧបករណ៍ឌីជីថល សន្លឹកកិច្ចការអន្តរកម្ម និងគំរូមើលឃើញជាក់ស្តែង ដើម្បីជួយឱ្យរូបមន្តស្មុគស្មាញក្លាយជាងាយយល់។",
      about_p3: "ដោយមានសមត្ថភាពភាសាខ្មែរ ភាសាអង់គ្លេស (កម្រិត B2) និងសញ្ញាបត្របាក់ឌុបថ្នាក់ភាសាបារាំងពីរភាសា ខ្ញុំប្តេជ្ញាជំរុញទឹកចិត្តសិស្សានុសិស្សឱ្យមានការគិតស៊ីជម្រៅ ចេះដោះស្រាយបញ្ហា និងស្រឡាញ់មុខវិជ្ជាវិទ្យាសាស្ត្រ។",
      about_btn_cv: "ទាញយកប្រវត្តិរូបសង្ខេប",
      about_btn_exp: "មើលបទពិសោធន៍",

      // Info Card
      info_title: "ព័ត៌មានផ្ទាល់ខ្លួន",
      info_name_lbl: "ឈ្មោះពេញ:",
      info_name_val: "លោក រិន សិទ្ធិពង្ស (RIN SITHPONG)",
      info_role_lbl: "តួនាទីបច្ចុប្បន្ន:",
      info_role_val: "គ្រូបង្រៀនអនុវិទ្យាល័យ (គណិតវិទ្យា & រូបវិទ្យា)",
      info_school_lbl: "សាលាតែងតាំង:",
      info_school_val: "អនុវិទ្យាល័យដំណាក់ព្រីង ខេត្តកណ្តាល",
      info_location_lbl: "ទីលំនៅ:",
      info_location_val: "សង្កាត់ព្រែកឫស្សី ក្រុងតាខ្មៅ ខេត្តកណ្តាល",
      info_degree_lbl: "ការសិក្សា:",
      info_degree_val: "បរិញ្ញាបត្រគណិត (CUS) • គរុកោសល្យ (RTTC) • ទិន្នន័យ (CADT Y1)",
      info_languages_lbl: "ភាសា:",
      info_languages_val: "ខ្មែរ (កំណើត) • អង់គ្លេស (B2) • បារាំង (ថ្នាក់ពីរភាសា)",
      info_interests_lbl: "ចំណាប់អារម្មណ៍:",
      info_interests_val: "ការអប់រំ STEM, GeoGebra, ក្បួនដោះស្រាយ, គំរូរូបវិទ្យា",
      cred_title: "វិញ្ញាបនបត្រគរុកោសល្យជាតិ",
      cred_desc: "ទទួលស្គាល់ដោយក្រសួងអប់រំ យុវជន និងកីឡា តាមរយៈ គ.ស.ភ.ភ កណ្តាល។",

      // Skills
      skills_subtitle: "សមត្ថភាពស្នូល",
      skills_title: "ជំនាញ និងឯកទេស",
      cat_pedagogy_title: "គរុកោសល្យ និងការបង្រៀន",
      cat_pedagogy_desc: "វិធីសាស្ត្របង្រៀនបែបសិស្សមជ្ឈមណ្ឌល ការពន្យល់អន្តរកម្ម និងកម្មវិធីសិក្សាជាតិសម្រាប់ថ្នាក់ទី ៧ ដល់ ៩។",
      sk_math: "គណិតវិទ្យាកម្រិតអនុវិទ្យាល័យ",
      sk_phys: "រូបវិទ្យាកម្រិតអនុវិទ្យាល័យ",
      sk_lesson: "ការរៀបចំកិច្ចតែងការបង្រៀនច្បាស់លាស់",
      sk_assess: "ការវាយតម្លៃការសិក្សាសិស្ស",
      sk_mgmt: "ការគ្រប់គ្រងបរិយាកាសថ្នាក់រៀន",
      sk_exam: "ការបំប៉នត្រៀមប្រឡងជាតិ",

      cat_edtech_title: "បច្ចេកវិទ្យាអប់រំ & ថ្នាក់រៀនអនឡាញ",
      cat_edtech_desc: "ការប្រើប្រាស់ឧបករណ៍ឌីជីថលក្នុងការបង្កើតបរិយាកាសសិក្សាអន្តរកម្ម និងងាយស្រួលចូលរួមទាំងពីចម្ងាយ និងផ្ទាល់។",
      sk_virtual: "ថ្នាក់រៀន Zoom & Google Meet",
      sk_telegram: "សហគមន៍សិក្សាលើ Telegram",
      sk_geogebra: "គំរូអន្តរកម្ម STEM (GeoGebra)",
      sk_worksheets: "សន្លឹកកិច្ចការឌីជីថល",
      sk_slides: "ស្លាយបង្រៀនពហុព័ត៌មាន",
      sk_online_eval: "លំហាត់តេស្តឌីជីថល និងផ្តល់មតិកែលម្អ",

      cat_tech_title: "ជំនាញឌីជីថល និងក្បួនដោះស្រាយ",
      cat_tech_desc: "មូលដ្ឋានគ្រឹះវិទ្យាសាស្ត្រកុំព្យូទ័រពី CADT រួមជាមួយការប្រើប្រាស់ឧបករណ៍រដ្ឋបាលអប់រំកម្រិតខ្ពស់។",
      sk_msoffice: "Microsoft Office (Word, Excel, PPT)",
      sk_grades: "ប្រព័ន្ធកត់ត្រា និងវិភាគពិន្ទុសិស្ស",
      sk_algo: "ក្បួនដោះស្រាយ និងការគិតបែបរៀបចំ",
      sk_python: "មូលដ្ឋានគ្រឹះសរសេរកូដ (Python / C)",
      sk_data: "ការវិភាគទិន្នន័យមូលដ្ឋាន",
      sk_web_basics: "មូលដ្ឋានគ្រឹះគេហទំព័រ (HTML/CSS)",

      cat_leadership_title: "ទំនាក់ទំនង និងភាសា",
      cat_leadership_desc: "ទំនាក់ទំនងការងារប្រកបដោយក្រមសីលធម៌ ការបង្រៀនជាភាសា និងការផ្តល់ការប្រឹក្សាដល់សិស្ស។",
      sk_km: "ភាសាខ្មែរ: ភាសាកំណើត",
      sk_en: "ភាសាអង់គ្លេស: កម្រិតមធ្យមកម្រិតខ្ពស់ (B2)",
      sk_fr: "ភាសាបារាំង: ថ្នាក់ពីរភាសា (បាក់ឌុបបារាំង)",
      sk_mentor: "ការណែនាំ និងប្រឹក្សាសិក្សាដល់សិស្ស",
      sk_collab: "ការធ្វើការងារជាក្រុម និងសីលធម៌វិជ្ជាជីវៈ",
      sk_time: "ការគ្រប់គ្រងពេលវេលា និងកម្មវិធីសិក្សា",

      // Experience
      exp_subtitle: "បទពិសោធន៍ការងារ",
      exp_title: "បទពិសោធន៍បង្រៀន",
      exp1_duration: "ធ្នូ ២០២៥ – មីនា ២០២៦",
      exp1_location: "ក្រុងតាខ្មៅ ខេត្តកណ្តាល",
      exp1_role: "គរុសិស្សកម្មសិក្សា — គណិតវិទ្យា & រូបវិទ្យា",
      exp1_org: "វិទ្យាល័យ ហ៊ុន សែន សេរីភាព",
      exp1_desc: "បានបង្រៀនមុខវិជ្ជាគណិតវិទ្យា និងរូបវិទ្យាដល់សិស្សអនុវិទ្យាល័យដោយផ្អែកលើកម្មវិធីសិក្សាជាតិ។ បានរៀបចំកិច្ចតែងការបង្រៀន លំហាត់អនុវត្ត និងសន្លឹកកិច្ចការ។ បានគ្រប់គ្រងសកម្មភាពក្នុងថ្នាក់ និងវាយតម្លៃការសិក្សារបស់សិស្សជាប្រចាំ។",

      exp2_duration: "វិច្ឆិកា ២០២៤ – សីហា ២០២៥",
      exp2_location: "ក្រុងតាខ្មៅ ខេត្តកណ្តាល",
      exp2_role: "គរុសិស្សកម្មសិក្សា — កម្រិតអនុវិទ្យាល័យ",
      exp2_org: "វិទ្យាល័យ ហ៊ុន សែន តាខ្មៅ",
      exp2_desc: "បានសហការជាមួយលោកគ្រូអ្នកគ្រូណែនាំក្នុងការបង្រៀនមុខវិជ្ជាគណិតវិទ្យា និងរូបវិទ្យាកម្រិតអនុវិទ្យាល័យ។ បានអនុវត្តវិធីសាស្ត្រគរុកោសល្យទំនើប គ្រប់គ្រងវិន័យថ្នាក់រៀន កែកិច្ចការផ្ទះ និងជួយបំប៉នសិស្សដែលខ្សោយ។",

      exp3_duration: "២០២៣ – ២០២៥",
      exp3_location: "អនឡាញ / ពីចម្ងាយ",
      exp3_role: "គ្រូបង្រៀនអនឡាញ (ក្រៅម៉ោង)",
      exp3_org: "ការបង្រៀនឯករាជ្យ",
      exp3_desc: "បានបង្រៀនមុខវិជ្ជាគណិតវិទ្យា និងរូបវិទ្យាតាមប្រព័ន្ធ Zoom, Google Meet និង Telegram។ បានរៀបចំឯកសារឌីជីថល លំហាត់តេស្ត និងវិញ្ញាសាគំរូសម្រាប់សិស្សត្រៀមប្រឡងជាតិ។",

      // Education
      edu_subtitle: "មូលដ្ឋានសិក្សា",
      edu_title: "ការអប់រំ និងសញ្ញាបត្រ",
      edu1_year: "តុលា ២០២៣ – បច្ចុប្បន្ន",
      edu1_degree: "បរិញ្ញាបត្រគណិតវិទ្យា",
      edu1_school: "សាកលវិទ្យាល័យឯកទេសនៃកម្ពុជា (CUS)",
      edu1_location: "រាជធានីភ្នំពេញ កម្ពុជា",
      edu1_desc: "កំពុងបន្តការសិក្សាស្វែងយល់ស៊ីជម្រៅលើគណិតវិទ្យាវិភាគ ពិជគណិត ធរណីមាត្រ និងគំរូគណិតវិទ្យាអនុវត្ត ដើម្បីពង្រឹងសមត្ថភាពបង្រៀន។",

      edu2_year: "វិច្ឆិកា ២០២៤ – មិថុនា ២០២៦",
      edu2_degree: "គរុកោសល្យឯកទេស (គ្រូបង្រៀនកម្រិតអនុវិទ្យាល័យ គណិត & រូប)",
      edu2_school: "មជ្ឈមណ្ឌលគរុកោសល្យភូមិភាគ (គ.ស.ភ.ភ) ហ៊ុន សែន ខេត្តកណ្តាល",
      edu2_location: "ខេត្តកណ្តាល កម្ពុជា",
      edu2_desc: "បានបញ្ចប់ការបណ្តុះបណ្តាលគរុកោសល្យវិជ្ជាជីវៈជាតិផ្នែក STEM និងការដឹកនាំថ្នាក់រៀន។ ត្រូវបានតែងតាំងជាគ្រូបង្រៀនរដ្ឋពេញសិទ្ធិនៅអនុវិទ្យាល័យដំណាក់ព្រីង។",

      edu3_year: "វិច្ឆិកា ២០២៣ – សីហា ២០២៤",
      edu3_degree: "បរិញ្ញាបត្រវិទ្យាសាស្ត្រទិន្នន័យ (បញ្ចប់ឆ្នាំទី១)",
      edu3_school: "បណ្ឌិត្យសភាបច្ចេកវិទ្យាឌីជីថលកម្ពុជា (CADT)",
      edu3_location: "រាជធានីភ្នំពេញ កម្ពុជា",
      edu3_desc: "បានបញ្ចប់ការសិក្សាមូលដ្ឋានគ្រឹះក្បួនដោះស្រាយកុំព្យូទ័រ ការគិតបែបបច្ចេកវិទ្យា និងទិន្នន័យ។",

      edu4_year: "វិច្ឆិកា ២០២០ – តុលា ២០២៣",
      edu4_degree: "សញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ (បាក់ឌុប និទ្ទេស B) & បាក់ឌុបបារាំង",
      edu4_school: "វិទ្យាល័យ ហ៊ុន សែន សេរីភាព",
      edu4_location: "ក្រុងតាខ្មៅ ខេត្តកណ្តាល",
      edu4_desc: "ប្រឡងជាប់សញ្ញាបត្របាក់ឌុបជាតិឆ្នាំ ២០២៣ ទទួលបាននិទ្ទេស B និងសញ្ញាបត្របាក់ឌុបភាសាបារាំង (Diplôme du Baccalauréat Mention Francophone) ក្រោយរៀនថ្នាក់ពីរភាសា ៦ ឆ្នាំពេញ។",

      // Projects
      proj_subtitle: "ស្នាដៃ និងធនធាន",
      proj_title: "ស្នាដៃ និងគម្រោងសំខាន់ៗ",
      proj1_badge: "STEM អន្តរកម្ម",
      proj1_title: "បន្ទប់ពិសោធន៍គំរូរូបវិទ្យា & STEM អន្តរកម្ម",
      proj1_desc: "គំរូពិសោធន៍ឌីជីថលអន្តរកម្មលើមុខវិជ្ជារូបវិទ្យា (មេកានិច ពន្លឺ រលក) និងធរណីមាត្រ ជួយឱ្យសិស្សមើលឃើញរូបភាពច្បាស់លាស់ពីទ្រឹស្តីវិទ្យាសាស្ត្រ។",
      proj2_badge: "ធនធានកម្មវិធីសិក្សា",
      proj2_title: "ធនាគារវិញ្ញាសា និងសន្លឹកកិច្ចការគណិតវិទ្យាអនុវិទ្យាល័យ",
      proj2_desc: "បណ្តុំលំហាត់ វិញ្ញាសាប្រឡង និងដំណោះស្រាយគំរូតាមលំដាប់លំដោយ ស្របតាមកម្មវិធីសិក្សាជាតិរបស់ក្រសួងសម្រាប់ថ្នាក់ទី ៧ ដល់ ៩។",
      proj3_badge: "សហគមន៍អនឡាញ",
      proj3_title: "ថ្នាក់រៀននិម្មិត និងសហគមន៍សិក្សាលើ Telegram",
      proj3_desc: "សហគមន៍សិក្សាសកម្មដែលផ្តល់ការដោះស្រាយលំហាត់ចម្ងល់ ការចែករំលែកគន្លឹះគណិតវិទ្យា និងការពិភាក្សាសម្រាប់សិស្សអនុវិទ្យាល័យ។",
      proj4_badge: "ផលិតភាព & ទិន្នន័យ",
      proj4_title: "ប្រព័ន្ធកត់ត្រា និងវិភាគពិន្ទុការសិក្សារបស់សិស្ស",
      proj4_desc: "ឧបករណ៍គណនាពិន្ទុ និងតាមដានការវិវត្តនៃការសិក្សារបស់សិស្សដោយស្វ័យប្រវត្តិ ជួយឱ្យគ្រូអាចដឹងបានលឿនពីសិស្សដែលត្រូវការការយកចិត្តទុកដាក់បន្ថែម។",
      proj_btn_demo: "ទស្សនាការបង្ហាញ",
      proj_btn_view: "មើលឯកសារ",
      proj_btn_telegram: "ចូលរួមសហគមន៍",
      proj_btn_inquire: "សាកសួរ",

      // Mentors
      mentors_subtitle: "ការបញ្ជាក់ពីលោកគ្រូអ្នកគ្រូ",
      mentors_title: "លោកគ្រូអ្នកគ្រូណែនាំ និងអាជ្ញាកណ្តាល",
      mentor1_title: "គ្រូបង្រៀនគណិតវិទ្យាអនុវិទ្យាល័យ និងជាគ្រូណែនាំ",
      mentor1_org: "វិទ្យាល័យ ហ៊ុន សែន សេរីភាព",
      mentor2_title: "គ្រូបង្រៀនរូបវិទ្យាអនុវិទ្យាល័យ និងជាគ្រូណែនាំ",
      mentor2_org: "វិទ្យាល័យ ហ៊ុន សែន តាខ្មៅ",

      // Contact
      contact_subtitle: "ទាក់ទងមកខ្ញុំ",
      contact_title: "ទំនាក់ទំនង រិន សិទ្ធិពង្ស",
      contact_heading: "សូមទាក់ទងមកដើម្បីពិភាក្សាការងារ",
      contact_intro: "ប្រសិនបើលោកអ្នកមានបំណងសហការលើការបង្រៀន STEM ការរៀបចំឯកសារគរុកោសល្យ ឬការបំប៉នការសិក្សា សូមទាក់ទងមកខ្ញុំបាទដោយផ្ទាល់។",
      contact_email_lbl: "អ៊ីមែល",
      contact_tg_lbl: "តេឡេក្រាម & ទូរស័ព្ទ",
      contact_loc_lbl: "ទីលំនៅ",
      contact_loc_val: "សង្កាត់ព្រែកឫស្សី ក្រុងតាខ្មៅ ខេត្តកណ្តាល កម្ពុជា",
      
      // Form
      form_title: "ផ្ញើសារមកខ្ញុំដោយផ្ទាល់",
      form_desc: "សូមបំពេញទម្រង់ខាងក្រោម ខ្ញុំបាទនឹងឆ្លើយតបសាររបស់លោកអ្នកយ៉ាងឆាប់រហ័ស។",
      form_name_lbl: "ឈ្មោះរបស់អ្នក",
      form_email_lbl: "អាសយដ្ឋានអ៊ីមែល",
      form_subject_lbl: "ប្រធានបទ",
      form_message_lbl: "ខ្លឹមសារសារ",
      form_submit_btn: "ផ្ញើសារ",
      form_success: "សូមអរគុណសម្រាប់ការទាក់ទង! សាររបស់លោកអ្នកត្រូវបានរៀបចំរួចរាល់។ ខ្ញុំបាទនឹងឆ្លើយតបវិញក្នុងពេលឆាប់ៗ។",
      form_sending: "កំពុងដំណើរការផ្ញើសារ...",

      // Footer
      footer_bio: "គ្រូបង្រៀនកម្រិតអនុវិទ្យាល័យ ឯកទេសគណិតវិទ្យា និងរូបវិទ្យា។ ប្តេជ្ញាលើកកម្ពស់គរុកោសល្យទំនើប ភាពជោគជ័យនៃការសិក្សារបស់សិស្ស និងការអប់រំ STEM ឌីជីថល។",
      footer_links_title: "តំណភ្ជាប់រហ័ស",
      footer_connect_title: "ទំនាក់ទំនងផ្ទាល់",
      footer_rights: "រក្សាសិទ្ធិគ្រប់យ៉ាង។",
      footer_built: "បង្កើតឡើងដោយប្រើ HTML5, CSS ទំនើប និង vanilla JavaScript សុទ្ធ។"
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
        el.textContent = dictionary[key];
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
