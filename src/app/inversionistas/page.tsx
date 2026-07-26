import type { Metadata } from 'next'
import Navbar from '@/components/klynn/Navbar'
import Footer from '@/components/klynn/Footer'
import PageHero from '@/components/klynn/PageHero'
import { Container, Section } from '@/design-system/primitives'
import Reveal from '@/design-system/Reveal'
import RevealGroup from '@/design-system/RevealGroup'
import TrackedLink from '@/components/klynn/TrackedLink'
import LeadForm from '@/components/klynn/LeadForm'
import ContactFallback from '@/components/klynn/ContactFallback'
import { AnalyticsEvents } from '@/lib/analytics'
import { siteUrl } from '@/lib/config'
import { formsEnabled } from '@/config/features'

export const metadata: Metadata = {
  title: 'Inversionistas — KLYNN',
  description:
    'KLYNN construye una marca de confianza para objetos cotidianos. El activo es el criterio. Punto de entrada en CLEAN y expansión disciplinada por categorías.',
  alternates: { canonical: '/inversionistas' },
  openGraph: {
    type: 'website',
    title: 'Inversionistas — KLYNN',
    description: 'La oportunidad de construir una marca de confianza para la vida cotidiana.',
    url: `${siteUrl}/inversionistas`,
  },
}

const PUNTOS = [
  { t: 'El problema', d: 'Hay más productos que nunca para las mismas necesidades, con calidad inconsistente y sin una forma confiable de elegir.' },
  { t: 'La respuesta', d: 'KLYNN reduce miles de decisiones a una elección confiable. Hace el trabajo difícil que hoy recae en el cliente.' },
  { t: 'El activo', d: 'No es la fábrica ni el marketing: es el criterio. Un sistema de decisión repetible, enseñable y auditable.' },
  { t: 'Las tres capacidades', d: 'Seleccionamos cuando la mejor solución ya existe, mejoramos cuando hay una oportunidad real, y creamos cuando nada cumple el estándar.' },
  { t: 'Punto de entrada', d: 'Empezamos con foco en una categoría —CLEAN— para ganar confianza antes de expandirnos.' },
  { t: 'Expansión disciplinada', d: 'Cada categoría nueva entra solo cuando el estándar puede sostenerla. La coherencia viene del criterio, no del tipo de producto.' },
  { t: 'Modelo de confianza', d: 'Cada buena experiencia hace más creíble la siguiente. La confianza acumulada es lo que permite crecer a múltiples categorías.' },
  { t: 'Visión de largo plazo', d: 'Una marca construida para décadas: un estándar, muchas categorías, mejores decisiones para la vida cotidiana.' },
]

export default function Inversionistas() {
  return (
    <>
      <Navbar />
      <main id="contenido" tabIndex={-1}>
        <PageHero
          eyebrow="Inversionistas"
          title={<>Invertir en el criterio, no en un catálogo.</>}
          lead="Esta página no reemplaza una presentación formal ni incluye cifras. Su objetivo es explicar, con claridad, por qué KLYNN puede convertirse en una marca de confianza global — y por qué vale la pena una conversación."
          tone="light"
        />

        <Section tone="light" rhythm="loose">
          <Container>
            <RevealGroup as="ol" className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
              {PUNTOS.map((p, i) => (
                <li key={p.t} className="border-t border-[var(--color-k-border)] pt-6">
                  <div className="flex items-baseline gap-4">
                    <span className="k-caption text-[0.625rem] tracking-[0.2em] text-[var(--color-k-ink-muted-aa)]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h2 className="k-h3 text-[1.25rem] leading-[1.25] text-[var(--color-k-graphite)]">{p.t}</h2>
                      <p className="k-body mt-3 max-w-[46ch] text-[0.9375rem] leading-[1.7] text-[var(--color-k-ink-muted-aa)]">{p.d}</p>
                    </div>
                  </div>
                </li>
              ))}
            </RevealGroup>
          </Container>
        </Section>

        <Section tone="dark" rhythm="loose">
          <Container>
            <RevealGroup className="max-w-[48ch]">
              <h2 key="h" className="k-h1 text-[clamp(1.875rem,5vw,3.75rem)] leading-[1.08] tracking-[-0.02em]">
                Hablemos antes de la primera categoría
                <span style={{ color: 'var(--color-k-terracotta)' }}>.</span>
              </h2>
              <p key="p" className="k-body mt-10 max-w-[44ch] text-[1.0625rem] leading-[1.75] opacity-70">
                Si construir marcas de confianza para la vida cotidiana te parece una tesis sólida,
                conversemos. Compartimos el detalle en una reunión, no en una página pública.
              </p>
              <div key="cta" className="mt-12">
                <TrackedLink
                  href="#conversacion"
                  event={AnalyticsEvents.InvestorMeetingRequest}
                  eventProps={{ source: 'inversionistas' }}
                  className="k-button k-ui-transition-opacity inline-block bg-[var(--color-k-white)] px-9 py-4 text-[var(--color-k-graphite)] hover:opacity-90"
                >
                  Solicitar una conversación
                </TrackedLink>
              </div>
            </RevealGroup>
          </Container>
        </Section>

        <Section id="conversacion" tone="raised" rhythm="loose">
          <Container>
            {formsEnabled ? (
              <div className="grid gap-x-16 gap-y-10 lg:grid-cols-[minmax(0,26ch)_minmax(0,1fr)]">
                <Reveal>
                  <h2 className="k-h2 text-[clamp(1.5rem,3.6vw,2.5rem)] leading-[1.1] tracking-[-0.018em]">
                    Solicita una conversación.
                  </h2>
                  <p className="k-body mt-6 max-w-[34ch] text-[1rem] leading-[1.7] text-[var(--color-k-ink-muted-aa)]">
                    Cuéntanos brevemente tu interés. Te contactamos para compartir el detalle en privado.
                  </p>
                </Reveal>
                <Reveal>
                  <LeadForm audience="inversionista" b2b />
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
