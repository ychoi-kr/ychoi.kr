---
layout: page
title: "앱"
permalink: /apps/
---

# 앱

제가 만든 유용한 프로그램들입니다. 한번 써보세요!

{% for app in site.data.apps %}
- [{{ app.name }}]({{ app.link }}){% if app.github %} ([GitHub]({{ app.github }})){% endif %}: {{ app.description }}
{% endfor %}
