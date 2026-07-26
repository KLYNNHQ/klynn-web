import Navbar from '@/components/klynn/Navbar'
import Hero from '@/components/klynn/Hero'
import QueEsKlynn from '@/components/klynn/QueEsKlynn'
import Materiales from '@/components/klynn/Materiales'
import Formas from '@/components/klynn/Formas'
import Ecosistema from '@/components/klynn/Ecosistema'
import CampaignTest from '@/components/klynn/CampaignTest'
import KlynnClean from '@/components/klynn/KlynnClean'
import EstandarHome from '@/components/klynn/EstandarHome'
import Cierre from '@/components/klynn/Cierre'
import Footer from '@/components/klynn/Footer'

/**
 * Home KLYNN — presentación de master brand multicategoría, ~70% visual.
 *
 * El recorrido está ordenado por lo que debe sentir quien entra, no por
 * secciones: apertura → tesis → materia → criterio → ecosistema → la primera
 * categoría → el estándar → cierre.
 *
 * Dos decisiones sostienen ese orden. La materia va ANTES de las categorías:
 * nadie se enamora de una categoría, se enamora de un material, y con el
 * material delante las categorías se leen como consecuencia de un criterio y no
 * como una lista de mercados. Y CLEAN va DESPUÉS del ecosistema: colocada antes,
 * la marca se presenta durante tres pantallas como marca de limpieza; colocada
 * después, deja de ser «qué somos» para ser «por dónde empezamos».
 *
 * La metodología extensa (problema, proceso de siete pasos, diez criterios) NO
 * se repite aquí: vive en /nuestro-criterio. Componentes de fases anteriores no
 * usados en esta narrativa permanecen en el repo para reuso; no se eliminan.
 */

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="contenido" tabIndex={-1}>
        <Hero />
        <QueEsKlynn />
        <Materiales />
        <Formas />
        <Ecosistema />
        <CampaignTest />
        <KlynnClean />
        <EstandarHome />
        <Cierre />
      </main>
      <Footer />
    </>
  )
}
