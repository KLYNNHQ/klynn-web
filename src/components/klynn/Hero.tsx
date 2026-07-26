import Link from 'next/link'
import { Container, Section } from '@/design-system/primitives'
import TrackedLink from './TrackedLink'
import { AnalyticsEvents } from '@/lib/analytics'
import BrandImage, { hasAsset } from './BrandImage'
import { siteImages } from '@/config/site-images'

/**
 * Hero KLYNN — el primer fold.
 *
 * Mensaje central de la marca: el mundo ya tiene demasiadas opciones; KLYNN
 * existe para encontrar la correcta. El fold reserva la zona del objeto
 * (siteImages.heroPrimary): mientras el render de Lovart no exista, compone en
 * modo tipográfico sin placeholder; cuando el activo entre, adopta la
 * composición asimétrica con el objeto a la derecha — sin tocar este archivo.
 *
 * Sistema visual congelado: retícula, terracota como firma, banda de datos.
 */

const SPEC = [
  { i: '01', label: 'Un estándar' },
  { i: '02', label: 'Múltiples categorías' },
  { i: '03', label: 'Tu confianza' },
]

function Reticula() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.32] sm:hidden"
        style={{
          backgroundImage:
            'repeating-linear-gradient(to right, var(--color-k-gray-light) 0 1px, transparent 1px calc(100% / 4))',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden opacity-[0.32] sm:block"
        style={{
          backgroundImage:
            'repeating-linear-gradient(to right, var(--color-k-gray-light) 0 1px, transparent 1px calc(100% / 12))',
        }}
      />
    </>
  )
}

export default function Hero() {
  const showObject = hasAsset(siteImages.heroPrimary)

  // Estático (sin reveal): es el primer fold y el elemento LCP. Gatearlo tras
  // JS con opacity:0 retrasaba el LCP en móvil. Se renderiza visible de inmediato.
  const content = (
    <div className="flex h-full flex-col justify-end">
      <div key="eyebrow" className="mb-auto flex items-center gap-3 pt-28 sm:pt-40">
        <span
          aria-hidden
          className="h-[7px] w-[7px]"
          style={{ background: 'var(--color-k-terracotta)' }}
        />
        <span className="k-caption uppercase tracking-[0.28em] text-[var(--color-k-graphite)] opacity-70">
          KLYNN
        </span>
      </div>

      <h1
        key="claim"
        className="k-h1 max-w-[18ch] pb-6 text-[clamp(2.25rem,6vw,5.25rem)] leading-[1.02] tracking-[-0.02em] sm:pb-8"
      >
        <span className="text-[var(--color-k-ink-muted-aa)]">El mundo ya tiene demasiadas opciones.</span>
        <br />
        KLYNN existe para encontrar la correcta
        <span style={{ color: 'var(--color-k-terracotta)' }}>.</span>
      </h1>

      <p
        key="sub"
        className="k-body max-w-[52ch] pb-8 text-[1.0625rem] leading-[1.7] text-[var(--color-k-graphite)] opacity-70 sm:pb-10"
      >
        Investigamos, comparamos, seleccionamos, mejoramos y creamos objetos
        cotidianos que merecen una sola cosa: tu confianza.
      </p>

      <div key="cta" className="flex flex-col gap-4 pb-8 sm:flex-row sm:items-center">
        <TrackedLink
          href="/nuestro-criterio"
          event={AnalyticsEvents.PrimaryCtaClick}
          eventProps={{ source: 'hero' }}
          className="k-button k-ui-transition-opacity inline-block bg-[var(--color-k-graphite)] px-9 py-4 text-center text-[var(--color-k-white)] hover:opacity-90"
        >
          Cómo decide KLYNN
        </TrackedLink>
        <Link
          href="/inversionistas"
          className="k-button k-ui-transition-colors inline-block border border-[var(--color-k-border-strong)] px-9 py-4 text-center text-[var(--color-k-graphite)] hover:border-[var(--color-k-graphite)]"
        >
          Inversionistas
        </Link>
      </div>

      <div key="spec" className="border-t border-[var(--color-k-gray-light)]">
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 py-6 sm:gap-x-12">
          {SPEC.map((s, i) => (
            <li
              key={s.i}
              className={`flex items-baseline gap-3 ${i === 2 ? 'hidden sm:flex' : ''}`}
            >
              <span className="k-caption text-[0.625rem] tracking-[0.2em] text-[var(--color-k-ink-muted-aa)]">
                {s.i}
              </span>
              <span className="k-caption text-[0.6875rem] uppercase tracking-[0.2em] text-[var(--color-k-graphite)] opacity-70">
                {s.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )

  return (
    <Section rhythm="hero" tone="light" className="relative overflow-hidden">
      <Reticula />
      {showObject ? (
        <Container className="relative grid h-full grid-cols-1 items-end gap-x-8 pb-0 lg:grid-cols-[minmax(0,1fr)_minmax(0,38%)]">
          {content}
          <div className="hidden self-end lg:block">
            <div className="relative aspect-[4/5] w-full">
              <BrandImage
                asset={siteImages.heroPrimary}
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-contain object-bottom"
              />
            </div>
          </div>
        </Container>
      ) : (
        <Container className="relative h-full pb-0">{content}</Container>
      )}
    </Section>
  )
}
