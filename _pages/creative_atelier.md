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
---

## Recent Creative Atelier Activity

{% assign all_items = "" | split: "" %}

{% if site.data.creative_books and site.data.creative_books.size > 0 %}
  {% assign all_items = all_items | concat: site.data.creative_books %}
{% endif %}

{% if site.data.creative_papers and site.data.creative_papers.size > 0 %}
  {% assign all_items = all_items | concat: site.data.creative_papers %}
{% endif %}

{% assign sorted_items = all_items | sort: "date" | reverse %}
{% assign latest_items = sorted_items | slice: 0,5 %}

{% if latest_items.size > 0 %}
  <ul class="card-text font-weight-light list-group list-group-flush">
    {% for item in latest_items %}
      <li class="list-group-item">
        <div class="row">
          <div class="col px-0">
            <h3 class="title font-weight-bold" style="font-size: 1rem; margin-bottom: 0.25rem;">
              {{ item.type | default: "item" | capitalize }} - {{ item.title }}
            </h3>
            {% if item.author %}
              <p class="text-muted" style="font-size: 0.9rem; margin-bottom: 0.4rem;">
                {{ item.author }}
              </p>
            {% endif %}
            <div style="font-size: 0.9rem; margin-bottom: 0.3rem;">
              {% if item.book_url and item.book_url != "" %}
                <a href="{{ item.book_url }}" target="_blank" rel="noopener noreferrer" style="margin-right: 10px;">Book</a>
              {% endif %}
              {% if item.paper_url and item.paper_url != "" %}
                <a href="{{ item.paper_url }}" target="_blank" rel="noopener noreferrer" style="margin-right: 10px;">Read Paper</a>
              {% endif %}
              {% if item.source_url and item.source_url != "" %}
                <a href="{{ item.source_url }}" target="_blank" rel="noopener noreferrer" style="margin-right: 10px;">Source</a>
              {% endif %}
              {% if item.notes_url and item.notes_url != "" %}
                <a href="{{ item.notes_url }}" target="_blank" rel="noopener noreferrer">Read Notes</a>
              {% endif %}
            </div>
          </div>
          <div class="col-auto text-right px-0">
            <span class="text-muted" style="font-size: 0.85rem;">
              {{ item.date | date: "%b %d, %Y" }}
            </span>
          </div>
        </div>
      </li>
    {% endfor %}
  </ul>
{% else %}
  <p class="text-muted">No creative atelier entries added yet.</p>
{% endif %}
