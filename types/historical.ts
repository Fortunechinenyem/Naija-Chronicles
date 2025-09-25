export interface HistoricalEvent {
  id: string;
  year: number;
  month?: number;
  day?: number;
  title: string;
  description: string;
  detailedStory: string;
  images: string[];
  category: "politics" | "culture" | "sports" | "innovation" | "achievement";
  significance: "low" | "medium" | "high";
  region: string[];
  peopleInvolved: string[];
  videoUrl?: string;
}

export interface TimelineFilters {
  decade: number | "all";
  category: string | "all";
  searchQuery: string;
}
