## 저서

{% for book in site.data.authored_books %}
  - {% if book.link %}[{{ book.title }}]({{ book.link }}){% else %}{{ book.title }}{% endif %}, {{ book.publisher }}, {{ book.date }}
{% endfor %}

## 역서

{% for book in site.data.translated_books %}
  - {% if book.link %}[{{ book.title }}]({{ book.link }}){% else %}{{ book.title }}{% endif %}, {{ book.authors }}, {{ book.publisher }}, {{ book.date }}
{% endfor %}

## 기술 검토 및 교정

{% for book in site.data.reviewed_books %}
  - {% if book.link %}[{{ book.title }}]({{ book.link }}){% else %}{{ book.title }}{% endif %}, {{ book.authors }}, {{ book.publisher }}, {{ book.date }}
{% endfor %}
