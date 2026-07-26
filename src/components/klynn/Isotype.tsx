import Image from 'next/image'

/**
 * Isotipo K oficial de KLYNN — ASSET RASTER PROVISIONAL.
 *
 * Extraído del manual maestro (KLYNN Master Design Manual v1.0, página
 * "VERSIONES OFICIALES" → versión "SÍMBOLO SOLO": la K blanca dentro del
 * círculo grafito) a alta resolución, con máscara circular (transparencia
 * fuera del círculo). NO se reconstruyó, redibujó, traceó ni interpretó: la
 * geometría, los cortes, el círculo y el color son los oficiales, intactos.
 *
 * PENDIENTE: sustituir por el SVG oficial cuando exista — reemplazar el archivo
 * en `public/brand/provisional/klynn-isotype-PROVISIONAL.*` y nada más.
 *
 * El símbolo es grafito + K blanca: pensado para fondos claros. Sobre fondos
 * oscuros el círculo baja de contraste (la K blanca sigue legible).
 */
export default function Isotype({
  size = 28,
  className,
  priority = false,
}: {
  /** Lado en px (el símbolo es cuadrado 1:1). */
  size?: number
  className?: string
  priority?: boolean
}) {
  return (
    <Image
      src="/brand/provisional/klynn-isotype-PROVISIONAL.webp"
      alt="Isotipo KLYNN"
      width={size}
      height={size}
      priority={priority}
      className={className}
    />
  )
}
