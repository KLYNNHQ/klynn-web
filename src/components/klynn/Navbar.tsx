'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Wordmark from './Wordmark'

/**
 * Navbar KLYNN — barra grafito con wordmark reversed, según la lámina 11
 * (Landing Page Mockups) del Master Design Manual v1.0.
 *
 * Fase 1 no tiene carrito: el mockup lo muestra porque contempla el eCommerce
 * de Fase 2. Su lugar lo ocupa el CTA comercial.
 */

const LINKS = [
  { href: '/productos',  label: 'Productos' },
  { href: '/#categorias', label: 'Categorías' },
  { href: '/#nosotros',   label: 'Nosotros' },
  { href: '/#contacto',   label: 'Contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[var(--color-k-graphite)] text-[var(--color-k-white)]">
      <nav className="mx-auto flex h-[68px] max-w-[1440px] items-center justify-between px-6 lg:px-12">
        <Link href="/" aria-label="KLYNN — inicio" className="flex items-center">
          <Wordmark height={20} />
        </Link>

        <ul className="hidden items-center gap-10 lg:flex">
          {LINKS.map(l => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="k-caption text-[0.75rem] uppercase tracking-[0.14em] text-[var(--color-k-gray-light)] transition-colors hover:text-[var(--color-k-white)]"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <Link
            href="/#contacto"
            className="k-button hidden border border-[var(--color-k-gray-mid)] px-6 py-3 text-[0.75rem] transition-colors hover:border-[var(--color-k-white)] hover:bg-[var(--color-k-white)] hover:text-[var(--color-k-graphite)] lg:inline-block"
          >
            Cotizar
          </Link>

          <button
            type="button"
            onClick={() => setOpen(v => !v)}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            className="lg:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-[color-mix(in_srgb,var(--color-k-gray-mid)_35%,transparent)] lg:hidden">
          <ul className="mx-auto max-w-[1440px] px-6 py-4">
            {LINKS.map(l => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="k-body block py-3 uppercase tracking-[0.12em] text-[var(--color-k-gray-light)]"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <Link
                href="/#contacto"
                onClick={() => setOpen(false)}
                className="k-button block bg-[var(--color-k-white)] px-6 py-4 text-center text-[var(--color-k-graphite)]"
              >
                Cotizar
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
