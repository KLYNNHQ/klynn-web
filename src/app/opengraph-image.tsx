import { ImageResponse } from 'next/og'

export const alt = 'KLYNN — Objetos para la vida diaria'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

/**
 * Imagen Open Graph.
 *
 * Tipográfica y neutra, coherente con el sistema KLYNN: blanco cálido y
 * grafito, sin logotipo raster ni fotografía. El wordmark se compone con
 * la geometría del sistema y el punto Terracota como firma.
 */
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          width: '100%',
          height: '100%',
          padding: 96,
          backgroundColor: '#F5F4F1',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 132,
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: '#282625',
            display: 'flex',
          }}
        >
          KLYNN
          <span style={{ color: '#D07140' }}>.</span>
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 34,
            fontWeight: 400,
            color: '#9C9C9C',
            letterSpacing: '0.01em',
          }}
        >
          Objetos para la vida diaria.
        </div>
      </div>
    ),
    { ...size }
  )
}
