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
    tagline: "Strategic content. Real engagement. Measurable growth.",
    description:
      "Arambh provides professional social media management services to help brands grow their online presence, engage their audience, and drive real business results. We combine data-driven strategies with high-quality content, active community management, and targeted social media advertising to build a strong and consistent digital presence. We help brands in India grow their organic reach 2× through strategic social media marketing.",
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
          "Platform-specific social media strategies aligned with brand and business goals.",
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
    description:
      "We deliver strategic content marketing and high-quality content production services that help brands build authority, engage their audience, and drive measurable growth. Our data-driven content strategies are aligned with your business goals and brand voice, covering the entire process from concept to production and post-production.",
    highlights: [
      "Data-driven content strategy",
      "Brand storytelling",
      "Performance-focused creatives",
      "Multi-platform content production",
    ],
    offerings: [
      {
        title: "Content Strategy",
        description:
          "Strategic planning aligned with business objectives and brand voice.",
      },
      {
        title: "Visual Content Production",
        description:
          "Videos, brand photography, social media content, and digital creatives.",
      },
      {
        title: "Post-Production",
        description:
          "Editing and optimization to maximize engagement across platforms.",
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
    description:
      "Our performance marketing services are designed to generate leads, sales, and measurable business growth. Using data-backed advertising strategies, we maximize ROI through highly targeted campaigns, advanced audience targeting, conversion tracking, and performance analytics.",
    highlights: [
      "Lead generation focused",
      "ROI-driven ad strategies",
      "Advanced targeting",
      "Performance analytics",
    ],
    offerings: [
      {
        title: "Paid Advertising",
        description:
          "Execution and optimization of high-performing paid ad campaigns.",
      },
      {
        title: "Sales & Lead Funnels",
        description:
          "Conversion-focused funnels designed to deliver real business outcomes.",
      },
      {
        title: "Campaign Optimization",
        description:
          "Continuous monitoring, testing, and performance improvements.",
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
    description:
      "We provide professional model shoot services that elevate your brand’s visual appeal and marketing impact. From concept planning to final execution, we manage styling, direction, and production to deliver compelling visuals for fashion brands, lifestyle campaigns, and digital promotions.",
    highlights: [
      "End-to-end shoot management",
      "Creative direction",
      "Professional styling & grooming",
      "High-quality post-production",
    ],
    offerings: [
      {
        title: "Concept & Mood Planning",
        description:
          "Defining the look, personality, and visual direction of the shoot.",
      },
      {
        title: "Shoot Direction",
        description:
          "Guided posing with precise creative and aesthetic direction.",
      },
      {
        title: "Post-Production",
        description:
          "Refined retouching, tonal balance, and final image delivery.",
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
    description:
      "Arambh specializes in brand shoots that tell your brand story through powerful visuals. We create premium photography and video content that reflects your brand personality, values, and positioning, ideal for websites, social media, ad campaigns, and product launches.",
    highlights: [
      "Brand-focused storytelling",
      "Premium photo & video content",
      "Strong visual identity",
      "Consistent brand aesthetics",
    ],
    offerings: [
      {
        title: "Brand Immersion",
        description:
          "Understanding the brand’s vision, values, and positioning.",
      },
      {
        title: "Creative Planning",
        description:
          "Concept curation, styling, and detailed shoot planning.",
      },
      {
        title: "Shoot Execution",
        description:
          "Seamless execution with refined creative direction.",
      },
    ],
    cta: {
      text: "Create Your Brand Visuals",
      link: "/contact",
    },
  },

  {
    slug: "influencer-marketing",
    title: "Influencer Marketing",
    tagline: "Authentic collaborations that drive trust.",
    description:
      "Our influencer marketing services help brands build trust, reach the right audience, and drive authentic engagement. From influencer identification to campaign management and performance tracking, we handle the entire process to boost awareness, traffic, and conversions.",
    highlights: [
      "Influencer identification",
      "Campaign strategy & execution",
      "Authentic engagement",
      "Performance tracking",
    ],
    offerings: [
      {
        title: "Influencer Discovery",
        description:
          "Connecting your brand with creators aligned to your values.",
      },
      {
        title: "Campaign Management",
        description:
          "End-to-end execution of influencer collaborations.",
      },
      {
        title: "Performance Reporting",
        description:
          "Tracking engagement, reach, and conversions.",
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
    description:
      "Arambh provides comprehensive SEO services to improve your website’s visibility and search engine rankings. Our ethical, data-driven SEO strategies combine technical optimization, keyword research, and high-quality content to attract the right audience and generate consistent leads.",
    highlights: [
      "Higher search visibility",
      "Targeted organic traffic",
      "Improved credibility",
      "Long-term ROI",
    ],
    offerings: [
      {
        title: "SEO Audit & Strategy",
        description:
          "Identifying opportunities to improve rankings and performance.",
      },
      {
        title: "On-Page & Technical SEO",
        description:
          "Optimizing structure, content, and user experience.",
      },
      {
        title: "SEO Performance Tracking",
        description:
          "Monitoring rankings, traffic, and conversions.",
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
    description:
      "We design and develop high-performance websites that are visually appealing, user-friendly, and conversion-focused. Our websites are fast, responsive, SEO-friendly, and built to support your overall digital marketing strategy.",
    highlights: [
      "Responsive & modern design",
      "SEO-friendly structure",
      "High performance",
      "Conversion-focused UX",
    ],
    offerings: [
      {
        title: "Custom Website Development",
        description:
          "Tailored websites aligned with your brand identity.",
      },
      {
        title: "Landing Pages",
        description:
          "High-converting landing pages for campaigns and ads.",
      },
      {
        title: "Ongoing Support",
        description:
          "Maintenance, updates, and performance optimization.",
      },
    ],
    cta: {
      text: "Build Your Website",
      link: "/contact",
    },
  },
];
