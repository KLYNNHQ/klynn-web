import type { Block } from '@/lib/klynn/journal'

/** Renderiza los bloques estructurados de un artículo con la tipografía KLYNN. */
export default function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-8">
      {blocks.map((b, i) => {
        if (b.type === 'h2') {
          return (
            <h2 key={i} className="k-h3 pt-6 text-[clamp(1.375rem,3vw,1.875rem)] leading-[1.2] tracking-[-0.01em] text-[var(--color-k-graphite)]">
              {b.text}
            </h2>
          )
        }
        if (b.type === 'quote') {
          return (
            <blockquote key={i} className="border-l-2 pl-6" style={{ borderColor: 'var(--color-k-terracotta)' }}>
              <p className="k-h3 text-[clamp(1.25rem,2.6vw,1.625rem)] font-medium leading-[1.4] tracking-[-0.01em] text-[var(--color-k-graphite)]">
                {b.text}
              </p>
            </blockquote>
          )
        }
        return (
          <p key={i} className="k-body max-w-[68ch] text-[1.0625rem] leading-[1.8] text-[var(--color-k-graphite)] opacity-80">
            {b.text}
          </p>
        )
      })}
    </div>
  )
}
