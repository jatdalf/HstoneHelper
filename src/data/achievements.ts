import type { Achievement } from "../types";
import { alteracValleyAchievements } from "./alterac-valley";
import { violetHoldAchievements } from "./violet-hold";

export const achievements: Achievement[] = [
  ...violetHoldAchievements,
  ...alteracValleyAchievements,
];