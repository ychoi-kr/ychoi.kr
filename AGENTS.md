# AGENTS.md

The single source of project instructions for this repository. `CLAUDE.md` only
points here; there is no second copy of any of this.

## Purpose

This repository is a Jekyll-based personal site (https://ychoi.kr). The source of
truth is `_data/*.yml`, not the page Markdown files. Page files are thin templates
that pull from `_data` through Liquid, and several pages reuse the same data.

Never read a page Markdown file on its own. Inspect `_data` and the relevant Liquid
templates together.

## Commands

```bash
bundle install              # install Ruby gem dependencies (first time)
bundle exec jekyll serve    # local dev server with live reload at http://localhost:4000
bundle exec jekyll build    # build the static site into _site/
```

There is no test suite, linter, or JS build step. "Verification" means building and
reading the rendered HTML in `_site/`. The maintainer often keeps `jekyll serve`
running while working, so check before offering to build anything.

## Repository Structure

- `_data`: source content data
- `_layouts`: `default`, `event`, `book`
- `_includes`: reusable fragments — `head`, `navigation`, `seo`
- `assets/css`: `main.css` (screen) and `print.css`
- `books`, `events`: section-specific page content

### Data files

- `_data/authored_books.yml`: authored books
- `_data/translated_books.yml`: translated books
- `_data/reviewed_books.yml`: technical review and proofreading work
- `_data/events.yml`: events and activity items
- `_data/apps.yml`, `_data/gpts.yml`: apps, projects, GPT entries
- `_data/work.yml`, `_data/lectures.yml`, `_data/personal.yml`: CV source data
- `_data/awards.yml`, `_data/scholarships.yml`, `_data/certifications.yml`: CV awards,
  scholarships, and certifications
- `_data/press.yml`: media mentions, rendered by `press.md`
- `_data/navigation.yml`: site navigation. A page absent from this file is still
  built and reachable by URL — just unlinked. Being unlinked can be deliberate.

## Page Data Flow

### Home — `index.md`

Introduction plus a unified news feed. Combines `events.yml`, `authored_books.yml`,
`translated_books.yml`, and `reviewed_books.yml` with `concat`, sorts by `date`, and
reverses for newest-first output. `show_on_home: true` controls inclusion.

### Books — `books.md`

Lists authored books, translations, and technical review work as three sections, each
using `sort: "date" | reverse`. Award badges render from the `awards` list on a book
entry; all three sections support them, and each badge links to its announcement.

### Book detail pages — `books/<slug>.md`

Individual pages with `permalink: /books/<slug>/` and `layout: book`. Only authored
books and translations have detail pages; technical review work does not.

`_layouts/book.html` concatenates `authored_books` and `translated_books` and finds its
entry by matching `page.permalink` against the entry's `link` — one lookup, no fallback
chain and nothing to declare in the page. From that entry it renders, in order:

1. `<h1>` from `title`, then a `.book-subtitle` line from `subtitle`
2. award badges from `awards`, each linking to its announcement
3. a metadata list: contributors, publisher, publication date
4. the page body
5. an 원서 정보 section from `original_title` and `original_link`

Contributors render as one line — `{{ authors | join: "·" }} 지음`, plus
`, {{ translators | join: "·" }} 옮김` when `translators` is present. The publisher name
is the link text for `publisher_link`, so no bare URL appears.

**The Markdown file holds only the body**: `## 소개`, the publisher's copy, any
`★ ... ★` lists, and the detail image. It carries no heading and no bibliographic list —
all of that comes from the data.

### CV — `cv.md`

Draws on `personal.yml`, `work.yml`, `lectures.yml`, `apps.yml`, `gpts.yml`,
`authored_books.yml`, `translated_books.yml`, `awards.yml`, `scholarships.yml`, and
`certifications.yml`. `show_in_cv: true` controls inclusion for work, apps, GPTs, and
translations; the other files are rendered in full.

Entries carry paired Korean and English fields (`title`/`title_en`,
`issuer`/`issuer_en`, `date`/`date_en`), and the CV renders the `_en` side. A
certification may add an optional `note_en`, appended after an em dash — use it only
for something the certificate or an equivalent record actually states.

Two things here look like bugs but are deliberate. Leave them alone.

- **Authored books are not filtered by `show_in_cv`.** Every entry in
  `authored_books.yml` appears, because there are few of them and they matter more.
  Translations are filtered.
- **Titles are not translated into English.** Authored books show their Korean titles,
  and translations of Japanese originals show the Japanese `original_title`. Inventing
  an English title would fabricate a book that does not exist under that name.

`personal.yml`'s homepage is marked `print-only-item`: hidden on the web CV, shown in
the PDF. The web CV is already served from that address, so it would be redundant
there but is needed once the PDF leaves the site.

The CV renders deliberately differently on screen and in print, and some presentation
logic is split between markup and CSS. CV changes must be checked against `cv.md`,
`assets/css/main.css`, and `assets/css/print.css` together. `print.css` exists for
producing the CV as a PDF and nothing else — pages other than the CV need no print
styling.

## Critical Gotchas

- **Rendered order is not file order.** Templates sort with `sort: "date" | reverse`,
  `concat`, `where`. Keep YAML files in chronological order for human readability and
  let templates decide display order. Never reorder YAML to change what the page shows.
- **Visibility flags.** `show_on_home: true` for the homepage feed, `show_in_cv: true`
  for the CV. Adding data is not enough.
- **A green build does not mean correct output.** Jekyll tolerates Liquid mistakes
  silently. Inspect the rendered file in `_site/`.
- **A book page with a mismatched permalink loses its title.** If `page.permalink` and
  the data entry's `link` differ by even a trailing slash, the page still builds —
  silently, with no heading at all.
- **UTF-8 without BOM is mandatory.** A BOM in Markdown front matter makes Jekyll copy
  the file as a static asset, so a raw `.md` appears in `_site/` instead of a rendered
  page. If that happens, check for a BOM or broken front matter first.
- **No Liquid in static CSS.** `{{ ... }}` in `assets/css/*` is not processed and
  breaks styles.

## Editing Method

- Use whichever targeted edit mechanism your tooling provides, and prefer a surgical
  edit over rewriting a whole file.
- Whatever the mechanism, it must preserve UTF-8 without BOM. Shell redirection and
  several PowerShell cmdlets do not.
- If you had to fall back to a shell command instead of a dedicated edit tool, re-open
  the file afterwards and verify the exact edited lines.
- Do not rely on an insertion anchor alone when modifying YAML automatically. Re-check
  the final position in the file.

## Repeated Task Guide

### Adding a book to the data

1. Classify the book first:
   - Authored: `_data/authored_books.yml`
   - Translation: `_data/translated_books.yml`
   - Technical review or proofreading: `_data/reviewed_books.yml`
2. Collect metadata from the publisher page: title, subtitle, author or original
   author, publisher, publication date, canonical link.
3. Insert in chronological position. Display order is a template concern.
4. Set `show_on_home` and `show_in_cv` deliberately.
5. Check the rendered `_site/index.html`, `_site/books/index.html`, and
   `_site/cv/index.html` as relevant.

### Award selections

When a book is chosen for 세종도서, 대한민국학술원 우수학술도서, or similar:

- Authored books and translations get an `awards` entry **and** an event in
  `_data/events.yml` with `show_on_home: true`.
- Technical review and proofreading work gets the `awards` label only. No home feed
  event.
- If one announcement covers several books, write a single event and list them in it.
- Each award entry is `{title, link}`, where `link` is the awarding body's own result
  notice — KPIPA for 세종도서, nas.go.kr for 대한민국학술원 우수학술도서. Publisher or
  bookstore pages are not the primary source. The nas.go.kr notice list is rendered by
  JavaScript, so a specific year's post URL is easier to find by web search than by
  fetching the list page.

### Creating a book detail page

Follow the structure described under **Book detail pages** above. The Markdown file
contains only the body; the heading and the bibliographic list come from the data.

#### Fetching publisher content

- Fetch the raw HTML and read it directly: `Invoke-WebRequest -UseBasicParsing`, then
  decode `RawContentStream` as UTF-8. Subtitle, blurb, bullet lists, and example-code
  GitHub links are all in the static HTML — none of it is loaded by JavaScript.
- `<meta property="og:title">` holds `제목: 부제`. It is the most reliable source for
  `subtitle`.
- Do not use a summarizing fetch tool for copy that must be verbatim; such tools
  rewrite sentences even when asked to quote. Extraction services are lossy too and
  have silently dropped whole sections. They are a convenience, not the source.
- In PowerShell 5.1, `Invoke-RestMethod` mangles UTF-8 responses — use
  `Invoke-WebRequest` and decode the stream manually.
- Detail image: `https://wikibook.co.kr/images/detail/<name>_Detail.jpg`. The remote
  filename may not match the slug (`claude-code` → `claude_code_Detail.jpg`). Save it
  locally as `assets/images/books/<slug>_Detail.jpg`.

#### Finding the original edition

- Publisher pages do not state the original title. Check the example-code GitHub
  repository linked on the page: several READMEs open with `원서 제목: ...`.
- If that repository only documents the sample app, search by author and subject, then
  confirm on the original publisher's own page. Comparing page counts against the
  Korean edition is a useful cross-check.
- Record `original_title` and `original_link` only. The 원서 정보 section renders the
  title and its link, nothing else.

### Field ownership

| Field | Type | Consumed by |
| --- | --- | --- |
| `title`, `subtitle` | string | detail page heading |
| `authors`, `translators` | sequence | detail page contributor line, joined with `·`; `authors` also feeds `books.md` |
| `publisher`, `publisher_link` | string | detail page — the name is the link text |
| `date` | date | detail page, `books.md`, CV |
| `original_title`, `original_link` | string | detail page 원서 정보 section |
| `awards` | sequence of `{title, link}` | badges on `books.md` and the detail page |
| `link` | string | `books.md` and event entries; **must equal the page `permalink`** |
| `authors_en`, `publisher_en` | string | English CV only |
| `series`, `pages`, `dimensions`, `isbn` | string | stored only — deliberately not rendered |

Write sequences in flow style: `authors: [최용, 이승우]`. `_data/reviewed_books.yml`
still stores `authors` as a plain string; Liquid's `join` treats a non-array as a single
element, so both forms render.

Never invent an `authors_en` value. It must come from a stated source such as the
colophon or furigana — do not back-transliterate from the Korean rendering of a
Japanese or English name. Use given-name-first order, matching the existing entries.

## Important Cautions

- Never report that something is absent because an extraction tool did not surface it,
  or because you only read part of a file you had already downloaded. Search the raw
  source, and search the whole downloaded file, before saying a link or a field does
  not exist.
- The same applies in reverse. Do not report that a page, layout, or data file is "in
  use" merely because the wiring exists. Open the data, and check whether anything
  links to the page, before drawing a conclusion. A page can be fully wired, hold real
  content, and still have been deliberately retired by removing its navigation entry.
- When explaining why something was missed, check your own coverage before attributing
  it to a tool limitation.
- Prefer the smallest change that satisfies the request. Propose the minimal version
  first; do not build a general mechanism for a single case.
