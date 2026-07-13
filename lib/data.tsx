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
    id: "lawcotpus",
    title: "Lawcotpus",
    description: "A comprehensive legal tech application designed to streamline case management and legal research for professionals.",
    image: "/projects/lawcotpus.png",
    techStack: ["React", "TypeScript", "Node.js", "MongoDB"],
    liveUrl: "https://lawcotpus-marketing-course.netlify.app",
    githubUrl: "https://github.com/Ashim-Raj12/lawcotpus",
    features: [
      "Case management dashboard",
      "Legal document analysis",
      "Client portal",
      "Automated scheduling"
    ]
  },
  {
    id: "urbannest",
    title: "UrbanNest",
    description: "A modern real estate and property management platform that connects buyers, sellers, and agents seamlessly.",
    image: "/projects/urbannest.png",
    techStack: ["Next.js", "Tailwind CSS", "Supabase", "Prisma"],
    liveUrl: "https://urbannestproperties.netlify.app",
    githubUrl: "https://github.com/Ashim-Raj12/UrbanNest",
    features: [
      "Interactive property maps",
      "Virtual tour integration",
      "Advanced search filters",
      "Agent messaging"
    ]
  },
  {
    id: "subtrack",
    title: "Subtrack",
    description: "An intuitive subscription tracking application that helps users monitor and manage their recurring expenses.",
    image: "/projects/subtrack.png",
    techStack: ["React", "Firebase", "TypeScript", "Redux"],
    liveUrl: "https://subtrack-web-mt8s.onrender.com",
    githubUrl: "https://github.com/Ashim-Raj12/subtrack",
    features: [
      "Expense visualization",
      "Renewal alerts",
      "Multi-currency support",
      "Spending analytics"
    ]
  },
  {
    id: "vedahealth",
    title: "Vedahealth",
    description: "A holistic healthcare and wellness platform offering personalized health tracking and telehealth integrations.",
    image: "/projects/vedahealth.png",
    techStack: ["Next.js", "GraphQL", "Node.js", "PostgreSQL"],
    liveUrl: "https://vedahealt.netlify.app",
    githubUrl: "https://github.com/Ashim-Raj12/vedahealth",
    features: [
      "Patient health dashboard",
      "Appointment booking",
      "Telemedicine video calls",
      "Electronic health records"
    ]
  },
  {
    id: "hollow-fabric",
    title: "Hollow Fabric Clothing",
    description: "A premium headless e-commerce store for a modern clothing brand, featuring seamless checkout and dynamic inventory.",
    image: "/projects/hollow_fabric.png",
    techStack: ["React", "Shopify API", "Framer Motion", "Tailwind CSS"],
    liveUrl: "https://hollowfabric.com/",
    githubUrl: "https://github.com/Ashim-Raj12/hollow-fabric-clothing",
    features: [
      "Dynamic cart system",
      "Stripe payment gateway",
      "Product filtering",
      "Responsive design"
    ]
  },
  {
    id: "univibe",
    title: "Univibe Connect",
    description: "A university-centric social networking platform designed to foster communication and collaboration among students.",
    image: "/projects/univibe.png",
    techStack: ["Next.js", "Socket.io", "MongoDB", "Express"],
    liveUrl: "https://univibe.online/",
    githubUrl: "https://github.com/Ashim-Raj12/univibe-connect",
    features: [
      "Real-time chat",
      "Event discovery",
      "Study group forums",
      "Peer-to-peer networking"
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
