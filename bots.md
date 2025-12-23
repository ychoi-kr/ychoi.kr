---
layout: default
title: "채팅 봇(GPTs)"
permalink: /bots
---

# 챗봇(GPTs)

🤖 제가 만든 유용한 챗봇입니다. 한번 써보세요!

{% for bot in site.data.gpts %}

- [{{ bot.name }}]({{ bot.link }}){% if bot.intro_link %} ([소개]({{ bot.intro_link }})){% endif %}: {{ bot.description }}
  {% endfor %}
