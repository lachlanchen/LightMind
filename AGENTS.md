## Agent Guidelines for LightMindLanding

Scope: This file applies to the entire `LightMindLanding` repository.

### Workflow

- After making intentional changes to this repository at the user's request, automatically:
  - Stage only the relevant project files (avoid OS artifacts like `.DS_Store` and `._*` files).
  - Create a clear, concise commit message describing the change.
  - Push to the default branch (`main`) on `origin`.

### Code & Content Changes

- Keep HTML/CSS/JS changes minimal and focused on what the user requested.
- Preserve the existing visual style and layout unless the user explicitly asks to redesign it.
- When updating copy, prefer aligning language with the latest pitch deck and marketing narrative provided by the user.

### Translations & i18n

- When changing English content that is wired into the translation system:
  - Update the corresponding English entries in the `translations` object.
  - Leave non-English translations as-is unless the user explicitly asks for updated localization.

