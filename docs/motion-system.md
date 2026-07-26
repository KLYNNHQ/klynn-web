# KLYNN · Motion System v1.0
### Lenguaje de Movimiento — reglas permanentes del sistema de diseño

Este documento congela cómo se mueve KLYNN. Aplica a landing, ecommerce,
investor deck y cualquier superficie futura. La implementación vive en
`src/design-system/Reveal.tsx` (primitiva) y `src/app/globals.css` (tokens y
estados base).

---

## Motion Principles (congelados)

1. **Sutil por defecto.** El movimiento se reconoce por su ausencia de
   estridencia, no por su presencia.
2. **Refuerza el contenido, nunca compite.** Sirve a la lectura; si distrae del
   mensaje, sobra.
3. **Lento, preciso, elegante.** Salida suave (ease-out), duraciones largas
   (~0.9 s), nunca rebote ni elasticidad.
4. **Una sola gestualidad.** El contenido asciende suavemente al entrar
   ("rise"). No se mezclan estilos de animación.
5. **Consistente en toda la experiencia.** Los mismos tokens en cada superficie.
6. **Respeta `prefers-reduced-motion`, siempre.** Con movimiento reducido la
   composición aparece asentada, sin transición; el contenido nunca depende de
   la animación para ser legible o visible.
7. **Nunca decorativo.** Sin parallax gratuito, loops, giros ni efectos que no
   sirvan al contenido.
8. **Se dispara al ser visto.** Una entrada ocurre cuando su contenido cruza el
   viewport, no antes: una animación que nadie ve no existe.
9. **Degrada con dignidad.** Sin JS, todo es visible; el movimiento es un
   realce, no un requisito.

---

## Tokens (fuente única)

Definidos en `:root` (`src/app/globals.css`). Los valores por defecto de
`<Reveal>` salen de aquí; nunca se hardcodean en componentes.

| Token | Valor v1 | Rol |
|---|---|---|
| `--k-motion-duration` | `900ms` | Duración base de la entrada. |
| `--k-motion-distance` | `14px` | Desplazamiento base de la entrada. |
| `--k-motion-ease` | `cubic-bezier(0.22, 1, 0.36, 1)` | Curva de salida (ease-out). |
| `--k-motion-stagger` | `140ms` | Cadencia base entre piezas de un grupo. |

---

## Estados base (accesibilidad primero)

El estado base de cualquier pieza es **visible**. El estado oculto solo se
aplica cuando se cumplen **ambas** condiciones, vía CSS, desde el primer paint:

```
@media (scripting: enabled) and (prefers-reduced-motion: no-preference) { … }
```

Consecuencia — en todos los caminos de fallo, el contenido se ve:

- **Sin JS** (`scripting: none`) → visible, sin animación.
- **Con reduced-motion** → visible, sin animación.
- **Navegador sin soporte de `scripting`** → la regla no aplica → visible.

---

## Primitiva `Reveal` — contrato de API

`import Reveal from '@/design-system/Reveal'`

Envuelve contenido y lo revela al entrar en el viewport. No conoce el
contenido: sirve a cualquier sección o página.

| Prop | Tipo | Default | Estado v1 | Descripción |
|---|---|---|---|---|
| `as` | `ElementType` | `'div'` | ✅ | Etiqueta contenedora (preserva semántica). |
| `delay` | `number` (ms) | `0` | ✅ | Retraso antes de revelar. |
| `duration` | `number` (ms) | token | ✅ | Duración de la transición. |
| `distance` | `number` (px) | token | ✅ | Desplazamiento de entrada. |
| `direction` | `'up'\|'down'\|'left'\|'right'\|'none'` | `'up'` | ✅ | Eje y sentido del desplazamiento. |
| `threshold` | `number` 0–1 | `0.15` | ✅ | Fracción visible que dispara el revelado. |
| `once` | `boolean` | `true` | ✅ | Revelar una vez vs. re-animar al reentrar. |
| `disabled` | `boolean` | `false` | ✅ | Bypass: render estático, sin movimiento. |
| `stagger` | `number` (ms) | token | ⚠️ Inerte | Superada por `RevealGroup`. Se conserva en la API por gobernanza (la Fase 2 no se reabre por mejora), pero no se usa. Ver Architecture Debt. |

