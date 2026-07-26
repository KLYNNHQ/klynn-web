import { Container, Section } from '@/design-system/primitives'
import Reveal from '@/design-system/Reveal'
import RevealGroup from '@/design-system/RevealGroup'
import MediaSlot from './MediaSlot'
import { siteImages } from '@/config/site-images'

/**
 * Los objetos, en un mismo registro.
 *
 * Tres visualizaciones de producto aislado —CLEAN en feature, KITCHEN y TECH
 * en pareja— que comparten fondo, escala y tratamiento. La coherencia entre
 * ellas es el argumento del bloque: un mismo criterio aplicado a objetos que
 * no se parecen.
 *
 * Las dos escenas ambientales anteriores (mobiliario de interior y sala de
 * exterior) se retiraron: eran fotografía de interiorismo, no de objeto, y
 * contradecían la tesis de la marca. Su registro —habitación, mobiliario,
 * presencia humana— queda fuera del sistema visual.
 *
 * Textos SIEMPRE en HTML, nunca sobre la foto. Sin precios, specs, nombres de
 * producto ni fechas: son conceptos en desarrollo.
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

        {/* Ritmo 2 — KITCHEN + TECH: pareja de productos aislados. */}
        <RevealGroup as="ul" className="mt-16 grid gap-x-12 gap-y-12 sm:mt-24 sm:grid-cols-2">
          <li>
            <MediaSlot
              asset={siteImages.campaignKitchen}
              sizes="(min-width: 640px) 45vw, 100vw"
              tone="light"
              imgClassName="object-cover object-center"
              className="aspect-square w-full bg-[var(--color-k-white)]"
            />
            <h3 className="k-h3 mt-6 text-[1.375rem] leading-[1.15] text-[var(--color-k-graphite)]">KITCHEN</h3>
            <p className="k-body mt-2 text-[1rem] leading-[1.6] text-[var(--color-k-ink-muted-aa)]">
              Función todos los días.
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
