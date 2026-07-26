import { Container, Section } from '@/design-system/primitives'
import Reveal from '@/design-system/Reveal'
import RevealGroup from '@/design-system/RevealGroup'

/**
 * El problema. Registro sobrio, sin dramatizar y sin estadísticas inventadas.
 * Tono oscuro: es "el ruido" del que KLYNN saca al cliente.
 */

const FRICCIONES = [
  'Demasiadas opciones para cada objeto.',
  'Calidad inconsistente entre marcas.',
  'Comparaciones que no terminan.',
  'Marketing que confunde más de lo que aclara.',
  'Decisiones simples vueltas complejas.',
  'La duda entre precio, calidad y utilidad real.',
]

export default function Problema() {
  return (
    <Section id="problema" rhythm="loose" tone="dark">
      <Container>
        <Reveal className="max-w-[46ch]">
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-[7px] w-[7px]" style={{ background: 'var(--color-k-terracotta)' }} />
            <span className="k-caption uppercase tracking-[0.28em] opacity-60">El problema</span>
          </div>
          <h2 className="k-h2 mt-14 text-[clamp(1.75rem,4.4vw,3.25rem)] leading-[1.1] tracking-[-0.018em]">
            Elegir bien se volvió agotador.
          </h2>
          <p className="k-body mt-10 text-[1.0625rem] leading-[1.75] opacity-70">
            Nunca hubo tantas opciones para algo tan simple. Y casi nunca hay una
            forma confiable de saber cuál es la correcta.
          </p>
        </Reveal>

        <RevealGroup as="ul" className="mt-16 grid gap-x-12 gap-y-8 sm:mt-20 sm:grid-cols-2">
          {FRICCIONES.map((f, i) => (
            <li key={f} className="flex items-baseline gap-4 border-t border-white/15 pt-5">
              <span className="k-caption text-[0.625rem] tracking-[0.2em] opacity-40">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="k-body text-[1rem] leading-[1.5] opacity-85">{f}</span>
            </li>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  )
}