**Notas de uso**
- `as` permite mantener la semántica (`h1`, `p`, `section`) sin envoltorios extra.
- Para escalonar varias piezas se usa `RevealGroup` (abajo), no `delay` a mano.

---

## Coordinador `RevealGroup` — contrato de API

`import RevealGroup from '@/design-system/RevealGroup'`

Revela un CONJUNTO de piezas de forma escalonada con **un solo**
`IntersectionObserver`. Es la molécula; `Reveal` es el átomo. Decora sus
**hijos directos** con `k-reveal` (+ `is-visible` al entrar) y una cadencia
`--k-reveal-delay = calc(var(--k-motion-stagger) * paso)`. Reutiliza la regla
CSS `.k-reveal.is-visible`: no necesita CSS nuevo.

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `as` | `ElementType` | `'div'` | Etiqueta contenedora (p. ej. `'ul'`). |
| `direction` | `'up'\|'down'\|'left'\|'right'\|'none'` | `'up'` | Sentido de entrada de cada hijo. |
| `threshold` | `number` 0–1 | `0.15` | Fracción visible que dispara el grupo. |
| `once` | `boolean` | `true` | Revelar una vez vs. re-animar al reentrar. |
| `disabled` | `boolean` | `false` | Bypass: render estático. |

- **Token-only:** la cadencia sale del token `--k-motion-stagger`; el índice es
  una posición, no una magnitud. Ninguna duración/delay se escribe a mano.
- **Un observer por grupo:** solo el contenedor se observa; los hijos se revelan
  por la clase, no cada uno con su propio observer.
- **Tope de escalonado:** a partir del 7.º hijo comparten paso (no acumulan
  retraso perceptible en listas largas).
- **Refs y semántica intactos:** `cloneElement` solo fusiona `className`/`style`
  y añade `data-direction`; no inyecta `ref` ni cambia el tipo del hijo.

### Transiciones de interacción (hover/color)

Usan la utilidad token-only `.k-ui-transition-opacity` (duración/easing desde
`--k-motion-duration-ui` / `--k-motion-ease`), nunca `duration-*`/`transition-*`
de Tailwind hardcodeados.

---

## Regla de gobernanza (permanente)

> Una fase cerrada solo se reabre por **bug, regresión, accesibilidad,
> rendimiento demostrado o seguridad**; nunca únicamente por una mejora
> arquitectónica.

Por esta regla, `RevealGroup` se aplica solo a las secciones de su fase; el acto
de apertura (Fase 2, cerrada) no se migró aunque fuera más "limpio".

---

## Architecture Debt (token-only)

El invariante token-only se **adopta como política** y se **aplica al trabajo
nuevo**. Quedan como deuda rastreada, a remediar en un pase dedicado:

- **Acto de apertura** (`Hero`/`Apertura`/`Filosofía`): usa `delay` numérico
  hardcodeado y las props numéricas de `Reveal`.
- **API numérica de `Reveal`** (`delay`/`duration`/`distance`) y su prop
  `stagger` inerte: se retiran cuando se remedie el acto de apertura.
- **Transiciones incidentales** de `Navbar`, `Footer` y primitivas (`Action`):
  aún con `duration-*`/`transition-*` de Tailwind.

---

## Adopción actual

- **Reveal (átomo):** encabezados de `Ecosistema` y `Materiales`; acto de
  apertura (Fase 2).
- **RevealGroup (coordinador):** filas de `Ecosistema` (10), criterios de
  `Materiales` (3), bloque de `CTA`.
- **Footer:** estático por decisión (el movimiento no refuerza contenido ahí).

El resto de superficies adoptan el sistema a medida que se construyen.
