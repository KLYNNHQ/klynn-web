import { Container, Section } from '@/design-system/primitives'

/**
 * Hero KLYNN.
 *
 * Decisiones de dirección de arte:
 *
 * 1. RETÍCULA VISIBLE. En diseño industrial la retícula es el mensaje: dice
 *    que existe un sistema detrás. Sustituye al vacío indiferenciado por
 *    estructura medida. Es además el motivo que aparece en la lámina 11 del
 *    manual, donde el mockup lleva fondo de papel milimetrado.
 *
 * 2. COMPOSICIÓN ANCLADA, NO CENTRADA. El bloque no flota: se apoya sobre
 *    una regla horizontal en el tercio inferior. Arriba queda aire —que ahora
 *    enmarca en vez de sobrar—, abajo una banda de datos. El blanco pasa a
 *    ser decisión y no residuo.
 *
 * 3. TERRACOTA COMO FIRMA, NO COMO DECORACIÓN. Dos apariciones mínimas y
 *    exactas: el punto final del claim y el índice. Un color propietario se
 *    reconoce por precisión, no por cantidad.
 *
 * 4. BANDA DE ESPECIFICACIÓN. El registro micro-tipográfico que usan Braun y
 *    Bang & Olufsen en sus fichas técnicas. Aporta densidad y precisión sin
 *    añadir ruido, y da al ojo el tercer punto de lectura que faltaba.
 *
 * 5. UNA SOLA LENGUA. El fold es capa de marca y habla inglés; la operación
 *    habla español más abajo. Una regla explícita en lugar de una mezcla.
 */

const SPEC = [
  { i: '01', label: 'Mexico' },
  { i: '02', label: 'Seven categories' },
  { i: '03', label: 'One standard' },
]

export default function Hero() {
  return (
    <Section rhythm="hero" tone="light" className="relative overflow-hidden">
      {/* Retícula de construcción — 12 columnas, hairline casi inaudible */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.32]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(to right, var(--color-k-gray-light) 0 1px, transparent 1px calc(100% / 12))',
          backgroundSize: '100% 100%',
        }}
      />

      <Container className="relative flex h-full flex-col justify-end pb-0">
        {/* Índice — firma cromática superior */}
        <div className="mb-auto flex items-center gap-3 pt-40">
          <span
            aria-hidden
            className="h-[7px] w-[7px]"
            style={{ background: 'var(--color-k-terracotta)' }}
          />
          <span className="k-caption uppercase tracking-[0.28em] text-[var(--color-k-graphite)] opacity-70">
            Design system
          </span>
        </div>

        {/* Titular — apoyado sobre la regla */}
        <h1 className="k-h1 max-w-[20ch] pb-10 text-[clamp(2.75rem,8.4vw,7.25rem)] leading-[0.98] tracking-[-0.022em]">
          Built to belong.
          <br />
          Designed to endure
          <span style={{ color: 'var(--color-k-terracotta)' }}>.</span>
        </h1>

        <div className="h-px w-full bg-[var(--color-k-gray-light)]" />

        {/* Banda de especificación */}
        <div className="flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
          <ul className="flex flex-wrap items-center gap-x-12 gap-y-3">
            {SPEC.map(s => (
              <li key={s.i} className="flex items-baseline gap-3">
                <span className="k-caption text-[0.625rem] tracking-[0.2em] text-[var(--color-k-graphite)] opacity-40">
                  {s.i}
                </span>
                <span className="k-caption text-[0.6875rem] uppercase tracking-[0.2em] text-[var(--color-k-graphite)] opacity-70">
                  {s.label}
                </span>
              </li>
            ))}
          </ul>

          <span className="k-caption flex items-center gap-3 text-[0.625rem] uppercase tracking-[0.2em] text-[var(--color-k-graphite)] opacity-40">
            Scroll
            <span aria-hidden className="block h-px w-10 bg-current" />
          </span>
        </div>
      </Container>
    </Section>
  )
}
