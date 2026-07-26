import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/klynn/Navbar'
import Footer from '@/components/klynn/Footer'
import ArticleBody from '@/components/klynn/ArticleBody'
import ArticleView from '@/components/klynn/ArticleView'
import { Container, Section } from '@/design-system/primitives'
import { ARTICLES, getArticle, formatDate, readingMinutes, relatedArticles } from '@/lib/klynn/journal'
import { siteUrl } from '@/lib/config'

export function generateStaticParams() {
  return ARTICLES.map(a => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const a = getArticle(slug)
  if (!a) return { title: 'Artículo — KLYNN' }
  const url = `${siteUrl}/journal/${a.slug}`
  return {
    title: `${a.title} — KLYNN Journal`,
    description: a.excerpt,
    alternates: { canonical: `/journal/${a.slug}` },
    openGraph: {
      type: 'article',
      title: a.title,
      description: a.excerpt,
      url,
      publishedTime: a.date,
      authors: [a.author],
    },
    twitter: { card: 'summary_large_image', title: a.title, description: a.excerpt },
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()

  const url = `${siteUrl}/journal/${article.slug}`
  const related = relatedArticles(article.slug)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    dateModified: article.date,
    author: { '@type': 'Organization', name: article.author },
    publisher: { '@type': 'Organization', name: 'KLYNN' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    articleSection: article.category,
  }
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Journal', item: `${siteUrl}/journal` },
      { '@type': 'ListItem', position: 2, name: article.title, item: url },
    ],
  }

  const shareX = `https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(url)}`
  const shareLinkedIn = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <ArticleView slug={article.slug} />
      <Navbar />
      <main id="contenido" tabIndex={-1}>
        <Section tone="light" rhythm="normal" className="pt-[128px] sm:pt-[152px]">
          <Container>
            <nav aria-label="Miga de pan" className="k-caption text-[0.6875rem] uppercase tracking-[0.16em] text-[var(--color-k-ink-muted-aa)]">
              <Link href="/journal" className="k-ui-transition-opacity hover:opacity-100">
                Journal
              </Link>
              <span aria-hidden> / {article.category}</span>
            </nav>

            <article className="mt-10">
              <header className="max-w-[24ch]">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                  <span className="k-caption text-[0.625rem] uppercase tracking-[0.2em] text-[var(--color-k-ink-muted-aa)]">
                    {article.category}
                  </span>
                  <span className="k-caption text-[0.625rem] uppercase tracking-[0.16em] text-[var(--color-k-ink-muted-aa)]">
                    {formatDate(article.date)} · {readingMinutes(article)} min · {article.author}
                  </span>
                </div>
                <h1 className="k-h1 mt-6 text-[clamp(2rem,5.4vw,4rem)] leading-[1.06] tracking-[-0.02em]">
                  {article.title}
                </h1>
              </header>

              <div className="mt-16 max-w-[72ch]">
                <ArticleBody blocks={article.blocks} />
              </div>

              <div className="mt-16 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[var(--color-k-border)] pt-8">
                <span className="k-caption text-[0.6875rem] uppercase tracking-[0.2em] text-[var(--color-k-ink-muted-aa)]">Compartir</span>
                <a href={shareX} target="_blank" rel="noopener noreferrer" className="k-caption k-ui-transition-opacity text-[0.6875rem] uppercase tracking-[0.16em] text-[var(--color-k-ink-muted-aa)] hover:opacity-100">X</a>
                <a href={shareLinkedIn} target="_blank" rel="noopener noreferrer" className="k-caption k-ui-transition-opacity text-[0.6875rem] uppercase tracking-[0.16em] text-[var(--color-k-ink-muted-aa)] hover:opacity-100">LinkedIn</a>
              </div>
            </article>
          </Container>
        </Section>

        {related.length > 0 && (
          <Section tone="raised" rhythm="normal">
            <Container>
              <h2 className="k-caption uppercase tracking-[0.24em] text-[var(--color-k-ink-muted-aa)]">Seguir leyendo</h2>
              <ul className="mt-8 grid gap-8 sm:grid-cols-2">
                {related.map(r => (
                  <li key={r.slug}>
                    <Link href={`/journal/${r.slug}`} className="k-ui-transition-opacity group block hover:opacity-100">
                      <span className="k-caption text-[0.625rem] uppercase tracking-[0.2em] text-[var(--color-k-ink-muted-aa)]">{r.category}</span>
                      <h3 className="k-h3 mt-3 text-[1.375rem] leading-[1.2] tracking-[-0.01em] text-[var(--color-k-graphite)]">{r.title}</h3>
                      <p className="k-body mt-3 max-w-[46ch] text-[0.9375rem] leading-[1.6] text-[var(--color-k-ink-muted-aa)]">{r.excerpt}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </Container>
          </Section>
        )}
      </main>
      <Footer />
    </>
  )
}
