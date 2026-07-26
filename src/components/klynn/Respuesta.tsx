import { Container, Section } from '@/design-system/primitives'
import RevealGroup from '@/design-system/RevealGroup'

/**
 * La respuesta KLYNN. La idea central de la empresa, a escala.
 * Tono claro: la calma después de retirar el ruido.
 */

export default function Respuesta() {
  return (
    <Section id="respuesta" rhythm="loose" tone="light">
      <Container>
        <RevealGroup className="max-w-[62ch]">
          <div key="eyebrow" className="flex items-center gap-3">
            <span aria-hidden className="h-[7px] w-[7px]" style={{ background: 'var(--color-k-terracotta)' }} />
            <span className="k-caption uppercase tracking-[0.28em] text-[var(--color-k-ink-muted-aa)]">
              La respuesta
            </span>
          </div>

          <h2
            key="claim"
            className="k-h1 mt-14 text-[clamp(1.875rem,5.2vw,4.25rem)] leading-[1.08] tracking-[-0.02em]"
          >
            KLYNN reduce miles de decisiones a una elección confiable
            <span style={{ color: 'var(--color-k-terracotta)' }}>.</span>
          </h2>

          <p key="body" className="k-body mt-12 max-w-[52ch] text-[1.0625rem] leading-[1.75] text-[var(--color-k-graphite)] opacity-70">
            Hacemos el trabajo que normalmente se deja al cliente: investigar el
            mercado global, comparar las mejores alternativas y quedarnos solo con
            lo que cumple el estándar. Cuando algo lleva el nombre KLYNN, el trabajo
            difícil ya está hecho.
          </p>

          <p key="signature" className="k-caption mt-10 uppercase tracking-[0.24em] text-[var(--color-k-ink-muted-aa)]">
            La estética de la decisión ya tomada.
          </p>
        </RevealGroup>
      </Container>
    </Section>
  )
}
