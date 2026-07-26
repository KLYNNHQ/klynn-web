import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import type { NextRequest } from 'next/server'

/**
 * S-18 — el endpoint debe estar cerrado mientras los formularios estén
 * apagados. Estas pruebas comprueban tanto la respuesta (404 genérico) como
 * la ausencia de efectos: ni rate-limit, ni Supabase, ni Resend.
 *
 * Todo va con dobles de prueba: no se abre ninguna conexión, no se escribe
 * ningún lead y no se envía ningún correo.
 */

// ─── Dobles de prueba ────────────────────────────────────────────────────────
const insertMock = vi.fn(() => Promise.resolve({ error: null }))
const fromMock = vi.fn(() => ({ insert: insertMock }))
const createClientMock = vi.fn(() => ({ from: fromMock }))
vi.mock('@supabase/supabase-js', () => ({ createClient: createClientMock }))

const sendMock = vi.fn(() => Promise.resolve({ data: { id: 'test' }, error: null }))
const ResendMock = vi.fn(() => ({ emails: { send: sendMock } }))
vi.mock('resend', () => ({ Resend: ResendMock }))

const checkRateLimitMock = vi.fn(() => Promise.resolve(null))
vi.mock('@/lib/rate-limit', () => ({ checkRateLimit: checkRateLimitMock }))

vi.mock('@sentry/nextjs', () => ({
  captureMessage: vi.fn(),
  captureException: vi.fn(),
}))

// ─── Utilidades ──────────────────────────────────────────────────────────────
function postRequest(body: unknown): NextRequest {
  return new Request('https://klynn.com.mx/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  }) as unknown as NextRequest
}

/** Carga el handler con el valor de FORMS_ENABLED indicado (undefined = ausente). */
async function loadRoute(formsEnabled: string | undefined) {
  vi.resetModules()
  if (formsEnabled === undefined) delete process.env.FORMS_ENABLED
  else process.env.FORMS_ENABLED = formsEnabled
  return import('./route')
}

const VALID_PAYLOAD = {
  nombre: 'Ana Prueba',
  empresa: 'Empresa Prueba',
  email: 'ana@ejemplo.com',
  canal: 'distribuidor',
  ciudad: 'CDMX',
}

function expectNoSideEffects() {
  expect(createClientMock).not.toHaveBeenCalled()
  expect(fromMock).not.toHaveBeenCalled()
  expect(insertMock).not.toHaveBeenCalled()
  expect(ResendMock).not.toHaveBeenCalled()
  expect(sendMock).not.toHaveBeenCalled()
  expect(checkRateLimitMock).not.toHaveBeenCalled()
}

const ORIGINAL_FORMS_ENABLED = process.env.FORMS_ENABLED

beforeEach(() => {
  vi.clearAllMocks()
  process.env.SUPABASE_URL = 'https://ejemplo.supabase.co'
  process.env.SUPABASE_SERVICE_ROLE_KEY = 'clave-de-prueba'
  process.env.RESEND_API_KEY = 'clave-de-prueba'
})

afterEach(() => {
  if (ORIGINAL_FORMS_ENABLED === undefined) delete process.env.FORMS_ENABLED
  else process.env.FORMS_ENABLED = ORIGINAL_FORMS_ENABLED
})

// ─── Formularios apagados ────────────────────────────────────────────────────
describe('POST /api/contact — formularios deshabilitados', () => {
  const apagados: Array<[string, string | undefined]> = [
    ['FORMS_ENABLED="false"', 'false'],
    ['variable ausente', undefined],
    ['cadena vacía', ''],
    ['"TRUE" en mayúsculas', 'TRUE'],
    ['"True" capitalizado', 'True'],
    ['"1"', '1'],
    ['"yes"', 'yes'],
    ['" true " con espacios', ' true '],
  ]

  it.each(apagados)('%s → 404 sin efectos secundarios', async (_caso, valor) => {
    const { POST } = await loadRoute(valor)
    const res = await POST(postRequest(VALID_PAYLOAD))

    expect(res.status).toBe(404)
    expectNoSideEffects()
  })

  it('responde un cuerpo genérico, sin filtrar variables ni detalles internos', async () => {
    const { POST } = await loadRoute('false')
    const res = await POST(postRequest(VALID_PAYLOAD))
    const body = await res.json()

    expect(body).toEqual({ error: 'Not found' })
    const serializado = JSON.stringify(body)
    expect(serializado).not.toMatch(/FORMS_ENABLED|SUPABASE|RESEND|supabase|resend/i)
  })

  it('tampoco procesa un payload válido: no se crea ningún lead', async () => {
    const { POST } = await loadRoute('false')
    const res = await POST(postRequest(VALID_PAYLOAD))

    expect(res.status).toBe(404)
    expect(insertMock).not.toHaveBeenCalled()
  })

  it('no evalúa siquiera el honeypot ni el cuerpo de la petición', async () => {
    const { POST } = await loadRoute('false')
    const res = await POST(postRequest({ ...VALID_PAYLOAD, website: 'bot' }))

    // Con formularios activos el honeypot devuelve 200; aquí debe ganar el 404.
    expect(res.status).toBe(404)
    expectNoSideEffects()
  })
})

// ─── Formularios encendidos: comportamiento preservado ───────────────────────
describe('POST /api/contact — formularios habilitados (FORMS_ENABLED="true")', () => {
  it('un payload inválido conserva su 400 y su mensaje de validación', async () => {
    const { POST } = await loadRoute('true')
    const res = await POST(postRequest({}))
    const body = await res.json()

    expect(res.status).toBe(400)
    expect(body.error).toBe('El campo "nombre" es obligatorio.')
    // La validación corta antes de persistir o enviar correo.
    expect(insertMock).not.toHaveBeenCalled()
    expect(sendMock).not.toHaveBeenCalled()
  })

  it('valida el formato de email como antes', async () => {
    const { POST } = await loadRoute('true')
    const res = await POST(postRequest({ ...VALID_PAYLOAD, email: 'no-es-un-email' }))
    const body = await res.json()

    expect(res.status).toBe(400)
    expect(body.error).toMatch(/email/i)
    expect(insertMock).not.toHaveBeenCalled()
  })

  it('el honeypot sigue devolviendo 200 sin persistir', async () => {
    const { POST } = await loadRoute('true')
    const res = await POST(postRequest({ ...VALID_PAYLOAD, website: 'bot' }))

    expect(res.status).toBe(200)
    expect(await res.json()).toEqual({ success: true })
    expect(insertMock).not.toHaveBeenCalled()
    expect(sendMock).not.toHaveBeenCalled()
  })

  it('un payload válido sí llega a Supabase (el flujo no quedó roto)', async () => {
    const { POST } = await loadRoute('true')
    const res = await POST(postRequest(VALID_PAYLOAD))

    expect(res.status).toBe(200)
    expect(checkRateLimitMock).toHaveBeenCalled()
    expect(fromMock).toHaveBeenCalledWith('leads')
    expect(insertMock).toHaveBeenCalledTimes(1)
  })
})
