---
layout: page
title: Creative Atelier
permalink: /creative-atelier/
description: >
  Non-technical books, papers, essays, and external material I have consumed.
nav: true
nav_order: 6
dropdown: true
children:
  - title: Overview
    permalink: /creative-atelier/
  - title: Creative Bookshelf
    permalink: /creative-atelier/bookshelf/
horizontal: false
---

<link rel="stylesheet" href="{{ '/assets/css/custom.css' | relative_url }}">

## Recent Creative Atelier Activity

{% comment %}
  Build array of only existing data sources
{% endcomment %}
{% assign all_items = "" | split: "" %}

{% if site.data.creative_books %}
  {% assign all_items = all_items | concat: site.data.creative_books %}
{% endif %}

{% if site.data.creative_papers %}
  {% assign all_items = all_items | concat: site.data.creative_papers %}
{% endif %}

{% assign sorted_items = all_items | sort: "date" | reverse %}
{% assign latest_three = sorted_items | slice: 0,3 %}

<ul class="card-text font-weight-light list-group list-group-flush">

  {% for item in latest_three %}
  {% if item.title %}

  <li class="list-group-item">
    <div class="row">

      <!-- Left content -->
      <div class="col px-0">

        <!-- Title with type -->
        <h3 class="title font-weight-bold"
            style="font-size: 1rem; margin-bottom: 0.25rem;">
          {{ item.type | capitalize }} &mdash; {{ item.title }}
        </h3>

        <!-- Optional update text -->
        {% if item.latest_update_text %}
          <p class="text-muted"
             style="font-size: 0.9rem; margin-bottom: 0.4rem;">
            <small>{{ item.latest_update_text }}</small>
          </p>
        {% endif %}

        <!-- Links -->
        <div style="font-size: 0.9rem; margin-bottom: 0.3rem;">

          {% if item.book_url %}
            <a href="{{ item.book_url }}" target="_blank" style="margin-right: 10px;">Book Link</a>
          {% endif %}

          {% if item.paper_url %}
            <a href="{{ item.paper_url }}" target="_blank" style="margin-right: 10px;">Read Paper</a>
          {% endif %}

          {% if item.source_url %}
            <a href="{{ item.source_url }}" target="_blank" style="margin-right: 10px;">Source</a>
          {% endif %}

          {% if item.notes_url %}
            <a href="{{ item.notes_url }}" target="_blank">Read Notes</a>
          {% endif %}

        </div>

      </div>

      <!-- Right date -->
      <div class="col-auto text-right px-0">
        <span class="text-muted" style="font-size: 0.85rem;">
          {{ item.date | date: "%b %d, %Y" }}
        </span>
      </div>

    </div>
  </li>

  {% endif %}
  {% endfor %}

</ul>

---
<br>

## Groups


<div class="projects">

  {% if page.horizontal %}

    <div class="container">
      <div class="row row-cols-1 row-cols-md-2">
        {% assign sorted_creative_atelier = site.creative_atelier | sort: "importance" %}
        {% for project in sorted_creative_atelier %}
          {% include projects_horizontal.liquid %}
        {% endfor %}
      </div>
    </div>

  {% else %}

    {% assign sorted_creative_atelier = site.creative_atelier | sort: "importance" %}
    <div class="row row-cols-1 row-cols-md-3">
      {% for project in sorted_creative_atelier %}
        {% include projects.liquid %}
      {% endfor %}
    </div>

  {% endif %}

</div>
