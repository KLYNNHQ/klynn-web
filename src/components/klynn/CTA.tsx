import Link from 'next/link'
import { Container, Section } from '@/design-system/primitives'
import { brandEmails } from '@/config/brand'

/**
 * CTA comercial.
 *
 * Es el punto donde la marca deja de hablar y empieza a operar, así que es
 * aquí —y no en el fold— donde vive la petición de cotización.
 *
 * Segundo momento oscuro de la página. Cierra el arco: el bloque oscuro de
 * Filosofía abre la idea, este la convierte en acción.
 */

export default function CTA() {
  return (
    <Section id="contacto" rhythm="loose" tone="dark">
      <Container>
        <div className="flex items-center gap-3">
          <span
            aria-hidden
            className="h-[7px] w-[7px]"
            style={{ background: 'var(--color-k-terracotta)' }}
          />
          <span className="k-caption uppercase tracking-[0.28em] opacity-60">Contacto</span>
        </div>

        <p className="k-h1 mt-16 max-w-[20ch] text-[clamp(1.875rem,5.6vw,4.75rem)] leading-[1.06] tracking-[-0.02em]">
          Hablemos de tu operación
          <span style={{ color: 'var(--color-k-terracotta)' }}>.</span>
        </p>

        <p className="k-body mt-12 max-w-[46ch] text-[1.0625rem] leading-[1.75] opacity-70">
          Distribución, retail y consumo institucional. Cuéntanos qué necesitas resolver
          y preparamos una propuesta.
        </p>

        <div className="mt-16 flex flex-col gap-8 sm:flex-row sm:items-center sm:gap-12">
          <Link
            href="/#contacto-form"
            className="k-button inline-block bg-[var(--color-k-white)] px-10 py-5 text-center text-[var(--color-k-graphite)] transition-opacity hover:opacity-90"
          >
            Solicitar cotización
          </Link>
          {/* El correo comercial solo se muestra cuando exista uno oficial de
              KLYNN. Hasta entonces brandEmails.sales es null (ver config). */}
          {brandEmails.sales && (
            <a
              href={`mailto:${brandEmails.sales}`}
              className="k-caption text-[0.75rem] uppercase tracking-[0.2em] opacity-60 transition-opacity hover:opacity-100"
            >
              {brandEmails.sales}
            </a>
          )}
        </div>
      </Container>
    </Section>
  )
}
