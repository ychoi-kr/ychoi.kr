## 저서
{% for book in site.data.books.저서 %}
- [{{ book.title }}]({{ book.link | default: '#' }}), {{ book.publisher }}, {{ book.date }}
{% endfor %}

## 역서
{% for book in site.data.books.역서 %}
- [{{ book.title }}]({{ book.link | default: '#' }}), {{ book.publisher }}, {{ book.date }}
{% endfor %}
