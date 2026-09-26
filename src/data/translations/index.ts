import type { Achievement, AchievementTranslation, Language, } from "../../types";
import { violetHoldSpanishTranslations } from "./es/violet-hold";
import { cataclysmSpanishTranslations } from "./es/cataclysm";
import { timeTravelSpanishTranslations } from "./es/time-travel";
import { lostCitySpanishTranslations } from "./es/lost-city";
import { emeraldDreamSpanishTranslations } from "./es/emerald-dream";
import { greatDarkBeyondSpanishTranslations } from "./es/great-dark-beyond";
import { paradiseSpanishTranslations } from "./es/paradise";
import { whizbangSpanishTranslations } from "./es/whizbang";
import { badlandsSpanishTranslations } from "./es/badlands";
import { titansSpanishTranslations } from "./es/titans";
import { festivalOfLegendsSpanishTranslations } from "./es/festival-of-legends";
import { lichKingSpanishTranslations } from "./es/lich-king";
import { nathriaSpanishTranslations } from "./es/nathria";
import { sunkenCitySpanishTranslations } from "./es/sunken-city";
import { alteracValleySpanishTranslations } from "./es/alterac-valley";
import { stormwindSpanishTranslations } from "./es/stormwind";
import { barrensSpanishTranslations } from "./es/barrens";
import { darkmoonSpanishTranslations } from "./es/darkmoon";
import { scholomanceSpanishTranslations } from "./es/scholomance";
import { outlandEs } from "./es/outland-es";
import { dragonsEs } from "./es/dragons-es";

const spanishTranslations: Record<string, AchievementTranslation> = {
  ...violetHoldSpanishTranslations,
  ...cataclysmSpanishTranslations,
  ...timeTravelSpanishTranslations,
  ...lostCitySpanishTranslations,
  ...emeraldDreamSpanishTranslations,
  ...greatDarkBeyondSpanishTranslations,
  ...paradiseSpanishTranslations,
  ...whizbangSpanishTranslations,
  ...badlandsSpanishTranslations,
  ...titansSpanishTranslations,
  ...festivalOfLegendsSpanishTranslations,
  ...lichKingSpanishTranslations,
  ...nathriaSpanishTranslations,
  ...sunkenCitySpanishTranslations,
  ...alteracValleySpanishTranslations,
  ...stormwindSpanishTranslations,
  ...barrensSpanishTranslations,
  ...darkmoonSpanishTranslations,
  ...scholomanceSpanishTranslations,
  ...outlandEs,
  ...dragonsEs,
};

export function translateAchievement( achievement: Achievement, language: Language,): AchievementTranslation {
  if (language === "es") {
    const translation = spanishTranslations[achievement.id];
    if (translation) {
      return {
        name: translation.name,
        description: translation.description,
        cards: translation.cards ?? achievement.cards,
      };
    }
  }
  return {
    name: achievement.name,
    description: achievement.description,
    cards: achievement.cards,
  };
}