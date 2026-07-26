import { Container, Section } from '@/design-system/primitives'
import Reveal from '@/design-system/Reveal'
import RevealGroup from '@/design-system/RevealGroup'

/**
 * Diseño, materiales y durabilidad.
 *
 * Explica el CRITERIO con el que KLYNN desarrolla sus objetos, no una ficha
 * técnica ni una lista de materiales sueltos. Tres principios en prosa breve,
 * bajo una misma narrativa: cómo se decide un objeto KLYNN.
 *
 * COPY PROPUESTO — sujeto a tu revisión.
 */

const CRITERIOS = [
  {
    titulo: 'Se diseña por la función',
    texto:
      'Antes de la forma está el problema que resuelve. Quitamos todo lo que no cumple una función hasta que solo queda lo necesario.',
  },
  {
    titulo: 'Se elige el material honesto',
    texto:
      'El material correcto para cada uso, sin recubrimientos que aparenten lo que no son. Lo que se siente al tacto es lo que el objeto es.',
  },
  {
    titulo: 'Se construye para durar',
    texto:
      'Uniones, acabados y tolerancias pensados para años de uso. Diseñamos contra el reemplazo, no para la próxima temporada.',
  },
]

export default function Materiales() {
  return (
    <Section id="criterio" rhythm="loose" tone="raised">
      <Container>
        <Reveal className="max-w-[44ch]">
          <div className="flex items-center gap-3">
            <span
              aria-hidden
              className="h-[7px] w-[7px]"
              style={{ background: 'var(--color-k-terracotta)' }}
            />
            <span className="k-caption uppercase tracking-[0.28em] text-[var(--color-k-ink-muted-aa)]">
              El criterio
            </span>
          </div>
          <h2 className="k-h2 mt-14 text-[clamp(1.75rem,4.4vw,3.25rem)] leading-[1.1] tracking-[-0.018em]">
            Cómo se decide un objeto KLYNN.
          </h2>
        </Reveal>

        <RevealGroup as="ul" className="mt-20 grid gap-x-12 gap-y-14 sm:grid-cols-3">
          {CRITERIOS.map(c => (
            <li key={c.titulo}>
              <span
                aria-hidden
                className="block h-[3px] w-10 bg-[var(--color-k-graphite)]"
              />
              <h3 className="k-h3 mt-8 text-[1.375rem] leading-[1.3]">{c.titulo}</h3>
              <p className="k-body mt-4 max-w-[40ch] text-[1rem] leading-[1.7] text-[var(--color-k-graphite)] opacity-70">
                {c.texto}
              </p>
            </li>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  )
}
