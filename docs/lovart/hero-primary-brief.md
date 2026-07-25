# KLYNN · Creative Brief — Hero Primary Asset
### Para producción en Lovart · v1 (render conceptual, temporal)

> **Qué es este activo:** el objeto-manifiesto del primer fold de la landing.
> No vende un producto: vende el **criterio** de KLYNN. Es un render conceptual
> temporal; será reemplazado por fotografía profesional de producto sin tocar
> el código (basta cambiar `src` en `src/config/site-images.ts`). Por eso el
> render debe cumplir el contrato técnico de abajo **al pie de la letra**.

---

## 0. Contrato técnico innegociable (para que el swap sea transparente)

| Parámetro | Valor exacto | Por qué |
|---|---|---|
| **Proporción** | **4:5 vertical** | Reservada en el layout. La foto final deberá recortarse a esta misma proporción. |
| **Resolución** | **2400 × 3000 px** | Coincide con `width/height` del manifiesto. |
| **Formato entrega** | **WebP** (master en PNG/TIFF 16-bit aparte) | WebP para web; master sin pérdida para reusos (deck, print). |
| **Espacio de color** | **sRGB** | Consistencia navegador. |
| **Fondo** | **Sólido `#F5F4F1`** (blanco cálido KLYNN), sin degradado de viñeta | El fold usa exactamente ese color: el objeto debe fundirse con la página, sin costura. |
| **Nombre de archivo** | `hero-primary.webp` | Se coloca en `public/brand/renders/`. |
| **Peso objetivo** | ≤ 350 KB (WebP, calidad ~82) | LCP del primer fold. |

**Regla de composición para el swap:** el objeto se ancla a la **base** del
encuadre (`object-bottom`). Deja aire arriba. No centres verticalmente.

---

## 1. Narrativa (qué debe *decir* la imagen)

> *"Este es el nivel de cuidado que KLYNN pone en un objeto cualquiera."*

No es un producto heroico ni espectacular. Es un objeto **sereno, preciso y
honesto**, presentado con la seriedad con la que Braun presentaba una
calculadora o B&O un botón de aluminio. La imagen debe hacer pensar al
inversionista: *"esta gente tiene criterio"*, y al cliente: *"quiero un objeto
hecho así"*. Silencio, no grito.

## 2. Sensación (qué debe *provocar*)

Calma · precisión · durabilidad · honestidad material · inteligencia.
**Elegancia silenciosa.** Cero dramatismo, cero brillo publicitario, cero
efectos. Si la imagen "impresiona", está mal; debe **asentar**.

## 3. Sujeto (el objeto)

Un **único objeto arquetípico de escala de mano**, category-neutral: no debe
leerse como limpieza, ni como gadget, ni como electrónico específico. Un
**monolito de aluminio** de geometría sobria —forma rectangular o cilíndrica de
aristas suavemente achaflanadas (radio pequeño, no redondeado blando)— con
**un segundo material honesto** en una zona funcional: compuesto mate en gris
cálido, o madera clara de veta discreta. Sin logotipos, sin botones que
impliquen una función concreta, sin gráficos. Es el "objeto KLYNN" abstracto:
podría pertenecer a cualquiera de las diez categorías.

> Nota: es un *stand-in* conceptual. Cuando exista producto real, se sustituye.
> No debe parecer un producto específico que hoy no existe.

## 4. Composición

- Objeto **ligeramente a la derecha** del centro del encuadre 4:5, anclado a la base.
- **Tercio izquierdo y franja superior = espacio negativo limpio** (ver §11):
  ni objeto, ni sombra dura invaden esa zona. Es la reserva para el copy.
- Una sola pieza. Nada de bodegón múltiple, nada de props, nada de contexto de escena.
- Punto de reposo claro; el ojo llega al objeto y descansa.

## 5. Cámara

- **Altura:** a la altura del objeto (línea de horizonte ~centro del objeto), o
  fracción por encima. Nada de picado dramático ni contrapicado heroico.
- **Ángulo:** frontal con un **3/4 muy leve** (5–15°) para revelar una arista y
  dar volumen sin perder la sobriedad.
