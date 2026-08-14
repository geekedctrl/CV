Interactive Portfolio (HTML/CSS/JS)

This repository contains a minimal, responsive, and interactive portfolio template built with plain HTML, CSS, and JavaScript. It's designed for easy deployment to GitHub Pages.

Quick start

1. Edit content

   - Update `index.html` with your name and content.
   - Add or edit projects in `assets/main.js` inside the `projects` array.
2. Preview locally

   You can use a simple static server. With Python 3:

   ```bash
   python3 -m http.server 8000
   ```

   Or with Node's `http-server` (install globally):

   ```bash
   npx http-server -c-1 .
   ```
3. Deploy to GitHub Pages

   - Option A (recommended): Create a `gh-pages` branch and push the built static site there, or keep the `main` branch and enable GitHub Pages from the repository settings using the `/docs` folder. For this template, you can place files in `/docs` and enable Pages from `main` -> `/docs`.
   - Option B: Use GitHub Action to push to `gh-pages` on commit.

Files

- `index.html` - Main site
- `index.html` - Main site
- `assets/css/dark.css` - Dark theme stylesheet (site is dark-only)
- `assets/main.js` - JavaScript and project data
- `pages/cv/index.html` - CV subpage (replace placeholders with content extracted from your CV)

CV / Resume

- To publish your CV PDF: put the file at `assets/CV.pdf`. The CV page (`pages/cv/index.html`) links to that path for the download button.
- The header and footer are partials in `partial/header.html` and `partial/footer.html`; the CV page loads them at runtime.

Theme

This template uses a "Purple Team" cybersecurity look: purple accents and subtle glows designed to hint at both offensive (red) and defensive (blue) work.
To customize the accent color, edit the `--accent` and `--accent-2` variables at the top of `assets/css/dark.css`.

License

Use as you like.
