# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Also read `AGENTS.md` and `CODEBASE.md` — they contain detailed working rules and page-by-page data flow. This file summarizes the essentials and adds build commands.

## Commands

```bash
bundle install              # install Ruby gem dependencies (first time)
bundle exec jekyll serve    # local dev server with live reload at http://localhost:4000
bundle exec jekyll build    # build static site into _site/
```

There is no test suite, linter, or JS build step — this is a plain Jekyll site. "Verification" means running `jekyll build` and inspecting the rendered HTML in `_site/`.

## Architecture

Jekyll static site for a personal homepage (https://ychoi.kr). The **source of truth is `_data/*.yml`, not the page Markdown files**. Page `.md` files are thin templates that pull from `_data` via Liquid; multiple pages reuse the same data.

- `_data/*.yml` — all content (books, events, apps, CV data). Edit here for content changes.
- `_layouts/`, `_includes/` — shared Liquid templates and fragments.
- `assets/css/main.css` (screen) and `assets/css/print.css` (print) — the CV intentionally renders differently on screen vs. print, so CV changes must be checked against both.
- Page `.md` files (`index.md`, `books.md`, `cv.md`, etc.) — templates that combine and display data.
- `books/<slug>.md` — per-book detail pages using `layout: book`. The layout looks up `_data/translated_books.yml` by `page.permalink` and renders the title, subtitle, and 원서 정보 section from that entry, so the Markdown holds only the body.

Books are split by role across three files — pick the right one when adding a book:
- `_data/authored_books.yml` — authored
- `_data/translated_books.yml` — translated
- `_data/reviewed_books.yml` — technical review / proofreading

## Critical Gotchas

- **Rendered order ≠ file order.** Templates use `sort: "date" | reverse`, `concat`, `where`, etc. Keep YAML files in chronological order for human readability; display order is a template concern. Never reorder YAML to change display.
- **Visibility flags:** `show_on_home: true` controls homepage feed inclusion; `show_in_cv: true` controls CV page inclusion. Adding data is not enough — set the right flag.
- **A green `jekyll build` does not mean correct output.** Jekyll tolerates Liquid mistakes silently. Always inspect the rendered file in `_site/` (`_site/index.html`, `_site/books/index.html`, `_site/cv/index.html`).
- **A book page with a mismatched permalink loses its title.** `_layouts/book.html` matches `page.permalink` against `link` in `_data/translated_books.yml`. If they differ by even a trailing slash, the page still builds — silently, with no heading.
- **UTF-8 without BOM is mandatory.** When editing from PowerShell, preserve UTF-8 without BOM. A BOM in Markdown front matter makes Jekyll copy the file as a static asset (a raw `.md` appears in `_site/`) instead of rendering it as a page.
- **No Liquid in static CSS.** `{{ ... }}` expressions in `assets/css/*` are not processed and break styles.
