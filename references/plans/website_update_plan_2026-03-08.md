# LightMind Website Refresh Plan (Based on Latest Reference Materials)

Date: 2026-03-08
Owner: Landing Page / Brand / Growth
Scope: `index.html` and related assets only (landing-page-relevant updates)

## 1. Inputs Reviewed

This plan is based on:

- `references/Cyberport_incubation_申请内容.pdf`
- `references/Incubation+申请内容.pdf`
- `references/Seed申请2026-0222.pdf`
- `references/PitchTraining_20260212_意见反馈.pdf`
- `references/LightMind.pdf`

Key extracted directions:

1. Positioning should emphasize **always-on first-person AI assistant + memory system**, not generic "platform" language.
2. Core technical moat should be simplified to 1-line claims in main flow:
   - low-power optical sensing + optical computing module
   - multimodal semantic memory cues (not raw recording narrative)
   - structured memory graph for recall/reminders/decision support
3. Product line has multiple form factors (O1 / M1 / M1 Pro / Display) and top recommendation trend is **display-enabled products**.
4. Pitch feedback strongly requests:
   - lead with user pain and use-case
   - reduce technical overload in main storyline
   - stronger branding consistency
   - highlight production readiness and commercialization path
   - use short demo-oriented storytelling
5. Business model should be clear and simple:
   - hardware + subscription (B2C)
   - module/evaluation kit path for B2B

## 2. Strategic Website Goal

Make the landing page convert better for both:

- Consumer buyers (device purchase + app try)
- Early partners/investors (credibility in deep-tech + execution readiness)

Primary outcome targets:

1. Higher click-through on Buy + Try App CTAs.
2. Better first-screen comprehension within 5 seconds.
3. Cleaner story flow from "problem -> solution -> products -> proof -> action".

## 3. Content Strategy Update

## 3.1 New Story Spine (Top to Bottom)

1. **Hero: one-line clarity**
   - Replace abstract messaging with plain statement:
   - "Always-on AI wearable that helps you remember, recall, and decide."
2. **Problem section (new/stronger)**
   - Information overload
   - Context switching across devices
   - Lack of trustworthy always-on memory support
3. **Solution section (simplified)**
   - 3 concise pillars only (one line each)
   - avoid dense architecture text in main section
4. **Product lineup section (existing area, refined)**
   - O1 / M1 / M1 Pro / Display clearly differentiated
   - each with short use-case tag (e.g., all-day capture / enhanced recall / max performance / glanceable display)
5. **Proof section (new/expanded)**
   - traction: pilot orders, production-readiness milestones
   - team credibility and execution capability
6. **Business model section (new concise)**
   - device + subscription + B2B module pathway
7. **Final CTA section**
   - consumer CTA: Buy + Try App
   - partner CTA: Contact for pilot / integration

## 3.2 Copy Direction Rules

1. Use short sentences and concrete verbs.
2. Avoid repeated jargon (e.g., repeated "multimodal intelligent platform").
3. Keep technical detail in expandable blocks or secondary sections.
4. Maintain consistency across all languages for key terms:
   - always-on AI assistant
   - optical sensing/computing
   - memory cues / memory graph

## 3.3 Product Copy Plan

For each of O1, M1, M1 Pro, Display:

1. 1-line positioning
2. 2-line real-life value
3. 1 key innovation line
4. 1 "best for" line

Display product should explicitly describe:

- glanceable output
- instant translation / cue / reminder visibility
- minimal interruption to real-world interaction

## 4. UI/UX Modernization Plan

## 4.1 Visual System Refresh

1. Keep existing brand gradients, but tighten hierarchy:
   - stronger spacing rhythm
   - clearer card boundaries
   - reduced visual noise around Stripe cards
2. Improve typography scale:
   - larger section headings
   - shorter body line-length
   - stronger contrast in light theme
3. Normalize component widths:
   - product carousel, buy cards, counter, app buttons aligned to same content grid

## 4.2 CTA and Conversion Layout

1. Keep Buy area near top.
2. Ensure responsive card grid behavior is predictable:
   - desktop large: 3+1 (or 4 in one row only when width allows comfortably)
   - tablet: 2x2 centered
   - mobile: 1 column with enough vertical spacing
3. Keep Stripe iframe containers from overlap:
   - enforce min/max card width
   - consistent row gaps

## 4.3 Motion and Interaction

1. Keep carousel auto-loop but reduce cognitive load:
   - slower transitions
   - clear active state
2. Add subtle entrance animations only for major sections.
3. Ensure sticky header never overlaps first content block on mobile.

## 5. Information Architecture and Navigation

1. Update navbar anchors to mirror story spine:
   - Products
   - Technology
   - Why Now
   - Contact
2. Add optional "For Partners" sub-link/anchor in lower sections.
3. Keep language + theme + app CTA visible but compact on mobile.

## 6. Multilingual Plan

1. Use English as source copy for new/updated keys.
2. Refresh all supported languages for these high-visibility keys first:
   - hero title/subtitle
   - solution pillars
   - product intros
   - proof and CTA copy
3. Leave long-form deep technical text in English fallback only where needed, then iterate translations.

## 7. Implementation Plan (Execution Steps)

## Phase A - Messaging and Structure (High Impact)

1. Rewrite hero/problem/solution copy.
2. Reorder sections to follow problem -> solution -> products -> proof -> CTA.
3. Add concise production-readiness + commercialization blocks.

Deliverable: improved narrative clarity and first-screen comprehension.

## Phase B - Product Experience (High Impact)

1. Standardize top product gallery and buy grid spacing.
2. Finalize bottom product intro carousel for all 4 products.
3. Align product naming and copy tone across all places.

Deliverable: consistent product story and less layout friction.

## Phase C - Visual Polish + Mobile (High Impact)

1. Tighten spacing system and responsive breakpoints.
2. Improve light-theme readability and header consistency.
3. Validate Stripe card rendering across device sizes.

Deliverable: modern, premium look with stable mobile behavior.

## Phase D - Localization and QA (Medium Impact)

1. Update translation keys for all changed headline copy.
2. Functional QA:
   - language switch
   - theme switch
   - carousels
   - counter
   - Stripe buttons
3. Content QA for tone and consistency.

Deliverable: production-ready multilingual landing page.

## 8. Acceptance Criteria

1. New visitor can explain the product in one sentence after viewing hero + first two sections.
2. No overlap/truncation in buy area at common widths (320, 390, 768, 1024, 1280+).
3. All four products appear consistently in:
   - top visual carousel
   - buy section
   - lower intro carousel
4. All critical UI copy visible in supported languages.
5. CTA buttons remain prominent and accessible on both themes.

## 9. Proposed Next Commit Sequence

1. Commit 1: content architecture + copy rewrite (EN only first)
2. Commit 2: section layout and responsive grid refactor
3. Commit 3: visual polish + animation tuning
4. Commit 4: multilingual key updates + QA fixes

This sequence reduces risk: messaging first, layout second, polish third, localization last.

## 10. Notes

- `DemoDay_Jumpstarter_信息填写.pdf` extraction has minimal text; not used as a primary content source.
- Keep claims conservative and verifiable on public landing pages.
- Keep deep technical details available in secondary sections or downloadable deck, not in first-screen messaging.
