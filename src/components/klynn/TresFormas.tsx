import { Container, Section } from '@/design-system/primitives'
import Reveal from '@/design-system/Reveal'
import RevealGroup from '@/design-system/RevealGroup'

/**
 * Tres formas de actuar. Evita que KLYNN parezca solo un curador o revendedor:
 * también mejora y crea. Tono oscuro para dar peso a la triple capacidad.
 */

const FORMAS = [
  {
    t: 'Seleccionamos',
    d: 'Cuando la mejor solución ya existe, la encontramos, la verificamos y la respaldamos con nuestro nombre.',
  },
  {
    t: 'Mejoramos',
    d: 'Cuando existe una oportunidad real y demostrable, refinamos el objeto hasta que cumple el estándar.',
  },
  {
    t: 'Creamos',
    d: 'Cuando ninguna alternativa cumple el estándar, desarrollamos una nueva desde cero.',
  },
]

export default function TresFormas() {
  return (
    <Section id="tres-formas" rhythm="loose" tone="dark">
      <Container>
        <Reveal className="max-w-[44ch]">
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-[7px] w-[7px]" style={{ background: 'var(--color-k-terracotta)' }} />
            <span className="k-caption uppercase tracking-[0.28em] opacity-60">Tres formas de actuar</span>
          </div>
          <h2 className="k-h2 mt-14 text-[clamp(1.75rem,4.4vw,3.25rem)] leading-[1.1] tracking-[-0.018em]">
            Seleccionar. Mejorar. Crear.
          </h2>
        </Reveal>

        <RevealGroup as="ul" className="mt-16 grid gap-x-12 gap-y-14 sm:mt-20 sm:grid-cols-3">
          {FORMAS.map(f => (
            <li key={f.t}>
              <span aria-hidden className="block h-[3px] w-10" style={{ background: 'var(--color-k-terracotta)' }} />
              <h3 className="k-h3 mt-8 text-[1.375rem] leading-[1.3]">{f.t}</h3>
              <p className="k-body mt-4 max-w-[40ch] text-[1rem] leading-[1.7] opacity-70">{f.d}</p>
            </li>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  )
}
