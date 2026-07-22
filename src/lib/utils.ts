export const siteConfig = {
  name: "Reandy Setiawan",
  title: "Reandy Setiawan — Creative Producer & AI Workflow Builder",
  description:
    "Creative producer, photographer, videographer, and AI workflow builder based in Jakarta, Indonesia. Available for creative marketing, content operations, visual production, and remote APAC opportunities.",
  role: "Creative Producer & AI Workflow Builder",
  heroHeadline: "Creative Producer & AI Workflow Builder",
  heroSubhead:
    "A decade in photo, video, and campaign work — now building the workflows that turn one shoot into weeks of content.",
  openFor:
    "Open to creative marketing, content operations, and visual production roles.",
  heroMeta: "Remote-friendly · Based in Jakarta, Indonesia",
  location: "Jakarta, Indonesia",
  availability: "Remote & APAC roles",
  email: "Reandysetiawan1@gmail.com",
  linkedin:
    "https://www.linkedin.com/in/reandy-setiawan?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  instagram: "https://www.instagram.com/reandysetiawan/",
  github: "https://github.com/Reandy99/reandy-setiawan-portfolio",
  baseUrl: "https://reandysetiawan.my.id",
  cvPath: "/assets/resume/reandy-setiawan-cv.pdf",
  profileImage: "/images/reandy-profile-hero.jpg",
  profileImageOriginal: "/images/reandy-profile.jpg",
  ambientAudioSrc: "/audio/ambient.mp3",
  ambientAudioTitle: "Calm Ambient Dreamscape",
  ambientAudioArtist: "morgan-ambient",
  ambientAudioSourceUrl:
    "https://pixabay.com/music/ambient-calm-ambient-dreamscape-529861/",
} as const;

export const externalPortfolios = [
  {
    title: "WhitePaper",
    href: "https://whitepaper.my.id/",
    image: "/images/portfolio-sites/whitepaper-home.png",
    accent: "violet" as const,
    tags: [
      "Corporate photo and video",
      "Event documentation",
      "Company profile",
      "Business visual assets",
    ],
    description:
      "Corporate photo and video portfolio focused on event documentation, company profile production, and business-ready visual assets.",
  },
  {
    title: "Jia Photography",
    href: "https://www.jiaphotography.site/",
    image: "/images/portfolio-sites/jia-home.png",
    accent: "warm" as const,
    tags: [
      "Family",
      "Graduation",
      "Prewedding",
      "Birthday and personal milestone photography",
    ],
    description:
      "Warm, clean photography portfolio covering family sessions, graduations, preweddings, birthdays, and intimate celebrations.",
  },
  {
    title: "FrameFlow",
    href: "https://www.frameflow.my.id",
    image: "/images/portfolio-sites/frameflow-home.png",
    accent: "blue" as const,
    tags: [
      "Workflow platform concept",
      "Lead management",
      "Proposals",
      "Invoices",
      "Follow-ups for photographers and videographers",
    ],
    description:
      "A workflow platform concept built for photographers and videographers in Indonesia to manage leads, proposals, invoices, and follow-ups.",
  },
] as const;

export const navigation = [
  { href: "/#home", label: "Home", sectionId: "home" },
  { href: "/#selected-work", label: "Selected Work", sectionId: "selected-work" },
  { href: "/#capabilities", label: "Capabilities", sectionId: "capabilities" },
  { href: "/#experience", label: "Experience", sectionId: "experience" },
  { href: "/#about", label: "About", sectionId: "about" },
  { href: "/#contact", label: "Contact", sectionId: "contact" },
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
