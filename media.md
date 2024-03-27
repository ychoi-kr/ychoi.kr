---
layout: default
title: "미디어"
permalink: /media/
---

# 미디어

`:newspaper:` 언론에 제가 소개되었어요!

{% for item in site.data.media %}
- [{{ item.title }}]({{ item.link }}) - {{ item.source }}, {{ item.date | date: "%Y년 %m월 %d일" }}
{% endfor %}
