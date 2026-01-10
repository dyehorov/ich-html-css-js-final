# meetup-html-css-js-final

Final project for the **HTML / CSS / JavaScript** module of the **ICH Web Development course**.

This project is a simplified Meetup-like web application that allows users to browse events, filter them by different criteria, and explore events on a map.

**Author:** Danylo Yehorov

**Live Demo:**  
https://dyehorov.github.io/meetup-html-css-js/

---

## Features

- 📋 Event listing with reusable event cards
- 🔍 Event filtering by:
  - date
  - type (online / offline)
  - distance
  - category
- ♻️ Reset filters functionality
- ❌ “No results” state handling
- 🗺️ Embedded Google Maps view for selected city
- 🔐 Privacy policy modal with `localStorage` persistence
- 📱 Responsive layout

---

## Project Structure

```text
meetup-html-css-js-final/
├── assets/                 # Images, icons
├── pages/                  # HTML pages
│   └── events.html
├── scripts/
│   ├── components/         # UI components
│   │   ├── eventCard.js
│   │   ├── topCategoryCard.js
│   │   └── filterOptions.js
│   ├── data/               # Mock data
│   │   └── data.js
│   ├── filter/             # Filtering logic
│   │   └── filter.js
│   ├── render/             # Render helpers
│   │   └── render.js
│   ├── ui/                 # UI logic (modals, map)
│   │   ├── privacyModal.js
│   │   └── map.js
│   ├── script.js           # Home page entry point
│   └── events.js           # Events page entry point
├── styles/                 # CSS styles
│   ├── reset.css
│   ├── style.css
│   └── events.css
├── index.html
└── README.md
```

---

## Technologies Used

- HTML5
- CSS3 (Flexbox, media queries)
- Vanilla JavaScript (ES6+)
- Google Maps Embed
- LocalStorage
- GitHub Pages

## How to Run the Project Locally

This project uses no build tools and runs in the browser.

1. Clone the repository:
   git clone https://github.com/dyehorov/meetup-html-css-js.git

2. Open the project folder

3. Open index.html or pages/events.html using Live Server (recommended)

## Limitations & Notes

- This project uses mock (static) data
- No backend or database is implemented
- Google Maps is embedded via iframe (no API key required)
- The project focuses on clean structure, DOM manipulation, and filtering logic

## License

This project is for educational purposes only.
