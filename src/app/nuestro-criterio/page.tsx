import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/klynn/Navbar'
import Footer from '@/components/klynn/Footer'
import PageHero from '@/components/klynn/PageHero'
import Proceso from '@/components/klynn/Proceso'
import TresFormas from '@/components/klynn/TresFormas'
import Estandar from '@/components/klynn/Estandar'
import { Container, Section } from '@/design-system/primitives'
import RevealGroup from '@/design-system/RevealGroup'
import { siteUrl } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Nuestro criterio — KLYNN',
  description:
    'Cómo investiga, compara, prueba y decide KLYNN. Cuándo selecciona, cuándo mejora, cuándo crea y cuándo rechaza. La metodología detrás del nombre.',
  alternates: { canonical: '/nuestro-criterio' },
  openGraph: {
    type: 'website',
    title: 'Nuestro criterio — KLYNN',
    description: 'La metodología detrás del nombre KLYNN.',
    url: `${siteUrl}/nuestro-criterio`,
  },
}

export default function NuestroCriterio() {
  return (
    <>
      <Navbar />
      <main id="contenido" tabIndex={-1}>
        <PageHero
          eyebrow="Nuestro criterio"
          title={<>El trabajo difícil, hecho por adelantado.</>}
          lead="No revelamos todo el sistema interno, pero sí cómo pensamos. El criterio es el activo de KLYNN: la disciplina de decidir bien, repetible y auditable, para que el cliente solo tenga que decidir una vez."
        />

        {/* Cómo investigamos — marco antes del proceso */}
        <Section tone="light" rhythm="normal">
          <Container>
            <RevealGroup className="max-w-[60ch]">
              <h2 key="h" className="k-h2 text-[clamp(1.75rem,4.4vw,3rem)] leading-[1.1] tracking-[-0.018em]">
                No opinamos. Comparamos.
              </h2>
              <p key="p" className="k-body mt-8 text-[1.0625rem] leading-[1.8] opacity-75">
                Cada objeto se juzga bajo un mismo criterio, no bajo el gusto de quien lo
                revisa. Ese criterio —no la opinión— es lo que decide qué lleva nuestro
                nombre. Cómo llegamos a esa decisión, paso a paso:
              </p>
            </RevealGroup>
          </Container>
        </Section>

        <Proceso />
        <TresFormas />

        {/* Cuándo rechazamos — distintivo del criterio */}
        <Section tone="light" rhythm="loose">
          <Container>
            <RevealGroup className="max-w-[52ch]">
              <div key="eyebrow" className="flex items-center gap-3">
                <span aria-hidden className="h-[7px] w-[7px]" style={{ background: 'var(--color-k-terracotta)' }} />
                <span className="k-caption uppercase tracking-[0.28em] text-[var(--color-k-ink-muted-aa)]">Cuándo rechazamos</span>
              </div>
              <h2 key="h" className="k-h2 mt-14 text-[clamp(1.75rem,4.4vw,3rem)] leading-[1.1] tracking-[-0.018em]">
                Decir que no es parte del trabajo.
              </h2>
              <p key="p" className="k-body mt-8 text-[1.0625rem] leading-[1.8] opacity-75">
                Un producto que no cumple el estándar no lleva nuestro nombre, aunque venderlo fuera
                fácil o rentable. Rechazar es tan importante como elegir: cada objeto que dejamos fuera
                protege la confianza del que sí entra. El rechazo no es un fracaso del proceso; es el proceso funcionando.
              </p>
            </RevealGroup>
          </Container>
        </Section>

        <Estandar />

        {/* CTA */}
        <Section tone="dark" rhythm="loose">
          <Container>
            <RevealGroup className="max-w-[46ch]">
              <h2 key="h" className="k-h1 text-[clamp(1.875rem,5vw,3.75rem)] leading-[1.08] tracking-[-0.02em]">
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
      </main>
      <Footer />
    </>
  )
}
