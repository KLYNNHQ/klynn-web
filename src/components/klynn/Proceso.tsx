import { Container, Section } from '@/design-system/primitives'
import Reveal from '@/design-system/Reveal'
import RevealGroup from '@/design-system/RevealGroup'

/**
 * Cómo decide KLYNN — el proceso, siete pasos. Es el primer asomo del futuro
 * KLYNN Decision System, sin convertir la landing en un manual interno.
 * Tono claro elevado (raised).
 */

const PASOS = [
  { n: '01', t: 'Descubrir', d: 'Mapeamos el mundo de un objeto cotidiano.' },
  { n: '02', t: 'Investigar', d: 'Estudiamos materiales, uso, marcas y fabricantes.' },
  { n: '03', t: 'Comparar', d: 'Enfrentamos las mejores alternativas bajo un mismo criterio.' },
  { n: '04', t: 'Probar', d: 'Verificamos en uso real, no en la ficha técnica.' },
  { n: '05', t: 'Seleccionar, mejorar o crear', d: 'Elegimos el camino según lo que exija el estándar.' },
  { n: '06', t: 'Aprobar', d: 'Solo avanza lo que supera cada criterio, sin excepción.' },
  { n: '07', t: 'Respaldar', d: 'Le ponemos el nombre KLYNN. La confianza es la firma.' },
]

export default function Proceso() {
  return (
    <Section id="proceso" rhythm="loose" tone="raised">
      <Container>
        <Reveal className="max-w-[44ch]">
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-[7px] w-[7px]" style={{ background: 'var(--color-k-terracotta)' }} />
            <span className="k-caption uppercase tracking-[0.28em] text-[var(--color-k-ink-muted-aa)]">
              Cómo decide KLYNN
            </span>
          </div>
          <h2 className="k-h2 mt-14 text-[clamp(1.75rem,4.4vw,3.25rem)] leading-[1.1] tracking-[-0.018em]">
            Un mismo criterio, paso a paso.
          </h2>
        </Reveal>

        <RevealGroup as="ol" className="mt-16 border-t border-[var(--color-k-border)] sm:mt-20">
          {PASOS.map(p => (
            <li
              key={p.n}
              className="grid grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-1 border-b border-[var(--color-k-border)] py-6 sm:grid-cols-[auto_minmax(0,22ch)_1fr] sm:py-7"
            >
              <span className="k-caption text-[0.625rem] tracking-[0.2em] text-[var(--color-k-ink-muted-aa)]">
                {p.n}
              </span>
              <h3 className="k-h3 text-[clamp(1.125rem,2.4vw,1.5rem)] leading-[1.2] tracking-[-0.01em] text-[var(--color-k-graphite)]">
                {p.t}
              </h3>
              <p className="k-body col-span-2 text-[0.9375rem] text-[var(--color-k-ink-muted-aa)] sm:col-span-1 sm:text-[1rem]">
                {p.d}
              </p>
            </li>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  )
}
