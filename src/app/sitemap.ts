import type { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/config'
import { ARTICLES } from '@/lib/klynn/journal'

/**
 * Sitemap — solo rutas públicas reales y con contenido. Las rutas de catálogo
 * (/productos) se añaden cuando exista material real.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${siteUrl}/nuestro-criterio`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/inversionistas`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/proveedores-y-socios`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${siteUrl}/journal`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${siteUrl}/contacto`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${siteUrl}/aviso-de-privacidad`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${siteUrl}/terminos-de-uso`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ]

  const journalRoutes: MetadataRoute.Sitemap = ARTICLES.map(a => ({
    url: `${siteUrl}/journal/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: 'yearly',
    priority: 0.5,
  }))

  return [...staticRoutes, ...journalRoutes]
}
