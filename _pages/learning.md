---
layout: page
title: Learning
permalink: /learning/
description: >
  A page to show what I have been studying. 
  This page is still being built!
nav: true
nav_order: 4
horizontal: false
---

<link rel="stylesheet" href="{{ '/assets/css/custom.css' | relative_url }}">

## Recent Learning Activity

{% comment %}
  Build array of only existing data sources
{% endcomment %}
{% assign all_items = "" | split: "" %}

{% if site.data.tech_books %}
  {% assign all_items = all_items | concat: site.data.tech_books %}
{% endif %}

{% if site.data.courses %}
  {% assign all_items = all_items | concat: site.data.courses %}
{% endif %}

{% if site.data.certifications %}
  {% assign all_items = all_items | concat: site.data.certifications %}
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
          {{ item.type | capitalize }} — {{ item.title }}
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
            <a href="{{ item.book_url }}" target="_blank" style="margin-right: 10px;">Book</a>
          {% endif %}

          {% if item.course_url %}
            <a href="{{ item.course_url }}" target="_blank" style="margin-right: 10px;">Course</a>
          {% endif %}

          {% if item.paper_url %}
            <a href="{{ item.paper_url }}" target="_blank" style="margin-right: 10px;">Paper</a>
          {% endif %}

          {% if item.article_url %}
            <a href="{{ item.article_url }}" target="_blank" style="margin-right: 10px;">Article</a>
          {% endif %}

          {% if item.certificate_url %}
            <a href="{{ item.certificate_url }}" target="_blank" style="margin-right: 10px;">View Certificate</a>
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
        {% assign sorted_learning = site.learning | sort: "importance" %}
        {% for project in sorted_learning %}
          {% include projects_horizontal.liquid %}
        {% endfor %}
      </div>
    </div>

  {% else %}

    {% assign sorted_learning = site.learning | sort: "importance" %}
    <div class="row row-cols-1 row-cols-md-3">
      {% for project in sorted_learning %}
        {% include projects.liquid %}
      {% endfor %}
    </div>

  {% endif %}

</div>