// Fuente única de rutas de assets de marca (valores ACTUALES). No conectado aún.
// FASE VISUAL: reemplazar logo/isotipo/favicons por los de KLYNN.
export const brandAssets = {
  logoSvg: '/images/logo.svg',
  isotipo: '/images/brand/isotipo/magiclean-mc.webp',
  neoShieldBadge: '/images/brand/neoshield/neoshield-badge.webp', // tecnología NeoShield (no cambia)
  favicon: '/icon.png',
  appleIcon: '/apple-icon.png',
} as const

export type BrandAssets = typeof brandAssets
