"use client";

/*
 * Centralised EN/FR store for every user-facing string on the site.
 *
 * Switching is pure React state: scroll position, the active section and all
 * pinned ScrollTriggers survive, with no reload. The choice persists in
 * localStorage and is mirrored onto <html lang> for assistive tech.
 *
 * Proper nouns (companies, products, tools, place names) are deliberately
 * NOT translated. French runs longer than English, so copy here is written
 * to fit the same layout rather than translated literally.
 */

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "fr";

type Entry = { en: string; fr: string };

export const DICT: Record<string, Entry> = {
  /* ---------------- nav ---------------- */
  "nav.home": { en: "Home", fr: "Accueil" },
  "nav.about": { en: "About", fr: "À propos" },
  "nav.work": { en: "Work", fr: "Projets" },
  "nav.contact": { en: "Contact", fr: "Contact" },
  "nav.menu": { en: "Open menu", fr: "Ouvrir le menu" },
  "nav.close": { en: "Close menu", fr: "Fermer le menu" },

  /* ---------------- intro ---------------- */
  "intro.scroll": { en: "Scroll to enter", fr: "Faites défiler pour entrer" },

  /* ---------------- hero ---------------- */
  "hero.kicker": {
    en: "AI & DATA SCIENCE ENGINEER",
    fr: "INGÉNIEUR IA & DATA SCIENCE",
  },
  "hero.h1a": { en: "I DON'T JUST LEARN", fr: "JE N'APPRENDS PAS SEULEMENT LA" },
  "hero.h1aEm": { en: "TECHNOLOGY.", fr: "TECHNOLOGIE." },
  "hero.h1b": { en: "I BUILD", fr: "JE CONSTRUIS" },
  "hero.h1bEm": { en: "WITH IT.", fr: "AVEC ELE." },
  "hero.sub": {
    en: "I'm a Computer Science Engineering student specializing in Artificial Intelligence & Data Science, building intelligent systems, digital products and real-world software.",
    fr: "Étudiant en informatique spécialisé en IA & Data Science, je conçois des systèmes intelligents, des produits numériques et des logiciels.",
  },
  "hero.cta1": { en: "VIEW MY WORK →", fr: "VOIR MES PROJETS →" },
  "hero.cta2": { en: "MY JOURNEY ↓", fr: "MON PARCOURS ↓" },
  "hero.scroll": { en: "Scroll to Explore", fr: "Faites défiler" },
  "stat.projects": { en: "WEBSITES BUILT", fr: "SITES WEB CRÉÉS" },
  "stat.years": { en: "HOURS OF CODING", fr: "HEURES DE CODE" },
  "stat.countries": { en: "HACKATHONS & TECH EVENTS", fr: "HACKATHONS & ÉVÉNEMENTS" },
  "stat.satisfaction": { en: "ISTE COMPETITION WIN", fr: "VICTOIRE CONCOURS ISTE" },

  /* ---------------- about ---------------- */
  "about.eyebrow": { en: "About", fr: "À propos" },
  "about.h2a": { en: "CODE IS HOW I BUILD —", fr: "LE CODE EST MA FAÇON DE CONSTRUIRE —" },
  "about.h2b": { en: "AI IS HOW I", fr: "L'IA EST MA FAÇON DE" },
  "about.h2Em": { en: "THINK", fr: "PENSER" },
  "about.h2c": { en: ".", fr: "." },
  "about.m1": {
    en: "ISTE Competition Winner — Road Pothole Detection AI",
    fr: "Gagnant Concours ISTE — Détection de Nids-de-poule IA",
  },
  "about.m2": {
    en: "Hours of coding & hands-on development",
    fr: "Heures de code et développement pratique",
  },
  "about.m3": {
    en: "Hackathons & technical leadership experience",
    fr: "Hackathons et leadership technique",
  },
  "about.m4": {
    en: "Websites & AI applications built and deployed",
    fr: "Sites web et applications IA déployés",
  },
  "about.edu": {
    en: "B.Tech CSE (AI & Data Science) · Siddharth Institute of Engineering & Technology (JNTUA) · 2023–2027",
    fr: "B.Tech CSE (IA & Data Science) · Siddharth Institute of Engineering & Technology (JNTUA) · 2023–2027",
  },
  "about.cta": { en: "Explore My Work", fr: "Découvrir mes projets" },

  /* ---------------- journey ---------------- */
  "journey.eyebrow": { en: "My Journey", fr: "Mon parcours" },
  "journey.enter": { en: "Scroll to travel", fr: "Faites défiler pour avancer" },
  "journey.chapter": { en: "Chapter", fr: "Chapitre" },
  "journey.lede": {
    en: "From learning computer science foundations to building intelligent AI systems and real-world software.",
    fr: "Des bases de l'informatique à la création de systèmes d'IA intelligents et de logiciels.",
  },

  /* ---------------- design stack ---------------- */
  "stack.eyebrow": { en: "Toolkit", fr: "Outils" },
  "stack.h2": { en: "Technical", fr: "Stack" },
  "stack.h2Em": { en: "Stack.", fr: "technique." },
  "stack.lede": {
    en: "The languages, frameworks, AI ecosystem and tools I use to analyze, build, and deploy intelligent software.",
    fr: "Les langages, frameworks, outils IA et technologies que j'utilise pour analyser, construire et déployer des logiciels intelligents.",
  },
  "stack.count": { en: "tools", fr: "outils" },
  "stack.disciplines": { en: "categories", fr: "catégories" },

  /* ---------------- work ---------------- */
  "work.eyebrow": { en: "Featured Work", fr: "Projets sélectionnés" },
  "work.h2a": { en: "Selected projects,", fr: "Projets choisis," },
  "work.h2b": { en: "built to", fr: "conçus pour" },
  "work.h2Em": { en: "solve.", fr: "résoudre." },
  "work.lede": {
    en: "Healthcare AI, Generative AI, Computer Vision, and full-stack applications — each project a real capability.",
    fr: "IA Santé, IA Générative, Vision par Ordinateur et applications full-stack — chaque projet une compétence réelle.",
  },
  "work.open": { en: "Open case study", fr: "Voir le projet" },
  "work.hint": { en: "SCROLL TO BROWSE", fr: "FAITES DÉFILER" },

  /* ---------------- experience ---------------- */
  "exp.eyebrow": { en: "Experience", fr: "Expérience" },
  "exp.h2": { en: "Where I built my", fr: "Là où j'ai forgé mon" },
  "exp.h2Em": { en: "experience.", fr: "expérience." },
  "exp.worked": { en: "What I worked on", fr: "Ce sur quoi j'ai travaillé" },
  "exp.impact": { en: "Impact & Focus", fr: "Impact & Focus" },
  "exp.tools": { en: "Technologies & Skills", fr: "Technologies & Compétences" },
  "exp.hint": { en: "SCROLL · CLICK TO JUMP", fr: "DÉFILER · CLIQUER POUR NAVIGUER" },
  "type.Internship": { en: "Internship", fr: "Stage" },
  "type.Full-time": { en: "Full-time", fr: "Temps plein" },
  "type.Hackathon": { en: "Hackathon", fr: "Hackathon" },
  "type.Freelance": { en: "Freelance", fr: "Freelance" },

  /* ---------------- credentials ---------------- */
  "cert.introLabel": { en: "Introduction", fr: "Introduction" },
  "cert.introTitle1": { en: "VERIFIED", fr: "TITRES" },
  "cert.introTitle2": { en: "CREDENTIALS", fr: "VÉRIFIÉS" },
  "cert.introBody": {
    en: "Continuous, applied learning across AI, data science, programming and software engineering.",
    fr: "Un apprentissage continu et appliqué en IA, science des données et ingénierie logicielle.",
  },
  "cert.introNote": {
    en: "Verified credentials · NPTEL, TCS iON, Skill India and Infosys Springboard.",
    fr: "Titres vérifiés · NPTEL, TCS iON, Skill India et Infosys Springboard.",
  },
  "cert.eyebrow": { en: "Credentials", fr: "Titres & certifications" },
  "cert.h2": { en: "Credentials", fr: "Certifications" },
  "cert.lede": {
    en: "Verified certifications and technical credentials earned throughout my engineering journey.",
    fr: "Les certifications vérifiées et titres professionnels obtenus tout au long de mon parcours d'ingénieur.",
  },
  "cert.certified": { en: "Certified", fr: "Certifié" },
  "cert.brandRole": { en: "AI & Data Science Engineer", fr: "Ingénieur IA & Data Science" },
  "cert.issuerTBC": { en: "Issuer", fr: "Organisme" },
  "cert.certification": { en: "Certification", fr: "Certification" },
  "cert.verified": { en: "✓ Verified", fr: "✓ Vérifié" },
  "cert.onRequest": { en: "Credential on request", fr: "Justificatif sur demande" },
  "cert.issuedBy": { en: "Issued by", fr: "Délivré par" },
  "cert.year": { en: "Year", fr: "Année" },
  "cert.id": { en: "Credential ID", fr: "N° de justificatif" },
  "cert.tbc": { en: "To confirm", fr: "À confirmer" },
  "cert.skills": { en: "Skills", fr: "Compétences" },
  "cert.verify": { en: "Verify credential ↗", fr: "Vérifier le justificatif ↗" },
  "cert.foot": { en: "Credentials", fr: "Titres" },

  /* ---------------- gallery — the archive ---------------- */
  "gallery.eyebrow": { en: "The Archive", fr: "L’archive" },
  "gallery.h2a": { en: "THE MOMENTS BEHIND", fr: "LES MOMENTS DERRIÈRE" },
  "gallery.h2Em": { en: "THE BUILDS", fr: "LES PROJETS" },
  "gallery.lede": {
    en: "Coding sessions, hackathons, projects, and milestones behind the software.",
    fr: "Sessions de code, hackathons, projets et jalons derrière les logiciels.",
  },
  "gallery.alt": {
    en: "A moment behind the builds",
    fr: "Un moment derrière les projets",
  },
  "gallery.frames": { en: "Frames", fr: "Images" },
  "gallery.hint": { en: "Scroll to travel the archive", fr: "Faites défiler pour parcourir l’archive" },

  /* ---------------- connect ---------------- */
  "connect.eyebrow": { en: "Let’s Connect", fr: "Restons en contact" },
  "connect.h2a": { en: "LET'S BUILD WHAT'S", fr: "CONSTRUISONS CE QUI" },
  "connect.h2Em": { en: "NEXT.", fr: "VIENT." },
  "connect.lede": {
    en: "AI, software, intelligent systems or ambitious ideas — I'm always interested in building something meaningful.",
    fr: "IA, logiciels, systèmes intelligents ou projets ambitieux — je suis toujours intéressé pour construire quelque chose de significatif.",
  },
  "connect.cta": { en: "LET'S TALK →", fr: "PARLONS-EN →" },
  "connect.credit": { en: "Designed & Developed by", fr: "Conçu & développé par" },
  "connect.top": { en: "Back to top ↑", fr: "Haut de page ↑" },

  /* ---------------- case study (/work/[slug]) ---------------- */
  "case.back": { en: "← Back to work", fr: "← Retour aux projets" },
  "case.kicker": { en: "Case Study", fr: "Étude de cas" },
  "case.role": { en: "Role", fr: "Rôle" },
  "case.timeline": { en: "Timeline", fr: "Période" },
  "case.focus": { en: "Focus", fr: "Focus" },
  "case.site": { en: "Live product", fr: "Produit en ligne" },
  "case.repo": { en: "Source", fr: "Code source" },
  "case.cover": { en: "COVER", fr: "VISUEL" },
  "case.context": { en: "Context", fr: "Contexte" },
  "case.problem": { en: "The Problem", fr: "Le problème" },
  "case.process": { en: "Process", fr: "Démarche" },
  "case.decisions": { en: "Design Decisions", fr: "Décisions de design" },
  "case.outcome": { en: "Outcome", fr: "Résultats" },
  "case.reflection": { en: "Reflection", fr: "Ce que j’en retire" },
  "case.all": { en: "← All projects", fr: "← Tous les projets" },
  "case.next": { en: "Next project", fr: "Projet suivant" },

  /* ---------------- lab (/tunnel) ---------------- */
  "lab.back": { en: "← PORTFOLIO", fr: "← PORTFOLIO" },
  "lab.hint": {
    en: "LAB · TUNNEL TYPE — SCROLL TO TRAVEL · MOVE THE MOUSE",
    fr: "LAB · TUNNEL TYPE — FAITES DÉFILER POUR AVANCER · BOUGEZ LA SOURIS",
  },

  /* ---------------- 404 ---------------- */
  "nf.label": { en: "404 — NOT FOUND", fr: "404 — PAGE INTROUVABLE" },
  "nf.h1": { en: "This page went", fr: "Cette page a quitté" },
  "nf.h1Em": { en: "off the grid.", fr: "les radars." },
  "nf.cta": { en: "Back to the portfolio →", fr: "Retour au portfolio →" },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: string) => string };

const LanguageContext = createContext<Ctx>({
  lang: "en",
  setLang: () => {},
  t: (k) => DICT[k]?.en ?? k,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("lang") as Lang | null;
    if (saved === "en" || saved === "fr") {
      setLangState(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem("lang", l);
    } catch {
      /* private mode — the choice simply won't persist */
    }
    document.documentElement.lang = l;
  };

  const t = (k: string) => DICT[k]?.[lang] ?? DICT[k]?.en ?? k;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);

/** Pick a translated field off a content record: `L(lang, item, "summary")`
 *  returns `item.fr.summary` when available, else the English original. */
export function L<T extends { fr?: Record<string, unknown> }>(
  lang: Lang,
  item: T,
  field: keyof T & string
): string {
  if (lang === "fr" && item.fr && typeof item.fr[field] === "string") {
    return item.fr[field] as string;
  }
  return item[field] as unknown as string;
}
