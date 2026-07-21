/**
 * KLYNN Design System — primitivas.
 *
 * Todo componente de la landing se compone con estas piezas. No son
 * "helpers de una landing": son el vocabulario del sistema, pensado para
 * servir a cualquier categoría (HOME, KITCHEN, TECH, CLEAN, STORAGE, PET,
 * WELLNESS) y a cualquier superficie futura (eCommerce, deck, CRM).
 *
 * Reglas del sistema:
 * - Ningún color, tamaño ni familia tipográfica se escribe suelto. Todo sale
 *   de los tokens de globals.css (capa `k-`).
 * - El acento nunca se pasa por prop de color. Lo resuelve `data-category`,
 *   que expone `--k-accent` a los descendientes.
 * - Las primitivas no conocen el contenido: no saben si son de limpieza o de
 *   audio.
 */

import type { ReactNode, ElementType } from 'react'
import type { CategoryKey } from '@/lib/klynn/categories'

/* ------------------------------------------------------------------ Container */

export function Container({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`mx-auto w-full max-w-[1440px] px-6 lg:px-12 ${className}`}>
      {children}
    </div>
  )
}

/* -------------------------------------------------------------------- Section */

type Tone = 'light' | 'dark' | 'raised'

const TONE: Record<Tone, string> = {
  light: 'bg-[var(--color-k-white)] text-[var(--color-k-graphite)]',
  raised: 'bg-[var(--color-k-surface-raised)] text-[var(--color-k-graphite)]',
  dark: 'bg-[var(--color-k-graphite)] text-[var(--color-k-white)]',
}

/** Ritmo vertical del sistema. `hero` ocupa el fold; el resto son escalones. */
type Rhythm = 'hero' | 'loose' | 'normal' | 'tight'

const RHYTHM: Record<Rhythm, string> = {
  // h + max-h (no min-h solo: en CSS min-height gana sobre max-height y el
  // fold se estiraría sin tope en pantallas muy altas, perdiendo tensión).
  // En móvil se comprime a 88svh: a pantalla completa el titular nadaba en
  // vacío y el fold perdía tensión.
  hero:
    'h-[88svh] min-h-[560px] max-h-[1080px] sm:h-[100svh] sm:min-h-[640px] flex items-center',
  loose: 'py-32 lg:py-44',
  normal: 'py-24 lg:py-32',
  tight: 'py-16 lg:py-20',
}

export function Section({
  children,
  tone = 'light',
  rhythm = 'normal',
  category,
  id,
  className = '',
  as: Tag = 'section',
}: {
  children: ReactNode
  tone?: Tone
  rhythm?: Rhythm
  /** Expone `--k-accent` a todo el subárbol. */
  category?: CategoryKey
  id?: string
  className?: string
  as?: ElementType
}) {
  return (
    <Tag
      id={id}
      data-category={category}
      className={`${TONE[tone]} ${RHYTHM[rhythm]} ${className}`}
    >
      {children}
    </Tag>
  )
}

/* -------------------------------------------------------------------- Eyebrow */

export function Eyebrow({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <p
      className={`k-caption uppercase tracking-[0.24em] text-[var(--color-k-gray-mid)] ${className}`}
    >
      {children}
    </p>
  )
}

/* ----------------------------------------------------------------------- Rule */

/** Regla de acento. Es el único elemento que introduce color en una sección. */
export function AccentRule({ className = '' }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`block h-[2px] w-16 ${className}`}
      style={{ background: 'var(--k-accent, var(--color-k-terracotta))' }}
    />
  )
}

/* --------------------------------------------------------------------- Button */

type Variant = 'solid' | 'outline' | 'quiet'

const VARIANT: Record<Variant, string> = {
  solid:
    'bg-[var(--color-k-graphite)] text-[var(--color-k-white)] px-10 py-5 hover:opacity-90',
  outline:
    'border border-current px-10 py-5 hover:bg-[var(--color-k-graphite)] hover:text-[var(--color-k-white)]',
  quiet:
    'pb-1 border-b border-current hover:border-[var(--k-accent,var(--color-k-terracotta))] hover:text-[var(--k-accent,var(--color-k-terracotta))]',
}

export function Action({
  href,
  children,
  variant = 'solid',
  className = '',
}: {
  href: string
  children: ReactNode
  variant?: Variant
  className?: string
}) {
  return (
    <a
      href={href}
      className={`k-button inline-block transition-all duration-200 ${VARIANT[variant]} ${className}`}
    >
      {children}
    </a>
  )
}

/* ------------------------------------------------------------------- Headings */

export function Display({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <h1
      className={`k-h1 text-[clamp(2.5rem,7.5vw,5.3125rem)] leading-[1.05] ${className}`}
    >
      {children}
    </h1>
  )
}

export function Heading({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <h2 className={`k-h2 text-[clamp(1.75rem,4vw,2.6875rem)] leading-[1.12] ${className}`}>
      {children}
    </h2>
  )
}

export function Body({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <p className={`k-body text-[1.0625rem] leading-[1.7] ${className}`}>{children}</p>
  )
}
