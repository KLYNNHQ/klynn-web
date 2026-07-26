import { Container, Section } from '@/design-system/primitives'
import Reveal from '@/design-system/Reveal'
import RevealGroup from '@/design-system/RevealGroup'
import MediaSlot from './MediaSlot'
import { siteImages } from '@/config/site-images'

/**
 * Bloque de prueba de integración de la campaña visual KLYNN.
 *
 * Muestra las cinco imágenes finales con ritmo entre escalas —producto
 * aislado (CLEAN), pareja de productos (EVERYDAY/TECH) y escenas ambientales
 * (HOME/OUTDOOR)— usando exclusivamente el sistema visual aprobado (Section,
 * Container, Reveal, MediaSlot). Textos SIEMPRE en HTML, nunca sobre la foto.
 *
 * OUTDOOR es categoría futura: no se afirma disponibilidad. Una sola nota
 * conceptual cierra el bloque. Sin precios, specs, nombres de producto ni
 * fechas.
 */

export default function CampaignTest() {
  return (
    <Section id="campana" rhythm="loose" tone="light">
      <Container>
        <Reveal className="max-w-[48ch]">
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-[7px] w-[7px]" style={{ background: 'var(--color-k-terracotta)' }} />
            <span className="k-caption uppercase tracking-[0.28em] text-[var(--color-k-ink-muted-aa)]">
              El universo, en imágenes
            </span>
          </div>
          <h2 className="k-h2 mt-14 text-[clamp(1.75rem,4.4vw,3.25rem)] leading-[1.1] tracking-[-0.018em]">
            Un mismo criterio, muchos objetos.
          </h2>
        </Reveal>

        {/* Ritmo 1 — CLEAN: producto protagonista, feature a dos columnas. */}
        <div className="mt-16 grid items-center gap-x-16 gap-y-10 sm:mt-24 lg:grid-cols-[minmax(0,30ch)_minmax(0,1fr)]">
          <Reveal>
            <h3 className="k-h3 text-[1.75rem] leading-[1.1] tracking-[-0.01em] text-[var(--color-k-graphite)]">
              CLEAN
            </h3>
            <p className="k-body mt-3 max-w-[28ch] text-[1.0625rem] leading-[1.6] text-[var(--color-k-ink-muted-aa)]">
              Limpieza, mejor resuelta.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <MediaSlot
              asset={siteImages.campaignClean}
              sizes="(min-width: 1024px) 60vw, 100vw"
              tone="light"
              imgClassName="object-cover object-center"
              className="aspect-square w-full bg-[var(--color-k-white)]"
            />
          </Reveal>
        </div>

        {/* Ritmo 2 — EVERYDAY + TECH: pareja de productos aislados. */}
        <RevealGroup as="ul" className="mt-16 grid gap-x-12 gap-y-12 sm:mt-24 sm:grid-cols-2">
          <li>
            <MediaSlot
              asset={siteImages.campaignEveryday}
              sizes="(min-width: 640px) 45vw, 100vw"
              tone="light"
              imgClassName="object-cover object-center"
              className="aspect-square w-full bg-[var(--color-k-white)]"
            />
            <h3 className="k-h3 mt-6 text-[1.375rem] leading-[1.15] text-[var(--color-k-graphite)]">EVERYDAY</h3>
            <p className="k-body mt-2 text-[1rem] leading-[1.6] text-[var(--color-k-ink-muted-aa)]">
              Diseñado para acompañarte.
            </p>
          </li>
          <li>
            <MediaSlot
              asset={siteImages.campaignTech}
              sizes="(min-width: 640px) 45vw, 100vw"
              tone="light"
              imgClassName="object-cover object-center"
              className="aspect-square w-full bg-[var(--color-k-white)]"
            />
            <h3 className="k-h3 mt-6 text-[1.375rem] leading-[1.15] text-[var(--color-k-graphite)]">TECH</h3>
            <p className="k-body mt-2 text-[1rem] leading-[1.6] text-[var(--color-k-ink-muted-aa)]">
              Tecnología sin fricción.
            </p>
          </li>
        </RevealGroup>

        {/* Ritmo 3 — HOME + OUTDOOR: escenas ambientales, texto sobre la imagen
            con velo sutil (HTML, no incrustado). Conservan profundidad y escala. */}
        <RevealGroup as="ul" className="mt-16 grid gap-x-12 gap-y-12 sm:mt-24 sm:grid-cols-2">
          <li className="relative">
            <MediaSlot
              asset={siteImages.campaignHome}
              sizes="(min-width: 640px) 45vw, 100vw"
              tone="dark"
              overlay
              imgClassName="object-cover object-center"
              className="aspect-[4/5] w-full"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <h3 className="k-h3 text-[1.375rem] leading-[1.15] text-[var(--color-k-white)]">HOME</h3>
              <p className="k-body mt-1 text-[1rem] leading-[1.5] text-[var(--color-k-white)] opacity-85">
                Confort que permanece.
              </p>
            </div>
          </li>
          <li className="relative">
            <MediaSlot
              asset={siteImages.campaignOutdoor}
              sizes="(min-width: 640px) 45vw, 100vw"
              tone="dark"
              overlay
              imgClassName="object-cover object-center"
              className="aspect-[4/5] w-full"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <h3 className="k-h3 text-[1.375rem] leading-[1.15] text-[var(--color-k-white)]">OUTDOOR</h3>
              <p className="k-body mt-1 text-[1rem] leading-[1.5] text-[var(--color-k-white)] opacity-85">
                Vivir mejor, afuera.
              </p>
            </div>
          </li>
        </RevealGroup>

        {/* Nota conceptual única — no se repite por imagen. */}
        <Reveal className="mt-14 sm:mt-16">
          <p className="k-caption text-[0.6875rem] uppercase tracking-[0.2em] text-[var(--color-k-ink-muted-aa)]">
            Visualizaciones conceptuales. Productos en desarrollo.
          </p>
        </Reveal>
      </Container>
    </Section>
  )
}
