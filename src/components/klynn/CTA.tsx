import Link from 'next/link'
import { Container, Section } from '@/design-system/primitives'
import RevealGroup from '@/design-system/RevealGroup'

/**
 * CTA institucional.
 *
 * KLYNN apenas comienza y el canal comercial aún no está definido, así que
 * aquí no hay teléfono, correo, WhatsApp ni cotización. La acción es honesta:
 * invita a conocer el sistema, no a comprar algo que todavía no está a la
 * venta. Funciona tal cual mientras se define el canal.
 *
 * Segundo momento oscuro de la página: cierra el arco que abre Filosofía.
 *
 * Movimiento: el bloque es un <RevealGroup> — índice, claim, cuerpo y botón
 * entran escalonados con la cadencia del token.
 *
 * COPY PROPUESTO — sujeto a tu revisión.
 */

export default function CTA() {
  return (
    <Section id="cta" rhythm="loose" tone="dark">
      <Container>
        <RevealGroup>
          <div className="flex items-center gap-3">
            <span
              aria-hidden
              className="h-[7px] w-[7px]"
              style={{ background: 'var(--color-k-terracotta)' }}
            />
            <span className="k-caption uppercase tracking-[0.28em] opacity-60">KLYNN</span>
          </div>

          <p className="k-h1 mt-16 max-w-[18ch] text-[clamp(1.875rem,5.6vw,4.75rem)] leading-[1.06] tracking-[-0.02em]">
            Esto apenas comienza
            <span style={{ color: 'var(--color-k-terracotta)' }}>.</span>
          </p>

          <p className="k-body mt-12 max-w-[46ch] text-[1.0625rem] leading-[1.75] opacity-70">
            Una marca se construye objeto por objeto. Conoce el sistema que dará forma a
            todo lo que viene.
          </p>

          <div className="mt-16">
            <Link
              href="/#ecosistema"
              className="k-button k-ui-transition-opacity inline-block bg-[var(--color-k-white)] px-10 py-5 text-center text-[var(--color-k-graphite)] hover:opacity-90"
            >
              Conoce las categorías
            </Link>
          </div>
        </RevealGroup>
      </Container>
    </Section>
  )
}
