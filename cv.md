---
layout: default
title: "이력서"
permalink: /cv/
---

# 이력서

## 개인 정보
- 이름: 최용(Yong Choi)
- 연락처: [ychoi_kr@naver.com](mailto:ychoi_kr@naver.com)
- 홈페이지: [https://ychoi.kr/](https://ychoi.kr/)

## 학력
- 2023~현재, 서울사이버대학교 드론·로봇융합학과
- 1999~2004, 한국방송통신대학교 컴퓨터과학과, 이학사

## 경력
- 2020~현재, IT 서적 기술 검토, 교정
- 2016~2021, 피겨 스케이팅 강사
- 2007~2016, 주식회사 에이엠앤씨, 소프트웨어 컨설턴트
- 2001~2007, KB국민은행 전산실 운영(외주)
- 1996~2000, 대한민국공군, 항공정비 부사관

## 프로젝트

### 앱

{% for app in site.data.apps %}
- [{{ app.name }}]({% if app.intro_link %}{{ app.intro_link }}{% else %}{{ app.link | default: app.github }}{% endif %}){% if app.github %} ([GitHub]({{ app.github }})){% endif %}: {{ app.description }} (기술 스택: {{ app.tech | join: ', ' }})
{% endfor %}

### 채팅 봇

{% for bot in site.data.bots %}
- [{{ bot.name }}]({{ bot.link }}){% if bot.intro_link %} ([소개]({{ bot.intro_link }})){% endif %}: {{ bot.description }}
{% endfor %}

## 저서

{% for book in site.data.authored_books %}
  - {% if book.link %}[{{ book.title }}]({{ book.link }}){% else %}{{ book.title }}{% endif %}, {{ book.publisher }}, {{ book.date }}
{% endfor %}

## 번역서

{% for book in site.data.translated_books %}
  - {% if book.link %}[{{ book.title }}]({{ book.link }}){% else %}{{ book.title }}{% endif %}, {{ book.authors }}, {{ book.publisher }}, {{ book.date }}
{% endfor %}
