import type { Achievement } from "../types";
import { alteracValleyAchievements } from "./alterac-valley";
import { cataclysmAchievements } from "./cataclysm";
import { violetHoldAchievements } from "./violet-hold";
import { badlandsAchievements } from "./badlands";
import {timeTravelAchievements} from "./timetravel"
import {lostCityAchievements} from "./lost-city"
import {emeraldDreamAchievements} from "./emerald-dream"
import {greatDarkBeyondAchievements} from "./great-dark-beyond"
import {paradiseAchievements} from "./paradise"
import {whizbangAchievements} from "./whizbang"
import {titansAchievements} from "./titans"

export const achievements: Achievement[] = [
  ...violetHoldAchievements,
  ...cataclysmAchievements,
  ...timeTravelAchievements,
  ...lostCityAchievements,
  ...emeraldDreamAchievements,
  ...greatDarkBeyondAchievements,
  ...paradiseAchievements,
  ...whizbangAchievements,
  ...badlandsAchievements,
  ...titansAchievements,
  ...alteracValleyAchievements, 
];