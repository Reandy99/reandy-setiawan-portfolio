export type Project = {
  hidden?: boolean;
  cardUrl?: string;
  proofLinks?: {
    label: string;
    href: string;
  }[];
  gallery?: {
    src: string;
    alt: string;
    href?: string;
  }[];
  ecosystemOnly?: boolean;
  title: string;
  slug: string;
  category: string[];
  year: string;
  summary: string;
  role?: string;
  thumbnail: string;
  thumbnailFit?: "cover" | "contain";
  thumbnailPosition?: string;
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
    videoUrl: "https://www.youtube.com/watch?v=2N5F6lRsRhg",
  },
  {
    title: "SCHOTT Company Profile",
    slug: "schott-company-profile",
    category: ["Video", "Campaign"],
    year: "2023",
    summary:
      "A clean corporate profile film built to highlight SCHOTT's innovation, production environment, and professional brand presence.",
    role: "Director, Cinematographer, Editor",
    thumbnail: "https://i.ytimg.com/vi/11sf-ouJ8as/maxresdefault.jpg",
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
    thumbnail: "https://i.ytimg.com/vi/eZUiqZnrQ-w/maxresdefault.jpg",
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
    title: "Landscape Foot Locker Grand Indonesia",
    slug: "landscape-foot-locker-grand-indonesia",
    category: ["Video", "Campaign"],
    year: "2023",
    summary:
      "Retail landscape and store atmosphere coverage for Foot Locker Grand Indonesia — clean branded visuals for campaign and social use.",
    role: "Videographer / Editor",
    thumbnail: "https://i.ytimg.com/vi/RoPTxZ8ulKk/maxresdefault.jpg",
    featured: true,
    overview:
      "Produced landscape-oriented coverage of Foot Locker Grand Indonesia, focusing on store environment, brand presence, and retail atmosphere suited for campaign and digital distribution.",
    deliverables: ["Landscape Store Coverage", "Brand Atmosphere Cuts", "Social-ready Exports"],
    tools: ["Premiere Pro", "Lightroom", "Handheld Camera Rig"],
    highlights: [
      "Captured store landscape and branded retail atmosphere",
      "Built clean visuals for campaign and social channels",
      "Maintained consistent Foot Locker brand presentation",
    ],
    metrics: [
      { label: "Client", value: "Foot Locker" },
      { label: "Location", value: "Grand Indonesia" },
      { label: "Format", value: "Retail / Landscape" },
    ],
    videoUrl: "https://www.youtube.com/watch?v=RoPTxZ8ulKk",
  },
  {
    title: "Mentari Intercultural School (MIS)",
    slug: "mentari-intercultural-school-mis",
    category: ["Video", "Campaign"],
    year: "2019 - Now",
    summary:
      "Ongoing education marketing visuals that support school storytelling, admissions, events, and institutional trust.",
    role: "Creative Marketing, Photographer, Videographer",
    thumbnail: "https://i.ytimg.com/vi/RSh0WBTziQM/maxresdefault.jpg",
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
    videoUrl: "https://youtu.be/RSh0WBTziQM",
  },
  {
    title: "MS Glow Profile Series Maraton",
    slug: "ms-glow-profile-series-maraton",
    category: ["Video", "Campaign"],
    year: "2023",
    summary:
      "Minimal portrait-led brand content developed for profile storytelling and polished visual presentation.",
    role: "Photographer, Videographer",
    thumbnail: "/images/projects/ms-glow-chicaglow-caca-tengker.jpg",
    thumbnailPosition: "center 18%",
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
    thumbnail: "https://i.ytimg.com/vi/f7wNNkU-FnQ/maxresdefault.jpg",
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
    title: "Permata Bank Outing",
    slug: "permata-bank-outing",
    category: ["Video", "Campaign"],
    year: "2023",
    summary:
      "Corporate outing event documentation capturing team activities, energy, and branded moments for internal communication and recap content.",
    role: "Videographer / Event Documentation",
    thumbnail: "https://i.ytimg.com/vi/O7ta95Ob0Nw/maxresdefault.jpg",
    overview:
      "Documented a Permata Bank corporate outing with fast-paced event coverage focused on team participation, atmosphere, and highlight moments suitable for internal recap and communication channels.",
    deliverables: ["Event Highlight Video", "Team Activity Coverage", "Recap Content"],
    tools: ["Premiere Pro", "Lightroom", "Handheld Camera Rig"],
    highlights: [
      "Captured team energy and outing atmosphere",
      "Focused on group activities and branded event moments",
      "Delivered recap-ready content for corporate channels",
    ],
    metrics: [
      { label: "Client", value: "Permata Bank" },
      { label: "Format", value: "Corporate Event / Outing" },
      { label: "Output", value: "Highlight Recap" },
    ],
    videoUrl: "https://www.youtube.com/watch?v=O7ta95Ob0Nw",
  },
  {
    title: "WhitePaper — Corporate Event",
    slug: "whitepaper-corporate-event",
    category: ["Photography"],
    year: "Ongoing",
    summary:
      "Corporate event documentation capturing speaker moments, audience energy, and brand-ready coverage for marketing and PR teams.",
    role: "Photographer / Videographer",
    thumbnail: "/images/photography/whitepaper-corporate-event.webp",
    featured: true,
    overview:
      "Corporate photography from WhitePaper focused on event documentation — keynote moments, networking, and polished visual assets ready for company communication.",
    deliverables: ["Event Coverage", "Speaker Portraits", "Brand-ready Selects"],
    tools: ["Lightroom", "Photoshop", "Capture One"],
    highlights: [
      "Documented corporate gatherings with a clean, business-ready frame",
      "Balanced candid moments with formal coverage needs",
      "Delivered selects suited for PR, report, and website use",
    ],
    metrics: [
      { label: "Focus", value: "Corporate Event" },
      { label: "Brand", value: "WhitePaper" },
      { label: "Output", value: "Photo Selects" },
    ],
    cardUrl: "https://whitepaper.my.id/",
  },
  {
    title: "WhitePaper — Speaker Coverage",
    slug: "whitepaper-speaker-coverage",
    category: ["Photography"],
    year: "Ongoing",
    summary:
      "Stage and speaker photography for corporate seminars and conferences — clear, credible, and presentation-ready.",
    role: "Photographer",
    thumbnail: "/images/photography/whitepaper-speaker.webp",
    featured: true,
    overview:
      "Speaker-focused coverage for corporate events, built for press releases, recap decks, and institutional storytelling.",
    deliverables: ["Speaker Frames", "Stage Coverage", "Web-ready Exports"],
    tools: ["Lightroom", "Photoshop"],
    highlights: [
      "Prioritized C-level and speaker moments",
      "Maintained consistent corporate lighting and framing",
      "Prepared exports for digital and print channels",
    ],
    metrics: [
      { label: "Focus", value: "Seminar / Conference" },
      { label: "Brand", value: "WhitePaper" },
      { label: "Use", value: "PR + Recap" },
    ],
    cardUrl: "https://whitepaper.my.id/",
  },
  {
    title: "WhitePaper — Company Profile",
    slug: "whitepaper-company-profile-photo",
    category: ["Photography"],
    year: "Ongoing",
    summary:
      "Company profile and workplace photography for websites, decks, and employer branding.",
    role: "Photographer",
    thumbnail: "/images/photography/whitepaper-company-profile.webp",
    overview:
      "Business-ready company profile photography covering people, space, and brand detail for corporate communication assets.",
    deliverables: ["Workplace Visuals", "Team & Environment Frames", "Brand Assets"],
    tools: ["Lightroom", "Photoshop"],
    highlights: [
      "Produced visuals usable across website and proposal decks",
      "Kept a professional, clean corporate tone",
      "Supported employer branding and stakeholder communication",
    ],
    metrics: [
      { label: "Focus", value: "Company Profile" },
      { label: "Brand", value: "WhitePaper" },
      { label: "Output", value: "Multi-channel Assets" },
    ],
    cardUrl: "https://whitepaper.my.id/",
  },
  {
    title: "Jia — Family Session",
    slug: "jia-family-session",
    category: ["Photography"],
    year: "Ongoing",
    summary:
      "Warm family portraits with guided posing and natural expressions for personal milestone albums.",
    role: "Photographer",
    thumbnail: "/images/photography/jia-family.jpg",
    thumbnailPosition: "center 18%",
    featured: true,
    overview:
      "Family photography from Jia Photography — relaxed direction, clean editing, and portraits families actually want to keep.",
    deliverables: ["Family Portraits", "Group Combinations", "Online Gallery"],
    tools: ["Lightroom", "Photoshop", "Capture One"],
    highlights: [
      "Guided posing for natural, comfortable frames",
      "Covered nuclear and extended family combinations",
      "Delivered polished gallery-ready selects",
    ],
    metrics: [
      { label: "Focus", value: "Family" },
      { label: "Brand", value: "Jia Photography" },
      { label: "Style", value: "Warm / Clean" },
    ],
    cardUrl: "https://www.jiaphotography.site/",
  },
  {
    title: "Jia — Graduation",
    slug: "jia-graduation",
    category: ["Photography"],
    year: "Ongoing",
    summary:
      "Guided graduation portraits for solo, parents, and close friends — efficient coverage on a busy campus day.",
    role: "Photographer",
    thumbnail: "/images/photography/jia-graduation.jpg",
    featured: true,
    overview:
      "Graduation session photography with a clear sequence from solo portraits to family and friends, kept efficient without losing key frames.",
    deliverables: ["Solo Portraits", "Family Frames", "Friend Group Shots"],
    tools: ["Lightroom", "Photoshop"],
    highlights: [
      "Organized solo → family → friends flow",
      "Handled busy campus timing with clear direction",
      "Delivered clean, celebratory portrait selects",
    ],
    metrics: [
      { label: "Focus", value: "Graduation" },
      { label: "Brand", value: "Jia Photography" },
      { label: "Area", value: "Jabodetabek" },
    ],
    cardUrl: "https://www.jiaphotography.site/",
  },
  {
    title: "Jia — Prewedding",
    slug: "jia-prewedding",
    category: ["Photography"],
    year: "Ongoing",
    summary:
      "Clean, personal prewedding photography with natural chemistry — not overdone posing.",
    role: "Photographer",
    thumbnail: "/images/photography/jia-prewedding.jpg",
    thumbnailPosition: "center 22%",
    overview:
      "Prewedding coverage focused on simple gestures, warm editorial framing, and a personal mood for save-the-date and invitation use.",
    deliverables: ["Couple Portraits", "Location Story Frames", "Gallery Delivery"],
    tools: ["Lightroom", "Photoshop"],
    highlights: [
      "Kept posing natural and chemistry-led",
      "Built a clean romantic visual story",
      "Prepared selects for invitation and album use",
    ],
    metrics: [
      { label: "Focus", value: "Prewedding" },
      { label: "Brand", value: "Jia Photography" },
      { label: "Style", value: "Natural / Editorial" },
    ],
    cardUrl: "https://www.jiaphotography.site/",
  },
  {
    title: "Jia — Wedding Day",
    slug: "jia-wedding-day",
    category: ["Photography"],
    year: "Ongoing",
    summary:
      "Intimate wedding coverage prioritizing family moments, details, and timeless portraits.",
    role: "Photographer",
    thumbnail: "/images/photography/jia-wedding.jpg",
    thumbnailPosition: "center 20%",
    overview:
      "Wedding day photography shaped around ceremony, family portraits, and reception details without oversized production feel.",
    deliverables: ["Ceremony Coverage", "Family Portraits", "Detail Frames"],
    tools: ["Lightroom", "Photoshop"],
    highlights: [
      "Focused on family and intimate moments",
      "Balanced candid coverage with must-have portraits",
      "Delivered timeless frames ready to share",
    ],
    metrics: [
      { label: "Focus", value: "Wedding" },
      { label: "Brand", value: "Jia Photography" },
      { label: "Tone", value: "Intimate / Timeless" },
    ],
    cardUrl: "https://www.jiaphotography.site/",
  },
  {
    title: "All Links in One Google Drive",
    slug: "n8n-file-download-automation",
    category: ["AI Workflow"],
    year: "2025",
    summary:
      "Automate scattered file links into one ready-to-download Google Drive folder with n8n.",
    role: "Automation Workflow Designer",
    thumbnail: "/images/projects/n8n-file-download-automation.jpg",
    thumbnailFit: "contain",
    featured: true,
    overview:
      "Built an n8n automation that turns a list of file links in Google Sheets into a single organized Google Drive folder. The workflow retrieves each file via HTTP request, saves it automatically, and removes the need for manual one-by-one downloads.",
    deliverables: [
      "n8n workflow",
      "Google Sheets input template",
      "Google Drive auto-save folder structure",
    ],
    tools: ["n8n", "Google Sheets", "Google Drive", "HTTP Request"],
    highlights: [
      "Centralized all file links in one Sheets input",
      "Automated download and Drive storage in a single run",
      "Delivered a ready-to-share folder instead of scattered links",
    ],
    metrics: [
      { label: "Stack", value: "n8n + Google Workspace" },
      { label: "Input", value: "Link list in Sheets" },
      { label: "Output", value: "1 Drive folder" },
    ],
    cardUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7484915546031804416/",
    gallery: [
      {
        src: "/images/projects/all-links-n8n-workflow.jpg",
        alt: "n8n workflow — receive spreadsheet link, download files, and upload to one Drive folder",
        href: "https://www.linkedin.com/feed/update/urn:li:activity:7484915546031804416/",
      },
      {
        src: "/images/projects/all-links-upload-ui.jpg",
        alt: "Upload Photo Spreadsheet UI — paste sheet link and process photo downloads automatically",
        href: "https://www.linkedin.com/feed/update/urn:li:activity:7484915546031804416/",
      },
      {
        src: "/images/projects/all-links-spreadsheet-input.jpg",
        alt: "Spreadsheet input with photo links ready for automated Google Drive download",
        href: "https://www.linkedin.com/feed/update/urn:li:activity:7484915546031804416/",
      },
    ],
    proofLinks: [
      {
        label: "LinkedIn — All Links automation proof",
        href: "https://www.linkedin.com/feed/update/urn:li:activity:7484915546031804416/",
      },
    ],
  },
  {
    title: "Photo Size Calculator Automation",
    slug: "photo-size-calculator-automation",
    category: ["AI Workflow"],
    year: "2025",
    summary:
      "Google Drive folder in → photo dimensions in cm out. Automates listing JPG/PNG files, calculating size at 300 DPI, and upserting results to Google Sheets.",
    role: "Automation Workflow Designer",
    thumbnail: "/images/projects/photo-size-calculator-automation.jpg",
    thumbnailFit: "contain",
    featured: true,
    overview:
      "Built an automation flow that accepts a Google Drive folder link, validates access, lists all JPG and PNG files, downloads each image to measure dimensions, converts width and height to centimeters at 300 DPI, then appends or updates rows in Google Sheets — with a simple UI to paste a folder link and open the finished sheet.",
    deliverables: [
      "Drive folder intake form",
      "n8n automation workflow",
      "Google Sheets upsert output",
    ],
    tools: ["n8n", "Google Drive", "Google Sheets", "JavaScript"],
    highlights: [
      "Validated Drive folder links before processing",
      "Batch-calculated photo dimensions in cm (300 DPI)",
      "Upserted results to Sheets with completion UI",
    ],
    metrics: [
      { label: "Input", value: "Drive folder link" },
      { label: "Output", value: "Google Sheet rows" },
      { label: "Calc", value: "Width × height (cm)" },
    ],
    cardUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7485600888867454976/",
    gallery: [
      {
        src: "/images/projects/photo-size-calculator-automation.jpg",
        alt: "Photo Size Calculator automation flow — Google Drive folder to Google Sheets with dimension calculation",
        href: "https://www.linkedin.com/feed/update/urn:li:activity:7485600888867454976/",
      },
    ],
    proofLinks: [
      {
        label: "LinkedIn — Photo Size Calculator proof",
        href: "https://www.linkedin.com/feed/update/urn:li:activity:7485600888867454976/",
      },
    ],
  },
  {
    title: "BCA Transaction Tracking Automation",
    slug: "bca-transaction-tracking-automation",
    category: ["AI Workflow"],
    year: "2025",
    summary:
      "From Gmail to dashboard — an n8n workflow that parses BCA transaction emails, logs them to Sheets, notifies via Telegram, and exposes clean JSON for a finance dashboard.",
    role: "Automation Workflow Designer",
    thumbnail: "/images/projects/bca-transaction-tracking-automation.jpg",
    thumbnailFit: "contain",
    featured: true,
    overview:
      "Designed an end-to-end BCA transaction tracking system: Gmail trigger detects new bank emails, data is parsed and cleaned, saved to Google Sheets, and pushed to Telegram. A webhook mini-API then serves filtered JSON to a finance dashboard for spending trends and category distribution.",
    deliverables: [
      "Gmail → Sheets → Telegram workflow",
      "Webhook API for dashboard data",
      "Finance dashboard data pipeline",
    ],
    tools: ["n8n", "Gmail", "Google Sheets", "Telegram", "JavaScript"],
    highlights: [
      "Automatic capture of BCA transaction emails",
      "Instant Telegram notifications for new activity",
      "Dashboard-ready JSON via webhook for spend tracking",
    ],
    metrics: [
      { label: "Trigger", value: "Gmail / BCA email" },
      { label: "Storage", value: "Google Sheets" },
      { label: "Notify", value: "Telegram + Dashboard" },
    ],
    cardUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7472959418909863936/",
    gallery: [
      {
        src: "/images/projects/bca-n8n-workflow.jpg",
        alt: "BCA n8n workflow — Gmail trigger to Google Sheets and webhook API",
        href: "https://www.linkedin.com/feed/update/urn:li:activity:7472959418909863936/",
      },
      {
        src: "/images/projects/bca-finance-dashboard.jpg",
        alt: "BCA Finance Dashboard Insight — spending trends and category distribution",
        href: "https://www.linkedin.com/feed/update/urn:li:activity:7472959418909863936/",
      },
    ],
    proofLinks: [
      {
        label: "LinkedIn — BCA automation proof",
        href: "https://www.linkedin.com/feed/update/urn:li:activity:7472959418909863936/",
      },
    ],
  },
  {
    title: "AI Content Batch for System",
    slug: "ai-content-batch-for-system",
    ecosystemOnly: true,
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
  const visibleProjects = projects.filter((project) => !project.hidden);
  const index = visibleProjects.findIndex((project) => project.slug === slug);

  if (index === -1) {
    return undefined;
  }

  return visibleProjects[(index + 1) % visibleProjects.length];
}
