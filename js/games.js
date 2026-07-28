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
    title: "Buzz! Virtual Controller",
    emoji: "🔴",
    tags: ["Python", "WebSockets", "Android · Kotlin", "XInput"],
    description: "Herramienta que convierte cualquier smartphone en un pulsador Buzz! virtual para jugar a los clásicos de PS2 en el emulador PCSX2, sin necesidad del mando USB original. El servidor en Python recibe los toques por WebSocket desde hasta 4 móviles conectados por WiFi local y los traduce en mandos Xbox virtuales (XInput) que PCSX2 detecta automáticamente. Incluye una app nativa para Android (Kotlin, Jetpack Compose) y una versión web de un solo archivo compatible con iOS y cualquier navegador, para que cada jugador elija cómo unirse a la partida.",
    description_en: "Tool that turns any smartphone into a virtual Buzz! buzzer to play the classic PS2 party games on the PCSX2 emulator, with no need for the original USB controller. A Python server receives touch input over WebSockets from up to 4 phones connected over local WiFi and translates it into virtual Xbox controllers (XInput) that PCSX2 detects automatically. Includes a native Android app (Kotlin, Jetpack Compose) and a single-file web version compatible with iOS and any browser, so each player can pick how they join the game.",
    image: "assets/BuzzVirtualController.png",
    github: "https://github.com/rafael99GD/game-BuzzVirtualController",
    video: "",
  },

  {
    title: "PVAV Exam — AI Combat",
    emoji: "🤖",
    tags: ["Unreal Engine 5", "Blueprints", "Behavior Trees", "AI Perception"],
    description:    "Proyecto de examen en UE5 con Blueprints. El jugador debe atravesar dos zonas hostiles: una con un bot lanzagranadas que persigue al player, y otra con un bot disparador y una torreta giratoria con láser. Un partner de IA sigue al jugador y activa la plataforma elevadora al detectar el pulsador de presión. Sistema completo de HUD, interacciones y menú final.",
    description_en: "UE5 exam project built with Blueprints. The player must cross two hostile zones: one with a grenade-throwing bot that pursues the player, and another with a shooting bot and a rotating laser turret. An AI partner follows the player and activates the elevator platform upon reaching the pressure plate. Full HUD, interaction prompts and end-game menu included.",
    image:  "assets/examenue5_preview.png",
    github: "https://github.com/rafael99GD/game-ExamenUE5",
    video:  "assets/videos/ExamenFinalUE5.mp4",
  },

  {
    title: "Boss Rush",
    emoji: "🔥",
    tags: ["Unreal Engine 5", "Blueprints"],
    description:    "Bullet hell de combate contra un boss único desarrollado en UE5 con Blueprints. El boss lanza barreras de bolas de fuego con huecos para esquivar y balas rojas que puedes destruir con la espada. Cada vez que baja su vida cambia de posición y aumenta la velocidad y cadencia de los proyectiles. La partida se reinicia automáticamente al ganar o perder.",
    description_en: "Single-boss bullet hell built in UE5 with Blueprints. The boss fires fire-ball barriers with gaps to dodge through and red bullets that can be destroyed with your sword. Each time its health drops it repositions and ramps up projectile speed and fire rate. The run restarts automatically on both win and loss.",
    image:  "assets/bullethellboss_preview.png",
    github: "https://github.com/rafael99GD/game-BulletHellUE5",
    video:  "assets/videos/BulletHellBoss.mp4",
  },

  {
    title: "CS2 Map Quiz",
    emoji: "🎯",
    tags: ["JavaScript", "HTML/CSS", "JSON", "GitHub Pages"],
    description:    "Quiz interactivo para aprender los nombres de cada zona de los mapas de CS2. Elige un mapa, identifica el lugar en la captura y selecciona entre 4 opciones. Muestra precisión, tiempo total y los puntos fallados al terminar.",
    description_en: "Interactive quiz to learn the callout names of every CS2 map location. Pick a map, identify the spot from a screenshot and choose from 4 options. Displays accuracy, total time and missed locations at the end.",
    image:  "assets/cs2_map_quiz.png",
    github: "https://github.com/rafael99GD/game-cs2-quiz",
    video:  "",
  },

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
