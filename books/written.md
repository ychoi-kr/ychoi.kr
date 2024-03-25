---
layout: page
title: "저서 목록"
permalink: /books-written/
---

## 저서

{% for book in site.data.authored_books %}
  - {{ book.title }}, {{ book.publisher }}, {{ book.date }}
{% endfor %}
