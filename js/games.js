/**
 * ═══════════════════════════════════════════════════
 *  ARCHIVO DE JUEGOS — edita solo aquí para añadir,
 *  modificar o eliminar juegos del portfolio.
 * ═══════════════════════════════════════════════════
 *
 *  Cada juego tiene estos campos:
 *
 *  title       → Nombre del juego
 *  emoji       → Emoji decorativo (opcional)
 *  tags        → Array de tecnologías usadas
 *  description → Descripción breve (2-3 frases)
 *  image       → Ruta a la imagen (pon el archivo en /assets/)
 *                o una URL externa. Si no tienes imagen,
 *                usa "" y se mostrará un placeholder.
 *  github      → URL al repositorio GitHub (o "" si privado)
 *  video       → URL del vídeo de gameplay:
 *                · YouTube: pega la URL normal del vídeo
 *                  ej: "https://www.youtube.com/watch?v=XXXXX"
 *                · Archivo propio: sube el .mp4 a /assets/videos/
 *                  y pon la ruta: "assets/videos/mivideo.mp4"
 *                · Sin vídeo: pon "" (la tarjeta no abrirá modal)
 */

const GAMES = [

  {
    title: "Fireball",
    emoji: "🔮",
    tags: ["Unity", "C#", "VR/XR", "Físicas"],
    description: "Juego VR con varita mágica que intercambia orbes para disparar distintos poderes. Tutorial completo + mazmorra con jefe final que exige dominar todas las habilidades para conseguir la llave.",
    image: "",   // ← pon aquí la ruta a tu imagen: "assets/fireball.jpg"
    github: "https://github.com/rafael99GD/game-FireballVR",
    video: "",   // ← pon aquí el link de YouTube o ruta de vídeo
  },

  {
    title: "NextCell",
    emoji: "🔒",
    tags: ["Unity", "C#", "Photon", "Multijugador"],
    description: "Escape room online cooperativo para hasta 4 jugadores. Entran con código de sala en una prisión y deben colaborar para escapar usando items e interacciones del entorno en tiempo real.",
    image: "",
    github: "https://github.com/Kaaxerd/jailGameProject4",
    video: "",
  },

  {
    title: "FPS Game",
    emoji: "🎯",
    tags: ["Unity", "C#", "3D", "Acción"],
    description: "Shooter en primera persona con combates dinámicos, entornos 3D detallados y mecánicas de acción realistas. Desarrollado íntegramente en Unity con C#.",
    image: "assets/fps_preview.png",
    github: "https://github.com/rafael99GD/game-FPS",
    video: "assets/videos/FPS.mp4",
  },

  {
    title: "Kirbo's Survivor",
    emoji: "🧛",
    tags: ["Unity", "C#", "Roguelite", "Procedural"],
    description: "Supervivencia arcade inspirado en Vampire Survivors. Controla a Kirbo en mapas procedurales, enfrenta oleadas aleatorias de enemigos y maximiza el tiempo de supervivencia con habilidades estratégicas.",
    image: "assets/kirbos_preview.png",
    github: "https://github.com/rafael99GD/game-KirboS_Survivor",
    video: "assets/videos/kirbos.mp4",
  },

  {
    title: "Juego Impostores",
    emoji: "🤫",
    tags: ["React", "Node.js", "WebSockets"],
    description: "Un juego multijugador de estrategia y deducción inspirado en títulos populares, donde los jugadores asumen roles únicos y deben descubrir al impostor.",
    image: "assets/impostores_preview.png",
    github: "https://github.com/rafael99GD/game-KirboS_Survivor",
    video: "assets/videos/impostores.mp4",
  },

  // ─── PLANTILLA — copia y pega este bloque para añadir un juego nuevo ───
  //
  // {
  //   title: "Nombre del Juego",
  //   emoji: "🎮",
  //   tags: ["Unity", "C#"],
  //   description: "Descripción breve del juego.",
  //   image: "assets/mi-juego.jpg",
  //   github: "https://github.com/rafael99gd/mi-repo",
  //   video: "https://www.youtube.com/watch?v=XXXXX",
  // },

];
