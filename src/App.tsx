import { useMemo, useState } from "react";
import { Plus, Trophy, UserRound, UsersRound } from "lucide-react";
import "./App.css";
import { AchievementCard } from "./components/AchievementCard";
import { AddUserModal } from "./components/AddUserModal";
import { achievements } from "./data/achievements";
import { useProfiles } from "./hooks/useProfiles";
import type {Achievement, AchievementFilter, ExpansionId,} from "./types";

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
const completedAchievements = expansionAchievements.filter(
  (achievement) => completedIds.includes(achievement.id),);
const progress = expansionAchievements.length === 0 ? 0 : Math.round(
  (completedAchievements.length / expansionAchievements.length) * 100,);
const earnedXp = completedAchievements.reduce((total, achievement) => total + achievement.xp, 0,);
const earnedPoints = completedAchievements.reduce( (total, achievement) => total + achievement.points, 0,);

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

  <select className="expansionSelect"
    value={expansionFilter}
    onChange={(event) =>
      setExpansionFilter(event.target.value as ExpansionFilter)
    }
  >
  <option value="violet-hold">Bastión Violeta</option>
  <option value="cataclysm">Cataclysm</option>
  <option value="timetravel">Time Travel</option>
  <option value="lost-city">Lost City</option>
  <option value="emerald-dream">Emerald Dream</option>
  <option value="great-dark-beyond">Great Dark Beyond</option>
  <option value="paradise">Paradise</option>
  <option value="whizbang">whizbang Workshop</option>
  <option value="titans">Titans</option>
  <option value="alterac-valley">Alterac Valley</option>
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
                    <p>
                      Progreso de <strong>{currentProfile.name}</strong>
                    </p>

                    <h2>
                      {completedAchievements.length}
                      <span> de {achievements.length} logros</span>
                    </h2>
                  </div>

                  <strong className="progress-percentage">
                    {progress}%
                  </strong>
                </div>

                <div className="progress-bar">
                  <div style={{ width: `${progress}%` }} />
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
              {Object.entries(groupedAchievements).map(
                ([heroClass, classAchievements]) => (
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
                ),
              )}

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