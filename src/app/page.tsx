import Navbar from '@/components/klynn/Navbar'
import Hero from '@/components/klynn/Hero'
import Filosofia from '@/components/klynn/Filosofia'
import Categorias from '@/components/klynn/Categorias'
import CTA from '@/components/klynn/CTA'
import Footer from '@/components/klynn/Footer'

/**
 * Home KLYNN.
 *
 * Estado tras la purga: quedan las secciones de marca ya alineadas. El
 * Bloque 0 (apertura de marca) y la sección Materiales se construyen en el
 * bloque siguiente; los productos destacados NO vuelven a la home.
 */

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Filosofia />
        <Categorias />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
