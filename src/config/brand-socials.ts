// Redes sociales de KLYNN — fuente única.
//
// ⚠️ PENDIENTE: no hay perfiles oficiales de KLYNN dados de alta. Cada valor
// entra SOLO cuando exista una URL real confirmada. Mientras sea `null`, la red
// queda oculta automáticamente en toda la superficie (footer, contacto, sameAs
// del JSON-LD). No se inventan cuentas ni enlaces.
export const brandSocials = {
  instagram: null,
  linkedin: null,
  youtube: null,
  tiktok: null,
  facebook: null,
  x: null,
} as const

export type BrandSocials = typeof brandSocials

/** Etiqueta legible por red (para aria-label y texto). */
const LABELS: Record<keyof BrandSocials, string> = {
  instagram: 'Instagram',
  linkedin: 'LinkedIn',
  youtube: 'YouTube',
  tiktok: 'TikTok',
  facebook: 'Facebook',
  x: 'X',
}

/** Solo las redes con URL real confirmada. Vacío hoy → no se renderiza nada. */
export function activeSocials(): { key: keyof BrandSocials; label: string; url: string }[] {
  return (Object.keys(brandSocials) as (keyof BrandSocials)[])
    .map(key => ({ key, label: LABELS[key], url: brandSocials[key] as string | null }))
    .filter((s): s is { key: keyof BrandSocials; label: string; url: string } => Boolean(s.url))
}