- **Lente equivalente:** 85–100 mm (compresión de retrato de producto: sin
  distorsión, perspectiva honesta).
- **Encuadre:** el objeto ocupa ~55–65% de la altura del frame; el resto respira.

## 6. Iluminación

- **Luz principal:** suave y **lateral-cenital** (raking desde arriba-lateral),
  que recorra el material y revele su textura y sus aristas — lenguaje Braun/B&O:
  la luz existe para **mostrar la materia y la precisión del canto**, no para
  glamurizar.
- **Relleno:** mínimo, tal que la sombra propia conserve profundidad (no plano).
- **Sin reflejos especulares duros**, sin destellos, sin luz de estrella.
- **Temperatura:** neutra-cálida, coherente con `#F5F4F1`. Nada de azul frío.

## 7. Sombras

- **Sombra de contacto** suave y corta bajo el objeto (lo asienta: el objeto
  **se posa**, no flota). Borde difuso, no dura.
- **Sin sombra proyectada larga** que invada el tercio izquierdo (rompería la
  reserva de copy).
- La sombra es de color cálido (nunca negro puro): usar grafito desaturado.

## 8. Materiales (cómo deben sentirse)

- **Aluminio:** anodizado **mate satinado**, no pulido espejo. Se siente frío,
  denso, maquinado con tolerancia fina. El brillo es un velo, no un flash.
- **Segundo material (compuesto/madera):** mate, cálido, táctil. Contraste de
  temperatura y tacto con el aluminio, no de color estridente.
- La honestidad material es el punto: lo que se ve es lo que el objeto **es**.
  Nada aparenta ser otra cosa.

## 9. Fondo

- Sólido `#F5F4F1`, **seamless**, sin superficie visible (no mesa, no piso, no
  pared con textura). El objeto y su sombra de contacto flotan sobre el color de
  la página. Profundidad dada por la luz y la sombra, no por un set.

## 10. Profundidad

- **Foco total sobre el objeto** (nitidez de catálogo técnico): sin bokeh, sin
  desenfoque selectivo. La precisión se comunica con **todo enfocado**.
- La profundidad es tonal (luz→sombra), no óptica.

## 11. Espacio reservado para el copy (CRÍTICO)

El copy del hero (titular, índice, banda) vive en el **layout**, a la izquierda
del objeto. Para que el activo también sirva a usos full-bleed (móvil futuro,
portada del investor deck) sin colisión, el render **debe** mantener limpias:

- **Franja izquierda: 0–35% del ancho** → negativo puro (sin objeto, sin sombra).
- **Franja superior: 0–30% del alto** → negativo puro.

Esas dos zonas son zona de exclusión. Cualquier detalle del objeto o su sombra
que entre ahí invalida el render.

---

## 12. Prioridad

**P0 — máxima.** Es el activo del primer fold, LCP de la página y primera imagen
que ve un inversionista. Es el primer render que se produce de todo el sistema.

## 13. Prompt seed para Lovart (punto de partida, ajustar con lo de arriba)

> *Single archetypal everyday object, hand-scale, matte satin anodized aluminium
> monolith with softly chamfered edges and one honest secondary material (warm
> matte grey composite), no logos no buttons, product design study. Seamless warm
> off-white background #F5F4F1. Soft raking top-side light revealing material and
> machined edge, minimal fill, deep soft self-shadow, short soft contact shadow,
> object rests on the surface, warm neutral temperature. Object anchored to bottom,
> slightly right of center, fully in focus, no bokeh, 90mm lens, subtle 3/4 angle.
> Calm, precise, honest, Braun / Bang & Olufsen / Muji restraint. Left 35% and top
> 30% kept empty as negative space. 4:5 vertical.*

Negative: no text, no branding, no reflections/flares, no glossy mirror finish,
no dramatic lighting, no busy background, no props, no scene, no people, no cold
blue tint, no long cast shadow into the left area.

---

## 14. Cómo se integra cuando esté listo (1 línea)

En `src/config/site-images.ts`, en `heroPrimary`:

```
src: null,   →   src: '/brand/renders/hero-primary.webp',
```

El fold pasa **solo** de modo tipográfico a modo asimétrico con el objeto.
Ningún componente se toca.
