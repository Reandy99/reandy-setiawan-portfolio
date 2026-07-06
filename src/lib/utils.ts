export const siteConfig = {
  name: "Reandy Setiawan",
  title: "Reandy Setiawan - Creative Producer & AI Workflow Builder",
  description:
    "Creative producer and AI workflow builder who turns visual production into scalable content systems — from shoot to publish.",
  role: "Creative Producer & AI Workflow Builder",
  heroHeadline: "Creative Producer & AI Workflow Builder",
  heroSubhead:
    "I turn visual production into scalable content systems — from shoot to publish.",
  openFor:
    "Open for Creative Marketing, Content Operations, and Visual Production roles with AI workflow expertise.",
  location: "Jakarta, Indonesia",
  availability: "Open to Remote / APAC Roles",
  email: "reandysetiawan1@gmail.com",
  linkedin: "https://linkedin.com/in/reandysetiawan",
  instagram: "https://instagram.com/reandy.setiawan",
  github: "https://github.com/Reandy99/reandy-setiawan-portfolio",
  baseUrl: "https://reandy-setiawan.vercel.app",
  cvPath: "/assets/resume/reandy-setiawan-cv.pdf",
  profileImage: "/images/reandy-profile.jpg",
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
  { href: "/#case-study", label: "Case Study" },
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
