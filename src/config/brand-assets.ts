// Rutas de assets de marca KLYNN.
//
// Los assets de la marca anterior fueron eliminados del proyecto. Los
// definitivos de KLYNN todavía no existen.
export const brandAssets = {
  favicon: '/icon-192.png',
  appleIcon: '/icon-512.png',
} as const

/**
 * Wordmark KLYNN vectorizado desde el arte maestro aprobado.
 *
 * PROVISIONAL. Reproduce el master tal cual, incluidas sus irregularidades
 * geométricas (decisión del dueño: fidelidad sobre regularidad). El PNG del
 * Manual sigue siendo la referencia oficial de marca. Cuando exista un SVG
 * oficial, se sustituye el archivo.
 */
export const provisionalWordmarkSvg = '/brand/provisional/klynn-wordmark-PROVISIONAL.svg'

export type BrandAssets = typeof brandAssets
