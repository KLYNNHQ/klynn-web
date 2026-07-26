import Reveal from '@/design-system/Reveal'

/**
 * Sustituto no interactivo de los formularios mientras la infraestructura de
 * envío (Supabase + rate-limit) no esté operativa (ver src/config/features.ts).
 *
 * No es un formulario: no tiene campos, botones de envío, enlaces muertos ni
 * mensajes de error técnico. No inventa correo, teléfono ni razón social. Es un
 * cierre institucional honesto y coherente con la etapa de lanzamiento.
 */
export default function ContactFallback() {
  return (
    <Reveal>
      <p className="k-caption uppercase tracking-[0.24em] text-[var(--color-k-ink-muted-aa)]">
        Etapa de lanzamiento
      </p>
      <h2 className="k-h2 mt-6 max-w-[24ch] text-[clamp(1.5rem,3.6vw,2.5rem)] leading-[1.1] tracking-[-0.018em]">
        Abriremos la conversación pronto.
      </h2>
      <p className="k-body mt-6 max-w-[46ch] text-[1.0625rem] leading-[1.75] text-[var(--color-k-ink-muted-aa)]">
        KLYNN está construyendo su primera categoría. Habilitaremos los canales
        de contacto junto con el lanzamiento. Gracias por tu interés.
      </p>
    </Reveal>
  )
}
