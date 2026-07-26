import { Container, Section } from '@/design-system/primitives'
import Reveal from '@/design-system/Reveal'
import RevealGroup from '@/design-system/RevealGroup'

/**
 * El estándar KLYNN — el criterio traducido a principios comprensibles.
 * No afirma certificaciones ni pruebas que aún no existen. Tono claro.
 */

const PRINCIPIOS = [
  { t: 'Función real', d: 'Resuelve un problema concreto, mejor que las alternativas.' },
  { t: 'Calidad comprobable', d: 'Se sostiene en el uso, no en la promesa.' },
  { t: 'Simplicidad de uso', d: 'Se entiende sin manual; hace lo que dice.' },
  { t: 'Materiales honestos', d: 'Lo que se siente al tacto es lo que el objeto es.' },
  { t: 'Durabilidad adecuada', d: 'Dura lo que debe durar, como consecuencia del criterio.' },
  { t: 'Precio defendible', d: 'Se puede justificar frente a lo que entrega.' },
  { t: 'Diseño atemporal', d: 'No envejece con la moda.' },
  { t: 'Experiencia consistente', d: 'Se comporta igual la primera vez y la número cien.' },
  { t: 'Mejora objetiva', d: 'Si lleva nuestro nombre, es porque supera lo que había.' },
  { t: 'Confianza acumulativa', d: 'Cada objeto debe justificar el siguiente.' },
]

export default function Estandar() {
  return (
    <Section id="estandar" rhythm="loose" tone="light">
      <Container>
        <Reveal className="max-w-[46ch]">
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-[7px] w-[7px]" style={{ background: 'var(--color-k-terracotta)' }} />
            <span className="k-caption uppercase tracking-[0.28em] text-[var(--color-k-ink-muted-aa)]">
              El estándar
            </span>
          </div>
          <h2 className="k-h2 mt-14 text-[clamp(1.75rem,4.4vw,3.25rem)] leading-[1.1] tracking-[-0.018em]">
            Qué debe cumplir un objeto para llevar el nombre KLYNN.
          </h2>
        </Reveal>

        <RevealGroup as="ul" className="mt-16 grid gap-x-12 gap-y-10 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
          {PRINCIPIOS.map(p => (
            <li key={p.t} className="border-t border-[var(--color-k-border)] pt-6">
              <h3 className="k-h3 text-[1.1875rem] leading-[1.3] text-[var(--color-k-graphite)]">{p.t}</h3>
              <p className="k-body mt-3 text-[0.9375rem] leading-[1.6] text-[var(--color-k-ink-muted-aa)]">{p.d}</p>
            </li>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  )
}
