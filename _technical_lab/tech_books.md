---
layout: page
title: Technical Bookshelf
permalink: /technical-lab/bookshelf/
description: Selected list of technical books and what I learned from them
img: 
importance: 2
category: 
toc:
  sidebar: left
---

{% assign sorted_books = site.data.tech_books | sort: "date" | reverse %}

{% assign year = "" %}

<div class="book-shelf">
  {% for book in sorted_books %}
    {% assign current_year = book.date | date: "%Y" %}
    {% if current_year != year %}
      {% unless forloop.first %}
        </div>
      {% endunless %}
      <h1 id="y{{ current_year }}">{{ current_year }}</h1>
      <div class="technical-book-grid">
      {% assign year = current_year %}
    {% endif %}

    {% assign status = book.status | default: "uncategorized" | downcase | strip %}
    {% if status == "in progress" %}
      {% assign status_class = "reading" %}
      {% assign status_label = "READING" %}
    {% else %}
      {% assign statuses = "abandoned,finished,interested,paused,queued,reading,reread" | split: "," %}
      {% if statuses contains status %}
        {% assign status_class = status %}
        {% assign status_label = status | upcase %}
      {% else %}
        {% assign status_class = "uncategorized" %}
        {% assign status_label = "UNCATEGORIZED" %}
      {% endif %}
    {% endif %}

    {% assign primary_url = "" %}
    {% if book.notes_url and book.notes_url != "" %}
      {% assign primary_url = book.notes_url %}
    {% elsif book.book_url and book.book_url != "" %}
      {% assign primary_url = book.book_url %}
    {% elsif book.url and book.url != "" %}
      {% assign primary_url = book.url %}
    {% endif %}

    <div class="technical-book-item">
      <figure class="cover">
        <a
          class="cover-link"
          href="{{ primary_url | default: '#' }}"
          {% if primary_url != "" %}
            target="_blank" rel="noopener noreferrer"
          {% endif %}
        >
          {% if book.cover %}
            <img alt="{{ book.title }} cover" src="{{ book.cover | relative_url }}" style="height:200px">
          {% elsif book.olid %}
            <img alt="{{ book.title }} cover" src="http://covers.openlibrary.org/b/olid/{{ book.olid }}-L.jpg?default=false" style="height:200px">
          {% elsif book.isbn %}
            <img alt="{{ book.title }} cover" src="http://covers.openlibrary.org/b/isbn/{{ book.isbn }}-L.jpg?default=false" style="height:200px">
          {% else %}
            <div class="technical-book-placeholder" aria-label="{{ book.title }} cover placeholder">
              <span>{{ book.title }}</span>
            </div>
          {% endif %}
          <figcaption class="{{ status_class }}">{{ status_label }}</figcaption>
        </a>
      </figure>

      <div class="technical-book-meta">
        <h3 class="title font-weight-bold">{{ book.title }}</h3>
        {% if book.author %}
          <p class="technical-book-author">{{ book.author }}</p>
        {% endif %}
        {% if book.description %}
          <p>{{ book.description }}</p>
        {% endif %}
        <p class="text-muted">{{ book.date | date: "%b %Y" }}</p>
        <div class="technical-book-links">
          {% if book.book_url and book.book_url != "" %}
            <a href="{{ book.book_url }}" target="_blank" rel="noopener noreferrer">Book</a>
          {% endif %}
          {% if book.notes_url and book.notes_url != "" %}
            <a href="{{ book.notes_url }}" target="_blank" rel="noopener noreferrer">Read Notes</a>
          {% endif %}
        </div>
        {% if book.tags %}
          <div>
            {% for tag in book.tags %}
              <span class="badge bg-secondary">{{ tag }}</span>
            {% endfor %}
          </div>
        {% endif %}
      </div>
    </div>

    {% if forloop.last %}
      </div>
    {% endif %}
  {% endfor %}
</div>

<style>
  .technical-book-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .technical-book-item {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
  }

  .technical-book-item figure.cover {
    flex: 0 0 auto;
    margin-left: 0;
  }

  .technical-book-placeholder {
    align-items: center;
    background: var(--global-card-bg-color);
    border: 1px solid var(--global-divider-color);
    color: var(--global-text-color);
    display: flex;
    height: 200px;
    justify-content: center;
    padding: 0.75rem;
    text-align: center;
    width: 132px;
  }

  .technical-book-placeholder span {
    font-size: 0.9rem;
    font-weight: 600;
    line-height: 1.25;
  }

  .technical-book-meta h3 {
    font-size: 1rem;
    margin-bottom: 0.25rem;
  }

  .technical-book-author {
    color: #888;
    font-size: 0.95rem;
    font-style: italic;
    margin-bottom: 0.25rem;
  }

  .technical-book-meta p {
    font-size: 0.95rem;
    margin-bottom: 0.5rem;
  }

  .technical-book-links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    font-size: 0.95rem;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 575.98px) {
    .technical-book-item {
      display: block;
    }
  }
</style>
