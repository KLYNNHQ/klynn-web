import { Container, Section } from '@/design-system/primitives'
import Reveal from '@/design-system/Reveal'
import RevealGroup from '@/design-system/RevealGroup'
import MediaSlot from './MediaSlot'
import { hasAsset } from './BrandImage'
import { siteImages } from '@/config/site-images'
import type { BrandImageAsset } from '@/config/site-images'

/**
 * §5 — El universo KLYNN. Categorías como universos comerciales, no como lista.
 *
 * Cinco categorías prioritarias con imagen editorial reconocible (misma
 * dirección de arte). Mientras la foto real no exista, cada tile NO se muestra
 * como un marco vacío gris: adopta una ATMÓSFERA de categoría —luz de estudio
 * cálida + un acento oficial de marca (lámina 06) reflejado con moderación +
 * profundidad con sombra tintada—, para que la sección se sienta lujosa y viva
 * sin caer en color chillón ni degradados digitales. Todas comparten la misma
 * base neutra cálida: son universos reconocibles de una misma marca. Cuando el
 * activo llegue, el tile vuelve a `MediaSlot` con la foto (una línea en el
 * manifest), sin tocar este componente.
 *
 * Las futuras aparecen SOLO en texto, con menor jerarquía, bajo "EN EL
 * HORIZONTE": sin "Próximamente", sin fechas y sin sugerir disponibilidad.
 *
 * El id "ecosistema" se conserva: es el ancla del enlace "Categorías" del nav.
 */

interface Tile {
  nombre: string
  descriptor: string
  asset: BrandImageAsset
  /** Acento de categoría (tokens de marca, lámina 06). STORAGE = pizarra mineral. */
  accent: string
}

const PRINCIPALES: Tile[] = [
  { nombre: 'CLEAN', descriptor: 'Cuidado mejor resuelto.', asset: siteImages.categoryClean, accent: 'var(--color-k-clean)' },
  { nombre: 'HOME', descriptor: 'Esenciales para vivir.', asset: siteImages.categoryHome, accent: 'var(--color-k-home)' },
  { nombre: 'KITCHEN', descriptor: 'Función todos los días.', asset: siteImages.categoryKitchen, accent: 'var(--color-k-kitchen)' },
  { nombre: 'STORAGE', descriptor: 'Orden que permanece.', asset: siteImages.categoryStorage, accent: 'color-mix(in srgb, var(--color-k-bath) 45%, var(--color-k-graphite))' },
  { nombre: 'TECH', descriptor: 'Tecnología sin ruido.', asset: siteImages.categoryTech, accent: 'var(--color-k-tech)' },
]

const HORIZONTE = ['PET', 'WELLNESS', 'OUTDOOR', 'AUTOMOTIVE', 'TRAVEL']

/**
 * Tile atmosférico de categoría (estado sin foto). La "vida" viene de la luz y
 * el acento, no de un bloque de color: dos luces radiales (estudio cálido
 * arriba, reflejo de color de la categoría abajo), borde y sombra tintados con
 * el acento, y un halo suave que responde al hover. Sin degradados lineales
 * genéricos, sin neón.
 */
function CategoryTile({ nombre, accent }: { nombre: string; accent: string }) {
  return (
    <div
      className="group relative aspect-[4/5] w-full overflow-hidden transition-[box-shadow,transform] duration-500 ease-out hover:-translate-y-[2px]"
      style={{
        backgroundColor: 'var(--color-k-surface-raised)',
        backgroundImage: [
          // Reflejo de color de la categoría, muy sutil, desde la base (luz rebotada).
          `radial-gradient(115% 78% at 50% 116%, color-mix(in srgb, ${accent} 15%, transparent), transparent 60%)`,
          // Luz de estudio cálida desde arriba (brillo material, separación).
          `radial-gradient(135% 92% at 50% -14%, rgba(255,255,255,0.96), transparent 56%)`,
        ].join(', '),
        border: `1px solid color-mix(in srgb, ${accent} 24%, var(--color-k-border))`,
        boxShadow:
          '0 16px 36px -20px color-mix(in srgb, ' + accent + ' 42%, rgba(40,38,37,0.55)), inset 0 1px 0 rgba(255,255,255,0.65)',
      }}
    >
      {/* Halo de luz de color en la esquina — profundidad y deseo, crece en hover. */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-12 h-32 w-32 rounded-full opacity-70 blur-2xl transition-opacity duration-700 group-hover:opacity-100"
        style={{ background: `color-mix(in srgb, ${accent} 26%, transparent)` }}
      />
      {/* Etiqueta focal: tick en acento + nombre. */}
      <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 p-4">
        <span aria-hidden className="h-[7px] w-[7px]" style={{ background: accent }} />
        <span className="k-caption text-[0.6875rem] uppercase tracking-[0.22em] text-[var(--color-k-graphite)]">
          {nombre}
        </span>
      </div>
    </div>
  )
}

export default function Ecosistema() {
  return (
    <Section id="ecosistema" rhythm="loose" tone="light">
      <Container>
        <Reveal className="max-w-[48ch]">
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-[7px] w-[7px]" style={{ background: 'var(--color-k-terracotta)' }} />
            <span className="k-caption uppercase tracking-[0.28em] text-[var(--color-k-ink-muted-aa)]">
              El universo KLYNN
            </span>
          </div>
          <h2 className="k-h2 mt-14 text-[clamp(1.75rem,4.4vw,3.25rem)] leading-[1.1] tracking-[-0.018em]">
            Un estándar. Muchas categorías.
          </h2>
          <p className="k-body mt-8 max-w-[42ch] text-[1.0625rem] leading-[1.75] text-[var(--color-k-graphite)] opacity-70">
            Empezamos con foco y crecemos con disciplina.
          </p>
        </Reveal>

        {/* Cinco categorías principales, con imagen editorial reconocible. */}
        <RevealGroup as="ul" className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 sm:mt-20 sm:grid-cols-3 lg:grid-cols-5">
          {PRINCIPALES.map(c => (
            <li key={c.nombre} className="flex flex-col">
              {hasAsset(c.asset) ? (
                <MediaSlot
                  asset={c.asset}
                  sizes="(min-width: 1024px) 18vw, (min-width: 640px) 30vw, 45vw"
                  label={c.nombre}
                  tone="light"
                  className="aspect-[4/5] w-full"
                />
              ) : (
                <CategoryTile nombre={c.nombre} accent={c.accent} />
              )}
              <h3 className="k-h3 mt-5 text-[1.125rem] leading-[1.2] tracking-[-0.01em] text-[var(--color-k-graphite)]">
                {c.nombre}
              </h3>
              <p className="k-body mt-1 text-[0.875rem] leading-[1.5] text-[var(--color-k-ink-muted-aa)]">
                {c.descriptor}
              </p>
            </li>
          ))}
        </RevealGroup>

        {/* Futuras — solo texto, menor jerarquía. Sin disponibilidad implícita. */}
        <Reveal className="mt-20 border-t border-[var(--color-k-border)] pt-8 sm:mt-24">
          <span className="k-caption uppercase tracking-[0.24em] text-[var(--color-k-ink-muted-aa)]">
            En el horizonte
          </span>
          <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
            {HORIZONTE.map(n => (
              <li key={n}>
                <span className="k-body text-[0.9375rem] text-[var(--color-k-graphite)] opacity-55">{n}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </Section>
  )
}
