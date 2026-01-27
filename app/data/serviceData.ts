export type ServiceData = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  offerings: {
    title: string;
    description: string;
  }[];
  cta: {
    text: string;
    link: string;
  };
};

export const servicesData: ServiceData[] = [
  {
    slug: "social-media-management",
    title: "Social Media Management",
    tagline: "Build influence. Drive engagement. Stay relevant.",
    description:
      "We manage your social presence with a strategy-first approach that builds brand authority, consistency, and measurable engagement across platforms.",
    highlights: [
      "Platform-specific content strategy",
      "Consistent brand voice",
      "Community management",
      "Analytics & reporting",
    ],
    offerings: [
      {
        title: "Content Planning",
        description: "Monthly content calendars aligned with business goals.",
      },
      {
        title: "Posting & Scheduling",
        description: "Optimized posting times for maximum reach.",
      },
      {
        title: "Engagement Management",
        description: "Reply handling & community building.",
      },
    ],
    cta: {
      text: "Scale Your Social Presence",
      link: "/contact",
    },
  },

  {
    slug: "content-marketing",
    title: "Content Marketing",
    tagline: "Content that converts, not just exists.",
    description:
      "We craft high-impact content that educates, influences, and converts your audience across digital touchpoints.",
    highlights: [
      "SEO-driven content",
      "Brand storytelling",
      "Authority building",
      "Long-term growth assets",
    ],
    offerings: [
      {
        title: "Blog & Article Writing",
        description: "Search-optimized content that ranks and converts.",
      },
      {
        title: "Website Copy",
        description: "Clear, persuasive messaging aligned with your brand.",
      },
      {
        title: "Campaign Content",
        description: "Launch-focused content for growth initiatives.",
      },
    ],
    cta: {
      text: "Create High-Impact Content",
      link: "/contact",
    },
  },

  {
    slug: "performance-marketing",
    title: "Performance Marketing",
    tagline: "Every click accountable. Every campaign optimized.",
    description:
      "Data-backed marketing campaigns focused on ROI, conversions, and sustainable growth.",
    highlights: [
      "ROI-driven campaigns",
      "Paid media optimization",
      "A/B testing",
      "Conversion tracking",
    ],
    offerings: [
      {
        title: "Paid Ads",
        description: "Google, Meta & performance-focused ad campaigns.",
      },
      {
        title: "Funnel Optimization",
        description: "Conversion-focused landing pages & flows.",
      },
      {
        title: "Analytics & Reporting",
        description: "Clear insights and performance dashboards.",
      },
    ],
    cta: {
      text: "Launch Performance Campaigns",
      link: "/contact",
    },
  },

  {
    slug: "model-shoots",
    title: "Model Shoots",
    tagline: "Visuals that elevate brand perception.",
    description:
      "Premium photoshoots crafted to enhance brand credibility and visual storytelling.",
    highlights: [
      "Creative direction",
      "Professional production",
      "Brand-aligned visuals",
      "Multi-platform usage",
    ],
    offerings: [
      {
        title: "Concept Development",
        description: "Moodboards & visual themes.",
      },
      {
        title: "Photoshoot Execution",
        description: "End-to-end shoot management.",
      },
      {
        title: "Post Production",
        description: "High-end retouching & edits.",
      },
    ],
    cta: {
      text: "Book a Creative Shoot",
      link: "/contact",
    },
  },

  {
    slug: "influencer-marketing",
    title: "Influencer Marketing",
    tagline: "Authentic reach through trusted voices.",
    description:
      "Strategic influencer collaborations that drive credibility, awareness, and conversions.",
    highlights: [
      "Creator discovery",
      "Campaign strategy",
      "Authentic storytelling",
      "Performance tracking",
    ],
    offerings: [
      {
        title: "Influencer Outreach",
        description: "Relevant creators aligned with your brand.",
      },
      {
        title: "Campaign Execution",
        description: "Structured influencer campaigns.",
      },
      {
        title: "Reporting",
        description: "Engagement & ROI insights.",
      },
    ],
    cta: {
      text: "Activate Influencer Campaigns",
      link: "/contact",
    },
  },

  {
    slug: "website-development",
    title: "Website Development",
    tagline: "Web experiences built for growth.",
    description:
      "High-performance websites that combine aesthetics, usability, and conversion-focused architecture.",
    highlights: [
      "Modern UI/UX",
      "Performance optimized",
      "SEO-ready structure",
      "Scalable architecture",
    ],
    offerings: [
      {
        title: "Custom Development",
        description: "Tailored websites built with modern tech.",
      },
      {
        title: "UI/UX Design",
        description: "User-centric layouts & flows.",
      },
      {
        title: "Maintenance & Support",
        description: "Ongoing improvements & updates.",
      },
    ],
    cta: {
      text: "Build a High-Impact Website",
      link: "/contact",
    },
  },

  {
    slug: "seo-optimization",
    title: "SEO Optimization",
    tagline: "Rank higher. Stay visible. Grow organically.",
    description:
      "Search optimization strategies that improve visibility, authority, and long-term traffic.",
    highlights: [
      "Keyword research",
      "On-page optimization",
      "Technical SEO",
      "Content optimization",
    ],
    offerings: [
      {
        title: "SEO Audit",
        description: "Identify gaps & opportunities.",
      },
      {
        title: "On-page SEO",
        description: "Optimize content & structure.",
      },
      {
        title: "Performance Tracking",
        description: "Rank & traffic monitoring.",
      },
    ],
    cta: {
      text: "Improve Search Rankings",
      link: "/contact",
    },
  },

  {
    slug: "brand-strategy",
    title: "Brand Strategy",
    tagline: "Clarity, positioning & long-term vision.",
    description:
      "We help brands define their identity, positioning, and growth roadmap with clarity and consistency.",
    highlights: [
      "Brand positioning",
      "Messaging frameworks",
      "Market differentiation",
      "Long-term vision",
    ],
    offerings: [
      {
        title: "Brand Audit",
        description: "Understand current perception & gaps.",
      },
      {
        title: "Positioning Strategy",
        description: "Clear differentiation in the market.",
      },
      {
        title: "Brand Guidelines",
        description: "Consistent brand execution.",
      },
    ],
    cta: {
      text: "Define Your Brand Strategy",
      link: "/contact",
    },
  },
];
