export const siteConfig = {
  name: "Reandy Setiawan",
  title: "Reandy Setiawan - Creative Producer & AI Workflow Builder",
  description:
    "Creative producer and AI workflow builder with a decade in photo, video, and campaign work — building systems that turn one shoot into weeks of content.",
  role: "Creative Producer & AI Workflow Builder",
  heroHeadline: "Creative Producer & AI Workflow Builder",
  heroSubhead:
    "A decade in photo, video, and campaign work — now building the workflows that turn one shoot into weeks of content.",
  openFor:
    "Open to creative marketing, content operations, and visual production roles.",
  heroMeta: "Remote-friendly · Based in Jakarta, Indonesia",
  location: "Jakarta, Indonesia",
  availability: "Remote & APAC roles",
  email: "reandysetiawan1@gmail.com",
  linkedin: "https://linkedin.com/in/reandysetiawan",
  instagram: "https://instagram.com/reandy.setiawan",
  github: "https://github.com/Reandy99/reandy-setiawan-portfolio",
  baseUrl: "https://reandysetiawan.my.id",
  cvPath: "/assets/resume/reandy-setiawan-cv.pdf",
  profileImage: "/images/reandy-profile.jpg",
  ambientAudioSrc: "/audio/ambient.mp3",
  ambientAudioTitle: "Calm Ambient Dreamscape",
  ambientAudioArtist: "morgan-ambient",
  ambientAudioSourceUrl:
    "https://pixabay.com/music/ambient-calm-ambient-dreamscape-529861/",
} as const;

export const externalPortfolios = [
  {
    title: "Whitepaper Photography",
    href: "https://whitepaper.my.id/",
    image: "/images/portfolio-sites/whitepaper-home.png",
    description:
      "Corporate photo and video portfolio focused on event documentation, company profile production, and business-ready visual assets.",
  },
  {
    title: "Jia Photography",
    href: "https://www.jiaphotography.site/",
    image: "/images/portfolio-sites/jia-home.png",
    description:
      "Warm, clean photography portfolio covering family sessions, graduations, preweddings, birthdays, and intimate celebrations.",
  },
  {
    title: "FrameFlow",
    href: "https://www.frameflow.my.id",
    image: "/images/portfolio-sites/frameflow-home.png",
    description:
      "A workflow platform concept built for photographers and videographers in Indonesia to manage leads, proposals, invoices, and follow-ups.",
  },
] as const;

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/#work", label: "Work" },
  { href: "/#resume", label: "Resume" },
  { href: "/#contact", label: "Contact" },
] as const;

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
