import Image from 'next/image'
import type { BrandImageAsset } from '@/config/site-images'

/**
 * Slot de imagen de marca reemplazable.
 *
 * Consume un activo del manifiesto `siteImages`. Regla de oro del sistema:
 *
 *   - Si el activo NO existe todavía (`src === null`) devuelve `null`. No pinta
 *     placeholder, caja gris ni ícono roto: el componente que lo usa decide
 *     cómo se compone sin imagen. Así el primer fold nunca se ve "en beta".
 *   - Si el activo existe, lo pinta con `next/image` a la proporción canónica
 *     reservada en el manifiesto (width/height), por lo que sustituir un render
 *     de Lovart por la fotografía final NO mueve el layout.
 *
 * Al llegar el render definitivo solo cambia una línea en `site-images.ts`.
 * Este componente y quien lo consume no se tocan.
 */
export default function BrandImage({
  asset,
  sizes,
  className,
  fill = false,
}: {
  asset: BrandImageAsset
  /** Media hints para servir la resolución correcta (responsive/perf). */
  sizes?: string
  className?: string
  /** Si el contenedor define el tamaño (object-fit cover), usar fill. */
  fill?: boolean
}) {
  if (!asset.src) return null

  if (fill) {
    return (
      <Image
        src={asset.src}
        alt={asset.alt}
        fill
        sizes={sizes}
        priority={asset.priority}
        className={className}
      />
    )
  }

  return (
    <Image
      src={asset.src}
      alt={asset.alt}
      width={asset.width}
      height={asset.height}
      sizes={sizes}
      priority={asset.priority}
      className={className}
    />
  )
}

/** ¿El activo está listo para pintarse? Los layouts lo usan para decidir su composición. */
export function hasAsset(asset: BrandImageAsset): boolean {
  return Boolean(asset.src)
}
