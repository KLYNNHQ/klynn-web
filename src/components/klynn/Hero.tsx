import { Container, Display, Section } from '@/design-system/primitives'

/**
 * Hero KLYNN.
 *
 * El primer fold vende la marca, no el catálogo. No nombra industria, no
 * enumera productos, no argumenta ventajas: sostiene una idea y deja
 * respirar. Los productos aparecen más abajo, cuando ya se sabe quién habla.
 *
 * Registro visual: lámina 11 del Master Design Manual — blanco cálido,
 * grafito, tipografía de display grande, silencio alrededor.
 *
 * El claim en inglés es el oficial de la marca (pie de todas las láminas del
 * manual). Es el único texto que no se traduce: funciona como firma.
 */

export default function Hero() {
  return (
    <Section rhythm="hero" tone="light" className="relative pt-[68px]">
      <Container>
        <div className="py-24 lg:py-32">
          <Display className="max-w-[18ch]">
            Built to belong.
            <br />
            Designed to endure.
          </Display>

          <p className="k-h3 mt-10 max-w-[38ch] text-[clamp(1.0625rem,2vw,1.6875rem)] leading-[1.45] text-[var(--color-k-gray-mid)]">
            Objetos bien diseñados para la vida diaria.
          </p>
        </div>
      </Container>

      {/* Señal de scroll — una línea, sin texto ni icono decorativo */}
      <span
        aria-hidden
        className="absolute bottom-10 left-6 h-14 w-px bg-[var(--color-k-gray-light)] lg:left-12"
      />
    </Section>
  )
}
