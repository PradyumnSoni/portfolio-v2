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

// Featured work (detailed showcases)
export type FeaturedProject = Project & {
  image: string;
  mobileMockup?: string;
};

export const featuredProjects: FeaturedProject[] = [
  {
    id: "himalaya-retreat",
    title: "Himalaya - The Retreat Hotels",
    shortDescription:
      "Hotel booking and experience design for retreat properties.",
    thumbnail: "/next.svg",
    image: "/next.svg",
    mobileMockup: "/vercel.svg",
  },
  {
    id: "autocompli",
    title: "AutoCompli - AI Powered Compliance",
    shortDescription: "Compliance review and rule book experience.",
    thumbnail: "/vercel.svg",
    image: "/vercel.svg",
    mobileMockup: "/next.svg",
  },
  {
    id: "vymo",
    title: "Vymo - On behalf of your work",
    shortDescription: "Meaningful work and productivity tools.",
    thumbnail: "/next.svg",
    image: "/next.svg",
    mobileMockup: "/vercel.svg",
  },
];

// Legacy list for modal/cards (keep for compatibility)
export const projects = selectedProjects;
