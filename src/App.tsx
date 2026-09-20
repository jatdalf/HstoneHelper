import { useMemo, useState } from "react";
import { Plus, Trophy, UserRound, UsersRound } from "lucide-react";
import "./App.css";
import { AchievementCard } from "./components/AchievementCard";
import { AddUserModal } from "./components/AddUserModal";
import { achievements } from "./data/achievements";
import { useProfiles } from "./hooks/useProfiles";
import type {Achievement, AchievementFilter, ExpansionId,} from "./types";

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
  const [expansionFilter, setExpansionFilter] = useState<ExpansionFilter>("violet-hold");
  const completedIds = currentProfile?.completedAchievements ?? [];

// Primero seleccionamos la expansión.
const expansionAchievements = useMemo(() => {
  return achievements.filter((achievement) => 
      expansionFilter === "all" || achievement.expansion === expansionFilter,);
}, [expansionFilter]);

// Después aplicamos Todos / Pendientes / Completados.
const filteredAchievements = useMemo(() => {
  return expansionAchievements.filter((achievement) => {
    const completed = completedIds.includes(achievement.id);
    if (filter === "completed") return completed;
    if (filter === "pending") return !completed;
    return true;
  });
}, [expansionAchievements, completedIds, filter]);

const groupedAchievements = useMemo(() => {
  return filteredAchievements.reduce<Record<string, Achievement[]>>(
    (groups, achievement) => {
      const currentGroup = groups[achievement.heroClass] ?? [];
      return {
        ...groups,
        [achievement.heroClass]: [...currentGroup, achievement,],
      };
    },
    {},
  );
}, [filteredAchievements]);

// Progreso correspondiente a la expansión seleccionada.
// Completados en la expansión seleccionada.
const completedExpansionAchievements = expansionAchievements.filter(
  (achievement) => completedIds.includes(achievement.id),
);

const expansionProgress =
  expansionAchievements.length === 0
    ? 0
    : Math.round(
        (completedExpansionAchievements.length /
          expansionAchievements.length) *
          100,
      );

// Completados en toda la aplicación.
const completedGeneralAchievements = achievements.filter(
  (achievement) => completedIds.includes(achievement.id),
);

const generalProgress =
  achievements.length === 0
    ? 0
    : Math.round(
        (completedGeneralAchievements.length /
          achievements.length) *
          100,
      );

const earnedXp = completedExpansionAchievements.reduce(
  (total, achievement) => total + achievement.xp,
  0,
);

