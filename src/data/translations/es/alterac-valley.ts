type AchievementTranslation = {
  name: string;
  description: string;
};

const entry = (
  name: string,
  description: string,
): AchievementTranslation => ({ name, description });

const tiers = (
  prefix: string,
  name: string,
  descriptions: string[],
): Record<string, AchievementTranslation> =>
  Object.fromEntries(
    descriptions.map((description, index) => [
      `${prefix}_${index + 1}`,
      entry(name, description),
    ]),
  );

const honorTiers = (
  prefix: string,
  name: string,
  cardName: string,
): Record<string, AchievementTranslation> => {
  const honorRequired = [
    40, 120, 300, 560, 960, 1460, 2000,
    2620, 3280, 4060, 4900, 5800, 7200,
  ];

  return tiers(
    prefix,
    name,
    honorRequired.map(
      (honor) =>
        `Obtén ${honor} de Honor jugando partidas con ${cardName} en tu mazo.`,
    ),
  );
};

export const alteracValleySpanishTranslations: Record<
  string,
  AchievementTranslation
> = {
  ...tiers("AV_DEMON_HUNTER_01", "Destrozo Final", [
    "Invoca 10 demonios con Sigilo de juicio.",
    "Invoca 20 demonios con Sigilo de juicio.",
    "Invoca 40 demonios con Sigilo de juicio.",
  ]),

  AV_DEMON_HUNTER_02_1: entry(
    "¡Pulsa ese botón de furia!",
    "Usa tu Poder de héroe 7 veces en un turno como Kurtrus, Destripador de demonios.",
  ),

  ...tiers("AV_DEMON_HUNTER_03", "¡A ambos lados, muchas cartas!", [
    "Roba 50 cartas con Centinela gujafilada.",
    "Roba 100 cartas con Centinela gujafilada.",
  ]),

  AV_DEMON_HUNTER_04_1: entry(
    "...más dura será la caída",
    "Realiza una Muerte honorable sobre un esbirro con 5 o más de Salud usando Guja de prisión aterradora.",
  ),

  ...tiers("AV_DRUID_01", "¡¡¡CACHORRITOS!!!", [
    "Invoca 30 Cachorros Lobo Gélido.",
    "Invoca 60 Cachorros Lobo Gélido.",
    "Invoca 120 Cachorros Lobo Gélido.",
  ]),

  AV_DRUID_02_1: entry(
    "Más maná, más problemas",
    "Termina tu turno con 20 cristales de maná.",
  ),

  ...tiers("AV_DRUID_03", "Aquí viene el lechúcico", [
    "Inflige 200 de daño o restaura 200 de Salud con Lechúcico explosivo.",
    "Inflige 400 de daño o restaura 400 de Salud con Lechúcico explosivo.",
  ]),

  AV_DRUID_04_1: entry(
    "¿Elige una? ¡Elige todas!",
    "Juega 16 efectos distintos de Elige una con Trazacaminos.",
  ),

  AV_HUNTER_01_1: entry(
    "Sed de sangre",
    "Inflige 8 de daño en un solo ataque con Buscasangre.",
  ),

  AV_HUNTER_02_1: entry(
    "¡Krush desde las alturas!",
    "Invoca 5 bestias con Comandante del aire Ichman en un turno.",
  ),

  ...tiers("AV_HUNTER_03", "¡Es una trampa!", [
    "Activa 75 Secretos de Cazador.",
    "Activa 150 Secretos de Cazador.",
    "Activa 250 Secretos de Cazador.",
  ]),

  ...tiers("AV_HUNTER_04", "Tengo que atraparlas a todas", [
    "Invoca 70 bestias con Coleccionista de mascotas.",
    "Invoca 151 bestias con Coleccionista de mascotas.",
  ]),

  // En el archivo inglés original estos dos objetivos estaban invertidos.
  ...tiers("AV_MAGE_01", "Gracias por tu protección maternal", [
    "Inflige 100 de daño con Haleh, matrona protectora.",
    "Inflige 200 de daño con Haleh, matrona protectora.",
  ]),

  ...tiers("AV_MAGE_02", "Yogg estaría orgulloso", [
    "Lanza hechizos por un valor total de 100 de maná mediante Torre Sangrehielo.",
    "Lanza hechizos por un valor total de 200 de maná mediante Torre Sangrehielo.",
    "Lanza hechizos por un valor total de 300 de maná mediante Torre Sangrehielo.",
  ]),

  AV_MAGE_03_1: entry(
    "¡MUERE CON HONOR, INSECTO!",
    "Inflige 8 de daño con un solo uso de tu Poder de héroe como Mago.",
  ),

  AV_MAGE_04_1: entry(
    "¿Quieres construir un trol de nieve?",
    "Termina tu turno con un Muñeco de nieve, un Bruto de nieve y un Ogro de nieve.",
  ),

  AV_NEUTRAL_01_1: entry(
    "Qué rico para mi pancita",
    "Devora un esbirro 8/8 o superior con Teniente abominable.",
  ),

  AV_NEUTRAL_02_1: entry(
    "Estás en graves problemas Ferrohondo",
    "Controla 7 Troggs Ferrohondo al mismo tiempo.",
  ),

  ...tiers("AV_NEUTRAL_03", "Bola de demolición", [
    "Activa 50 efectos de Muerte honorable.",
    "Activa 100 efectos de Muerte honorable.",
    "Activa 200 efectos de Muerte honorable.",
  ]),

  AV_NEUTRAL_04_1: entry(
    "Los árboles hablan por sí solos",
    "Juega un Ivus, el Señor del Bosque 12/12 o superior.",
  ),

  ...tiers("AV_NEUTRAL_05", "El eterno", [
    "Invoca a Korrak el Furiasangre 10 veces.",
    "Invoca a Korrak el Furiasangre 25 veces.",
    "Invoca a Korrak el Furiasangre 50 veces.",
  ]),

  ...tiers("AV_NEUTRAL_06", "Fuego amigo", [
    "Activa 5 veces el efecto de una misma Arcanista repelente.",
    "Activa 14 veces el efecto de una misma Arcanista repelente.",
  ]),

  AV_NEUTRAL_07_1: entry(
    "¿Ceguera de nieve? ¡No hay problema!",
    "Activa 50 veces el efecto de Grito de batalla de Arpía Velonieve.",
  ),

  AV_NEUTRAL_08_1: entry(
    "No más lloriqueos",
    "Lanza 60 Restos de armadura sobre esbirros aliados.",
  ),

  AV_NEUTRAL_09_1: entry(
    "Fallo de reflejo",
    "Juega un esbirro con 0 de Salud.",
  ),

  AV_NEUTRAL_10_1: entry(
    "¡Uno para todos y Mariscal por 1!",
    "Juega 40 Mariscales Pico Tormenta que cuesten (1) de maná.",
  ),

  AV_NEUTRAL_11_1: entry(
    "María tenía un carnerito",
    "Invoca 100 Carneros de batalla de Comandante de carneros.",
  ),

  AV_NEUTRAL_12_1: entry(
    "¡Mira! ¡Lokholar!",
    "Roba 50 hechizos de Escarcha con Heraldo de Lokholar.",
  ),

  ...tiers("AV_NEUTRAL_13", "El legado del Kabal", [
    "Juega 8 Tesoros distintos de Kazakusan.",
    "Juega 16 Tesoros distintos de Kazakusan.",
  ]),

  ...tiers("AV_NEUTRAL_14", "Rey de la colina", [
    "Juega 20 hechizos de Objetivo que duren 3 turnos.",
    "Juega 40 hechizos de Objetivo que duren 3 turnos.",
    "Juega 60 hechizos de Objetivo que duren 3 turnos.",
  ]),

  ...tiers("AV_NEUTRAL_15", "Trabajo de cría bien hecho", [
    "Ataca 100 veces con Crías de Onyxia.",
    "Ataca 200 veces con Crías de Onyxia.",
  ]),

  AV_NEUTRAL_16_1: entry(
    "Más duro, mejor, maestro de guerra, más fuerte",
    "Ahorra 150 de maná con Maestros de guerra Lobo Gélido.",
  ),

  AV_NEUTRAL_17_1: entry(
    "El paraíso del emboscador",
    "Embosca y destruye 15 esbirros con Emboscador.",
  ),

  ...tiers("AV_NEUTRAL_18", "De cero a héroe", [
    "Gana 10 partidas después de jugar una carta de héroe.",
    "Gana 20 partidas después de jugar una carta de héroe.",
    "Gana 40 partidas después de jugar una carta de héroe.",
  ]),

  ...honorTiers(
    "AV_NEUTRAL_19",
    "¡Por los Pico Tormenta!",
    "Vanndar Pico Tormenta",
  ),

  ...honorTiers(
    "AV_NEUTRAL_20",
    "¡Por los Lobo Gélido!",
    "Drek'Thar",
  ),

  AV_NEUTRAL_21_1: entry(
    "Flappy Bird",
    "Ataca 80 veces con Hipogrifo frenético.",
  ),

  AV_NEUTRAL_22_1: entry(
    "Esencia coagulante",
    "Gana una partida con 15 de Salud.",
  ),

  AV_NEUTRAL_23_1: entry(
    "Pájaro gigante",
    "Destruye 30 enemigos con Búho monumental.",
  ),

  AV_NEUTRAL_24_1: entry(
    "Maestro del campo de batalla",
    "Obtén 7200 de Honor jugando partidas con Vanndar Pico Tormenta o Drek'Thar en tu mazo.",
  ),

  ...tiers("AV_NEUTRAL_25", "Recompensa de 1600 de polvo", [
    "Destruye 10 esbirros Legendarios con Cazarrecompensas Tótem Siniestro.",
    "Destruye 20 esbirros Legendarios con Cazarrecompensas Tótem Siniestro.",
  ]),

  AV_NEUTRAL_26_1: entry(
    "???",
    "Resuelve los misterios ocultos por todo el Valle de Alterac.",
  ),

  ...tiers("AV_PALADIN_01", "No eres digno", [
    "Evita 100 de daño con Objeto inamovible.",
    "Evita 200 de daño con Objeto inamovible.",
    "Evita 300 de daño con Objeto inamovible.",
  ]),

  ...tiers("AV_PALADIN_02", "El Anillo Único", [
    "Otorga +1/+1 con Anillo de coraje 25 veces.",
    "Otorga +1/+1 con Anillo de coraje 75 veces.",
  ]),

  AV_PALADIN_03_1: entry(
    "Ni granate ni carmesí: escarlata",
    "Inflige 25 de daño en un solo ataque con Saidan el Escarlata.",
  ),

  AV_PALADIN_04_1: entry(
    "Audaz y de latón",
    "Restaura 150 de Salud con Alabronce.",
  ),

  AV_PRIEST_01_1: entry(
    "Ejército de salvación",
    "Invoca 30 esbirros con Liberación.",
  ),

  ...tiers("AV_PRIEST_02", "Te recordaré", [
    "Activa 50 Estertores con Xyrella, la Devota.",
    "Activa 100 Estertores con Xyrella, la Devota.",
    "Activa 200 Estertores con Xyrella, la Devota.",
  ]),

  AV_PRIEST_03_1: entry(
    "¡Salud!",
    "Otorga un total de 200 de Ataque a esbirros con Bendecir.",
  ),

  ...tiers("AV_PRIEST_04", "Un futuro tan brillante que necesito gafas", [
    "Invoca una Mi'da, Luz Pura de cuarta generación.",
    "Invoca una Mi'da, Luz Pura de séptima generación.",
  ]),

  AV_ROGUE_01_1: entry(
    "Las 10 mayores traiciones de Alterac",
    "Invoca 60 Agentes dobles.",
  ),

  AV_ROGUE_02_1: entry(
    "Primos terceros por partida doble",
    "Termina tu turno con un Yeti Dentefrío y un Yeti Viento Gélido.",
  ),

  ...tiers("AV_ROGUE_03", "Revolviéndose en sus tumbas", [
    "Haz que mueran 30 esbirros con Estertor mientras controlas Cementerio Avalancha.",
    "Haz que mueran 60 esbirros con Estertor mientras controlas Cementerio Avalancha.",
    "Haz que mueran 120 esbirros con Estertor mientras controlas Cementerio Avalancha.",
  ]),

  ...tiers("AV_ROGUE_04", "¡", [
    "Invoca un esbirro que cueste (10) con Contrabandista del IV:7.",
    "Invoca un esbirro Legendario que cueste (10) con Contrabandista del IV:7.",
  ]),

  ...tiers("AV_SHAMAN_01", "Vacaciones de invierno", [
    "Congela 150 personajes como Chamán.",
    "Congela 300 personajes como Chamán.",
    "Congela 600 personajes como Chamán.",
  ]),

  AV_SHAMAN_02_1: entry(
    "Efecto bola de nieve",
    "Haz que 10 esbirros participen en una sola ¡Pelea de bolas de nieve!.",
  ),

  ...tiers("AV_SHAMAN_03", "¡Corre, pequeña!", [
    "Inflige 8 de daño a un mismo esbirro con ¡No te quedes en el fuego!.",
    "Inflige 10 de daño a un mismo esbirro con ¡No te quedes en el fuego!.",
  ]),

  AV_SHAMAN_04_1: entry(
    "1-800-ELE-MENTO",
    "Invoca a los elementos 100 veces con Bru'kan y su Poder de héroe.",
  ),

  ...tiers("AV_WARLOCK_01", "¡Más daño prolongado!", [
    "Haz que tus oponentes reciban 84 de daño por Fatiga mediante Maldición de agonía.",
    "Haz que tus oponentes reciban 180 de daño por Fatiga mediante Maldición de agonía.",
  ]),

  AV_WARLOCK_02_1: entry(
    "¡Ven aquí!",
    "Realiza una Muerte honorable sobre un esbirro Legendario con Abominación hueca.",
  ),

  AV_WARLOCK_03_1: entry(
    "Ocúpate de vivir o de morir",
    "Sacrifica 100 esbirros en Cementerio profanado.",
  ),

  ...tiers("AV_WARLOCK_04", "Esto da terror", [
    "Invoca 50 Diablillos aterradores.",
    "Invoca 100 Diablillos aterradores.",
    "Invoca 200 Diablillos aterradores.",
  ]),

  AV_WARRIOR_01_1: entry(
    "¿Qué sucede cuando...?",
    "Estrella un esbirro contra el héroe enemigo para infligir daño letal usando La fuerza imparable.",
  ),

  AV_WARRIOR_02_1: entry(
    "¡El tío Drek te quiere A TI!",
    "Ahorra 100 de maná en esbirros con ¡Al frente!.",
  ),

  ...tiers("AV_WARRIOR_03", "Mi guarida, mis reglas", [
    "Inflige 100 de daño con Guarnición Sangrehielo.",
    "Inflige 200 de daño con Guarnición Sangrehielo.",
    "Inflige 400 de daño con Guarnición Sangrehielo.",
  ]),

  ...tiers("AV_WARRIOR_04", "Golpea con todas tus fuerzas", [
    "Golpea muy fuerte a 20 esbirros.",
    "Golpea muy fuerte a 40 esbirros.",
  ]),
};
