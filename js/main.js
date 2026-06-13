// ═══════════════════════════════════════════
//  PORTFOLIO — main.js
//  Lógica principal: render de juegos, modal,
//  navegación, animaciones.
// ═══════════════════════════════════════════

document.addEventListener("DOMContentLoaded", () => {
  applyTranslations(false); // primer render: con animación de scroll
  initNav();
  initModal();
  initScrollReveal();
});

// ── RENDER DE JUEGOS ────────────────────────
function renderGames(isRerender = false) {
  const grid = document.getElementById("games-grid");
  if (!grid || typeof GAMES === "undefined") return;

  grid.innerHTML = GAMES.map((game, i) => {
    const hasVideo = game.video && game.video.trim() !== "";
    const hasGithub = game.github && game.github.trim() !== "";
    const tagsHTML = game.tags
      .map(tag => `<span class="tag">${tag}</span>`)
      .join("");

    const imageBg = game.image
      ? `style="background-image: url('${game.image}')"`
      : "";

    const desc = (currentLang === "en" && game.description_en)
      ? game.description_en
      : game.description;

    const btnDemo   = t("games.btn.demo");
    const btnGithub = t("games.btn.github");

    // En re-render por idioma las tarjetas ya son visibles (sin animación)
    const revealClass = isRerender ? "reveal revealed" : "reveal";

    return `
      <article class="game-card ${revealClass}" data-index="${i}"
               ${hasVideo ? `data-video="${game.video}" role="button" tabindex="0" aria-label="Ver demo de ${game.title}"` : ""}>
        <div class="card-img ${!game.image ? "card-img--placeholder" : ""}" ${imageBg}>
          ${!game.image ? `<span class="placeholder-emoji">${game.emoji || "🎮"}</span>` : ""}
          ${hasVideo ? `<div class="play-hint"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg> ${btnDemo}</div>` : ""}
        </div>
        <div class="card-body">
          <h3 class="card-title">${game.emoji ? game.emoji + " " : ""}${game.title}</h3>
          <div class="card-tags">${tagsHTML}</div>
          <p class="card-desc">${desc}</p>
          <div class="card-actions">
            ${hasVideo ? `<button class="btn btn--play" data-video="${game.video}" data-title="${game.title}">
              <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M8 5v14l11-7z"/></svg>
              ${btnDemo}
            </button>` : ""}
            ${hasGithub ? `<a href="${game.github}" target="_blank" rel="noopener" class="btn btn--ghost">
              <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
              ${btnGithub}
            </a>` : ""}
          </div>
        </div>
      </article>
    `;
  }).join("");

  // Click en tarjeta completa también abre modal
  grid.querySelectorAll(".game-card[data-video]").forEach(card => {
    card.addEventListener("click", (e) => {
      if (e.target.closest(".btn--ghost")) return; // no interceptar link de github
      const video = card.dataset.video;
      const title = card.querySelector(".card-title").textContent;
      openModal(video, title);
    });
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") openModal(card.dataset.video, card.querySelector(".card-title").textContent);
    });
  });

  // Botones "Ver demo" dentro de tarjetas
  grid.querySelectorAll(".btn--play").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      openModal(btn.dataset.video, btn.dataset.title);
    });
  });
}

// ── MODAL DE VÍDEO ──────────────────────────
function initModal() {
  const modal = document.getElementById("video-modal");
  const closeBtn = document.getElementById("modal-close");
  const backdrop = document.getElementById("modal-backdrop");

  closeBtn?.addEventListener("click", closeModal);
  backdrop?.addEventListener("click", closeModal);
  modal?.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });
}

function getEmbedURL(url) {
  // YouTube: convierte URL normal en embed
  const ytMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  if (ytMatch) return `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&rel=0`;
  // Si es un archivo de vídeo propio
  return url;
}

function openModal(videoUrl, title) {
  const modal = document.getElementById("video-modal");
  const container = document.getElementById("modal-video-container");
  const titleEl = document.getElementById("modal-title");
  if (!modal || !container) return;

  const embed = getEmbedURL(videoUrl);
  const isFile = !embed.includes("youtube.com/embed");

  container.innerHTML = isFile
    ? `<video src="${embed}" controls autoplay playsinline style="width:100%;border-radius:8px;"></video>`
    : `<iframe src="${embed}" frameborder="0" allow="autoplay; encrypted-media; fullscreen" allowfullscreen style="width:100%;aspect-ratio:16/9;border-radius:8px;"></iframe>`;

  if (titleEl) titleEl.textContent = title || "";

  modal.classList.add("is-open");
  document.body.style.overflow = "hidden";
  document.getElementById("modal-close")?.focus();
}

function closeModal() {
  const modal = document.getElementById("video-modal");
  const container = document.getElementById("modal-video-container");
  modal?.classList.remove("is-open");
  document.body.style.overflow = "";
  // Detener vídeo limpiando el contenido
  setTimeout(() => { if (container) container.innerHTML = ""; }, 300);
}

// ── NAVEGACIÓN ──────────────────────────────
function initNav() {
  const nav = document.getElementById("main-nav");
  const burger = document.getElementById("nav-burger");
  const navLinks = document.getElementById("nav-links");

  // Sombra al hacer scroll
  window.addEventListener("scroll", () => {
    nav?.classList.toggle("nav--scrolled", window.scrollY > 20);
  }, { passive: true });

  // Burger para móvil
  burger?.addEventListener("click", () => {
    const open = navLinks?.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // Cerrar menú al hacer clic en un enlace
  navLinks?.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      burger?.setAttribute("aria-expanded", "false");
    });
  });

  // Resaltar enlace activo al hacer scroll
  const sections = document.querySelectorAll("section[id]");
  const navItems = document.querySelectorAll(".nav-link");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navItems.forEach(link => {
          link.classList.toggle("nav-link--active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px" });

  sections.forEach(s => observer.observe(s));
}

// ── SCROLL REVEAL ───────────────────────────
function initScrollReveal() {
  const els = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Escalonar cards de juegos
        const delay = entry.target.dataset.index
          ? parseInt(entry.target.dataset.index) * 80
          : 0;
        setTimeout(() => entry.target.classList.add("revealed"), delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  els.forEach(el => observer.observe(el));
}