## Current Website Snapshot

- Primary site is a single-file landing page at `index.html` (inline CSS, inline JS, inline `translations` object, and full section markup in one file).
- Current information architecture in `index.html` is: fixed header/nav -> top buy strip with Stripe buy buttons and app CTA -> hero -> product showcase carousel -> features -> technology -> market stats -> user segments -> footer.
- Commerce/CTA surfaces already exist and are prominent near the top: Stripe buy buttons (`index.html` around `store-products`) and TestFlight CTA links (`index.html` nav/store app links).
- Product media is pulled from `product_assets/` (`o1.png`, `display.png`, `m1.jpg`, `m1pro.jpg`) and logo from `pitch_deck/images/image10.png`.
- Internationalization is implemented in-page with 9 languages (`en`, `zh-Hans`, `zh-Hant`, `ja`, `ko`, `vi`, `ar`, `fr`, `es`) and language/theme persistence via `localStorage` in `index.html`.
- Visual system is neon-gradient heavy with animated particles, two auto-rotating carousels, hover-reactive cards, and light/dark theme toggle; typography is mostly `'Inter', -apple-system, BlinkMacSystemFont, sans-serif`.
- A separate policy page exists at `privacy/index.html` with its own styles/content.

## Existing Strengths to Preserve

- Strong immediate conversion surface already in place (`index.html` top buy strip, Stripe integration, TestFlight CTA).
- Clear multi-product lineup (O1, Display, M1, M1 Pro) already represented in both top gallery and product showcase (`index.html`).
- Existing multilingual architecture with fallback logic is functional and should be retained (`index.html` translation/applyLanguage logic).
- Light/dark theme toggle and user preference persistence are already implemented and should be kept (`index.html` theme logic).
- Vanilla HTML/CSS/JS architecture has low runtime complexity and is easy to deploy on static hosting.

## Gaps vs User Goal

- Messaging still over-indexes on abstract "platform" language in first-screen copy, while reference materials prioritize a plain "always-on first-person AI assistant + memory system" framing.
  - Current site example: `index.html` hero/title/subtitle.
  - Reference direction: `references/plans/website_update_plan_2026-03-08.md` lines 19-24, 52-62; `references_markdown/Incubation+申请内容.md` lines 66-76, 95-113; `references_markdown/Seed申请2026-0222.md` lines 11-15.
- Story order does not implement the recommended "problem -> solution -> products -> proof -> action" spine; there is no dedicated problem section and no proof/production-readiness section.
  - Reference direction: `references/plans/website_update_plan_2026-03-08.md` lines 46-73, 155-160; `references_markdown/PitchTraining_20260212_意见反馈.md` lines 121-186.
- B2C + B2B dual-track commercialization is weakly presented on-page (module/evaluation path is not clearly explained for partners).
  - Reference direction: `references_markdown/Incubation+申请内容.md` lines 82-89, 176-224; `references_markdown/Cyberport_incubation_申请内容.md` lines 154-191.
- Navigation has a functional gap: nav contains `#contact` but page has no `id="contact"`; footer has `#terms`, `#support`, `#developers` targets that do not exist.
  - Evidence: `index.html` nav/footer anchors.
  - Because smooth-scroll intercepts all `a[href^="#"]`, these dead anchors become no-op clicks.
- i18n completeness gap: new product showcase keys (`product.o1.*`, `product.display.*`, `product.m1.*`, `product.m1pro.*`) are defined in English only, so non-English locales partially fall back to English.
  - Evidence: `index.html` key definitions around English block; no matching key families in other language blocks.
- Visual direction is energetic but not yet "modern premium" in a cohesive way: emoji icons, heavy particle field, repeated neon gradients, and duplicate carousel experiences add noise and cognitive load.
  - Evidence: `index.html` feature icons, particle system, top carousel + product showcase carousel.
- Responsive risks remain in commerce/header areas:
  - Dense controls in fixed header at mobile widths (theme + language + CTA) can wrap and compete for space (`index.html` mobile nav rules).
  - Store grid keeps two columns down to 768px with `minmax(200px, 1fr)` before collapsing at 520px, increasing overflow/squeeze risk on mid-small widths.
  - Hero offset only explicitly handled at <=520px; fixed header overlap risk remains between 521-768px.
- Claims and narrative consistency risks:
  - On-page metrics and timelines are not clearly source-cited in UI.
  - Footer year/copy still shows 2025, while pipeline run context is 2026.
  - Reference corpus includes internal/confidential operational details that should not be surfaced publicly (e.g., application workflow details and credentials in materials); content filtering is required.

## Recommended File-Level Changes

- `index.html`
  - Reorder content sections to the approved spine: Hero clarity -> Problem -> 3-pillar Solution -> Product lineup -> Proof/Readiness -> Business model -> Final CTA.
  - Replace first-screen copy with short, concrete language aligned to references (always-on assistant, semantic memory cues, optical sensing/computing module value).
  - Add a real contact/partner section with valid `id="contact"`; either implement or remove dead footer anchor targets.
  - Add concise production-readiness/proof block (pilot status, manufacturing readiness, commercialization milestones) using conservative, verifiable wording from references.
  - Add explicit B2B module pathway block (evaluation kit/pilot/integration), not only consumer purchase flow.
  - Modernize visual system while preserving stability: introduce CSS design tokens (color, spacing, type scale), reduce decorative noise, unify card/section rhythm, and simplify duplicate motion patterns.
  - Improve responsive behavior for header/store grid/hero offsets across 320/390/768/1024/1280 breakpoints.
  - Tune motion and interaction for premium feel and performance (reduce particle count/intensity, soften hover effects, keep meaningful section reveals only).

- `index.html` (translations object)
  - Update English source copy keys for revised sections and product messaging.
  - Add corresponding keys for all supported locales for high-visibility strings (hero, solution pillars, product intros, proof, CTA, partner/contact).
  - Remove or reconcile stale/unused keys (`product.heading`, `product.p1`, etc.) to prevent drift.

- `privacy/index.html`
  - Align branding/tone with updated landing narrative and verify policy date/versioning consistency with new public claims.

- `assets/` (recommended for maintainability once copy/layout stabilize)
  - Introduce dedicated landing stylesheet/script files (e.g., `assets/css/landing.css`, `assets/js/landing.js`) and migrate from monolithic inline blocks in `index.html` incrementally to reduce regression risk.

## Risks / Validation Checklist

- Messaging validation
  - Confirm final public copy matches reference positioning: always-on AI assistant, optical sensing/computing module moat, semantic cues/memory graph, B2C + B2B model.
  - Ensure no confidential/internal-only details from `references` / `references_markdown` are published.

- Functional validation
  - Verify all nav/footer anchors resolve to existing sections.
  - Verify language switch, fallback behavior, and non-English coverage for newly added keys.
  - Verify theme toggle state persistence and visual parity in both themes.
  - Verify Stripe buy buttons render correctly and remain tappable across breakpoints.

- Responsive/accessibility validation
  - Test 320, 390, 768, 1024, 1280+ widths (portrait/landscape where relevant).
  - Validate header wrapping/overlap behavior and top-section spacing with fixed header.
  - Validate RTL layout behavior for Arabic (direction, alignment, control ordering).
  - Check contrast, focus visibility, and reduced-motion behavior for animations.

- Performance/stability validation
  - Re-check interaction smoothness after animation tuning (scroll, hover, carousels, store area).
  - Ensure no regression in existing core flows (buy, try app, language switch, theme switch, privacy page access).

- Content/legal validation
  - Fact-check market and impact numbers used on-page against cited sources before publishing.
  - Update visible date/year strings where needed for 2026 consistency.
