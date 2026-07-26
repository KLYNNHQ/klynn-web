import { Container, Section } from '@/design-system/primitives'
import Reveal from '@/design-system/Reveal'
import RevealGroup from '@/design-system/RevealGroup'
import { CATEGORIES } from '@/lib/klynn/categories'

/**
 * El universo KLYNN — categorías con foco y disciplina.
 *
 * NO se presentan diez categorías idénticas en "Próximamente" (eso parecería
 * dispersión). Se distinguen tres niveles: punto de partida (CLEAN), expansión
 * prevista (HOME, KITCHEN, STORAGE) y visión de largo plazo (el resto). La
 * coherencia viene del criterio, no de la categoría.
 *
 * HIPÓTESIS PROVISIONAL Y EDITABLE — el reparto por nivel se confirma con el
 * dueño. No se afirma que las categorías futuras ya operen.
 */

const byKey = Object.fromEntries(CATEGORIES.map(c => [c.key, c]))

const INICIO = byKey['clean']
const EXPANSION = ['home', 'kitchen', 'storage'].map(k => byKey[k])
const VISION = ['tech', 'pet', 'wellness', 'outdoor', 'automotive', 'travel'].map(k => byKey[k])

export default function Ecosistema() {
  return (
    <Section id="ecosistema" rhythm="loose" tone="light">
      <Container>
        <Reveal className="max-w-[48ch]">
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-[7px] w-[7px]" style={{ background: 'var(--color-k-terracotta)' }} />
            <span className="k-caption uppercase tracking-[0.28em] text-[var(--color-k-ink-muted-aa)]">
              El universo KLYNN
            </span>
          </div>
          <h2 className="k-h2 mt-14 text-[clamp(1.75rem,4.4vw,3.25rem)] leading-[1.1] tracking-[-0.018em]">
            Un estándar. Muchas categorías.
          </h2>
          <p className="k-body mt-10 max-w-[44ch] text-[1.0625rem] leading-[1.75] text-[var(--color-k-graphite)] opacity-70">
            La categoría cambia. El criterio nunca. Empezamos con foco y crecemos
            con disciplina: cada categoría entra solo cuando el estándar puede
            sostenerla.
          </p>
        </Reveal>

        {/* Nivel 1 — Punto de partida: CLEAN, con protagonismo. */}
        <Reveal className="mt-16 border-t border-[var(--color-k-graphite)] pt-8 sm:mt-24">
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-[6px] w-[6px]" style={{ background: 'var(--color-k-terracotta)' }} />
            <span className="k-caption uppercase tracking-[0.24em] text-[var(--color-k-graphite)] opacity-70">
              Punto de partida
            </span>
          </div>
          <div className="mt-6 grid grid-cols-1 items-baseline gap-x-8 gap-y-2 sm:grid-cols-[minmax(0,1fr)_auto]">
            <h3 className="k-h2 text-[clamp(2rem,5vw,3.5rem)] leading-[1.02] tracking-[-0.02em] text-[var(--color-k-graphite)]">
              {INICIO.nombre}
            </h3>
            <p className="k-body text-[1.0625rem] text-[var(--color-k-ink-muted-aa)] sm:text-right">
              {INICIO.descriptor} · La primera categoría KLYNN.
            </p>
          </div>
        </Reveal>

        {/* Nivel 2 — Expansión prevista. */}
        <Reveal className="mt-16 sm:mt-20">
          <div className="flex items-center gap-3">
            <span className="k-caption uppercase tracking-[0.24em] text-[var(--color-k-ink-muted-aa)]">
              Expansión prevista
            </span>
          </div>
        </Reveal>
        <RevealGroup as="ul" className="mt-6 grid gap-x-12 gap-y-6 sm:grid-cols-3">
          {EXPANSION.map(c => (
            <li key={c.key} className="border-t border-[var(--color-k-border)] pt-5">
              <h4 className="k-h3 text-[1.375rem] leading-[1.15] text-[var(--color-k-graphite)]">{c.nombre}</h4>
              <p className="k-body mt-1 text-[0.9375rem] text-[var(--color-k-ink-muted-aa)]">{c.descriptor}</p>
            </li>
          ))}
        </RevealGroup>

        {/* Nivel 3 — Visión de largo plazo. */}
        <Reveal className="mt-16 sm:mt-20">
          <span className="k-caption uppercase tracking-[0.24em] text-[var(--color-k-ink-muted-aa)]">
            Visión de largo plazo
          </span>
        </Reveal>
        <RevealGroup as="ul" className="mt-6 grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3 lg:grid-cols-6">
          {VISION.map(c => (
            <li key={c.key} className="border-t border-[var(--color-k-border)] pt-4">
              <span className="k-body text-[0.9375rem] text-[var(--color-k-graphite)] opacity-70">{c.nombre}</span>
            </li>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  )
}
