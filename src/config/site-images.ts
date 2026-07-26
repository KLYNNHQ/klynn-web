/**
 * Manifiesto central de imágenes de KLYNN.
 *
 * FUENTE ÚNICA imagen → activo. Ningún componente hardcodea una ruta de
 * imagen: todos leen de aquí. Sustituir un render/boceto por la fotografía
 * profesional definitiva es editar UNA línea (`src` + dimensiones) en este
 * archivo — nunca se toca un componente.
 *
 * Contrato de reemplazo transparente:
 *   1. `src: null`  → el activo aún no existe. `BrandImage` no pinta nada;
 *      `MediaSlot` reserva la proporción canónica y muestra un tratamiento
 *      editorial provisional sobrio (sin caja gris, ícono roto ni esqueleto),
 *      por lo que el layout es estable con o sin imagen.
 *   2. `src: '...'` → el activo existe. Se pinta respetando la proporción
 *      canónica (width/height), por lo que el intercambio no mueve el layout.
 *
 * Al reemplazar un boceto/render temporal por la foto final: conservar la
 * MISMA proporción (width:height). Si la foto llega en otra proporción, se
 * recorta a la canónica antes de publicarla — el layout es el contrato.
 *
 * Dirección de arte (todas): fotografía editorial sobria, cálida y táctil;
 * materiales protagonistas (aluminio cepillado, acero, vidrio, cerámica,
 * roble, lino, piedra, silicón, fibra técnica); luz natural controlada;
 * fondos neutros; registro Braun · Muji · publicación editorial. Sin marcas
 * legibles, sin empaques definitivos, sin precios ni afirmaciones técnicas.
 * Los objetos son arquetípicos: NO representan inventario disponible.
 */

export interface BrandImageAsset {
  /** Ruta pública del activo, o `null` mientras no exista. */
  src: string | null
  /** Texto alternativo — obligatorio, en español. */
  alt: string
  /** Proporción canónica reservada. Se conserva entre boceto y foto final. */
  width: number
  height: number
  /** LCP candidate: solo los activos del primer fold lo llevan. */
  priority?: boolean
}

