import {
  Code2,
  Database,
  Layout,
  Server,
  Smartphone,
  Sparkles,
} from "lucide-react";
import React from "react";

export const siteMetadata = {
  name: "Ashim Raj",
  role: "Full Stack AI Engineer",
  email: "programwithashim@gmail.com",
  socials: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    twitter: "https://twitter.com/",
    whatsapp: "https://wa.me/1234567890",
  },
};

export const heroData = {
  greeting: "Hello, I'm",
  name: "Ashim Raj",
  roles: [
    "Full Stack Developer",
    "AI Integration Specialist",
    "UI/UX Enthusiast",
  ],
  bio: "I build exceptional, performant, and scalable digital experiences. With a strong foundation in modern web technologies and AI, I turn complex problems into elegant solutions.",
};

export const aboutData = {
  introduction: "I'm a passionate software engineer specializing in building full-stack web applications. My journey started with a fascination for creating things from scratch, and it has evolved into a career focused on delivering high-quality, user-centric software.",
  focus: "Currently, I'm focused on exploring the intersection of web development and Artificial Intelligence, building tools that augment human capabilities.",
  stats: [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Completed", value: "20+" },
    { label: "Happy Clients", value: "10+" },
  ],
};

export const skillsData = [
  {
    category: "Frontend",
    icon: <Layout className="w-6 h-6" />,
    skills: [
      "HTML5", "CSS3", "Tailwind CSS", "JavaScript", "TypeScript", "React", "Next.js", "Redux"
    ],
  },
  {
    category: "Backend",
    icon: <Server className="w-6 h-6" />,
    skills: [
      "Node.js", "Express.js", "REST APIs", "GraphQL", "Authentication", "JWT"
    ],
  },
  {
    category: "Database",
    icon: <Database className="w-6 h-6" />,
    skills: [
      "MongoDB", "MySQL", "PostgreSQL", "Supabase", "Redis"
    ],
  },
  {
    category: "AI & Tools",
    icon: <Sparkles className="w-6 h-6" />,
    skills: [
      "Gemini API", "OpenAI API", "Prompt Engineering", "Git", "Docker", "AWS", "Vercel"
    ],
  },
];

export const featuredProjects = [
  {
    id: "project-1",
    title: "AI-Powered CRM Platform",
    description: "A comprehensive customer relationship management system with integrated AI for predictive analytics and automated email responses.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    techStack: ["Next.js", "TypeScript", "Tailwind", "Supabase", "OpenAI API"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    features: [
      "Real-time analytics dashboard",
      "AI-driven lead scoring",
      "Automated follow-up emails",
      "Role-based access control"
    ]
  },
  {
    id: "project-2",
    title: "E-Commerce Experience",
    description: "A high-performance headless e-commerce store featuring a custom 3D product viewer and seamless checkout flow.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    techStack: ["React", "Node.js", "MongoDB", "Stripe", "Three.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    features: [
      "3D product customization",
      "Stripe payment integration",
      "Inventory management system",
      "Order tracking"
    ]
  },
  {
    id: "project-3",
    title: "Developer Workflow Tool",
    description: "A desktop application for developers to manage code snippets, environment variables, and deployment scripts locally.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000",
    techStack: ["Electron", "React", "TypeScript", "Tailwind"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    features: [
      "Local encryption for secrets",
      "Cloud sync option",
      "Syntax highlighting",
      "Quick-copy shortcuts"
    ]
  }
];

export const experienceData = [
  {
    id: 1,
    role: "Senior Full Stack Engineer",
    company: "TechNova Solutions",
    period: "2022 - Present",
    description: "Leading the development of enterprise-grade web applications. Architected a microservices-based backend that improved system scalability by 40%. Mentoring junior developers and establishing CI/CD pipelines.",
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "Creative Digital Agency",
    period: "2020 - 2022",
    description: "Built pixel-perfect, responsive user interfaces for high-profile clients. Spearheaded the migration from legacy React code to Next.js, boosting SEO performance and page load speeds.",
  },
  {
    id: 3,
    role: "Software Engineering Intern",
    company: "StartupX",
    period: "2019 - 2020",
    description: "Assisted in the development of an MVP for a fintech application. Gained hands-on experience with React, Node.js, and agile methodologies.",
  }
];

export const workProcessData = [
  { step: "01", title: "Discovery", description: "Understanding the project requirements, target audience, and business goals." },
  { step: "02", title: "Planning", description: "Creating architecture diagrams, wireframes, and defining the tech stack." },
  { step: "03", title: "Development", description: "Writing clean, scalable code following agile methodologies and best practices." },
  { step: "04", title: "Deployment", description: "Rigorous testing and deploying to production with CI/CD pipelines." }
];

export const testimonialsData = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Product Manager @ TechNova",
    content: "Ashim is an exceptional engineer. He consistently delivers high-quality code and brings innovative solutions to the table. His integration of AI features significantly boosted our product's value.",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO @ StartupX",
    content: "Working with Ashim was a breeze. He translated our complex requirements into a beautifully functioning application. Highly recommend him for any full-stack project.",
    avatar: "https://i.pravatar.cc/150?u=michael"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Lead Designer",
    content: "As a designer, I appreciate developers who care about the details. Ashim brought my designs to life with pixel-perfect accuracy and smooth animations.",
    avatar: "https://i.pravatar.cc/150?u=elena"
  }
];

export const faqsData = [
  {
    question: "What is your typical tech stack?",
    answer: "I primarily work with Next.js, React, TypeScript, and Tailwind CSS for the frontend. For the backend, I use Node.js, Express, and databases like PostgreSQL or MongoDB. I also integrate AI services like OpenAI and Gemini APIs."
  },
  {
    question: "Are you available for freelance work?",
    answer: "Yes, I am currently open to freelance opportunities. Please use the contact form to discuss your project requirements."
  },
  {
    question: "Do you design the UI as well?",
    answer: "While my primary expertise is in engineering, I have a strong eye for UI/UX design and often collaborate closely with designers or design applications from scratch using tools like Figma."
  },
  {
    question: "How do you handle project communication?",
    answer: "I believe in transparent and frequent communication. I typically use Slack, Email, and weekly video calls to keep stakeholders updated on progress."
  }
];
