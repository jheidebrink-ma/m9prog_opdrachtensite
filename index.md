---
layout: home
title: Home
nav_order: 0
has_toc: true
---

# WordPress - {{ page.title }}

Op deze website vind je de opdrachten voor de unit M5PROG waarbij wij een custom thema voor WordPress gaan ontwikkelen.

---

## Opdrachten en uitleg

{% for lesson in site.data.lessons %}
{% assign today = "now"|date:"%Y%m%d" %}
{% assign lesson_date = lesson.datum|date:"%Y%m%d" %}

{% if lesson_date <= today or site.bap.skip_date_check%}
## Les {{ lesson.number }}:  {{ lesson.title }}
{: .text-blue-100 :}

{{ lesson.description }}

[Start](les-{{ lesson.number }} ){: .btn .btn-blue }
{% else %}
## Les {{ lesson.number }}:  {{ lesson.title }}
{: .text-grey-dk-000 :}

Deze les komt binnenkort online. 
<small>Vanaf {{ lesson.datum|date:"%d-%m-%Y" }} online </small>
{% endif %}
---

{% endfor %}
