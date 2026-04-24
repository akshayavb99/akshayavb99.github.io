---
layout: page
title: Articles
description: A selected list of blogs and articles I found interesting and informative
img: 
importance: 5
toc:
  sidebar: left
---

{% assign sorted_articles = site.data.articles | sort: "date" | reverse %}

<ul class="card-text font-weight-light list-group list-group-flush">
  {% for article in sorted_articles %}
  <li class="list-group-item">
    <div class="row">
      <div class="col">
        <h3 class="title font-weight-bold ml-1 ml-md-4" style="font-size: 1rem; margin-bottom: 0.25rem;">
          {{ article.title }}
        </h3>
        {% if article.description %}
        <p class="ml-1 ml-md-4" style="font-size: 0.95rem; margin-bottom: 0.5rem; font-style: italic;">
          {{ article.description }}
        </p>
        {% endif %}
        {% if article.article_url %}
          <p class="ml-1 ml-md-4" style="font-size: 0.95rem; margin-bottom: 0.5rem;">
              <a href="{{ article.article_url }}" target="_blank" rel="noopener noreferrer">Read Article</a>
          </p>
        {% endif %}
        {% if article.notes_url %}
          <p class="ml-1 ml-md-4" style="font-size: 0.95rem; margin-bottom: 0.5rem;">
            <a href="{{ article.notes_url }}" target="_blank" rel="noopener noreferrer">Read Notes</a>
          </p>
        {% endif %}
        {% if article.tags %}
        <div class="ml-1 ml-md-4">
          {% for tag in article.tags %}
            <span class="badge bg-secondary">{{ tag }}</span>
          {% endfor %}
        </div>
        {% endif %}
      </div>
      <div class="col-auto text-right">
        <span class="text-muted" style="font-size: 0.85rem;">{{ article.date | date: "%b %Y" }}</span>
      </div>
    </div>
  </li>
  {% endfor %}
</ul>
