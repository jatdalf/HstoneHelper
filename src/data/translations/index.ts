import type { Achievement, AchievementTranslation, Language, } from "../../types";
import { violetHoldSpanishTranslations } from "./es/violet-hold";
import { cataclysmSpanishTranslations } from "./es/cataclysm";
import { timeTravelSpanishTranslations } from "./es/time-travel";
import { lostCitySpanishTranslations } from "./es/lost-city";
import { emeraldDreamSpanishTranslations } from "./es/emerald-dream";
import { greatDarkBeyondSpanishTranslations } from "./es/great-dark-beyond";
import { paradiseSpanishTranslations } from "./es/paradise";
import { whizbangSpanishTranslations } from "./es/whizbang";

const spanishTranslations: Record<string, AchievementTranslation> = {
  ...violetHoldSpanishTranslations,
  ...cataclysmSpanishTranslations,
  ...timeTravelSpanishTranslations,
  ...lostCitySpanishTranslations,
  ...emeraldDreamSpanishTranslations,
  ...greatDarkBeyondSpanishTranslations,
  ...paradiseSpanishTranslations,
  ...whizbangSpanishTranslations,
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