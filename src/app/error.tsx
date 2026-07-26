'use client'
import { useEffect } from 'react'
import Link from 'next/link'
import * as Sentry from '@sentry/nextjs'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    Sentry.captureException(error)
  }, [error])

  return (
    <main id="contenido" tabIndex={-1} className="flex min-h-screen items-center justify-center bg-[var(--color-k-graphite)] px-6">
      <div className="max-w-lg text-center text-[var(--color-k-white)]">
        <p className="k-caption mb-4 uppercase tracking-[0.24em] opacity-50">Error</p>
        <h1 className="k-h2 mb-4 text-[clamp(1.75rem,4vw,2.6875rem)] leading-[1.1]">
          Algo salió mal
          <span style={{ color: 'var(--color-k-terracotta)' }}>.</span>
        </h1>
        <p className="k-body mb-10 opacity-60">
          Tuvimos un problema al cargar esta sección. Intenta de nuevo o contáctanos
          si el error persiste.
        </p>
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <button
            onClick={reset}
            className="k-button bg-[var(--color-k-white)] px-8 py-4 text-[var(--color-k-graphite)] transition-opacity hover:opacity-90"
          >
            Reintentar
          </button>
          <Link
            href="/"
            className="k-button border border-white/25 px-8 py-4 text-[var(--color-k-white)] transition-colors hover:border-white/50"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  )
}
