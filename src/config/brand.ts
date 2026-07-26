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
  /**
   * Razón social publicada.
   *
   * ⚠️ VERIFICAR ANTES DE PUBLICAR: este valor aparece en el aviso de
   * privacidad, los términos de uso y el JSON-LD. Un aviso de privacidad
   * debe identificar al responsable real del tratamiento de datos; si la
   * sociedad no está constituida, el dato debe corregirse antes de que el
   * sitio sea público.
   */
  // Provisional: NO se muestra una entidad legal no constituida al público.
  // Se usa "KLYNN" hasta confirmar la razón social real. [DATO PENDIENTE — no público]
  legalName: 'KLYNN',
  /**
   * Nombre de tecnología de marca. Sin definir: cualquier tecnología heredada
   * quedó fuera de la superficie pública. Se poblará cuando exista una propia
   * de KLYNN.
   */
  technologyName: null,
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
