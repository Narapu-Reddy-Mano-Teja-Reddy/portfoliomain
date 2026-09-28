/* Verified Credentials — Mano Teja Reddy */

export type Cert = {
  no: string;
  issuer: string | null;
  logo?: { src: string; aspect: number };
  title: string;
  year: string | null;
  credentialId: string | null;
  credentialUrl?: string;
  verified: boolean;
  skills: string[];
  metric?: { value: string; label: string };
  fr?: { title?: string; skills?: string[]; metricLabel?: string };
};

export const CERTS: Cert[] = [
  {
    no: "01",
    issuer: "NPTEL",
    title: "Programming in Java (Elite + Silver)",
    year: "2024",
    credentialId: "NPTEL-JAVA-81",
    verified: true,
    skills: [
      "Java Programming & OOPs",
      "Data Structures & Algorithms",
      "Exception Handling & Multithreading",
    ],
    metric: { value: "81%", label: "Elite + Silver Score" },
  },
  {
    no: "02",
    issuer: "TCS iON",
    title: "Young Professional Edge",
    year: "2024",
    credentialId: "TCS-iON-YPE",
    verified: true,
    skills: [
      "Professional Communication",
      "Corporate Readiness",
      "Problem Solving & Collaboration",
    ],
    metric: { value: "TCS iON", label: "Professional Edge" },
  },
  {
    no: "03",
    issuer: "Skill India",
    title: "Artificial Intelligence Certification",
    year: "2024",
    credentialId: "SKILL-INDIA-AI",
    verified: true,
    skills: [
      "Artificial Intelligence Core",
      "Machine Learning Foundations",
      "Python Data Science Stack",
    ],
    metric: { value: "Skill India", label: "Certified AI Competency" },
  },
  {
    no: "04",
    issuer: "Infosys Springboard",
    title: "AI Engineer Internship Credential",
    year: "2025",
    credentialId: "INFOSYS-AI-INT",
    verified: true,
    skills: [
      "AI Engineering & Workflows",
      "Applied Deep Learning",
      "Model Building & Evaluation",
    ],
    metric: { value: "Infosys", label: "AI Engineer Internship" },
  },
  {
    no: "05",
    issuer: "ISTE",
    title: "Road Pothole Detection AI — 1st Prize",
    year: "2025",
    credentialId: "ISTE-1ST-PRIZE",
    verified: true,
    skills: [
      "Computer Vision & OpenCV",
      "Object Detection & Pothole AI",
      "Real-Time Image Processing",
    ],
    metric: { value: "1st Prize", label: "ISTE Competition Winner" },
  },
];
