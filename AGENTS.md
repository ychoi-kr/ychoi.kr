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

- Use whichever targeted edit mechanism your tooling provides, and prefer a surgical edit over rewriting a whole file.
- Whatever the mechanism, it must preserve UTF-8 without BOM. Shell redirection and several PowerShell cmdlets do not.
- If you had to fall back to a shell command instead of a dedicated edit tool, re-open the file afterwards and verify the exact edited lines.
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

### Creating a book detail page

Book pages live at `books/<slug>.md` with `permalink: /books/<slug>/` and `layout: book`.

**The title is not written in the Markdown.** `_layouts/book.html` looks up `site.data.translated_books` by `page.permalink` and renders `<h1>` and `.book-subtitle` from the data entry, then appends the 원서 정보 section. A page whose `permalink` does not exactly match a data `link` renders with no title at all, and the build still succeeds — so always open the rendered page.

Body order: metadata list (`홈페이지`, `발행`), `## 소개`, publisher copy, any `★ ... ★` lists, then `**도서 상세 이미지**` and the image.

#### Fetching publisher content

- Fetch the raw HTML and read it directly: `Invoke-WebRequest -UseBasicParsing`, then decode `RawContentStream` as UTF-8. Subtitle, blurb, bullet lists, and example-code GitHub links are all in the static HTML — none of it is loaded by JavaScript.
- `<meta property="og:title">` holds `제목: 부제`. It is the most reliable source for `subtitle`.
- Do not use WebFetch for copy that must be verbatim; it passes the page through a summarizing model and rewrites sentences even when asked to quote.
- Tavily Extract (`TAVILY_API_KEY`) returns readable Markdown but is lossy: `extract_depth: "basic"` has silently dropped the subtitle and bullet lists. It is a convenience, not the source of truth. In PowerShell 5.1, `Invoke-RestMethod` mangles its UTF-8 — use `Invoke-WebRequest` and decode the stream manually.
- Detail image: `https://wikibook.co.kr/images/detail/<name>_Detail.jpg`. The remote filename may not match the slug (`claude-code` → `claude_code_Detail.jpg`). Save it locally as `assets/images/books/<slug>_Detail.jpg`.

#### Finding the original edition

- Publisher pages do not state the original title. Check the example-code GitHub repository linked on the page: several READMEs open with `원서 제목: ...`.
- If that repository only documents the sample app, search by author and subject, then confirm on the original publisher's own page. Comparing page counts against the Korean edition is a useful cross-check.
- Record `original_title` and `original_link` only. The 원서 정보 section renders the title and its link, nothing else.

#### Field ownership

| Field | Consumed by |
| --- | --- |
| `title`, `subtitle` | book detail page heading |
| `original_title`, `original_link` | book detail page 원서 정보 section |
| `authors_en`, `publisher_en` | English CV only |
| `awards` | award badges on `books.md` |
| `link` | `books.md` and event entries; must equal the page `permalink` |

Never invent an `authors_en` value. It must come from a stated source such as the colophon or furigana — do not back-transliterate from the Korean rendering of a Japanese or English name. Use given-name-first order, matching the existing entries.

## Important Cautions

- Do not rely only on an insertion anchor when modifying YAML files automatically. Re-check the final position in the file.
- Jekyll may tolerate Liquid mistakes without failing the build, so rendered HTML must be inspected.
- If a page suddenly starts appearing in `_site` as a copied `.md` file instead of a rendered page, check for BOM or broken front matter first.
- Never report that something is absent because an extraction tool did not surface it, or because you only read part of a file you had already downloaded. Search the raw HTML, and search the whole downloaded file, before saying a link or a field does not exist.
- The same applies in reverse. Do not report that a page, layout, or data file is "in use" merely because the wiring exists. Open the data, and check whether anything links to the page, before drawing a conclusion. A page can be fully wired, hold real content, and still have been deliberately retired by removing its navigation entry.
- When explaining why something was missed, check your own coverage before attributing it to a tool limitation.