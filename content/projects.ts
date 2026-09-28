/* Featured projects — single source of truth for Mano Teja Reddy's portfolio.
   Contains exactly the 10 specified projects. */

export type Study = {
  role: string;
  timeline: string;
  context: string;
  problem: string;
  process: { title: string; body: string }[];
  decisions: { title: string; why: string }[];
  outcomes: string[];
  reflection: string;
  note?: string;
};

export type StudyFr = Partial<Study>;

export type Cover = {
  bg: string;
  ink: "light" | "dark";
  src?: string;
  aspect?: number;
  variant?: "brand" | "photo";
  focus?: string;
  mark?: string;
};

export type Project = {
  slug: string;
  title: string;
  tags: string[];
  year: string;
  oneLiner: string;
  contribution: string;
  coverLabel: string;
  cover?: Cover;
  site?: { url: string; label: string };
  repo?: string;
  award?: string;
  study: Study;
  fr?: {
    title?: string;
    oneLiner?: string;
    contribution?: string;
    tags?: string[];
    study?: StudyFr;
  };
};

export const PROJECTS: Project[] = [
  /* ─────────────── 01 · D'QUALITA FURNITURES ─────────────── */
  {
    slug: "dqualita-furnitures",
    title: "D'Qualita Furnitures",
    tags: ["Web Development", "Commercial Project"],
    year: "2025",
    oneLiner: "A web development project for D'Qualita Furnitures.",
    contribution: "Web development and digital catalog UI implementation.",
    coverLabel: "D'QUALITA FURNITURES",
    cover: { bg: "#1F2937", ink: "light", mark: "DQ" },
    study: {
      role: "Web Developer",
      timeline: "2025 · Commercial Project",
      context: "A commercial web development project for D'Qualita Furnitures.",
      problem: "Creating a responsive digital web presence to showcase commercial furniture collections.",
      process: [
        {
          title: "UI Design & Catalog Layout",
          body: "Designed clean responsive layout grids to showcase product catalogs effectively across devices.",
        },
        {
          title: "Frontend Engineering",
          body: "Implemented responsive web components and clean navigation structures.",
        },
      ],
      decisions: [
        {
          title: "Performance & Responsive First",
          why: "Ensured fast loading speeds and optimal mobile rendering for online visitors.",
        },
      ],
      outcomes: ["Responsive website launched for commercial furniture business"],
      reflection: "Commercial web projects require balancing visual aesthetics with fast, intuitive navigation.",
    },
  },

  /* ─────────────── 02 · SUPERIOR FURNITURES ─────────────── */
  {
    slug: "superior-furnitures",
    title: "Superior Furnitures",
    tags: ["Web Development", "Commercial Project"],
    year: "2025",
    oneLiner: "A web development project for Superior Furnitures.",
    contribution: "Custom website development, layout architecture, and user experience.",
    coverLabel: "SUPERIOR FURNITURES",
    cover: { bg: "#1E1B4B", ink: "light", mark: "SF" },
    study: {
      role: "Web Developer",
      timeline: "2025 · Commercial Project",
      context: "A web development project for Superior Furnitures.",
      problem: "Building a modern web presence to present furniture ranges and business contact information.",
      process: [
        {
          title: "Layout Architecture",
          body: "Structured visual product sections and business contact flows for prospective buyers.",
        },
        {
          title: "Development & Optimization",
          body: "Built lightweight, cross-browser compatible web pages.",
        },
      ],
      decisions: [
        {
          title: "Clean Typography & Visual Contrast",
          why: "Focused on readability and high visual contrast for product highlights.",
        },
      ],
      outcomes: ["Modern commercial website built and deployed"],
      reflection: "Simple, structured layouts improve engagement for retail and commercial clients.",
    },
  },

  /* ─────────────── 03 · SPARK DANCE ACADEMY ─────────────── */
  {
    slug: "spark-dance-academy",
    title: "Spark Dance Academy",
    tags: ["Web Development", "Commercial Project"],
    year: "2025",
    oneLiner: "A website project for Spark Dance Academy.",
    contribution: "Website design, event showcase UI, and academy information platform.",
    coverLabel: "SPARK DANCE ACADEMY",
    cover: { bg: "#831843", ink: "light", mark: "SDA" },
    study: {
      role: "Web Developer",
      timeline: "2025 · Commercial Project",
      context: "A website project for Spark Dance Academy.",
      problem: "Designing an energetic and informative web platform for dance programs, schedules, and events.",
      process: [
        {
          title: "Vibrant UI Layout",
          body: "Crafted a dynamic layout reflecting the energy and culture of the academy.",
        },
        {
          title: "Program & Schedule Showcase",
          body: "Structured course schedules, trainer profiles, and event galleries.",
        },
      ],
      decisions: [
        {
          title: "Mobile-First Accessibility",
          why: "Ensured parents and students can easily view class schedules from smartphones.",
        },
      ],
      outcomes: ["Engaging web platform deployed for academy students and visitors"],
      reflection: "Designing for creative academies demands vibrant visuals paired with clear informational hierarchy.",
    },
  },

  /* ─────────────── 04 · MEDGEMMA AI ─────────────── */
  {
    slug: "medgemma-ai",
    title: "MedGemma AI",
    tags: ["Artificial Intelligence", "Healthcare AI"],
    year: "2026",
    oneLiner: "An AI project exploring the use of Google's MedGemma model for healthcare and medical AI applications.",
    contribution: "Healthcare AI exploration, MedGemma model integration, and medical query pipeline.",
    coverLabel: "MEDGEMMA AI",
    cover: { bg: "#0F172A", ink: "light", mark: "MG" },
    repo: "https://github.com/Narapu-Reddy-Mano-Teja-Reddy",
    study: {
      role: "AI Engineer",
      timeline: "2026 · Healthcare AI Project",
      context: "An AI project exploring the application of Google's specialized MedGemma open medical LLM.",
      problem: "Exploring how specialized open-weight medical language models can process complex healthcare queries and clinical notes accurately.",
      process: [
        {
          title: "Model Pipeline Setup",
          body: "Configured MedGemma inference pipelines for processing medical queries and text data.",
        },
        {
          title: "Prompt Engineering & Evaluation",
          body: "Evaluated medical query response accuracy and structured output formats.",
        },
      ],
      decisions: [
        {
          title: "Safety & Privacy First",
          why: "Structured AI prompts to enforce medical disclaimer standards and data privacy.",
        },
      ],
      outcomes: ["Functional MedGemma AI pipeline for medical text processing"],
      reflection: "Specialized open-weight medical models unlock powerful opportunities for privacy-conscious healthcare AI.",
    },
  },

  /* ─────────────── 05 · AI TICKET RESOLUTION ─────────────── */
  {
    slug: "ai-ticket-resolution",
    title: "AI Ticket Resolution",
    tags: ["Artificial Intelligence", "Automation"],
    year: "2025",
    oneLiner: "An AI-powered ticket resolution project focused on intelligent ticket understanding and support workflows.",
    contribution: "NLP query parsing, ticket categorization, and automated response generation.",
    coverLabel: "AI TICKET RESOLUTION",
    cover: { bg: "#312E81", ink: "light", mark: "AI" },
    repo: "https://github.com/Narapu-Reddy-Mano-Teja-Reddy",
    study: {
      role: "AI Developer",
      timeline: "2025 · AI Automation Project",
      context: "An AI-powered ticket resolution project focused on intelligent ticket understanding and support workflows.",
      problem: "Manual triage of support tickets causes delays and inconsistent response times during high ticket volume.",
      process: [
        {
          title: "Ticket Classification",
          body: "Built NLP routines to parse user query intent, extract keywords, and assign category tags.",
        },
        {
          title: "Automated Resolution Workflow",
          body: "Generated context-aware response drafts based on knowledge base matching.",
        },
      ],
      decisions: [
        {
          title: "Smart Escalation",
          why: "Complex or low-confidence tickets are flagged for human agent review.",
        },
      ],
      outcomes: ["Automated support ticket triage and intelligent response drafting"],
      reflection: "Intelligent automation streamlines repetitive support workflows while maintaining accuracy.",
    },
  },

  /* ─────────────── 06 · CVRM COLLEGE ─────────────── */
  {
    slug: "cvrm-college",
    title: "CVRM College",
    tags: ["Web Development", "Education"],
    year: "2025",
    oneLiner: "A website development project for CVRM College.",
    contribution: "Academic web portal design, course structure presentation, and institutional UI.",
    coverLabel: "CVRM COLLEGE",
    cover: { bg: "#065F46", ink: "light", mark: "CVRM" },
    study: {
      role: "Web Developer",
      timeline: "2025 · Educational Project",
      context: "A website development project for CVRM College.",
      problem: "Creating an accessible, comprehensive academic web platform for prospective and enrolled students.",
      process: [
        {
          title: "Information Architecture",
          body: "Organized departments, course catalogs, admission guidelines, and campus news.",
        },
        {
          title: "Frontend Engineering",
          body: "Implemented clean responsive templates with accessible navigation menus.",
        },
      ],
      decisions: [
        {
          title: "Clear Hierarchical Navigation",
          why: "Helps prospective students find course details and application requirements quickly.",
        },
      ],
      outcomes: ["Institutional academic website built and deployed"],
      reflection: "Educational portals require structured information design to serve diverse student audiences.",
    },
  },

  /* ─────────────── 07 · VIDYANIKETHAN COLLEGE ─────────────── */
  {
    slug: "vidyanikethan-college",
    title: "Vidyanikethan College",
    tags: ["Web Development", "Education"],
    year: "2025",
    oneLiner: "A website development project for Vidyanikethan College.",
    contribution: "Institutional website architecture, department showcases, and student portal UI.",
    coverLabel: "VIDYANIKETHAN COLLEGE",
    cover: { bg: "#1E3A8A", ink: "light", mark: "VNC" },
    study: {
      role: "Web Developer",
      timeline: "2025 · Educational Project",
      context: "A website development project for Vidyanikethan College.",
      problem: "Building a modern, reliable digital portal to communicate institutional updates and academic programs.",
      process: [
        {
          title: "Portal Layout & Department Pages",
          body: "Structured individual department hubs, faculty information, and announcements.",
        },
        {
          title: "Cross-Device Optimization",
          body: "Optimized pages for mobile, tablet, and desktop viewing.",
        },
      ],
      decisions: [
        {
          title: "Fast Loading Speed",
          why: "Ensured accessibility even over low-bandwidth mobile networks.",
        },
      ],
      outcomes: ["Responsive educational website launched for the college"],
      reflection: "Performance optimization is essential for educational sites accessed across varied network conditions.",
    },
  },

  /* ─────────────── 08 · VINAYAK FESTIVE MANAGEMENT SYSTEM ─────────────── */
  {
    slug: "vinayak-festive-management-system",
    title: "Vinayak Festive Management System",
    tags: ["Web Application", "Management System"],
    year: "2025",
    oneLiner: "A digital management system created for managing a Vinayak Chavithi festival and its related information and activities.",
    contribution: "Web application development, festival activity tracking, and event management UI.",
    coverLabel: "VINAYAK FESTIVE MANAGEMENT",
    cover: { bg: "#7C2D12", ink: "light", mark: "VFMS" },
    study: {
      role: "Web Application Developer",
      timeline: "2025 · Web Application Project",
      context: "A digital management system created for managing Vinayak Chavithi festival activities and information.",
      problem: "Coordinating festival schedules, volunteer tasks, announcements, and activity tracking digitally.",
      process: [
        {
          title: "Application Workflow Design",
          body: "Designed user-friendly interfaces for viewing festival schedules, event updates, and committee activities.",
        },
        {
          title: "System Implementation",
          body: "Developed full web application interfaces and backend data logging for event management.",
        },
      ],
      decisions: [
        {
          title: "Intuitive Event Dashboards",
          why: "Allowed organizers and community members to track daily festival activities easily.",
        },
      ],
      outcomes: ["Functional digital festival management web application"],
      reflection: "Digital management systems bring clarity and coordination to large community events.",
    },
  },

  /* ─────────────── 09 · SUCCESS CONSULTANCY AND SERVICES ─────────────── */
  {
    slug: "success-consultancy-and-services",
    title: "Success Consultancy and Services",
    tags: ["Web Development", "Business"],
    year: "2025",
    oneLiner: "A website development project for Success Consultancy and Services.",
    contribution: "Corporate web development, service offerings UI, and consultation contact portal.",
    coverLabel: "SUCCESS CONSULTANCY",
    cover: { bg: "#14532D", ink: "light", mark: "SCS" },
    study: {
      role: "Web Developer",
      timeline: "2025 · Business Project",
      context: "A website development project for Success Consultancy and Services.",
      problem: "Presenting professional consultancy services and business solutions through a clean corporate website.",
      process: [
        {
          title: "Service Portfolio Design",
          body: "Organized consulting domains, client testimonials, and service packages.",
        },
        {
          title: "Inquiry & Contact Flow",
          body: "Implemented streamlined lead inquiry forms and contact callouts.",
        },
      ],
      decisions: [
        {
          title: "Professional Corporate Aesthetic",
          why: "Established credibility and clarity for corporate and individual business clients.",
        },
      ],
      outcomes: ["Corporate consultancy website built and launched"],
      reflection: "Consultancy sites require clear value propositions and low-friction contact mechanisms.",
    },
  },

  /* ─────────────── 10 · HOTEL LITTLE VILLAGE ─────────────── */
  {
    slug: "hotel-little-village",
    title: "Hotel Little Village",
    tags: ["Web Development", "Hospitality"],
    year: "2025",
    oneLiner: "A website project for Hotel Little Village.",
    contribution: "Hospitality website design, room showcase UI, and booking inquiry interface.",
    coverLabel: "HOTEL LITTLE VILLAGE",
    cover: { bg: "#701A75", ink: "light", mark: "HLV" },
    study: {
      role: "Web Developer",
      timeline: "2025 · Hospitality Project",
      context: "A website project for Hotel Little Village.",
      problem: "Showcasing hotel accommodations, dining amenities, and location details for prospective guests.",
      process: [
        {
          title: "Visual Gallery & Room Display",
          body: "Designed elegant room preview galleries and amenity feature cards.",
        },
        {
          title: "Booking Inquiry Integration",
          body: "Built reservation request forms and location contact flows.",
        },
      ],
      decisions: [
        {
          title: "High-Quality Visual Presentation",
          why: "Hospitality guests rely on clear room photography and amenity previews when choosing hotels.",
        },
      ],
      outcomes: ["Attractive hospitality website launched for Hotel Little Village"],
      reflection: "Hospitality web design succeeds when imagery and straightforward booking options come together.",
    },
  },
];
