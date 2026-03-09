# AGENTS.md

## Purpose

This repository is a Jekyll-based personal site. When working here, do not look only at page-level Markdown files. Always inspect `_data` and the relevant Liquid templates together.

## Core Working Rules

- For content updates, look in `_data/*.yml` first.
- Page output order may come from template logic such as `sort`, `where`, `concat`, and `reverse`, not from the physical order inside a data file.
- A successful `bundle exec jekyll build` does not guarantee correct output. Check the rendered files in `_site`.
- Preserve UTF-8 without BOM when writing Markdown, YAML, HTML, or CSS files from PowerShell.
- Do not put Liquid expressions such as `{{ ... }}` into static CSS files.

## Editing Method

- Prefer `apply_patch` for manual file edits.
- If `apply_patch` is not working in the current environment, use a minimal fallback that preserves UTF-8 without BOM.
- After fallback editing, re-open the file and verify the exact edited lines.
- Be especially careful with Markdown front matter. If a BOM is introduced, Jekyll may copy the file as a static asset instead of rendering it as a page.

## Repeated Task Guide

### Updating book data from a publisher link

1. Classify the book first:
   - Authored book: `_data/authored_books.yml`
   - Translation: `_data/translated_books.yml`
   - Technical review or proofreading: `_data/reviewed_books.yml`
2. Collect the metadata from the publisher page whenever possible:
   - Title
   - Author or original author
   - Publisher
   - Publication date
   - Canonical link
3. Respect the file ordering convention when adding a new entry.
   - In this repository, data files are easier to maintain when they stay in chronological order.
   - Display order is handled separately in templates with `sort: "date" | reverse`.
4. Add `show_on_home: true` if the new book should appear on the homepage feed.
5. Add `show_in_cv: true` if the new book should appear on the CV page.
6. After editing, verify all relevant outputs:
   - `bundle exec jekyll build`
   - `_site/index.html`
   - `_site/books/index.html`
   - `_site/cv/index.html` when CV visibility matters

## Important Cautions

- Do not rely only on an insertion anchor when modifying YAML files automatically. Re-check the final position in the file.
- Jekyll may tolerate Liquid mistakes without failing the build, so rendered HTML must be inspected.
- If a page suddenly starts appearing in `_site` as a copied `.md` file instead of a rendered page, check for BOM or broken front matter first.