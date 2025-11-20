# Nova College Fest — Static Website

This folder contains a complete, multi-page static website for a college event:

- **Homepage** (`index.html`) — event name, dates, short description, CTAs
- **Events** (`events.html`) — competitions listed using `<ul>/<ol>` with formatted details
- **Schedule & Results** (`schedule.html`) — accessible `<table>` with filtering and sorting
- **Registration** (`register.html`) — HTML form with client-side validation & localStorage demo
- **Gallery** (`gallery.html`) — responsive photo grid
- **Contact & FAQs** (`contact.html`) — contact info and expandable FAQs
- **Previous Year Gallery** (`gallery-2024.html`) — linked from footer and gallery

### How to run
1. Download the zip and unzip it.
2. Open `index.html` in your browser.
3. For form submissions, this demo stores entries in your browser (no backend).

### Customize
- Update event name/date/location in `index.html` and meta tags.
- Add real photos to `assets/images/` and update `gallery.html`.
- Wire up `register.html` to your backend by replacing the JS with a `fetch()` POST.

Enjoy!
