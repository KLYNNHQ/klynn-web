import Navbar from '@/components/Navbar'
import WhatsAppButton from '@/components/WhatsAppButton'
import Hero from '@/components/Hero'
import MarketplacesRibbon from '@/components/MarketplacesRibbon'
import HeroFibras from '@/components/HeroFibras'
import ProductHeroMop from '@/components/ProductHeroMop'
import DistribuidoresCTA from '@/components/DistribuidoresCTA'
import NeoShield from '@/components/NeoShield'
import BeneficiosClave from '@/components/BeneficiosClave'
import Logistica from '@/components/Logistica'
import Nosotros from '@/components/Nosotros'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

/**
 * Home — estructura heredada, en transición a KLYNN Fase 1.
 *
 * La secuencia de secciones se reemplaza en la etapa de superficie del plan
 * Fase 1. Este archivo queda funcional y sin dependencias externas para poder
 * avanzar de forma incremental sobre tokens e identidad.
 *
 * La integración WordPress/GraphQL fue retirada: nunca llegó a conectarse
 * (WP_GRAPHQL_URL sin valor) y todos los componentes ya renderizaban su
 * contenido estático. Cada sección es ahora su propia fuente de contenido.
 */

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MarketplacesRibbon />
        <div style={{ paddingTop: 80, paddingBottom: 80, background: '#fff' }}><HeroFibras /></div>
        <div style={{ paddingTop: 80, paddingBottom: 80 }}><DistribuidoresCTA /></div>
        <div style={{ paddingTop: 80, paddingBottom: 80 }}><ProductHeroMop /></div>
        <div style={{ paddingTop: 80, paddingBottom: 80 }}><NeoShield /></div>
        <div style={{ paddingTop: 80, paddingBottom: 80, background: '#fff' }}><BeneficiosClave /></div>
        <div style={{ paddingTop: 80, paddingBottom: 80, background: '#fff' }}><Logistica /></div>
        <div style={{ paddingTop: 80, paddingBottom: 80, background: '#fff' }}><Nosotros /></div>
        <div style={{ paddingTop: 80, paddingBottom: 80 }}><ContactForm /></div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
