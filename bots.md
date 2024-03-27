---
layout: page
title: "GPT"
permalink: /bots/
---

# 챗봇

🤖 제가 만든 유용한 챗봇입니다. 한번 써보세요!

{% for gpt in site.data.gpts %}
- [{{ gpt.name }}]({{ gpt.link }}){% if gpt.intro_link %} ([소개]({{ gpt.intro_link }})){% endif %}: {{ gpt.description }}
{% endfor %}
