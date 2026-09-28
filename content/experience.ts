/* Professional experience & leadership — Mano Teja Reddy */

export type Role = {
  company: string;
  role: string;
  type: "Internship" | "Full-time" | "Hackathon" | "Freelance";
  location: string;
  period: string;
  summary: string;
  achievements: string[];
  outcome: string;
  skills: string[];
  color: string;
  fg: "light" | "dark";
  logo?: {
    src: string;
    variant: "tile" | "plate";
    aspect: number;
    placement?: "right" | "below";
  };
  fr?: { role?: string; summary?: string; outcome?: string; achievements?: string[] };
};

export const ROLES: Role[] = [
  {
    company: "Infosys Springboard",
    role: "AI Engineer Intern",
    type: "Internship",
    location: "India",
    period: "2025",
    summary:
      "Worked on AI-focused development, model application, and practical problem solving through hands-on internship projects.",
    achievements: [
      "Applied machine learning models to solve structured data and AI engineering problems",
      "Gained hands-on experience with modern AI frameworks and cloud execution environments",
      "Completed verified AI Engineer Internship credential",
    ],
    outcome: "Verified AI Engineer Internship completion & practical AI development",
    skills: ["Python", "Artificial Intelligence", "Machine Learning", "Data Science"],
    color: "#0072E3",
    fg: "light",
  },
  {
    company: "Siddharth Hackfest 2026",
    role: "Technical Lead",
    type: "Hackathon",
    location: "Siddharth Institute of Engineering & Technology",
    period: "2026",
    summary:
      "Contributed to technical direction, development and coordination in a hackathon environment, helping teams move from ideas toward working prototypes.",
    achievements: [
      "Led technical direction and architectural guidance across participant teams",
      "Coordinated hackathon build workflows, API integrations, and prototype evaluation",
      "Fostered collaborative problem solving under tight time constraints",
    ],
    outcome: "Technical leadership across multi-team hackathon build environment",
    skills: ["Technical Leadership", "System Architecture", "Hackathon", "Project Coordination"],
    color: "#6D3BF5",
    fg: "light",
  },
  {
    company: "TENSPICK",
    role: "Client Manager & Director",
    type: "Full-time",
    location: "India",
    period: "2025",
    summary:
      "Client Manager & Director at TENSPICK — managing client communications, converting business needs into digital project requirements, coordinating 30+ website & digital initiatives, and working at the intersection of technology, clients and execution.",
    achievements: [
      "Managed client communication, requirement gathering, and project coordination for 30+ website & digital projects",
      "Worked with development and design workflows to oversee project progress and on-time delivery",
      "Contributed to business and technology decisions, supporting digital products and automation initiatives",
    ],
    outcome: "30+ client websites & digital projects coordinated and delivered",
    skills: ["Client Management", "Project Coordination", "Web Development", "Digital Products", "Automation"],
    color: "#FF2E0F",
    fg: "light",
  },
  {
    company: "The City Offers",
    role: "Web Developer Intern",
    type: "Internship",
    location: "India",
    period: "2025",
    summary:
      "Worked on real-world website development, frontend implementation, and responsive digital UI design for business platforms.",
    achievements: [
      "Built clean, responsive website interfaces for business promotional features",
      "Optimized cross-browser rendering and mobile responsiveness",
    ],
    outcome: "Production website deployment for commercial business platform",
    skills: ["HTML5", "CSS3", "JavaScript", "Frontend Development"],
    color: "#FF6A00",
    fg: "light",
  },
  {
    company: "D'Qualita Furnitures",
    role: "Web Developer Intern",
    type: "Internship",
    location: "India",
    period: "2025",
    summary:
      "Worked on website development, catalog UI presentation, and digital experiences for a retail furniture environment.",
    achievements: [
      "Designed and implemented product showcase UI layouts for furniture catalog",
      "Enhanced user experience and navigation for online visitors",
    ],
    outcome: "Enhanced digital brand experience & product catalog UI",
    skills: ["Web Development", "UI/UX", "JavaScript", "Responsive Design"],
    color: "#065F46",
    fg: "light",
  },
  {
    company: "Santric Technologies",
    role: "Web Developer",
    type: "Internship",
    location: "India",
    period: "2025",
    summary:
      "Worked on web development, technical projects, and client application components.",
    achievements: [
      "Developed web components and integrated API endpoints for client applications",
      "Collaborated on modern frontend engineering and performance tuning",
    ],
    outcome: "Shipped modular web features and client frontend components",
    skills: ["React", "JavaScript", "Git", "REST APIs"],
    color: "#171429",
    fg: "light",
  },
];
