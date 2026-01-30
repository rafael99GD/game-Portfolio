export const featuredGames = [
  {
    id: 1,
    title: "FPS Game",
    description: "Sumérgete en un intenso juego de disparos en primera persona con combates dinámicos, entornos 3D detallados y mecánicas de acción realistas, desarrollado en Unity con C#.",
    image: process.env.PUBLIC_URL + "/images/fps_preview.png",
    video: "https://youtu.be/PdYSf49JIZQ",
    githubUrl: "https://github.com/rafael99GD/game-FPS",
    technologies: ["Unity", "C#", "3D Graphics"],
    featured: true
  },
  {
    id: 2,
    title: "Juego Impostores",
    description: "Un juego multijugador de estrategia y deducción inspirado en títulos populares, donde los jugadores asumen roles únicos y deben descubrir al impostor mientras completan tareas.",
    image: process.env.PUBLIC_URL + "/images/impostor_preview.png",
    video: "https://youtu.be/pbstDWSoreI",
    githubUrl: "https://github.com/rafael99GD/game-Juego_Impostores",
    technologies: ["React", "Node.js", "WebSockets"],
    featured: true
  },
  {
    id: 3,
    title: "Kirbo's Survivor",
    description: "Juego de supervivencia arcade inspirado en Vampire Survivor. Controla a Kirbo, enfrenta enemigos generados aleatoriamente, usa habilidades estratégicas y sobrevive el mayor tiempo posible en mapas procedurales.",
    image: process.env.PUBLIC_URL + "/images/kirbos_preview.png",
    video: "https://youtu.be/VJXWgl-YCHc",
    githubUrl: "https://github.com/rafael99GD/game-KirboS_Survivor",
    technologies: ["Unity", "C#", "Procedural Generation"],
    featured: true
  }
];
