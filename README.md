# Karthikean Pathmanathan — Portfolio

A responsive, five-page portfolio built with plain HTML, CSS, and JavaScript. All pages use a minimal dark design with muted colors, clean typography, and subtle dividers.

Preview locally from this directory:

```sh
python -m http.server 8000
```

Open http://localhost:8000. A web server is required to load the shared header and footer.

- `index.html`: homepage, about section, latest selected projects, grouped tools, and contact links.
- `pages/projects/index.html`: project details and category filters.
- `pages/cv/index.html`: professional and co-curricular experience, education, skills, and a downloadable CV.
- `pages/skills/index.html`: capabilities and labs.
- `pages/contact/index.html`: contact details and the existing FormSubmit form.
- `assets/css/portfolio.css`: base layouts and mobile/print styles.
- `assets/css/home.css`: the shared minimal design for all pages.
- `assets/main.js`: shared partial loading, navigation, and filters.
- `partial/`: shared header and footer.

The site supports hosting at the domain root or a subdirectory such as GitHub Pages `/CV/`. Deploy the repository as a static site without a build step. The site uses system fonts and does not load external fonts.

Replace the project resource placeholders with real links when available. The contact form retains its existing FormSubmit destination; submitting it sends a message to the configured email address.

Project entries include verified public repository links. Earlier projects without public resources retain placeholders. Legacy illustrative photos in `assets/images/` are from Unsplash; the current design uses text-based project listings.
