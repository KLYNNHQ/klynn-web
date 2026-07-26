import { Container, Section } from '@/design-system/primitives'

/**
 * Hero de ruta interna — jerarquía propia y consistente para /inversionistas,
 * /nuestro-criterio, /proveedores-y-socios, /journal, /contacto.
 *
 * Se renderiza ESTÁTICO (sin gating de reveal): el h1 es el elemento LCP del
 * primer fold; ocultarlo tras JS retrasa el LCP en móvil. Reutiliza el sistema
 * visual congelado (eyebrow + terracota, k-*). No rediseña identidad.
 */

export default function PageHero({
  eyebrow,
  title,
  lead,
  tone = 'light',
}: {
  eyebrow: string
  title: React.ReactNode
  lead?: string
  tone?: 'light' | 'dark' | 'raised'
}) {
  return (
    <Section
      tone={tone}
      rhythm="normal"
      className="relative pt-[128px] sm:pt-[152px]"
    >
      <Container>
        <div className="max-w-[56ch]">
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-[7px] w-[7px]" style={{ background: 'var(--color-k-terracotta)' }} />
            <span className={`k-caption uppercase tracking-[0.28em] ${tone === 'dark' ? 'opacity-60' : 'text-[var(--color-k-ink-muted-aa)]'}`}>{eyebrow}</span>
          </div>
          <h1 className="k-h1 mt-12 text-[clamp(2rem,5.4vw,4.5rem)] leading-[1.05] tracking-[-0.02em]">
            {title}
          </h1>
          {lead ? (
            <p className="k-body mt-10 max-w-[52ch] text-[1.0625rem] leading-[1.75] opacity-70">
              {lead}
            </p>
          ) : null}
        </div>
      </Container>
    </Section>
  )
}
