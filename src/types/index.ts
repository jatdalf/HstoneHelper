export type AchievementFilter = "all" | "pending" | "completed";
export type ExpansionId =
  | "violet-hold"
  | "cataclysm"
  | "badlands" 
  | "time-travel"
  | "lost-city"
  | "emerald-dream"
  | "whizbang"
  | "titans"
  | "paradise"
  | "great-dark-beyond"
  | "alterac-valley"
;

export interface Achievement {
  id: string;
  expansion: ExpansionId;
  heroClass: string;
  name: string;
  tier: number;
  description: string;
  xp: number;
  points: number;
  cards?: string[];
}
export interface UserProfile {
  id: string;
  name: string;
  completedAchievements: string[];
}