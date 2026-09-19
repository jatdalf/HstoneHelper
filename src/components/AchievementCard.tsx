import { Check } from "lucide-react";
import type { Achievement } from "../types";

interface AchievementCardProps {
  achievement: Achievement;
  completed: boolean;
  onToggle: () => void;
}

export function AchievementCard({
  achievement,
  completed,
  onToggle,
}: AchievementCardProps) {
  return (
    <article
      className={`achievement-card ${completed ? "achievement-completed" : ""}`}
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
            <strong>{achievement.name}</strong>

            <span className="achievement-tier">
              Nivel {achievement.tier}
            </span>
          </span>

          <span className="achievement-description">
            {achievement.description}
          </span>
        </span>
      </label>

      <footer className="achievement-footer">
        <span>{achievement.cards ?? "Sin carta específica"}</span>

        <strong>
          {achievement.xp} XP · {achievement.points} pts
        </strong>
      </footer>
    </article>
  );
}