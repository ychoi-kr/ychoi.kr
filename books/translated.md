{% for book in site.data.translated_books %}
  - {% if book.link %}[{{ book.title }}]({{ book.link }}){% else %}{{ book.title }}{% endif %}, {{ book.authors }}, {{ book.publisher }}, {{ book.date }}
{% endfor %}
