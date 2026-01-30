import { StaticImageData } from "next/image";

// ================= IMAGES =================
import SocialMedia from "../../public/SocialMediaManagement.png";
import Performance from "../../public/PerformanceMarketing.png";
import Seo from "../../public/SeoImage.png";
import WebsiteDevelopment from "../../public/WebsiteDevelopment.png";
import InfluencerMarketing from "../../public/InfluencerMarketing.png";
import Logo from "../../public/clients/Logo.png";

// ================= TYPES =================
export type ServiceData = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  image: StaticImageData;
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

// ================= DATA =================
export const servicesData: ServiceData[] = [
  {
    slug: "social-media-management",
    title: "Social Media Management",
    tagline: "Strategic content. Real engagement. Measurable growth.",
    image: SocialMedia,
    description:
      "Arambh provides professional social media management services to help brands grow their online presence, engage their audience, and drive real business results.",
    highlights: [
      "Data-driven social media strategies",
      "High-quality content creation",
      "Active community management",
      "Targeted social media advertising",
    ],
    offerings: [
      {
        title: "Strategy & Planning",
        description:
          "Platform-specific social media strategies aligned with brand goals.",
      },
      {
        title: "Content Creation",
        description:
          "High-quality posts, creatives, and captions designed to boost engagement.",
      },
      {
        title: "Community Management",
        description:
          "Audience interaction, comment moderation, and relationship building.",
      },
    ],
    cta: {
      text: "Grow Your Social Presence",
      link: "/contact",
    },
  },

  {
    slug: "content-marketing",
    title: "Content Marketing",
    tagline: "Content that builds authority and drives growth.",
    image: Logo, // fallback
    description:
      "We deliver strategic content marketing services that help brands build authority and engage audiences.",
    highlights: [
      "Data-driven content strategy",
      "Brand storytelling",
      "Performance-focused creatives",
      "Multi-platform distribution",
    ],
    offerings: [
      {
        title: "Content Strategy",
        description:
          "Strategic planning aligned with business objectives.",
      },
      {
        title: "Visual Content",
        description:
          "Videos, creatives, and branded content.",
      },
      {
        title: "Optimization",
        description:
          "Performance tracking and refinement.",
      },
    ],
    cta: {
      text: "Build Powerful Content",
      link: "/contact",
    },
  },

  {
    slug: "performance-marketing",
    title: "Performance Marketing",
    tagline: "Result-driven campaigns with measurable ROI.",
    image: Performance,
    description:
      "Our performance marketing services generate leads, sales, and measurable growth.",
    highlights: [
      "Lead generation focused",
      "ROI-driven strategies",
      "Advanced targeting",
      "Performance analytics",
    ],
    offerings: [
      {
        title: "Paid Advertising",
        description:
          "High-performing ad campaign execution.",
      },
      {
        title: "Sales Funnels",
        description:
          "Conversion-focused funnel building.",
      },
      {
        title: "Optimization",
        description:
          "Continuous testing and improvements.",
      },
    ],
    cta: {
      text: "Launch High-ROI Campaigns",
      link: "/contact",
    },
  },

  {
    slug: "model-shoots",
    title: "Model Shoots",
    tagline: "High-impact visuals that elevate your brand.",
    image: Logo, // fallback
    description:
      "Professional model shoot services to enhance your brand’s visual appeal.",
    highlights: [
      "Creative direction",
      "Professional styling",
      "High-quality production",
      "Post-production excellence",
    ],
    offerings: [
      {
        title: "Concept Planning",
        description:
          "Mood boards and creative direction.",
      },
      {
        title: "Shoot Execution",
        description:
          "Guided posing and shoot management.",
      },
      {
        title: "Post Production",
        description:
          "Retouching and final delivery.",
      },
    ],
    cta: {
      text: "Book a Model Shoot",
      link: "/contact",
    },
  },

  {
    slug: "brand-shoot",
    title: "Brand Shoot",
    tagline: "Visual storytelling that defines your brand.",
    image: Logo, // fallback
    description:
      "Premium brand shoots that reflect brand personality and positioning.",
    highlights: [
      "Brand storytelling",
      "Premium visuals",
      "Consistent aesthetics",
      "High-end production",
    ],
    offerings: [
      {
        title: "Brand Discovery",
        description:
          "Understanding brand vision and tone.",
      },
      {
        title: "Creative Planning",
        description:
          "Concept creation and styling.",
      },
      {
        title: "Execution",
        description:
          "Professional shoot execution.",
      },
    ],
    cta: {
      text: "Create Brand Visuals",
      link: "/contact",
    },
  },

  {
    slug: "influencer-marketing",
    title: "Influencer Marketing",
    tagline: "Authentic collaborations that drive trust.",
    image: InfluencerMarketing,
    description:
      "We connect brands with the right influencers for authentic engagement.",
    highlights: [
      "Influencer discovery",
      "Campaign execution",
      "Authentic engagement",
      "Performance tracking",
    ],
    offerings: [
      {
        title: "Creator Discovery",
        description:
          "Finding influencers aligned with your brand.",
      },
      {
        title: "Campaign Management",
        description:
          "End-to-end influencer execution.",
      },
      {
        title: "Reporting",
        description:
          "Engagement and ROI tracking.",
      },
    ],
    cta: {
      text: "Launch Influencer Campaigns",
      link: "/contact",
    },
  },

  {
    slug: "seo",
    title: "SEO Services",
    tagline: "Long-term visibility. Sustainable growth.",
    image: Seo,
    description:
      "Ethical, data-driven SEO strategies for long-term organic growth.",
    highlights: [
      "Higher rankings",
      "Organic traffic",
      "Improved credibility",
      "Sustainable ROI",
    ],
    offerings: [
      {
        title: "SEO Audit",
        description:
          "Technical and on-page analysis.",
      },
      {
        title: "Optimization",
        description:
          "On-page and technical SEO.",
      },
      {
        title: "Tracking",
        description:
          "Performance monitoring.",
      },
    ],
    cta: {
      text: "Improve Your SEO",
      link: "/contact",
    },
  },

  {
    slug: "website-development",
    title: "Website Development",
    tagline: "Websites designed to convert and perform.",
    image: WebsiteDevelopment,
    description:
      "High-performance websites that are fast, responsive, and conversion-focused.",
    highlights: [
      "Modern UI/UX",
      "SEO friendly",
      "Fast performance",
      "Conversion focused",
    ],
    offerings: [
      {
        title: "Custom Websites",
        description:
          "Tailored development aligned with brand goals.",
      },
      {
        title: "Landing Pages",
        description:
          "High-converting campaign pages.",
      },
      {
        title: "Support",
        description:
          "Maintenance and optimization.",
      },
    ],
    cta: {
      text: "Build Your Website",
      link: "/contact",
    },
  },
];
