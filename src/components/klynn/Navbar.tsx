'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Wordmark from './Wordmark'
import { track, AnalyticsEvents } from '@/lib/analytics'

/** Dispara category_navigation solo para el enlace de Categorías. */
function onNavClick(href: string) {
  if (href.includes('ecosistema')) track(AnalyticsEvents.CategoryNavigation, { source: 'nav' })
}

/**
 * Navbar KLYNN.
 *
 * Sobre el fold es transparente: la marca flota, no se enmarca. Una franja
 * opaca cruzando el hero invierte la jerarquía — lo primero que ve el ojo
 * pasa a ser lo menos importante de la página.
 *
 * Al abandonar el fold adopta fondo grafito, porque a partir de ahí compite
 * con contenido y necesita separarse.
 *
 * El CTA comercial no vive aquí: en el primer fold una petición de
 * presupuesto contradice el registro de marca. Aparece más abajo.
 *
 * Idioma: toda la experiencia en español.
 */

// Solo anclas de la home mientras las rutas internas se reconstruyen. La
// navegación definitiva (Inicio · Categorías · Productos · Nosotros ·
// Contacto) llega en la fase de construcción. /productos se purgó.
// Journal se retira de la navegación principal (tenía demasiado peso para
// esta etapa) y se conserva en el footer. Su ruta y artículos siguen vivos.
const LINKS = [
  { href: '/nuestro-criterio', label: 'Nuestro criterio' },
  { href: '/#ecosistema', label: 'Categorías' },
  { href: '/contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid
          ? 'bg-[var(--color-k-graphite)] text-[var(--color-k-white)]'
          : 'bg-transparent text-[var(--color-k-graphite)]'
      }`}
    >
      <nav className="mx-auto flex h-[84px] max-w-[1440px] items-center justify-between px-8 lg:px-16">
        <Link href="/" aria-label="KLYNN" className="flex items-center">
          <Wordmark height={26} />
        </Link>

        <ul className="hidden items-center gap-12 lg:flex">
          {LINKS.map(l => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => onNavClick(l.href)}
                className="k-caption text-[0.6875rem] uppercase tracking-[0.2em] opacity-80 transition-opacity duration-300 hover:opacity-100"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen(v => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden">
          <ul className="mx-auto max-w-[1440px] px-8 pb-6">
            {LINKS.map(l => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => { onNavClick(l.href); setOpen(false) }}
                  className="k-caption block py-3 text-[0.75rem] uppercase tracking-[0.2em] opacity-70"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
