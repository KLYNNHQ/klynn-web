// Fuente única de correos/teléfono (valores ACTUALES). No conectado aún a componentes.
// FASE VISUAL: migrar a dominio klynn.mx una vez verificado en Resend.
export const brandEmails = {
  contact: 'hola@magiclean.mx',
  sales: 'ventas@magiclean.mx',
  privacy: 'datos@magicleanproducts.com',
  noreply: 'noreply@magiclean.mx',
  phone: '+525571553635',
} as const

export type BrandEmails = typeof brandEmails
