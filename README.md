# Casa en Lago Puelo — Web de la propiedad

Página web interactiva para mostrar la propiedad: un plano donde se clickea
cada ambiente y se ven las fotos, más una vista del terreno con la casa y el
galpón, y los videos de recorrido.

---

## 🟢 Lo único que tenés que editar

Todo lo tuyo (fotos, videos, textos) se carga en **un solo archivo**:

    src/data.js

Abrilo con cualquier editor de texto (incluso el Bloc de notas sirve) y seguí
los comentarios que están adentro. Es bien simple.

### Para agregar FOTOS
1. Copiá tus fotos en la carpeta `public/fotos/`
2. En `src/data.js`, en el ambiente que corresponda, escribí el nombre:

       fotos: ["/fotos/cocina1.jpg", "/fotos/cocina2.jpg"]

   (siempre con `/fotos/` adelante)

### Para agregar VIDEOS
1. Subí cada video a YouTube como **"No listado"** (Unlisted). Así solo lo ve
   quien tiene el link, no aparece en búsquedas.
2. Del link del video copiá el ID. Por ejemplo de
   `https://www.youtube.com/watch?v=ABC123xyz` el ID es `ABC123xyz`.
3. Pegá ese ID en `src/data.js`, en la sección `videos`.

### Para cambiar la UBICACIÓN (Google Maps)
En `src/data.js`, sección `ubicacion`, están los dos links: el del mapa y el de
Street View. Si alguna vez cambian, los reemplazás ahí.

### Para los PLANOS originales
Ya están cargados en `public/planos/` y listados en `src/data.js` (sección
`planosOriginales`). Si querés sacar o agregar alguno, editás esa lista.

### Mover los puntos del plano
Cada ambiente tiene `x` e `y` (en %, de 0 a 100). Si un punto te quedó corrido,
cambiá esos números: `x` mueve a izquierda/derecha, `y` mueve arriba/abajo.

---

## 💻 Probar la web en tu compu (opcional)

Necesitás tener instalado Node.js (https://nodejs.org). Después, en la carpeta
del proyecto:

    npm install
    npm run dev

Y abrís el link que te muestra (algo como http://localhost:5173).

---

## 🚀 Subir a Vercel (gratis, queda online)

La forma más fácil, sin instalar nada:

1. Creá una cuenta en https://vercel.com (podés entrar con tu mail o GitHub).
2. Subí esta carpeta a un repositorio de GitHub, **o** usá la opción de Vercel
   para importar carpeta / arrastrar el proyecto.
3. Vercel detecta solo que es un proyecto Vite. Dale "Deploy".
4. Te queda un link tipo `https://casa-lago-puelo.vercel.app` que mandás por
   WhatsApp o mail.

> Cada vez que cambies fotos o videos, volvés a subir y se actualiza solo.

---

## Estructura

    public/fotos/      <- acá van tus fotos
    src/data.js        <- acá editás todo (fotos, videos, textos)
    src/App.jsx        <- la app (no hace falta tocar)
    src/Planos.jsx     <- los planos dibujados (no hace falta tocar)
    src/styles.css     <- los estilos (no hace falta tocar)
