import { Container, Section } from '@/design-system/primitives'
import Reveal from '@/design-system/Reveal'
import RevealGroup from '@/design-system/RevealGroup'
import MediaSlot from './MediaSlot'
import { siteImages } from '@/config/site-images'
import type { BrandImageAsset } from '@/config/site-images'

/**
 * §4 — Seleccionar · Mejorar · Crear. La triple capacidad de KLYNN.
 *
 * Las tres imágenes están pensadas como una SECUENCIA visual coordinada (misma
 * luz, materiales, temperatura y encuadre 1:1), no como tres fotografías
 * independientes: comparten índice, línea de base y una regla continua que las
 * enlaza. Una sola frase por concepto; sin explicaciones repetidas. Tono
 * oscuro para dar peso a la capacidad.
 */

const FORMAS: { n: string; t: string; d: string; asset: BrandImageAsset; label: string }[] = [
  { n: '01', t: 'Seleccionar', d: 'Cuando lo mejor ya existe, lo encontramos.', asset: siteImages.formaSeleccionar, label: 'Seleccionar' },
  { n: '02', t: 'Mejorar', d: 'Cuando puede ser mejor, lo refinamos.', asset: siteImages.formaMejorar, label: 'Mejorar' },
  { n: '03', t: 'Crear', d: 'Cuando nada cumple, lo creamos.', asset: siteImages.formaCrear, label: 'Crear' },
]

export default function Formas() {
  return (
    <Section id="formas" rhythm="loose" tone="dark">
      <Container>
        <Reveal className="max-w-[44ch]">
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-[7px] w-[7px]" style={{ background: 'var(--color-k-terracotta)' }} />
            <span className="k-caption uppercase tracking-[0.28em] opacity-60">Tres formas de actuar</span>
          </div>
          <h2 className="k-h2 mt-14 text-[clamp(1.75rem,4.4vw,3.25rem)] leading-[1.1] tracking-[-0.018em]">
            Seleccionar. Mejorar. Crear.
          </h2>
        </Reveal>

        {/* Secuencia: regla continua superior + tres pasos alineados. */}
        <RevealGroup as="ol" className="mt-16 grid gap-x-10 gap-y-12 sm:mt-20 sm:grid-cols-3">
          {FORMAS.map(f => (
            <li key={f.n} className="flex flex-col">
              <MediaSlot
                asset={f.asset}
                sizes="(min-width: 640px) 30vw, 100vw"
                label={f.label}
                tone="dark"
                className="aspect-square w-full"
              />
              <div className="mt-6 flex items-baseline gap-3 border-t border-white/15 pt-5">
                <span className="k-caption text-[0.625rem] tracking-[0.2em] opacity-50">{f.n}</span>
                <div>
                  <h3 className="k-h3 text-[1.25rem] leading-[1.2]">{f.t}</h3>
                  <p className="k-body mt-3 max-w-[28ch] text-[1rem] leading-[1.6] opacity-70">{f.d}</p>
                </div>
              </div>
            </li>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  )
}
