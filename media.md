---
layout: page
title: "Media"
permalink: /media/
---

# 미디어

제 활동이 미디어에 소개된 내용들입니다.

{% for item in site.data.media %}
- [{{ item.title }}]({{ item.link }}) - {{ item.source }}, {{ item.date | date: "%Y년 %m월 %d일" }}
{% endfor %}
