export type Project = {
  id: string;
  title: string;
  role?: string;
  tools?: string[];
  timeframe?: string;
  shortDescription: string;
  thumbnail?: string;
  figmaLink?: string;
  prototypeLink?: string;
};

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
  /** Optional foreground image placed at bottom of card (e.g. person + device mockup) */
  foregroundImage?: string;
};

export const featuredWorkCards: FeaturedWorkCard[] = [
  {
    id: "delivery-partner-app",
    title: "Dispatch Delivery Partner App",
    shortDescription:
      "A rider-facing app for everyday deliveries. Designed to onboard riders and make them complete orders reliably.",
    cardColor: "#F5E6C8",
    cardTextColor: "dark",
    icon: "/ProjectIconDispatch.jpg",
    image: "/ProjectBackgroundDispatch.jpg",
    // F2E6C7 90% opacity to E6BA42 80% opacity
    overlayStart: "rgba(242, 230, 199, 1)",
    overlayEnd: "rgba(230, 186, 66, 0.5)",
    foregroundImage: "/ProjectForegroundDispatch.png",
  },
  {
    id: "marketplace-project",
    title: "The Marketplace Project",
    shortDescription:
      "OLX is great at listing, but bad at closing deals. I designed the parts most platforms ignore.",
    cardColor: "#1E3A5F",
    cardTextColor: "light",
    icon: "/ProjectIconMarketplace.jpg",
    image: "/ProjectBackgroundMarketplace.jpg",
    // 193F8E 100% opacity to 0C1434 80% opacity
    overlayStart: "rgba(25, 63, 142, 1)",
    overlayEnd: "rgba(12, 20, 52, 0.8)",
    foregroundImage: "/ProjectForegroundMarketplace.png",
  },
  {
    id: "food-for-thought",
    title: "Food for Thought",
    shortDescription:
      "Dinner, with a digital layer. Exploring how dining experiences can be transformed with augmented reality.",
    cardColor: "#2D2D2D",
    cardTextColor: "light",
    icon: "/ProjectIconFood.jpg",
    image: "/ProjectBackgroundFood.jpg",
    // Food for Thought: 000000 95% opacity at top to 0% opacity at middle
    overlayStart: "rgba(0, 0, 0, 0.95)",
    overlayEnd: "transparent",
  },
  {
    id: "SoulInk",
    title: "SoulInk",
    shortDescription: "A creative writing pad to ideate, draft, and experiment with interactive creative writing formats.",
    cardColor: "#D4E5D9",
    cardTextColor: "dark",
    icon: "/ProjectIconSoulInk.jpg",
    image: "/ProjectBackgroundSoulInk.jpg",
    // SoulInk: no colored gradient overlay
    disableColorOverlay: true,
  },
];
