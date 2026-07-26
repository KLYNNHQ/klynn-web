import Link from 'next/link'
import { Container, Section } from '@/design-system/primitives'
import Reveal from '@/design-system/Reveal'
import RevealGroup from '@/design-system/RevealGroup'

/**
 * §6 — El estándar KLYNN, versión pública de la home: tres pilares, una frase
 * cada uno. La metodología completa (los diez criterios, el proceso) vive en
 * /nuestro-criterio; aquí NO se repiten seleccionar, comparar, probar, mejorar
 * ni crear. Componente propio de la home: <Estandar/> (diez criterios) se
 * conserva intacto para la página secundaria.
 */

const PILARES = [
  { t: 'Función real', d: 'Resuelve mejor.' },
  { t: 'Calidad comprobable', d: 'Se sostiene en el uso.' },
  { t: 'Diseño honesto', d: 'Es exactamente lo que parece.' },
]

export default function EstandarHome() {
  return (
    <Section id="estandar" rhythm="loose" tone="light">
      <Container>
        <Reveal className="max-w-[44ch]">
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-[7px] w-[7px]" style={{ background: 'var(--color-k-terracotta)' }} />
            <span className="k-caption uppercase tracking-[0.28em] text-[var(--color-k-ink-muted-aa)]">
              El estándar
            </span>
          </div>
          <h2 className="k-h2 mt-14 text-[clamp(1.75rem,4.4vw,3.25rem)] leading-[1.1] tracking-[-0.018em]">
            Tres cosas, siempre.
          </h2>
        </Reveal>

        <RevealGroup as="ul" className="mt-16 grid gap-x-12 gap-y-12 sm:mt-20 sm:grid-cols-3">
          {PILARES.map(p => (
            <li key={p.t}>
              <span aria-hidden className="block h-[3px] w-10" style={{ background: 'var(--color-k-terracotta)' }} />
              <h3 className="k-h3 mt-8 text-[1.375rem] leading-[1.3] text-[var(--color-k-graphite)]">{p.t}</h3>
              <p className="k-body mt-3 text-[1.0625rem] leading-[1.6] text-[var(--color-k-ink-muted-aa)]">{p.d}</p>
            </li>
          ))}
        </RevealGroup>

        <Reveal className="mt-16">
          <Link
            href="/nuestro-criterio"
            className="k-caption k-ui-transition-opacity inline-flex items-center gap-2 text-[0.6875rem] uppercase tracking-[0.2em] text-[var(--color-k-graphite)] hover:opacity-70"
          >
            <span aria-hidden className="h-[6px] w-[6px]" style={{ background: 'var(--color-k-terracotta)' }} />
            Conoce nuestro criterio <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </Container>
    </Section>
  )
}
