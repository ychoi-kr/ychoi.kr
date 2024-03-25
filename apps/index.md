---
layout: page
title: "앱"
permalink: /apps/
---

# 앱

제가 만든 유용한 프로그램들입니다. 한번 써보세요!

{% for app in site.data.apps %}
- [{{ app.name }}]({% if app.intro_link %}{{ app.intro_link }}{% else %}{{ app.link }}{% endif %}){% if app.github %} ([GitHub]({{ app.github }})){% endif %}: {{ app.description }} (기술 스택: {{ app.tech | join: ', ' }})
{% endfor %}
