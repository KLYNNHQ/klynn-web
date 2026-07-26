/**
 * Wordmark KLYNN.
 *
 * Geometría vectorizada desde el arte maestro aprobado
 * (`KLYNN_OS/02_SISTEMA_DE_DISEÑO/Master_Wordmark_v1.png`, lámina 1).
 * Reproduce el master tal cual, incluidas sus irregularidades: las dos N
 * tienen anchos distintos y el grosor de asta varía entre letras. Es
 * intencional — decisión del dueño (opción A1): fidelidad sobre regularidad.
 *
 * El PNG del Manual sigue siendo la referencia oficial de marca. Cuando
 * exista un SVG oficial, se sustituye el `d` de este archivo y nada más.
 *
 * Hereda el color del contexto vía `currentColor`, por lo que las versiones
 * primary (grafito) y reversed (blanco cálido) salen del mismo componente.
 */

const RATIO = 530.3 / 100 // ancho / cap-height del master

interface WordmarkProps {
  /** Altura de caja en px. El ancho se deriva de la proporción del master. */
  height?: number
  className?: string
}

export default function Wordmark({ height = 24, className }: WordmarkProps) {
  return (
    <svg
      viewBox="0 0 530.3 100"
      height={height}
      width={height * RATIO}
      role="img"
      aria-label="KLYNN"
      className={className}
      fill="currentColor"
    >
      <title>KLYNN</title>
      <path d="M0 50 L0 100 L16.1 99.81 L16.1 76.91 L36.07 57.28 L38.35 59.25 L47.98 69.81 L74.72 99.99 L97.79 99.93 L49.14 44.7 L51.1 42.25 L66.29 26.75 L92.56 0.44 L92.43 0.05 L91.21 0.04 L91.01 0.32 L89.16 0.32 L88.99 0.01 L86.84 0.01 L86.67 0.32 L82.81 0.02 L82.65 0.32 L70.28 0.32 L70.11 0.01 L68.62 0.01 L16.25 52.65 L16.1 0.41 L11.46 0.32 L11.25 0.02 L3.72 0.32 L3.52 0.03 L0 0 Z M117.37 0.25 L117.33 22.48 L117.07 22.76 L117.33 23.05 L117.33 99.84 L191.28 99.96 L191.24 85.22 L135.76 85.22 L135.52 84.98 L135.52 0.46 L135.07 0.01 L117.43 0.01 Z M189.59 0.06 L189.54 0.53 L191.7 3.61 L204.6 20.87 L231.87 58.93 L231.87 99.91 L250.51 100 L250.45 59.22 L264.07 39.41 L272.73 27.68 L291.89 0.36 L268.88 0.32 L256.71 17.77 L252.3 24.69 L248.9 29.19 L243.02 38.31 L241.35 40.6 L240.94 40.65 L215.46 3.57 L213.51 0.01 L191.79 0.01 L191.62 0.32 Z M394.44 0.26 L394.16 74.63 L375.44 53.06 L356.05 31.78 L328.29 0.32 L310.85 0.36 L310.81 99.88 L328.69 99.91 L328.91 29.01 L362.82 65.78 L393.61 100 L411.38 99.96 L411.43 0.51 L411.34 0.01 L394.5 0.01 Z M446.1 0.57 L445.87 91.63 L446.13 99.96 L463.04 99.88 L463.08 30.38 L463.35 30.33 L491.29 63.61 L520.35 99.18 L521.15 100 L530.3 99.85 L530.3 0.41 L529.9 0.01 L514.37 0.01 L513.89 0.39 L513.89 22.52 L513.58 22.9 L513.89 23.29 L513.89 59.76 L513.49 59.86 L464.05 0.01 L446.1 0.01 Z" />
    </svg>
  )
}
