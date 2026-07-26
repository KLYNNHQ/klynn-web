import { Container, Section } from '@/design-system/primitives'
import Reveal from '@/design-system/Reveal'

/**
 * Apertura de marca — primer bloque de la página.
 *
 * Cuatro frases breves que dicen qué es KLYNN, sin tono de misión, manifiesto
 * ni publicidad. Es una declaración sobria, no un argumento de venta. El
 * peso lo lleva el espacio alrededor, no el volumen de texto.
 *
 * COPY PROPUESTO — sujeto a tu revisión.
 */

const LINEAS = [
  'KLYNN diseña objetos para la vida diaria.',
  'Cada uno empieza por su función, no por el ruido.',
  'Materiales honestos. Formas que duran.',
  'Un mismo criterio en categorías distintas.',
]

export default function Apertura() {
  return (
    <Section rhythm="normal" tone="light" className="relative pt-[120px] sm:pt-[132px]">
      <Container>
        <Reveal className="flex items-center gap-3">
          <span
            aria-hidden
            className="h-[7px] w-[7px]"
            style={{ background: 'var(--color-k-terracotta)' }}
          />
          <span className="k-caption uppercase tracking-[0.28em] text-[var(--color-k-ink-muted-aa)]">
            KLYNN
          </span>
        </Reveal>

        {/* Columna ancha (34rem) + tamaño moderado (máx 1.75rem en desktop):
            cada frase se lee completa, en una o dos líneas, sin fragmentarse.
            Muy por debajo del Hero (116px) para que no compitan. El mínimo del
            clamp conserva la fuerza en móvil. */}
        <Reveal delay={120} className="mt-12 max-w-[34rem] space-y-3">
          {LINEAS.map((linea, i) => (
            <p
              key={i}
              className="k-h2 text-[clamp(1.5rem,2.2vw,1.75rem)] leading-[1.35] tracking-[-0.01em]"
              style={{ color: i === 0 ? 'var(--color-k-graphite)' : 'var(--color-k-gray-mid)' }}
            >
              {linea}
            </p>
          ))}
        </Reveal>
      </Container>
    </Section>
  )
}
