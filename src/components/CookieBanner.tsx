'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const CONSENT_KEY = 'cookie-consent'

export type CookieConsent = 'all' | 'necessary'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // One-shot sync from localStorage on mount; setVisible runs at most once
    // so it cannot trigger a render cycle.
    // `?capture` lo oculta para las capturas de revisión de diseño: es un
    // elemento legal superpuesto que impide evaluar la composición.
    const isCapture = new URLSearchParams(window.location.search).has('capture')
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!isCapture && !localStorage.getItem(CONSENT_KEY)) setVisible(true)
  }, [])

  function accept(value: CookieConsent) {
    localStorage.setItem(CONSENT_KEY, value)
    // Notify ConsentAwareAnalytics in the same session without a page reload
    window.dispatchEvent(new CustomEvent('cookie-consent-updated', { detail: value }))
    setVisible(false)
  }

  if (!visible) return null

  return (
    // Tarjeta flotante no invasiva. Desktop: esquina inferior DERECHA a 24px
    // (no tapa el CTA del hero, alineado a la izquierda). Mobile: panel inferior
    // compacto con márgenes de 16px y respeto de safe-area-inset-bottom. Es
    // position:fixed → fuera del flujo, sin CLS. No cambia lógica ni copy.
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
      className="fixed left-4 right-4 bottom-[calc(env(safe-area-inset-bottom,0px)+0.75rem)] z-50 max-w-[400px] bg-[var(--color-k-graphite)] shadow-[0_8px_40px_rgba(40,38,37,0.18)] sm:left-auto sm:right-6 sm:bottom-6"
    >
      <div className="flex flex-col gap-3 p-4 sm:gap-4 sm:p-5">
        {/* Mobile copy — short enough to keep the legal link visible while
            holding the banner ≤90px. Desktop keeps the full sentence. */}
        <p className="text-[11px] sm:text-[13px] font-normal text-white/70 leading-snug sm:leading-relaxed flex-1">
          <span className="sm:hidden">
            Cookies técnicas y de análisis.{' '}
            <Link
              href="/aviso-de-privacidad#cookies"
              className="text-[var(--color-k-white)] underline font-medium whitespace-nowrap"
            >
              Aviso de Privacidad
            </Link>
            .
          </span>
          <span className="hidden sm:inline">
            Este sitio utiliza cookies técnicas y de análisis para mejorar tu experiencia.
            Consulta nuestro{' '}
            <Link
              href="/aviso-de-privacidad#cookies"
              className="text-[var(--color-k-white)] underline font-medium whitespace-nowrap"
            >
              Aviso de Privacidad
            </Link>
            .
          </span>
        </p>

        {/* Buttons — always horizontal so the mobile banner stays compact */}
        <div className="flex flex-row gap-2">
          <button
            onClick={() => accept('necessary')}
            className="px-3 py-2 sm:px-5 sm:py-2.5 text-[11px] sm:text-[13px] font-semibold text-white/60 border border-white/20 hover:border-white/50 hover:text-white transition-all duration-200 motion-reduce:transition-none whitespace-nowrap"
          >
            Solo necesarias
          </button>
          <button
            onClick={() => accept('all')}
            className="px-3 py-2 sm:px-5 sm:py-2.5 text-[11px] sm:text-[13px] font-semibold text-[var(--color-k-graphite)] bg-[var(--color-k-white)] hover:opacity-90 transition-colors duration-200 motion-reduce:transition-none whitespace-nowrap"
          >
            Aceptar todas
          </button>
        </div>
      </div>
    </div>
  )
}
