---
layout: default
title: Progress Diary
permalink: /technical-lab/progress-diary/
description: Bite-sized regular updates on what I am doing
img:
importance: 6
pagination:
  enabled: true
  collection: progress_diary
  permalink: /page/:num/
  per_page: 10
  sort_field: date
  sort_reverse: true
  trail:
    before: 1
    after: 3
---

<div class="post">
  <div class="header-bar">
    <h1>{{ page.title }}</h1>
    <h2>{{ page.description }}</h2>
  </div>

  <div>
    <br>
    <p>This section is inspired by <a href="https://pracha.me/daybook/">Prabakaran Chandran's Daybook</a>.</p>
  </div>

  <ul class="post-list">
    {% if page.pagination.enabled and paginator.posts %}
      {% assign monthly_progress_diary = paginator.posts %}
    {% else %}
      {% assign monthly_progress_diary = site.progress_diary | sort: "date" | reverse %}
    {% endif %}

    {% assign progress_diary_entry_count = 0 %}
    {% for monthly_log in monthly_progress_diary %}
      {% assign daily_entries = monthly_log.entries | sort: "date" | reverse %}
      {% for diary_entry in daily_entries %}
        {% assign progress_diary_entry_count = progress_diary_entry_count | plus: 1 %}
        {% assign entry_anchor = diary_entry.date | date: "%Y-%m-%d" %}
        {% assign year = diary_entry.date | date: "%Y" %}
        <li>
          <h3>
            <a class="post-title" href="{{ monthly_log.url | relative_url }}#{{ entry_anchor }}">{{ diary_entry.title }}</a>
          </h3>

          {% if diary_entry.summary and diary_entry.summary != "" %}
            <div>{{ diary_entry.summary | markdownify }}</div>
          {% endif %}

          <p class="post-meta">{{ diary_entry.date | date: "%B %d, %Y" }}</p>
          <p class="post-tags">
            <a href="{{ year | prepend: '/technical-lab/field-log/' | relative_url }}">
              <i class="fa-solid fa-calendar fa-sm" aria-hidden="true"></i>
              <span class="sr-only">Entries from</span> {{ year }}
            </a>
            {% if diary_entry.tags and diary_entry.tags.size > 0 %}
              &nbsp; &middot; &nbsp;
              {% for tag in diary_entry.tags %}
                <span><i class="fa-solid fa-hashtag fa-sm" aria-hidden="true"></i>{{ tag }}</span>{% unless forloop.last %}&nbsp;{% endunless %}
              {% endfor %}
            {% endif %}
          </p>
        </li>
      {% endfor %}
    {% endfor %}

    {% if progress_diary_entry_count == 0 %}
      <li><p>No progress diary entries have been published yet.</p></li>
    {% endif %}
  </ul>

  {% if page.pagination.enabled and paginator %}
    {% include pagination.liquid %}
  {% endif %}
</div>
