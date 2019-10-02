---
layout: page
title: Events
permalink: /events
---

Here you can find all the coming and past activities!

{% for item in site.data.activities %}
    {% include activity.html activity=item %}
{% endfor %}
