/**
 * Manifiesto central de imágenes de KLYNN.
 *
 * FUENTE ÚNICA imagen → activo. Ningún componente hardcodea una ruta de
 * imagen: todos leen de aquí. Sustituir un render de Lovart por la fotografía
 * profesional definitiva es editar UNA línea (`src` + dimensiones) en este
 * archivo — nunca se toca un componente.
 *
 * Contrato de reemplazo transparente:
 *   1. `src: null`  → el activo aún no existe. `BrandImage` no pinta nada
 *      (sin placeholder visual); el layout que lo consume degrada con
 *      dignidad a su composición sin imagen.
 *   2. `src: '...'` → el activo existe. Se pinta respetando `width`/`height`
 *      (proporción canónica reservada), por lo que el intercambio no mueve
 *      el layout.
 *
 * Al reemplazar un render temporal por la foto final: conservar la MISMA
 * proporción (width:height). Si la foto llega en otra proporción, se recorta
 * a la canónica antes de publicarla — el layout es el contrato, no la imagen.
 */

export interface BrandImageAsset {
  /** Ruta pública del activo, o `null` mientras no exista. */
  src: string | null
  /** Texto alternativo — obligatorio, en español. */
  alt: string
  /** Proporción canónica reservada. Se conserva entre render temporal y foto final. */
  width: number
  height: number
  /** LCP candidate: solo el activo del primer fold lo lleva. */
  priority?: boolean
}

export const siteImages = {
  /**
   * HERO PRIMARY — el objeto-manifiesto del primer fold.
   *
   * Estado: EN PRODUCCIÓN (Lovart). Brief: docs/lovart/hero-primary-brief.md
   * Proporción canónica 4:5 vertical. Cuando el render exista, cambiar `src` a
   * '/brand/renders/hero-primary.webp' y nada más.
   */
  heroPrimary: {
    src: null,
    alt: 'Objeto KLYNN: un objeto cotidiano diseñado con criterio, en estudio de luz sobre superficie neutra cálida.',
    width: 2400,
    height: 3000,
    priority: true,
  },
} satisfies Record<string, BrandImageAsset>

export type SiteImageKey = keyof typeof siteImages
