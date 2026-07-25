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
| `stagger` | `number` (ms) | token | 🏗️ Reservada | Cadencia entre hijos directos. API fija; orquestación de grupo se completa cuando se use en varias piezas (Fase 3). |

**Notas de uso**
- Los valores por defecto vienen de los tokens; solo se pasa una prop cuando se
  quiere desviar del sistema.
- Para escalonar hoy varias piezas, se usan instancias con `delay` creciente
  (p. ej. Hero: 0 / 160 / 320 ms); `stagger` automatizará esto más adelante.
- `as` permite mantener la semántica (`h1`, `p`, `section`) sin envoltorios extra.

---

## Adopción actual (v1)

- **Apertura** — eyebrow + bloque de frases.
- **Hero** — índice, claim y banda de especificación (migrado desde la entrada
  on-load de la Fase 1 a revelado on-scroll).
- **Filosofía** — eyebrow, titular y cuerpo.

El resto de secciones adoptan la primitiva a medida que se completan (Fase 3).
