import { useMemo, useState } from "react";
import { Plus, Trophy, UserRound, UsersRound } from "lucide-react";
import "./App.css";
import { AchievementCard } from "./components/AchievementCard";
import { AddUserModal } from "./components/AddUserModal";
import { achievements } from "./data/achievements";
import { useProfiles } from "./hooks/useProfiles";
import type {Achievement, AchievementFilter, ExpansionId,} from "./types";
import { useLanguage } from "./i18n/useLanguage";

const HERO_CLASS_ORDER = [
  "Death Knight",
  "Demon Hunter",
  "Druid",
  "Hunter",
  "Mage",
  "Paladin",
  "Priest",
  "Rogue",
  "Shaman",
  "Warlock",
  "Warrior",
  "Classes",
  "Dual Class",
  "Neutral",
  "Feats of Strength",
];

function App() {
  const { language, setLanguage } = useLanguage();
  const {
    profiles,
    currentUserId,
    currentProfile,
    setCurrentUserId,
    addProfile,
    toggleAchievement,
  } = useProfiles();

  const [filter, setFilter] = useState<AchievementFilter>("all");
  const [showAddUser, setShowAddUser] = useState(false);
  type ExpansionFilter = ExpansionId | "all";
  type HeroClassFilter =
  | "all"
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
  const [expansionFilter, setExpansionFilter] = useState<ExpansionFilter>("violet-hold");
  const completedIds = currentProfile?.completedAchievements ?? [];
  const [heroClassFilter, setHeroClassFilter] = useState<HeroClassFilter>("all");
// Primero seleccionamos la expansión.
const expansionAchievements = useMemo(() => {
  return achievements.filter(
    (achievement) =>
      expansionFilter === "all" ||
      achievement.expansion === expansionFilter,
  );
}, [expansionFilter]);

const filteredAchievements = useMemo(() => {
  return expansionAchievements.filter((achievement) => {
    const completed = completedIds.includes(achievement.id);

    const matchesStatus =
      filter === "all" ||
      (filter === "pending" && !completed) ||
      (filter === "completed" && completed);

    const matchesHeroClass =
      heroClassFilter === "all" ||
      achievement.heroClass === heroClassFilter;

    return matchesStatus && matchesHeroClass;
  });
}, [
  expansionAchievements,
  completedIds,
  filter,
  heroClassFilter,
]);

const groupedAchievements = useMemo(() => {
  return filteredAchievements.reduce<Record<string, Achievement[]>>(
    (groups, achievement) => {
      const currentGroup = groups[achievement.heroClass] ?? [];
      return {...groups, [achievement.heroClass]: [...currentGroup, achievement,],};
   },{},
  );
}, [filteredAchievements]);

// Progreso correspondiente a la expansión seleccionada.
// Completados en la expansión seleccionada.
const completedExpansionAchievements = expansionAchievements.filter(
  (achievement) => completedIds.includes(achievement.id),
);

const expansionProgress = expansionAchievements.length === 0 ? 0 : Math.round(
  (completedExpansionAchievements.length / expansionAchievements.length) * 100,
);

// Completados en toda la aplicación.
const completedGeneralAchievements = achievements.filter(
  (achievement) => completedIds.includes(achievement.id),);
const generalProgress = achievements.length === 0 ? 0 : Math.round(
  (completedGeneralAchievements.length / achievements.length) * 100,);
const earnedXp = completedExpansionAchievements.reduce(
  (total, achievement) => total + achievement.xp, 0,);
const earnedPoints = completedExpansionAchievements.reduce(
  (total, achievement) => total + achievement.points, 0,);
const copy = {
  es: {
    expansion: "Expansión",
    language: "Idioma",
    allExpansions: "Todas las expansiones",
    achievementTracker: "Registro de logros",
    selectUser: "Seleccionar usuario",
    user: "Usuario",
    addUser: "Agregar usuario",
    createFirstUser: "Creá tu primer usuario",
    independentProgress: "El progreso de cada jugador se guarda de manera independiente.",
    progressOf: "Progreso de",
    achievements: "logros",
    overallProgress: "Progreso general",
    earnedXp: "XP obtenida",
    points: "Puntos",
    gameplayAchievements: "Logros de Gameplay",
    results: "resultados",
    all: "Todos",
    pending: "Pendientes",
    completed: "Completados",
    emptyFilter: "No hay logros para mostrar en este filtro.",
  },

  en: {
    expansion: "Expansion",
    language: "Language",
    allExpansions: "All expansions",
    achievementTracker: "Achievement Tracker",
    selectUser: "Select user",
    user: "User",
    addUser: "Add user",
    createFirstUser: "Create your first user",
    independentProgress: "Each player's progress is stored independently.",
    progressOf: "Progress for",
    achievements: "achievements",
    overallProgress: "Overall progress",
    earnedXp: "XP earned",
    points: "Points",
    gameplayAchievements: "Gameplay Achievements",
    results: "results",
    all: "All",
    pending: "Pending",
    completed: "Completed",
    emptyFilter: "There are no achievements for this filter.",
  },
}[language];

const expansionOptions: Array<{
  value: ExpansionFilter;
  es: string;
  en: string;
}> = [
  {
    value: "violet-hold",
    es: "Fuga del Bastión Violeta",
    en: "Violet Hold",
  },{
    value: "cataclysm",
    es: "Cataclismo",
    en: "Cataclysm",
  },{
    value: "time-travel",
    es: "A través de las líneas temporales",
    en: "Across the Timeways",
  },
  {
    value: "lost-city",
    es: "La Ciudad Perdida de Un'Goro",
    en: "The Lost City of Un'Goro",
  },
  {
    value: "emerald-dream",
    es: "En el Sueño Esmeralda",
    en: "Into the Emerald Dream",
  },
  {
    value: "great-dark-beyond",
    es: "La Gran Oscuridad",
    en: "The Great Dark Beyond",
  },
  {
    value: "paradise",
    es: "Peligros en el Paraíso",
    en: "Perils in Paradise",
  },
  {
    value: "whizbang",
    es: "Taller de Miniaturización de Colifero",
    en: "Whizbang's Workshop",
  },
  {
    value: "badlands",
    es: "Duelo en las Tierras Inhóspitas",
    en: "Showdown in the Badlands",
  },
  {
    value: "titans",
    es: "TITANES",
    en: "Titans",
  },
  {
    value: "festival-of-legends",
    es: "Festival de Leyendas",
    en: "Festival of Legends",
  },
  {
    value: "lich-king",
    es: "Marcha del Rey Exánime",
    en: "March of the Lich King",
  },
  {
    value: "nathria",
    es: "Asesinato en el Castillo Nathria",
    en: "Murder at Castle Nathria",
  },
  {
    value: "sunken-city",
    es: "Viaje a la Ciudad Sumergida",
    en: "Voyage to the Sunken City",
  },
  {
    value: "alterac-valley",
    es: "Divididos en el Valle de Alterac",
    en: "Fractured in Alterac Valley",
  },
  {
    value: "stormwind",
    es: "Unidos en Ventormenta",
    en: "United in Stormwind",
  },
  {
    value: "barrens",
    es: "Forjados en Los Baldíos",
    en: "Forged in the Barrens",
  },
  {
    value: "darkmoon",
    es: "Locura en la Feria de la Luna Negra",
    en: "Madness at the Darkmoon Faire",
  },
  {
    value: "scholomance",
    es: "Academia Scholomance",
    en: "Scholomance Academy",
  },
  {
    value: "outland",
    es: "Cenizas de Terrallende",
    en: "Ashes of Outland",
  },
  {
    value: "dragons",
    es: "El Descenso de los Dragones",
    en: "Descent of Dragons",
  },
  {
    value: "uldum",
    es: "Salvadores de Uldum",
    en: "Saviors of Uldum",
  },
  {
    value: "shadows",
    es: "El Auge de las Sombras",
    en: "Rise of Shadows",
  },
  {
    value: "wolf",
    es: "Esencial — Año del Lobo",
    en: "Core — Year of the Wolf",
  },
  {
    value: "hydra",
    es: "Esencial — Año de la Hidra",
    en: "Core — Year of the Hydra",
  },
  {
    value: "gryphon",
    es: "Esencial — Año del Grifo",
    en: "Core — Year of the Gryphon",
  },
];

const classLabels: Record<string, string> = {
  Classes: language === "es" ? "Clases" : "Classes",
  Neutral: language === "es" ? "Neutral" : "Neutral",
  "Feats of Strength":
    language === "es" ? "Proezas de fuerza" : "Feats of Strength",
  "Death Knight":
    language === "es" ? "Caballero de la Muerte" : "Death Knight",
  "Demon Hunter":
    language === "es" ? "Cazador de Demonios" : "Demon Hunter",
  Druid: language === "es" ? "Druida" : "Druid",
  Hunter: language === "es" ? "Cazador" : "Hunter",
  Mage: language === "es" ? "Mago" : "Mage",
  Paladin: language === "es" ? "Paladín" : "Paladin",
  Priest: language === "es" ? "Sacerdote" : "Priest",
  Rogue: language === "es" ? "Pícaro" : "Rogue",
  Shaman: language === "es" ? "Chamán" : "Shaman",
  Warlock: language === "es" ? "Brujo" : "Warlock",
  Warrior: language === "es" ? "Guerrero" : "Warrior",
};

return (
  <main className="app">
    <header className="app-header">
      <div className="header-content">
        <div className="brand">
          <div className="brand-icon">
            <Trophy size={23} />
          </div>

          <label className="field">
            <span>{copy.expansion}</span>

            <select
  className="expansionSelect"
  value={expansionFilter}
  onChange={(event) =>
    setExpansionFilter(
      event.target.value as ExpansionFilter,
    )
  }
>
  {expansionOptions.map((expansion) => (
    <option key={expansion.value} value={expansion.value}>
      {expansion[language]}
    </option>
  ))}

  <option value="all">{copy.allExpansions}</option>
</select>
          </label>

          <div>
            <h1>HS Helper</h1>
            <p>{copy.achievementTracker}</p>
          </div>
        </div>

        <label className="field language-field">
          <span>{copy.language}</span>

          <select
            value={language}
            onChange={(event) =>
              setLanguage(event.target.value as "es" | "en")
            }
            aria-label={copy.language}
          >
            <option value="es"> 🇪🇸 Español</option>
            <option value="en"> 🇬🇧 English</option>
          </select>
        </label>

        <div className="user-controls">
          <div className="user-select-container">
            <UserRound size={17} />

            <select
              value={currentUserId}
              onChange={(event) =>
                setCurrentUserId(event.target.value)
              }
              disabled={profiles.length === 0}
              aria-label={copy.selectUser}
            >
              <option value="">{copy.selectUser}</option>

              {profiles.map((profile) => (
                <option key={profile.id} value={profile.id}>
                  {profile.name}
                </option>
              ))}
            </select>
          </div>

          <button
            type="button"
            className="primary-button"
            onClick={() => setShowAddUser(true)}
          >
            <Plus size={18} />
            {copy.user}
          </button>
        </div>
      </div>
    </header>

    <div className="app-content">
      {!currentProfile ? (
        <section className="empty-users">
          <UsersRound size={52} />

          <h2>{copy.createFirstUser}</h2>

          <p>{copy.independentProgress}</p>

          <button
            type="button"
            className="primary-button"
            onClick={() => setShowAddUser(true)}
          >
            <Plus size={18} />
            {copy.addUser}
          </button>
        </section>
      ) : (
        <>
          <section className="progress-section">
            <div className="progress-card">
              <div className="progress-heading">
                <div>
                  <p>
                    {copy.progressOf}{" "}
                    <strong>{currentProfile.name}</strong>
                  </p>

                  <h2>
                    {completedExpansionAchievements.length}

                    <span>
                      {" "}
                      de {expansionAchievements.length}{" "}
                      {copy.achievements}
                    </span>
                  </h2>

                  <small className="general-progress">
                    {copy.overallProgress}:{" "}
                    {completedGeneralAchievements.length} de{" "}
                    {achievements.length} {copy.achievements} ·{" "}
                    {generalProgress}%
                  </small>
                </div>

                <strong className="progress-percentage">
                  {expansionProgress}%
                </strong>
              </div>

              <div className="progress-bar">
                <div
                  style={{
                    width: `${expansionProgress}%`,
                  }}
                />
              </div>
            </div>

            <div className="summary-cards">
              <div className="summary-card">
                <span>{copy.earnedXp}</span>

                <strong className="xp-value">
                  {earnedXp.toLocaleString(
                    language === "es" ? "es-AR" : "en-US",
                  )}
                </strong>
              </div>

              <div className="summary-card">
                <span>{copy.points}</span>

                <strong className="points-value">
                  {earnedPoints.toLocaleString(
                    language === "es" ? "es-AR" : "en-US",
                  )}
                </strong>
              </div>
            </div>
          </section>

          <section className="achievements-header">
            <div>
              <h2>{copy.gameplayAchievements}</h2>

              <p>
                {filteredAchievements.length} {copy.results}
              </p>
            </div>
<div className="achievement-filter-controls">
  <label className="field hero-class-field">
    <span>
      {language === "es" ? "Personaje" : "Character"}
    </span>

    <select
      value={heroClassFilter}
      onChange={(event) =>
        setHeroClassFilter(
          event.target.value as HeroClassFilter,
        )
      }
    >
      <option value="all">
        {language === "es"
          ? "Todos los personajes"
          : "All characters"}
      </option>

      <option value="Death Knight">
        {language === "es"
          ? "Caballero de la Muerte"
          : "Death Knight"}
      </option>

      <option value="Demon Hunter">
        {language === "es"
          ? "Cazador de Demonios"
          : "Demon Hunter"}
      </option>

      <option value="Druid">
        {language === "es" ? "Druida" : "Druid"}
      </option>

      <option value="Hunter">
        {language === "es" ? "Cazador" : "Hunter"}
      </option>

      <option value="Mage">
        {language === "es" ? "Mago" : "Mage"}
      </option>

      <option value="Paladin">
        {language === "es" ? "Paladín" : "Paladin"}
      </option>

      <option value="Priest">
        {language === "es" ? "Sacerdote" : "Priest"}
      </option>

      <option value="Rogue">
        {language === "es" ? "Pícaro" : "Rogue"}
      </option>

      <option value="Shaman">
        {language === "es" ? "Chamán" : "Shaman"}
      </option>

      <option value="Warlock">
        {language === "es" ? "Brujo" : "Warlock"}
      </option>

      <option value="Warrior">
        {language === "es" ? "Guerrero" : "Warrior"}
      </option>

      <option value="Neutral">
        {language === "es" ? "Neutral" : "Neutral"}
      </option>
    </select>
  </label>

  <div className="filters">
              <button
                type="button"
                className={filter === "all" ? "active" : ""}
                onClick={() => setFilter("all")}
              >
                {copy.all}
              </button>

              <button
                type="button"
                className={filter === "pending" ? "active" : ""}
                onClick={() => setFilter("pending")}
              >
                {copy.pending}
              </button>

              <button
                type="button"
                className={
                  filter === "completed" ? "active" : ""
                }
                onClick={() => setFilter("completed")}
              >
                {copy.completed}
              </button>
            </div>
</div>

            
          </section>

          <div className="achievement-groups">
            {HERO_CLASS_ORDER.filter(
              (heroClass) =>
                (groupedAchievements[heroClass]?.length ?? 0) > 0,
            ).map((heroClass) => {
              const classAchievements =
                groupedAchievements[heroClass];

              return (
                <section
                  className="achievement-group"
                  key={heroClass}
                >
                  <div className="class-title">
                    <span />

                    <h3>
                      {classLabels[heroClass] ?? heroClass}
                    </h3>

                    <span />
                  </div>

                  <div className="achievement-grid">
                    {classAchievements.map((achievement) => (
                      <AchievementCard
                        key={achievement.id}
                        achievement={achievement}
                        completed={completedIds.includes(
                          achievement.id,
                        )}
                        language={language}
                        onToggle={() =>
                          toggleAchievement(achievement.id)
                        }
                      />
                    ))}
                  </div>
                </section>
              );
            })}

            {filteredAchievements.length === 0 && (
              <div className="empty-filter">
                {copy.emptyFilter}
              </div>
            )}
          </div>
        </>
      )}
    </div>

    <AddUserModal
      open={showAddUser}
      onClose={() => setShowAddUser(false)}
      onAddUser={addProfile}
    />
  </main>
);
}

export default App;