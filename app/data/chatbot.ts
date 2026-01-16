export type BotOption = {
  label: string;
  response: string;
  submenu?: BotOption[];
};

export const MAIN_MENU: BotOption[] = [
  {
    label: "Website Development",
    response:
      "We build fast, responsive, and conversion-focused websites tailored to your brand."
  },
  {
    label: "SEO Services",
    response:
      "Our SEO services help improve your search visibility and drive organic traffic."
  },
  {
    label: "Digital Marketing",
    response:
      "We create performance-driven digital marketing strategies across platforms."
  },
  {
    label: "Influencer Marketing",
    response:
      "We connect brands with the right influencers for authentic reach and impact."
  },
  {
    label: "Analytics & Reporting",
    response:
      "We provide clear analytics and insights to track growth and performance."
  },
  {
    label: "TAT Offered",
    response:
      "The Turnaround Time (TAT) typically ranges from 4 to 14 working days. Please select an option below to learn more.",
    submenu: [
      {
        label: "Website Projects",
        response:
          "Website development projects usually take 10–14 working days depending on complexity."
      },
      {
        label: "Marketing Campaigns",
        response:
          "Digital marketing campaigns are typically launched within 4–7 working days."
      }
    ]
  }
];
