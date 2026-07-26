import BrandImage, { hasAsset } from './BrandImage'
import type { BrandImageAsset } from '@/config/site-images'

/**
 * MediaSlot — contenedor de imagen de marca con proporción reservada.
 *
 * Resuelve el estado "todavía no hay foto" sin romper la página:
 *
 *   - La proporción la fija SIEMPRE el contenedor (className del consumidor,
 *     p. ej. `aspect-[4/5]`), exista o no la imagen. El layout es estable.
 *   - Si el activo existe (`asset.src`) se pinta a `object-cover` (fill) y,
 *     opcionalmente, con un velo (`overlay`) para legibilidad de texto encima.
 *   - Si el activo aún NO existe, se muestra un TRATAMIENTO EDITORIAL
 *     PROVISIONAL sobrio: superficie neutra cálida, retícula tenue (el motivo
 *     del hero), marco a hairline y una etiqueta discreta. Nunca caja gris,
 *     ícono de imagen rota, esqueleto animado ni mensaje técnico.
 *
 * Cuando llega la foto definitiva solo cambia una línea en site-images.ts.
 */

type Tone = 'light' | 'dark'

/** Retícula tenue — mismo motivo del hero, como textura del marco provisional. */
function Reticula({ tone }: { tone: Tone }) {
  const color = tone === 'dark' ? 'rgba(255,255,255,0.10)' : 'var(--color-k-gray-light)'
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-[0.5]"
      style={{
        backgroundImage: `repeating-linear-gradient(to right, ${color} 0 1px, transparent 1px calc(100% / 6))`,
      }}
    />
  )
}

export default function MediaSlot({
  asset,
  sizes,
  label,
  tone = 'light',
  overlay = false,
  className = '',
  imgClassName = 'object-cover',
}: {
  asset: BrandImageAsset
  /** Media hints para servir la resolución correcta (responsive/perf). */
  sizes?: string
  /** Etiqueta discreta mostrada solo en estado provisional (sin imagen). */
  label?: string
  /** Adapta el marco provisional y el velo a fondo claro u oscuro. */
  tone?: Tone
  /** Velo inferior para legibilidad cuando hay texto sobre la imagen. */
  overlay?: boolean
  /** Debe fijar la proporción (aspect-*) y el radio/marco del contenedor. */
  className?: string
  imgClassName?: string
}) {
  const ready = hasAsset(asset)

  const frameBorder =
    tone === 'dark' ? 'border-white/15' : 'border-[var(--color-k-border)]'
  const frameBg =
    tone === 'dark' ? 'bg-white/[0.03]' : 'bg-[var(--color-k-surface-raised)]'
  const labelColor =
    tone === 'dark' ? 'text-white/55' : 'text-[var(--color-k-ink-muted-aa)]'

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {ready ? (
        <>
          <BrandImage asset={asset} fill sizes={sizes} className={imgClassName} />
          {overlay && (
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  tone === 'dark'
                    ? 'linear-gradient(to top, rgba(40,38,37,0.72) 0%, rgba(40,38,37,0.25) 45%, transparent 75%)'
                    : 'linear-gradient(to top, rgba(245,244,241,0.92) 0%, rgba(245,244,241,0.45) 45%, transparent 75%)',
              }}
            />
          )}
        </>
      ) : (
        // Estado provisional: marco editorial sobrio, nunca "imagen rota".
        <div
          className={`absolute inset-0 border ${frameBorder} ${frameBg}`}
          role="presentation"
        >
          <Reticula tone={tone} />
          {label && (
            <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 p-4">
              <span
                aria-hidden
                className="h-[6px] w-[6px] shrink-0"
                style={{ background: 'var(--color-k-terracotta)' }}
              />
              <span
                className={`k-caption text-[0.625rem] uppercase tracking-[0.22em] ${labelColor}`}
              >
                {label}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
