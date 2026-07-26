import type { Metadata } from 'next'
import Navbar from '@/components/klynn/Navbar'
import Footer from '@/components/klynn/Footer'
import PageHero from '@/components/klynn/PageHero'
import LeadForm from '@/components/klynn/LeadForm'
import ContactFallback from '@/components/klynn/ContactFallback'
import { Container, Section } from '@/design-system/primitives'
import Reveal from '@/design-system/Reveal'
import RevealGroup from '@/design-system/RevealGroup'
import { siteUrl } from '@/lib/config'
import { formsEnabled } from '@/config/features'

export const metadata: Metadata = {
  title: 'Proveedores y socios — KLYNN',
  description:
    'Fabricantes, desarrolladores de producto, distribuidores y socios estratégicos. Qué busca KLYNN y cómo trabajar con nuestro estándar de decisión.',
  alternates: { canonical: '/proveedores-y-socios' },
  openGraph: {
    type: 'website',
    title: 'Proveedores y socios — KLYNN',
    description: 'Trabaja con el estándar de decisión de KLYNN.',
    url: `${siteUrl}/proveedores-y-socios`,
  },
}

const BUSCAMOS = [
  { t: 'Fabricantes', d: 'Con procesos serios, materiales honestos y control de calidad demostrable.' },
  { t: 'Desarrolladores de producto', d: 'Capaces de mejorar o crear cuando el estándar lo exige.' },
  { t: 'Distribuidores y retail', d: 'Que compartan la exigencia de calidad y la visión de largo plazo.' },
  { t: 'Socios estratégicos', d: 'Que aporten capacidades que fortalezcan el criterio KLYNN.' },
]

export default function ProveedoresYSocios() {
  return (
    <>
      <Navbar />
      <main id="contenido" tabIndex={-1}>
        <PageHero
          eyebrow="Proveedores y socios"
          title={<>Trabaja con nuestro estándar.</>}
          lead={
            formsEnabled
              ? 'KLYNN no busca el proveedor más barato: busca al que puede sostener el criterio. Si fabricas, desarrollas, distribuyes o quieres construir una alianza, cuéntanos qué haces mejor que nadie.'
              : 'KLYNN no busca el proveedor más barato: busca al que puede sostener el criterio — fabricantes, desarrolladores, distribuidores y socios que hacen su parte mejor que nadie.'
          }
          tone="light"
        />

        <Section tone="light" rhythm="normal">
          <Container>
            <Reveal className="max-w-[40ch]">
              <h2 className="k-h2 text-[clamp(1.5rem,3.6vw,2.5rem)] leading-[1.1] tracking-[-0.018em]">
                A quién buscamos.
              </h2>
            </Reveal>
            <RevealGroup as="ul" className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2">
              {BUSCAMOS.map(b => (
                <li key={b.t} className="border-t border-[var(--color-k-border)] pt-6">
                  <h3 className="k-h3 text-[1.25rem] leading-[1.25] text-[var(--color-k-graphite)]">{b.t}</h3>
                  <p className="k-body mt-3 max-w-[42ch] text-[0.9375rem] leading-[1.7] text-[var(--color-k-ink-muted-aa)]">{b.d}</p>
                </li>
              ))}
            </RevealGroup>
          </Container>
        </Section>

        <Section id="colaborar" tone="raised" rhythm="loose">
          <Container>
            {formsEnabled ? (
              <div className="grid gap-x-16 gap-y-10 lg:grid-cols-[minmax(0,26ch)_minmax(0,1fr)]">
                <Reveal>
                  <h2 className="k-h2 text-[clamp(1.5rem,3.6vw,2.5rem)] leading-[1.1] tracking-[-0.018em]">
                    Cuéntanos qué puedes aportar.
                  </h2>
                  <p className="k-body mt-6 max-w-[36ch] text-[1rem] leading-[1.7] text-[var(--color-k-ink-muted-aa)]">
                    Revisamos cada propuesta con el mismo criterio con el que elegimos un producto.
                  </p>
                </Reveal>
                <Reveal>
                  <LeadForm audience="proveedor" b2b />
                </Reveal>
              </div>
            ) : (
              <ContactFallback />
            )}
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  )
}
