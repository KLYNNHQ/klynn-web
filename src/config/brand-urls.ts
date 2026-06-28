// Fuente única de dominios/URLs (valores ACTUALES). No conectado aún a componentes.
// FASE VISUAL: migrar website a klynn.mx y revisar marketplaces/legacy.
export const brandUrls = {
  website: 'https://magiclean.mx',                 // FASE VISUAL → klynn.mx
  legacyDomain: 'https://magicleanproducts.com',
  vercelFallback: 'https://magiclean-web.vercel.app',
  marketplaces: {
    amazon: 'https://www.amazon.com.mx/stores/MAGICLEAN/page/CEC81E69-6144-4477-9A94-954741CB3AA4',
    mercadoLibre: 'https://www.mercadolibre.com.mx/tienda/magiclean',
    walmart: 'https://www.walmart.com.mx/search?q=Magiclean&facet=brand:Magiclean',
  },
} as const

export type BrandUrls = typeof brandUrls
