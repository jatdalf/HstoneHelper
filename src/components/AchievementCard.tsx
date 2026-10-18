import { Check } from "lucide-react";
import { translateAchievement } from "../data/translations";
import type { Achievement, Language } from "../types";
import { getExpansionOption } from "./expansions";

interface AchievementCardProps {
  achievement: Achievement;
  completed: boolean;
  language: Language;
  showExpansion?: boolean;
  onToggle: () => void;
}

export function AchievementCard({
  achievement,
  language,
  completed,
  showExpansion = false,
  onToggle,
}: AchievementCardProps) {
  const translatedAchievement = translateAchievement(
    achievement,
    language,
  );

  const expansion = getExpansionOption(achievement.expansion);

  const tierLabel = language === "es" ? "Nivel" : "Tier";

  const translatedCards = translatedAchievement.cards;

  const cardsLabel =
    translatedCards && translatedCards.length > 0
      ? translatedCards.join(", ")
      : language === "es"
        ? "Sin carta específica"
        : "No specific card";

  return (
    <article
      className={`achievement-card ${
        completed ? "achievement-completed" : ""
      }`}
    >
      <label className="achievement-main">
        <input
          type="checkbox"
          checked={completed}
          onChange={onToggle}
        />

        <span className="custom-checkbox">
          {completed && <Check size={15} strokeWidth={3} />}
        </span>

        <span className="achievement-content">
          <span className="achievement-heading">
            <strong>{translatedAchievement.name}</strong>

            <span className="achievement-tier">
              {tierLabel} {achievement.tier}
            </span>
          </span>

          <span className="achievement-description">
            {translatedAchievement.description}
          </span>
        </span>
      </label>

      <footer className="achievement-footer">
        <div className="achievement-references">
          <span className="achievement-cards">
            {cardsLabel}
          </span>

          {showExpansion && expansion && (
            <span
              className="achievement-expansion"
              title={expansion.name[language]}
            >
              {expansion.shortName[language]}
            </span>
          )}
        </div>
        <strong>
          {achievement.xp} XP · {achievement.points} pts
        </strong>
      </footer>
    </article>
  );
}