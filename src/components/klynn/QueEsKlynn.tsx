import { Container, Section } from '@/design-system/primitives'
import RevealGroup from '@/design-system/RevealGroup'

/**
 * §2 — Qué es KLYNN. La idea de la marca en su forma más breve: una sola frase
 * y un texto de ~30 palabras. No re-justifica la metodología (eso vive en
 * /nuestro-criterio). Tono claro.
 */

export default function QueEsKlynn() {
  return (
    <Section id="que-es" rhythm="normal" tone="light">
      <Container>
        <RevealGroup className="max-w-[54ch]">
          <div key="eyebrow" className="flex items-center gap-3">
            <span aria-hidden className="h-[7px] w-[7px]" style={{ background: 'var(--color-k-terracotta)' }} />
            <span className="k-caption uppercase tracking-[0.28em] text-[var(--color-k-ink-muted-aa)]">
              Qué es KLYNN
            </span>
          </div>

          <h2
            key="claim"
            className="k-h2 mt-12 text-[clamp(1.875rem,5vw,3.75rem)] leading-[1.08] tracking-[-0.02em]"
          >
            Una sola marca para elegir mejor
            <span style={{ color: 'var(--color-k-terracotta)' }}>.</span>
          </h2>

          <p
            key="body"
            className="k-body mt-10 text-[1.125rem] leading-[1.75] text-[var(--color-k-graphite)] opacity-75"
          >
            KLYNN selecciona lo mejor que ya existe, lo mejora cuando puede o lo
            crea cuando hace falta. Un estándar de confianza para los objetos de
            todos los días.
          </p>
        </RevealGroup>
      </Container>
    </Section>
  )
}
