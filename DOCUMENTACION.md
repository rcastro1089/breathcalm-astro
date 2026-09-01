# BreathCalm - Documentación del Proyecto

## 📋 Resumen

Migración de **calmaen3minutos.com** de React (Vercel/CSR) a **Astro** (Cloudflare Pages/SSG) para resolver problemas de SEO y mejorar performance.

---

## 🏗️ Stack Actual

| Componente | Tecnología |
|------------|------------|
| Framework | Astro 5.x |
| UI Interactivity | React Islands |
| CSS | Tailwind CSS 4 |
| Animaciones | CSS Transitions |
| Deploy | Cloudflare Pages |
| Dominio | calmaen3minutos.com |

---

## ✅ Completado

### 1. Migración de Stack
- [x] React SPA → Astro SSG
- [x] Vercel → Cloudflare Pages
- [x] CSR → SSG (SEO-friendly)

### 2. SEO Técnico
- [x] Titles únicos por página (6 páginas)
- [x] Meta descriptions únicas
- [x] H1 tags en cada página
- [x] Canonical tags correctos
- [x] Sitemap XML generado
- [x] Schema.org (WebApplication + HowTo)
- [x] robots.txt

### 3. Páginas Creadas
- [x] `/` - Home (Botón de pánico)
- [x] `/tecnica/4-7-8/` - Técnica 4-7-8
- [x] `/tecnica/diafragmatica/` - Diafragmática
- [x] `/tecnica/box/` - Box Breathing
- [x] `/tecnica/nasal-alternante/` - Nasal Alternante
- [x] `/tecnica/labios-fruncidos/` - Labios Fruncidos
- [x] `/privacidad/` - Política de privacidad
- [x] `/terminos/` - Términos de servicio
- [x] `/nosotros/` - Sobre nosotros

### 4. Iconos SVG
- [x] 12 iconos customizados (sin emojis)
- [x] lungs, heart, brain, nose, check, clock, etc.

### 5. Animación de Respiración
- [x] Botón de pánico (iniciar en 1 clic)
- [x] Círculo de progreso SVG
- [x] Barra se llena 1 vez por ciclo
- [x] Colores en armonía por fase (teal/indigo/cyan)
- [x] Transiciones suaves CSS
- [x] Auto-start sin segundo click
- [x] Pausa/Resume funcional
- [x] Timer total

---

## ⏳ Pendientes

### Layout Móvil (Prioridad Alta)
- [ ] Centrar círculo verticalmente (está muy abajo)
- [ ] Eliminar imagen extra arriba del círculo
- [ ] Ajustar paddings para móvil
- [ ] Testear en diferentes tamaños de pantalla

### Funcionalidad
- [ ] Restaurar componente React BreathingCircle con animaciones anime.js originales
- [ ] Migrar i18next completamente (es/en)
- [ ] Integrar GA4 con consentimiento
- [ ] Configurar cookie banner funcional
- [ ] Conectar email service (Loops)

### Deploy Automático
- [ ] Verificar configuración GitHub → Cloudflare Pages
- [ ] Configurar dominio calmaen3minutos.com
- [ ] Verificar SSL y headers

### SEO
- [ ] Verificar indexación en Google Search Console
- [ ] Agregar FAQ schema
- [ ] Agregar BreadcrumbList schema
- [ ] Crear landing page para Google Ads

---

## 📁 Estructura del Proyecto

```
breathcalm-astro/
├── src/
│   ├── pages/
│   │   ├── index.astro              # Home (Botón de pánico)
│   │   ├── tecnica/
│   │   │   ├── 4-7-8.astro
│   │   │   ├── diafragmatica.astro
│   │   │   ├── box.astro
│   │   │   ├── nasal-alternante.astro
│   │   │   └── labios-fruncidos.astro
│   │   ├── privacidad.astro
│   │   ├── terminos.astro
│   │   └── nosotros.astro
│   ├── components/                  # React Islands (pendiente migrar)
│   ├── layouts/
│   └── lib/
├── public/
│   └── icons/                       # 12 SVG icons
├── astro.config.ts
└── package.json
```

---

## 🐛 Bugs Conocidos

### Layout Móvil
- **Problema:** Círculo muy abajo en móvil
- **Causa:** Posiblemente padding/margin incorrecto
- **Fix:** Ajustar `justify-center` y paddings

### Imagen Extra
- **Problema:** Aparece algo indistinguible arriba del círculo
- **Causa:** Posiblemente el logo o un elemento oculto
- **Fix:** Revisar y eliminar elemento

---

## 🔗 URLs

- **Preview:** https://8f943a3a.breathcalm-astro.pages.dev
- **GitHub:** https://github.com/rcastro1089/breathcalm-astro
- **Cloudflare:** https://dash.cloudflare.com

---

*Documentación actualizada: Septiembre 2026*
