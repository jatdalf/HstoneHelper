import type { ExpansionId } from "../types/ExpansionId";

export type Language = "es" | "en";

export interface ExpansionOption {
  id: ExpansionId;
  name: Record<Language, string>;
  shortName: Record<Language, string>;
}

export const expansionOptions: ExpansionOption[] = [
  {
    id: "black-empire",
    name: {
      es: "El reinado del Imperio Negro",
      en: "Reign of the Black Empire",
    },
    shortName: {
      es: "Imperio Negro",
      en: "Black Empire",
    },
  },
  {
    id: "violet-hold",
    name: {
      es: "El Bastión Violeta",
      en: "Violet Hold",
    },
    shortName: {
      es: "Bastión Violeta",
      en: "Violet Hold",
    },
  },
  {
    id: "cataclysm",
    name: {
      es: "Cataclismo",
      en: "Cataclysm",
    },
    shortName: {
      es: "Cataclismo",
      en: "Cataclysm",
    },
  },
  {
    id: "time-travel",
    name: {
      es: "A través de las líneas temporales",
      en: "Across the Timeways",
    },
    shortName: {
      es: "Líneas temporales",
      en: "Timeways",
    },
  },
  {
    id: "lost-city",
    name: {
      es: "La Ciudad Perdida de Un'Goro",
      en: "The Lost City of Un'Goro",
    },
    shortName: {
      es: "Ciudad Perdida",
      en: "Lost City",
    },
  },
  {
    id: "emerald-dream",
    name: {
      es: "En el Sueño Esmeralda",
      en: "Into the Emerald Dream",
    },
    shortName: {
      es: "Sueño Esmeralda",
      en: "Emerald Dream",
    },
  },
  {
    id: "great-dark-beyond",
    name: {
      es: "La Gran Oscuridad",
      en: "The Great Dark Beyond",
    },
    shortName: {
      es: "Gran Oscuridad",
      en: "Great Dark Beyond",
    },
  },
  {
    id: "paradise",
    name: {
      es: "Peligros en el Paraíso",
      en: "Perils in Paradise",
    },
    shortName: {
      es: "Paraíso",
      en: "Paradise",
    },
  },
  {
    id: "whizbang",
    name: {
      es: "Taller de Miniaturización de Colifero",
      en: "Whizbang's Workshop",
    },
    shortName: {
      es: "Taller de Colifero",
      en: "Whizbang's Workshop",
    },
  },
  {
    id: "badlands",
    name: {
      es: "Duelo en las Tierras Inhóspitas",
      en: "Showdown in the Badlands",
    },
    shortName: {
      es: "Tierras Inhóspitas",
      en: "Badlands",
    },
  },
  {
    id: "titans",
    name: {
      es: "TITANES",
      en: "TITANS",
    },
    shortName: {
      es: "TITANES",
      en: "TITANS",
    },
  },
  {
    id: "festival-of-legends",
    name: {
      es: "Festival de Leyendas",
      en: "Festival of Legends",
    },
    shortName: {
      es: "Festival de Leyendas",
      en: "Festival of Legends",
    },
  },
  {
    id: "lich-king",
    name: {
      es: "Marcha del Rey Exánime",
      en: "March of the Lich King",
    },
    shortName: {
      es: "Rey Exánime",
      en: "Lich King",
    },
  },
  {
    id: "nathria",
    name: {
      es: "Asesinato en el Castillo Nathria",
      en: "Murder at Castle Nathria",
    },
    shortName: {
      es: "Castillo Nathria",
      en: "Castle Nathria",
    },
  },
  {
    id: "sunken-city",
    name: {
      es: "Viaje a la Ciudad Sumergida",
      en: "Voyage to the Sunken City",
    },
    shortName: {
      es: "Ciudad Sumergida",
      en: "Sunken City",
    },
  },
  {
    id: "alterac-valley",
    name: {
      es: "Divididos en el Valle de Alterac",
      en: "Fractured in Alterac Valley",
    },
    shortName: {
      es: "Valle de Alterac",
      en: "Alterac Valley",
    },
  },
  {
    id: "stormwind",
    name: {
      es: "Unidos en Ventormenta",
      en: "United in Stormwind",
    },
    shortName: {
      es: "Ventormenta",
      en: "Stormwind",
    },
  },
  {
    id: "barrens",
    name: {
      es: "Forjados en Los Baldíos",
      en: "Forged in the Barrens",
    },
    shortName: {
      es: "Los Baldíos",
      en: "Barrens",
    },
  },
  {
    id: "darkmoon",
    name: {
      es: "Locura en la Feria de la Luna Negra",
      en: "Madness at the Darkmoon Faire",
    },
    shortName: {
      es: "Feria de la Luna Negra",
      en: "Darkmoon Faire",
    },
  },
  {
    id: "scholomance",
    name: {
      es: "Academia Scholomance",
      en: "Scholomance Academy",
    },
    shortName: {
      es: "Scholomance",
      en: "Scholomance",
    },
  },
  {
    id: "outland",
    name: {
      es: "Cenizas de Terrallende",
      en: "Ashes of Outland",
    },
    shortName: {
      es: "Terrallende",
      en: "Outland",
    },
  },
  {
    id: "dragons",
    name: {
      es: "El Descenso de los Dragones",
      en: "Descent of Dragons",
    },
    shortName: {
      es: "Descenso de los Dragones",
      en: "Descent of Dragons",
    },
  },
  {
    id: "uldum",
    name: {
      es: "Salvadores de Uldum",
      en: "Saviors of Uldum",
    },
    shortName: {
      es: "Uldum",
      en: "Uldum",
    },
  },
  {
    id: "shadows",
    name: {
      es: "El Auge de las Sombras",
      en: "Rise of Shadows",
    },
    shortName: {
      es: "Auge de las Sombras",
      en: "Rise of Shadows",
    },
  },
  {
    id: "wolf",
    name: {
      es: "Esencial — Año del Lobo",
      en: "Core — Year of the Wolf",
    },
    shortName: {
      es: "Año del Lobo",
      en: "Year of the Wolf",
    },
  },
  {
    id: "hydra",
    name: {
      es: "Esencial — Año de la Hidra",
      en: "Core — Year of the Hydra",
    },
    shortName: {
      es: "Año de la Hidra",
      en: "Year of the Hydra",
    },
  },
  {
    id: "gryphon",
    name: {
      es: "Esencial — Año del Grifo",
      en: "Core — Year of the Gryphon",
    },
    shortName: {
      es: "Año del Grifo",
      en: "Year of the Gryphon",
    },
  },
];

export function getExpansionOption(
  expansionId: ExpansionId,
): ExpansionOption | undefined {
  return expansionOptions.find(
    (expansion) => expansion.id === expansionId,
  );
}