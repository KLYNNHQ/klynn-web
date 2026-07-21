import { Container, Section } from '@/design-system/primitives'

/**
 * Filosofía.
 *
 * Una sola idea, a escala. La versión anterior eran tres principios
 * numerados: estructura de consultoría, no de marca. Tres bloques de dos
 * líneas se leen como un blog; una frase sola se lee como una convicción.
 *
 * Es además el único momento oscuro de la página. El fold es claro y las
 * categorías son claras; sin este contraste la landing avanza en un solo
 * tono y no respira. La inversión de valor da peso y marca el centro.
 *
 * El contenido responde a la pregunta estructural de KLYNN: por qué una
 * misma marca puede hacer una fibra y un cargador sin contradecirse.
 */

export default function Filosofia() {
  return (
    <Section id="filosofia" rhythm="loose" tone="dark">
      <Container>
        <div className="flex items-center gap-3">
          <span
            aria-hidden
            className="h-[7px] w-[7px]"
            style={{ background: 'var(--color-k-terracotta)' }}
          />
          <span className="k-caption uppercase tracking-[0.28em] opacity-60">
            Filosofía
          </span>
        </div>

        <p className="k-h1 mt-16 max-w-[22ch] text-[clamp(1.875rem,5.6vw,4.75rem)] leading-[1.06] tracking-[-0.02em]">
          Categorías distintas.
          <br />
          Un mismo criterio
          <span style={{ color: 'var(--color-k-terracotta)' }}>.</span>
        </p>

        <p className="k-body mt-16 max-w-[46ch] text-[1.0625rem] leading-[1.75] opacity-70">
          Lo que une a un objeto KLYNN con otro no es para qué sirve, sino cómo fue
          decidido. Mismo estándar de materiales, misma economía de forma, misma
          intención de que dure.
        </p>
      </Container>
    </Section>
  )
}
