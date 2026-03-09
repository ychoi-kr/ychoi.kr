# CODEBASE.md

## Overview

This repository is a Jekyll-based static site. The main source of truth is `_data/*.yml`, not the page Markdown files. Multiple pages reuse the same data.

## Main Directories

- `_data`: source content data
- `_layouts`: shared layouts
- `_includes`: reusable fragments such as `head`, `navigation`, and SEO markup
- `assets/css`: screen and print styles
- `books`, `events`, `log`: section-specific page content

## Important Data Files

- `_data/authored_books.yml`: authored books
- `_data/translated_books.yml`: translated books
- `_data/reviewed_books.yml`: technical review and proofreading work
- `_data/events.yml`: events and activity items
- `_data/apps.yml`: apps and projects
- `_data/gpts.yml`: GPT entries
- `_data/work.yml`, `_data/lectures.yml`, `_data/personal.yml`: CV source data

## Page Data Flow

### Home

- File: `index.md`
- Role: introduction and unified news feed
- Data sources:
  - `_data/events.yml`
  - `_data/authored_books.yml`
  - `_data/translated_books.yml`
  - `_data/reviewed_books.yml`
- Notes:
  - Combines data with `concat`
  - Sorts by `date` and reverses for newest-first output
  - Uses `show_on_home: true` to control homepage visibility

### Books

- File: `books.md`
- Role: lists authored books, translations, and technical review work
- Notes:
  - Each section uses `sort: "date" | reverse`
  - Rendered order is independent of raw YAML order

### CV

- File: `cv.md`
- Role: CV page
- Data sources:
  - `_data/personal.yml`
  - `_data/work.yml`
  - `_data/lectures.yml`
  - `_data/apps.yml`
  - `_data/gpts.yml`
  - `_data/authored_books.yml`
  - `_data/translated_books.yml`
  - `_data/awards.yml`
  - `_data/scholarships.yml`
- Notes:
  - `show_in_cv: true` is important
  - The CV intentionally has different screen and print presentations.
  - CV-related changes should be reviewed across `cv.md`, `assets/css/main.css`, and `assets/css/print.css`.
  - Some presentation logic is split between HTML markup and CSS

## Style Structure

- `assets/css/main.css`: screen styles
- `assets/css/print.css`: print styles

Notes:

- Static CSS files are not processed by Liquid.
- The CV uses separate screen and print styles by design.
- If link formatting depends on CSS pseudo-elements, review both the markup and the stylesheet together.

## Verification Routine

1. Run `bundle exec jekyll build`.
2. Check `_site/index.html`.
3. Check section outputs such as `_site/books/index.html`, `_site/cv/index.html`, or `_site/events/index.html` as needed.
4. If a data file changed, confirm that rendered ordering and visibility are correct.

## Maintenance Notes

- For book additions, decide the category first: authored, translated, or reviewed.
- Keeping YAML files in chronological order makes the repository easier to maintain.
- Newest-first display is handled in templates, so raw data files can prioritize human readability.
- When editing from PowerShell, preserve UTF-8 without BOM.
