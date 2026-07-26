import Link from 'next/link'
import { Container, Section } from '@/design-system/primitives'
import TrackedLink from './TrackedLink'
import { AnalyticsEvents } from '@/lib/analytics'
import BrandImage, { hasAsset } from './BrandImage'
import { siteImages } from '@/config/site-images'

/**
 * Hero KLYNN — el primer fold, presentación de master brand multicategoría.
 *
 * Mensaje: el mundo ya tiene demasiadas opciones; KLYNN encuentra la correcta.
 * El fold está pensado alrededor de una composición editorial del UNIVERSO
 * KLYNN (varios objetos cotidianos de distintas categorías, una misma
 * materialidad), no de un único objeto decorativo. Mientras la foto no exista
 * (siteImages.heroWide/heroPortrait = null), compone en modo tipográfico
 * sobre la retícula, sin placeholder. Cuando el activo entre, se vuelve fondo
 * a sangre completa con velo de legibilidad — sin tocar este archivo.
 *
 * Art direction independiente desktop (16:9) / mobile (4:5): cada recorte
 * conserva los objetos fundamentales. Sistema visual congelado: retícula,
 * terracota como firma, banda de datos.
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
  const showWide = hasAsset(siteImages.heroWide)
  const showPortrait = hasAsset(siteImages.heroPortrait)
  const hasImage = showWide || showPortrait

  return (
    <Section rhythm="hero" tone="light" className="relative overflow-hidden">
      {/* Fondo: retícula mientras no hay foto; composición a sangre cuando llega. */}
      {!hasImage && <Reticula />}

      {hasImage && (
        <div aria-hidden={false} className="pointer-events-none absolute inset-0">
          {showWide && (
            <div className="absolute inset-0 hidden sm:block">
              <BrandImage
                asset={siteImages.heroWide}
                fill
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
          )}
          {showPortrait && (
            <div className="absolute inset-0 sm:hidden">
              <BrandImage
                asset={siteImages.heroPortrait}
                fill
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
          )}
          {/* Velo de legibilidad — mantiene el grafito legible sobre cualquier foto. */}
          <span
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, rgba(245,244,241,0.94) 0%, rgba(245,244,241,0.62) 34%, rgba(245,244,241,0.15) 62%, transparent 100%)',
            }}
          />
        </div>
      )}

      {/* Contenido — estático (sin reveal): es el primer fold y el elemento LCP. */}
      {/* En móvil el fold se dimensiona por min-height, contra la que `h-full`
          no resuelve: el alto real lo aporta el estirado flex + `grow`. */}
      <Container className="relative flex flex-col pb-0 sm:h-full">
        <div className="flex grow flex-col justify-end">
          <div className="mb-auto flex items-center gap-3 pt-28 sm:pt-40">
            <span
              aria-hidden
              className="h-[7px] w-[7px]"
              style={{ background: 'var(--color-k-terracotta)' }}
            />
            <span className="k-caption uppercase tracking-[0.28em] text-[var(--color-k-graphite)] opacity-70">
              KLYNN
            </span>
          </div>

          <h1 className="k-h1 max-w-[18ch] pb-6 text-[clamp(2.25rem,6vw,5.25rem)] leading-[1.02] tracking-[-0.02em] sm:pb-8">
            <span className="text-[var(--color-k-ink-muted-aa)]">El mundo ya tiene demasiadas opciones.</span>
            <br />
            KLYNN encuentra la correcta
            <span style={{ color: 'var(--color-k-terracotta)' }}>.</span>
          </h1>

          <p className="k-body max-w-[52ch] pb-8 text-[1.0625rem] leading-[1.7] text-[var(--color-k-graphite)] opacity-70 sm:pb-10">
            Seleccionamos, mejoramos o creamos objetos cotidianos diseñados para
            merecer tu confianza.
          </p>

          <div className="flex flex-col gap-4 pb-8 sm:flex-row sm:items-center">
            <TrackedLink
              href="/#ecosistema"
              event={AnalyticsEvents.PrimaryCtaClick}
              eventProps={{ source: 'hero' }}
              className="k-button k-ui-transition-opacity inline-block bg-[var(--color-k-graphite)] px-9 py-4 text-center text-[var(--color-k-white)] hover:opacity-90"
            >
              Explora KLYNN
            </TrackedLink>
            <Link
              href="/inversionistas"
              className="k-caption k-ui-transition-opacity inline-flex items-center gap-2 self-start text-[0.6875rem] uppercase tracking-[0.2em] text-[var(--color-k-ink-muted-aa)] hover:opacity-70 sm:self-auto"
            >
              Inversionistas <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="border-t border-[var(--color-k-gray-light)]">
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
      </Container>
    </Section>
  )
}
