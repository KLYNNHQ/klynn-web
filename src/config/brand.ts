// Agregador central de identidad de marca. Importar como `@/config/brand`.
// Fuente única: ningún componente debe hardcodear nombre, color, correo,
// dominio ni ruta de asset de marca.
import { brandColors, categoryColors } from './brand-colors'
import { brandFonts, typeScale } from './brand-typography'
import { brandUrls } from './brand-urls'
import { brandEmails } from './brand-emails'
import { brandSocials } from './brand-socials'
import { brandAssets } from './brand-assets'

export const brand = {
  brandName: 'KLYNN',
  legalName: 'Prolim BH, SA de CV', // razón social — NO cambia
  technologyName: 'NeoShield',      // tecnología propia — NO cambia
  colors: brandColors,
  categoryColors,
  fonts: brandFonts,
  typeScale,
  urls: brandUrls,
  emails: brandEmails,
  socials: brandSocials,
  assets: brandAssets,
} as const

export type Brand = typeof brand

export {
  brandColors,
  categoryColors,
  brandFonts,
  typeScale,
  brandUrls,
  brandEmails,
  brandSocials,
  brandAssets,
}
