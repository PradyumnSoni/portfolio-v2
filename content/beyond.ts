export type BeyondCard = {
  id: string;
  title: string;
  description: string;
  icon: string; // label for icon: "community" | "entrepreneurship"
}

export const beyondCards: BeyondCard[] = [
  {
    id: "community",
    title: "Community & Culture",
    description: "Preaching what I practice.",
    icon: "community",
  },
  {
    id: "entrepreneurship",
    title: "Entrepreneurship",
    description: "Helping business owners scale their operations.",
    icon: "entrepreneurship",
  },
];
