import { Container, Section } from '@/design-system/primitives'
import Reveal from '@/design-system/Reveal'
import RevealGroup from '@/design-system/RevealGroup'
import MediaSlot from './MediaSlot'
import { siteImages } from '@/config/site-images'
import type { BrandImageAsset } from '@/config/site-images'

/**
 * §5 — El universo KLYNN. Categorías como universos comerciales, no como lista.
 *
 * Cinco categorías prioritarias con imagen editorial reconocible (misma
 * dirección de arte). Las futuras aparecen SOLO en texto, con menor jerarquía,
 * bajo "EN EL HORIZONTE": sin "Próximamente", sin fechas y sin sugerir
 * disponibilidad (en categories.ts todas están `activa: false`).
 *
 * El id "ecosistema" se conserva: es el ancla del enlace "Categorías" del nav.
 */

interface Tile {
  nombre: string
  descriptor: string
  asset: BrandImageAsset
}

const PRINCIPALES: Tile[] = [
  { nombre: 'CLEAN', descriptor: 'Cuidado mejor resuelto.', asset: siteImages.categoryClean },
  { nombre: 'HOME', descriptor: 'Esenciales para vivir.', asset: siteImages.categoryHome },
  { nombre: 'KITCHEN', descriptor: 'Función todos los días.', asset: siteImages.categoryKitchen },
  { nombre: 'STORAGE', descriptor: 'Orden que permanece.', asset: siteImages.categoryStorage },
  { nombre: 'TECH', descriptor: 'Tecnología sin ruido.', asset: siteImages.categoryTech },
]

const HORIZONTE = ['PET', 'WELLNESS', 'OUTDOOR', 'AUTOMOTIVE', 'TRAVEL']

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
              <MediaSlot
                asset={c.asset}
                sizes="(min-width: 1024px) 18vw, (min-width: 640px) 30vw, 45vw"
                label={c.nombre}
                tone="light"
                className="aspect-[4/5] w-full"
              />
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
