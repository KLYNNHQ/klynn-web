'use client'

import { useId, useState } from 'react'
import { track, AnalyticsEvents } from '@/lib/analytics'

/**
 * Formulario de contacto/lead — envío REAL a /api/contact (guarda en Supabase).
 *
 * No simula éxito: el estado "enviado" solo aparece si la API responde ok. Si
 * falta la credencial de Resend, el lead igual se guarda (la API degrada). Con
 * honeypot, consentimiento obligatorio, validación y manejo de error.
 *
 * `audience` viaja como `canal`. Campos extra (país, sitio web) se conservan en
 * el mensaje. La API exige nombre, empresa, email, canal, ciudad.
 */

type State = 'idle' | 'loading' | 'sent' | 'error'

const inputCls =
  'k-body w-full border-b border-[var(--color-k-border-strong)] bg-transparent py-3 text-[1rem] text-[var(--color-k-graphite)] outline-none placeholder:text-[var(--color-k-ink-muted-aa)] focus-visible:border-[var(--color-k-graphite)]'

export default function LeadForm({
  audience,
  b2b = false,
}: {
  /** Audiencia → viaja como `canal`. */
  audience: 'consumidor' | 'inversionista' | 'proveedor' | 'socio' | 'prensa'
  /** Muestra campos de empresa/sitio web (fabricantes, socios). */
  b2b?: boolean
}) {
  const id = useId()
  const [state, setState] = useState<State>('idle')
  const [error, setError] = useState('')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    const form = e.currentTarget
    const data = new FormData(form)

    const nombre = String(data.get('nombre') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const empresa = String(data.get('empresa') ?? '').trim() || '—'
    const pais = String(data.get('pais') ?? '').trim()
    const sitio = String(data.get('sitio') ?? '').trim()
    const mensajeBase = String(data.get('mensaje') ?? '').trim()
    const website = String(data.get('website') ?? '') // honeypot
    const consent = data.get('consent')

    if (!nombre || !email || !pais || !mensajeBase) {
      setError('Completa nombre, correo, país y mensaje.')
      return
    }
    if (!consent) {
      setError('Necesitamos tu consentimiento para tratar los datos.')
      return
    }

    const mensaje = [mensajeBase, sitio ? `Sitio web: ${sitio}` : '']
      .filter(Boolean)
      .join('\n')

    setState('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, empresa, email, canal: audience, ciudad: pais, mensaje, website }),
      })
      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body?.error || 'No se pudo enviar. Inténtalo de nuevo.')
      }
      // Evento según audiencia (solo metadatos no personales).
      const evt =
        audience === 'proveedor' || audience === 'socio'
          ? AnalyticsEvents.PartnerContactSubmit
          : audience === 'inversionista'
            ? AnalyticsEvents.InvestorContactSubmit
            : AnalyticsEvents.ContactFormSubmit
      track(evt, { audience })
      setState('sent')
      form.reset()
    } catch (err) {
      setState('error')
      setError(err instanceof Error ? err.message : 'No se pudo enviar.')
    }
  }

  if (state === 'sent') {
    return (
      <div role="status" className="border border-[var(--color-k-border-strong)] p-8">
        <p className="k-h3 text-[1.25rem] text-[var(--color-k-graphite)]">Gracias. Recibimos tu mensaje.</p>
        <p className="k-body mt-3 text-[0.9375rem] text-[var(--color-k-ink-muted-aa)]">
          Te responderemos al correo que dejaste.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-6">
      {/* Honeypot — invisible y fuera de tab order. Debe llegar vacío. */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-nombre`} className="k-caption uppercase tracking-[0.16em] opacity-60">Nombre*</label>
          <input id={`${id}-nombre`} name="nombre" required autoComplete="name" className={`${inputCls} mt-2`} />
        </div>
        <div>
          <label htmlFor={`${id}-email`} className="k-caption uppercase tracking-[0.16em] opacity-60">Correo*</label>
          <input id={`${id}-email`} name="email" type="email" required autoComplete="email" className={`${inputCls} mt-2`} />
        </div>
        {b2b && (
          <div>
            <label htmlFor={`${id}-empresa`} className="k-caption uppercase tracking-[0.16em] opacity-60">Empresa</label>
            <input id={`${id}-empresa`} name="empresa" autoComplete="organization" className={`${inputCls} mt-2`} />
          </div>
        )}
        <div>
          <label htmlFor={`${id}-pais`} className="k-caption uppercase tracking-[0.16em] opacity-60">País*</label>
          <input id={`${id}-pais`} name="pais" required className={`${inputCls} mt-2`} />
        </div>
        {b2b && (
          <div className="sm:col-span-2">
            <label htmlFor={`${id}-sitio`} className="k-caption uppercase tracking-[0.16em] opacity-60">Sitio web</label>
            <input id={`${id}-sitio`} name="sitio" type="url" placeholder="https://" className={`${inputCls} mt-2`} />
          </div>
        )}
      </div>

      <div>
        <label htmlFor={`${id}-mensaje`} className="k-caption uppercase tracking-[0.16em] opacity-60">Mensaje*</label>
        <textarea id={`${id}-mensaje`} name="mensaje" required rows={4} className={`${inputCls} mt-2 resize-none`} />
      </div>

      <label className="flex items-start gap-3">
        <input type="checkbox" name="consent" required className="mt-1 h-4 w-4 accent-[var(--color-k-graphite)]" />
        <span className="k-body text-[0.875rem] leading-[1.5] text-[var(--color-k-ink-muted-aa)]">
          Acepto que KLYNN trate mis datos para responder a este mensaje, según el{' '}
          <a href="/aviso-de-privacidad" className="underline hover:opacity-80">Aviso de Privacidad</a>.
        </span>
      </label>

      {error && (
        <p role="alert" className="k-body text-[0.875rem]" style={{ color: 'var(--color-k-danger)' }}>{error}</p>
      )}

      <div>
        <button
          type="submit"
          disabled={state === 'loading'}
          className="k-button k-ui-transition-opacity inline-block bg-[var(--color-k-graphite)] px-9 py-4 text-[var(--color-k-white)] hover:opacity-90 disabled:opacity-50"
        >
          {state === 'loading' ? 'Enviando…' : 'Enviar mensaje'}
        </button>
      </div>
    </form>
  )
}
