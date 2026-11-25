# Language policy

New documentation should be written in en‑US per the current company style. Existing pages written in en‑GB are acceptable; do not spend time converting legacy content.

## Spell checking with mdspell

Our spellcheck scripts currently use en‑GB dictionaries. This can flag valid en‑US spellings.

When `mdspell` flags a word that is correct in en‑US, or a highly technical term that is not in the dictionaries (e.g., `h1`, `px`, `rem`, `WCAG`, `Attribution‑ShareAlike`), add it to the `.spelling` file to suppress false positives.

We are not planning a migration of the checker to en‑US at this time; this project is receiving limited changes while focus is on Pragma.
