---
layout: page
title: "역서 목록"
permalink: /books-translated/
---

## 역서
{% for book in site.data.books.역서 %}
- [{{ book.title }}]({{ book.link | default: '#' }}), {{ book.publisher }}, {{ book.date }}
{% endfor %}
