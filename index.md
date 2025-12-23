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

<!-- Unified News Feed -->

{% assign events = site.data.events %}
{% assign authored = site.data.authored_books %}
{% assign translated = site.data.translated_books %}
{% assign reviewed = site.data.reviewed_books %}

{% assign all_news = events | concat: authored | concat: translated | concat: reviewed | sort: "date" | reverse %}

{% for item in all_news %}
{% if item.show_on_home %}
{% if item.content %}
{% assign title = item.title %}
{% assign date_str = item.date | date: "%Y-%m-%d" %}
{% assign url = "/events/#" | append: date_str %}
{% assign label = "✨ 이벤트" %}
{% elsif item.authors %}
{% if item.link contains "reviewed" or item.role == "review" %}
{% assign label = "🧐 기술검토" %}
{% else %}
{% assign label = "📚 번역" %}
{% endif %}
{% assign title = item.title %}
{% assign url = item.link %}
{% else %}
{% assign label = "📖 저서" %}
{% assign title = item.title %}
{% assign url = item.link %}
{% endif %}

- {{ item.date | date: "%Y-%m-%d" }} <span class="news-label">[{{ label }}]</span> {% if url %}[{{ title }}]({{ url }}){% else %}{{ title }}{% endif %}
  {% endif %}
  {% endfor %}

<style>
.news-label {
    font-size: 0.9em;
    color: #666;
    margin-right: 5px;
    font-weight: bold;
}
</style>
