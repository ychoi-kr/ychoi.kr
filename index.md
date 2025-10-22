---
layout: default
title: 홈
permalink: /
---

![프로필 사진](/assets/images/profile.png){: style="display: block; width: 250px; margin-left: 0; border-radius: 10px;"}

안녕하세요, 최용(전뇌해커)입니다.👋  
**IT 전문 서적 기술 감수자, 번역가, 저자**로 활동하며, LLM(대규모 언어 모델)과 AI 기술을 활용한 애플리케이션 개발에도 관심을 두고 있습니다.  
또한, 드론 및 로봇 융합 기술을 연구하며, 관련 프로젝트를 수행하고 있습니다.  

## 🔗 주요 작업  
- 📄 [이력서 (CV)](/cv/)  
- 📚 [저서 및 번역서](/books/)  
- 🛠️ [개발한 앱 및 프로젝트](/apps/)  
- 🤖 [커스텀 챗봇](/bots/)  

## 📝 새 소식

**📖 저서**
{% assign authored_books_sorted = site.data.authored_books | sort: "date" | reverse %}
{% for book in authored_books_sorted limit:1 %}
  - {% if book.link %}**[{{ book.title }}]({{ book.link }})**{% else %}**{{ book.title }}**{% endif %}, {{ book.publisher }}, {{ book.date | date: "%Y년 %m월" | replace: " 0", " " }}
{% endfor %}

**📚 번역서**
{% assign translated_books_sorted = site.data.translated_books | sort: "date" | reverse %}
{% for book in translated_books_sorted limit:2 %}
  - {% if book.link %}**[{{ book.title }}]({{ book.link }})**{% else %}**{{ book.title }}**{% endif %}, {{ book.authors }}, {{ book.publisher }}, {{ book.date | date: "%Y년 %m월" | replace: " 0", " " }}
{% endfor %}

**🧐 기술 검토 및 교정 도서**
{% assign reviewed_books_sorted = site.data.reviewed_books | sort: "date" | reverse %}
{% for book in reviewed_books_sorted limit:3 %}
  - {% if book.link %}**[{{ book.title }}]({{ book.link }})**{% else %}**{{ book.title }}**{% endif %}, {{ book.authors }}, {{ book.publisher }}, {{ book.date | date: "%Y년 %m월" | replace: " 0", " " }}
{% endfor %}

<br>
[**전체 도서 목록 보기 →**](/books/)