// Fuente única de color de marca KLYNN.
// Origen: Master Design Manual v1.0 — láminas 05 (Sistema Cromático) y
// 06 (Colores de Categoría). Espejo en TS de los tokens de globals.css:
// si cambia uno, cambia el otro.

/** Paleta oficial (lámina 05). */
export const brandColors = {
  white: '#F5F4F1',      // Blanco cálido
  graphite: '#282625',   // Grafito
  grayLight: '#D0D0D4',  // Gris claro
  grayMid: '#9C9C9C',    // Gris medio
  terracotta: '#D07140', // Terracota
} as const

/**
 * Acentos por categoría (lámina 06).
 *
 * Nota: `clean` (#D87345) NO es el mismo valor que el Terracota de la paleta
 * general (#D07140). El manual define ambos. Discrepancia reportada,
 * pendiente de decisión — no unificar por criterio propio.
 */
export const categoryColors = {
  clean: '#D87345',
  tech: '#202073',
  home: '#4D8F4A',
  kitchen: '#D0A447',
  bath: '#3C7FAA',
} as const

/** Color de texto de la lámina 07. Difiere de Grafito; ver globals.css. */
export const inkSpec = '#2E3135'

export type BrandColors = typeof brandColors
export type CategoryKey = keyof typeof categoryColors
