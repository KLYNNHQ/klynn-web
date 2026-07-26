'use client'

import { useEffect, useRef, useState } from 'react'
import type { CSSProperties, ElementType, ReactNode } from 'react'

/**
 * Reveal — primitiva del Lenguaje de Movimiento de KLYNN.
 *
 * Revela su contenido cuando entra en el viewport, con la única gestualidad
 * del sistema (ascenso suave). Reglas congeladas: docs/motion-system.md.
 * Tokens y estados base: src/app/globals.css.
 *
 * Contrato:
 *  - Estado base VISIBLE. El estado oculto lo aplica el CSS solo cuando hay
 *    scripting y el usuario no pidió reducir movimiento. Sin JS o con
 *    reduced-motion, el contenido se ve siempre (degrada con dignidad).
 *  - No conoce el contenido: sirve a cualquier sección o página futura.
 *  - Los valores por defecto (duración/distancia/cadencia) salen de los
 *    tokens `--k-motion-*`, nunca hardcodeados aquí.
 *
 * API definitiva (ver estado por prop en docs/motion-system.md). Aunque hoy
 * se use en pocas secciones, la superficie es estable para no rediseñarla.
 */

type Direction = 'up' | 'down' | 'left' | 'right' | 'none'

export interface RevealProps {
  children: ReactNode
  /** Etiqueta contenedora — preserva la semántica (p. ej. 'h1', 'section'). */
  as?: ElementType
  /** Retraso antes de revelar, en ms. */
  delay?: number
  /** Duración de la transición, en ms. Default: token --k-motion-duration. */
  duration?: number
  /** Desplazamiento de entrada, en px. Default: token --k-motion-distance. */
  distance?: number
  /** Eje y sentido del desplazamiento de entrada. */
  direction?: Direction
  /** Fracción visible (0–1) que dispara el revelado. */
  threshold?: number
  /** Revelar una sola vez (true) o re-animar al reentrar (false). */
  once?: boolean
  /**
   * Cadencia entre hijos directos, en ms. RESERVADA: la API queda fija; la
   * orquestación de grupo se completa cuando se use en varias piezas (Fase 3).
   */
  stagger?: number
  /** Bypass: render estático, sin movimiento. */
  disabled?: boolean
  className?: string
  style?: CSSProperties
}

export default function Reveal({
  children,
  as: Tag = 'div',
  delay = 0,
  duration,
  distance,
  direction = 'up',
  threshold = 0.15,
  once = true,
  // `stagger` queda en la API (RevealProps) como reservada; no se consume aún.
  disabled = false,
  className = '',
  style,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (disabled) return
    const el = ref.current
    if (!el) return

    // Con reduced-motion no armamos ni observamos: el CSS mantiene el contenido
    // visible (el estado oculto está gated por `no-preference`).
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

  // Solo se emiten los tokens de instancia que difieren del default global.
  const cssVars: Record<string, string> = {}
  if (duration != null) cssVars['--k-reveal-duration'] = `${duration}ms`
  if (delay) cssVars['--k-reveal-delay'] = `${delay}ms`
  if (distance != null) cssVars['--k-reveal-distance'] = `${distance}px`

  // disabled → sin la clase de movimiento: render estático y siempre visible.
  const classes = disabled
    ? className
    : `k-reveal${visible ? ' is-visible' : ''} ${className}`.trim()

  return (
    <Tag
      ref={ref}
      data-direction={disabled ? undefined : direction}
      className={classes}
      style={{ ...cssVars, ...style } as CSSProperties}
    >
      {children}
    </Tag>
  )
}
