/* Mano Teja Reddy's Technical Stack — categorized tools shown in the spiral orbit. */

export type Tool = {
  name: string;
  group: "Languages" | "AI & Data" | "Development" | "Tools & Cloud" | "AI Ecosystem";
  src?: string;
  mono?: string;
  color?: string;
};

export const TOOLS: Tool[] = [
  /* — Languages — */
  { name: "Python", group: "Languages", mono: "Py", color: "#3776AB" },
  { name: "Java", group: "Languages", mono: "Jv", color: "#5382A1" },
  { name: "C", group: "Languages", mono: "C", color: "#A8B9CC" },
  { name: "JavaScript", group: "Languages", mono: "JS", color: "#F7DF1E" },
  { name: "HTML", group: "Languages", mono: "H5", color: "#E34F26" },
  { name: "CSS", group: "Languages", mono: "C3", color: "#1572B6" },

  /* — AI & Data — */
  { name: "Machine Learning", group: "AI & Data", mono: "ML", color: "#FF6F00" },
  { name: "Generative AI", group: "AI & Data", mono: "Gen", color: "#AB54F7" },
  { name: "Computer Vision", group: "AI & Data", mono: "CV", color: "#00AA3C" },
  { name: "NLP", group: "AI & Data", mono: "NLP", color: "#0072E3" },
  { name: "AI Agents", group: "AI & Data", mono: "Ag", color: "#FF2E0F" },
  { name: "Data Analysis", group: "AI & Data", mono: "DA", color: "#2C6BD8" },

  /* — Development — */
  { name: "React", group: "Development", mono: "Re", color: "#61DAFB" },
  { name: "FastAPI", group: "Development", mono: "API", color: "#009688" },
  { name: "REST APIs", group: "Development", mono: "REST", color: "#E44D26" },
  { name: "Frontend", group: "Development", mono: "FE", color: "#0891A6" },
  { name: "Backend", group: "Development", mono: "BE", color: "#141414" },
  { name: "Databases", group: "Development", mono: "DB", color: "#336791" },

  /* — Tools & Cloud — */
  { name: "Git", group: "Tools & Cloud", mono: "Git", color: "#F05032" },
  { name: "GitHub", group: "Tools & Cloud", mono: "GH", color: "#181717" },
  { name: "Docker", group: "Tools & Cloud", mono: "Dk", color: "#2496ED" },
  { name: "VS Code", group: "Tools & Cloud", mono: "VS", color: "#007ACC" },
  { name: "Postman", group: "Tools & Cloud", mono: "Pm", color: "#FF6C37" },
  { name: "Vercel", group: "Tools & Cloud", mono: "Vc", color: "#141414" },
  { name: "Netlify", group: "Tools & Cloud", mono: "Nt", color: "#00C7B7" },

  /* — AI Ecosystem — */
  { name: "OpenAI", group: "AI Ecosystem", src: "/images/logos/chatgpt.png" },
  { name: "Hugging Face", group: "AI Ecosystem", mono: "HF", color: "#FFD21E" },
  { name: "Gemma", group: "AI Ecosystem", mono: "G", color: "#4285F4" },
  { name: "Embeddings", group: "AI Ecosystem", mono: "Em", color: "#34A853" },
  { name: "Vector Search", group: "AI Ecosystem", mono: "Vec", color: "#EA4335" },
];
