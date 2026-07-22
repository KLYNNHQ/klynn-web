import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/klynn/Navbar'
import Footer from '@/components/klynn/Footer'

export const metadata: Metadata = {
  title: 'Términos de Uso — Grupo KLYNN S.A. de C.V.',
  description:
    'Términos y condiciones de uso del sitio web klynn.com.mx, operado por Grupo KLYNN S.A. de C.V. (titular de la marca KLYNN).',
  robots: { index: true, follow: true },
}

export default function TerminosDeUso() {
  return (
    <>
      <Navbar />

      <main className="bg-white min-h-screen">
        {/* Header */}
        <div className="bg-[#282625] text-white pt-32 pb-14 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold tracking-widest text-white/50 uppercase mb-3">
              Aviso Legal
            </p>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
              Términos de Uso
            </h1>
            <p className="text-sm text-white/50 font-normal">
              Condiciones generales de uso del sitio web klynn.com.mx ·{' '}
              Última actualización:{' '}
              <time dateTime="2025-04-13">13 de abril de 2025</time>
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="max-w-3xl mx-auto px-6 py-16 space-y-12 text-[#282625]">

          {/* 1. Aceptación */}
          <section>
            <h2 className="text-lg font-black tracking-tight mb-4 pb-2 border-b border-[#E8EAED]">
              1. Aceptación de los términos
            </h2>
            <p className="text-sm font-normal leading-relaxed text-ink-legal">
              Al acceder y utilizar este sitio web operado por{' '}
              <strong className="font-semibold text-[#282625]">Grupo KLYNN S.A. de C.V.</strong>,
              usted acepta quedar vinculado por los presentes Términos de Uso. Si no está de
              acuerdo con alguna de estas condiciones, le pedimos abstenerse de utilizar el sitio.
            </p>
          </section>

          {/* 2. Objeto */}
          <section>
            <h2 className="text-lg font-black tracking-tight mb-4 pb-2 border-b border-[#E8EAED]">
              2. Objeto del sitio
            </h2>
            <p className="text-sm font-normal leading-relaxed text-ink-legal">
              Este sitio web tiene como finalidad presentar la marca KLYNN y su portafolio de
              objetos para la vida diaria, y facilitar el contacto comercial.
              El sitio es de carácter <strong className="font-semibold">informativo</strong>;
              no constituye una tienda en línea con transacciones directas.
            </p>
          </section>

          {/* 3. Propiedad intelectual */}
          <section>
            <h2 className="text-lg font-black tracking-tight mb-4 pb-2 border-b border-[#E8EAED]">
              3. Propiedad intelectual y marcas registradas
            </h2>
            <p className="text-sm font-normal leading-relaxed text-ink-legal mb-3">
              Todos los contenidos de este sitio —incluyendo textos, imágenes, diseños,
              íconos y código fuente— son propiedad de{' '}
              <strong className="font-semibold">Grupo KLYNN S.A. de C.V.</strong>{' '}
              o de sus licenciantes, y están protegidos por la Ley Federal del Derecho
              de Autor y demás legislación aplicable en México.
            </p>
            <p className="text-sm font-normal leading-relaxed text-ink-legal mb-3">
              <strong className="font-semibold">KLYNN</strong> y sus signos distintivos son
              marcas de Grupo KLYNN S.A. de C.V. Cualquier uso no autorizado constituye una
              violación a la Ley Federal de Protección a la Propiedad Industrial.
              {/* PENDIENTE: precisar el estatus de registro ante el IMPI cuando exista
                  el trámite a nombre de la entidad definitiva. No se afirma un registro
                  que aún no consta. */}
            </p>
            <p className="text-sm font-normal leading-relaxed text-ink-legal">
              Queda estrictamente prohibida la reproducción, distribución, modificación o
              uso comercial de cualquier contenido, marca o signo distintivo sin
              autorización previa y por escrito de Grupo KLYNN S.A. de C.V.
            </p>
          </section>

          {/* 4. Uso permitido */}
          <section>
            <h2 className="text-lg font-black tracking-tight mb-4 pb-2 border-b border-[#E8EAED]">
              4. Uso permitido y restricciones
            </h2>
            <p className="text-sm font-normal leading-relaxed text-ink-legal mb-4">
              El usuario se compromete a utilizar el sitio de conformidad con la ley y estos
              términos. Queda prohibido:
            </p>
            <ul className="list-disc list-inside text-sm font-normal text-ink-legal space-y-1.5 leading-relaxed ml-1">
              <li>Utilizar el sitio para fines ilegales o no autorizados.</li>
              <li>Intentar acceder de forma no autorizada a sistemas o bases de datos.</li>
              <li>Enviar spam, contenido malicioso o realizar ataques informáticos.</li>
              <li>Reproducir o scrappear contenido de forma automatizada sin permiso.</li>
              <li>Suplantar la identidad de KLYNN o de terceros.</li>
            </ul>
          </section>

          {/* 5. Formularios y cotizaciones */}
          <section>
            <h2 className="text-lg font-black tracking-tight mb-4 pb-2 border-b border-[#E8EAED]">
              5. Formularios de contacto y cotización
            </h2>
            <p className="text-sm font-normal leading-relaxed text-ink-legal">
              El envío de un formulario de contacto o cotización a través de este sitio no
              constituye la aceptación de un pedido ni la celebración de un contrato.
              Grupo KLYNN S.A. de C.V. se reserva el derecho de aceptar o rechazar cualquier
              solicitud comercial. Las propuestas enviadas por nuestro equipo tendrán validez
              según los términos indicados en cada cotización formal.
            </p>
          </section>

          {/* 6. Limitación de responsabilidad */}
          <section>
            <h2 className="text-lg font-black tracking-tight mb-4 pb-2 border-b border-[#E8EAED]">
              6. Limitación de responsabilidad
            </h2>
            <p className="text-sm font-normal leading-relaxed text-ink-legal mb-3">
              Grupo KLYNN S.A. de C.V. no será responsable por:
            </p>
            <ul className="list-disc list-inside text-sm font-normal text-ink-legal space-y-1.5 leading-relaxed ml-1">
              <li>Daños derivados del uso o imposibilidad de uso del sitio.</li>
              <li>Interrupciones, errores técnicos o fallas en el servicio de hospedaje.</li>
              <li>Contenido de sitios web de terceros enlazados desde este sitio.</li>
              <li>Decisiones comerciales tomadas con base en la información publicada.</li>
            </ul>
            <p className="text-sm font-normal leading-relaxed text-ink-legal mt-3">
              La información de productos, precios y disponibilidad publicada en este sitio
              es de carácter referencial y puede cambiar sin previo aviso.
            </p>
          </section>

          {/* 7. Enlaces externos */}
          <section>
            <h2 className="text-lg font-black tracking-tight mb-4 pb-2 border-b border-[#E8EAED]">
              7. Enlaces a sitios externos
            </h2>
            <p className="text-sm font-normal leading-relaxed text-ink-legal">
              Este sitio puede contener enlaces a plataformas de terceros (MercadoLibre,
              Amazon, redes sociales). Grupo KLYNN S.A. de C.V. no controla ni se responsabiliza
              por el contenido, políticas de privacidad o prácticas de dichos sitios. El acceso
              a estos enlaces es bajo responsabilidad del usuario.
            </p>
          </section>

          {/* 8. Legislación */}
          <section>
            <h2 className="text-lg font-black tracking-tight mb-4 pb-2 border-b border-[#E8EAED]">
              8. Legislación aplicable y jurisdicción
            </h2>
            <p className="text-sm font-normal leading-relaxed text-ink-legal">
              Estos Términos de Uso se rigen por las leyes vigentes en los{' '}
              <strong className="font-semibold">Estados Unidos Mexicanos</strong>. Para
              cualquier controversia derivada del uso de este sitio, las partes se someten
              expresamente a la jurisdicción de los tribunales competentes de la Ciudad de
              México o del Estado de México, renunciando a cualquier otro fuero que pudiera
              corresponderles por razón de domicilio presente o futuro.
            </p>
          </section>

          {/* 9. Cambios */}
          <section>
            <h2 className="text-lg font-black tracking-tight mb-4 pb-2 border-b border-[#E8EAED]">
              9. Modificaciones
            </h2>
            <p className="text-sm font-normal leading-relaxed text-ink-legal">
              Grupo KLYNN S.A. de C.V. se reserva el derecho de modificar estos Términos de
              Uso en cualquier momento. Los cambios entrarán en vigor en el momento de su
              publicación en este sitio. El uso continuado del sitio después de publicarse
              las modificaciones implica la aceptación de los nuevos términos.
            </p>
          </section>

          {/* Contacto */}
          <div className="bg-[#F5F4F1] rounded-xl p-6 border border-[#E8EAED]">
            <p className="text-xs font-semibold tracking-widest text-[#282625] uppercase mb-3">
              Contacto legal
            </p>
            <p className="text-sm font-normal text-ink-legal leading-relaxed">
              Los datos de contacto para consultas sobre estos términos se publicarán
              una vez constituida la entidad legal.
            </p>
          </div>

          {/* Nav bottom */}
          <div className="pt-4 flex flex-wrap gap-4 text-sm">
            <Link href="/" className="text-[#282625] hover:underline font-medium">
              ← Volver al inicio
            </Link>
            <Link href="/aviso-de-privacidad" className="text-[#282625] hover:underline font-medium">
              Aviso de privacidad →
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
