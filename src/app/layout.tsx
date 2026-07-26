import type { Metadata } from 'next'
import { Inter, Inter_Tight } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
import CookieBanner from '@/components/CookieBanner'
import ConsentAwareAnalytics from '@/components/ConsentAwareAnalytics'
import { siteUrl } from '@/lib/config'
import './globals.css'

/* --- Tipografía KLYNN ---------------------------------------------------
 * Sustitutas de "KLYNN Display" / "KLYNN Text" (lámina 07 del manual), que
 * no existen como archivo de fuente en KLYNN_OS. Los pesos cargados son
 * exactamente los que la lámina especifica: Light 300 (caption),
 * Regular 400 (cuerpo), Medium 500 (H3), Bold 700 (H1/H2/botón).
 * Al llegar la fuente oficial se sustituyen aquí y en globals.css. */
const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-inter-tight',
  display: 'swap',
  preload: true,
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

const TITLE = 'KLYNN — Objetos bien diseñados para la vida diaria'
const DESCRIPTION =
  'KLYNN diseña objetos para la vida diaria bajo un mismo criterio: función primero, hechos para durar. Cuidado de superficies, casa, cocina y energía.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'KLYNN',
    'diseño de producto',
    'objetos para el hogar',
    'cuidado de superficies',
    'marca mexicana de diseño',
  ],
  authors: [{ name: 'KLYNN' }],
  creator: 'KLYNN',
  publisher: 'KLYNN',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: siteUrl,
    siteName: 'KLYNN',
    title: TITLE,
    description: DESCRIPTION,
    // Image auto-populated from src/app/opengraph-image.tsx (next/og ImageResponse).
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    // Twitter image also auto-populated from src/app/opengraph-image.tsx.
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
}

/**
 * JSON-LD de Organization.
 *
 * Solo se declara lo verificable. `telephone`, `email`, `address` y `sameAs`
 * quedan FUERA hasta que existan datos oficiales de KLYNN: publicar un dato
 * de contacto heredado o inventado en datos estructurados lo propaga a
 * Google Business y buscadores, y corregirlo después es lento.
 *
 * Pendiente de alta: teléfono, correo legal, domicilio fiscal, redes.
 */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'KLYNN',
  url: siteUrl,
  brand: {
    '@type': 'Brand',
    name: 'KLYNN',
  },
}

const webSiteLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'KLYNN',
  url: siteUrl,
  inLanguage: 'es',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="es"
      className={`${interTight.variable} ${inter.variable}`}
    >
      <body className="font-sans antialiased">
        <a href="#contenido" className="skip-link">Saltar al contenido</a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteLd) }}
        />
        {children}
        <CookieBanner />
        <ConsentAwareAnalytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
