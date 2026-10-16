# Enkel nettside for Venstrekoderne

## Gjøre endringer

### Møter
Møtene legges inn i Vi: [venstre.medvi.no](https://venstre.medvi.no) → Venstrekoderne → Arrangementer, med bilde, tid, sted og beskrivelse. Siden henter dem selv (`kalender.js`, fra kalenderens offentlige JSON), viser kommende møter under «Neste møte» og resten under «Tidligere møter». En endring i Vi synes her innen fem minutter.

Kalenderen kan også abonneres på i kalenderapper: https://venstre.medvi.no/kalender/arrangementer-2paqpn.ics

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
