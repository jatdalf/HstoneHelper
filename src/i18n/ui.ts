import type { Language } from "../types";

export const uiTranslations = {
  es: {
    expansion: "Expansión",
    allExpansions: "Todas las expansiones",
    currentExpansion: "Expansión actual",
    generalProgress: "Progreso general",
    gameplayAchievements: "Logros de Gameplay",
    all: "Todos",
    pending: "Pendientes",
    completed: "Completados",
    results: "resultados",
    achievements: "logros",
    earnedXp: "XP obtenida",
    points: "Puntos",
    user: "Usuario",
    selectUser: "Seleccionar usuario",
    addUser: "Agregar usuario",
    firstUser: "Creá tu primer usuario",
    independentProgress:
      "El progreso de cada jugador se guarda de manera independiente.",
    emptyFilter: "No hay logros para mostrar en este filtro.",
  },

  en: {
    expansion: "Expansion",
    allExpansions: "All expansions",
    currentExpansion: "Current expansion",
    generalProgress: "Overall progress",
    gameplayAchievements: "Gameplay Achievements",
    all: "All",
    pending: "Pending",
    completed: "Completed",
    results: "results",
    achievements: "achievements",
    earnedXp: "XP earned",
    points: "Points",
    user: "User",
    selectUser: "Select user",
    addUser: "Add user",
    firstUser: "Create your first user",
    independentProgress:
      "Each player's progress is stored independently.",
    emptyFilter: "There are no achievements for this filter.",
  },
} satisfies Record<Language, Record<string, string>>;