import { brandUrls } from '@/config/brand-urls'

/**
 * URL base del sitio.
 *
 * `NEXT_PUBLIC_SITE_URL` sirve para resolver el entorno (preview, staging).
 * En ausencia de esa variable el dominio canónico de la marca es la única
 * fuente: no hay respaldo a dominios heredados.
 */
export const siteUrl = (() => {
  const url = process.env.NEXT_PUBLIC_SITE_URL
  if (url) return url.replace(/\/$/, '')
  return brandUrls.website
})()
