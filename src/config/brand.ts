// Agregador central de identidad de marca. Importar como `@/config/brand`.
// IMPORTANTE: scaffold preparado para el rebranding KLYNN. AÚN NO se conecta a
// ningún componente — esa integración es parte de la FASE VISUAL.
import { brandColors } from './brand-colors'
import { brandUrls } from './brand-urls'
import { brandEmails } from './brand-emails'
import { brandSocials } from './brand-socials'
import { brandAssets } from './brand-assets'

export const brand = {
  brandName: 'MagiClean',           // FASE VISUAL → 'KLYNN'
  legalName: 'Prolim BH, SA de CV', // NO cambia (razón social legal)
  technologyName: 'NeoShield',      // NO cambia (tecnología propia)
  colors: brandColors,
  urls: brandUrls,
  emails: brandEmails,
  socials: brandSocials,
  assets: brandAssets,
} as const

export type Brand = typeof brand

export { brandColors, brandUrls, brandEmails, brandSocials, brandAssets }
