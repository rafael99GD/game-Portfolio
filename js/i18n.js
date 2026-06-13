/**
 * ═══════════════════════════════════════════════════
 *  TRADUCCIONES — i18n.js
 *  Aquí están todos los textos de la UI en ES y EN.
 *  Los textos de cada juego van en games.js (campo
 *  description_en para la versión en inglés).
 * ═══════════════════════════════════════════════════
 */

const TRANSLATIONS = {

  es: {
    // Nav
    "nav.about":   "Sobre mí",
    "nav.games":   "Juegos",
    "nav.contact": "Contacto",

    // Hero
    "hero.eyebrow":  "Software Engineer & Game Dev",
    "hero.tagline":  "Construyo videojuegos desde la base.<br>Unity · C# · Unreal Engine 5 · VR/XR",
    "hero.cta1":     "Ver mis juegos",
    "hero.cta2":     "Contactar",

    // Sobre mí
    "about.eyebrow":    "Sobre mí",
    "about.title":      "Ingeniero que crea mundos",
    "about.subtitle":   "Combino sólidas bases de ingeniería con experiencia real construyendo videojuegos completos de principio a fin.",
    "about.bio":        `Soy <strong>Ingeniero de Software con mención en Videojuegos</strong> (U-tad, Madrid) apasionado por crear experiencias que mezclan tecnología y diversión.
                         He desarrollado un juego completo para un <strong>cliente real</strong> en Unity, trabajado en el full-stack con Java y Node.js en NEORIS,
                         y construido proyectos que van desde shooters en VR hasta escape rooms multijugador online.`,
    "about.label.gamedev":   "Game Dev",
    "about.label.engineering": "Ingeniería",
    "about.stat1.label": "Juegos completos",
    "about.stat2.label": "Nota media grado",
    "about.stat3.label": "Años experiencia",
    "about.edu.eyebrow": "Formación",

    // Juegos
    "games.eyebrow":   "Proyectos",
    "games.title":     "Juegos desarrollados",
    "games.subtitle":  "Haz clic en cualquier tarjeta para ver la demo en vídeo.",
    "games.btn.demo":  "Ver demo",
    "games.btn.github":"GitHub",

    // Contacto
    "contact.eyebrow":  "Contacto",
    "contact.title":    "Hablemos",
    "contact.intro":    `¿Tienes un proyecto de videojuego o buscas un dev que también entiende de sistemas?
                         Estoy disponible para trabajo <strong>presencial o remoto</strong> y con movilidad geográfica por España.`,
    "contact.quote":    "\"Algún día conquistaré el Abyssum, un día tú también lo harás...\"",
    "contact.quote.cite": "— Rafael Sánchez Fernández",
    "contact.cv.title": "¿Quieres mi CV completo?",
    "contact.cv.desc":  "Disponibilidad inmediata · Madrid · Presencial o remoto · Movilidad en España",
    "contact.cv.btn":   "📄 Pedir CV por email",

    // Footer
    "footer.copy": "© 2026 Rafael Sánchez Fernández · Hecho con 💜 en Madrid",

    // Modal
    "modal.title.default": "Demo",
  },

  en: {
    // Nav
    "nav.about":   "About",
    "nav.games":   "Games",
    "nav.contact": "Contact",

    // Hero
    "hero.eyebrow":  "Software Engineer & Game Dev",
    "hero.tagline":  "I build video games from scratch.<br>Unity · C# · Unreal Engine 5 · VR/XR",
    "hero.cta1":     "See my games",
    "hero.cta2":     "Contact me",

    // About
    "about.eyebrow":    "About me",
    "about.title":      "Engineer who builds worlds",
    "about.subtitle":   "I combine strong engineering foundations with real experience building complete video games from start to finish.",
    "about.bio":        `I'm a <strong>Software Engineer specialising in Video Games</strong> (U-tad, Madrid) passionate about creating experiences that blend technology and fun.
                         I developed a full game for a <strong>real client</strong> in Unity, worked full-stack with Java and Node.js at NEORIS,
                         and built projects ranging from VR shooters to online co-op escape rooms.`,
    "about.label.gamedev":    "Game Dev",
    "about.label.engineering":"Engineering",
    "about.stat1.label": "Complete games",
    "about.stat2.label": "Degree average",
    "about.stat3.label": "Years experience",
    "about.edu.eyebrow": "Education",

    // Games
    "games.eyebrow":   "Projects",
    "games.title":     "Games developed",
    "games.subtitle":  "Click any card to watch the gameplay demo.",
    "games.btn.demo":  "Watch demo",
    "games.btn.github":"GitHub",

    // Contact
    "contact.eyebrow":  "Contact",
    "contact.title":    "Let's talk",
    "contact.intro":    `Do you have a game project or are you looking for a dev who also understands systems?
                         I'm available for <strong>on-site or remote</strong> work and open to relocation across Spain.`,
    "contact.quote":    "\"One day I'll conquer the Abyssum, one day you will too...\"",
    "contact.quote.cite": "— Rafael Sánchez Fernández",
    "contact.cv.title": "Want my full CV?",
    "contact.cv.desc":  "Immediately available · Madrid · On-site or remote · Open to relocation in Spain",
    "contact.cv.btn":   "📄 Request CV by email",

    // Footer
    "footer.copy": "© 2026 Rafael Sánchez Fernández · Made with 💜 in Madrid",

    // Modal
    "modal.title.default": "Demo",
  }

};

// ── Motor de traducción ──────────────────────────────────────────────────────

let currentLang = localStorage.getItem("lang") || "es";

function t(key) {
  return TRANSLATIONS[currentLang][key] ?? TRANSLATIONS["es"][key] ?? key;
}

function applyTranslations(isRerender = true) {
  // Atributos data-i18n → innerHTML
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    el.innerHTML = t(key);
  });

  // Atributos data-i18n-placeholder → placeholder
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });

  // data-i18n-aria → aria-label
  document.querySelectorAll("[data-i18n-aria]").forEach(el => {
    el.setAttribute("aria-label", t(el.dataset.i18nAria));
  });

  // Actualizar lang del <html>
  document.documentElement.lang = currentLang === "es" ? "es" : "en";

  // Actualizar botón de idioma
  const langBtn = document.getElementById("lang-toggle");
  if (langBtn) {
    langBtn.textContent = currentLang === "es" ? "ENG" : "ESP";
    langBtn.setAttribute("aria-label", currentLang === "es" ? "Switch to English" : "Cambiar a Español");
  }

  // Re-renderizar tarjetas de juegos (para cambiar descripción e idioma de botones)
  if (typeof renderGames === "function") renderGames(isRerender);
}

function toggleLang() {
  currentLang = currentLang === "es" ? "en" : "es";
  localStorage.setItem("lang", currentLang);
  applyTranslations();
}