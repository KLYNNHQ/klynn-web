import { Container, Section } from '@/design-system/primitives'
import Reveal from '@/design-system/Reveal'
import RevealGroup from '@/design-system/RevealGroup'
import { CATEGORIES } from '@/lib/klynn/categories'

/**
 * El ecosistema de categorías.
 *
 * Índice editorial, no cuadrícula de tarjetas. Las diez categorías se leen
 * como el índice de una casa de diseño: nombre en tipografía grande,
 * territorio en descriptor breve, estado discreto. Mismo peso para todas —
 * ninguna domina, CLEAN no es la principal.
 *
 * Sin color, sin fotografía, sin tarjetas. La estructura la da el ritmo
 * vertical y la regla fina entre filas. Escala a cualquier número de
 * categorías sin cambiar de forma.
 *
 * Movimiento: encabezado con <Reveal>; las filas con <RevealGroup>, que las
 * revela escalonadas con un solo observer y la cadencia del token.
 */

export default function Ecosistema() {
  return (
    <Section id="ecosistema" rhythm="loose" tone="light">
      <Container>
        <Reveal className="max-w-[40ch]">
          <div className="flex items-center gap-3">
            <span
              aria-hidden
              className="h-[7px] w-[7px]"
              style={{ background: 'var(--color-k-terracotta)' }}
            />
            <span className="k-caption uppercase tracking-[0.28em] text-[var(--color-k-graphite)] opacity-60">
              El ecosistema
            </span>
          </div>
          <h2 className="k-h2 mt-14 text-[clamp(1.75rem,4.4vw,3.25rem)] leading-[1.1] tracking-[-0.018em]">
            Diez categorías. Un solo estándar.
          </h2>
        </Reveal>

        <RevealGroup as="ul" className="mt-20 border-t border-[var(--color-k-border)]">
          {CATEGORIES.map(c => (
            <li key={c.key} className="group border-b border-[var(--color-k-border)]">
              <div className="grid grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-1 py-7 sm:grid-cols-[minmax(0,1fr)_minmax(0,20ch)_auto] sm:py-9">
                <h3 className="k-h3 k-ui-transition-opacity text-[clamp(1.375rem,3.2vw,2.25rem)] leading-[1.1] tracking-[-0.01em] text-[var(--color-k-graphite)] sm:group-hover:opacity-100">
                  {c.nombre}
                </h3>
                <p className="k-body order-3 col-span-2 text-[0.9375rem] text-[var(--color-k-gray-mid)] sm:order-none sm:col-span-1 sm:text-[1rem]">
                  {c.descriptor}
                </p>
                <span className="k-caption self-start justify-self-end text-[0.625rem] uppercase tracking-[0.2em] text-[var(--color-k-graphite)] opacity-35">
                  {c.activa ? 'Disponible' : 'Próximamente'}
                </span>
              </div>
            </li>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  )
}
