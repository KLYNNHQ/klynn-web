'use client'

import { useEffect, useRef } from 'react'
import { track, AnalyticsEvents } from '@/lib/analytics'

/**
 * Dispara `article_read` una vez al abrir un artículo. Solo envía el slug
 * (no personal). Consent-safe. Renderiza nada.
 */
export default function ArticleView({ slug }: { slug: string }) {
  const fired = useRef(false)
  useEffect(() => {
    if (fired.current) return
    fired.current = true
    track(AnalyticsEvents.ArticleRead, { slug })
  }, [slug])
  return null
}
