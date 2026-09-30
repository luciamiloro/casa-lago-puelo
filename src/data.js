// ============================================================================
//  ARCHIVO DE DATOS DE LA PROPIEDAD
//  --------------------------------------------------------------------------
//  ESTE ES EL ÚNICO ARCHIVO QUE NECESITÁS EDITAR.
//  Acá cargás tus fotos, los videos y los textos de cada ambiente.
//
//  CÓMO AGREGAR FOTOS:
//  1. Copiá tus fotos dentro de la carpeta:  public/fotos/
//  2. En cada ambiente, escribí el nombre del archivo en "fotos".
//     Ejemplo: si tu foto se llama "cocina1.jpg" y está en public/fotos/,
//     poné:  fotos: ["/fotos/cocina1.jpg", "/fotos/cocina2.jpg"]
//
//  CÓMO AGREGAR VIDEOS:
//  1. Subí el video a YouTube como "No listado" (Unlisted).
//  2. Copiá el ID del video del link. Ejemplo:
//     link:  https://www.youtube.com/watch?v=ABC123xyz
//     ID:    ABC123xyz   ->  poné eso en "youtubeId" abajo.
// ============================================================================

// ---- INFORMACIÓN GENERAL DE LA PROPIEDAD ----------------------------------
export const propiedad = {
  titulo: "Casa en Lago Puelo",
  subtitulo: "Av. Los Arrayanes esquina Calle El Radal · Chubut, Patagonia",
  ubicacion: "Lago Puelo, Departamento Cushamen, Chubut",
  superficieTerreno: "856,68 m²",
  superficieCubierta: "Casa + galpón independiente",
  descripcion:
    "Propiedad sobre lote en esquina (Av. Los Arrayanes y Calle El Radal). " +
    "Casa de tres dormitorios con placard incluido, más un cuarto de servicio, lavadero, " +
    "amplio comedor y sala de estar, galería, y sistema de calefacción central por conductos de aire " +
    "con su central ubicada en el sótano. " +
    "Cuenta además con un galpón / garage independiente sobre la misma parcela, que incluye toilette.",
  // Datos destacados que se ven en la portada (editá libremente)
  destacados: [
    { numero: "856", texto: "m² de terreno" },
    { numero: "6", texto: "Ambientes, 4\u00A0dormitorios" },
    { numero: "2", texto: "Baños" },
    { numero: "1", texto: "Galpón independiente con toilette" },
    { numero: "1", texto: "Sótano con central de calefacción" }
  ],
}

// ---- AMBIENTES DE LA CASA (puntos clickeables del plano) ------------------
//  Cada punto tiene:
//   id      -> identificador interno (no lo cambies)
//   nombre  -> el título que se muestra
//   x, y    -> posición del punto sobre el plano, en % (0 a 100).
//              Ya están ubicados aprox. según tu plano. Si querés moverlos,
//              cambiá estos números (x = horizontal, y = vertical).
//   texto   -> descripción del ambiente
//   fotos   -> lista de fotos (ver instrucciones arriba)

export const ambientes = [
  {
    id: "dorm1",
    nombre: "Dormitorio 1",
    x: 18, y: 22,
    texto: "Dormitorio principal, ubicado sobre la esquina del lote.",
    fotos: ["/fotos/15-dormi1.jpg", "/fotos/16-dormi1.jpg", "/fotos/17-dormi1.jpg"],
  },
  {
    id: "dormserv",
    nombre: "Dormitorio de servicio",
    x: 41, y: 16,
    texto: "Dormitorio de servicio.",
    fotos: ["/fotos/11-habit-servicio.jpg"],
  },
  {
    id: "cocina",
    nombre: "Cocina",
    x: 58, y: 24,
    texto: "Cocina.",
    fotos: ["/fotos/08-cocina.jpg", "/fotos/09-cocina.jpg", "/fotos/10-cocina.jpg"],
  },
  {
    id: "comedor",
    nombre: "Comedor",
    x: 81, y: 24,
    texto: "Comedor amplio.",
    fotos: ["/fotos/07-living.jpg"],
  },
  {
    id: "bano",
    nombre: "Baño",
    x: 12, y: 54,
    texto: "Baño principal.",
    fotos: ["/fotos/13-baño2.jpg", "/fotos/14-baño2.jpg"],
  },
  {
    id: "banoserv",
    nombre: "Baño de servicio / Toilette",
    x: 42, y: 44,
    texto: "Baño de servicio y toilette.",
    fotos: ["/fotos/12-baño1.jpg"],
  },
  {
    id: "dorm2",
    nombre: "Dormitorio 2",
    x: 17, y: 77,
    texto: "Segundo dormitorio.",
    fotos: ["/fotos/18-dormi2.jpg"],
  },
  {
    id: "dorm3",
    nombre: "Dormitorio 3",
    x: 33, y: 77,
    texto: "Tercer dormitorio.",
    fotos: ["/fotos/19-dormi3.jpg", "/fotos/20-dormi3.jpg"],
  },
  {
    id: "vestibulo",
    nombre: "Vestíbulo y entrada",
    x: 53, y: 71,
    texto: "Vestíbulo de acceso y pasillo.",
    fotos: ["/fotos/03-entrada.jpg", "/fotos/21-pasillo.jpg"],
  },
  {
    id: "estar",
    nombre: "Sala de estar / Living",
    x: 76, y: 66,
    texto: "Amplia sala de estar.",
    fotos: ["/fotos/04-living.jpg", "/fotos/05-living.jpg", "/fotos/06-living.jpg"],
  },
  {
    id: "galeria",
    nombre: "Galería",
    x: 73, y: 92,
    texto: "Galería.",
    fotos: ["/fotos/02-galeria.jpg"],
  },
]

