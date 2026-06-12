# 🎮 Portfolio — Rafael Sánchez Fernández

Portfolio personal de Game Developer & Software Engineer.

---

## 📁 Estructura de archivos

```
portfolio/
├── index.html          ← Página principal (no tocar salvo datos personales)
├── css/
│   └── style.css       ← Todos los estilos visuales
├── js/
│   ├── games.js        ← ⭐ AQUÍ EDITAS TUS JUEGOS
│   └── main.js         ← Lógica de la web (no tocar)
└── assets/             ← Pon aquí tus imágenes y vídeos
    └── videos/         ← Vídeos .mp4 si no usas YouTube
```

---

## ✏️ Cómo añadir o editar un juego

Abre **`js/games.js`** y modifica el array `GAMES`.

Cada juego tiene esta forma:

```javascript
{
  title: "Nombre del Juego",
  emoji: "🎮",
  tags: ["Unity", "C#", "VR"],
  description: "Descripción breve del juego en 2-3 frases.",
  image: "assets/mi-imagen.jpg",     // o "" si no tienes imagen
  github: "https://github.com/tu-usuario/tu-repo",
  video: "https://www.youtube.com/watch?v=XXXXXX",  // o "" si no hay vídeo
},
```

Para **añadir un juego nuevo**, copia el bloque de plantilla que está al final del archivo y cambia los datos. ¡Eso es todo!

### Sobre las imágenes
- Coloca los archivos en `/assets/` (ej: `assets/fireball.jpg`)
- Formatos recomendados: `.jpg` o `.webp` (mejor rendimiento)
- Tamaño ideal: **1280×720px** (ratio 16:9)

### Sobre los vídeos
- **YouTube** (recomendado): pega la URL normal del vídeo, la web la convierte automáticamente
  ```
  video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  ```
- **Archivo propio**: sube el `.mp4` a `assets/videos/` y referencia la ruta
  ```
  video: "assets/videos/mi-juego-demo.mp4"
  ```
- **Sin vídeo**: deja `video: ""` y la tarjeta no abrirá modal al hacer clic

---

## 🚀 Deploy en GitHub Pages

1. Crea un repositorio en GitHub (nombre sugerido: `portfolio` o `dev-portfolio`)
2. Sube todos los archivos a la rama `main`
3. Ve a **Settings → Pages**
4. En "Source", selecciona `Deploy from a branch`
5. Elige la rama `main` y carpeta `/ (root)`
6. Guarda y espera 1-2 minutos
7. Tu web estará en: `https://tu-usuario.github.io/portfolio/`

---

## 🔧 Personalización rápida

### Cambiar foto de perfil
En `index.html`, busca la línea con `src="https://media.licdn.com..."` y reemplaza la URL por la ruta de tu foto local: `assets/foto.jpg`

### Cambiar datos de contacto / links
Busca en `index.html` la sección `<!-- CONTACTO -->` y actualiza las URLs de LinkedIn, GitHub y email.

### Cambiar estadísticas del hero
En `index.html`, busca los bloques `.stat-box` y actualiza los números y etiquetas.

---

## 🌐 Tecnologías usadas

- HTML5, CSS3, JavaScript vanilla
- Sin dependencias ni frameworks — carga rápida en cualquier hosting
- Google Fonts (Space Grotesk + Inter)
- Compatible con todos los navegadores modernos
