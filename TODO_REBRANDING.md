# TODO — Rebranding MagiClean → KLYNN (Landing)

Tracker único del rebranding de este repo. Rama de trabajo: `chore/klynn-tech-rebrand`.

## Principios
- **MagiClean** (marca comercial) → **KLYNN**.
- **Prolim BH, SA de CV** (razón social legal) → **NO cambia**.
- **NeoShield™** (tecnología) → **NO cambia** (queda exactamente igual).
- Históricos (`project-log/`, comentarios de migraciones aplicadas) → **no se modifican**.

---

## ✅ Fase 1 — Rebranding técnico (HECHO en esta rama)
- [x] `package.json` name: `magiclean-landing` → `klynn-landing`.
- [x] Creado `src/config/` como fuente única de marca (`@/config/brand`), **sin conectar a componentes**:
      `brand.ts`, `brand-colors.ts`, `brand-urls.ts`, `brand-emails.ts`, `brand-socials.ts`, `brand-assets.ts`.
- [x] Comentarios técnicos neutralizados (sin nombre de marca incorrecto):
      `src/lib/categoryColors.ts`, `src/app/globals.css`, `src/app/api/contact/route.ts`.
- [x] Banner de rebranding en `CLAUDE.md`.
- [x] Calidad: `npm install`, `npm run lint`, `npx tsc --noEmit`, `npm run build`.

---

## ⏳ Fase 2 — Branding visible / marketing (PENDIENTE, requiere aprobación)
Conectar `@/config/brand` y migrar a KLYNN:
- [ ] Metadata / SEO / OpenGraph / Twitter / JSON-LD (`src/app/layout.tsx`, `opengraph-image.tsx`, `productos/*`).
- [ ] Copy visible: `Hero`, `Navbar`, `Footer`, `Nosotros`, `DistribuidoresCTA`, `BeneficiosClave`, `WhatsAppButton`, etc.
- [ ] Páginas legales (`aviso-de-privacidad`, `terminos-de-uso`) — mantener **Prolim BH, SA de CV**.
- [ ] `public/manifest.json`.
- [ ] **Corregir regresión** `MagicClean` (doble C) en `src/components/ProductHeroF123.tsx:107`.

## ⏳ Fase 3 — Identidad visual / infraestructura (PENDIENTE)
- [ ] Logo (`src/components/logo-paths.tsx` + `public/images/logo.svg`), isotipo, favicons (`icon.png`, `apple-icon.png`, `icon-192/512.png`).
- [ ] Dominio `magiclean.mx` → `klynn.mx` (301 + sitemap + Search Console).
- [ ] Emails (`hola@`, `ventas@`, `datos@`, `noreply@`) → `@klynn.mx` (verificar en Resend primero).
- [ ] Sentry: renombrar proyecto en dashboard, luego `org`/`project` en `next.config.ts`.
- [ ] Redes (`@magicleanmx`) y URLs de marketplaces.
- [ ] Decidir destino de `magicleanproducts.com` (legacy) y carpeta `magiclean-theme/` (WordPress legacy).
- [ ] Decidir si se renombra la carpeta/repo `magicclean`.

---

## Notas
- `technologyName` en `config/brand.ts` = `'NeoShield'` (no cambia).
- Se eligió **neutralizar** comentarios técnicos en vez de poner "KLYNN" donde describían el branding ACTUAL publicado (para no afirmar algo aún no migrado).
