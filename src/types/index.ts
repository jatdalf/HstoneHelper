export type AchievementFilter = "all" | "pending" | "completed";
export type ExpansionId =
  | "violet-hold"
  | "cataclysm"
  | "time-travel"
  | "emerald-dream"
  | "badlands" 
  | "lost-city"
  | "whizbang"
  | "titans"
  | "paradise"
  | "great-dark-beyond"
  | "festival-of-legends"
  | "lich-king"
  | "nathria"
  | "sunken-city"
  | "alterac-valley"
  | "stormwind"
  | "barrens"
  | "darkmoon"
  | "scholomance"
  | "outland"
  | "dragons"
  | "uldum"
  | "shadows"
  | "wolf"
  | "hydra"
  | "gryphon"
;
export type Language = "es" | "en";

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

