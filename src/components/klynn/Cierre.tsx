import Link from 'next/link'
import { Container, Section } from '@/design-system/primitives'
import RevealGroup from '@/design-system/RevealGroup'

/**
 * §7 — Cierre. Una idea de confianza y un único CTA. Sin tarjetas, sin
 * explicaciones ni enlaces adicionales (las rutas por audiencia viven en
 * /contacto). Tono oscuro para cerrar con peso. El componente <Contacto/>
 * anterior (visión + tarjetas) se conserva en el repo para posible reuso.
 */

export default function Cierre() {
  return (
    <Section id="cierre" rhythm="loose" tone="dark">
      <Container>
        <RevealGroup className="max-w-[40ch]">
          <h2 key="claim" className="k-h1 text-[clamp(1.875rem,5.2vw,4.25rem)] leading-[1.08] tracking-[-0.02em]">
            Cada objeto debe aumentar la confianza en el siguiente
            <span style={{ color: 'var(--color-k-terracotta)' }}>.</span>
          </h2>
          <div key="cta" className="mt-12">
            <Link
              href="/contacto"
              className="k-button k-ui-transition-opacity inline-block bg-[var(--color-k-white)] px-9 py-4 text-[var(--color-k-graphite)] hover:opacity-90"
            >
              Hablar con KLYNN
            </Link>
          </div>
        </RevealGroup>
      </Container>
    </Section>
  )
}
