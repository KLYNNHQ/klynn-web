import { Container, Section } from '@/design-system/primitives'
import BrandImage, { hasAsset } from './BrandImage'
import { siteImages } from '@/config/site-images'

/**
 * Hero KLYNN — el primer fold.
 *
 * Decisiones de dirección de arte:
 *
 * 1. RETÍCULA VISIBLE. En diseño industrial la retícula es el mensaje: dice
 *    que existe un sistema detrás. Sustituye al vacío indiferenciado por
 *    estructura medida.
 *
 * 2. COMPOSICIÓN ANCLADA, NO CENTRADA. El bloque se apoya sobre una regla
 *    horizontal en el tercio inferior. El blanco es decisión, no residuo.
 *
 * 3. TERRACOTA COMO FIRMA, NO COMO DECORACIÓN. Apariciones mínimas y exactas.
 *    Un color propietario se reconoce por precisión, no por cantidad.
 *
 * 4. BANDA DE ESPECIFICACIÓN. Registro micro-tipográfico tipo ficha técnica.
 *    Densidad y precisión sin ruido.
 *
 * 5. EL OBJETO. El primer fold reserva una zona para el objeto-manifiesto
 *    KLYNN. La imagen vive en el manifiesto `siteImages.heroPrimary`:
 *      - Mientras el render de Lovart no exista, el fold compone en modo
 *        TIPOGRÁFICO a todo el ancho (sin placeholder, sin hueco).
 *      - Cuando el activo entre al manifiesto, el fold adopta AUTOMÁTICAMENTE
 *        la composición ASIMÉTRICA con el objeto a la derecha. Este archivo
 *        no se toca: el reemplazo es una línea en site-images.ts.
 *
 * 6. TODO EN ESPAÑOL. La experiencia completa habla español, sin excepción.
 */

const SPEC = [
  { i: '01', label: 'México' },
  { i: '02', label: 'Diez categorías' },
  { i: '03', label: 'Un estándar' },
]

function Reticula() {
  return (
    <>
      {/* 4 columnas por debajo de 640px; 12 en desktop. Hairline casi inaudible. */}
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

function Index() {
  return (
    <div className="k-rise k-rise-1 mb-auto flex items-center gap-3 pt-28 sm:pt-40">
      <span
        aria-hidden
        className="h-[7px] w-[7px]"
        style={{ background: 'var(--color-k-terracotta)' }}
      />
      <span className="k-caption uppercase tracking-[0.28em] text-[var(--color-k-graphite)] opacity-70">
        La marca
      </span>
    </div>
  )
}

function Claim() {
  return (
    // COPY PROVISIONAL — el claim definitivo llega en la fase de Copy v1.0.
    <h1 className="k-rise k-rise-2 k-h1 max-w-[14ch] pb-8 text-[clamp(3rem,8.4vw,7.25rem)] leading-[0.98] tracking-[-0.022em] sm:pb-10">
      Lo esencial,
      <br />
      bien hecho
      <span style={{ color: 'var(--color-k-terracotta)' }}>.</span>
    </h1>
  )
}

function SpecBand() {
  return (
    <div className="k-rise k-rise-3">
      <div className="h-px w-full bg-[var(--color-k-gray-light)]" />
      <div className="flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 sm:gap-x-12">
          {SPEC.map((s, i) => (
            <li
              key={s.i}
              // En móvil la banda se satura y parte en dos líneas: se conservan
              // los dos primeros datos; el tercero aporta menos en un primer contacto.
              className={`flex items-baseline gap-3 ${i === 2 ? 'hidden sm:flex' : ''}`}
            >
              <span className="k-caption text-[0.625rem] tracking-[0.2em] text-[var(--color-k-graphite)] opacity-40">
                {s.i}
              </span>
              <span className="k-caption text-[0.6875rem] uppercase tracking-[0.2em] text-[var(--color-k-graphite)] opacity-70">
                {s.label}
              </span>
            </li>
          ))}
        </ul>

        <span className="k-caption hidden items-center gap-3 text-[0.625rem] uppercase tracking-[0.2em] text-[var(--color-k-graphite)] opacity-40 sm:flex">
          Descubre
          <span aria-hidden className="block h-px w-10 bg-current" />
        </span>
      </div>
    </div>
  )
}

export default function Hero() {
  const showObject = hasAsset(siteImages.heroPrimary)

  return (
    <Section rhythm="hero" tone="light" className="relative overflow-hidden">
      <Reticula />

      {showObject ? (
        /* ─── Modo ASIMÉTRICO: copy a la izquierda, objeto a la derecha ─── */
        <Container className="relative grid h-full grid-cols-1 items-end gap-x-8 pb-0 lg:grid-cols-[minmax(0,1fr)_minmax(0,40%)]">
          <div className="flex h-full flex-col justify-end">
            <Index />
            <Claim />
            <SpecBand />
          </div>
          {/* Zona del objeto — proporción 4:5 reservada; el objeto llega desde
              el fondo, alineado a la base, respirando contra la retícula. */}
          <div className="hidden self-end lg:block">
            <div className="relative aspect-[4/5] w-full">
              <BrandImage
                asset={siteImages.heroPrimary}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-contain object-bottom"
              />
            </div>
          </div>
        </Container>
      ) : (
        /* ─── Modo TIPOGRÁFICO: sin render aún. Sin placeholder, sin hueco. ─── */
        <Container className="relative flex h-full flex-col justify-end pb-0">
          <Index />
          <Claim />
          <SpecBand />
        </Container>
      )}
    </Section>
  )
}
