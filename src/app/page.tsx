import Navbar from '@/components/klynn/Navbar'
import Hero from '@/components/klynn/Hero'
import Problema from '@/components/klynn/Problema'
import Respuesta from '@/components/klynn/Respuesta'
import Proceso from '@/components/klynn/Proceso'
import TresFormas from '@/components/klynn/TresFormas'
import Estandar from '@/components/klynn/Estandar'
import Ecosistema from '@/components/klynn/Ecosistema'
import Contacto from '@/components/klynn/Contacto'
import Footer from '@/components/klynn/Footer'

/**
 * Home KLYNN — narrativa de decisión / confianza, 100% en español.
 *
 * Arco: problema (demasiadas opciones) → respuesta (una elección confiable) →
 * cómo decide (proceso) → tres formas de actuar → el estándar → el universo de
 * categorías → visión y contacto. Vende el criterio, no un catálogo.
 *
 * Componentes de fases anteriores no usados en esta narrativa (Apertura,
 * Filosofia, Materiales, CTA) permanecen en el repo para posible reuso; no se
 * eliminan en este incremento.
 */

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="contenido" tabIndex={-1}>
        <Hero />
        <Problema />
        <Respuesta />
        <Proceso />
        <TresFormas />
        <Estandar />
        <Ecosistema />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}
