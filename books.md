---
layout: default
title: "책"
permalink: /books/
---

## 저서

{% assign authored_books_sorted = site.data.authored_books | sort: "date" | reverse %}
{% for book in authored_books_sorted %}

- {% if book.link %}[{{ book.title }}]({{ book.link }}){% else %}{{ book.title }}{% endif %}, {{ book.publisher }}, {{ book.date | date: "%Y년 %m월" | replace: " 0", " " }}{% if book.awards %}{% for award in book.awards %}{% if award.link %}<a class="book-award-badge" href="{{ award.link }}">🏆 {{ award.title }}</a>{% else %}<span class="book-award-badge">🏆 {{ award.title }}</span>{% endif %}{% endfor %}{% endif %}
  {% endfor %}

## 온라인북

위키독스에 공개한 온라인 책 중 대표작입니다.

- [왕초보를 위한 Python](https://wikidocs.net/book/2), [전뇌해커](https://wikidocs.net/profile/info/book/4)
- [Hermes Agent](https://wikidocs.net/book/19414), [채찍피티](https://wikidocs.net/profile/info/book/30607) (AI 생성)

## 번역서

{% assign translated_books_sorted = site.data.translated_books | sort: "date" | reverse %}
{% for book in translated_books_sorted %}

- {% if book.link %}[{{ book.title }}]({{ book.link }}){% else %}{{ book.title }}{% endif %}, {{ book.authors }}, {{ book.publisher }}, {{ book.date | date: "%Y년 %m월" | replace: " 0", " " }}{% if book.awards %}{% for award in book.awards %}{% if award.link %}<a class="book-award-badge" href="{{ award.link }}">🏆 {{ award.title }}</a>{% else %}<span class="book-award-badge">🏆 {{ award.title }}</span>{% endif %}{% endfor %}{% endif %}
  {% endfor %}

## 기술 검토 및 교정

{% assign reviewed_books_sorted = site.data.reviewed_books | sort: "date" | reverse %}
{% for book in reviewed_books_sorted %}

- {% if book.link %}[{{ book.title }}]({{ book.link }}){% else %}{{ book.title }}{% endif %}, {{ book.authors }}, {{ book.publisher }}, {{ book.date | date: "%Y년 %m월" | replace: " 0", " " }}{% if book.awards %}{% for award in book.awards %}{% if award.link %}<a class="book-award-badge" href="{{ award.link }}">🏆 {{ award.title }}</a>{% else %}<span class="book-award-badge">🏆 {{ award.title }}</span>{% endif %}{% endfor %}{% endif %}
  {% endfor %}
