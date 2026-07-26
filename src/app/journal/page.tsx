import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/klynn/Navbar'
import Footer from '@/components/klynn/Footer'
import PageHero from '@/components/klynn/PageHero'
import { Container, Section } from '@/design-system/primitives'
import RevealGroup from '@/design-system/RevealGroup'
import { ARTICLES, formatDate, readingMinutes } from '@/lib/klynn/journal'
import { siteUrl } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Journal — KLYNN',
  description:
    'Ideas sobre criterio, producto y vida cotidiana. Por qué el mundo no necesita más opciones, cómo decide KLYNN y por qué la confianza se construye como un sistema.',
  alternates: { canonical: '/journal' },
  openGraph: {
    type: 'website',
    title: 'Journal — KLYNN',
    description: 'Ideas sobre criterio, producto y vida cotidiana.',
    url: `${siteUrl}/journal`,
  },
}

export default function JournalIndex() {
  return (
    <>
      <Navbar />
      <main id="contenido" tabIndex={-1}>
        <PageHero
          eyebrow="Journal"
          title={<>Ideas sobre criterio, producto y vida cotidiana.</>}
          lead="No es un blog de novedades. Es donde explicamos cómo pensamos: por qué elegir se volvió difícil, cómo decidimos y por qué la confianza se construye objeto por objeto."
        />

        <Section tone="light" rhythm="normal">
          <Container>
            <RevealGroup as="ul" className="border-t border-[var(--color-k-border)]">
              {ARTICLES.map(a => (
                <li key={a.slug} className="border-b border-[var(--color-k-border)]">
                  <Link
                    href={`/journal/${a.slug}`}
                    className="k-ui-transition-opacity group block py-10 hover:opacity-100 sm:py-12"
                  >
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                      <span className="k-caption text-[0.625rem] uppercase tracking-[0.2em] text-[var(--color-k-ink-muted-aa)]">
                        {a.category}
                      </span>
                      <span className="k-caption text-[0.625rem] uppercase tracking-[0.16em] text-[var(--color-k-ink-muted-aa)]">
                        {formatDate(a.date)} · {readingMinutes(a)} min
                      </span>
                    </div>
                    <h2 className="k-h2 mt-4 max-w-[24ch] text-[clamp(1.5rem,3.6vw,2.5rem)] leading-[1.1] tracking-[-0.018em] text-[var(--color-k-graphite)]">
                      {a.title}
                    </h2>
                    <p className="k-body mt-4 max-w-[60ch] text-[1rem] leading-[1.7] text-[var(--color-k-ink-muted-aa)]">
                      {a.excerpt}
                    </p>
                    <span className="k-caption mt-6 inline-block text-[0.6875rem] uppercase tracking-[0.2em] text-[var(--color-k-ink-muted-aa)] group-hover:opacity-100">
                      Leer →
                    </span>
                  </Link>
                </li>
              ))}
            </RevealGroup>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  )
}
