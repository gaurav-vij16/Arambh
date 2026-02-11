import { StaticImageData } from "next/image";

// ================= IMAGES =================
import SocialMedia from "../../public/SocialMediaManagement.png";
import Performance from "../../public/PerformanceMarketing.png";
import Seo from "../../public/SeoImage.png";
import WebsiteDevelopment from "../../public/WebsiteDevelopment.png";
import InfluencerMarketing from "../../public/InfluencerMarketing.png";
import ModelShoots from "../../public/ModelShoots.png";
import ContentMarketing from "../../public/ContentMarketing.png";
import BrandShoot from "../../public/BrandShoot.png";

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
  steps?: {
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
      "Arambh provides professional social media management services to help brands grow online, engage their audience, and drive real business results. We combine data driven strategies, high quality content, community management, and targeted campaigns to increase brand awareness, engagement, and website traffic. We help brands in India grow their organic reach 2× through strategic social media marketing.",
    highlights: [
      "Data driven social media strategies",
      "High quality content creation",
      "Active community management",
      "Targeted social media advertising",
    ],
    offerings: [
      {
        title: "Strategy & Planning",
        description: "Tailored social media plans aligned with business goals.",
      },
      {
        title: "Content Creation",
        description:
          "High quality posts, creatives, and captions to engage your audience.",
      },
      {
        title: "Community Management",
        description:
          "Manage audience interaction, comments, and build relationships.",
      },
    ],
    steps: [
      {
        title: "Research & Audit",
        description:
          "Analyze current social presence & competitors to identify opportunities.",
      },
      {
        title: "Platform Strategy",
        description: "Choose the right platforms and create tailored strategies.",
      },
      {
        title: "Content Planning",
        description:
          "Develop calendars, creatives, and messaging aligned with brand voice.",
      },
      {
        title: "Execution & Engagement",
        description:
          "Post content, respond to audience, and manage community interactions.",
      },
      {
        title: "Monitoring & Optimization",
        description:
          "Track performance and refine strategies to maximize results.",
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
    image: ContentMarketing,
    description:
      "We create strategic, high quality content that builds authority, engages audiences, and drives measurable growth. Our team handles the entire content lifecycle from concept to production to performance optimization ensuring visually compelling, brand aligned, and platform ready content.",
    highlights: [
      "Data driven content strategy",
      "Brand storytelling",
      "Performance focused creatives",
      "Multi platform distribution",
    ],
    offerings: [
      {
        title: "Content Strategy",
        description:
          "Plan content aligned with business objectives and audience needs.",
      },
      {
        title: "Visual Content",
        description:
          "Create videos, branded creatives, and social media content.",
      },
      {
        title: "Optimization",
        description:
          "Track performance and refine content for maximum engagement.",
      },
    ],
    steps: [
      {
        title: "Research & Planning",
        description:
          "Understand audience, market trends, and brand objectives.",
      },
      {
        title: "Content Ideation",
        description:
          "Develop creative concepts and storytelling strategies.",
      },
      {
        title: "Content Production",
        description:
          "Produce high quality videos, graphics, and written content.",
      },
      {
        title: "Distribution",
        description:
          "Share content across platforms to reach the target audience.",
      },
      {
        title: "Analysis & Optimization",
        description:
          "Measure content performance and optimize for better results.",
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
    tagline: "Result driven campaigns with measurable ROI.",
    image: Performance,
    description:
      "We deliver performance marketing services that generate leads, sales, and measurable business growth. Using data backed campaigns, advanced targeting, and conversion tracking, we ensure every marketing dollar delivers maximum ROI.",
    highlights: [
      "Lead generation focused",
      "ROI driven strategies",
      "Advanced targeting",
      "Performance analytics",
    ],
    offerings: [
      {
        title: "Paid Advertising",
        description:
          "Design and run high performing ad campaigns.",
      },
      {
        title: "Sales Funnels",
        description:
          "Build optimized funnels to convert visitors into customers.",
      },
      {
        title: "Optimization",
        description:
          "Test, refine, and scale campaigns for better ROI.",
      },
    ],
    steps: [
      {
        title: "Campaign Objective",
        description:
          "Define clear goals: awareness, leads, sales, or engagement.",
      },
      {
        title: "Audience & Platform Selection",
        description:
          "Identify the right audience and channels to reach them effectively.",
      },
      {
        title: "Creative & Copy Development",
        description:
          "Design ad creatives and messaging tailored to the target audience.",
      },
      {
        title: "Launch & Monitoring",
        description:
          "Execute campaigns and continuously monitor performance metrics.",
      },
      {
        title: "Analysis & Optimization",
        description:
          "Refine targeting, creatives, and strategy to maximize ROI.",
      },
    ],
    cta: {
      text: "Launch High ROI Campaigns",
      link: "/contact",
    },
  },

  {
    slug: "model-shoots",
    title: "Model Shoots",
    tagline: "High impact visuals that elevate your brand.",
    image: ModelShoots,
    description:
      "Professional model shoots to elevate your brand’s visual appeal and connect emotionally with your audience. We manage styling, direction, and production to deliver high quality visuals aligned with your campaign goals.",
    highlights: [
      "Creative direction",
      "Professional styling",
      "High quality production",
      "Post production excellence",
    ],
    offerings: [
      {
        title: "Concept Planning",
        description:
          "Mood boards and creative direction for shoots.",
      },
      {
        title: "Shoot Execution",
        description:
          "Guided posing and on set management.",
      },
      {
        title: "Post Production",
        description:
          "Retouching and final image delivery.",
      },
    ],
    steps: [
      {
        title: "Model Briefing",
        description:
          "Understand model personality, look, and shoot objectives.",
      },
      {
        title: "Concept & Mood Development",
        description:
          "Define aesthetics, poses, and visual storytelling.",
      },
      {
        title: "Styling & Grooming",
        description:
          "Curate wardrobe, makeup, and overall appearance.",
      },
      {
        title: "Shoot Direction",
        description:
          "Guide poses and capture the desired vision.",
      },
      {
        title: "Post Production",
        description:
          "Retouching, color correction, and final edits.",
      },
      {
        title: "Final Delivery",
        description:
          "Deliver polished images ready for campaigns and portfolios.",
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
    image: BrandShoot,
    description:
      "We specialize in brand shoots that tell your story through powerful visuals. Ideal for websites, social media, campaigns, and product launches, our shoots create a consistent and memorable brand identity.",
    highlights: [
      "Brand storytelling",
      "Premium visuals",
      "Consistent aesthetics",
      "High end production",
    ],
    offerings: [
      {
        title: "Brand Discovery",
        description:
          "Understand brand vision, tone, and positioning.",
      },
      {
        title: "Creative Planning",
        description:
          "Design concepts, styling, and shoot plan.",
      },
      {
        title: "Execution",
        description:
          "Professional on set shoot direction and delivery.",
      },
    ],
    steps: [
      {
        title: "Brand Immersion",
        description:
          "Understand brand essence, goals, and audience.",
      },
      {
        title: "Concept & Mood Development",
        description:
          "Define visual story and aesthetics.",
      },
      {
        title: "Blueprint & Planning",
        description:
          "Plan shoot details including styling and set design.",
      },
      {
        title: "Client Alignment",
        description:
          "Get approvals before executing the shoot.",
      },
      {
        title: "Shoot Execution",
        description:
          "Directed shoot capturing high quality visuals.",
      },
      {
        title: "Post Production & Delivery",
        description:
          "Retouching and delivering final visuals for campaigns.",
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
      "We help brands build trust, reach the right audience, and drive engagement through influencer partnerships. From identifying influencers to campaign management and performance tracking, we handle everything to ensure measurable impact.",
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
          "Find influencers aligned with your brand values.",
      },
      {
        title: "Campaign Management",
        description:
          "End to end campaign planning and execution.",
      },
      {
        title: "Reporting & Analytics",
        description:
          "Measure engagement and ROI from campaigns.",
      },
    ],
    steps: [
      {
        title: "Influencer Research",
        description:
          "Identify influencers aligned with your brand and audience.",
      },
      {
        title: "Campaign Strategy",
        description:
          "Define goals, KPIs, and collaboration approach.",
      },
      {
        title: "Execution & Monitoring",
        description:
          "Manage content, timelines, and engagement.",
      },
      {
        title: "Performance Analysis",
        description:
          "Track metrics, optimize campaigns, and report results.",
      },
    ],
    cta: {
      text: "Launch Influencer Campaigns",
      link: "/contact",
    },
  },

  {
    slug: "seo-optimization",
    title: "SEO Services",
    tagline: "Long term visibility. Sustainable growth.",
    image: Seo,
    description:
      "Comprehensive SEO solutions to improve search visibility, attract relevant traffic, and generate qualified leads. We focus on long term growth using ethical, data driven strategies including technical optimization, keyword research, and high quality content.",
    highlights: [
      "Visibility: Rank higher and get discovered by the right audience",
      "Credibility: Establish trust and authority in your niche",
      "Targeted Traffic: Attract high intent visitors ready to convert",
      "ROI & Growth: Drive consistent ROI with long term business growth",
    ],
    offerings: [
      {
        title: "SEO Audit",
        description:
          "Technical and on page analysis to identify opportunities.",
      },
      {
        title: "Optimization",
        description:
          "On page, off page, and technical SEO improvements.",
      },
      {
        title: "Tracking & Analytics",
        description:
          "Measure SEO performance and refine strategy.",
      },
    ],
    steps: [
      {
        title: "Website Audit",
        description:
          "Analyze technical, on page, and off page SEO factors.",
      },
      {
        title: "Keyword Research",
        description:
          "Identify high value keywords aligned with business goals.",
      },
      {
        title: "Optimization",
        description:
          "Implement SEO best practices to improve rankings.",
      },
      {
        title: "Content Strategy",
        description:
          "Plan and optimize content for user intent and conversions.",
      },
      {
        title: "Monitoring & Reporting",
        description:
          "Track metrics and continuously refine SEO approach.",
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
      "High performance, visually appealing websites that provide seamless user experience and convert visitors into customers. We build responsive, SEO friendly websites tailored to your brand and marketing goals.",
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
          "Tailored development aligned with brand objectives.",
      },
      {
        title: "Landing Pages",
        description:
          "High converting pages for campaigns and promotions.",
      },
      {
        title: "Support",
        description:
          "Ongoing maintenance and optimization.",
      },
    ],
    steps: [
      {
        title: "Requirement Analysis",
        description:
          "Understand business goals and user needs.",
      },
      {
        title: "UI/UX Design",
        description:
          "Design visually appealing and intuitive interfaces.",
      },
      {
        title: "Development",
        description:
          "Build responsive, fast, and SEO friendly websites.",
      },
      {
        title: "Testing & QA",
        description:
          "Ensure cross device functionality and performance.",
      },
      {
        title: "Launch & Support",
        description:
          "Deploy website and provide ongoing maintenance.",
      },
    ],
    cta: {
      text: "Build Your Website",
      link: "/contact",
    },
  },
];
