---
layout: default
title: "Press"
permalink: /press/
---

# 미디어

📰 언론에 제가 소개되었어요!

{% for item in site.data.press %}

- [{{ item.title }}]({{ item.link }}) - {{ item.source }}, {{ item.date | date: "%Y년 %m월 %d일" | replace: " 0", " " }}
  {% endfor %}
