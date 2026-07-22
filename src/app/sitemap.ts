import type { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/config'

/**
 * Sitemap.
 *
 * Solo las rutas que existen hoy tras la purga. Las rutas de catálogo
 * (/categorias, /categoria/[slug], /productos, /productos/[slug]) se añaden
 * cuando esos bloques se construyan, no antes: enumerar rutas inexistentes
 * daña el SEO.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    { url: siteUrl, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    {
      url: `${siteUrl}/aviso-de-privacidad`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${siteUrl}/terminos-de-uso`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
