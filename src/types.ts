export interface Challenge {
  id: number; // 1 to 16
  week: string; // e.g. "Week 1"
  title: string;
  category: string; // "Science" | "Technology" | "Engineering" | "Arts" | "Math" | "Intro" | etc.
  categoryColor: "red" | "teal" | "navy" | "amber";
  teaser: string;
  descriptionParagraphs: string[];
  activities: string[];
  guestIconId: string; // matches Icon.id
}

export interface Icon {
  id: string; // kebab-case string, e.g. "coach-jacky-cheng"
  name: string;
  role: string;
  category: string; // e.g. "Arts", "Engineering", "Math/Mindset"
  isHeadliner: boolean;
  isOrg: boolean;
  bioParagraphs: string[];
  achievements: string[];
  weekId: number; // matches Challenge.id
  imagePlaceholder?: string;
}

export interface PartnerProduct {
  name: string;
  description: string;
  imagePlaceholder: string;
}

export interface Partner {
  id: string; // e.g. "dji"
  name: string;
  tagline: string;
  descriptionTeaser: string;
  descriptionParagraphs: string[];
  products: PartnerProduct[];
  logoPlaceholder: string;
}

export interface SchoolEvent {
  id: string; // e.g. "robotics-battle"
  name: string;
  date: string;
  time: string;
  teaser: string;
  descriptionParagraphs: string[];
  howToParticipate: string[];
}
