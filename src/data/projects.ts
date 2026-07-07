export type Project = {
  hidden?: boolean;
  cardUrl?: string;
  proofLinks?: {
    label: string;
    href: string;
  }[];
  title: string;
  slug: string;
  category: string[];
  year: string;
  summary: string;
  role?: string;
  thumbnail: string;
  thumbnailFit?: "cover" | "contain";
  featured?: boolean;
  overview: string;
  deliverables: string[];
  tools: string[];
  highlights: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  videoUrl?: string;
};

export const projects: Project[] = [
  {
    title: "IFF Plant Factory",
    slug: "iff-plant-factory",
    hidden: true,
    category: ["Video"],
    year: "2023",
    summary:
      "Factory and corporate environment coverage emphasizing process clarity, industrial scale, and a clean professional tone.",
    role: "Video Production Support",
    thumbnail: "https://i.ytimg.com/vi/2N5F6lRsRhg/maxresdefault.jpg",
    overview:
      "Produced a factory-focused company profile piece for IFF, capturing the production environment and operational atmosphere in a way that feels organized, credible, and business-ready.",
    deliverables: ["Factory Coverage", "Process Visuals", "Corporate Presentation Assets"],
    tools: ["Premiere Pro", "Lightroom", "On-site Lighting"],
    highlights: [
      "Showed the production environment with a cleaner corporate framing",
      "Focused on process visibility and industrial professionalism",
      "Built supporting visuals for company-facing communication",
    ],
    metrics: [
      { label: "Industry", value: "Factory / Industrial" },
      { label: "Tone", value: "Corporate / Practical" },
      { label: "Output", value: "Company Profile Assets" },
    ],
    videoUrl: "https://youtu.be/2N5F6lRsRhg",
  },
  {
    title: "SCHOTT Company Profile",
    slug: "schott-company-profile",
    category: ["Video", "Campaign"],
    year: "2023",
    summary:
      "A clean corporate profile film built to highlight SCHOTT's innovation, production environment, and professional brand presence.",
    role: "Director, Cinematographer, Editor",
    thumbnail: "/images/projects/project-01.jpg",
    featured: true,
    overview:
      "Produced a company profile video for SCHOTT Indonesia to highlight their innovation, technology, and values through a clean and professional visual narrative.",
    deliverables: ["Video Profile (2:30)", "B-Roll", "Interviews"],
    tools: ["Adobe Premiere Pro", "After Effects", "Lightroom"],
    highlights: [
      "Showcased brand story and key messages",
      "Elevated visual presence and storytelling",
      "Filmed at office and production site",
      "Interview with key stakeholders",
      "Optimized for corporate channels",
    ],
    metrics: [
      { label: "Production", value: "2 Weeks" },
      { label: "Locations", value: "3 Locations / Jakarta, Germany" },
      { label: "Final Video", value: "1 Final Video / 3:20 Duration" },
    ],
    videoUrl: "https://youtu.be/11sf-ouJ8as?si=Dp4DY0fECtnNCr0U",
  },
  {
    title: "Grand Opening Foot Locker Kokas",
    slug: "grand-opening-foot-locker-kokas",
    category: ["Video", "Campaign"],
    year: "2023",
    summary:
      "Retail launch documentation focused on energy, crowd moments, and branded event storytelling for a high-traffic opening.",
    role: "Videographer / Event Documentation",
    thumbnail: "/images/projects/project-02.jpg",
    featured: true,
    overview:
      "Captured Foot Locker's grand opening activation at Kota Kasablanka with fast-paced event coverage designed for recap content and social distribution.",
    deliverables: ["Event Highlight Video", "Social Recut", "Brand Coverage"],
    tools: ["Premiere Pro", "Lightroom", "Handheld Camera Rig"],
    highlights: [
      "Captured launch energy and audience response",
      "Focused on branded moments and crowd movement",
      "Delivered content suited for social and internal recap",
    ],
    metrics: [
      { label: "Coverage", value: "1 Day Event" },
      { label: "Content", value: "Highlight + Social Cuts" },
      { label: "Format", value: "Retail / Event" },
    ],
    videoUrl: "https://www.youtube.com/watch?v=eZUiqZnrQ-w",
  },
  {
    title: "Mentari Intercultural School (MIS)",
    slug: "mentari-intercultural-school-mis",
    category: ["Video", "Photography", "Campaign"],
    year: "2019 - Now",
    summary:
      "Ongoing education marketing visuals that support school storytelling, admissions, events, and institutional trust.",
    role: "Creative Marketing, Photographer, Videographer",
    thumbnail: "/images/projects/project-03.jpg",
    featured: true,
    overview:
      "A long-running in-house content role combining photography, videography, and campaign support for Mentari Intercultural School.",
    deliverables: ["Event Coverage", "School Campaign Assets", "Admissions Content"],
    tools: ["Premiere Pro", "Photoshop", "Lightroom", "Capture One"],
    highlights: [
      "Balanced institutional communication with human storytelling",
      "Produced visual assets for website, social media, and events",
      "Helped maintain a consistent premium school image",
    ],
    metrics: [
      { label: "Role", value: "Long-term In-house Support" },
      { label: "Output", value: "Campaign + Event Visuals" },
      { label: "Audience", value: "Parents, Students, Community" },
    ],
    videoUrl: "https://www.youtube.com/watch?v=RSh0WBTziQM",
  },
  {
    title: "MS Glow Profile Series Maraton",
    slug: "ms-glow-profile-series-maraton",
    category: ["Video", "Photography", "Campaign"],
    year: "2023",
    summary:
      "Minimal portrait-led brand content developed for profile storytelling and polished visual presentation.",
    role: "Photographer, Videographer",
    thumbnail: "/images/projects/project-04.jpg",
    featured: true,
    overview:
      "A clean visual profile series built around subject presence, product-adjacent styling, and contemporary brand imagery.",
    deliverables: ["Portrait Series", "Short Profile Video", "Brand Assets"],
    tools: ["Photoshop", "Lightroom", "Premiere Pro"],
    highlights: [
      "Portrait-focused visual direction",
      "Consistent brand-friendly lighting",
      "Usable across campaign and profile formats",
    ],
    metrics: [
      { label: "Format", value: "Portrait + Short Video" },
      { label: "Use", value: "Brand / Profile Content" },
      { label: "Style", value: "Clean / Editorial" },
    ],
    videoUrl: "https://www.youtube.com/watch?v=QzfzpTlK_EU",
  },
  {
    title: "PT Gaya Motor (ASTRA) - Company Profile Video",
    slug: "pt-gaya-motor-company-profile",
    category: ["Video"],
    year: "2022",
    summary:
      "A polished company profile video created to present PT Gaya Motor (ASTRA) with clarity, scale, and a professional corporate tone.",
    role: "Videographer / Editor",
    thumbnail: "/images/projects/project-05.jpg",
    overview:
      "Produced a company profile video for PT Gaya Motor (ASTRA), combining facility visuals, supporting footage, and structured editing to communicate brand credibility and industrial professionalism.",
    deliverables: ["Company Profile Video", "Facility B-Roll", "Corporate Cutdown"],
    tools: ["Premiere Pro", "After Effects", "Lightroom"],
    highlights: [
      "Presented the company through a cleaner corporate narrative",
      "Combined operational visuals with structured brand storytelling",
      "Focused on professionalism, clarity, and business credibility",
    ],
    metrics: [
      { label: "Format", value: "Company Profile" },
      { label: "Approach", value: "Facility Visuals + B-Roll" },
      { label: "Audience", value: "Corporate / Stakeholders" },
    ],
    videoUrl: "https://youtu.be/f7wNNkU-FnQ?si=8w1KFKmKXoynahyE",
  },
  {
    title: "AI Content Batch for System",
    slug: "ai-content-batch-for-system",
    cardUrl:
      "https://www.linkedin.com/posts/reandy-setiawan_automation-n8n-workflowautomation-ugcPost-7472959415952986112-Dfei/?utm_source=share&utm_medium=member_desktop&rcm=ACoAABZ2JWwBlY7gcDdqSwmdcSTdrQc7RlEO-5Y",
    category: ["AI Workflow"],
    year: "2024",
    summary:
      "A practical AI-assisted content workflow concept for batching, repurposing, and streamlining creative output.",
    role: "AI-Assisted Workflow Designer",
    thumbnail: "/images/projects/project-06-n8n-automation-v3.png",
    overview:
      "Designed a repeatable system for transforming one production output into multiple content formats for websites, social posts, and outreach assets.",
    deliverables: ["Prompt System", "Workflow Logic", "Batch Content Structure"],
    tools: ["ChatGPT", "Notion", "Google Sheets", "n8n"],
    highlights: [
      "Mapped content flow from capture to publishing",
      "Reduced repeated manual rewriting across channels",
      "Created a scalable thinking framework for small teams",
    ],
    metrics: [
      { label: "Focus", value: "Content Operations" },
      { label: "Method", value: "AI-Assisted Repurposing" },
      { label: "Use Case", value: "Small Team Scalability" },
    ],
    proofLinks: [
      {
        label: "LinkedIn Post - n8n Workflow Automation",
        href: "https://www.linkedin.com/posts/reandy-setiawan_automation-n8n-workflowautomation-ugcPost-7472959415952986112-Dfei/?utm_source=share&utm_medium=member_desktop&rcm=ACoAABZ2JWwBlY7gcDdqSwmdcSTdrQc7RlEO-5Y",
      },
      {
        label: "LinkedIn Post - OTP Receiver Workflow",
        href: "https://www.linkedin.com/posts/reandy-setiawan_i-built-a-simple-otp-receiver-workflow-using-ugcPost-7472987208262803456-j7oW/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAABZ2JWwBlY7gcDdqSwmdcSTdrQc7RlEO-5Y",
      },
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);

  if (index === -1) {
    return undefined;
  }

  return projects[(index + 1) % projects.length];
}
