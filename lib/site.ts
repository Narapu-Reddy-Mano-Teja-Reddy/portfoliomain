/* Single source of truth for site-wide constants.
   Set NEXT_PUBLIC_SITE_URL in Vercel once the domain exists —
   everything (sitemap, robots, OG, JSON-LD) follows automatically. */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const PERSON = {
  name: "Mano Teja Reddy",
  jobTitle: "AI & Data Science Engineer · Developer · Builder",
  email: "tejanarapureddy2@gmail.com",
  location: "India",
  /* exact profile URLs — consumed by JSON-LD and throughout the site */
  sameAs: [
    "https://www.linkedin.com/in/mano-teja-reddy-/",
    "https://github.com/Narapu-Reddy-Mano-Teja-Reddy",
  ],
};
