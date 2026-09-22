import type { Achievement, AchievementTranslation, Language, } from "../../types";
import { violetHoldSpanishTranslations } from "./es/violet-hold";
import { cataclysmSpanishTranslations } from "./es/cataclysm";

const spanishTranslations: Record<string, AchievementTranslation> = {
  ...violetHoldSpanishTranslations,
  ...cataclysmSpanishTranslations,
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