// ---- SECTORES DEL TERRENO (puntos sobre la vista del lote) ----------------
export const terreno = [
  {
    id: "casa",
    nombre: "La casa (frente sobre El Radal)",
    x: 12, y: 55,
    texto: "Frente de la casa visto desde Calle El Radal.",
    fotos: ["/fotos/01-frente.jpg"],
  },
  {
    id: "galpon",
    nombre: "Galpón / Garage",
    x: 70, y: 38,
    texto: "Galpón independiente con dos garages y depósito. Estructura de chapa autoportante.",
    fotos: ["/fotos/25-galpon.jpg"],
  },
  {
    id: "patio",
    nombre: "Patio / Exterior",
    x: 55, y: 60,
    texto: "Patio y exterior, entre la casa y el galpón.",
    fotos: ["/fotos/22-patio.jpg", "/fotos/23-patio.jpg", "/fotos/24-patio.jpg"],
  },
]

// ---- VIDEOS DE RECORRIDO ---------------------------------------------------
//  Subí los videos a YouTube como "No listado" y pegá el ID acá.
export const videos = [
  {
    titulo: "Recorrido 1 — Ingreso, living, cocina, patio",
    youtubeId: "uZ6tUMcibOE", // ej: "dQw4w9WgXcQ"
  },
  {
    titulo: "Recorrido 2 — Habitación Servicio, lavadero, Baño 1, Dormitorio 3, Dormitorio 2, Baño 2 y Dormitorio 1",
    youtubeId: "W7Qdc8CcV7E",
  },
]

// ---- UBICACIÓN (links de Google Maps) -------------------------------------
export const ubicacionLinks = {
  mapa: "https://maps.app.goo.gl/VDQVCZb2sny6fvFw6",
  streetView:
      "https://www.google.com/maps/@?api=1&map_action=pano&pano=s-jCT92A742AAW0mgWGuIg&heading=116&pitch=10",
  // Coordenadas (para el mapa embebido). No hace falta tocarlas.
  lat: -42.066082,
  lng: -71.597769,
}

// ---- PLANOS ORIGINALES ESCANEADOS -----------------------------------------
//  Galería de los planos originales de la propiedad (ya escaneados).
//  Para agregar o sacar planos: editá esta lista. Las imágenes están en
//  public/planos/
export const planosOriginales = [
  { imagen: "/planos/plano-planta.jpg", titulo: "Planta general" },
  { imagen: "/planos/plano-cortes.jpg", titulo: "Plantas y cortes" },
  { imagen: "/planos/plano-altillo.jpg", titulo: "Planta de altillo y cortes" },
  { imagen: "/planos/plano-calefaccion.jpg", titulo: "Conductos de calefacción" },
  { imagen: "/planos/plano-galpon.jpg", titulo: "Galpón / garage" },
  { imagen: "/planos/plano-quincho-1.jpg", titulo: "Quincho — relevamiento" },
  { imagen: "/planos/plano-quincho-2.jpg", titulo: "Quincho — planilla municipal" },
]

// ---- CONTACTO (opcional, editá o dejá vacío) ------------------------------
export const contacto = {
  nombre: "",
  // Número en formato internacional, sin "+", sin 0, sin 15:
  // Argentina = 54 + 9 + código de área + número
  whatsapp: "5492944623377", 
  // Mensaje que aparece ya escrito cuando te escriben:
  mensaje: "Hola, vi la página de la casa en Lago Puelo y me interesa.",
  email: "",
}