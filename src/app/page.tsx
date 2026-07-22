import Navbar from '@/components/klynn/Navbar'
import Apertura from '@/components/klynn/Apertura'
import Hero from '@/components/klynn/Hero'
import Filosofia from '@/components/klynn/Filosofia'
import Ecosistema from '@/components/klynn/Ecosistema'
import Materiales from '@/components/klynn/Materiales'
import CTA from '@/components/klynn/CTA'
import Footer from '@/components/klynn/Footer'

/**
 * Home KLYNN — marca global, 100% en español.
 *
 * Arquitectura aprobada:
 *   1. Apertura de marca      — qué es KLYNN
 *   2. Hero                   — el claim
 *   3. Filosofía              — un mismo criterio
 *   4. Ecosistema             — las 10 categorías, mismo peso
 *   5. Diseño / materiales    — cómo se decide un objeto KLYNN
 *   6. CTA                    — acción institucional
 *   7. Footer
 *
 * No vende productos ni catálogo: vende la marca. Ritmo de tono
 * claro/oscuro/claro para que la lectura respire.
 */

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Apertura />
        <Hero />
        <Filosofia />
        <Ecosistema />
        <Materiales />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
