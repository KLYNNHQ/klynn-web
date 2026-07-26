'use client'

import { activeSocials } from '@/config/brand-socials'
import { track, AnalyticsEvents } from '@/lib/analytics'

/**
 * Enlaces sociales — SOLO redes con URL real confirmada. Si no hay ninguna
 * (estado actual), no renderiza nada: la ausencia se oculta sola, sin enlaces
 * muertos ni cuentas inventadas. Dispara social_link_click (consent-safe).
 */
export default function SocialLinks({ className = '' }: { className?: string }) {
  const socials = activeSocials()
  if (socials.length === 0) return null
  return (
    <ul className={`flex flex-wrap gap-x-6 gap-y-2 ${className}`}>
      {socials.map(s => (
        <li key={s.key}>
          <a
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`KLYNN en ${s.label}`}
            onClick={() => track(AnalyticsEvents.SocialLinkClick, { network: s.key })}
            className="k-caption k-ui-transition-opacity text-[0.6875rem] uppercase tracking-[0.16em] opacity-60 hover:opacity-100"
          >
            {s.label}
          </a>
        </li>
      ))}
    </ul>
  )
}
