## 저서

{% for book in site.data.books.저서 %}
- {{ book.title }}, {{ book.publisher }}, {{ book.date }}
{% endfor %}

## 역서

{% for book in site.data.books.역서 %}
- {% if book.link %}[{{ book.title }}]({{ book.link }}){% else %}{{ book.title }}{% endif %}, {{ book.authors }}, {{ book.publisher }}, {{ book.date }}
{% endfor %}
