---
layout: page
title: Technical Papershelf
permalink: /technical-lab/papershelf/
description: A selected list of research papers I found interesting and informative
img: 
importance: 5
toc:
  sidebar: left
---

{% assign sorted_papers = site.data.papers | sort: "date" | reverse %}

<ul class="card-text font-weight-light list-group list-group-flush">
  {% for papers in sorted_papers %}
  <li class="list-group-item">
    <div class="row">
      <div class="col">
        <h3 class="title font-weight-bold ml-1 ml-md-4" style="font-size: 1rem; margin-bottom: 0.25rem;">
          {{ papers.title }}
        </h3>
        {% if papers.description %}
        <p class="ml-1 ml-md-4" style="font-size: 0.95rem; margin-bottom: 0.5rem; font-style: italic;">
          {{ papers.description }}
        </p>
        {% endif %}
        {% if papers.paper_url %}
          <p class="ml-1 ml-md-4" style="font-size: 0.95rem; margin-bottom: 0.5rem;">
              <a href="{{ papers.paper_url }}" target="_blank" rel="noopener noreferrer">Read Paper</a>
          </p>
        {% endif %}
        {% if papers.notes_url %}
          <p class="ml-1 ml-md-4" style="font-size: 0.95rem; margin-bottom: 0.5rem;">
            <a href="{{ papers.notes_url }}" target="_blank" rel="noopener noreferrer">Read Notes</a>
          </p>
        {% endif %}
        {% if papers.tags %}
        <div class="ml-1 ml-md-4">
          {% for tag in papers.tags %}
            <span class="badge bg-secondary">{{ tag }}</span>
          {% endfor %}
        </div>
        {% endif %}
      </div>
      <div class="col-auto text-right">
        <span class="text-muted" style="font-size: 0.85rem;">{{ papers.date | date: "%b %Y" }}</span>
      </div>
    </div>
  </li>
  {% endfor %}
</ul>
