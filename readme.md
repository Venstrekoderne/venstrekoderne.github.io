# Enkel nettside for Venstrekoderne

## Gjøre endringer

### Møter
* Legg bilde til eventet i images-mappa.
* I `_posts`-mappa, kopier `md.template` til `YYYY-MM-DD-slug.md`
* Fyll inn informasjon i markdown-filen
* Det siste møtet med next som tag er det som blir highlightet.

### Styret
* Oppdater `_data/styret.json`

### Vedtekter
* Oppdater `_includes/vedtekter.html`

## For å kjøre: 

Trenger tailwind installert for CSS parsing. Se [https://tailwindcss.com/docs/installation](https://tailwindcss.com/docs/installation)

Så kjøre: `npx tailwindcss -i ./css/tailwind_input.css -o ./css/tailwind_output.css --watch ` i grunnmappa.

Dette ser etter endringer både i .html-filer, og i tailwind_input.css, og kompilerer alt det til tailwind_output.css, som er den CSS-fila som brukes av siden.

For å spinne opp jekyll lokalt kjører du `bundle install` etterfulgt av `bundle exec jekyll serve`.

## Lisens

Alt her er (c) Venstrekoderne, men føl selvfølgelig fri til å lære av koden (ikke at det er så mye som er verdt å lære av!)
