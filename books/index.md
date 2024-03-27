## 저서

{% for book in site.data.authored_books %}
  - {% if book.link %}[{{ book.title }}]({{ book.link }}){% else %}{{ book.title }}{% endif %}, {{ book.publisher }}, {{ book.date }}
{% endfor %}

## 역서

{% for book in site.data.translated_books %}
  - {% if book.link %}[{{ book.title }}]({{ book.link }}){% else %}{{ book.title }}{% endif %}, {{ book.authors }}, {{ book.publisher }}, {{ book.date }}
{% endfor %}

## 기술 검토 및 교정

[예스24 리스트](https://sarak.yes24.com/blog/sk8erchoi/list-view/10608553)
