/* THE JOURNEY — Mano Teja Reddy's timeline */

export type Chapter = {
  id: string;
  year: string;
  title: string;
  place: string;
  story: string;
  bridge: string;
  fr?: { title?: string; place?: string; story?: string; bridge?: string };
};

export const CHAPTERS: Chapter[] = [
  {
    id: "beginning",
    year: "2023",
    title: "The Beginning",
    place: "Siddharth Institute of Engineering & Technology (JNTUA)",
    story:
      "Started B.Tech in Computer Science & Engineering specializing in Artificial Intelligence & Data Science. Learning the foundations of computer science and discovering how technology can be used to solve real problems.",
    bridge: "Technology became more than something I studied. It became something I used to build.",
  },
  {
    id: "foundation",
    year: "2024",
    title: "Building the Foundation",
    place: "Web Development & Software Engineering",
    story:
      "Started building websites and software projects. Explored programming, web development, frontend engineering, APIs, Git and deployment.",
    bridge: "Moving from theory to hands-on software development.",
  },
  {
    id: "working",
    year: "2025",
    title: "From Learning to Working",
    place: "The City Offers · D'Qualita Furnitures · TENSPICK",
    story:
      "Started gaining practical experience through real-world projects, internships and client-oriented development. Built 30+ websites, digital products and technology solutions for real businesses.",
    bridge: "Connecting code with real business needs.",
  },
  {
    id: "ai-shift",
    year: "2025",
    title: "The AI Shift",
    place: "SmartInsight · AI Ticket Resolution · SkillBridge · MedScan · NeuroCare AI",
    story:
      "Moved deeper into Artificial Intelligence and Data Science. Developed and explored projects across healthcare AI, NLP, computer vision, and agentic workflows. The question changed from 'Can I build this?' to 'Can I make this intelligent?'",
    bridge: "Combining software engineering with artificial intelligence.",
  },
  {
    id: "scale",
    year: "2026",
    title: "Building at Scale",
    place: "Siddharth Hackfest 2026 · AI & Data Science Engineering",
    story:
      "Current focus: AI Engineering, AI Agents, Healthcare AI, Automation, Full-Stack Development, Technical Leadership, and Real-world Products. Served as Technical Lead at Siddharth Hackfest 2026.",
    bridge: "THE JOURNEY IS STILL BEING WRITTEN.",
  },
];
