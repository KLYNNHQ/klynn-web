import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/klynn/Navbar'
import Footer from '@/components/klynn/Footer'
import { Container } from '@/design-system/primitives'

export const metadata: Metadata = {
  title: 'Página no encontrada — KLYNN',
  description: 'La página que buscas no existe o fue movida.',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main id="contenido" tabIndex={-1} className="flex min-h-[100svh] items-center bg-[var(--color-k-white)] text-[var(--color-k-graphite)]">
        <Container>
          <div className="py-40">
            <p className="k-caption uppercase tracking-[0.24em] opacity-50">Error 404</p>
            <h1 className="k-h1 mt-8 max-w-[16ch] text-[clamp(2.25rem,6vw,4.75rem)] leading-[1.05] tracking-[-0.02em]">
              Página no encontrada
              <span style={{ color: 'var(--color-k-terracotta)' }}>.</span>
            </h1>
            <p className="k-body mt-8 max-w-[42ch] text-[1.0625rem] leading-[1.7] opacity-60">
              La dirección que buscas no existe o fue movida.
            </p>
            <div className="mt-12">
              <Link
                href="/"
                className="k-button inline-block bg-[var(--color-k-graphite)] px-10 py-5 text-[var(--color-k-white)] transition-opacity hover:opacity-90"
              >
                Volver al inicio
              </Link>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}
