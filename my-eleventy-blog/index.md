---
layout: layout.njk
title: "Deryprativi Directory"
---

# Deryprativi Directory

_Welcome to my corner of the web_

---

{% for post in collections.post | reverse %}
📂 [{{ post.data.title }}]({{ post.url }}) <small>({{ post.date | date: "%d %B %Y" }})</small>
{% endfor %}
