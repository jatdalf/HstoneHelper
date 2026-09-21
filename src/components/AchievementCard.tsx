import { Check } from "lucide-react";
import { translateAchievement } from "../data/translations";
import type { Achievement, Language } from "../types";

interface AchievementCardProps {
  achievement: Achievement;
  completed: boolean;
  language: Language;
  onToggle: () => void;
}

export function AchievementCard({
  achievement,
  language,
  completed,
  onToggle,
}: AchievementCardProps) {
  const translatedAchievement = translateAchievement(
    achievement,
    language,
  );

  const tierLabel = language === "es" ? "Nivel" : "Tier";
  const translatedCards = translatedAchievement.cards;
  const cardsLabel = translatedCards && translatedCards.length > 0
      ? translatedCards.join(", ") : language === "es"
        ? "Sin carta específica"
        : "No specific card";

    const pointsLabel = language === "es" ? "pts" : "pts";

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
        <span>{cardsLabel}</span>

        <strong>
          {achievement.xp} XP · {achievement.points}{" "}
          {pointsLabel}
        </strong>
      </footer>
    </article>
  );
}