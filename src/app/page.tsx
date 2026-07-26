import Navbar from '@/components/klynn/Navbar'
import Hero from '@/components/klynn/Hero'
import QueEsKlynn from '@/components/klynn/QueEsKlynn'
import KlynnClean from '@/components/klynn/KlynnClean'
import Formas from '@/components/klynn/Formas'
import Ecosistema from '@/components/klynn/Ecosistema'
import CampaignTest from '@/components/klynn/CampaignTest'
import EstandarHome from '@/components/klynn/EstandarHome'
import Cierre from '@/components/klynn/Cierre'
import Footer from '@/components/klynn/Footer'

/**
 * Home KLYNN — presentación de master brand multicategoría, ~70% visual.
 *
 * Arco reducido: hero visual → qué es KLYNN (breve) → KLYNN CLEAN (primera
 * categoría) → seleccionar/mejorar/crear → universo de categorías → el
 * estándar (tres pilares) → cierre. La metodología extensa (problema, proceso
 * de siete pasos, diez criterios) NO se repite aquí: vive en /nuestro-criterio.
 *
 * Componentes de fases anteriores no usados en esta narrativa (Apertura,
 * Filosofia, Materiales, CTA, Problema, Respuesta, Proceso, TresFormas,
 * Estandar, Contacto) permanecen en el repo para reuso o para las páginas
 * secundarias; no se eliminan.
 */

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="contenido" tabIndex={-1}>
        <Hero />
        <QueEsKlynn />
        <KlynnClean />
        <Formas />
        <Ecosistema />
        <CampaignTest />
        <EstandarHome />
        <Cierre />
      </main>
      <Footer />
    </>
  )
}
