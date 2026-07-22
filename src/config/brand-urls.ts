// Dominios y URLs de KLYNN. Fuente única de la marca.
export const brandUrls = {
  /** Dominio canónico. Todo canonical, OG, sitemap y JSON-LD deriva de aquí. */
  website: 'https://klynn.com.mx',
  /**
   * Marketplaces: las tiendas de Amazon, Mercado Libre y Walmart pertenecen
   * a la marca anterior y NO se enlazan desde la superficie de KLYNN.
   * Entrarán cuando existan tiendas propias.
   */
  marketplaces: {
    amazon: null,
    mercadoLibre: null,
    walmart: null,
  },
} as const

export type BrandUrls = typeof brandUrls
