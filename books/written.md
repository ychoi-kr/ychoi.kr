---
layout: page
title: "저서 목록"
permalink: /books-written/
---

## 저서
{% for book in site.data.books.저서 %}
- [{{ book.title }}]({{ book.link | default: '#' }}), {{ book.publisher }}, {{ book.date }}
{% endfor %}
