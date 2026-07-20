---
layout: page
title: Technical Papershelf
permalink: /technical-lab/papershelf/
description: A selected list of research papers, blogs and articles I found interesting and informative
img: 
importance: 5
toc:
  sidebar: left
---

{% assign sorted_papers = site.data.papers | sort: "date" | reverse %}

<fieldset class="resource-filters" data-resource-filters>
  <legend class="resource-filters__legend">Filter by resource type</legend>
  <div class="resource-filters__controls">
    <button class="resource-filters__button" type="button" data-resource-filter="all" aria-pressed="true">All</button>
    <button class="resource-filters__button" type="button" data-resource-filter="paper" aria-pressed="false">Papers</button>
    <button class="resource-filters__button" type="button" data-resource-filter="article" aria-pressed="false">Articles</button>
  </div>
  <p class="resource-filters__status" data-resource-filter-status role="status" aria-live="polite"></p>
</fieldset>

<ul class="card-text font-weight-light list-group list-group-flush" data-resource-list>
  {% for papers in sorted_papers %}
  {% assign resource_url = papers.blog_url | default: papers.article_url | default: papers.paper_url %}
  {% assign resource_type = papers.type | downcase %}
  {% if resource_type == "blog" %}
    {% assign resource_label = "Read Blog" %}
    {% assign filter_type = "article" %}
  {% elsif resource_type == "paper" or resource_type == "research paper" %}
    {% assign resource_label = "Read Paper" %}
    {% assign filter_type = "paper" %}
  {% else %}
    {% assign resource_label = "Read Article" %}
    {% assign filter_type = "article" %}
  {% endif %}
  <li class="list-group-item" data-resource-type="{{ filter_type }}">
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
        {% if resource_url %}
          <p class="ml-1 ml-md-4" style="font-size: 0.95rem; margin-bottom: 0.5rem;">
              <a href="{{ resource_url }}" target="_blank" rel="noopener noreferrer">{{ resource_label }}</a>
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

<script defer src="{{ '/assets/js/technical-papershelf-filter.js' | relative_url | bust_file_cache }}"></script>
