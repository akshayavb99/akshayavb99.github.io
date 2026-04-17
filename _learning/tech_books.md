---
layout: page
title: Books
description: Selected list of technical books and what I learned from them
img: 
importance: 2
category: 
toc:
  sidebar: left
---

{% assign sorted_books = site.data.tech_books | sort: "date" | reverse %}

<ul class="card-text font-weight-light list-group list-group-flush">
  {% for book in sorted_books %}
  <li class="list-group-item">
    <div class="row">
      <div class="col">
        <h3 class="title font-weight-bold ml-1 ml-md-4" style="font-size: 1rem; margin-bottom: 0.25rem;">
          {{ forloop.index }}.
          {% if book.url %}
            <a href="{{ book.url }}" target="_blank" rel="noopener noreferrer">{{ book.title }}</a>
          {% else %}
            {{ book.title }}
          {% endif %}
        </h3>
        {% if book.author %}
        <p class="ml-1 ml-md-4" style="font-size: 0.95rem; font-style: italic; color: #888; margin-bottom: 0.25rem;">
          {{ book.author }}
        </p>
        {% endif %}
        {% if book.description %}
        <p class="ml-1 ml-md-4" style="font-size: 0.95rem; margin-bottom: 0.5rem;">
          {{ book.description }}
        </p>
        {% endif %}
        {% if book.book_url %}
          <p class="ml-1 ml-md-4" style="font-size: 0.95rem; margin-bottom: 0.5rem;">
            <a href="{{ book.book_url }}" target="_blank" rel="noopener noreferrer">Book</a>
          </p>
        {% endif %}
        {% if book.notes_url %}
          <p class="ml-1 ml-md-4" style="font-size: 0.95rem; margin-bottom: 0.5rem;">
            <a href="{{ book.notes_url }}" target="_blank" rel="noopener noreferrer">Read Notes</a>
          </p>
        {% endif %}
        {% if book.tags %}
        <div class="ml-1 ml-md-4">
          {% for tag in book.tags %}
            <span class="badge bg-secondary">{{ tag }}</span>
          {% endfor %}
        </div>
        {% endif %}
      </div>
      <div class="col-auto text-right">
        <span class="text-muted" style="font-size: 0.85rem;">{{ book.date | date: "%b %Y" }}</span>
      </div>
    </div>
  </li>
  {% endfor %}
</ul>
