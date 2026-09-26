import type { AchievementTranslation } from "../../../types";

const honorLevels = [
  40, 120, 300, 560, 960, 1460, 2000,
  2620, 3280, 4060, 4900, 5800, 7200,
];

const honorTranslations = (
  prefix: "AV_NEUTRAL_19" | "AV_NEUTRAL_20",
  name: string,
  hero: string,
): Record<string, AchievementTranslation> =>
  Object.fromEntries(
    honorLevels.map((honor, index) => [
      `${prefix}_${index + 1}`,
      {
        name,
        description: `Obtén ${honor} de Honor jugando partidas con ${hero} en tu mazo.`,
      },
    ]),
  );

export const alteracValleySpanishTranslations: Record<
  string,
  AchievementTranslation
> = {
  AV_DEMON_HUNTER_01_1: {
    name: "Ajuste de cuentas",
    description: "Invoca 10 Demonios con Sigilo del ajuste de cuentas.",
  },
  AV_DEMON_HUNTER_01_2: {
    name: "Ajuste de cuentas",
    description: "Invoca 20 Demonios con Sigilo del ajuste de cuentas.",
  },
  AV_DEMON_HUNTER_01_3: {
    name: "Ajuste de cuentas",
    description: "Invoca 40 Demonios con Sigilo del ajuste de cuentas.",
  },
  AV_DEMON_HUNTER_02_1: {
    name: "Presiona ese botón de furia",
    description:
      "Usa tu Poder de héroe 7 veces en un turno como Kurtrus, Desgarrador de demonios.",
  },
  AV_DEMON_HUNTER_03_1: {
    name: "¡Lado derecho, muchas cartas!",
    description: "Roba 50 cartas con Centinela gujaafilada.",
  },
  AV_DEMON_HUNTER_03_2: {
    name: "¡Lado derecho, muchas cartas!",
    description: "Roba 100 cartas con Centinela gujaafilada.",
  },
  AV_DEMON_HUNTER_04_1: {
    name: "...más dura será la caída",
    description:
      "Realiza una Muerte honorable sobre un esbirro con 5 o más de Salud usando Guja de la Prisión del Terror.",
  },

  AV_DRUID_01_1: {
    name: "¡¡¡CACHORROS!!!",
    description: "Invoca 30 Cachorros Lobo Gélido.",
  },
  AV_DRUID_01_2: {
    name: "¡¡¡CACHORROS!!!",
    description: "Invoca 60 Cachorros Lobo Gélido.",
  },
  AV_DRUID_01_3: {
    name: "¡¡¡CACHORROS!!!",
    description: "Invoca 120 Cachorros Lobo Gélido.",
  },
  AV_DRUID_02_1: {
    name: "Más maná, más problemas",
    description: "Termina tu turno con 20 Cristales de maná.",
  },
  AV_DRUID_03_1: {
    name: "Aquí viene el lechúcico",
    description: "Inflige 200 de daño o restaura 200 de Salud con Lechúcico.",
  },
  AV_DRUID_03_2: {
    name: "Aquí viene el lechúcico",
    description: "Inflige 400 de daño o restaura 400 de Salud con Lechúcico.",
  },
  AV_DRUID_04_1: {
    name: "¿Elige una? ¡Elígelas todas!",
    description:
      "Juega 16 efectos de Elige una diferentes con Trazacaminos.",
  },

  AV_HUNTER_01_1: {
    name: "Sed de sangre",
    description: "Inflige 8 de daño en un ataque con Buscasangre.",
  },
  AV_HUNTER_02_1: {
        name: "¿Ceguera de nieve? ¡Ningún problema!",
    description:
      "Activa 50 veces el Grito de batalla de Arpía cegada por la nieve.",
  },
  AV_NEUTRAL_08_1: {
    name: "No más lloriqueos",
    description: "Lanza 60 Trozos de armadura sobre esbirros aliados.",
  },
  AV_NEUTRAL_09_1: {
    name: "Falla de reflejo",
    description: "Juega un esbirro con 0 de Salud.",
  },
  AV_NEUTRAL_10_1: {
    name: "¡Uno para todos y mariscal por 1!",
    description:
      "Juega 40 Mariscales Pico Tormenta que cuesten (1) de maná.",
  },
  AV_NEUTRAL_11_1: {
    name: "María tenía un pequeño carnero",
    description:
      "Invoca 100 Carneros de batalla de Comandante de carneros.",
  },
  AV_NEUTRAL_12_1: {
    name: "¡Mira! ¡Lokholar!",
    description: "Roba 50 hechizos de Escarcha con Heraldo de Lokholar.",
  },
  AV_NEUTRAL_13_1: {
    name: "Legado del Kabal",
    description: "Juega 8 Tesoros diferentes de Kazakusan.",
  },
  AV_NEUTRAL_13_2: {
    name: "Legado del Kabal",
    description: "Juega 16 Tesoros diferentes de Kazakusan.",
  },
  AV_NEUTRAL_14_1: {
    name: "Rey de la colina",
    description: "Juega 20 hechizos de Objetivo que duren 3 turnos.",
  },
  AV_NEUTRAL_14_2: {
    name: "Rey de la colina",
    description: "Juega 40 hechizos de Objetivo que duren 3 turnos.",
  },
  AV_NEUTRAL_14_3: {
    name: "Rey de la colina",
    description: "Juega 60 hechizos de Objetivo que duren 3 turnos.",
  },
  AV_NEUTRAL_15_1: {
    name: "Cría bien hecha",
    description: "Ataca 100 veces con Crías de Onyxia.",
  },
  AV_NEUTRAL_15_2: {
    name: "Cría bien hecha",
    description: "Ataca 200 veces con Crías de Onyxia.",
  },
  AV_NEUTRAL_16_1: {
    name: "Más duro, mejor, maestro de guerra, más fuerte",
    description: "Ahorra 150 de maná con Maestros de guerra Lobo Gélido.",
  },
  AV_NEUTRAL_17_1: {
    name: "Paraíso del gánster",
    description: "Embosca y destruye 15 esbirros con Gánster.",
  },
  AV_NEUTRAL_18_1: {
    name: "De cero a héroe",
    description: "Gana 10 partidas después de jugar una carta de héroe.",
  },
  AV_NEUTRAL_18_2: {
    name: "De cero a héroe",
    description: "Gana 20 partidas después de jugar una carta de héroe.",
  },
  AV_NEUTRAL_18_3: {
    name: "De cero a héroe",
    description: "Gana 40 partidas después de jugar una carta de héroe.",
  },

  ...honorTranslations(
    "AV_NEUTRAL_19",
    "¡Por Pico Tormenta!",
    "Vanndar Pico Tormenta",
  ),
  ...honorTranslations(
    "AV_NEUTRAL_20",
    "¡Por los Lobo Gélido!",
    "Drek'Thar",
  ),

  AV_NEUTRAL_21_1: {
    name: "Pájaro aleteante",
    description: "Ataca 80 veces con Hipogrifo frenético.",
  },
  AV_NEUTRAL_22_1: {
    name: "Esencia coagulante",
    description: "Gana una partida con 15 de Salud.",
  },
  AV_NEUTRAL_23_1: {
    name: "Pájaro grande",
    description: "Destruye 30 enemigos con Búho descomunal.",
  },
  AV_NEUTRAL_24_1: {
    name: "Maestro del campo de batalla",
    description:
      "Obtén 7200 de Honor jugando partidas con Vanndar Pico Tormenta o Drek'Thar en tu mazo.",
  },
  AV_NEUTRAL_25_1: {
    name: "Recompensa de 1600 de polvo",
    description:
      "Destruye 10 esbirros Legendarios con Cazarrecompensas Tótem Siniestro.",
  },
  AV_NEUTRAL_25_2: {
    name: "Recompensa de 1600 de polvo",
    description:
      "Destruye 20 esbirros Legendarios con Cazarrecompensas Tótem Siniestro.",
  },
  AV_NEUTRAL_26_1: {
    name: "???",
    description: "Resuelve los misterios ocultos por todo el Valle de Alterac.",
  },
};
