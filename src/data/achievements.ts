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
import { festivalOfLegendsAchievements } from "./festival-of-legends";
import { lichKingAchievements } from "./lich-king";
import { nathriaAchievements } from "./nathria";
import { sunkenCityAchievements } from "./sunken-city";
import { stormwindAchievements } from "./stormwind";
import { barrensAchievements } from "./barrens";
import { darkmoonAchievements } from "./darkmoon";
import { scholomanceAchievements } from "./scholomance";
import { outlandAchievements } from "./outland";
import { dragonsAchievements } from "./dragons";
import { uldumAchievements } from "./uldum";
import { shadowsAchievements } from "./shadows";
import { wolfAchievements } from "./wolf";
import { hydraAchievements } from "./hydra";
import { gryphonAchievements } from "./gryphon";

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
  ...festivalOfLegendsAchievements,
  ...lichKingAchievements,
  ...nathriaAchievements,
  ...sunkenCityAchievements,
  ...alteracValleyAchievements, 
  ...stormwindAchievements,
  ...barrensAchievements,
  ...darkmoonAchievements,
  ...scholomanceAchievements,
  ...outlandAchievements,
  ...dragonsAchievements,
  ...uldumAchievements,
  ...shadowsAchievements,
  ...wolfAchievements,
  ...hydraAchievements,
  ...gryphonAchievements,
];