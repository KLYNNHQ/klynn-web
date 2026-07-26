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

/**
 * Estado de un activo dentro del Canon Visual de KLYNN.
 *
 * `A` PLACEHOLDER — no comunica marca. Solo sostiene el layout mientras el
 *     activo no existe. Siempre acompaña a `src: null`.
 * `B` PROVISIONAL — comunica correctamente la dirección de la marca y puede
 *     vivir en producción, pero no cumple el sistema todavía. Sale en cuanto
 *     llegue su reemplazo definitivo.
 * `C` CANON — imagen definitiva y referencia obligatoria: toda pieza futura
 *     debe parecer de la misma campaña.
 *
 * El canon es dinámico: un activo en `C` puede volver a `B` o salir del sitio
 * si el conjunto demuestra que rompe la unidad visual. No hay aprobaciones
 * permanentes; la coherencia del universo está por encima de cualquier imagen.
 */
export type AssetEstado = 'A' | 'B' | 'C'

export interface BrandImageAsset {
  /** Ruta pública del activo, o `null` mientras no exista. */
  src: string | null
  /** Texto alternativo — obligatorio, en español. */
  alt: string
  /** Proporción canónica reservada. Se conserva entre boceto y foto final. */
  width: number
  height: number
  /**
   * Estado en el Canon Visual. Obligatorio: obliga a declarar de forma
   * explícita qué es placeholder, qué es provisional y qué es definitivo,
   * de modo que el código refleje el estado real del proyecto.
   */
  estado: AssetEstado
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
    estado: 'B',
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
    estado: 'B',
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
    estado: 'A',
  },

  /**
   * MATERIA — el lenguaje material antes de que sea producto. Cinco materias
   * primas en contacto, fotografiadas como sustancias y no como muestrario.
   * Es la pieza que costura visualmente el resto del recorrido.
   * Proporción canónica 3:2 horizontal.
   */
  brandMaterial: {
    src: null,
    alt: 'Materias primas KLYNN en contacto: lámina de aluminio cepillado, bloque de roble, placa de cerámica sin esmaltar, lino crudo y corcho, sobre piedra caliza cálida.',
    width: 2400,
    height: 1600,
    estado: 'A',
  },

  /**
   * MATERIA — el detalle de manufactura: la unión donde dos materiales se
   * encuentran bien resueltos. Sin producto identificable, solo factura.
   * Proporción canónica 1:1.
   */
  brandDetail: {
    src: null,
    alt: 'Detalle macro de la unión entre un collar de aluminio cepillado y una superficie de roble torneado, con la tolerancia real visible en la junta.',
    width: 1600,
    height: 1600,
    estado: 'A',
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
    estado: 'A',
  },
  formaMejorar: {
    src: null,
    alt: 'Mejorar: detalle macro de una unión de materiales bien resuelta —aluminio cepillado y roble— con acabado preciso.',
    width: 1600,
    height: 1600,
    estado: 'A',
  },
  formaCrear: {
    src: null,
    alt: 'Crear: materias primas honestas —lámina de aluminio, bloque de roble, fibra técnica— antes del ensamblaje, en estudio sobrio.',
    width: 1600,
    height: 1600,
    estado: 'A',
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
    estado: 'A',
  },
  categoryHome: {
    src: null,
    alt: 'KLYNN HOME: objetos esenciales de la casa en roble y lino, en un ambiente doméstico cálido.',
    width: 1200,
    height: 1500,
    estado: 'A',
  },
  categoryKitchen: {
    src: null,
    alt: 'KLYNN KITCHEN: utensilios cotidianos de cocina en acero, vidrio, cerámica o silicón, sobre superficie cálida.',
    width: 1200,
    height: 1500,
    estado: 'A',
  },
  categoryStorage: {
    src: null,
    alt: 'KLYNN STORAGE: sistema de organización modular y sobrio, en metal mate o roble, de geometría limpia.',
    width: 1200,
    height: 1500,
    estado: 'A',
  },
  categoryTech: {
    src: null,
    alt: 'KLYNN TECH: accesorios tecnológicos cotidianos, discretos y funcionales, sin brillo futurista.',
    width: 1200,
    height: 1500,
    estado: 'A',
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
    estado: 'B',
  },
  campaignKitchen: {
    src: '/images/campaign/klynn-everyday-drinkware.webp',
    alt: 'Familia de termos y botellas KLYNN en acero, con detalles en madera, corcho y textil.',
    width: 1600,
    height: 1600,
    estado: 'B',
  },
  campaignTech: {
    src: '/images/campaign/klynn-tech-ecosystem.webp',
    alt: 'Ecosistema de accesorios tecnológicos KLYNN: base de carga, soporte, montura magnética, batería y organizador de cables.',
    width: 1600,
    height: 1600,
    estado: 'B',
  },
} satisfies Record<string, BrandImageAsset>

export type SiteImageKey = keyof typeof siteImages
