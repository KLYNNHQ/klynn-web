// Correos y teléfono oficiales de KLYNN.
//
// ⚠️ PENDIENTE: no existe todavía ningún dato de contacto oficial de KLYNN.
// Cualquier valor heredado fue retirado; cada campo entra en cuanto se dé de
// alta el dominio y la verificación en Resend.
//
// `null` es intencional: obliga a los componentes a decidir qué hacer ante
// la ausencia en vez de renderizar una cadena vacía.
export const brandEmails = {
  contact: null,
  sales: null,
  privacy: null,
  noreply: null,
  phone: null,
} as const

export type BrandEmails = typeof brandEmails
