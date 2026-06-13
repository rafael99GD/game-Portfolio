/**
 * ═══════════════════════════════════════════════════
 *  ARCHIVO DE JUEGOS — edita solo aquí para añadir,
 *  modificar o eliminar juegos del portfolio.
 * ═══════════════════════════════════════════════════
 *
 *  Campos de cada juego:
 *
 *  title          → Nombre del juego
 *  emoji          → Emoji decorativo (opcional)
 *  tags           → Array de tecnologías usadas
 *  description    → Descripción en ESPAÑOL
 *  description_en → Descripción en INGLÉS
 *  image          → Ruta a la imagen (en /assets/) o URL externa
 *                   Si no tienes imagen usa "" → se muestra placeholder
 *  github         → URL del repo GitHub (o "" si es privado)
 *  video          → URL del vídeo de gameplay:
 *                   · YouTube: pega la URL normal del vídeo
 *                     ej: "https://www.youtube.com/watch?v=XXXXX"
 *                   · Archivo propio: "assets/videos/mivideo.mp4"
 *                   · Sin vídeo: "" (la tarjeta no abrirá modal)
 */

const GAMES = [

  {
    title: "Fireball",
    emoji: "🔮",
    tags: ["Unity", "C#", "VR/XR", "Físicas"],
    description:    "Juego VR con varita mágica que intercambia orbes para disparar distintos poderes. Tutorial completo + mazmorra con jefe final que exige dominar todas las habilidades para conseguir la llave.",
    description_en: "VR game with a magic wand that swaps orbs to fire different powers. Full tutorial + dungeon with a final boss that requires mastering every ability to obtain the key.",
    image:  "",
    github: "https://github.com/rafael99GD/game-FireballVR",
    video:  "",
  },

  {
    title: "NextCell",
    emoji: "🔒",
    tags: ["Unity", "C#", "Photon", "Multijugador"],
    description:    "Escape room online cooperativo para hasta 4 jugadores. Entran con código de sala en una prisión y deben colaborar para escapar usando items e interacciones del entorno en tiempo real.",
    description_en: "Online co-op escape room for up to 4 players. Enter a prison with a room code and collaborate to escape using items and real-time environment interactions.",
    image:  "",
    github: "https://github.com/Kaaxerd/jailGameProject4",
    video:  "",
  },

  {
    title: "FPS Game",
    emoji: "🎯",
    tags: ["Unity", "C#", "3D", "Acción"],
    description:    "Shooter en primera persona con combates dinámicos, entornos 3D detallados y mecánicas de acción realistas. Desarrollado íntegramente en Unity con C#.",
    description_en: "First-person shooter with dynamic combat, detailed 3D environments and realistic action mechanics. Built entirely in Unity with C#.",
    image:  "assets/fps_preview.png",
    github: "https://github.com/rafael99GD/game-FPS",
    video:  "assets/videos/FPS.mp4",
  },

  {
    title: "Kirbo's Survivor",
    emoji: "🧛",
    tags: ["Unity", "C#", "Roguelite", "Procedural"],
    description:    "Supervivencia arcade inspirado en Vampire Survivors. Controla a Kirbo en mapas procedurales, enfrenta oleadas aleatorias de enemigos y maximiza el tiempo de supervivencia con habilidades estratégicas.",
    description_en: "Arcade survival inspired by Vampire Survivors. Control Kirbo across procedural maps, face random enemy waves and maximise your survival time with strategic abilities.",
    image:  "assets/kirbos_preview.png",
    github: "https://github.com/rafael99GD/game-KirboS_Survivor",
    video:  "assets/videos/kirbos.mp4",
  },

  {
    title: "Juego Impostores",
    emoji: "🤫",
    tags: ["React", "Node.js", "WebSockets"],
    description:    "Juego multijugador de estrategia y deducción donde los jugadores asumen roles únicos y deben descubrir al impostor entre ellos.",
    description_en: "Multiplayer strategy and deduction game where players take on unique roles and must uncover the impostor among them.",
    image:  "assets/impostores_preview.png",
    github: "https://github.com/rafael99GD/game-KirboS_Survivor",
    video:  "assets/videos/impostores.mp4",
  },

  // ─── PLANTILLA — copia y pega este bloque para añadir un juego nuevo ───
  //
  // {
  //   title: "Nombre del Juego",
  //   emoji: "🎮",
  //   tags: ["Unity", "C#"],
  //   description:    "Descripción en español.",
  //   description_en: "Description in English.",
  //   image:  "assets/mi-juego.jpg",
  //   github: "https://github.com/rafael99GD/mi-repo",
  //   video:  "assets/videos/mi-juego.mp4",
  // },

];
