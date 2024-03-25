---
layout: page
title: "GPT"
permalink: /gpts/
---

# GPT

제가 만든 유용한 GPT들입니다. 한번 써보세요!

{% for gpt in site.data.gpts %}
- [{{ gpt.name }}]({% if gpt.intro_link %}{{ gpt.intro_link }}{% else %}{{ gpt.link }}{% endif %}): {{ gpt.description }}
{% endfor %}
