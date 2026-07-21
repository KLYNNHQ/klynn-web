import Link from 'next/link'
import { Container, Eyebrow, Heading, Section } from '@/design-system/primitives'
import { VISIBLE_CATEGORIES } from '@/lib/klynn/categories'

/**
 * El sistema de categorías.
 *
 * Muestra la marca completa, no solo lo que ya se vende. Las categorías sin
 * catálogo se presentan como parte del sistema y se marcan como tales: es
 * más honesto y comunica escala.
 *
 * El color de cada tarjeta lo resuelve `data-category` vía `--k-accent`.
 * Ninguna categoría trae su color escrito aquí.
 */

export default function Categorias() {
  return (
    <Section id="categorias" rhythm="loose" tone="raised">
      <Container>
        <div className="max-w-[38ch]">
          <Eyebrow>El sistema</Eyebrow>
          <Heading className="mt-6">Una marca. Siete territorios.</Heading>
        </div>

        <ul className="mt-16 grid grid-cols-1 border-t border-l border-[var(--color-k-border)] sm:grid-cols-2 lg:grid-cols-4">
          {VISIBLE_CATEGORIES.map(c => {
            const card = (
              <div className="flex h-full min-h-[220px] flex-col justify-between p-8 transition-colors duration-300 group-hover:bg-[var(--color-k-white)]">
                <span
                  aria-hidden
                  className="block h-[3px] w-8 transition-[width] duration-300 group-hover:w-16"
                  style={{ background: 'var(--k-accent)' }}
                />
                <div>
                  <h3 className="k-caption text-[0.8125rem] uppercase tracking-[0.18em]">
                    {c.nombre}
                  </h3>
                  <p className="k-body mt-2 text-[0.9375rem] text-[var(--color-k-gray-mid)]">
                    {c.descriptor}
                  </p>
                  <p className="k-caption mt-4 uppercase tracking-[0.16em] text-[var(--color-k-gray-mid)]">
                    {c.activa ? 'Disponible' : 'En desarrollo'}
                  </p>
                </div>
              </div>
            )

            return (
              <li
                key={c.key}
                data-category={c.key}
                className="group border-r border-b border-[var(--color-k-border)]"
              >
                {c.activa ? (
                  <Link href="/productos" className="block h-full">
                    {card}
                  </Link>
                ) : (
                  card
                )}
              </li>
            )
          })}
        </ul>
      </Container>
    </Section>
  )
}
