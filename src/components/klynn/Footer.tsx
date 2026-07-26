import Link from 'next/link'
import { Container } from '@/design-system/primitives'
import { brand } from '@/config/brand'
import { CATEGORIES } from '@/lib/klynn/categories'
import Wordmark from './Wordmark'
import Isotype from './Isotype'
import SocialLinks from './SocialLinks'

/**
 * Footer.
 *
 * Cierre sobrio y navegable del sitio. Razón social provisional = "KLYNN"
 * (no se publica una entidad no constituida). Redes: solo las que tengan URL
 * real (hoy ninguna → no se muestran). Sin enlaces muertos.
 */

// Año dinámico: se actualiza en cada build/deploy (Footer es server component).
const AÑO = new Date().getFullYear()

const NAV = [
  { href: '/nuestro-criterio', label: 'Nuestro criterio' },
  { href: '/#ecosistema', label: 'Categorías' },
  { href: '/inversionistas', label: 'Inversionistas' },
  { href: '/proveedores-y-socios', label: 'Proveedores y socios' },
  { href: '/journal', label: 'Journal' },
  { href: '/contacto', label: 'Contacto' },
]

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-k-border)] bg-[var(--color-k-white)] pt-24 pb-12 text-[var(--color-k-graphite)]">
      <Container>
        {/* Firma final: isotipo oficial como cierre de marca, con espacio
            negativo. Fondo claro → el símbolo grafito queda nítido. */}
        <div className="flex justify-center pb-20 sm:pb-28">
          <Isotype size={72} />
        </div>

        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Wordmark height={24} />
            <p className="k-body mt-8 max-w-[28ch] text-[0.9375rem] leading-[1.7] text-[var(--color-k-ink-muted-aa)]">
              Objetos cotidianos que merecen tu confianza.
            </p>
            <SocialLinks className="mt-8" />
          </div>

          <nav aria-label="Secciones" className="lg:col-span-4">
            <h2 className="k-caption uppercase tracking-[0.2em] text-[var(--color-k-ink-muted-aa)]">Sitio</h2>
            <ul className="mt-6 grid grid-cols-2 gap-x-8 gap-y-3">
              {NAV.map(n => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="k-body k-ui-transition-opacity text-[0.875rem] opacity-70 hover:opacity-100"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <h2 className="k-caption uppercase tracking-[0.2em] text-[var(--color-k-ink-muted-aa)]">Categorías</h2>
            <ul className="mt-6 grid grid-cols-2 gap-x-8 gap-y-3">
              {CATEGORIES.map(c => (
                <li key={c.key}>
                  <span className="k-body text-[0.875rem] opacity-70">{c.nombre}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-24 border-t border-[var(--color-k-border)] pt-8">
          {/* Leyenda honesta: la landing muestra visualizaciones conceptuales. */}
          <p className="k-body max-w-[70ch] text-[0.8125rem] leading-[1.6] text-[var(--color-k-ink-muted-aa)]">
            Las imágenes de producto son visualizaciones conceptuales. Algunos
            productos y categorías pueden estar en desarrollo.
          </p>
          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="k-caption text-[0.6875rem] uppercase tracking-[0.16em] text-[var(--color-k-ink-muted-aa)]">
            © {AÑO} {brand.legalName}
          </p>
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            <li>
              <Link href="/aviso-de-privacidad" className="k-caption k-ui-transition-opacity text-[0.6875rem] uppercase tracking-[0.16em] text-[var(--color-k-ink-muted-aa)] hover:opacity-80">
                Aviso de privacidad
              </Link>
            </li>
            <li>
              <Link href="/terminos-de-uso" className="k-caption k-ui-transition-opacity text-[0.6875rem] uppercase tracking-[0.16em] text-[var(--color-k-ink-muted-aa)] hover:opacity-80">
                Términos de uso
              </Link>
            </li>
          </ul>
          </div>
        </div>
      </Container>
    </footer>
  )
}
