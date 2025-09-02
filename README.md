Jacqueline Boadi – Portfolio & Resume
====================================

This repo hosts a simple, multi‑page portfolio using the same clean aesthetic as the resume.

Pages
-----
- `index.html` — Resume (kept as‑is)
- `portfolio.html` — Work samples: graphics, short‑form videos, brand collabs
- `about.html` — Bio, tools, quick intro

Assets
------
- `assets/css/styles.css` — Shared styles (nav, layout, grids)
- `assets/js/script.js` — Tiny helper to highlight the active nav
- `assets/media/` — Drop images/videos here (e.g., design1.jpg, design2.jpg, …)

How to add your work
--------------------
1. Put files in `assets/media/` (e.g., `design1.jpg`, `collab-shein.jpg`).
2. Update the `<img src>` paths in `portfolio.html` to point at your files.
3. Replace placeholder copy as needed across pages.

Notes
-----
- The resume page saves edits to `localStorage`. If old text persists, clear saved content from your browser devtools: `localStorage.removeItem('resumeContent')`.
- Print button is hidden during print preview.

Development
-----------
Open `index.html` (or any page) directly in a browser. No build step required.
