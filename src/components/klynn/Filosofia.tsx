import { Container, Eyebrow, Heading, Section } from '@/design-system/primitives'

/**
 * Filosofía de marca.
 *
 * Tres principios, sin adornos. Es la sección que explica por qué KLYNN
 * puede fabricar una escoba y un cargador sin contradecirse: lo que une al
 * catálogo no es la industria, es el criterio.
 */

const PRINCIPIOS = [
  {
    n: '01',
    titulo: 'Función primero',
    texto:
      'Cada objeto empieza por el problema que resuelve. Lo que no cumple una función, sobra.',
  },
  {
    n: '02',
    titulo: 'Hecho para durar',
    texto:
      'Diseñamos contra el reemplazo. Materiales, uniones y acabados pensados para años de uso, no para una temporada.',
  },
  {
    n: '03',
    titulo: 'Un solo sistema',
    texto:
      'Categorías distintas, mismo lenguaje. Un objeto KLYNN se reconoce sin leer la marca.',
  },
]

export default function Filosofia() {
  return (
    <Section id="filosofia" rhythm="loose" tone="light">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Eyebrow>Filosofía</Eyebrow>
            <Heading className="mt-6 max-w-[16ch]">
              No hacemos categorías. Hacemos objetos.
            </Heading>
          </div>

          <ul className="lg:col-span-6 lg:col-start-7">
            {PRINCIPIOS.map((p, i) => (
              <li
                key={p.n}
                className={`grid grid-cols-[3rem_1fr] gap-6 py-10 ${
                  i > 0 ? 'border-t border-[var(--color-k-border)]' : 'pt-0'
                }`}
              >
                <span className="k-caption pt-1 text-[var(--color-k-gray-mid)]">{p.n}</span>
                <div>
                  <h3 className="k-h3 text-[1.375rem] leading-[1.3]">{p.titulo}</h3>
                  <p className="k-body mt-3 max-w-[46ch] leading-[1.7] text-[var(--color-k-gray-mid)]">
                    {p.texto}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  )
}
