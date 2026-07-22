import Link from 'next/link'
import { Container } from '@/design-system/primitives'
import { brand } from '@/config/brand'
import { CATEGORIES } from '@/lib/klynn/categories'
import Wordmark from './Wordmark'

/**
 * Footer.
 *
 * Solo información confirmada. No se publica teléfono, correo, domicilio,
 * redes ni datos legales que aún no existen. La razón social sale de config
 * y no se presenta como definitiva mientras la entidad no esté constituida.
 *
 * Cierra en claro para no encadenar dos bloques oscuros (el CTA ya es oscuro).
 */

const AÑO = 2026

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-k-border)] bg-[var(--color-k-white)] pt-24 pb-12 text-[var(--color-k-graphite)]">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Wordmark height={24} />
            <p className="k-body mt-8 max-w-[28ch] text-[0.9375rem] leading-[1.7] opacity-60">
              Objetos para la vida diaria.
            </p>
          </div>

          <div className="lg:col-span-7">
            <h2 className="k-caption uppercase tracking-[0.2em] opacity-40">Categorías</h2>
            <ul className="mt-6 grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3">
              {CATEGORIES.map(c => (
                <li key={c.key}>
                  <span className="k-body text-[0.875rem] opacity-70">{c.nombre}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-24 flex flex-col gap-6 border-t border-[var(--color-k-border)] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="k-caption text-[0.6875rem] uppercase tracking-[0.16em] opacity-40">
            © {AÑO} {brand.legalName}
          </p>
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            <li>
              <Link
                href="/aviso-de-privacidad"
                className="k-caption text-[0.6875rem] uppercase tracking-[0.16em] opacity-40 transition-opacity hover:opacity-80"
              >
                Aviso de privacidad
              </Link>
            </li>
            <li>
              <Link
                href="/terminos-de-uso"
                className="k-caption text-[0.6875rem] uppercase tracking-[0.16em] opacity-40 transition-opacity hover:opacity-80"
              >
                Términos de uso
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  )
}
