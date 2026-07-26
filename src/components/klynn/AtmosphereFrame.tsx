import type { ReactNode } from 'react'

/**
 * AtmosphereFrame — tratamiento atmosférico para slots sin foto todavía.
 *
 * Misma técnica aprobada en §5 (Universo): la "vida" viene de la LUZ y el
 * ACENTO, no de un bloque de color plano. Dos luces radiales (estudio arriba +
 * reflejo de color de la categoría/concepto abajo), borde y sombra tintados con
 * el acento, y un halo suave que responde al hover. Coherente con §5 pero con
 * variante para tono OSCURO (§4) para que también respire sobre grafito.
 *
 * Acentos: exclusivamente tokens ya existentes en globals.css (o mezclas de
 * ellos). Sin degradados lineales genéricos, sin neón, sin glassmorphism.
 * Cuando llegue la foto real, el consumidor renderiza `MediaSlot` en su lugar.
 */
export default function AtmosphereFrame({
  accent,
  label,
  tone = 'light',
  className = '',
  children,
}: {
  /** Color de acento (token de marca o color-mix de tokens). */
  accent: string
  /** Etiqueta discreta inferior (tick + texto). */
  label?: string
  tone?: 'light' | 'dark'
  /** Debe fijar la proporción (aspect-*) del contenedor. */
  className?: string
  children?: ReactNode
}) {
  const light = tone === 'light'
  return (
    <div
      className={`group relative overflow-hidden transition-[box-shadow,transform] duration-500 ease-out hover:-translate-y-[2px] ${className}`}
      style={{
        backgroundColor: light
          ? 'var(--color-k-surface-raised)'
          : 'color-mix(in srgb, var(--color-k-graphite) 90%, white)',
        backgroundImage: [
          // Reflejo de color del concepto desde la base (luz rebotada, sutil).
          `radial-gradient(115% 78% at 50% 116%, color-mix(in srgb, ${accent} ${light ? '15%' : '28%'}, transparent), transparent 60%)`,
          // Luz de estudio desde arriba (brillo material, separación del fondo).
          light
            ? 'radial-gradient(135% 92% at 50% -14%, rgba(255,255,255,0.96), transparent 56%)'
            : 'radial-gradient(135% 92% at 50% -14%, rgba(255,255,255,0.10), transparent 55%)',
        ].join(', '),
        border: `1px solid color-mix(in srgb, ${accent} ${light ? '24%' : '34%'}, ${light ? 'var(--color-k-border)' : 'rgba(255,255,255,0.14)'})`,
        boxShadow: light
          ? `0 16px 36px -20px color-mix(in srgb, ${accent} 42%, rgba(40,38,37,0.55)), inset 0 1px 0 rgba(255,255,255,0.65)`
          : `0 18px 42px -22px color-mix(in srgb, ${accent} 46%, rgba(0,0,0,0.6)), inset 0 1px 0 rgba(255,255,255,0.06)`,
      }}
    >
      {/* Halo de luz de color en la esquina — profundidad y deseo, crece en hover. */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-12 h-32 w-32 rounded-full opacity-70 blur-2xl transition-opacity duration-700 group-hover:opacity-100"
        style={{ background: `color-mix(in srgb, ${accent} ${light ? '26%' : '34%'}, transparent)` }}
      />
      {label && (
        <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 p-4">
          <span aria-hidden className="h-[7px] w-[7px]" style={{ background: accent }} />
          <span
            className={`k-caption text-[0.6875rem] uppercase tracking-[0.22em] ${light ? 'text-[var(--color-k-graphite)]' : 'text-[var(--color-k-white)]'}`}
            style={light ? undefined : { opacity: 0.82 }}
          >
            {label}
          </span>
        </div>
      )}
      {children}
    </div>
  )
}
