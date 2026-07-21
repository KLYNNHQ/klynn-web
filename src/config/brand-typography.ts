// Escala tipográfica KLYNN — valores exactos de la lámina 07 del
// Master Design Manual v1.0. Espejo en TS de las clases `.k-*` de globals.css.
//
// "KLYNN Display" y "KLYNN Text" no existen como archivo de fuente en
// KLYNN_OS. Inter Tight / Inter actúan de sustitutas hasta que la fuente
// oficial esté disponible.

export const brandFonts = {
  display: 'Inter Tight', // sustituta de "KLYNN Display"
  text: 'Inter',          // sustituta de "KLYNN Text"
  isOfficial: false,      // pasa a true cuando llegue la fuente de marca
} as const

export const typeScale = {
  h1:      { sizePx: 85, leadingPx: 96, tracking: '-0.01em',  weight: 700, font: 'display' },
  h2:      { sizePx: 43, leadingPx: 48, tracking: '-0.005em', weight: 700, font: 'display' },
  h3:      { sizePx: 27, leadingPx: 32, tracking: '0em',      weight: 500, font: 'text' },
  body:    { sizePx: 16, leadingPx: 21, tracking: '0.01em',   weight: 400, font: 'text' },
  button:  { sizePx: 16, leadingPx: 16, tracking: '0.05em',   weight: 700, font: 'text' },
  caption: { sizePx: 11, leadingPx: 13, tracking: '0.02em',   weight: 300, font: 'text' },
} as const

export type TypeScaleKey = keyof typeof typeScale
