/**
 * Interruptores de funcionalidad — punto ÚNICO de (re)activación.
 *
 * `formsEnabled`: controla si los formularios públicos que envían a
 * `/api/contact` se muestran. Desactivado POR DEFECTO: mientras no exista
 * infraestructura real y operativa, ninguna página renderiza un formulario
 * (no queda en el DOM, no es accesible por teclado ni por tecnologías
 * asistivas). En su lugar se muestra un CTA institucional no interactivo.
 *
 * Para reactivar TODOS los formularios de una sola vez, cuando existan:
 *   - SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY (proyecto Supabase con tabla `leads`)
 *   - KV_REST_API_URL + KV_REST_API_TOKEN (rate-limit operativo; ya degrada abierto)
 *   - persistencia auditable del consentimiento
 * establecer la variable de entorno:  FORMS_ENABLED=true
 *
 * No hace falta tocar ningún componente: basta esta bandera.
 */
export const formsEnabled = process.env.FORMS_ENABLED === 'true'
