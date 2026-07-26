import type { Metadata } from 'next'
import Link from 'next/link'
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
  title: 'Contacto — KLYNN',
  description:
    'Habla con KLYNN. Rutas diferenciadas para consumidores, inversionistas, fabricantes y proveedores, socios comerciales y prensa.',
  alternates: { canonical: '/contacto' },
  openGraph: {
    type: 'website',
    title: 'Contacto — KLYNN',
    description: 'Elige tu camino y hablemos.',
    url: `${siteUrl}/contacto`,
  },
}

const RUTAS = [
  { t: 'Inversionistas', d: 'Conoce la oportunidad.', href: '/inversionistas' },
  { t: 'Fabricantes y proveedores', d: 'Trabaja con nuestro estándar.', href: '/proveedores-y-socios' },
  { t: 'Socios comerciales', d: 'Explora una alianza.', href: '/proveedores-y-socios#colaborar' },
]

export default function Contacto() {
  return (
    <>
      <Navbar />
      <main id="contenido" tabIndex={-1}>
        <PageHero
          eyebrow="Contacto"
          title={<>Elige tu camino.</>}
          lead={
            formsEnabled
              ? 'Cada relación es distinta. Si tienes un rol específico, te llevamos a la página correcta. Si solo quieres escribirnos, hazlo aquí abajo.'
              : 'Cada relación es distinta. Según tu rol, te llevamos a la página correcta.'
          }
        />

        <Section tone="light" rhythm="normal">
          <Container>
            <RevealGroup as="ul" className="grid gap-x-8 gap-y-4 sm:grid-cols-3">
              {RUTAS.map(r => (
                <li key={r.t}>
                  <Link
                    href={r.href}
                    className="k-ui-transition-colors flex h-full flex-col justify-between gap-6 border border-[var(--color-k-border)] p-6 hover:border-[var(--color-k-graphite)]"
                  >
                    <span className="k-h3 text-[1.0625rem] leading-[1.25] text-[var(--color-k-graphite)]">{r.t}</span>
                    <span className="k-caption text-[0.6875rem] uppercase tracking-[0.16em] text-[var(--color-k-ink-muted-aa)]">
                      {r.d} →
                    </span>
                  </Link>
                </li>
              ))}
            </RevealGroup>
          </Container>
        </Section>

        <Section id="mensaje" tone="raised" rhythm="loose">
          <Container>
            {formsEnabled ? (
              <div className="grid gap-x-16 gap-y-10 lg:grid-cols-[minmax(0,26ch)_minmax(0,1fr)]">
                <Reveal>
                  <h2 className="k-h2 text-[clamp(1.5rem,3.6vw,2.5rem)] leading-[1.1] tracking-[-0.018em]">
                    Escríbenos.
                  </h2>
                  <p className="k-body mt-6 max-w-[34ch] text-[1rem] leading-[1.7] text-[var(--color-k-ink-muted-aa)]">
                    Consumidores, prensa o cualquier tema general. Te respondemos al correo que dejes.
                  </p>
                </Reveal>
                <Reveal>
                  <LeadForm audience="consumidor" />
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
