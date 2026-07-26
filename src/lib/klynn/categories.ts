/**
 * Registro de categorías KLYNN — las 10 congeladas.
 *
 * KLYNN es una marca de objetos para la vida diaria, no una empresa de una
 * sola línea. Todas las categorías tienen el mismo peso: ninguna domina, y
 * CLEAN no es la principal. El color quedó fuera de la superficie por
 * decisión de marca (llega solo por fotografía real), así que aquí no hay
 * color: el registro es nombre + descriptor + estado.
 *
 * Agregar o reordenar categorías se hace solo aquí; ningún componente cambia.
 */

export type CategoryKey =
  | 'home'
  | 'kitchen'
  | 'storage'
  | 'clean'
  | 'tech'
  | 'wellness'
  | 'outdoor'
  | 'pet'
  | 'travel'
  | 'automotive'

export interface Category {
  key: CategoryKey
  /** Nombre de marca, en mayúsculas en superficie. */
  nombre: string
  /** Qué territorio cubre. Objeto, no industria. */
  descriptor: string
  /** Tiene catálogo vivo. Hoy ninguna se publica como disponible. */
  activa: boolean
}

// Orden intencional: agrupa la vida de la casa primero, lo personal después,
// lo que sale de casa al final. No alfabético, no por prioridad comercial.
export const CATEGORIES: Category[] = [
  { key: 'home',       nombre: 'KLYNN HOME',       descriptor: 'La casa',                  activa: false },
  { key: 'kitchen',    nombre: 'KLYNN KITCHEN',    descriptor: 'La cocina',                activa: false },
  { key: 'storage',    nombre: 'KLYNN STORAGE',    descriptor: 'El orden',                 activa: false },
  { key: 'clean',      nombre: 'KLYNN CLEAN',      descriptor: 'El cuidado',               activa: false },
  { key: 'tech',       nombre: 'KLYNN TECH',       descriptor: 'La energía',               activa: false },
  { key: 'wellness',   nombre: 'KLYNN WELLNESS',   descriptor: 'El bienestar',             activa: false },
  { key: 'outdoor',    nombre: 'KLYNN OUTDOOR',    descriptor: 'El exterior',              activa: false },
  { key: 'pet',        nombre: 'KLYNN PET',        descriptor: 'La vida con animales',     activa: false },
  { key: 'travel',     nombre: 'KLYNN TRAVEL',     descriptor: 'El viaje',                 activa: false },
  { key: 'automotive', nombre: 'KLYNN AUTOMOTIVE', descriptor: 'El auto',                  activa: false },
]
