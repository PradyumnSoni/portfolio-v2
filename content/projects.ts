export type Project = {
  id: string;
  title: string;
  role?: string;
  tools?: string[];
  timeframe?: string;
  shortDescription: string;
  thumbnail: string;
  figmaLink?: string;
  prototypeLink?: string;
};

// Selected projects (carousel)
export const selectedProjects: Project[] = [
  {
    id: "delivery-partner-app",
    title: "Delivery Partner App - V2",
    shortDescription: "Mobile app for delivery partners.",
    thumbnail: "/next.svg",
    figmaLink: "https://www.figma.com/design/A1909OwqI6riUHo6SZDhBJ/",
  },
  {
    id: "corporate-innovation",
    title: "Corporate Innovation Project",
    shortDescription: "Innovation and discovery.",
    thumbnail: "/vercel.svg",
  },
  {
    id: "swiggy-diner",
    title: "Swiggy - Diner App",
    shortDescription: "Dining and restaurant experience.",
    thumbnail: "/next.svg",
  },
  {
    id: "project-4",
    title: "Project Four",
    shortDescription: "Another case study.",
    thumbnail: "/vercel.svg",
  },
];

// Featured work carousel (4 projects, card layout per Figma)
export type FeaturedWorkCard = Project & {
  /** Background color for the card (e.g. #F5E6C8, #1E3A5F) */
  cardColor: string;
  /** Text color on card: "dark" | "light" */
  cardTextColor: "dark" | "light";
  /** Optional icon path; placeholder used if not set */
  icon?: string;
  /** Main card image (placeholder until assets provided) */
  image: string;
  /** Optional overlay gradient start color (rgba / hex) */
  overlayStart?: string;
  /** Optional overlay gradient end color (rgba / hex) */
  overlayEnd?: string;
  /** If true, disables the colored overlay gradient (text-only dark overlay or none) */
  disableColorOverlay?: boolean;
};

export const featuredWorkCards: FeaturedWorkCard[] = [
  {
    id: "delivery-partner-app",
    title: "Dispatch Delivery Partner App",
    shortDescription:
      "A rider-facing app for everyday deliveries. Designed to onboard riders and make them complete orders reliably.",
    thumbnail: "",
    cardColor: "#F5E6C8",
    cardTextColor: "dark",
    icon: "/ProjectIconDispatch.jpg",
    image: "/ProjectBackgroundDispatch.jpg",
    // F2E6C7 90% opacity to E6BA42 80% opacity
    overlayStart: "rgba(242, 230, 199, 1)",
    overlayEnd: "rgba(230, 186, 66, 0.5)",
  },
  {
    id: "marketplace-project",
    title: "The Marketplace Project",
    shortDescription:
      "OLX is great at listing, but bad at closing deals. I designed the parts most platforms ignore.",
    thumbnail: "",
    cardColor: "#1E3A5F",
    cardTextColor: "light",
    icon: "/ProjectIconMarketplace.jpg",
    image: "/ProjectBackgroundMarketplace.jpg",
    // 193F8E 100% opacity to 0C1434 80% opacity
    overlayStart: "rgba(25, 63, 142, 1)",
    overlayEnd: "rgba(12, 20, 52, 0.8)",
  },
  {
    id: "food-for-thought",
    title: "Food for Thought",
    shortDescription:
      "Dinner, with a digital layer. Exploring how dining experiences can be transformed with augmented reality.",
    thumbnail: "",
    cardColor: "#2D2D2D",
    cardTextColor: "light",
    icon: "/ProjectIconFood.jpg",
    image: "/ProjectBackgroundFood.jpg",
    // Food for Thought: 000000 95% opacity at top to 0% opacity at middle
    overlayStart: "rgba(0, 0, 0, 0.95)",
    overlayEnd: "transparent",
  },
  {
    id: "creative-experiment",
    title: "A creative experiment",
    shortDescription: "Writing and exploration. More details coming soon.",
    thumbnail: "",
    cardColor: "#D4E5D9",
    cardTextColor: "dark",
    icon: "/ProjectIconSoulInk.jpg",
    image: "/ProjectBackgroundSoulInk.jpg",
    // SoulInk: no colored gradient overlay
    disableColorOverlay: true,
  },
];

// Legacy: featured work (detailed showcases) – kept for modal/case study if needed
export type FeaturedProject = Project & {
  image: string;
  mobileMockup?: string;
};

export const featuredProjects: FeaturedProject[] = featuredWorkCards.map(
  (card) => ({
    id: card.id,
    title: card.title,
    role: card.role,
    tools: card.tools,
    timeframe: card.timeframe,
    shortDescription: card.shortDescription,
    thumbnail: card.thumbnail || "",
    figmaLink: card.figmaLink,
    prototypeLink: card.prototypeLink,
    image: card.image || "",
  })
);

// Legacy list for modal/cards (keep for compatibility)
export const projects = selectedProjects;
