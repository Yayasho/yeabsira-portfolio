export const profile = {
  name: "Yeabsira Assegid",
  firstName: "Yeabsira",
  roleLabel: "Software Engineer · Harar, Ethiopia",
  headlineTop: "I'm Yeabsira.",
  headlineLines: ["I build.", "I create.", "I explore."],
  subhead: "Software Engineer with a curious mind and a passion for creating meaningful digital experiences.",
  email: "yeabas8@gmail.com",
  phone: "0909621699",
  telegram: "https://t.me/haneney",
  github: "https://github.com/Yayasho",
  linkedin: "https://linkedin.com/in/yeabsira-asegid-87884a262",
  location: "Harar, Ethiopia",
  cvUrl: "/cv.pdf", 
  photo: "/profile.png", 
  tech: ["React.js", "CSS", "Framer Motion", "Django REST Framework", "PostgreSQL"],
  about: [
    "I'm a Software Engineering graduate from Jigjiga University, with a CGPA of 3.75/4.00, based in Harar, Ethiopia. I enjoy building web applications that solve real-world problems, with a focus on full-stack development using React, Django, and PostgreSQL. I value clean code, thoughtful architecture, and user-friendly design.",
    "One of my key projects is the Land Record Management System (LRMS), developed to digitize land registration and ownership records for the Harari Region. I also completed a four-month internship at Harari Innovation and Technology, gaining practical experience in software development and professional teamwork.",
    "I'm interested in opportunities where I can contribute my technical skills, take on meaningful challenges, and continue growing as a software engineer."
  ],
};

export const skills = [
  { category: "Languages", items: ["Python", "JavaScript", "HTML5", "CSS3"] },
  { category: "Frameworks", items: ["Django", "Django REST Framework", "React.js"] },
  { category: "Databases", items: ["PostgreSQL"] },
  { category: "Tools", items: ["Git", "GitHub", "Postman", "VS Code"] },
];

export const projects = [
  {
    title: "Land Record Management System (LRMS)",
    summary: "A web-based application that digitizes and manages land records for the Harari Region, allowing authorized users to register, search, access, and manage land information securely.",
    bullets: [
      "Built with React, Django, Django REST Framework, and PostgreSQL",
      "Designed the database schema for land records, owners, and transactions",
      "REST API backend with role-based access for authorized users",
    ],
    tech: ["React", "Django", "DRF", "PostgreSQL"],
    images: [
      { src: "/LOGIN.png", caption: "Secure Login — Authorized access portal for administrators and staff." },
      { src: "/FORM.png", caption: "Land Registration Form — Adding a new land owner with general, property, financial, and location details." },
      { src: "/REPORT.png", caption: "Admin Reports Dashboard — Viewing and managing land records organized by department and kebele." },
      { src: "/DASHBOARD.png", caption: "Admin Statistics Dashboard — General statistics, income tracking, and active user overview." }
    ], 
    github: "https://github.com/Yayasho",
    live: "",
    featured: true,
  },
  {
     
    title: "Personal Portfolio Website",
    summary: "A modern, editorial-style personal portfolio built with React and Tailwind CSS. Features smooth page transitions, a custom CV modal, an interactive project gallery, and a fully functional contact form integrated with Formspree.",
    bullets: [
      "Built with React, Vite, and Tailwind CSS",
      "Implemented smooth scroll animations and layout transitions using Framer Motion",
      "Integrated a secure Formspree contact form and interactive CV modal"
    ],
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    images: [], 
    github: "https://github.com/Yayasho",
    live: "",
    featured: false,
  
  },
];

export const journey = [
  {
    type: "Experience",
    title: "Software Development Intern",
    org: "Harari Innovation and Technology",
    period: "4 months",
    description: "Built and contributed to software projects in a professional team.",
  },
  {
    type: "Volunteer",
    title: "Project Contributor",
    org: "American Corner, Dire Dawa",
    period: "Present",
    description: "Collaborated with a team to contribute to community-focused projects, applying software engineering skills to build digital solutions and support local educational initiatives.",
  },
  {
    type: "Education",
    title: "BSc Software Engineering",
    org: "Jigjiga University",
    period: "Graduated 2026 · CGPA 3.75/4.00",
    description: "",
  },
];