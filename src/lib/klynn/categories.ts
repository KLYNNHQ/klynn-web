/**
 * Registro de categorías KLYNN.
 *
 * KLYNN es una marca de objetos bien diseñados, no una empresa de una sola
 * línea. El registro es la pieza que hace que agregar una categoría no
 * implique tocar ningún componente: se añade una entrada aquí y una regla de
 * color en globals.css, y todo el sistema la absorbe.
 *
 * ── Estado del color ──────────────────────────────────────────────────────
 * El Master Design Manual v1.0 (lámina 06) aprueba acento para CINCO
 * categorías: CLEAN, TECH, HOME, KITCHEN y BATH.
 *
 * STORAGE, PET y WELLNESS todavía NO tienen acento aprobado: usan el neutro
 * del sistema hasta que exista decisión de marca. No se les asigna un color
 * inventado.
 *
 * BATH está aprobada en el manual pero no aparece en la lista de trabajo
 * actual. Se conserva registrada y fuera de navegación (`visible: false`)
 * hasta que se aclare si se mantiene o se absorbe en WELLNESS.
 */

export type CategoryKey =
  | 'clean'
  | 'kitchen'
  | 'home'
  | 'tech'
  | 'storage'
  | 'pet'
  | 'wellness'
  | 'bath'

export interface Category {
  key: CategoryKey
  /** Nombre de marca, siempre en mayúsculas en superficie. */
  nombre: string
  /** Qué resuelve la categoría. Objeto, no industria. */
  descriptor: string
  /** El acento existe en el manual. Si es false, hereda el neutro. */
  accentApproved: boolean
  /** Tiene catálogo vivo hoy. */
  activa: boolean
  /** Aparece en navegación y grillas. */
  visible: boolean
}

export const CATEGORIES: Category[] = [
  { key: 'home',     nombre: 'KLYNN HOME',     descriptor: 'Objetos para la casa',      accentApproved: true,  activa: false, visible: true },
  { key: 'kitchen',  nombre: 'KLYNN KITCHEN',  descriptor: 'Cocina y preparación',      accentApproved: true,  activa: false, visible: true },
  { key: 'tech',     nombre: 'KLYNN TECH',     descriptor: 'Energía y conectividad',    accentApproved: true,  activa: false, visible: true },
  { key: 'clean',    nombre: 'KLYNN CLEAN',    descriptor: 'Cuidado de superficies',    accentApproved: true,  activa: true,  visible: true },
  { key: 'storage',  nombre: 'KLYNN STORAGE',  descriptor: 'Orden y almacenamiento',    accentApproved: false, activa: false, visible: true },
  { key: 'pet',      nombre: 'KLYNN PET',      descriptor: 'Vida con animales',         accentApproved: false, activa: false, visible: true },
  { key: 'wellness', nombre: 'KLYNN WELLNESS', descriptor: 'Cuidado personal',          accentApproved: false, activa: false, visible: true },
  { key: 'bath',     nombre: 'KLYNN BATH',     descriptor: 'Baño',                      accentApproved: true,  activa: false, visible: false },
]

export const VISIBLE_CATEGORIES = CATEGORIES.filter(c => c.visible)

export const ACTIVE_CATEGORIES = CATEGORIES.filter(c => c.activa)
