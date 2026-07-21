import Link from 'next/link'
import { Container, Section } from '@/design-system/primitives'
import { VISIBLE_CATEGORIES } from '@/lib/klynn/categories'

/**
 * Categorías.
 *
 * Se publican cuatro: las que tienen identidad cromática resuelta. Las otras
 * cuatro siguen registradas en `@/lib/klynn/categories` y entran cuando
 * tengan con qué sostenerse. Una marca que enseña siete casillas y seis
 * dicen "en desarrollo" está anunciando que está vacía.
 *
 * Cuatro columnas y cuatro tarjetas: la retícula cierra exacta. La fila
 * incompleta anterior se leía como obra sin terminar, no como asimetría.
 *
 * El color de cada tarjeta lo resuelve `data-category` vía `--k-accent`.
 */

export default function Categorias() {
  return (
    <Section id="categorias" rhythm="loose" tone="light">
      <Container>
        <div className="flex items-center gap-3">
          <span
            aria-hidden
            className="h-[7px] w-[7px]"
            style={{ background: 'var(--color-k-terracotta)' }}
          />
          <span className="k-caption uppercase tracking-[0.28em] text-[var(--color-k-graphite)] opacity-60">
            Categorías
          </span>
        </div>

        <h2 className="k-h2 mt-16 max-w-[20ch] text-[clamp(1.5rem,4.4vw,3.25rem)] leading-[1.1] tracking-[-0.018em]">
          Un mismo estándar en cada categoría.
        </h2>

        <ul className="mt-20 grid grid-cols-1 border-t border-[var(--color-k-border)] sm:grid-cols-2 lg:grid-cols-4">
          {VISIBLE_CATEGORIES.map(c => {
            const inner = (
              <div className="flex h-full min-h-[260px] flex-col justify-between py-10 pr-8">
                <span
                  aria-hidden
                  className="block h-[3px] w-10 transition-[width] duration-500 group-hover:w-20"
                  style={{ background: 'var(--k-accent)' }}
                />
                <div>
                  <h3 className="k-caption text-[0.8125rem] uppercase tracking-[0.2em]">
                    {c.nombre}
                  </h3>
                  <p className="k-body mt-3 text-[0.9375rem] text-[var(--color-k-graphite)] opacity-70">
                    {c.descriptor}
                  </p>
                  <p className="k-caption mt-6 text-[0.625rem] uppercase tracking-[0.2em] text-[var(--color-k-graphite)] opacity-40">
                    {c.activa ? 'Disponible' : 'Próximamente'}
                  </p>
                </div>
              </div>
            )

            return (
              <li
                key={c.key}
                data-category={c.key}
                className="group border-b border-[var(--color-k-border)] pl-0 lg:border-b-0"
              >
                {c.activa ? (
                  <Link href="/productos" className="block h-full">
                    {inner}
                  </Link>
                ) : (
                  inner
                )}
              </li>
            )
          })}
        </ul>
      </Container>
    </Section>
  )
}
