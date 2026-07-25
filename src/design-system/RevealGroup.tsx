'use client'

import { Children, cloneElement, isValidElement, useEffect, useRef, useState } from 'react'
import type { CSSProperties, ElementType, ReactElement, ReactNode } from 'react'

/**
 * RevealGroup — coordinador del Lenguaje de Movimiento de KLYNN.
 *
 * Responsabilidad ÚNICA: revelar un CONJUNTO de piezas de forma escalonada con
 * UN SOLO IntersectionObserver (no uno por hijo). Es la molécula; el átomo es
 * <Reveal>. Reglas: docs/motion-system.md.
 *
 * Escalona sus HIJOS DIRECTOS: cuando el grupo entra en el viewport, cada hijo
 * revela con un retraso = `calc(--k-motion-stagger * índice)`. La cadencia sale
 * SIEMPRE del token; el índice es una posición, no una magnitud de movimiento
 * (invariante token-only respetado).
 *
 * Accesibilidad: estado base VISIBLE; el estado oculto lo aplica el CSS solo
 * con scripting y sin reduced-motion. Sin JS o con reduced-motion, todo visible.
 */

type Direction = 'up' | 'down' | 'left' | 'right' | 'none'

// Tope de escalonado: a partir de aquí las piezas comparten índice y revelan
// juntas, para que una lista larga no acumule un retraso perceptible. Es un
// conteo estructural, no un valor de movimiento.
const MAX_STAGGER_STEPS = 6

export interface RevealGroupProps {
  children: ReactNode
  /** Etiqueta contenedora (p. ej. 'ul', 'div'). */
  as?: ElementType
  /** Sentido de entrada aplicado a cada hijo. */
  direction?: Direction
  /** Fracción visible (0–1) que dispara el revelado del grupo. */
  threshold?: number
  /** Revelar una sola vez (true) o re-animar al reentrar (false). */
  once?: boolean
  /** Bypass: render estático, sin movimiento. */
  disabled?: boolean
  className?: string
  style?: CSSProperties
}

export default function RevealGroup({
  children,
  as: Tag = 'div',
  direction = 'up',
  threshold = 0.15,
  once = true,
  disabled = false,
  className = '',
  style,
}: RevealGroupProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (disabled) return
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true)
            if (once) io.disconnect()
          } else if (!once) {
            setVisible(false)
          }
        }
      },
      { threshold },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [disabled, once, threshold])

  // disabled → render estático: no se decora nada.
  //
  // Cada hijo directo recibe la MISMA mecánica del átomo (`k-reveal` +
  // `is-visible` cuando el grupo entra), reutilizando la regla CSS ya existente
  // `.k-reveal.is-visible`. La cadencia la da su propio `--k-reveal-delay =
  // calc(stagger * paso)` (el token es la fuente; el paso es una posición). Así
  // no hace falta ninguna regla CSS nueva ni tocar el bloque `.k-reveal`.
  const decorated = disabled
    ? children
    : Children.map(children, (child, i) => {
        if (!isValidElement(child)) return child
        const el = child as ReactElement<{ className?: string; style?: CSSProperties }>
        const step = Math.min(i, MAX_STAGGER_STEPS)
        return cloneElement(el, {
          className: `${el.props.className ?? ''} k-reveal${visible ? ' is-visible' : ''}`.trim(),
          'data-direction': direction,
          style: {
            ...el.props.style,
            '--k-reveal-delay': `calc(var(--k-motion-stagger) * ${step})`,
          } as CSSProperties,
        } as Partial<{ className?: string; style?: CSSProperties }>)
      })

  // El contenedor lleva `k-reveal-group` solo como marcador semántico del grupo.
  const classes = disabled ? className : `k-reveal-group ${className}`.trim()

  return (
    <Tag ref={ref} className={classes} style={style}>
      {decorated}
    </Tag>
  )
}
