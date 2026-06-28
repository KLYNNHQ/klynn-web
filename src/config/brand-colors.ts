// Fuente única de color de marca (valores ACTUALES: MagiClean).
// FASE VISUAL: actualizar a la paleta KLYNN aquí. No conectado aún a componentes.
export const brandColors = {
  primary: '#0076FF',   // azul de marca (CTAs / acentos)
  ink: '#1A1A1A',       // grafito editorial
  accentRed: '#EF4023', // "Magi" del wordmark
  whatsapp: '#25D366',
} as const

export type BrandColors = typeof brandColors
