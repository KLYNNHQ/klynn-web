import Link from 'next/link'
import { Container, Section } from '@/design-system/primitives'
import RevealGroup from '@/design-system/RevealGroup'

/**
 * Cierre de la home: visión + rutas de contacto diferenciadas.
 *
 * Las tarjetas llevan a rutas reales del sitio corporativo (cada audiencia a su
 * página o al formulario). Sin enlaces muertos.
 */

const RUTAS = [
  { t: 'Consumidores', d: 'Conoce KLYNN.', href: '/contacto#mensaje' },
  { t: 'Inversionistas', d: 'Conoce la oportunidad.', href: '/inversionistas' },
  { t: 'Fabricantes y proveedores', d: 'Trabaja con KLYNN.', href: '/proveedores-y-socios' },
  { t: 'Socios comerciales', d: 'Explora una alianza.', href: '/proveedores-y-socios#colaborar' },
  { t: 'Prensa y colaboraciones', d: 'Cuenta la historia.', href: '/contacto#mensaje' },
]

export default function Contacto() {
  return (
    <Section id="contacto" rhythm="loose" tone="dark">
      <Container>
        <RevealGroup className="max-w-[40ch]">
          <div key="eyebrow" className="flex items-center gap-3">
            <span aria-hidden className="h-[7px] w-[7px]" style={{ background: 'var(--color-k-terracotta)' }} />
            <span className="k-caption uppercase tracking-[0.28em] opacity-60">La visión</span>
          </div>
          <h2 key="claim" className="k-h1 mt-14 text-[clamp(1.875rem,5.2vw,4.25rem)] leading-[1.08] tracking-[-0.02em]">
            Una marca. Un estándar.
            <br />
            Mejores decisiones para la vida cotidiana
            <span style={{ color: 'var(--color-k-terracotta)' }}>.</span>
          </h2>
          <p key="body" className="k-body mt-10 max-w-[46ch] text-[1.0625rem] leading-[1.75] opacity-70">
            KLYNN se construye para décadas, objeto por objeto. Cada experiencia
            satisfactoria permite extender el mismo criterio a una nueva categoría.
          </p>
        </RevealGroup>

        <RevealGroup as="ul" className="mt-16 grid gap-x-8 gap-y-4 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
          {RUTAS.map(r => (
            <li key={r.t}>
              <Link
                href={r.href}
                className="k-ui-transition-colors flex h-full flex-col justify-between gap-6 border border-white/15 p-6 hover:border-white/40"
              >
                <span className="k-h3 text-[1.0625rem] leading-[1.25]">{r.t}</span>
                <span className="k-caption text-[0.6875rem] uppercase tracking-[0.16em] opacity-60">
                  {r.d} →
                </span>
              </Link>
            </li>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  )
}