const earnedPoints = completedExpansionAchievements.reduce(
  (total, achievement) => total + achievement.points,
  0,
);

  return (
    <main className="app">
      <header className="app-header">
        <div className="header-content">
          <div className="brand">
            <div className="brand-icon">
              <Trophy size={23} />
            </div>
<label className="field">
  <span>Expansión</span>

  <select className="expansionSelect" value={expansionFilter} onChange={(event) =>
      setExpansionFilter(event.target.value as ExpansionFilter)}>

<option value="violet-hold">Bastión Violeta</option>
<option value="cataclysm">Cataclysm</option>
<option value="time-travel">Across the Timeways</option>
<option value="lost-city">The Lost City of Un'Goro</option>
<option value="emerald-dream">Into the Emerald Dream</option>
<option value="great-dark-beyond">The Great Dark Beyond</option>
<option value="paradise">Perils in Paradise</option>
<option value="whizbang">Whizbang's Workshop</option>
<option value="badlands">Showdown in the Badlands</option>
<option value="titans">Titans</option>
<option value="festival-of-legends">Festival of Legends</option>
<option value="lich-king">March of the Lich King</option>
<option value="nathria">Murder at Castle Nathria</option>
<option value="sunken-city">Voyage to the Sunken City</option>
<option value="alterac-valley">Fractured in Alterac Valley</option>
<option value="stormwind">United in Stormwind</option>
<option value="barrens">Forged in the Barrens</option>
<option value="darkmoon">Madness at the Darkmoon Faire</option>
<option value="scholomance">Scholomance Academy</option>
<option value="outland">Ashes of Outland</option>
<option value="dragons">Descent of Dragons</option>
<option value="uldum">Saviors of Uldum</option>
<option value="shadows">Rise of Shadows</option>
<option value="wolf">Core — Year of the Wolf</option>
<option value="wolf">Core — Year of the Hydra</option>
<option value="wolf">Core — Year of the Gryphon</option>
<option value="all">Todas las expansiones</option>
  </select>
</label>
            <div>
              <h1>HS Helper</h1>
              <p>Fuga del Bastión Violeta</p>
            </div>
          </div>

          <div className="user-controls">
            <div className="user-select-container">
              <UserRound size={17} />

              <select
                value={currentUserId}
                onChange={(event) => setCurrentUserId(event.target.value)}
                disabled={profiles.length === 0}
                aria-label="Usuario actual"
              >
                <option value="">Seleccionar usuario</option>

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
              Usuario
            </button>
          </div>
        </div>
      </header>

      <div className="app-content">
        {!currentProfile ? (
          <section className="empty-users">
            <UsersRound size={52} />

            <h2>Creá tu primer usuario</h2>

            <p>
              El progreso de cada jugador se guarda de manera independiente.
            </p>

            <button
              type="button"
              className="primary-button"
              onClick={() => setShowAddUser(true)}
            >
              <Plus size={18} />
              Agregar usuario
            </button>
          </section>
        ) : (
          <>
            <section className="progress-section">
              <div className="progress-card">
                <div className="progress-heading">
                <div>
                  <p>Progreso de <strong>{currentProfile.name}</strong></p>
                  <h2>{completedExpansionAchievements.length}
                    <span>{" "} de {expansionAchievements.length} logros</span>
                  </h2>

                  <small className="general-progress">
                    Progreso general: {completedGeneralAchievements.length} de{" "}
                    {achievements.length} logros · {generalProgress}%
                  </small>
                </div>
                <strong className="progress-percentage">{expansionProgress}%</strong>
              </div>

                <div className="progress-bar">
                  <div style={{ width: `${expansionProgress}%` }} />
                </div>
              </div>

              <div className="summary-cards">
                <div className="summary-card">
                  <span>XP obtenida</span>
                  <strong className="xp-value">
                    {earnedXp.toLocaleString("es-AR")}
                  </strong>
                </div>

                <div className="summary-card">
                  <span>Puntos</span>
                  <strong className="points-value">
                    {earnedPoints}
                  </strong>
                </div>
              </div>
            </section>

            <section className="achievements-header">
              <div>
                <h2>Logros de Gameplay</h2>
                <p>{filteredAchievements.length} resultados</p>
              </div>

              <div className="filters">
                <button
                  type="button"
                  className={filter === "all" ? "active" : ""}
                  onClick={() => setFilter("all")}
                >
                  Todos
                </button>

                <button
                  type="button"
                  className={filter === "pending" ? "active" : ""}
                  onClick={() => setFilter("pending")}
                >
                  Pendientes
                </button>

                <button
                  type="button"
                  className={filter === "completed" ? "active" : ""}
                  onClick={() => setFilter("completed")}
                >
                  Completados
                </button>
              </div>
            </section>

            <div className="achievement-groups">
              {HERO_CLASS_ORDER.filter((heroClass) =>
                  (groupedAchievements[heroClass]?.length ?? 0) > 0,).map((heroClass) => {
                const classAchievements = groupedAchievements[heroClass];

                return (
                  <section className="achievement-group" key={heroClass}>
                    <div className="class-title">
                      <span />
                      <h3>{heroClass}</h3>
                      <span />
                    </div>

                    <div className="achievement-grid">
                      {classAchievements.map((achievement) => (
                        <AchievementCard
                          key={achievement.id}
                          achievement={achievement}
                          completed={completedIds.includes(achievement.id)}
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
                  No hay logros para mostrar en este filtro.
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