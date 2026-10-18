import type { ExpansionId } from "./ExpansionId";
export type { ExpansionId } from "./ExpansionId";

export type AchievementFilter =
  | "all"
  | "pending"
  | "completed";

export type Language = "es" | "en";

export type HeroClass =
  | "Death Knight"
  | "Demon Hunter"
  | "Druid"
  | "Hunter"
  | "Mage"
  | "Paladin"
  | "Priest"
  | "Rogue"
  | "Shaman"
  | "Warlock"
  | "Warrior"
  | "Neutral";

export interface AchievementTranslation {
  name: string;
  description: string;
  cards?: string[];
}

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
  heroClasses?: HeroClass[];
}

export interface UserProfile {
  id: string;
  name: string;
  completedAchievements: string[];
}