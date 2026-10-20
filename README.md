# The Daily Ledger

A complete broadsheet newspaper front page, typeset in the browser. Three editions, a breaking-news ticker, section filters, a searchable front page, a full article reader and a drawer of saved clippings — all printed on warm paper with one red spot colour.

## Features

- Three switchable editions, each with its own date, lead story, briefs, pull quote, classifieds and ticker
- Front page with a large lead story, halftone-style SVG artwork, three secondary stories, an "also in this edition" strip and classified advertising
- Section filters for City, Culture, Science, Sport, Business and Opinion
- Search across headlines, decks, bylines and article text
- Article reader with a two-column text setting, drop cap and full artwork
- Save or remove clippings from an article; browse them in a dedicated clippings window, including stories from earlier editions
- Selected edition and all clippings persisted in `localStorage`
- Responsive single-column edition down to 390px
- Keyboard focus states, native dialog behaviour, ARIA labels and a live status line
- Reduced-motion support that stops the ticker and edition transitions

## No build step

Open `index.html` directly in a modern browser. There is no install, build or bundling step. The Google Fonts link is optional; the paper falls back to Georgia offline.

## Files

- `index.html` — masthead, controls, front-page shell, article and clippings dialogs
- `styles.css` — newsprint palette, broadsheet grid, rules, typography and responsive layout
- `app.js` — edition data, SVG artwork, rendering, filters, search, clippings and storage
- `README.md` — this document

Live demo: https://ayo-2010.github.io/broadsheet/
