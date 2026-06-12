# Arnault Caillet - Personal Website

This repository contains the source for `arnaultcaillet.github.io`, a Jekyll-powered personal website published through GitHub Pages.

## Debug Locally

1. Install the Jekyll build environment: Ruby, RubyGems, GCC, and Make. See the official Jekyll installation guide: <https://jekyllrb.com/docs/installation/#requirements>.
2. From the repository root, run:

   ```bash
   bash run_server.sh
   ```

3. Open <http://127.0.0.1:4000> in your browser.
4. While the server is running, Jekyll rebuilds the site when source files change. Refresh the browser if needed.
5. When changes are ready for production, commit them and push to GitHub.

## Repository Architecture

This is a static Jekyll site. The source files are converted into HTML/CSS/JS under `_site/`, which is generated output and is not committed.

- `_config.yml` defines site-wide settings: title, repository, author metadata, included/excluded paths, Markdown behavior, Sass settings, and plugins.
- `_pages/about.md` is the homepage content. Its front matter sets `permalink: /`, so this Markdown file renders as the root page.
- `_pages/awards.md` is a dedicated content page for awards and recognition.
- `_pages/open-source.md` is a dedicated content page for open-source data, packages, infrastructure, and challenge organization.
- `_pages/publications.md` renders a dedicated chronological page for patents, papers, conference abstracts, workshops, demos, and invited talks. Entries are maintained manually in `_data/publications.yml`.
- `_pages/includes/intro.md` contains the first large homepage section and is included by `_pages/about.md` with `{% include_relative %}`.
- `_layouts/default.html` is the main HTML shell. It assembles the head, masthead, sidebar, page content, and scripts.
- `_includes/` contains reusable Liquid snippets:
  - `head.html`, `head/custom.html`, and `seo.html` build metadata, stylesheets, icons, and SEO tags.
  - `masthead.html`, `sidebar.html`, and `author-profile.html` build the visible navigation and author profile.
  - `scripts.html` and `analytics.html` load JavaScript and optional analytics behavior.
- `_data/navigation.yml` defines the top navigation links shown in the masthead. Links can point either to homepage anchors or to dedicated pages such as `/awards/`, `/open-source/`, and `/publications/`.
- `assets/css/main.scss` imports the Sass partials from `_sass/` and contains the current custom styling overrides.
- `assets/js/main.min.js` is the main JavaScript file loaded by the site, and `assets/js/publications.js` powers publication filtering.
- `assets/pdfs/` stores local publication PDFs, and `assets/images/publications/` stores optional hover-preview snapshots for publication entries.
- `assets/css/academicons.css` and `assets/fonts/` support academic/social icons used in the author profile.
- `images/` contains the profile photo and inline logos used by the homepage content.

## Content Flow

On build, Jekyll reads `_config.yml`, finds `_pages/about.md`, wraps it in `_layouts/default.html`, expands Liquid includes, compiles `assets/css/main.scss` into `assets/css/main.css`, and writes the rendered site to `_site/`.

The main page content is mostly Markdown/HTML in `_pages/about.md` and `_pages/includes/intro.md`. Dedicated section pages live beside it in `_pages/` and are exposed through their `permalink` front matter. The persistent left profile is driven by the `author` block in `_config.yml` and rendered by `_includes/author-profile.html`.

## Acknowledgements

- This site builds on AcadHomepage.
- AcadHomepage incorporates Font Awesome, distributed under the SIL OFL 1.1 and MIT License.
- AcadHomepage is influenced by `mmistakes/minimal-mistakes`, distributed under the MIT License.
- AcadHomepage is influenced by `academicpages/academicpages.github.io`, distributed under the MIT License.
