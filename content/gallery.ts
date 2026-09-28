/* THE PEOPLE BEHIND THE WORK — the personal archive.
 *
 * ⚠ SOURCING: every frame is one of Gireesh's own supplied photographs,
 * in the order he numbered them (Gallery 1 → 14). Nothing is stock,
 * generated, substituted or repeated. He supplied 14 of the 15 he listed —
 * Gallery 15 never arrived; add it to the end of this array when it does.
 *
 * `ar` is each file's TRUE aspect ratio, so a frame is only ever cropped by
 * object-fit, never scaled non-uniformly. The variety in frame widths comes
 * from the photographs themselves rather than from arbitrary sizing.
 *
 * `scale` and `y` are the curation: a little rhythm so the rail reads as a
 * hung archive rather than a filmstrip. Frames 9 and 10 — the two team
 * photographs Gireesh marked as belonging in the middle — sit at the centre
 * of the sequence and carry the largest scale. */

export type Frame = {
  id: string;
  src: string;
  ar: number; /* true width / height */
  scale: number; /* relative height on the rail */
  y: number; /* vertical offset in px, for rhythm */
  hero?: boolean; /* the centrepieces */
};

export const FRAMES: Frame[] = [
  { id: "g01", src: "/images/connect/personalimage1.jpeg", ar: 1.333, scale: 0.94, y: -18 },
  { id: "g02", src: "/images/connect/personalimage2.jpeg", ar: 0.75, scale: 0.88, y: 30 },
  { id: "g03", src: "/images/connect/personalimage3.jpeg", ar: 0.574, scale: 1.0, y: -34 },
  { id: "g04", src: "/images/connect/personalimage44.jpeg", ar: 0.578, scale: 0.86, y: 22 },
  { id: "g05", src: "/images/connect/personalimage55.jpeg", ar: 0.565, scale: 0.97, y: -10 },
  { id: "g06", src: "/images/connect/impimg.jpeg", ar: 0.574, scale: 0.9, y: 34 },
  { id: "g07", src: "/images/connect/WhatsApp Image 2026-09-28 at 10.20.21 PM.jpeg", ar: 0.574, scale: 1.02, y: -26 },
  { id: "g08", src: "/images/connect/groupimage1.jpeg", ar: 0.562, scale: 0.88, y: 16 },
  /* — the centre of the archive — */
  { id: "g09", src: "/images/connect/groupimage7.jpeg", ar: 0.75, scale: 1.14, y: 0, hero: true },
  { id: "g10", src: "/images/connect/groupimage11.jpeg", ar: 1.333, scale: 1.14, y: 0, hero: true },
  /* — */
  { id: "g11", src: "/images/connect/groupimage2.jpeg", ar: 0.461, scale: 0.92, y: -30 },
  { id: "g12", src: "/images/connect/groupimag3.jpeg", ar: 0.692, scale: 0.87, y: 26 },
  { id: "g13", src: "/images/connect/groupimage4.jpeg", ar: 0.75, scale: 1.0, y: -14 },
  { id: "g14", src: "/images/connect/groupimage5.jpeg", ar: 0.562, scale: 0.9, y: 28 },
  { id: "g15", src: "/images/connect/groupimage55.jpeg", ar: 0.75, scale: 0.9, y: -10 },
  { id: "g16", src: "/images/connect/groupimage6.jpeg", ar: 0.75, scale: 0.9, y: 15 },
  { id: "g17", src: "/images/connect/groupimage8.jpeg", ar: 0.75, scale: 0.9, y: -20 },
  { id: "g18", src: "/images/connect/groupimage9.jpeg", ar: 0.75, scale: 0.9, y: 10 },
];
