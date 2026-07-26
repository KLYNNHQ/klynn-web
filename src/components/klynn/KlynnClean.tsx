import { Container, Section } from '@/design-system/primitives'
import Reveal from '@/design-system/Reveal'
import MediaSlot from './MediaSlot'
import { siteImages } from '@/config/site-images'

/**
 * §3 — KLYNN CLEAN. Materializa la primera oportunidad comercial: el cuidado
 * del hogar como punto de entrada de una marca multicategoría.
 *
 * La imagen (siteImages.cleanFamily) mostrará una familia conceptual de
 * limpieza (fibras, microfibras, cepillos, mopas, accesorios). La etiqueta
 * "EN DESARROLLO" es explícita y honesta: no se presentan productos
 * disponibles, empaques, precios ni especificaciones.
 */

export default function KlynnClean() {
  return (
    <Section id="clean" rhythm="loose" tone="raised">
      <Container>
        <div className="grid items-center gap-x-16 gap-y-12 lg:grid-cols-[minmax(0,34ch)_minmax(0,1fr)]">
          <Reveal>
            <div className="flex items-center gap-3">
              <span aria-hidden className="h-[7px] w-[7px]" style={{ background: 'var(--color-k-terracotta)' }} />
              <span className="k-caption uppercase tracking-[0.28em] text-[var(--color-k-ink-muted-aa)]">
                La primera categoría
              </span>
            </div>

            <h2 className="k-h2 mt-12 text-[clamp(1.75rem,4.4vw,3.25rem)] leading-[1.1] tracking-[-0.018em]">
              Empezamos por CLEAN.
            </h2>

            <p className="k-body mt-8 max-w-[40ch] text-[1.0625rem] leading-[1.75] text-[var(--color-k-graphite)] opacity-75">
              El cuidado del hogar es nuestro punto de entrada. Estamos
              desarrollando una primera familia de productos funcionales,
              honestos y mejor resueltos.
            </p>

            <p className="mt-10">
              <span className="inline-flex items-center gap-2 border border-[var(--color-k-border-strong)] px-4 py-2">
                <span aria-hidden className="h-[6px] w-[6px]" style={{ background: 'var(--color-k-terracotta)' }} />
                <span className="k-caption text-[0.625rem] uppercase tracking-[0.24em] text-[var(--color-k-graphite)]">
                  En desarrollo
                </span>
              </span>
            </p>
          </Reveal>

          <Reveal delay={120}>
            <MediaSlot
              asset={siteImages.cleanFamily}
              sizes="(min-width: 1024px) 60vw, 100vw"
              label="KLYNN CLEAN · familia en desarrollo"
              tone="light"
              className="aspect-[3/2] w-full"
            />
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