export const siteImages = {
  /**
   * HERO — desktop, composición editorial del universo KLYNN en ancho completo.
   *
   * Varios objetos cotidianos de distintas categorías, unidos por una misma
   * materialidad y lenguaje de diseño: la presentación de una master brand
   * multicategoría, no la publicidad de un solo producto.
   * Proporción canónica 16:9 horizontal. Área segura de texto: banda inferior
   * izquierda. Cuando el render exista, cambiar `src` a
   * '/brand/renders/hero-wide.webp' y nada más.
   */
  heroWide: {
    src: '/images/hero/hero-wide.webp',
    alt: 'Escena de hogar KLYNN en luz cálida: familia de termos y botellas sobre una mesa, un sofá modular de lino y un sistema de limpieza de cubeta y mopa en uso — objetos cotidianos de distintas categorías bajo un mismo lenguaje de diseño.',
    width: 2400,
    height: 1350,
    priority: true,
  },

  /**
   * HERO — mobile, misma composición recompuesta en vertical 4:5, sin cortar
   * los objetos fundamentales. Art direction independiente del desktop.
   */
  heroPortrait: {
    src: '/images/hero/hero-portrait.webp',
    alt: 'Escena de hogar KLYNN en vertical: sofá modular de lino, termos y botellas sobre una mesa y un sistema de limpieza de cubeta y mopa en uso — varias categorías cotidianas con una misma materialidad.',
    width: 1200,
    height: 1500,
  },

  /**
   * KLYNN CLEAN — la primera categoría materializada como familia conceptual
   * coherente de utensilios de limpieza (fibras, microfibras, cepillos, mopas,
   * accesorios). NO telas sueltas ni texturas abstractas. Sin empaques
   * definitivos, precios ni especificaciones: conceptos EN DESARROLLO.
   * Proporción canónica 3:2 horizontal.
   */
  cleanFamily: {
    src: null,
    alt: 'Familia conceptual KLYNN CLEAN: fibras, microfibras, cepillos, mopas y accesorios de limpieza cotidianos, resueltos con una misma materialidad, sobre superficie neutra cálida.',
    width: 2400,
    height: 1600,
  },

  /**
   * SELECCIONAR · MEJORAR · CREAR — tres detalles pensados como una secuencia
   * visual coordinada (misma luz, materiales, temperatura y encuadre), no como
   * tres fotografías independientes. Proporción canónica 1:1.
   */
  formaSeleccionar: {
    src: null,
    alt: 'Seleccionar: una mano elige un objeto cotidiano entre varias alternativas, en luz cálida y foco selectivo.',
    width: 1600,
    height: 1600,
  },
  formaMejorar: {
    src: null,
    alt: 'Mejorar: detalle macro de una unión de materiales bien resuelta —aluminio cepillado y roble— con acabado preciso.',
    width: 1600,
    height: 1600,
  },
  formaCrear: {
    src: null,
    alt: 'Crear: materias primas honestas —lámina de aluminio, bloque de roble, fibra técnica— antes del ensamblaje, en estudio sobrio.',
    width: 1600,
    height: 1600,
  },

  /**
   * UNIVERSO KLYNN — cinco tiles de categoría, claramente reconocibles (no
   * abstractas), con una misma dirección de arte. Proporción canónica 4:5.
   */
  categoryClean: {
    src: null,
    alt: 'KLYNN CLEAN: familia de utensilios de limpieza cotidianos —fibra, cepillo, mopa— sobre superficie neutra cálida.',
    width: 1200,
    height: 1500,
  },
  categoryHome: {
    src: null,
    alt: 'KLYNN HOME: objetos esenciales de la casa en roble y lino, en un ambiente doméstico cálido.',
    width: 1200,
    height: 1500,
  },
  categoryKitchen: {
    src: null,
    alt: 'KLYNN KITCHEN: utensilios cotidianos de cocina en acero, vidrio, cerámica o silicón, sobre superficie cálida.',
    width: 1200,
    height: 1500,
  },
  categoryStorage: {
    src: null,
    alt: 'KLYNN STORAGE: sistema de organización modular y sobrio, en metal mate o roble, de geometría limpia.',
    width: 1200,
    height: 1500,
  },
  categoryTech: {
    src: null,
    alt: 'KLYNN TECH: accesorios tecnológicos cotidianos, discretos y funcionales, sin brillo futurista.',
    width: 1200,
    height: 1500,
  },

  /* ------------------------------------------------------------------ Campaña
   * Visualizaciones conceptuales de producto EN DESARROLLO — no representan
   * inventario. Los tres son producto aislado en cuadrado 1:1, con el mismo
   * fondo y el mismo tratamiento: esa coherencia es la razón de que sigan en
   * el sitio mientras no exista su reemplazo definitivo.
   *
   * Estado PROVISIONAL, no canon: comunican correctamente la dirección de la
   * marca pero no cumplen el sistema de luz (fondo blanco puro, sin sombra
   * direccional). Salen en cuanto llegue su sustituto.
   *
   * Las dos escenas ambientales (mobiliario de interior y sala de exterior) se
   * retiraron por quedar fuera del universo: eran interiorismo, no objeto.
   */
  campaignClean: {
    src: '/images/campaign/klynn-clean-system.webp',
    alt: 'Sistema de limpieza KLYNN: cubeta giratoria y mopa plana, sobre fondo neutro.',
    width: 1600,
    height: 1600,
  },
  campaignKitchen: {
    src: '/images/campaign/klynn-everyday-drinkware.webp',
    alt: 'Familia de termos y botellas KLYNN en acero, con detalles en madera, corcho y textil.',
    width: 1600,
    height: 1600,
  },
  campaignTech: {
    src: '/images/campaign/klynn-tech-ecosystem.webp',
    alt: 'Ecosistema de accesorios tecnológicos KLYNN: base de carga, soporte, montura magnética, batería y organizador de cables.',
    width: 1600,
    height: 1600,
  },
} satisfies Record<string, BrandImageAsset>

export type SiteImageKey = keyof typeof siteImages
