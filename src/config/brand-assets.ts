// Fuente única de rutas de assets de marca.
//
// Estado: los assets KLYNN definitivos (wordmark vectorial oficial, isotipo
// "K Edge", favicons, OG) todavía no existen. Las rutas de abajo siguen
// apuntando a los assets MagiClean heredados para no romper el render de las
// secciones aún no migradas.
export const brandAssets = {
  logoSvg: '/images/logo.svg',
  isotipo: '/images/brand/isotipo/magiclean-mc.webp',
  neoShieldBadge: '/images/brand/neoshield/neoshield-badge.webp', // NeoShield no cambia
  favicon: '/icon.png',
  appleIcon: '/apple-icon.png',
} as const

/**
 * Wordmark KLYNN vectorizado desde el arte maestro aprobado.
 *
 * PROVISIONAL — NO INTEGRAR sin aprobación explícita del dueño.
 *
 * Trazado desde `KLYNN_OS/02_SISTEMA_DE_DISEÑO/Master_Wordmark_v1.png`
 * (lámina 1). Fidelidad al bitmap de origen: IoU 98.9%. Reproduce el arte
 * maestro tal cual, incluidas sus irregularidades geométricas: las dos N
 * tienen anchos distintos (1.028H vs 0.864H) y el grosor de asta varía entre
 * letras. Eso NO es un defecto del trazado — es lo que el master contiene.
 *
 * No reemplaza al PNG master. Pendiente de decisión sobre si el activo
 * definitivo se redibuja regularizado o se conserva tal cual.
 */
export const provisionalWordmarkSvg = '/brand/provisional/klynn-wordmark-PROVISIONAL.svg'

export type BrandAssets = typeof brandAssets
