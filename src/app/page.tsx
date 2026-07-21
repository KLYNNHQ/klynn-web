import Navbar from '@/components/klynn/Navbar'
import Hero from '@/components/klynn/Hero'
import Filosofia from '@/components/klynn/Filosofia'
import Categorias from '@/components/klynn/Categorias'

/**
 * Home KLYNN.
 *
 * Bloque 1 (marca): Navbar · Hero · Filosofía · Categorías.
 *
 * Las secciones MagiClean heredadas se retiraron del home: convivir con el
 * sistema visual KLYNN rompía la lectura. Siguen en el repositorio y en las
 * rutas de producto, y se reemplazan por sus equivalentes KLYNN en los
 * bloques siguientes (productos destacados, beneficios, CTA, footer).
 */

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Filosofia />
        <Categorias />
      </main>
    </>
  )
}
