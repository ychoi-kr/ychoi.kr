---
layout: default
title: "책"
permalink: /books/
---

## 저서

{% assign authored_books_sorted = site.data.authored_books | sort: "date" | reverse %}
{% for book in authored_books_sorted %}
  - {% if book.link %}[{{ book.title }}]({{ book.link }}){% else %}{{ book.title }}{% endif %}, {{ book.publisher }}, {{ book.date | date: "%Y년 %m월" | replace: " 0", " " }}
{% endfor %}

## 번역서

{% assign translated_books_sorted = site.data.translated_books | sort: "date" | reverse %}
{% for book in translated_books_sorted %}
  - {% if book.link %}[{{ book.title }}]({{ book.link }}){% else %}{{ book.title }}{% endif %}, {{ book.authors }}, {{ book.publisher }}, {{ book.date | date: "%Y년 %m월" | replace: " 0", " " }}
{% endfor %}

## 기술 검토 및 교정

{% assign reviewed_books_sorted = site.data.reviewed_books | sort: "date" | reverse %}
{% for book in reviewed_books_sorted %}
  - {% if book.link %}[{{ book.title }}]({{ book.link }}){% else %}{{ book.title }}{% endif %}, {{ book.authors }}, {{ book.publisher }}, {{ book.date | date: "%Y년 %m월" | replace: " 0", " " }}
{% endfor %}
